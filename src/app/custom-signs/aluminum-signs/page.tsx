import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { Shield } from "lucide-react";


export const metadata: Metadata = {
  title: "Custom Aluminum Signs Fort Lauderdale FL | Fast Turnaround | Nano Signs",
  description: "Heavy-duty, rust-proof custom aluminum signs in Broward County. Durable metal sign prints with fast turnaround and local pickup in Fort Lauderdale.",
  alternates: {
    canonical: "https://nano-signs.com/custom-signs/aluminum-signs",
  },
};

export default function AluminumSignsPage() {
  return (
    <SignProductPage
      cfg={{
        title: "Custom Aluminum Signs",
        subtitle:
          "Heavy-duty, rust-proof aluminum signs built to last years in any weather.",
        breadcrumb: "Signs",
        breadcrumbHref: "/custom-signs",
        promoText:
          "⚙️ Aluminum Signs — Rust-Proof, Fade-Proof, Weatherproof. Ships Next Day!",
        image: "/images/products/main%20page/aluminum_sign.png",
        images: [
          "/images/products/main%20page/aluminum_sign.png",
          "/images/products/alum_sign_hover.png",
        ],
        ratingScore: "4.9",
        ratingCount: "2,840",
        sizes: [
          { label: '6" x 12"', value: "6x12", basePrice: 8.99 },
          { label: '12" x 12"', value: "12x12", basePrice: 12.99 },
          { label: '12" x 18"', value: "12x18", basePrice: 14.99 },
          { label: '18" x 24"', value: "18x24", basePrice: 21.99 },
          { label: '24" x 24"', value: "24x24", basePrice: 28.99 },
          { label: '24" x 36"', value: "24x36", basePrice: 38.99 },
          { label: "Custom Size", value: "custom", basePrice: 0 },
        ],
        selects: [
          {
            label: "Aluminum Grade",
            options: [
              {
                label: ".040 Aluminum (Standard)",
                value: "040",
                priceAdder: 0,
                description: "Standard gauge — great for most applications.",
              },
              {
                label: ".080 Aluminum (Heavy Duty)",
                value: "080",
                priceAdder: 5.5,
                description: "Double thickness for maximum rigidity.",
              },
            ],
          },
          {
            label: "Finish",
            options: [
              {
                label: "Matte White (Standard)",
                value: "matte",
                priceAdder: 0,
              },
              { label: "High Gloss", value: "gloss", priceAdder: 2.5 },
              {
                label: "Reflective (ASTM D4956)",
                value: "reflective",
                priceAdder: 8,
                description:
                  "Highly visible at night — for safety & regulatory use.",
              },
            ],
          },
          {
            label: "Printing",
            options: [
              { label: "Single Sided", value: "single", priceAdder: 0 },
              { label: "Double Sided", value: "double", priceAdder: 6 },
            ],
          },
        ],
        toggleGroups: [
          {
            label: "Mounting Holes",
            options: [
              { id: "no_holes", label: "No Holes", priceAdder: 0 },
              { id: "corner_holes", label: "Corner Holes", priceAdder: 0 },
              {
                id: "custom_holes",
                label: "Custom Hole Placement",
                priceAdder: 1,
              },
              { id: "grommets", label: "Grommets Added", priceAdder: 2 },
            ],
          },
          {
            label: "Rounded Corners",
            options: [
              { id: "square", label: "Square Corners", priceAdder: 0 },
              { id: "rounded", label: "Rounded Corners", priceAdder: 1.5 },
            ],
          },
        ],
        qtyDiscount: "Volume pricing — buy 10+ for up to 13% off",
        keyFeatures: [
          "Rust-proof, corrosion-resistant aluminum",
          "UV-resistant inks — won't fade for years",
          "Available in .040 and .080 gauge",
          "Reflective finish option for regulatory use",
          "Pre-drilled mounting holes available",
          "Square or rounded corner options",
        ],
        useCases: [
          "Business Signs",
          "Parking Signs",
          "Street Signs",
          "Safety Signs",
          "Property Signs",
          "Regulatory Signs",
          "Directional Signs",
        ],
        specs: [
          { key: "Standard Grade", value: '.040" Aluminum' },
          { key: "Heavy Duty Grade", value: '.080" Aluminum' },
          { key: "Print Method", value: "Direct UV Digital Print" },
          { key: "Color Profile", value: "CMYK" },
          { key: "Finish Options", value: "Matte, Gloss, Reflective" },
          { key: "Hole Diameter", value: '5/16" standard' },
          { key: "Turnaround", value: "Next Business Day" },
        ],
        faqs: [
          {
            q: "How long do aluminum signs last?",
            a: "Our aluminum signs are rated for 7–10+ years outdoors. The UV-resistant inks won't fade, and aluminum won't rust or corrode.",
          },
          {
            q: "Can I get reflective aluminum signs?",
            a: "Yes! Select the 'Reflective' finish option. Our reflective signs meet ASTM D4956 standards and are great for regulatory, safety, and parking applications.",
          },
          {
            q: "Are mounting holes included?",
            a: 'Mounting holes are optional. Choose corner holes (standard 5/16") or custom placement in the configurator — always free to add.',
          },
          {
            q: "Do you offer custom shapes?",
            a: "Standard shapes (square/rectangle with optional rounded corners) are available online. Contact us for completely custom cut shapes.",
          },
        ],
        reviews: [
          {
            author: "Frank L.",
            rating: 5,
            text: "We've had these parking signs up for 3 years and they still look brand new. Incredible durability.",
          },
          {
            author: "Donna S.",
            rating: 5,
            text: "Ordered 50 directional signs for our campus. Fast turnaround, perfect print quality.",
          },
          {
            author: "Brian T.",
            rating: 5,
            text: "The reflective signs are exactly what we needed for night visibility. Very professional.",
          },
        ],
        ctaHeading: "Signs That Last a Decade",
        ctaBody:
          "Rust-proof aluminum signs printed with UV inks that resist fading for years.",
        ctaLabel: "Order Aluminum Signs Now",
        uniqueCallout: {
          icon: <Shield className="w-8 h-8 text-gray-600" />,
          heading: "Built Like a Tank — Backed by Our Quality Guarantee",
          body: "Our aluminum signs are manufactured from premium-grade alloy and printed with industrial UV-cure inks that are tested to withstand years of sun, rain, and extreme temperatures.",
          color: "bg-gray-50 border border-gray-300 text-gray-800",
        },
      }}
    />
  );
}
