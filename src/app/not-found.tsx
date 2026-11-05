import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PRODUCTS_REGISTRY } from "@/lib/productsRegistry";
import { Phone, Mail, MapPin, ArrowRight, Home, HelpCircle } from "lucide-react";

export default function NotFound() {
  // Select 4 popular featured products
  const featuredProducts = [
    {
      name: "Custom Neon LED Sign",
      category: "neon-signs",
      id: "good-vibes-only",
      image: "/images/products/neon-signs/nano-signs-good-vibes-neon-canada.png",
      price: "$169.00",
    },
    {
      name: "Custom Vinyl Banner",
      category: "custom-banners",
      id: "vinyl-banners",
      image: "/images/products/main-page/vinyl_banner-toronto-printing-ca.png",
      price: "$45.00",
    },
    {
      name: "Coroplast Signs",
      category: "custom-signs",
      id: "coroplast-signs",
      image: "/images/products/main-page/all_signs_product-toronto-printing-ca.png",
      price: "$29.00",
    },
    {
      name: "Custom Flags",
      category: "custom-flags",
      id: "feather-flags",
      image: "/images/products/main-page/flags-toronto-printing-ca.png",
      price: "$89.00",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-opensans">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-12 md:py-20 flex flex-col items-center">
        {/* 404 Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black bg-pink-100 text-pink-600 uppercase tracking-widest border border-pink-200">
            Error 404
          </span>
          <h1 className="text-5xl md:text-7xl font-poppins font-black text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
            Sorry! The page you are looking for might have been removed, renamed, or is temporarily unavailable. Let us help you find what you need.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-bold shadow-md transition-all"
            >
              <Home className="w-4 h-4" /> Go to Homepage
            </Link>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#f7f82d] hover:bg-[#e2e325] text-slate-900 rounded-xl text-sm font-bold shadow-md transition-all"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Featured Popular Products Section */}
        <div className="w-full bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-poppins font-black text-slate-800">
              Popular Custom Signage &amp; Prints
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-2">
              Explore our top-selling custom products with fast turnaround in Toronto &amp; GTA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod, idx) => (
              <Link
                key={idx}
                href={`/${prod.category}/${prod.id}`}
                className="group block bg-slate-50 rounded-2xl p-4 border border-slate-200 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <div className="relative aspect-square w-full rounded-xl bg-white overflow-hidden mb-4 border border-slate-100">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 250px"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-poppins font-bold text-slate-800 text-base group-hover:text-pink-600 transition-colors mb-1">
                  {prod.name}
                </h3>
                <p className="text-xs font-bold text-yellow-600">
                  From {prod.price}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/custom-signs"
              className="inline-flex items-center gap-2 text-sm font-bold text-pink-600 hover:text-pink-700 transition-colors"
            >
              View Full Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Contact & Support Banner */}
        <div className="w-full bg-slate-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left z-10 max-w-xl">
            <h3 className="text-2xl font-poppins font-black">
              Need Help Finding Something?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-medium">
              Our Toronto print team is here to assist you with custom quotes, orders, and design inquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full md:w-auto">
            <a
              href="tel:+14168388994"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-slate-900 rounded-xl text-sm font-bold hover:bg-slate-100 transition-all shadow-md"
            >
              <Phone className="w-4 h-4 text-pink-600" />
              <span>+1 416-838-8994</span>
            </a>
            <a
              href="mailto:info@led-sign.ca"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-slate-800 text-white border border-slate-700 rounded-xl text-sm font-bold hover:bg-slate-700 transition-all"
            >
              <Mail className="w-4 h-4 text-[#f7f82d]" />
              <span>info@led-sign.ca</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
