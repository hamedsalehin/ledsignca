import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseAdmin = (supabaseUrl && supabaseServiceKey)
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

export async function POST(req: NextRequest) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "Supabase service client not configured." },
        { status: 500 }
      );
    }

    // Check if the bucket exists by attempting to retrieve it
    const { data: bucket, error: getError } = await supabaseAdmin.storage.getBucket("designs");

    if (getError && getError.message.toLowerCase().includes("not found")) {
      console.log("Bucket 'designs' not found. Creating it...");
      
      const { data: createData, error: createError } = await supabaseAdmin.storage.createBucket("designs", {
        public: true,
        fileSizeLimit: 52428800, // 50MB limit
        allowedMimeTypes: ["application/pdf", "image/png", "image/jpeg", "image/jpg", "image/webp"],
      });

      if (createError) {
        console.error("Error creating bucket 'designs':", createError);
        return NextResponse.json({ error: createError.message }, { status: 500 });
      }

      console.log("Bucket 'designs' created successfully!");
      return NextResponse.json({ success: true, message: "Bucket created successfully" });
    } else if (getError) {
      console.warn("Storage check returned error:", getError);
      // Try to create it anyway as a fallback
      await supabaseAdmin.storage.createBucket("designs", { public: true });
    }

    return NextResponse.json({ success: true, message: "Bucket already exists or check passed" });
  } catch (error: any) {
    console.error("Error in setup-bucket route:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
