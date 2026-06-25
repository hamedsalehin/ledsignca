"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductPageConfig } from "@/components/SignProductPage";
import { ConfiguratorSection } from "@/components/configurator-section";

interface ProductItem {
  id: string;
  name: string;
  image: string;
  hoverImage?: string;
  price?: string;
  description?: string;
  badge?: string;
  reviewRating?: string;
  reviewCount?: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface CategoryPageClientProps {
  categorySlug: string;
  title: string;
  breadcrumbLabel: string;
  heroSubtitle: string;
  heroImage: string;
  tabletHeroImage?: string;
  mobileHeroImage?: string;
  products: ProductItem[];
  categoryDescriptionText?: string;
  categorySecondaryImage?: string;
  faqs: FaqItem[];
  reviewRating?: string;
  reviewCount?: string;
  reviewQuote?: string;
  ctaProduct1?: { name: string; href: string };
  ctaProduct2?: { name: string; href: string };
}

export function CategoryPageClient({
  categorySlug,
  title,
  breadcrumbLabel,
  heroSubtitle,
  heroImage,
  tabletHeroImage,
  mobileHeroImage,
  products,
  categoryDescriptionText,
  categorySecondaryImage,
  faqs,
  reviewRating,
  reviewCount,
  reviewQuote,
  ctaProduct1,
  ctaProduct2,
}: CategoryPageClientProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-[20px] lg:px-[48px] 3xl:px-[96px] py-3 flex items-center gap-2 text-sm text-gray-500 font-['Open_Sans']">
            <Link href="/" className="hover:text-yellow-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-gray-900">
              {breadcrumbLabel}
            </span>
          </div>
        </div>

        {/* Hero Section Banner */}
        {categorySlug === "neon-signs" ? (
          <section className="relative w-full h-[550px] md:h-[650px] flex items-center bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/products/neon-signs/nano-signs-hero-bg-canada.jpg"
                alt="Neon Signs Hero"
                fill
                priority
                quality={90}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent w-full md:w-2/3"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-[20px] lg:px-[48px] 3xl:px-[96px] flex flex-col justify-center items-start h-full">
              <span className="text-[#e91e63] text-sm md:text-base font-extrabold tracking-widest uppercase mb-3 text-left">HANDCRAFTED & PREMIUM</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold text-white mb-8 leading-[1.1] text-left max-w-xl">
                Custom LED Neon Signs<br />
                & Logo Lights By <span className="text-[#e91e63]">Nano</span> <span className="text-[#03a9f4]">Sign</span>
              </h1>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  href="/neon-signs/neon-creator"
                  className="bg-gradient-to-r from-[#e91e63] to-[#03a9f4] text-white font-bold px-7 py-3.5 rounded-full text-center text-sm md:text-base shadow-lg hover:shadow-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 border border-white/20"
                >
                  Customize Your Own Sign <span className="text-xl leading-none">→</span>
                </Link>
                <div className="flex flex-col">
                  <Link
                    href="/neon-signs/upload-for-price"
                    className="bg-gradient-to-r from-[#e91e63] to-[#03a9f4] text-white font-bold px-7 py-3.5 rounded-full text-center text-sm md:text-base shadow-lg hover:shadow-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 border border-white/20"
                  >
                    Upload Design & Get Quote 
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                  </Link>
                  <span className="text-gray-300 text-xs mt-2 flex items-center justify-center sm:justify-start gap-1">
                    <span className="text-sm">⏱</span> Get your quote under 12 hours
                  </span>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="relative w-full lg:px-[48px] 3xl:px-[96px] pt-1">
            <h1 className="sr-only">{title} — Custom Printing &amp; Signage in Toronto &amp; Mississauga, ON</h1>
            <div className="relative overflow-hidden rounded-xl">
              <picture>
                {tabletHeroImage && (
                  <source srcSet={heroImage} media="(min-width: 992px)" />
                )}
                {tabletHeroImage && (
                  <source srcSet={tabletHeroImage} media="(min-width: 481px)" />
                )}
                <Image
                  className="w-full h-[220px] lg:h-[480px] object-cover object-top pointer-events-none"
                  src={mobileHeroImage || tabletHeroImage || heroImage}
                  alt={`${title} Banner`}
                  width={1200}
                  height={480}
                />
              </picture>


              {/* Desktop Card Overlay */}
              {categorySlug !== "led-display-signs" && (
                <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-[48px] z-10">
                  <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center justify-center w-[360px] border border-gray-100">
                  <div className="text-center font-poppins mb-6">
                    <p className="text-3xl font-extrabold text-gray-900 mb-2 leading-none">
                      {title}
                    </p>
                    <p className="text-sm text-gray-500 font-medium leading-normal">
                      {heroSubtitle}
                    </p>
                  </div>
                  <div className="flex gap-3 w-full">
                    {ctaProduct1 && (
                      <Link
                        href={ctaProduct1.href}
                        className="flex-1 text-gray-900 font-extrabold px-5 py-3.5 rounded-lg text-center text-sm font-poppins shadow-md hover:opacity-90 transition-opacity"
                        style={{
                          background: "#f7f82d",
                        }}
                      >
                        {ctaProduct1.name}
                      </Link>
                    )}
                    {ctaProduct2 && (
                      <Link
                        href={ctaProduct2.href}
                        className="flex-1 border-2 font-extrabold px-5 py-3.5 rounded-lg text-center transition-colors text-sm font-poppins text-gray-900 hover:bg-gray-50"
                        style={{ borderColor: "#f7f82d" }}
                      >
                        {ctaProduct2.name}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              )}
            </div>

            {/* Mobile Card Block (Underneath banner on mobile) */}
            {categorySlug !== "led-display-signs" && (
              <div className="lg:hidden w-full bg-white p-5 text-center border-b">
                <p className="text-2xl font-bold font-poppins text-gray-900 mb-1">
                {title}
              </p>
              <p className="text-sm text-gray-500 font-medium font-poppins mb-4">
                {heroSubtitle}
              </p>
              <div className="flex gap-3 max-w-sm mx-auto">
                {ctaProduct1 && (
                  <Link
                    href={ctaProduct1.href}
                    className="flex-1 text-gray-900 font-bold px-4 py-3 rounded-lg text-center text-sm font-poppins shadow hover:opacity-90 transition-opacity"
                    style={{
                      background: "#f7f82d",
                    }}
                  >
                    {ctaProduct1.name}
                  </Link>
                )}
                {ctaProduct2 && (
                  <Link
                    href={ctaProduct2.href}
                    className="flex-1 border-2 font-bold px-4 py-3 rounded-lg text-center transition-colors text-sm font-poppins text-gray-900 hover:bg-gray-50"
                    style={{ borderColor: "#f7f82d" }}
                  >
                    {ctaProduct2.name}
                  </Link>
                )}
              </div>
              </div>
            )}
          </section>
        )}

        {/* Special Neon Signs CTA Section */}
        {categorySlug === "neon-signs" && (
          <section className="w-full px-[20px] lg:px-[48px] 3xl:px-[96px] pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Link
                href="/neon-signs/neon-creator"
                className="flex flex-col items-center justify-center bg-gray-900 text-white rounded-xl py-3 px-5 hover:scale-[1.02] transition-transform duration-300 shadow-md border-2"
                style={{ borderColor: "#f7f82d" }}
              >
                <span className="text-xl md:text-2xl font-poppins font-extrabold mb-1 text-center">Neon Creator</span>
                <span className="text-gray-300 font-opensans text-center text-xs md:text-sm">Customize your own neon sign in real-time</span>
              </Link>
              <Link
                href="/neon-signs/upload-for-price"
                className="flex flex-col items-center justify-center rounded-xl py-3 px-5 hover:scale-[1.02] transition-transform duration-300 shadow-md border-2 border-gray-900"
                style={{ background: "#f7f82d" }}
              >
                <span className="text-xl md:text-2xl font-poppins font-extrabold text-gray-900 mb-1 text-center">Upload for Price</span>
                <span className="text-gray-900 font-opensans text-center text-xs md:text-sm font-medium">Upload your custom logo or design for a free quote</span>
              </Link>
            </div>
          </section>
        )}

        {/* Special LED Display Signs CTA Section */}
        {categorySlug === "led-display-signs" && (
          <section className="w-full px-[20px] lg:px-[48px] 3xl:px-[96px] pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Link
                href="#configurator"
                className="flex flex-col items-center justify-center bg-gray-900 text-white rounded-xl py-3 px-5 hover:scale-[1.02] transition-transform duration-300 shadow-md border-2"
                style={{ borderColor: "#f7f82d" }}
              >
                <span className="text-xl md:text-2xl font-poppins font-extrabold mb-1 text-center">Configurator</span>
                <span className="text-gray-300 font-opensans text-center text-xs md:text-sm">Build your custom LED display solution</span>
              </Link>
              <Link
                href="/led-display-signs/gallery"
                className="flex flex-col items-center justify-center rounded-xl py-3 px-5 hover:scale-[1.02] transition-transform duration-300 shadow-md border-2 border-gray-900"
                style={{ background: "#f7f82d" }}
              >
                <span className="text-xl md:text-2xl font-poppins font-extrabold text-gray-900 mb-1 text-center">Project Portfolio</span>
                <span className="text-gray-900 font-opensans text-center text-xs md:text-sm font-medium">Explore our past installations and works</span>
              </Link>
            </div>
          </section>
        )}


        {/* Past Works Gallery Section (Only for neon-signs) */}
        {categorySlug === "neon-signs" && (
          <section className="w-full bg-gray-50 py-16 overflow-hidden border-t">
            <div className="w-full px-[20px] lg:px-[48px] 3xl:px-[96px] mb-8 text-center">
              <span className="text-[#e91e63] font-bold text-sm tracking-widest uppercase block mb-2">Our Past Works</span>
              <h2 className="text-3xl md:text-4xl font-poppins font-extrabold text-gray-900">
                Vibrant Creations From Our Clients
              </h2>
            </div>
            
            <div className="relative flex overflow-hidden group">
              <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap min-w-max">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
                  <div key={`set1-${num}`} className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] flex-shrink-0 mx-3 relative rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={`/images/gallery/nano-signs-work${num}-canada.jpeg`}
                      alt={`Past Work ${num}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap min-w-max" aria-hidden="true">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
                  <div key={`set2-${num}`} className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] flex-shrink-0 mx-3 relative rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={`/images/gallery/nano-signs-work${num}-canada.jpeg`}
                      alt={`Past Work ${num}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Browse Products Grid */}
        <section className="w-full px-[20px] lg:px-[48px] 3xl:px-[96px] py-10 bg-gray-50">
          <div className="mb-8 text-center">
            <h2 className="font-poppins font-extrabold text-3xl lg:text-4xl text-gray-900">
              Browse {title}
            </h2>
            <p className="text-gray-500 mt-2 font-medium">Select a product below to customize and order</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 font-opensans">
            {products.map((p) => (
              <Link
                key={p.id}
                href={`/${categorySlug}/${p.id}`}
                className={categorySlug === "neon-signs" 
                  ? "flex flex-col group cursor-pointer h-full" 
                  : "flex flex-col items-center justify-start group text-center cursor-pointer"
                }
              >
                {categorySlug === "neon-signs" ? (
                  <div className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-lg transition-shadow relative text-left w-full h-full">
                    {p.badge && (
                      <div className="absolute top-3 left-3 bg-[#c71de8] text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10 uppercase tracking-wide shadow-md">
                        {p.badge}
                      </div>
                    )}
                    <div className="relative w-full aspect-[4/3] bg-gray-900">
                      <Image
                        alt={p.name}
                        src={p.image}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        quality={85}
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      {p.description && (
                        <p className="text-[#c71de8] text-[10px] font-extrabold uppercase tracking-wider mb-1">{p.description}</p>
                      )}
                      <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 leading-snug">{p.name}</h3>
                      
                      <div className="flex items-center gap-1 mb-3 mt-auto">
                        <div className="flex text-yellow-400">
                          {[1,2,3,4,5].map(s => (
                            <svg key={s} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 font-medium ml-0.5">
                          {p.reviewRating || "4.9"} ({p.reviewCount || "24"})
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-extrabold text-gray-900 text-base md:text-lg">{p.price}</span>
                        <div className="bg-[#c71de8] text-white text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow hover:bg-[#a615c4] transition-colors">Buy Now</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="browse-item-hover relative w-full aspect-square rounded-xl transition-all duration-300 ease-in-out flex items-center justify-center overflow-hidden p-5 bg-slate-50/50">
                      <div className="relative w-full h-full">
                        <Image
                          alt={p.name}
                          src={p.image}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          quality={85}
                          unoptimized={p.image.startsWith("/api/")}
                          className="object-contain transition-all duration-500 ease-in-out group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-center min-h-[40px]">
                      <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-yellow-600 transition-colors">
                        {p.name}
                      </h3>
                    </div>
                  </>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* SEO Category Description */}
        {categoryDescriptionText && (
          <section className="w-full px-[20px] lg:px-[48px] 3xl:px-[96px] py-12 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-6">
                Premium {title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-opensans">
                {categoryDescriptionText}
              </p>
            </div>
          </section>
        )}

        {/* SEO Content Section for Neon Signs */}
        {categorySlug === "neon-signs" && (
          <section className="py-16 px-[20px] lg:px-[48px] 3xl:px-[96px] bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-[#e91e63] text-sm font-extrabold tracking-widest uppercase mb-3 block">Premium Quality</span>
                <h2 className="text-3xl lg:text-4xl font-poppins font-extrabold text-gray-900 mb-6">
                  Why Choose Custom LED Neon Signs?
                </h2>
                <div className="text-gray-700 font-opensans leading-relaxed space-y-4 text-base">
                  <p>
                    Custom LED neon signs are the perfect way to make a bold, unforgettable statement. Whether you are looking to elevate your business storefront, add a magical glow to your wedding day, or create a unique vibe in your home decor, our handcrafted neon signs are designed to impress.
                  </p>
                  <p>
                    Unlike traditional glass neon, our modern LED flex technology is highly energy-efficient, durable, and completely safe to touch. We offer a wide range of colors, fonts, and sizes to ensure your design is truly one-of-a-kind.
                  </p>
                  <p className="font-semibold text-gray-900">
                    From personalized name signs for bedrooms to striking logo lights for corporate offices, the possibilities are endless. Brighten up your space today with a premium custom neon sign from Nano Sign.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg w-full">
                  <Image
                    src="/images/gallery/nano-signs-work10-canada.jpeg"
                    alt="Custom LED Neon Sign for Business"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQs Accordion Section */}
        {faqs && faqs.length > 0 && (
          <section className="py-12 px-[20px] lg:px-[48px] 3xl:px-[96px] bg-gray-50 border-t border-b border-gray-100">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 text-center mb-8">
                {title} Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-5 text-left font-bold text-base lg:text-lg text-gray-800 hover:bg-gray-50 transition-colors"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-5 border-t border-gray-100 bg-gray-50/50">
                          <p className="text-gray-700 leading-relaxed text-sm lg:text-base font-opensans">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Customer Highlights Snippet */}
        {reviewRating && reviewCount && (
          <section className="py-10 px-[20px] lg:px-[48px] 3xl:px-[96px] bg-white text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold font-poppins mb-6">
                Customer Highlights
              </h3>
              <div className="flex justify-center items-center gap-1.5 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-[#f7f82d] fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm font-semibold text-gray-500 ml-2">
                  {reviewRating} / 5 ({reviewCount} Reviews)
                </span>
              </div>
              {reviewQuote && (
                <p className="text-gray-500 text-sm italic font-opensans">
                  &quot;{reviewQuote}&quot;
                </p>
              )}
            </div>
          </section>
        )}

        {/* Two-Column Copy Section */}
        {categoryDescriptionText && (
          <section className="py-12 px-[20px] lg:px-[48px] 3xl:px-[96px] bg-white border-t border-gray-150">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Text description */}
              <div className="flex flex-col text-left">
                <h4 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
                  {title}
                </h4>
                <div
                  className="text-gray-700 leading-relaxed text-base font-opensans space-y-4"
                  dangerouslySetInnerHTML={{ __html: categoryDescriptionText }}
                />
              </div>
              {/* Secondary Image */}
              {categorySecondaryImage && (
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md max-w-[532px] w-full justify-self-center lg:justify-self-end">
                  <Image
                    src={categorySecondaryImage}
                    alt={`${title} Visual Layout`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    quality={85}
                    unoptimized={categorySecondaryImage.startsWith("/api/")}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* LED Configurator Section */}
        {categorySlug === "led-display-signs" && (
          <ConfiguratorSection />
        )}
      </main>

      <Footer />
    </div>
  );
}
