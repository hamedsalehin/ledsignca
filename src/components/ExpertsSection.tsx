import Image from "next/image";

export function ExpertsSection() {
  return (
    <section className="py-6 md:py-10 relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/experts_section_image-toronto-printing-ca.jpeg"
          alt="Local print shop and custom signage facility"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
        {/* Logo-inspired pink/cyan tinted overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "rgba(0,0,0,0.45)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <div
          className="rounded-2xl p-8 md:p-12 max-w-2xl mx-auto text-center"
          style={{
            background: "rgba(255,255,255,0.97)",
            boxShadow:
              "0 0 40px rgba(255,45,120,0.25), 0 0 80px rgba(0,229,255,0.12)",
          }}
        >
          <h2 className="font-poppins text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Toronto's Source for Bespoke Signage &amp; Commercial Displays
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
            Discover Nano Signs, the Greater Toronto Area's top choice for rapid and reliable printing.
            Whether you are ordering your marketing materials through our online platform or dropping by our facility,
            we are equipped to deliver high-quality custom displays, bright LED boards, pull-up banners,
            and corporate stationery. Proudly supporting businesses across Toronto, Mississauga, and
            Southern Ontario, our dedicated production team guarantees exceptional quality and speed to
            make your business stand out.
          </p>
          <a
            href="tel:+14168388994"
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 font-bold rounded-full text-gray-900 transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{
              background: "#f7f82d",
              boxShadow:
                "0 0 20px rgba(255,45,120,0.45), 0 0 40px rgba(0,229,255,0.2)",
            }}
          >
            Contact Our Specialists: +1 416-838-8994
          </a>
        </div>
      </div>
    </section>
  );
}
