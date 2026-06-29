import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { ParkingCircle } from "lucide-react";


export const metadata: Metadata = {
  title: "Custom Parking & Traffic Signs Toronto ON | Nano Signs",
  description: "Regulatory, reserved, and custom parking signs in the Greater Toronto Area. Heavy-duty aluminum or coroplast signs with fast turnaround in Toronto.",
  alternates: {
    canonical: "https://led-sign.ca/custom-signs/parking-signs",
  },
};

export default function ParkingSignsPage() {
  return (
    <SignProductPage
      cfg={{
          title: "Personalized Parking Signs",
          subtitle:
            "Regulatory, reserved, and personalized parking signs — aluminum or coroplast, ships next day.",
          breadcrumb: "Signs",
          breadcrumbHref: "/personalized-signs",
          promoText:
            "🅿️ Personalized Parking Signs — MUTCD-Compliant Reflective Available. Ships Tomorrow!",
          image: "/images/products/main-page/Parking_sign-toronto-printing-ca.jpeg",
          images: [
            "/images/products/main-page/Parking_sign-toronto-printing-ca.jpeg",
            "/images/products/park_sign_hover-toronto-printing-ca.png",
          ],
          ratingScore: "4.9",
          ratingCount: "2,310",
          sizes: [
            { label: '18" x 24"', value: "18x24", basePrice: 105 },
            { label: '36" x 24"', value: "36x24", basePrice: 130 },
          ],
          selects: [
            {
              label: "Insert Material",
              options: [
                { label: "Coroplast Regular", value: "coroplast", priceAdder: 0 },
                { label: "ACM (Aluminum)", value: "acm", priceAdder: 25 }
              ]
            },
            {
              label: "Frame Material",
              options: [
                { label: "Metal Regular", value: "metal", priceAdder: 0 },
                { label: "Plastic", value: "plastic", priceAdder: 30 }
              ]
            }
          ],
          toggleGroups: [
            {
              label: "Printed Sides",
              options: [
                { id: "double", label: "Double Sided Only", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Bulk parking sign orders — save up to 13%",
          keyFeatures: [
            "Industry-standard .040 aluminum",
            "Reflective finish available (ASTM D4956 Type I & III)",
            "Standard templates or fully personalized designs",
            "Pre-drilled mounting holes included free",
            "MUTCD-compliant options available",
            "U-channel and square post add-ons",
          ],
          useCases: [
            "Private Parking Lots",
            "Corporate Parking",
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
              key: "Reflective High-quality",
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
              a: "Absolutely. Our personalized design upload lets you include any specific text, time ranges, or language. We also have templates with 'Hours of Enforcement' sections.",
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
              text: "Fast, superior quality, and exactly the right regulatory look. Our HOA board approved them immediately.",
            },
            {
              author: "Marcus J.",
              rating: 5,
              text: "The U-channel posts were a perfect add-on. Everything arrived together and install was straightforward.",
            },
          ],
          ctaHeading: "Control Your Parking. Protect Your Space.",
          }}
    />
  );
}
