import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { ArrowUpDown } from "lucide-react";


export const metadata: Metadata = {
  title: "A-Frame Sidewalk Signs Fort Lauderdale FL | Fast Turnaround | Nano Signs",
  description: "Design & order portable, double-sided sidewalk A-frame signs in Fort Lauderdale & Oakland Park FL. Fastest turnaround times in Broward County.",
  alternates: {
    canonical: "https://nano-signs.com/custom-signs/a-frame-signs",
  },
};

export default function AFrameSignsPage() {
  return (
    <SignProductPage
      cfg={{
        title: "A-Frame Signs (Sandwich Boards)",
        subtitle:
          "Portable, double-sided sidewalk signs that grab foot traffic and drive customers through your door.",
        breadcrumb: "Signs",
        breadcrumbHref: "/custom-signs",
        promoText: "🪧 A-Frame Signs — Double-Sided, Portable, Ships Tomorrow!",
        image: "/images/products/main%20page/A-frame_sign-toronto-printing-ca.jpeg",
        images: [
          "/images/products/main%20page/A-frame_sign-toronto-printing-ca.jpeg",
          "/images/products/aframe_sign_hover-toronto-printing-ca.png",
        ],
        ratingScore: "4.8",
        ratingCount: "1,640",
        sizes: [
          {
            label: '18" x 24" Insert (Standard)',
            value: "18x24",
            basePrice: 89.99,
          },
          { label: '22" x 28" Insert', value: "22x28", basePrice: 109.99 },
          { label: '24" x 36" Insert', value: "24x36", basePrice: 134.99 },
        ],
        selects: [
          {
            label: "Frame Material",
            options: [
              {
                label: "Plastic A-Frame (Standard)",
                value: "plastic",
                priceAdder: 0,
                description: "Lightweight, weather-resistant. Budget-friendly.",
              },
              {
                label: "Aluminum A-Frame",
                value: "aluminum",
                priceAdder: 25,
                description: "Heavier, more stable in wind. Long-lasting.",
              },
              {
                label: "Premium Swinger Frame",
                value: "swinger",
                priceAdder: 45,
                description: "360° swivel top. Maximum visibility.",
              },
            ],
          },
          {
            label: "Insert Material",
            options: [
              {
                label: "Coroplast Insert (Standard)",
                value: "coro",
                priceAdder: 0,
                description: "Waterproof, lightweight corrugated plastic.",
              },
              {
                label: "PVC Foam Board Insert",
                value: "pvc",
                priceAdder: 8,
                description: "Rigid, premium look for upscale establishments.",
              },
              {
                label: "Aluminum Insert",
                value: "alum",
                priceAdder: 14,
                description: "The most durable, longest-lasting option.",
              },
            ],
          },
        ],
        toggleGroups: [
          {
            label: "Printing",
            options: [
              { id: "single", label: "1-Sided Print", priceAdder: 0 },
              {
                id: "double",
                label: "2-Sided Print",
                priceAdder: 0,
                description: "Both panels printed (standard for A-frames)",
              },
            ],
          },
          {
            label: "Anti-Wind Accessory",
            options: [
              { id: "none", label: "No Accessory", priceAdder: 0 },
              {
                id: "chain",
                label: "Connecting Chain",
                priceAdder: 2.99,
                description: "Limits how far the sign opens in wind",
              },
              {
                id: "sandbag",
                label: "Sandbag Weight",
                priceAdder: 9.99,
                description: "Keeps sign stable in windy conditions",
              },
            ],
          },
        ],
        qtyDiscount: "Buy 3+ A-frames and save up to 10%",
        keyFeatures: [
          "Double-sided by default",
          "Portable — set up in seconds",
          "Weather-resistant frame & inserts",
          "Interchangeable insert panels",
          "Multiple frame material options",
          "Compact for storage",
        ],
        useCases: [
          "Restaurants & Cafes",
          "Retail Stores",
          "Salons",
          "Sidewalk Promotions",
          "Event Venues",
          "Hotels",
          "Markets",
          "Pop-Up Shops",
        ],
        specs: [
          {
            key: "Standard Frame",
            value: "Plastic A-Frame with coroplast insert",
          },
          { key: "Insert Fits", value: '18"x24", 22"x28", or 24"x36"' },
          { key: "Print Method", value: "Full-Color Digital UV Print" },
          { key: "Fold Height", value: 'Approximately 48" tall when open' },
          { key: "Color Profile", value: "CMYK" },
          { key: "Bleed Required", value: '0.125" all sides' },
          { key: "Turnaround", value: "Next Business Day" },
        ],
        faqs: [
          {
            q: "Is printing included on both sides?",
            a: "Yes! A-frame signs are inherently double-sided. Both panels are printed by default.",
          },
          {
            q: "Can I swap out the inserts?",
            a: "Yes. The coroplast and PVC foam board inserts slide out easily so you can swap promotions or update messaging without buying a new frame.",
          },
          {
            q: "Are they stable in wind?",
            a: "Plastic A-frames can tip in strong wind. We recommend the connecting chain or sandbag weight add-on for windy locations.",
          },
          {
            q: "Can I store them inside at night?",
            a: "Absolutely. A-frames fold flat for easy interior storage. This also extends the life of the printed inserts.",
          },
        ],
        reviews: [
          {
            author: "Rachel H.",
            rating: 5,
            text: "Our restaurant's daily specials board. Customers stop to read it every single day. Best investment we've made!",
          },
          {
            author: "Aaron P.",
            rating: 5,
            text: "Ordered 5 for our chain of yoga studios. Fast delivery and great print quality on both sides.",
          },
          {
            author: "Maria C.",
            rating: 4,
            text: "Sturdy and looks professional on the sidewalk. The chain accessory was a great add-on.",
          },
        ],
        ctaHeading: "Bring Customers Through the Door",
        ctaBody:
          "A-frame signs are proven to increase foot traffic. Order yours today.",
        ctaLabel: "Design Your A-Frame Sign",
        uniqueCallout: {
          icon: <ArrowUpDown className="w-8 h-8 text-orange-500" />,
          heading: "Double-Sided = Double the Exposure",
          body: "Because both sides face traffic, A-frame signs reach pedestrians coming from both directions — giving you twice the visibility of a standard one-sided sign.",
          color: "bg-orange-50 border border-orange-200 text-orange-900",
        },
      }}
    />
  );
}
