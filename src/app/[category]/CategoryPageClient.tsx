"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface ProductItem {
  id: string;
  name: string;
  image: string;
  hoverImage?: string;
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
            <Link href="/" className="hover:text-[#ff2d78] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-gray-900">
              {breadcrumbLabel}
            </span>
          </div>
        </div>

        {/* Hero Section Banner */}
        <section className="relative w-full lg:px-[48px] 3xl:px-[96px] pt-1">
          <h1 className="sr-only">{title} — Custom Printing &amp; Signage in Oakland Park &amp; Fort Lauderdale, FL</h1>
          <div className="relative overflow-hidden rounded-xl">
            <picture>
              {tabletHeroImage && (
                <source srcSet={heroImage} media="(min-width: 992px)" />
              )}
              {tabletHeroImage && (
                <source srcSet={tabletHeroImage} media="(min-width: 481px)" />
              )}
              <img
                className="w-full h-[220px] lg:h-[480px] object-cover object-top pointer-events-none"
                src={mobileHeroImage || tabletHeroImage || heroImage}
                alt={`${title} Banner`}
                width={1200}
                height={480}
              />
            </picture>


            {/* Desktop Card Overlay */}
            <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-[48px] z-10">
              <div className="bg-white rounded-xl shadow-xl p-10 flex flex-col items-center justify-center w-[450px] border border-gray-100">
                <div className="text-center font-poppins mb-6">
                  <p className="text-3xl font-extrabold text-gray-900 mb-2 leading-none">
                    {title}
                  </p>
                  <p className="text-lg text-gray-700 font-semibold leading-normal">
                    {heroSubtitle}
                  </p>
                </div>
                <div className="flex gap-3 w-full">
                  {ctaProduct1 && (
                    <Link
                      href={ctaProduct1.href}
                      className="flex-1 text-white font-extrabold px-5 py-3.5 rounded-lg text-center text-sm font-poppins shadow-md hover:opacity-90 transition-opacity"
                      style={{
                        background: "linear-gradient(135deg, #ff2d78, #b020ff)",
                      }}
                    >
                      {ctaProduct1.name}
                    </Link>
                  )}
                  {ctaProduct2 && (
                    <Link
                      href={ctaProduct2.href}
                      className="flex-1 border-2 font-extrabold px-5 py-3.5 rounded-lg text-center transition-colors text-sm font-poppins"
                      style={{ borderColor: "#00e5ff", color: "#00e5ff" }}
                    >
                      {ctaProduct2.name}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Card Block (Underneath banner on mobile) */}
          <div className="lg:hidden w-full bg-white p-5 text-center border-b">
            <p className="text-2xl font-bold font-poppins text-gray-900 mb-1">
              {title}
            </p>
            <p className="text-base text-gray-600 font-semibold font-poppins mb-4">
              {heroSubtitle}
            </p>
            <div className="flex gap-3 max-w-sm mx-auto">
              {ctaProduct1 && (
                <Link
                  href={ctaProduct1.href}
                  className="flex-1 text-white font-bold px-4 py-3 rounded-lg text-center text-sm font-poppins shadow hover:opacity-90 transition-opacity"
                  style={{
                    background: "linear-gradient(135deg, #ff2d78, #b020ff)",
                  }}
                >
                  {ctaProduct1.name}
                </Link>
              )}
              {ctaProduct2 && (
                <Link
                  href={ctaProduct2.href}
                  className="flex-1 border-2 font-bold px-4 py-3 rounded-lg text-center transition-colors text-sm font-poppins"
                  style={{ borderColor: "#00e5ff", color: "#00e5ff" }}
                >
                  {ctaProduct2.name}
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Browse Products Grid */}
        <section className="w-full px-[20px] lg:px-[48px] 3xl:px-[96px] py-10">
          <div className="mb-6">
            <h2 className="font-poppins font-semibold text-2xl lg:text-3xl text-gray-900">
              Browse Products
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 font-opensans">
            {products.map((p) => (
              <Link
                key={p.id}
                href={`/${categorySlug}/${p.id}`}
                className="flex flex-col items-center justify-start group text-center cursor-pointer"
              >
                {/* Image Container with premium scale-on-hover effect */}
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
                {/* Product Name */}
                <div className="mt-3 flex items-center justify-center min-h-[40px]">
                  <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#ff2d78] transition-colors">
                    {p.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

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
                    className="w-5 h-5 text-[#ff2d78] fill-current"
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
      </main>

      <Footer />
    </div>
  );
}
