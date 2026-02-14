import { NextResponse } from "next/server";
import { createClient as createSupabaseClient, type SupabaseClient } from '@supabase/supabase-js';
import { Parser } from "json2csv";

export async function GET() {
  const supabase = await createClient();

  // 🔒 Ensure user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 📦 Fetch products
  const { data, error } = await supabase
    .from("items") // change to your table name if different
    .select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data || data.length === 0) {
    return NextResponse.json({ error: "No data found" }, { status: 404 });
  }

  // Convert JSON → CSV
  const parser = new Parser();
  const csv = parser.parse(data);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=inventory-export.csv",
    },
  });
}

export function createClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_KEY ??
    process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY / SERVICE_ROLE_KEY environment variables');
  }

  return createSupabaseClient(url, key);
}