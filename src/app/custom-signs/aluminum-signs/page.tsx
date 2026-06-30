import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { Shield } from "lucide-react";


export const metadata: Metadata = {
  title: "Custom Aluminum Signs Toronto ON | Fast Turnaround | Nano Signs",
  description: "Heavy-duty, rust-proof custom aluminum signs in the Greater Toronto Area. Durable metal sign prints with fast turnaround and local pickup in Toronto.",
  alternates: {
    canonical: "https://led-sign.ca/custom-signs/aluminum-signs",
  },
};

export default function AluminumSignsPage() {
  return (
    <SignProductPage
      cfg={{
          title: "Personalized Aluminum Signs",
          subtitle:
            "Industrial-strength, rust-proof aluminum signs built to last years in any weather.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "⚙️ Aluminum Signs — Rust-Proof, Fade-Proof, Weatherproof. Ships Next Day!",
          image: "/images/products/main-page/aluminum_sign-toronto-printing-ca.png",
          images: [
            "/images/products/main-page/aluminum_sign-toronto-printing-ca.png",
            "/images/products/alum_sign_hover-toronto-printing-ca.png",
          ],
          ratingScore: "4.9",
          ratingCount: "2,840",
          sizes: [
            { label: '8" x 12"', value: "8x12", basePrice: 19.84, quantityPrices: { 1: 19.84, 10: 85.50, 20: 135.25 } },
            { label: '12" x 18"', value: "12x18", basePrice: 35.84, quantityPrices: { 1: 35.84, 10: 105.50, 20: 250.25 } },
            { label: '18" x 24"', value: "18x24", basePrice: 55.84, quantityPrices: { 1: 55.84, 10: 250.50, 20: 470.35 } },
            { label: '24" x 32"', value: "24x32", basePrice: 60.84, quantityPrices: { 1: 60.84, 10: 410.50, 20: 850.35 } }
          ],
          selects: [
            {
              label: "Aluminum Grade",
              options: [
                { label: ".040 Aluminum (Standard)", value: "040", priceAdder: 0 }
              ]
            }
          ],
          toggleGroups: [
            {
              label: "Printed Sides",
              options: [
                { id: "single", label: "Single Sided Only", priceAdder: 0 }
              ]
            },
            {
              label: "Corner Option",
              options: [
                { id: "square", label: "Square Corners", priceAdder: 0 },
                { id: "round", label: "Round Corners", priceAdder: 2 }
              ]
            }
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
            "Corporate Signs",
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
              a: "Yes! Select the 'Reflective' finish option. Our reflective signs meet ASTM D4956 standards and are excellent for regulatory, safety, and parking applications.",
            },
            {
              q: "Are mounting holes included?",
              a: 'Mounting holes are optional. Choose corner holes (standard 5/16") or personalized placement in the configurator — always free to add.',
            },
            {
              q: "Do you offer personalized shapes?",
              a: "Standard shapes (square/rectangle with optional rounded corners) are available online. Contact us for completely personalized cut shapes.",
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
              text: "The reflective signs are exactly what we needed for night visibility. Very expert-grade.",
            },
          ],
          ctaHeading: "Signs That Last a Decade",
          }}
    />
  );
}
