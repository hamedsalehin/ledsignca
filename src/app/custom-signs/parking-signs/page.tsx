import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { ParkingCircle } from "lucide-react";


export const metadata: Metadata = {
  title: "Custom Parking & Traffic Signs Fort Lauderdale FL | Nano Signs",
  description: "Regulatory, reserved, and custom parking signs in Broward County. Heavy-duty aluminum or coroplast signs with fast turnaround in Fort Lauderdale.",
  alternates: {
    canonical: "https://led-sign.ca/custom-signs/parking-signs",
  },
};

export default function ParkingSignsPage() {
  return (
    <SignProductPage
      cfg={{
        title: "Custom Parking Signs",
        subtitle:
          "Regulatory, reserved, and custom parking signs — aluminum or coroplast, ships next day.",
        breadcrumb: "Signs",
        breadcrumbHref: "/custom-signs",
        promoText:
          "🅿️ Custom Parking Signs — MUTCD-Compliant Reflective Available. Ships Tomorrow!",
        image: "/images/products/main%20page/Parking_sign-toronto-printing-ca.jpeg",
        images: [
          "/images/products/main%20page/Parking_sign-toronto-printing-ca.jpeg",
          "/images/products/park_sign_hover-toronto-printing-ca.png",
        ],
        ratingScore: "4.9",
        ratingCount: "2,310",
        sizes: [
          { label: '6" x 12" (Small)', value: "6x12", basePrice: 6.99 },
          { label: '9" x 12"', value: "9x12", basePrice: 8.99 },
          { label: '12" x 18" (Standard)', value: "12x18", basePrice: 11.99 },
          { label: '18" x 24" (Large)', value: "18x24", basePrice: 17.99 },
          { label: '24" x 24"', value: "24x24", basePrice: 24.99 },
        ],
        selects: [
          {
            label: "Material",
            options: [
              {
                label: ".040 Aluminum (Most Popular)",
                value: "040_alum",
                priceAdder: 0,
                description:
                  "Industry standard for parking signs. Rigid and durable.",
              },
              {
                label: ".080 Aluminum Heavy Duty",
                value: "080_alum",
                priceAdder: 5,
                description: "Double thickness — ideal for high-traffic lots.",
              },
              {
                label: "4mm Coroplast (Budget)",
                value: "coro",
                priceAdder: -3,
                description:
                  "Lightweight and waterproof — best for temporary use.",
              },
            ],
          },
          {
            label: "Finish",
            options: [
              { label: "Matte (Standard)", value: "matte", priceAdder: 0 },
              { label: "High Gloss", value: "gloss", priceAdder: 1.5 },
              {
                label: "Engineer-Grade Reflective",
                value: "reflective_eng",
                priceAdder: 7,
                description:
                  "ASTM D4956 Type I — visible at night with headlights.",
              },
              {
                label: "High-Intensity Reflective",
                value: "reflective_hi",
                priceAdder: 14,
                description: "ASTM D4956 Type III — maximum night visibility.",
              },
            ],
          },
          {
            label: "Sign Template",
            options: [
              {
                label: "Custom Design (Upload Artwork)",
                value: "custom",
                priceAdder: 0,
              },
              {
                label: "No Parking (Standard Red/White)",
                value: "no_parking",
                priceAdder: 0,
              },
              { label: "Reserved Parking", value: "reserved", priceAdder: 0 },
              {
                label: "Handicap Accessible",
                value: "handicap",
                priceAdder: 0,
              },
              { label: "Tow Away Zone", value: "tow_away", priceAdder: 0 },
              {
                label: "Customer Parking Only",
                value: "customer_only",
                priceAdder: 0,
              },
            ],
          },
        ],
        toggleGroups: [
          {
            label: "Mounting Holes",
            options: [
              { id: "no_holes", label: "No Holes", priceAdder: 0 },
              { id: "two_top", label: "2 Holes at Top", priceAdder: 0 },
              { id: "four_corner", label: "4 Corner Holes", priceAdder: 0 },
              {
                id: "center_holes",
                label: "2 Center-Side Holes",
                priceAdder: 0,
              },
            ],
          },
          {
            label: "Post / Mounting Bracket",
            options: [
              { id: "sign_only", label: "Sign Only", priceAdder: 0 },
              {
                id: "u_channel",
                label: "U-Channel Post (included)",
                priceAdder: 18.99,
                description: "Standard street-sign post",
              },
              {
                id: "square_post",
                label: "Square Tubing Post",
                priceAdder: 22.99,
                description: "Heavy-duty square post for permanent installs",
              },
            ],
          },
        ],
        qtyDiscount: "Bulk parking sign orders — save up to 13%",
        keyFeatures: [
          "Industry-standard .040 aluminum",
          "Reflective finish available (ASTM D4956 Type I & III)",
          "Standard templates or fully custom designs",
          "Pre-drilled mounting holes included free",
          "MUTCD-compliant options available",
          "U-channel and square post add-ons",
        ],
        useCases: [
          "Private Parking Lots",
          "Business Parking",
          "HOA Communities",
          "Hotels & Motels",
          "Hospitals & Clinics",
          "Churches",
          "Schools",
          "Apartment Complexes",
        ],
        specs: [
          { key: "Standard Material", value: '.040" Aluminum' },
          { key: "Heavy Duty", value: '.080" Aluminum' },
          {
            key: "Reflective Standard",
            value: "ASTM D4956 Type I (Engineer Grade)",
          },
          {
            key: "Reflective Premium",
            value: "ASTM D4956 Type III (High Intensity)",
          },
          { key: "Hole Diameter", value: '5/16" standard' },
          { key: "Print Resolution", value: "1440 dpi" },
          { key: "Color Profile", value: "CMYK + Spot colors available" },
          { key: "Turnaround", value: "Next Business Day" },
        ],
        faqs: [
          {
            q: "Are your parking signs MUTCD compliant?",
            a: "Yes! Our reflective aluminum signs can be produced to MUTCD (Manual on Uniform Traffic Control Devices) specifications. Select the Engineer-Grade or High-Intensity Reflective finish.",
          },
          {
            q: "Do you have standard parking sign templates?",
            a: "Yes — we offer standard pre-designed templates (No Parking, Reserved, Handicap, Tow Away Zone, etc.) that follow regulatory color standards. You can also fully customize any sign.",
          },
          {
            q: "How do I mount a parking sign to a post?",
            a: 'We offer U-Channel and square tubing post add-ons. Alternatively, pre-drilled holes allow you to mount to any standard 2" U-channel post with sign-mounting hardware.',
          },
          {
            q: "Can I include time restrictions on my parking sign?",
            a: "Absolutely. Our custom design upload lets you include any specific text, time ranges, or language. We also have templates with 'Hours of Enforcement' sections.",
          },
        ],
        reviews: [
          {
            author: "Steve P.",
            rating: 5,
            text: "Ordered 30 parking signs for our apartment complex. All look great and the reflective finish is very visible at night.",
          },
          {
            author: "Rebecca O.",
            rating: 5,
            text: "Fast, high quality, and exactly the right regulatory look. Our HOA board approved them immediately.",
          },
          {
            author: "Marcus J.",
            rating: 5,
            text: "The U-channel posts were a perfect add-on. Everything arrived together and install was straightforward.",
          },
        ],
        ctaHeading: "Control Your Parking. Protect Your Space.",
        ctaBody:
          "Professional-grade parking signs that are clear, visible, and regulation-ready.",
        ctaLabel: "Order Parking Signs Now",
        uniqueCallout: {
          icon: <ParkingCircle className="w-8 h-8 text-blue-600" />,
          heading: "Reflective Signs That Work 24/7",
          body: "Our Engineer-Grade and High-Intensity Reflective finishes (ASTM D4956 Type I & III) keep your parking regulations visible day and night — the same materials used by municipalities and DOTs nationwide.",
          color: "bg-blue-50 border border-blue-200 text-blue-900",
        },
      }}
    />
  );
}
