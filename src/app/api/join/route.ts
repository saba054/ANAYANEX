// Server: API route to handle job applications and store them in Supabase

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";

export const runtime = 'nodejs';

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
const bucketName = process.env.SUPABASE_BUCKET || "resumes";

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// File: route.ts (POST and GET handlers)
export async function POST(req: Request) {
  try {
    // Validate Supabase credentials early (avoid undefined client causing runtime errors)
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { ok: false, error: "Supabase credentials are not configured. Ensure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in .env.local." },
        { status: 500 }
      );
    }

    // Detect if SUPABASE_SERVICE_ROLE_KEY is actually an anon key and fail fast
    try {
      const parts = supabaseServiceKey.split(".");
      if (parts.length === 3) {
        const payloadJson = Buffer.from(parts[1], "base64").toString("utf-8");
        const payload = JSON.parse(payloadJson);
        const role = payload.role;
        if (role !== "service_role") {
          return NextResponse.json(
            { ok: false, error: "Provided SUPABASE_SERVICE_ROLE_KEY appears to be an anon key. Use the Service Role Key from Supabase Project Settings → API." },
            { status: 500 }
          );
        }
      }
    } catch {
      // If token parsing fails, continue; subsequent ops will surface clear errors.
    }
  
    // Helper: ensure the storage bucket exists (requires Service Role Key)
    const ensureBucketExists = async () => {
      const { data: bucketInfo, error: getError } = await supabase.storage.getBucket(bucketName);
      if (getError && !/not found|does not exist/i.test(getError.message)) {
        throw new Error(`Storage getBucket error: ${getError.message}`);
      }
      if (!bucketInfo) {
        const { error: createError } = await supabase.storage.createBucket(bucketName, { public: true });
        if (createError) {
          throw new Error(`Storage bucket "${bucketName}" not found and could not be created: ${createError.message}`);
        }
      }
    };
  
    const contentType = req.headers.get("content-type") || "";
  
    let name = "";
    let email = "";
    let phone = "";
    let position = "";
    let linkedin = "";
    let portfolio = "";
    let cover_letter = "";
    let resume_url: string | undefined;
  
    const uploadToStorage = async (buffer: Uint8Array, filename: string, mime: string) => {
      await ensureBucketExists();
      const ext = filename.split(".").pop() || "file";
      const path = `resumes/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const upload = await supabase.storage.from(bucketName).upload(path, buffer, {
        upsert: false,
        contentType: mime || "application/octet-stream",
      });
      if (upload.error) {
        throw new Error(`Storage upload failed: ${upload.error.message}`);
      }
      const pub = supabase.storage.from(bucketName).getPublicUrl(path);
      return pub.data.publicUrl;
    };

    if (contentType.includes("application/json")) {
      // JSON fallback: either provide resume_url directly or base64 for the file
      const json = await req.json();

      name = String(json.name || "").trim();
      email = String(json.email || "").trim();
      phone = String(json.phone || "").trim();
      position = String(json.position || "").trim();
      linkedin = String(json.linkedin || "").trim();
      portfolio = String(json.portfolio || "").trim();
      // accept both "coverLetter" and "cover_letter"
      cover_letter = String(json.coverLetter ?? json.cover_letter ?? "").trim();

      if (json.resume_url) {
        resume_url = String(json.resume_url);
      } else if (json.resumeBase64 && json.resumeName && json.resumeType) {
        // Accept data URLs or raw base64; strip the prefix if present
        const base64 = String(json.resumeBase64);
        const commaIdx = base64.indexOf(",");
        const rawB64 = commaIdx >= 0 ? base64.slice(commaIdx + 1) : base64;
        const buf = Buffer.from(rawB64, "base64");
        try {
          resume_url = await uploadToStorage(new Uint8Array(buf), String(json.resumeName), String(json.resumeType));
        } catch (e: unknown) {
          const message = e instanceof Error ? e.message : "Upload failed";
          return NextResponse.json(
            { ok: false, step: "upload", error: message, bucket: bucketName },
            { status: 500 }
          );
        }
      }

      if (!name || !email || !position || !resume_url || !phone || !linkedin || !portfolio) {
        return NextResponse.json(
          { ok: false, error: "Missing required fields (name, email, position, resume,phone, linkedin, portfolio)" },
          { status: 400 }
        );
      }
    } else if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      const form = await req.formData();

      name = String(form.get("name") || "").trim();
      email = String(form.get("email") || "").trim();
      phone = String(form.get("phone") || "").trim();
      position = String(form.get("position") || "").trim();
      linkedin = String(form.get("linkedin") || "").trim();
      portfolio = String(form.get("portfolio") || "").trim();
      // accept both "coverLetter" and "cover_letter"
      cover_letter = String(form.get("coverLetter") ?? form.get("cover_letter") ?? "").trim();

      const resume = form.get("resume") as File | null;
      if (!name || !email || !position || !resume || !phone || !linkedin || !portfolio) {
        return NextResponse.json(
          { ok: false, error: "Missing required fields (name, email, position, resume, phone, linkedin, portfolio)" },  
          { status: 400 }
        );
      }

      const buffer = new Uint8Array(await resume.arrayBuffer());
      resume_url = await uploadToStorage(buffer, resume.name, resume.type || "application/octet-stream");
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      // Correct parsing for urlencoded payloads (req.formData() is not supported)
      const text = await req.text();
      const params = new URLSearchParams(text);

      name = String(params.get("name") || "").trim();
      email = String(params.get("email") || "").trim();
      phone = String(params.get("phone") || "").trim();
      position = String(params.get("position") || "").trim();
      linkedin = String(params.get("linkedin") || "").trim();
      portfolio = String(params.get("portfolio") || "").trim();
      cover_letter = String(params.get("coverLetter") ?? params.get("cover_letter") ?? "").trim();

      const resumeUrlParam = params.get("resume_url");
      const resumeBase64 = params.get("resumeBase64");
      const resumeName = params.get("resumeName");
      const resumeType = params.get("resumeType");

      if (resumeUrlParam) {
        resume_url = String(resumeUrlParam);
      } else if (resumeBase64 && resumeName && resumeType) {
        const base64 = String(resumeBase64);
        const commaIdx = base64.indexOf(",");
        const rawB64 = commaIdx >= 0 ? base64.slice(commaIdx + 1) : base64;
        const buf = Buffer.from(rawB64, "base64");
        resume_url = await uploadToStorage(new Uint8Array(buf), String(resumeName), String(resumeType));
      }

      if (!name || !email || !position || !resume_url || !phone || !linkedin || !portfolio) {
        return NextResponse.json(
          { ok: false, error: "Missing required fields (name, email, position, resume, cover_letter, phone, linkedin, portfolio)" },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { ok: false, error: 'Content-Type must be "multipart/form-data", "application/x-www-form-urlencoded", or "application/json".' },
        { status: 415 }
      );
    }

    try {
      const table = process.env.SUPABASE_TABLE || "applications";
      const insert = await supabase.from(table).insert({
        name,
        email,
        phone,
        position,
        linkedin,
        portfolio,
        cover_letter,
        resume_url,
      });

      if (insert.error) {
        return NextResponse.json(
          { ok: false, step: "insert", error: insert.error.message, table },
          { status: 500 }
        );
      }
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Insert failed";
      return NextResponse.json(
        { ok: false, step: "insert", error: message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const table = process.env.SUPABASE_TABLE || "applications";

    const { data, error } = await supabase
      .from(table)
      .select("id,name,email,phone,position,linkedin,portfolio,cover_letter,resume_url,created_at")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      {
        ok: true,
        count: data?.length ?? 0,
        data,
      },
      { status: 200 }
    );
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}