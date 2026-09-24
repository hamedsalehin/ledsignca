"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  CheckCircle2,
  Clock,
  FileCheck2,
  Send,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function ThankYouClient() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Valued Customer";
  const email = searchParams.get("email") || "";

  useEffect(() => {
    // Google Ads conversion event trigger placeholder
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/QUOTE_SUBMISSION",
        value: 1.0,
        currency: "CAD",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Thank You Box */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden text-center p-8 sm:p-12 space-y-8 relative">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-[#f7f82d] to-yellow-500" />

            {/* Checkmark Badge */}
            <div className="relative inline-flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 border-2 border-emerald-200 flex items-center justify-center shadow-lg shadow-emerald-500/10 animate-bounce-subtle">
                <CheckCircle2 className="w-10 h-10" />
              </div>
            </div>

            {/* Header Text */}
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> Quote Request Received
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-poppins">
                Thank You, {name}!
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Your custom printing & signage request has been successfully received by our Toronto team.
                {email && (
                  <> We will send your custom proof and pricing to <span className="font-bold text-slate-900">{email}</span>.</>
                )}
              </p>
            </div>

            {/* 3-Step What Happens Next */}
            <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8 text-left space-y-6">
              <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider border-b border-slate-800 pb-3">
                <Sparkles className="w-4 h-4" /> What Happens Next
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4 text-yellow-400 shrink-0" /> Prepress Review
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Our print specialists verify your dimensions, resolution, and bleed specifications.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-yellow-400 shrink-0" /> Proof &amp; Pricing
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    You receive an email with your digital layout proof &amp; final pricing within 12 hours.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                    <Send className="w-4 h-4 text-yellow-400 shrink-0" /> Fast Production
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Upon your approval, we manufacture your order at our Toronto facility for fast local delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Need Urgent Help Box */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <Clock className="w-4 h-4 text-amber-600" /> Have an Urgent Order or Special Question?
                </div>
                <p className="text-xs text-amber-800">
                  Speak directly with our Toronto print technicians for immediate assistance.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="tel:+14168388994"
                  className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" /> Call (416) 838-8994
                </a>
                <a
                  href="https://wa.me/14168388994?text=Hello%20Nano%20Signs!%20I%20just%20submitted%20a%20quote%20request."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-slate-100">
              <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center flex items-center justify-center gap-2"
              >
                Back to Homepage
              </Link>
              <Link
                href="/neon-signs/neon-creator"
                className="w-full sm:w-auto px-6 py-3 bg-[#f7f82d] hover:bg-yellow-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-md"
              >
                Design Custom Neon LED Sign <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
