import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendApiKey = process.env.RESEND_API_KEY;

// Server-side Supabase client (optional & resilient)
const supabaseAdmin = (supabaseUrl && supabaseServiceKey)
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

const FROM = `${process.env.RESEND_FROM_NAME || "Nano Signs"} <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "citylightsign@gmail.com";

// ── POST /api/submit-quote ───────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    let body: any = {};
    try {
      body = await req.json();
    } catch (parseErr) {
      try {
        const bodyText = await req.text();
        body = JSON.parse(bodyText);
      } catch {
        return NextResponse.json(
          { error: "Invalid request payload format." },
          { status: 400 }
        );
      }
    }

    const { fullName, email, phone, description, width, height, quantity, fileUrl } = body;

    if (!fullName || !email || !phone || !description) {
      return NextResponse.json(
        { error: "Missing required fields: Full Name, Email, Phone, and Description are required." },
        { status: 400 }
      );
    }

    // Extract filename from URL if possible
    let fileName = "Attachment";
    if (fileUrl) {
      try {
        const urlParts = fileUrl.split("/");
        fileName = urlParts[urlParts.length - 1];
        if (fileName.includes("_")) {
          fileName = fileName.substring(fileName.indexOf("_") + 1);
        }
      } catch {
        fileName = "Attachment";
      }
    }

    let quoteId: string = `Q-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    let shortId = quoteId.slice(0, 8).toUpperCase();
    let dbSaved = false;
    let adminEmailSent = false;
    let customerEmailSent = false;

    // ── 1. Insert quote request into Supabase (non-blocking if DB is paused/unreachable) ───
    if (supabaseAdmin) {
      try {
        const { data: quoteData, error: dbError } = await supabaseAdmin
          .from("quote_requests")
          .insert({
            full_name: fullName.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            description: description.trim(),
            width: width ? String(width).trim() : null,
            height: height ? String(height).trim() : null,
            quantity: Number(quantity) || 1,
            file_url: fileUrl || null,
          })
          .select("id")
          .single();

        if (dbError) {
          console.warn("submit-quote: Supabase insert warning (non-fatal):", dbError.message);
        } else if (quoteData?.id) {
          quoteId = quoteData.id;
          shortId = quoteId.slice(0, 8).toUpperCase();
          dbSaved = true;
          console.log("submit-quote: Quote stored in Supabase with ID:", quoteId);
        }
      } catch (dbErr: any) {
        console.warn("submit-quote: Supabase connection/insert failed (non-fatal):", dbErr?.message || dbErr);
      }
    } else {
      console.warn("submit-quote: Supabase client not initialized. Proceeding with email notification.");
    }

    // ── 2. Send Admin Notification Email via Resend ────────────────────────────
    if (resend && ADMIN_EMAIL) {
      try {
        const adminEmailRes = await resend.emails.send({
          from: FROM,
          to: [ADMIN_EMAIL],
          subject: `📋 New Quote Request #${shortId} — ${fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f1f5f9; padding: 32px; border-radius: 12px;">
              <div style="text-align: center; margin-bottom: 28px;">
                <h1 style="color: #f7f82d; font-size: 28px; margin: 0; letter-spacing: -0.5px;">NANO SIGNS</h1>
                <p style="color: #94a3b8; margin: 4px 0 0;">New Custom Quote Request</p>
              </div>

              <div style="background: #1e293b; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
                <h2 style="margin: 0 0 16px; font-size: 16px; color: #e2e8f0; border-bottom: 1px solid #334155; padding-bottom: 10px;">
                  📋 Request Info #${shortId}
                </h2>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr><td style="padding: 6px 0; color: #94a3b8; width: 40%;">Client Name:</td><td style="color: #f1f5f9; font-weight: bold;">${fullName}</td></tr>
                  <tr><td style="padding: 6px 0; color: #94a3b8;">Email:</td><td style="color: #f1f5f9;"><a href="mailto:${email}" style="color: #f7f82d; text-decoration: none;">${email}</a></td></tr>
                  <tr><td style="padding: 6px 0; color: #94a3b8;">Phone:</td><td style="color: #f1f5f9;"><a href="tel:${phone}" style="color: #f1f5f9; text-decoration: none;">${phone}</a></td></tr>
                  <tr><td style="padding: 6px 0; color: #94a3b8;">Est. Quantity:</td><td style="color: #f1f5f9;">${quantity || 1} unit(s)</td></tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8;">Dimensions:</td>
                    <td style="color: #f1f5f9;">
                      ${width || height ? `${width || "—"} W x ${height || "—"} H` : "Not specified"}
                    </td>
                  </tr>
                </table>
              </div>

              <div style="background: #1e293b; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 12px; font-size: 14px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Project Description</h3>
                <p style="margin: 0; font-size: 14px; color: #e2e8f0; line-height: 1.6; white-space: pre-wrap;">${description}</p>
              </div>

              ${fileUrl
              ? `
              <div style="background: #1e293b; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 12px; font-size: 14px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Attached Artwork</h3>
                <p style="margin: 0 0 10px; font-size: 13px; color: #cbd5e1;">Filename: ${fileName}</p>
                <a href="${fileUrl}" style="display: inline-block; background: #f7f82d; color: #0f172a; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: bold;">
                  Download / View Attachment
                </a>
              </div>
              `
              : `
              <div style="background: #1e293b; border-radius: 10px; padding: 20px; margin-bottom: 20px; border: 1px dashed #334155;">
                <p style="margin: 0; font-size: 13px; color: #64748b;">⚙️ No design files or sketches were attached.</p>
              </div>
              `
              }

              <div style="text-align: center; padding-top: 20px; border-top: 1px solid #1e293b;">
                <p style="font-size: 12px; color: #475569; margin: 0;">Request ID: ${quoteId}</p>
              </div>
            </div>
          `,
        });

        if (adminEmailRes.error) {
          console.error("submit-quote: admin email send error:", adminEmailRes.error);
        } else {
          console.log("submit-quote: admin email send success:", adminEmailRes.data);
          adminEmailSent = true;
        }
      } catch (adminErr: any) {
        console.error("submit-quote: admin email send exception:", adminErr?.message || adminErr);
      }
    } else {
      console.warn("submit-quote: Resend client or ADMIN_EMAIL not available. Skipping admin email.");
    }

    // ── 3. Send Customer Confirmation Email (Best effort) ─────────────────────
    if (resend && email) {
      try {
        await resend.emails.send({
          from: FROM,
          to: [email],
          subject: `✨ Quote Request Received #${shortId} — Nano Signs Toronto`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 0; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
              <div style="background: #0f172a; padding: 32px; text-align: center;">
                <h1 style="color: #f7f82d; font-size: 28px; margin: 0; letter-spacing: -0.5px; font-weight: 900;">NANO SIGNS</h1>
                <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">Quote Request #${shortId}</p>
              </div>
              <div style="padding: 32px;">
                <h2 style="font-size: 20px; color: #0f172a; margin-top: 0;">Hello ${fullName},</h2>
                <p style="font-size: 14px; color: #334155; line-height: 1.6;">
                  Thank you for requesting a custom quote with Nano Signs Toronto! Our sign and print specialists are reviewing your specifications and will send you a digital proof and tailored pricing within 12 hours.
                </p>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; font-size: 13px; color: #475569; margin: 20px 0;">
                  <strong style="color: #0f172a;">Your Request Details:</strong><br/>
                  <p style="margin: 8px 0 4px; white-space: pre-wrap;">${description}</p>
                  ${width || height ? `<p style="margin: 4px 0;"><strong>Dimensions:</strong> ${width || "—"} W x ${height || "—"} H</p>` : ""}
                  <p style="margin: 4px 0;"><strong>Quantity:</strong> ${quantity || 1}</p>
                </div>
                <p style="font-size: 13px; color: #64748b; line-height: 1.5;">
                  Have questions or an urgent project? Call us directly at <a href="tel:+14168388994" style="color: #0f172a; font-weight: bold;">(416) 838-8994</a> or reply to <a href="mailto:info@led-sign.ca" style="color: #0f172a; font-weight: bold;">info@led-sign.ca</a>.
                </p>
              </div>
              <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="font-size: 12px; color: #94a3b8; margin: 0;">Nano Signs • Toronto, ON • (416) 838-8994</p>
              </div>
            </div>
          `,
        });
        customerEmailSent = true;
      } catch (custErr: any) {
        console.warn("submit-quote: Customer email failed (non-fatal):", custErr?.message || custErr);
      }
    }

    return NextResponse.json({
      success: true,
      quoteId,
      shortId,
      dbSaved,
      adminEmailSent,
      customerEmailSent,
      message: "Quote request submitted successfully.",
    });

  } catch (err: any) {
    console.error("submit-quote fatal error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 },
    );
  }
}
