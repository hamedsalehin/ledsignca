"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  TrendingUp,
  Zap,
  Award,
  Users,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-opensans">
      <Header />

      {/* Hero Header */}
      <section className="relative text-white py-16 md:py-24" style={{
        background: "#0d0d1a"
      }}>
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#f7f82d]/20 text-[#f7f82d] mb-4 uppercase tracking-widest border border-[#f7f82d]/30">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-6xl font-poppins font-black mb-6 tracking-tight leading-tight">
            Your Vision, Printed Perfectly.
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-300 font-medium">
            As the leading custom sign and commercial printing company in the Greater Toronto Area, Nano Signs transforms your creative concepts into durable, eye-catching displays with unmatched speed.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-12 md:py-16 space-y-16">
        
        {/* Mission and Story */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-poppins font-black text-slate-800 tracking-tight leading-tight">
              The GTA's Trusted Commercial Printers
            </h2>
            <p className="text-sm md:text-base text-slate-650 leading-relaxed font-medium">
              Founded on the principle of providing top-tier print materials with industry-leading turnaround times, Nano Signs proudly partners with contractors, political campaigns, retailers, and real estate professionals across Ontario.
            </p>
            <p className="text-sm md:text-base text-slate-650 leading-relaxed font-medium">
              We don't outsource. All production happens locally at our Scarborough facility on Warden Ave. Our dedicated technicians monitor every single banner, flag, and coroplast board that passes through our advanced UV flatbed printers, ensuring your branding stays vibrant and withstands the tough Canadian weather.
            </p>
            <div className="pt-2">
              <Link
                href="/custom-signs"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r bg-[#f7f82d] hover:opacity-90 transition-opacity text-gray-900 rounded-xl text-sm font-bold shadow-md"
              >
                View Our Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-tr from-pink-500/10 to-cyan-500/10 border border-pink-100 rounded-3xl p-8 shadow-sm text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7f82d]/10 rounded-full filter blur-xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#f7f82d]/10 rounded-full filter blur-xl" />

            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-yellow-600 mx-auto shadow border border-pink-50">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-poppins font-black text-xl text-slate-800">
                The Nano Signs Promise
              </h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                From a single custom acrylic lobby sign to thousands of campaign lawn signs, every order passes our rigorous Quality Check. We verify bleed margins, image resolution, and color profiles before printing begins.
              </p>
              <div className="border-t border-slate-200/50 pt-4 mt-4 text-left space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
                  <span>Rush Production &amp; Local Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
                  <span>Fade-Resistant Canadian-Tough Inks</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
                  <span>Complimentary File Verification</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars / Values */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-gray-150">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-poppins font-black text-slate-800">
              Our Values
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">
              Every aspect of our business is built to support your success and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-yellow-600 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-poppins font-black text-slate-800">
                Lightning Fast Production
              </h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                We know that in business, deadlines are non-negotiable. With options for next-day pickup and rapid shipping, we make sure you have your marketing materials exactly when you need them.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-yellow-600 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-poppins font-black text-slate-800">
                Built for Ontario Weather
              </h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Canadian winters and hot summers require tough materials. We exclusively use high-grade corrugated plastics, rust-resistant aluminum, and premium vinyl laminates engineered to resist fading and cracking.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#b020ff] flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-poppins font-black text-slate-800">
                Real Human Support
              </h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Skip the automated bots. Whether you need help resizing a logo, choosing the right banner stand, or setting up a custom cut path, our local printing specialists are just a phone call or live chat away.
              </p>
            </div>
          </div>
        </section>

        {/* Visit Our Fort Lauderdale Location */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-poppins font-black text-slate-800">
              Visit Our Scarborough Print Shop
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">
              We invite you to drop by our manufacturing hub and showroom located on Warden Ave. Inspect material samples in person and see our wide-format printers running your orders live.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/images/about/storefront-toronto-printing-ca.jpg"
                  alt="Nano Signs Storefront in Toronto"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-3 text-center text-xs font-bold text-slate-700 font-poppins">Toronto Storefront</p>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/images/about/interior_2-toronto-printing-ca.jpg"
                  alt="Nano Signs Lobby & Showroom"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-3 text-center text-xs font-bold text-slate-700 font-poppins">Lobby &amp; Waiting Area</p>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/images/about/interior_1-toronto-printing-ca.png"
                  alt="Custom Print Product Display"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-3 text-center text-xs font-bold text-slate-700 font-poppins">Product Samples Display</p>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/images/about/printer-toronto-printing-ca.jpg"
                  alt="High-Resolution Wide Format Mimaki Printer"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-3 text-center text-xs font-bold text-slate-700 font-poppins">Wide Format UV Printer</p>
            </div>
          </div>
        </section>

        {/* Capability Overview */}
        <section className="text-center space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-poppins font-black text-slate-800">
              Everything You Need, Under One Roof.
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">
              From storefront graphics to trade show displays, explore our extensive selection of print capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/custom-signs" className="group">
              <div className="product-card-hover bg-white rounded-2xl p-4 mb-3 aspect-square flex items-center justify-center border border-slate-200 shadow-sm relative overflow-hidden">
                <Image
                  src="/images/products/main-page/all_signs_product-toronto-printing-ca.png"
                  alt="Custom Signs"
                  fill
                  sizes="(max-width: 640px) 50vw, 250px"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center font-poppins font-black text-slate-800 text-xs sm:text-sm transition-colors group-hover:text-yellow-600">
                Custom Signs
              </p>
            </Link>

            <Link href="/custom-banners" className="group">
              <div className="product-card-hover bg-white rounded-2xl p-4 mb-3 aspect-square flex items-center justify-center border border-slate-200 shadow-sm relative overflow-hidden">
                <Image
                  src="/images/products/main-page/fabric_banner-toronto-printing-ca.png"
                  alt="Vinyl Banners"
                  fill
                  sizes="(max-width: 640px) 50vw, 250px"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center font-poppins font-black text-slate-800 text-xs sm:text-sm transition-colors group-hover:text-yellow-600">
                Vinyl Banners
              </p>
            </Link>

            <Link href="/custom-flags" className="group">
              <div className="product-card-hover bg-white rounded-2xl p-4 mb-3 aspect-square flex items-center justify-center border border-slate-200 shadow-sm relative overflow-hidden">
                <Image
                  src="/images/products/main-page/flags-toronto-printing-ca.png"
                  alt="Business Flags"
                  fill
                  sizes="(max-width: 640px) 50vw, 250px"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center font-poppins font-black text-slate-800 text-xs sm:text-sm transition-colors group-hover:text-yellow-600">
                Business Flags
              </p>
            </Link>

            <Link href="/marketing-materials" className="group">
              <div className="product-card-hover bg-white rounded-2xl p-4 mb-3 aspect-square flex items-center justify-center border border-slate-200 shadow-sm relative overflow-hidden">
                <Image
                  src="/images/products/main-page/business_cards-toronto-printing-ca.png"
                  alt="Business Cards"
                  fill
                  sizes="(max-width: 640px) 50vw, 250px"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center font-poppins font-black text-slate-800 text-xs sm:text-sm transition-colors group-hover:text-yellow-600">
                Business Cards
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
