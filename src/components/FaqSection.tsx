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
  {
    question: "Where are you located, and do you serve all of the Greater Toronto Area (GTA)?",
    answer:
      "Our facility is located at 2190 Warden Ave, Toronto, ON M1T 1V6. We offer local pickup as well as fast courier shipping to Toronto, Scarborough, North York, Etobicoke, Mississauga, Markham, Vaughan, and Richmond Hill.",
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

  return (
    <section className="py-16 bg-slate-900/60 border-t border-slate-800 text-slate-100">
      {/* Inject FAQPage Structured Data for Google AI & Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f82d]/10 border border-[#f7f82d]/30 text-[#f7f82d] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Got Questions? We&apos;ve Got Answers.
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl mx-auto">
            Everything you need to know about ordering custom signs, LED displays, and banners from Nano Signs Toronto.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-slate-100 hover:text-[#f7f82d] transition-colors"
                >
                  <span className="text-base md:text-lg">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#f7f82d]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-800/60 bg-slate-900/30">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
