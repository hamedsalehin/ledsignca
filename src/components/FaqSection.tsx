"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What types of custom signs and banners do you manufacture in Toronto?",
    answer:
      "Nano Signs specializes in custom Neon LED signs, commercial LED display boards, vinyl banners, retractable pull-up banners, yard signs, vehicle graphics & magnets, real estate signs, and trade show displays with fast local turnaround across the GTA.",
  },
  {
    question: "How long does custom sign production and delivery take?",
    answer:
      "Most standard custom banners and vinyl signs are ready within 1 to 3 business days. Custom Neon LED signs and complex illuminated channel letters typically take 5 to 7 business days. Rush 24-hour service is also available for urgent orders.",
  },
  {
    question: "Do you offer professional graphic design and file review before printing?",
    answer:
      "Yes! We provide complimentary design file reviews for all orders to ensure correct print resolution, bleed, and formatting. You can also use our interactive Online Design Studio to create custom artwork directly on our website.",
  },
  {
    question: "Can custom LED neon signs be used outdoors?",
    answer:
      "We offer both indoor and weather-resistant outdoor IP67 waterproof Neon LED signs. Our outdoor models feature sealed silicone jackets and weather-proof power supplies engineered for Canadian winter conditions.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const leftColumnItems = FAQ_ITEMS.filter((_, i) => i % 2 === 0);
  const rightColumnItems = FAQ_ITEMS.filter((_, i) => i % 2 === 1);

  return (
    <section className="py-6 md:py-8 bg-gradient-to-b from-[#090c15] to-[#0e1222] border-t border-slate-800/80 text-slate-100">
      {/* Inject FAQPage Structured Data for Google AI & Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f7f82d]/10 border border-[#f7f82d]/30 text-[#f7f82d] text-[11px] font-semibold uppercase tracking-wider mb-1.5">
            <HelpCircle className="w-3 h-3" />
            Frequently Asked Questions
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Got Questions? We&apos;ve Got Answers.
          </h2>
          <p className="mt-1 text-slate-400 text-xs md:text-sm max-w-none text-center">
            Everything you need to know about ordering custom signs, LED displays, and banners from Nano Signs Toronto.
          </p>
        </div>

        {/* 2-Column Extra Compact Grid to minimize vertical space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
          {/* Column 1 */}
          <div className="space-y-2.5">
            {leftColumnItems.map((item, colIdx) => {
              const originalIndex = colIdx * 2;
              const isOpen = openIndex === originalIndex;
              return (
                <div
                  key={originalIndex}
                  className={`border rounded-lg overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "bg-[#161c2e] border-[#f7f82d]/50 shadow-md shadow-black/40"
                      : "bg-[#111625] border-slate-800 hover:border-slate-700 hover:bg-[#141a2c]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(originalIndex)}
                    className="w-full text-left px-3.5 py-2.5 flex items-center justify-between gap-2.5 font-semibold text-slate-100 hover:text-[#f7f82d] transition-colors group"
                  >
                    <span className="text-xs md:text-sm leading-snug">{item.question}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#f7f82d]" : "text-slate-400 group-hover:text-[#f7f82d]"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-3.5 pb-2.5 pt-1 text-slate-300 text-xs leading-relaxed border-t border-slate-800/60 bg-[#0d111d]/50">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-2.5">
            {rightColumnItems.map((item, colIdx) => {
              const originalIndex = colIdx * 2 + 1;
              const isOpen = openIndex === originalIndex;
              return (
                <div
                  key={originalIndex}
                  className={`border rounded-lg overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "bg-[#161c2e] border-[#f7f82d]/50 shadow-md shadow-black/40"
                      : "bg-[#111625] border-slate-800 hover:border-slate-700 hover:bg-[#141a2c]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(originalIndex)}
                    className="w-full text-left px-3.5 py-2.5 flex items-center justify-between gap-2.5 font-semibold text-slate-100 hover:text-[#f7f82d] transition-colors group"
                  >
                    <span className="text-xs md:text-sm leading-snug">{item.question}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#f7f82d]" : "text-slate-400 group-hover:text-[#f7f82d]"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-3.5 pb-2.5 pt-1 text-slate-300 text-xs leading-relaxed border-t border-slate-800/60 bg-[#0d111d]/50">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
