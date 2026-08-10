import Image from "next/image";
import Link from "next/link";

const heroImages = [
  {
    src: "/images/hero-image-toronto-printing-ca.webp",
    alt: "Toronto Nano Signs — High-quality banners, outdoor signs, roll-ups and displays",
  },
  {
    src: "/images/hero-image 2-toronto-printing-ca.webp",
    alt: "Toronto Nano Signs — Top-tier bespoke printing and display solutions",
  },
];

export function HeroSection() {
  return (
    <section className="w-full">
      <h1 className="sr-only">Top Custom Signs, Digital Displays &amp; Banners in the Greater Toronto Area — Nano Signs</h1>
      <div className="relative w-full aspect-[2164/727] overflow-hidden bg-slate-950">
        
        {/* CSS for fading images */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeInOut {
            0%, 45% { opacity: 1; z-index: 10; }
            50%, 95% { opacity: 0; z-index: 0; }
            100% { opacity: 1; z-index: 10; }
          }
          .hero-img-0 { animation: fadeInOut 10s infinite; }
          .hero-img-1 { animation: fadeInOut 10s infinite; animation-delay: -5s; }
        `}} />

        {heroImages.map((img, index) => (
          <div
            key={img.src}
            className={`absolute inset-0 hero-img-${index}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 2164px"
              quality={75}
              className="object-cover object-center"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
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
