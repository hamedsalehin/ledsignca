import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  // Verify cron secret if provided by Vercel
  const authHeader = req.headers.get("authorization");
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return new Response("Unauthorized", { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Missing Supabase credentials" }, { status: 500 });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Ping Supabase by fetching exactly 1 row
    const { data, error } = await supabase
      .from("quote_requests")
      .select("id")
      .limit(1);

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true, message: "Supabase keep-alive ping successful", data });
  } catch (err: any) {
    console.error("Keep-alive error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
