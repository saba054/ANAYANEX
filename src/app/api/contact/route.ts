import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
const table = process.env.SUPABASE_CONTACT_TABLE || "contacts";

export async function POST(req: Request) {
  try {
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { ok: false, error: "Supabase credentials are not configured. Ensure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set." },
        { status: 500 }
      );
    }

    // Create client after env validation
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Optional: verify that the key looks like a service_role (not anon)
    try {
      const parts = supabaseServiceKey.split(".");
      if (parts.length === 3) {
        const payloadJson = Buffer.from(parts[1], "base64").toString("utf-8");
        const payload = JSON.parse(payloadJson);
        if (payload.role !== "service_role") {
          return NextResponse.json(
            { ok: false, error: "Provided SUPABASE_SERVICE_ROLE_KEY appears to be an anon key. Use the Service Role Key." },
            { status: 500 }
          );
        }
      }
    } catch {
      // Continue; invalid tokens will surface clearer errors on insert
    }

    const contentType = req.headers.get("content-type") || "";
    const accept = req.headers.get("accept") || "";

    let name = "";
    let email = "";
    let subject = "";
    let message = "";

    if (contentType.includes("application/json")) {
      const json = await req.json();
      name = String(json.name || "").trim();
      email = String(json.email || "").trim();
      subject = String(json.subject || "").trim();
      message = String(json.message || "").trim();
    } else {
      const form = await req.formData();
      name = String(form.get("name") || "").trim();
      email = String(form.get("email") || "").trim();
      subject = String(form.get("subject") || "").trim();
      message = String(form.get("message") || "").trim();
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: "Please provide name, email, subject, and message." }, { status: 400 });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ ok: false, error: "Please provide a valid email address." }, { status: 400 });
    }

    const insert = await supabase.from(table).insert({ name, email, subject, message });
    if (insert.error) {
      return NextResponse.json({ ok: false, step: "insert", error: insert.error.message, table }, { status: 500 });
    }

    // JSON-first: if JSON input or client expects JSON, return JSON
    if (contentType.includes("application/json") || accept.includes("application/json")) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Otherwise, redirect back to contact page with success banner for browser form submits
    const url = new URL("/contact?success=1", req.url);
    return NextResponse.redirect(url, 303);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { ok: false, error: "Supabase credentials are not configured. Ensure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { data, error } = await supabase
      .from(table)
      .select("id,name,email,subject,message,created_at")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, count: data?.length ?? 0, data }, { status: 200 });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}