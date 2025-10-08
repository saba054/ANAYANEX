import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SUPABASE_TABLE_BLOG = process.env.SUPABASE_TABLE_BLOG || "blog_posts";

function getClient() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase environment variables are not configured.");
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}

export async function GET(req: Request) {
  try {
    const supabase = getClient();
    const { searchParams } = new URL(req.url);
    const idParam = searchParams.get("id");

    if (idParam) {
      const id = Number(idParam);
      if (!Number.isFinite(id)) {
        return NextResponse.json({ ok: false, error: "Invalid id" }, { status: 400 });
      }
      const { data, error } = await supabase.from(SUPABASE_TABLE_BLOG).select("*").eq("id", id).single();
      if (error) {
        return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
      }
      return NextResponse.json({ ok: true, data });
    }

    const { data, error } = await supabase
      .from(SUPABASE_TABLE_BLOG)
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true, data });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || "Unexpected error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const supabase = getClient();
    const body = await req.json();

    const normalize = (item: any) => {
      const required = ["title", "category", "description", "image", "author", "date"];
      const missing = required.filter((k) => item[k] === undefined || item[k] === null || item[k] === "");
      if (missing.length) {
        throw new Error(`Missing fields: ${missing.join(", ")}`);
      }
      return {
        title: String(item.title),
        category: String(item.category),
        description: String(item.description),
        image: String(item.image),
        author: String(item.author),
        date: String(item.date),
        // DB column is 'readtime' (NOT NULL). Fallback if not provided.
        readtime: String(item.readtime ?? item.readTime ?? "5 min read"),
      };
    };

    if (Array.isArray(body)) {
      const payloads = body.map(normalize);
      const { data, error } = await supabase.from(SUPABASE_TABLE_BLOG).insert(payloads).select();
      if (error) {
        return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
      }
      return NextResponse.json({ ok: true, data }, { status: 201 });
    }

    const payload = normalize(body);
    const { data, error } = await supabase.from(SUPABASE_TABLE_BLOG).insert(payload).select().single();
    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true, data }, { status: 201 });
  } catch (err: any) {
    if (typeof err?.message === "string" && err.message.startsWith("Missing fields")) {
      return NextResponse.json({ ok: false, error: err.message }, { status: 400 });
    }
    return NextResponse.json({ ok: false, error: err.message || "Unexpected error" }, { status: 500 });
  }
}