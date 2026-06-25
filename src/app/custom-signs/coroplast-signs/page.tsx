import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { Droplets } from "lucide-react";


export const metadata: Metadata = {
  title: "Custom Coroplast Signs Fort Lauderdale FL | Fast Turnaround | Nano Signs",
  description: "Design and order waterproof corrugated plastic coroplast signs in Broward County. Cheap prices & fast turnaround times in Fort Lauderdale.",
  alternates: {
    canonical: "https://led-sign.ca/custom-signs/coroplast-signs",
  },
};

export default function CoroplastSignsPage() {
  return (
    <SignProductPage
      cfg={{
        title: "Coroplast Signs",
        subtitle:
          "The most versatile waterproof outdoor sign — durable, colorful, and incredibly affordable.",
        breadcrumb: "Signs",
        breadcrumbHref: "/custom-signs",
        promoText:
          "💧 Waterproof Coroplast Signs — Weatherproof & Budget-Friendly. Ships Tomorrow!",
        image: "/images/products/main%20page/coroplast_sign-toronto-printing-ca.png",
        images: [
          "/images/products/main%20page/coroplast_sign-toronto-printing-ca.png",
          "/images/products/coro_sign_hover-toronto-printing-ca.png",
          "/images/products/yard_sign_hover-toronto-printing-ca.png",
        ],
        ratingScore: "4.8",
        ratingCount: "5,620",
        sizes: [
          { label: '12" x 18"', value: "12x18", basePrice: 4.99 },
          {
            label: '18" x 24" (Most Popular)',
            value: "18x24",
            basePrice: 7.99,
          },
          { label: '24" x 24"', value: "24x24", basePrice: 10.99 },
          { label: '24" x 36"', value: "24x36", basePrice: 14.99 },
          { label: '24" x 48"', value: "24x48", basePrice: 19.99 },
          { label: '48" x 96"', value: "48x96", basePrice: 64.99 },
          { label: "Custom Size", value: "custom", basePrice: 0 },
        ],
        selects: [
          {
            label: "Thickness",
            options: [
              {
                label: "4mm (Standard — Most Popular)",
                value: "4mm",
                priceAdder: 0,
                description:
                  "Best for general outdoor signage up to 12 months.",
              },
              {
                label: "6mm Heavy Duty",
                value: "6mm",
                priceAdder: 1.75,
                description:
                  "50% thicker — ideal for long-term and reusable signs.",
              },
              {
                label: "8mm Ultra Heavy Duty",
                value: "8mm",
                priceAdder: 4,
                description: "The thickest option for maximum rigidity.",
              },
            ],
          },
          {
            label: "Printing",
            options: [
              { label: "Single Sided", value: "single", priceAdder: 0 },
              {
                label: "Double Sided",
                value: "double",
                priceAdder: 2.5,
                description: "Both faces printed for maximum visibility.",
              },
            ],
          },
          {
            label: "Color",
            options: [
              {
                label: "White Background (Standard)",
                value: "white",
                priceAdder: 0,
              },
              { label: "Yellow Background", value: "yellow", priceAdder: 0 },
              { label: "Red Background", value: "red", priceAdder: 0 },
              { label: "Blue Background", value: "blue", priceAdder: 0 },
            ],
          },
        ],
        toggleGroups: [
          {
            label: "Stakes",
            options: [
              { id: "none", label: "No Stakes", priceAdder: 0 },
              { id: "9in", label: '9" Wire H-Stakes', priceAdder: 0.99 },
              { id: "15in", label: '15" Wire H-Stakes', priceAdder: 1.49 },
              {
                id: "step",
                label: "Step Stakes",
                priceAdder: 1.99,
                description: "Easy push-in with foot",
              },
            ],
          },
          {
            label: "Grommets",
            options: [
              { id: "no_grommets", label: "No Grommets", priceAdder: 0 },
              {
                id: "corner_grommets",
                label: "Corner Grommets",
                priceAdder: 0.5,
              },
              {
                id: "perimeter_grommets",
                label: 'Perimeter Grommets (every 24")',
                priceAdder: 1.5,
              },
            ],
          },
        ],
        qtyDiscount: "Buy more, save more — up to 13% off on large orders",
        keyFeatures: [
          "100% waterproof corrugated plastic",
          "UV-resistant full-color printing",
          "Available in 4mm, 6mm, and 8mm",
          "Lightweight and easy to transport",
          "Double-sided printing available",
          "Custom sizes available",
        ],
        useCases: [
          "Yard Signs",
          "Construction Sites",
          "Fence Signs",
          "Event Signage",
          "Political Signs",
          "For Sale Signs",
          "Business Promotions",
          "Directional Signs",
        ],
        specs: [
          { key: "Material", value: "Corrugated Polypropylene (Coroplast)" },
          { key: "Standard Thickness", value: "4mm" },
          {
            key: "Weatherproof Rating",
            value: "Fully waterproof, UV-resistant inks",
          },
          { key: "Print Resolution", value: "720 x 1440 dpi" },
          { key: "Color Profile", value: "CMYK" },
          { key: "Bleed Required", value: '0.125" all sides' },
          {
            key: "Expected Lifespan",
            value: "6–18 months outdoors (4mm); 2+ years (6mm+)",
          },
          { key: "Turnaround", value: "Next Business Day" },
        ],
        faqs: [
          {
            q: "What is the difference between coroplast and regular cardboard?",
            a: "Coroplast is corrugated polypropylene plastic — it is 100% waterproof, flexible, and far more durable than cardboard. It won't absorb moisture or warp in the rain.",
          },
          {
            q: "Can I use coroplast signs indoors?",
            a: "Absolutely. Coroplast is a great indoor sign material too — it's lightweight, rigid, and easy to display with stakes, grommets, or adhesive.",
          },
          {
            q: "How do I attach coroplast signs to a fence?",
            a: "Use zip ties through grommets, or bungee cords. We can add pre-punched grommets to any side of the sign for easy attachment.",
          },
          {
            q: "Are they recyclable?",
            a: "Yes! Coroplast signs are made from polypropylene (PP #5) and are fully recyclable at facilities that accept rigid plastics.",
          },
        ],
        reviews: [
          {
            author: "Derek F.",
            rating: 5,
            text: "We ordered 500 signs for our campaign and they were perfect. Fast delivery and great price per sign.",
          },
          {
            author: "Tina R.",
            rating: 5,
            text: "The 6mm signs are incredibly sturdy. Held up through a whole hurricane season on our construction site.",
          },
          {
            author: "Bobby M.",
            rating: 5,
            text: "Best price I found anywhere for coroplast signs. Will definitely order again.",
          },
        ],
        ctaHeading: "Sign Big, Spend Small",
        ctaBody:
          "Coroplast signs deliver maximum impact at the lowest possible price per sign.",
        ctaLabel: "Order Coroplast Signs Now",
        uniqueCallout: {
          icon: <Droplets className="w-8 h-8 text-blue-500" />,
          heading: "100% Waterproof — Rain or Shine",
          body: "Coroplast corrugated plastic signs are fully waterproof. Rain, humidity, sprinklers — nothing gets through. Our UV inks won't run or fade, keeping your sign looking crisp all season long.",
          color: "bg-blue-50 border border-blue-200 text-blue-900",
        },
      }}
    />
  );
}
