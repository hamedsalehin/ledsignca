import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Channel Letter Signs Fort Lauderdale FL | Nano Signs",
  description: "Premium 3D backlit and front-lit channel letter storefront signs in Broward County. Fast quotes and high-quality fabrication in Fort Lauderdale, FL.",
  alternates: {
    canonical: "https://led-sign.ca/custom-signs/channel-letter-signs",
  },
};

export default function ChannelLetterSignsPage() {
  return (
    <SignProductPage
      cfg={{
        title: "Custom Channel Letter Signs",
        subtitle:
          "Professional dimensional signage with brilliant LED illumination options.",
        breadcrumb: "Signs",
        breadcrumbHref: "/custom-signs",
        promoText: "✨ Modern LED Channel Letters — Professional Storefront Impact. Shipped Fast!",
        image: "/images/products/main%20page/channel_letter_signs-toronto-printing-ca.png",
        images: [
          "/images/products/main%20page/channel_letter_signs-toronto-printing-ca.png",
          "/images/products/gallery/channel_letter_storefront_1-toronto-printing-ca.png",
          "/images/products/gallery/channel_letter_storefront_2-toronto-printing-ca.png",
        ],
        ratingScore: "4.9",
        ratingCount: "820",
        sizes: [
          { label: '12" High Letters', value: "12in", basePrice: 149.99 },
          { label: '18" High Letters', value: "18in", basePrice: 224.99 },
          { label: '24" High Letters', value: "24in", basePrice: 299.99 },
          { label: '36" High Letters', value: "36in", basePrice: 449.99 },
        ],
        selects: [
          {
            label: "Illumination Type",
            options: [
              {
                label: "Front-Lit (LED Face Glowing)",
                value: "front_lit",
                priceAdder: 0,
                description: "Standard bright acrylic faces with internal LED illumination.",
              },
              {
                label: "Halo-Lit / Reverse-Lit (Rear Glowing)",
                value: "halo_lit",
                priceAdder: 50.0,
                description: "Light projects onto the wall behind, creating a halo effect.",
              },
              {
                label: "Dual-Lit (Front & Rear Glowing)",
                value: "dual_lit",
                priceAdder: 90.0,
                description: "Combines glowing faces and halo backlighting for maximum impact.",
              },
              {
                label: "Non-Illuminated Dimensional Letters",
                value: "non_illuminated",
                priceAdder: -40.0,
                description: "High-end 3D metal or acrylic letters without lights.",
              },
            ],
          },
          {
            label: "Mounting Style",
            options: [
              {
                label: "Raceway Mount (Standard)",
                value: "raceway",
                priceAdder: 0,
                description: "Letters pre-installed on a metal box/bar container for easier wiring.",
              },
              {
                label: "Flush / Direct Wall Mount",
                value: "flush",
                priceAdder: 35.0,
                description: "Letters mounted directly to the wall surface with individual wiring.",
              },
            ],
          },
        ],
        toggleGroups: [
          {
            label: "Face Acrylic Color",
            options: [
              { id: "white_face", label: "Brilliant White", priceAdder: 0 },
              { id: "red_face", label: "Vibrant Red", priceAdder: 0 },
              { id: "blue_face", label: "Royal Blue", priceAdder: 0 },
              { id: "black_face", label: "Black (Glows White)", priceAdder: 15.0 },
            ],
          },
          {
            label: "Return / Trim Color (Sides)",
            options: [
              { id: "black_return", label: "Sleek Black", priceAdder: 0 },
              { id: "silver_return", label: "Brushed Aluminum", priceAdder: 0 },
              { id: "bronze_return", label: "Classic Bronze", priceAdder: 0 },
            ],
          },
        ],
        qtyDiscount: "Volume discounts on complex multi-letter signs",
        keyFeatures: [
          "Heavy-duty aluminum returns (side walls) will not rust",
          "Energy-efficient and long-lasting UL-listed LEDs",
          "Custom fonts, colors, and logos supported",
          "Front-lit and halo-lit options for stunning looks",
          "Raceway mount option for simplified building installation",
        ],
        useCases: [
          "Retail Storefronts",
          "Corporate Offices",
          "Restaurants & Cafes",
          "Shopping Centers",
          "Building Exterior Signage",
        ],
        specs: [
          { key: "Letter Thickness (Depth)", value: "3\" to 5\" deep returns" },
          { key: "Illumination source", value: "UL-certified Low-voltage 12V LEDs" },
          { key: "Face Material", value: "3/16\" Cast Acrylic" },
          { key: "Return Material", value: "0.040\" Pre-painted Aluminum" },
          { key: "Wiring Type", value: "Single-source connection (with Raceway)" },
          { key: "Outdoor Lifespan", value: "10+ years maintenance-free" },
        ],
        faqs: [
          {
            q: "What is the difference between front-lit and halo-lit letters?",
            a: "Front-lit letters have acrylic faces that glow in the chosen color, throwing light forward. Halo-lit (or reverse-lit) letters have aluminum faces but open backs, allowing light to reflect off the wall behind the letter to create a soft, upscale halo glow.",
          },
          {
            q: "What is a raceway mount?",
            a: "A raceway is a metal box structure that the channel letters are mounted to. It holds the power supplies and wiring. Mounting via a raceway only requires a few holes in the building's facade, whereas flush mounting requires drilling individual mounting and wiring holes for every single letter.",
          },
          {
            q: "Do you supply the mounting templates and hardware?",
            a: "Yes! Every channel letter sign comes with a full-size paper mounting template, studs, silicone spacers, and clear instructions to make installation straightforward for any handyman or signage installer.",
          },
        ],
        reviews: [
          {
            author: "Gordon K.",
            rating: 5,
            text: "The halo-lit letters transformed our cafe facade. Absolute showstopper at night. Highly recommend!",
          },
          {
            author: "Samantha V.",
            rating: 5,
            text: "Fantastic customer support in setting up our custom vector logo. The letters arrived securely crated and installation templates were exact.",
          },
        ],
        ctaHeading: "Brighten Your Business Facade",
        ctaBody:
          "Custom 3D LED channel letters manufactured with commercial-grade components.",
        ctaLabel: "Order Channel Letter Signs Now",
        uniqueCallout: {
          icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
          heading: "Premium 3D Dimensional Illumination",
          body: "Our channel letters are built from high-grade aluminum returns and premium acrylic faces, fitted with high-efficiency 12V LED illumination to make your business shine day and night.",
          color: "bg-yellow-50 border border-yellow-200 text-yellow-900",
        },
      }}
    />
  );
}
