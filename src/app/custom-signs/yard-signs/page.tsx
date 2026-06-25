import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { Layers } from "lucide-react";


export const metadata: Metadata = {
  title: "Custom Yard Signs Fort Lauderdale FL | Fast Turnaround | Nano Signs",
  description: "Design custom corrugated plastic yard signs online with H-stakes. Fastest turnaround times in Broward County. Next-day shipping/local pickup.",
  alternates: {
    canonical: "https://led-sign.ca/custom-signs/yard-signs",
  },
};

export default function YardSignsPage() {
  return (
    <SignProductPage
      cfg={{
        title: "Custom Yard Signs",
        subtitle:
          "Corrugated plastic signs that weather any storm — perfect for campaigns, events, and businesses.",
        breadcrumb: "Signs",
        breadcrumbHref: "/custom-signs",
        promoText:
          "🏡 25% OFF Yard Signs + Free Shipping — Most Popular Sign in America!",
        image: "/images/products/main%20page/yard_sign-toronto-printing-ca.jpeg",
        images: [
          "/images/products/main%20page/yard_sign-toronto-printing-ca.jpeg",
          "/images/products/gallery/yard_sign_in_action_1-toronto-printing-ca.png",
          "/images/products/gallery/yard_sign_in_action_2-toronto-printing-ca.png",
        ],
        ratingScore: "4.9",
        ratingCount: "8,420",
        sizes: [
          { label: '12" x 18" (Standard)', value: "12x18", basePrice: 3.99 },
          { label: '18" x 24"', value: "18x24", basePrice: 6.99 },
          { label: '24" x 24"', value: "24x24", basePrice: 9.99 },
          { label: '24" x 36"', value: "24x36", basePrice: 13.99 },
          { label: '36" x 48"', value: "36x48", basePrice: 22.99 },
        ],
        selects: [
          {
            label: "Material",
            options: [
              {
                label: "4mm Corrugated Plastic (Standard)",
                value: "4mm",
                priceAdder: 0,
                description:
                  "Lightweight, weatherproof, great for short-term outdoor use.",
              },
              {
                label: "6mm Heavy-Duty Coroplast",
                value: "6mm",
                priceAdder: 1.5,
                description:
                  "50% thicker — perfect for long-term yard sign campaigns.",
              },
              {
                label: "Aluminum (Substrate)",
                value: "aluminum",
                priceAdder: 4,
                description:
                  "Rigid aluminum for permanent outdoor installations.",
              },
            ],
          },
          {
            label: "Printing",
            options: [
              { label: "Single Sided", value: "single", priceAdder: 0 },
              { label: "Double Sided", value: "double", priceAdder: 2.5 },
            ],
          },
          {
            label: "Hanging Holes",
            options: [
              {
                label: "Top Hanging Holes (Grommets)",
                value: "top_holes",
                priceAdder: 0,
                description: "Pre-drilled holes at top corners to hang from the arm.",
              },
              {
                label: "No Holes",
                value: "no_holes",
                priceAdder: 0,
                description: "Solid panel without pre-drilled holes.",
              },
            ],
          },
        ],
        toggleGroups: [
          {
            label: "Frame/Stand Option",
            options: [
              { id: "no_stand", label: "Sign Panel Only", priceAdder: 0 },
              {
                id: "wood_l_stand",
                label: "White L-Shaped Wood Yard Arm Stand",
                priceAdder: 39.99,
                description: "Premium wooden colonial yard post",
              },
              {
                id: "metal_l_stand",
                label: "Black L-Shaped Metal Yard Arm Stand",
                priceAdder: 49.99,
                description: "Heavy-duty steel hanging sign post",
              },
            ],
          },
          {
            label: "UV Coating",
            options: [
              { id: "no_coat", label: "None", priceAdder: 0 },
              {
                id: "uv",
                label: "UV Gloss Coating",
                priceAdder: 0.75,
                description: "Adds scratch & fade protection.",
              },
            ],
          },
        ],
        qtyDiscount: "Buy more, save more — up to 13% off!",
        keyFeatures: [
          "Weather-resistant corrugated plastic",
          "Full-color edge-to-edge printing",
          "Ships in as fast as 1 business day",
          "Optional L-shaped wood or metal stands available",
          "Recyclable & eco-friendly material",
          "Single or double-sided printing",
        ],
        useCases: [
          "Political Campaigns",
          "Real Estate",
          "Open Houses",
          "Elections",
          "Business Promotions",
          "Events",
          "Garage Sales",
          "School Fundraisers",
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
            a: "Standard 4mm coroplast yard signs typically last 6–12 months outdoors. The 6mm heavy-duty option can last 1–2+ years depending on conditions.",
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
            q: "Are the signs waterproof?",
            a: "Yes. Corrugated plastic is inherently waterproof. Our inks are UV-resistant and won't run or fade in rain.",
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
            text: "Used for our open house. Very professional look, easy to hang on the L-stand. Will definitely order again.",
          },
          {
            author: "Tom B.",
            rating: 4,
            text: "Great quality for the price. Colors were vibrant and matched perfectly.",
          },
        ],
        ctaHeading: "Get Your Signs Out There",
        ctaBody: "Order by 5 PM and your custom yard signs ship tomorrow.",
        ctaLabel: "Order Yard Signs Now",
        uniqueCallout: {
          icon: <Layers className="w-8 h-8 text-green-500" />,
          heading: "America's #1 Most-Ordered Sign",
          body: "Yard signs are the most cost-effective marketing tool available. At just CAD 3.99 each, no other medium gets your message in front of more people for less money.",
          color: "bg-green-50 border border-green-200 text-green-900",
        },
      }}
    />
  );
}
