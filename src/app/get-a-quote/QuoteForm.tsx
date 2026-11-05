"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import {
  UploadCloud,
  Loader2,
  CheckCircle2,
  AlertCircle,
  FileText,
  Phone,
  Mail,
  User,
  Scale,
  Hash,
  Zap,
} from "lucide-react";

export function QuoteForm() {
  const router = useRouter();

  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [quantity, setQuantity] = useState(1);

  // File upload states
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileUploading, setFileUploading] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);

  // Submission states
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Handle local file selection and upload
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.size > 25 * 1024 * 1024) {
      setFileError("File size exceeds 25MB limit.");
      return;
    }

    setFile(selectedFile);
    setFileError(null);
    setFileUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const res = await fetch("/api/upload-quote-file", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Failed to upload file.");
      }

      setFileUrl(data.url);
    } catch (err) {
      console.error("File upload error:", err);
      setFileError(
        err instanceof Error
          ? err.message
          : "Failed to upload file. You can still submit the form and email files directly to info@led-sign.ca."
      );
    } finally {
      setFileUploading(false);
    }
  };

  // Handle submission and redirect to Google Ads Thank You page
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !description.trim()) {
      setSubmitError("Please fill out all required fields.");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    const fullDescription = description.trim();

    try {
      const res = await fetch("/api/submit-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          description: fullDescription,
          width: width ? width.trim() : null,
          height: height ? height.trim() : null,
          quantity: Number(quantity) || 1,
          fileUrl: fileUrl,
        }),
      });

      let data: any = {};
      try {
        data = await res.json();
      } catch (jsonErr) {
        console.warn("Non-JSON response received:", jsonErr);
      }

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit quote request.");
      }

      router.push(
        `/get-a-quote/thank-you?name=${encodeURIComponent(fullName.trim())}&email=${encodeURIComponent(email.trim())}`
      );
    } catch (err) {
      console.error("Quote submission failed:", err);
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Unable to submit quote. Please call us directly at (416) 838-8994 or email info@led-sign.ca."
      );
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-xl font-bold font-poppins text-slate-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-yellow-600" /> Your Project Information
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          No account required. Fill in your details below to get an instant layout proof &amp; custom quote within 12 hours.
        </p>
      </div>

      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex gap-3 text-xs sm:text-sm text-red-800 font-semibold">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name, Email & Phone Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" /> Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Johnson"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all font-medium text-slate-800"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" /> Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="e.g. sarah@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all font-medium text-slate-800"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-400" /> Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. (416) 838-8994"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all font-medium text-slate-800"
            />
          </div>
        </div>

        {/* Dimensions & Quantity Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-slate-400" /> Width (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. 4 ft or 48 in"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all font-medium text-slate-800"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-slate-400" /> Height (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. 8 ft or 96 in"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all font-medium text-slate-800"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Hash className="w-3.5 h-3.5 text-slate-400" /> Quantity *
            </label>
            <input
              type="number"
              required
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value) || 1)}
              className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all font-medium text-slate-800"
            />
          </div>
        </div>

        {/* Description Textarea */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-slate-400" /> Describe Your Sign &amp; Print Needs *
          </label>
          <textarea
            required
            rows={4}
            placeholder="Tell us what you need printed (e.g. Storefront LED sign, 4x8 ft vinyl banner, acrylic sign, material preferences, colors, mounting needs, etc.)."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all font-medium text-slate-800 resize-y min-h-[110px]"
          />
        </div>

        {/* File Upload Box */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Attach Artwork, Logo or Sketch (Optional)
            </label>
            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              ⚡ No Account Needed
            </span>
          </div>

          {fileError && (
            <p className="text-xs text-red-600 font-semibold">{fileError}</p>
          )}

          {!fileUrl ? (
            <div className="relative group border-2 border-dashed border-slate-200 hover:border-yellow-500 rounded-2xl p-6 text-center bg-slate-50/40 hover:bg-yellow-50/20 transition-all cursor-pointer flex flex-col items-center justify-center gap-2">
              <input
                type="file"
                accept="application/pdf,image/png,image/jpeg,image/jpg"
                onChange={handleFileChange}
                disabled={fileUploading}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              {fileUploading ? (
                <>
                  <Loader2 className="w-7 h-7 text-yellow-600 animate-spin" />
                  <p className="text-xs text-slate-600 font-semibold">Uploading artwork file...</p>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-800 font-bold">
                      Drag &amp; drop your artwork here or <span className="text-yellow-600 underline">browse file</span>
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      Supports PDF, PNG, JPG up to 25MB (Optional — you can also email files later)
                    </p>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-emerald-950 truncate max-w-[200px]">
                    {file?.name}
                  </p>
                  <p className="text-[10px] text-emerald-600 font-medium">Uploaded successfully</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setFileUrl(null);
                }}
                className="text-xs text-red-500 hover:text-red-700 underline font-bold px-2 py-1"
              >
                Remove
              </button>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2 space-y-2">
          <button
            type="submit"
            disabled={submitting || fileUploading}
            className="w-full py-4 bg-[#f7f82d] hover:bg-yellow-400 text-slate-950 active:scale-[0.99] font-black rounded-2xl transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20 disabled:opacity-50 cursor-pointer"
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting Request...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 fill-slate-950" /> SUBMIT MY FREE QUOTE REQUEST
              </>
            )}
          </button>
          <p className="text-center text-[11px] text-slate-500 font-medium">
            100% Free · No Credit Card Required · Instant 12-Hour Proof Response
          </p>
        </div>
      </form>
    </div>
  );
}
