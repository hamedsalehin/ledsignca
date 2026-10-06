import Image from "next/image";
const valueProps = [
  {
    icon: "https://ext.same-assets.com/1114826555/593408931.svg",
    title: "Top-Tier Customer Care",
    description:
      "Enjoy industry-leading support throughout your entire ordering process.",
    even: true,
  },
  {
    icon: "https://ext.same-assets.com/1114826555/3683589186.svg",
    title: "Tax-Free Eligible Purchases",
    description:
      "Save money by claiming tax exemptions on qualifying bulk or corporate orders.",
    even: false,
  },
  {
    icon: "https://ext.same-assets.com/1114826555/3064715821.svg",
    title: "Professional Graphic Design",
    description:
      "Collaborate with our in-house design experts to seamlessly turn your ideas into reality.",
    even: true,
  },
  {
    icon: "https://ext.same-assets.com/1114826555/3700267247.svg",
    title: "Volume & Business Discounts",
    description:
      "Unlock special rates on large orders to maintain consistent branding affordably.",
    link: "Discover More",
    even: false,
  },
  {
    icon: "https://ext.same-assets.com/1114826555/2316830229.svg",
    title: "Our Quality Promise",
    description:
      "If you aren't completely thrilled with your order, our dedicated team will resolve it.",
    even: true,
  },
  {
    icon: "https://ext.same-assets.com/1114826555/1104967888.svg",
    title: "Complimentary File Review",
    description:
      "Our team thoroughly checks your submitted artwork at no cost to ensure a flawless print.",
    even: false,
  },
];

export function ValuePropositions() {
  return (
    <section
      className="py-4 md:py-6"
      style={{
        background: "#fffde7",
      }}
    >
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="bg-white rounded-2xl p-6 flex items-start gap-4 value-card-hover shadow-sm"
            >
              {/* Icon background — alternates pink/cyan tint */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(247,248,45,0.12)",
                }}
              >
                <Image
                  src={prop.icon}
                  alt={prop.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-sm sm:text-base text-gray-900 mb-1">
                  {prop.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {prop.description}
                  {prop.link && (
                    <>
                      {" "}
                      <a
                        href="#"
                        className="font-semibold hover:underline"
                        style={{ color: "#f7f82d" }}
                        aria-label={`${prop.link} about ${prop.title}`}
                      >
                        {prop.link}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
