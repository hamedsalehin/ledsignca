"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  {
    src: "/images/hero-image-toronto-printing-ca.jpeg",
    alt: "Toronto Nano Signs — High-quality banners, outdoor signs, roll-ups and displays",
  },
  {
    src: "/images/hero-image 2-toronto-printing-ca.jpg",
    alt: "Toronto Nano Signs — Top-tier bespoke printing and display solutions",
  },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full">
      <h1 className="sr-only">Top Custom Signs, Digital Displays &amp; Banners in the Greater Toronto Area — Nano Signs</h1>
      <div className="relative w-full aspect-[2164/727] overflow-hidden bg-slate-950">
        {heroImages.map((img, index) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              quality={90}
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Dynamic percentage-positioned Request Quote Button overlaying the hero image */}
        <Link
          href="/get-a-quote"
          className="absolute bottom-[10%] left-[8%] z-20 px-[3%] py-[1.2%] bg-white text-gray-950 font-black uppercase tracking-wider rounded-none shadow-2xl transition-all duration-300 hover:bg-[#f7f82d] hover:text-gray-900 hover:border-[#f7f82d] border border-transparent active:scale-95"
          style={{
            fontSize: "clamp(8px, 1.15vw, 16px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          Get a Free Estimate
        </Link>
      </div>
    </section>
  );
}
