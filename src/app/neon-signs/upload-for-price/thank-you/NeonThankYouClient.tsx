"use client";

import React, { useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref") || "Q-" + Math.floor(100000 + Math.random() * 900000);

  useEffect(() => {
    // Track Lead & Conversion on Page Load in Google Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      // 1. led-sign.ca Google Analytics (G-YESMFLCB2D)
      (window as any).gtag("event", "generate_lead", {
        send_to: "G-YESMFLCB2D",
        event_category: "Quote Request",
        event_label: "Upload For Price - Thank You",
        source_site: "led-sign.ca",
        quote_id: ref,
        value: 1.0,
        currency: "CAD",
      });

      (window as any).gtag("event", "conversion", {
        send_to: "G-YESMFLCB2D",
        source_site: "led-sign.ca",
        quote_id: ref,
        value: 1.0,
        currency: "CAD",
      });

      // 2. neonfl.com Google Analytics (G-C0T0585G3W)
      (window as any).gtag("event", "generate_lead", {
        send_to: "G-C0T0585G3W",
        event_category: "Quote Request",
        event_label: "Upload For Price - Thank You",
        source_site: "neonfl.com",
        quote_id: ref,
        value: 1.0,
        currency: "USD",
      });
    }
  }, [ref]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden text-center p-8 sm:p-12 space-y-8 relative">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-[#f7f82d] to-yellow-500" />

        {/* Celebration Badge */}
        <div className="relative inline-flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 border-2 border-emerald-200 flex items-center justify-center shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="w-10 h-10" />
          </div>
        </div>

        {/* Header Text */}
        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> Quote Request Received!
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Thank You for Your Neon Sign Request!
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Our expert design team is already reviewing your custom LED neon sign specifications.
          </p>
        </div>

        {/* Reference Badge */}
        <div className="inline-block bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl px-6 py-4">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
            Quote Reference Number
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-wider font-mono text-yellow-600">
            {ref}
          </div>
        </div>

        {/* What Happens Next Steps */}
        <div className="text-left bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-100 space-y-6">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" /> What Happens Next?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm space-y-2">
              <div className="w-7 h-7 rounded-full bg-yellow-100 text-yellow-800 font-bold text-xs flex items-center justify-center">
                1
              </div>
              <h3 className="font-bold text-sm text-slate-900">3D Proof Creation</h3>
              <p className="text-xs text-slate-600">
                Our graphic team creates a photorealistic digital mockup within 2 hours.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm space-y-2">
              <div className="w-7 h-7 rounded-full bg-yellow-100 text-yellow-800 font-bold text-xs flex items-center justify-center">
                2
              </div>
              <h3 className="font-bold text-sm text-slate-900">Check Your Email</h3>
              <p className="text-xs text-slate-600">
                We will email your full proof, dimensions, exact quote, and preview.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm space-y-2">
              <div className="w-7 h-7 rounded-full bg-yellow-100 text-yellow-800 font-bold text-xs flex items-center justify-center">
                3
              </div>
              <h3 className="font-bold text-sm text-slate-900">100% Free Revisions</h3>
              <p className="text-xs text-slate-600">
                Need color or size tweaks? Reply with adjustments until you love it.
              </p>
            </div>
          </div>
        </div>

        {/* Contact direct card */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-yellow-600" />
            <span>Need urgent help? Call <a href="tel:4168388994" className="font-semibold text-slate-900 hover:text-yellow-600">+1 (416) 838-8994</a></span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-yellow-600" />
            <a href="mailto:info@led-sign.ca" className="font-semibold text-slate-900 hover:text-yellow-600">info@led-sign.ca</a>
          </div>
        </div>

        {/* Back buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/neon-signs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-md"
          >
            Explore Neon Signs <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export function NeonThankYouClient() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
