import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseAdmin = (supabaseUrl && supabaseServiceKey)
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided for upload." },
        { status: 400 }
      );
    }

    if (file.size > 25 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size exceeds 25MB limit." },
        { status: 400 }
      );
    }

    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const uniqueFileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}_${cleanFileName}`;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 1. Try Supabase storage if configured
    if (supabaseAdmin) {
      try {
        // Auto-create bucket if missing
        try {
          const { error: getErr } = await supabaseAdmin.storage.getBucket("quote-attachments");
          if (getErr && getErr.message.toLowerCase().includes("not found")) {
            await supabaseAdmin.storage.createBucket("quote-attachments", {
              public: true,
              fileSizeLimit: 26214400,
            });
          }
        } catch {
          // Ignore bucket check error and attempt upload anyway
        }

        const filePath = `quotes/${uniqueFileName}`;
        const { error: uploadError } = await supabaseAdmin.storage
          .from("quote-attachments")
          .upload(filePath, buffer, {
            contentType: file.type || "application/octet-stream",
            upsert: true,
          });

        if (!uploadError) {
          const { data: { publicUrl } } = supabaseAdmin.storage
            .from("quote-attachments")
            .getPublicUrl(filePath);

          return NextResponse.json({
            success: true,
            url: publicUrl,
            fileName: file.name,
          });
        } else {
          console.warn("Supabase upload returned error:", uploadError.message);
        }
      } catch (supaErr) {
        console.warn("Supabase storage upload exception, falling back to local storage:", supaErr);
      }
    }

    // 2. Fallback to public/uploads/quotes
    const uploadsDir = path.join(process.cwd(), "public", "uploads", "quotes");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const localFilePath = path.join(uploadsDir, uniqueFileName);
    fs.writeFileSync(localFilePath, buffer);

    const publicUrl = `/uploads/quotes/${uniqueFileName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: file.name,
    });
  } catch (err: any) {
    console.error("Quote upload error:", err);
    return NextResponse.json(
      { error: err?.message || "Failed to upload file." },
      { status: 500 }
    );
  }
}
