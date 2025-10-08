import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(req: Request) {
  try {
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { ok: false, error: "Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local." },
        { status: 500 }
      );
    }

    const table = process.env.SUPABASE_TABLE_PORTFOLIO || "portfolio_projects";

    // Support single-project fetch via ?id=<number>
    const { searchParams } = new URL(req.url);
    const idParam = searchParams.get("id");
    if (idParam) {
      const id = Number(idParam);
      if (Number.isNaN(id)) {
        return NextResponse.json({ ok: false, error: "Invalid id parameter" }, { status: 400 });
      }

      const { data, error } = await supabase
        .from(table)
        .select("id,title,category,description,image,technologies,client,duration,year")
        .eq("id", id)
        .limit(1)
        .maybeSingle();

      if (error) {
        return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
      }
      if (!data) {
        return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
      }

      return NextResponse.json({ ok: true, data }, { status: 200 });
    }

    // Original list response
    const { data, error } = await supabase
      .from(table)
      .select("id,title,category,description,image,technologies,client,duration,year")
      .order("id", { ascending: false });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, data: data ?? [] }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { ok: false, error: "Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local." },
        { status: 500 }
      );
    }

    const table = process.env.SUPABASE_TABLE_PORTFOLIO || "portfolio_projects";
    const body = await request.json();

    // Only require core fields; technologies is optional and will default to []
    const required = ["title", "category", "description", "image", "client", "duration", "year"];
    const missing = required.filter((f) => !(f in body));
    if (missing.length > 0) {
      return NextResponse.json(
        { ok: false, error: `Missing fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Normalize technologies: default to [] if missing, validate if present
    let technologies: string[] = [];
    if ("technologies" in body) {
      if (!Array.isArray(body.technologies)) {
        return NextResponse.json(
          { ok: false, error: "technologies must be an array of strings" },
          { status: 400 }
        );
      }
      technologies = body.technologies;
    }

    const { data, error } = await supabase
      .from(table)
      .insert([{
        title: body.title,
        category: body.category,
        description: body.description,
        image: body.image,
        technologies, // will be [] if not provided
        client: body.client,
        duration: body.duration,
        year: body.year,
      }])
      .select();

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, data }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Server error" }, { status: 500 });
  }
}