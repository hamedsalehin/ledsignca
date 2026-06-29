import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { Home } from "lucide-react";


export const metadata: Metadata = {
  title: "Real Estate Sign Panels Toronto ON | Nano Signs",
  description: "Design custom real estate panels, riders, and frames online or in person in the Greater Toronto Area. High-durability property signs with fast turnaround.",
  alternates: {
    canonical: "https://led-sign.ca/custom-signs/real-estate-panels",
  },
};

export default function RealEstatePanelsPage() {
  return (
    <SignProductPage
      cfg={{
          minQuantity: 100,
          quantityPrices: { 100: 330, 200: 650, 300: 970 },
          title: "Personalized Real Estate Panels",
          subtitle:
            "Expert-grade-grade panels for property listings and open houses.",
          breadcrumb: "Signs",
          breadcrumbHref: "/personalized-signs",
          promoText: "🏠 Real Estate Panels — Next Day Delivery Available!",
          image: "/images/products/main-page/Real_estate_panels-toronto-printing-ca.png",
          images: [
            "/images/products/main-page/Real_estate_panels-toronto-printing-ca.png",
            "/images/products/gallery/real_estate_panels_in_action_1-toronto-printing-ca.png",
            "/images/products/gallery/real_estate_panels_in_action_2-toronto-printing-ca.png",
          ],
          ratingScore: "4.9",
          ratingCount: "3,150",
          sizes: [
            { label: '20" x 24"', value: "20x24", basePrice: 3.30 }
          ],
          selects: [
            {
              label: "Material",
              options: [
                {
                  label: "4mm Coroplast (Standard)",
                  value: "4mm_coro",
                  priceAdder: 0,
                  description:
                    "Lightweight, weather-resistant. Best for short listings.",
                },
                {
                  label: ".040 Aluminum",
                  value: "aluminum_040",
                  priceAdder: 6,
                  description: "Rigid, resilient metal. Lasts years outdoors.",
                },
                {
                  label: "6mm Heavy-Duty Coroplast",
                  value: "6mm_coro",
                  priceAdder: 2.5,
                  description: "Thicker plastic for longer listing cycles.",
                },
              ],
            },
            {
              label: "Printing",
              options: [
                { label: "Single Sided", value: "single", priceAdder: 0 },
                { label: "Double Sided", value: "double", priceAdder: 3.5 },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Printed Sides",
              options: [
                { id: "double", label: "All Double Sided", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Agent bulk pricing — buy 10+ and save",
          keyFeatures: [
            "Expert-grade real estate layouts",
            "Resilient exterior materials",
            "Rider slot compatible",
            "UV-resistant fade-proof printing",
            "Compatible with standard real estate frames",
            "Next-day turnaround available",
          ],
          useCases: ["For Sale", "Open House", "For Rent", "Sold"],
          specs: [
            { key: "Standard Material", value: "4mm Corrugated Plastic (Coroplast)" },
            { key: "Metal Option", value: ".040 Aluminum" },
            { key: "Print Resolution", value: "720 x 1440 dpi" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.125" all sides' },
            { key: "Frame Compatibility", value: 'Standard 30" wide RE frames' },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "Are your panels compatible with standard real estate frames?",
              a: 'Yes! Our 18"x24" and 24"x24" panels are designed to fit standard real estate wire frames and yard arm posts.',
            },
            {
              q: "Can I order rider panels to match my main panel?",
              a: "Absolutely. Select the rider size in the dropdown and we'll match the design style for a cohesive, expert-grade look.",
            },
            {
              q: "Can I include my brokerage logo and headshot?",
              a: "Yes. Upload any artwork file and we'll print it exactly as provided. Our free artwork check ensures everything looks perfect.",
            },
            {
              q: "What is the minimum order?",
              a: "We have no minimum! Order as few as 1 panel or as many as 1,000.",
            },
          ],
          reviews: [
            {
              author: "Jessica A.",
              rating: 5,
              text: "I've been ordering from here for 2 years. Best quality real estate panels I've found, and delivery is always on time.",
            },
            {
              author: "Carlos M.",
              rating: 5,
              text: "Ordered riders for my open house last minute — they arrived the next morning. Saved my weekend!",
            },
            {
              author: "Patricia W.",
              rating: 5,
              text: "The aluminum panels look incredibly expert-grade. My clients always comment on them.",
            },
          ],
          ctaHeading: "List More. Sell Faster.",
          }}
    />
  );
}
