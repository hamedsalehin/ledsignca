import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { Layers } from "lucide-react";


export const metadata: Metadata = {
  title: "Custom Yard Signs Toronto ON | Fast Turnaround | Nano Signs",
  description: "Design custom corrugated plastic yard signs online with H-stakes. Fastest turnaround times in the Greater Toronto Area. Next-day shipping/local pickup.",
  alternates: {
    canonical: "https://led-sign.ca/custom-signs/yard-signs",
  },
};

export default function YardSignsPage() {
  return (
    <SignProductPage
      cfg={{
          title: "Personalized Yard Signs",
          subtitle: "Hanging lawn and commercial signs suspended from wood or metal L-stands.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "🏡 25% OFF Yard Signs + Free Shipping — Most Popular Sign in America!",
          image: "/images/products/main-page/yard_sign-toronto-printing-ca.jpeg",
          images: [
            "/images/products/main-page/yard_sign-toronto-printing-ca.jpeg",
            "/images/products/gallery/yard_sign_in_action_1-toronto-printing-ca.png",
            "/images/products/gallery/yard_sign_in_action_2-toronto-printing-ca.png",
          ],
          ratingScore: "4.9",
          ratingCount: "8,420",
          sizes: [
            { label: '24" x 32"', value: "24x32", basePrice: 45 },
            { label: '24" x 36"', value: "24x36", basePrice: 65 },
            { label: '32" x 48"', value: "32x48", basePrice: 70 },
            { label: '36" x 48"', value: "36x48", basePrice: 80 }
          ],
          selects: [
            {
              label: "Material",
              options: [
                { label: "4mm Coroplast", value: "4mm", priceAdder: 0 },
                { label: "10mm Heavy Duty", value: "10mm", sizePriceAdders: { "24x32": 10, "24x36": 10, "32x48": 12, "36x48": 10 } },
                { label: "Aluminum (ACM)", value: "acm", sizePriceAdders: { "24x32": 15, "24x36": 30, "32x48": 35, "36x48": 40 } }
              ]
            },
            {
              label: "Frame/Stand Options",
              options: [
                { label: "Sign Panel Only", value: "none", priceAdder: 0 },
                { label: "Black L-Shaped Post Stand", value: "stand", priceAdder: 95 }
              ]
            },
            {
              label: "Coating",
              options: [
                { label: "No Coating", value: "none", priceAdder: 0 },
                { label: "UV Gloss Coating", value: "uv", sizePriceAdders: { "24x32": 5.33, "24x36": 6.00, "32x48": 10.66, "36x48": 12.00 } }
              ]
            }
          ],
          toggleGroups: [
            {
              label: "Printed Sides",
              options: [
                { id: "double", label: "ALL DOUBLE SIDED", priceAdder: 0 }
              ]
            },
            {
              label: "Grommets",
              options: [
                { id: "grommets", label: "3 Standard Grommets Included", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Buy more, save more — up to 13% off!",
          keyFeatures: [
            "Weather-resistant corrugated plastic",
            "Full-color edge-to-edge printing",
            "Ships in as fast as 1 corporate day",
            "Optional L-shaped wood or metal stands available",
            "Recyclable & eco-friendly material",
            "Single or double-sided printing",
          ],
          useCases: [
            "Political Campaigns",
            "Real Estate",
            "Open Houses",
            "Elections",
            "Corporate Promotions",
            "Events",
          ],
          specs: [
            {
              key: "Standard Material",
              value: "4mm Corrugated Plastic (Coroplast)",
            },
            { key: "Heavy Duty Option", value: "6mm Coroplast" },
            { key: "Print Resolution", value: "720 x 1440 dpi Full Color" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.125" on all sides' },
            { key: "File Formats", value: "PDF, AI, EPS, PNG, TIFF" },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "How long will yard signs last outdoors?",
              a: "Standard 4mm coroplast yard signs typically last 6–12 months outdoors. The 6mm industrial-strength option can last 1–2+ years depending on conditions.",
            },
            {
              q: "Do your yard signs come with stands?",
              a: "Stands are optional. You can select either a White L-Shaped Wood Yard Arm Stand or a Black L-Shaped Metal Yard Arm Stand in the configurator. We can pre-drill top hanging holes to make hanging simple.",
            },
            {
              q: "Can I order just 1 yard sign?",
              a: "Yes! We have no minimum order quantity. Single signs ship just as fast as bulk orders.",
            },
            {
              q: "Are the signs weather-resistant?",
              a: "Yes. Corrugated plastic is inherently weather-resistant. Our inks are UV-resistant and won't run or fade in rain.",
            },
          ],
          reviews: [
            {
              author: "Mike D.",
              rating: 5,
              text: "Ordered 200 yard signs for a local election campaign. They arrived the next day and looked exactly like the proof!",
            },
            {
              author: "Sandra R.",
              rating: 5,
              text: "Used for our open house. Very expert-grade look, simple to hang on the L-stand. Will definitely order again.",
            },
            {
              author: "Tom B.",
              rating: 4,
              text: "Great quality for the price. Colors were vivid and matched perfectly.",
            },
          ],
          ctaHeading: "Get Your Signs Out There",
          }}
    />
  );
}
