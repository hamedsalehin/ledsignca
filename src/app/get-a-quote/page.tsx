import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "./QuoteForm";
import {
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Custom Printing & Signage Quote Toronto ON | Nano Signs",
  description:
    "Request a custom printing quote for signs, LED signs, banners, business cards, & marketing materials in Toronto. Fast 12-hour response turnaround.",
  alternates: {
    canonical: "https://led-sign.ca/get-a-quote",
  },
};

export default function GetQuotePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow py-6 sm:py-8 md:py-12">
        {/* Breadcrumb Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-yellow-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-800">Request a Custom Quote</span>
          </div>
        </div>

        {/* Hero Banner Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-lg border border-slate-800">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#f7f82d]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-none space-y-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f7f82d]/10 border border-[#f7f82d]/30 text-[#f7f82d] text-[10px] font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" /> WE PRINT EVERYTHING · FAST GTA TURNAROUND
              </span>
              <h1 className="text-lg sm:text-xl font-bold font-poppins text-white tracking-tight leading-tight">
                Request a Free Custom Quote
              </h1>
              <p className="text-slate-300 text-xs max-w-none">
                Get an instant print proof and custom pricing for Neon LED signs, commercial LED display boards, vinyl banners, channel letters, and marketing signage in Toronto.
              </p>
            </div>
          </div>
        </section>

        {/* Main Grid Container */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: Quote Request Form (7 Cols) */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>

            {/* RIGHT COLUMN: Contact Info & Trust Badges (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Toronto Shop Contact Card */}
              <div className="bg-slate-900 text-white rounded-3xl p-5 shadow-xl border border-slate-800 space-y-3">
                <h3 className="text-xs font-semibold font-poppins text-slate-300">
                  Talk to a Specialist or send email directly?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                  <a
                    href="tel:+14168388994"
                    className="w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-yellow-400" /> (416) 838-8994
                  </a>
                  <a
                    href="mailto:info@led-sign.ca"
                    className="w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors border border-slate-700"
                  >
                    <Mail className="w-3.5 h-3.5 text-yellow-400" /> info@led-sign.ca
                  </a>
                </div>
              </div>

              {/* Why Choose Nano Signs Toronto */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-slate-200/80 space-y-4">
                <h3 className="text-base font-bold font-poppins text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-yellow-600" /> Why Choose Nano Signs?
                </h3>

                <ul className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Free Layout &amp; Print Proof:</strong> See how your sign looks before paying anything.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Fast Turnaround:</strong> Same-week production &amp; local Greater Toronto Area delivery/pickup.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Commercial Durability:</strong> Premium UV-resistant inks &amp; Canadian winter weatherproof materials.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Best Price Guarantee:</strong> Volume discounts on corporate and bulk printing.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Customer Testimonial Box */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400" />
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  &quot;Nano Signs fabricated our store&apos;s custom LED channel letter sign in 3 days. Beautiful quality, fair pricing, and outstanding local Toronto service!&quot;
                </p>
                <div className="text-[11px] text-slate-400 font-medium flex justify-between items-center pt-2 border-t border-slate-800">
                  <span className="font-bold text-white">Michael R. — Storefront Owner</span>
                  <span className="text-yellow-400 font-semibold">Toronto ON</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
