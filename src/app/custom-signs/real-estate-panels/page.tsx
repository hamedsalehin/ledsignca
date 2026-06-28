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
        title: "Real Estate Panels",
        subtitle:
          "Professional-grade panels that get properties noticed — riders, posts, and full frames included.",
        breadcrumb: "Signs",
        breadcrumbHref: "/custom-signs",
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
          { label: '18" x 24" (Standard)', value: "18x24", basePrice: 12.99 },
          { label: '24" x 24"', value: "24x24", basePrice: 16.99 },
          { label: '24" x 36"', value: "24x36", basePrice: 22.99 },
          { label: '18" x 6" Rider', value: "18x6_rider", basePrice: 5.99 },
          { label: '24" x 6" Rider', value: "24x6_rider", basePrice: 7.99 },
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
                  "Lightweight, waterproof. Best for short listings.",
              },
              {
                label: ".040 Aluminum",
                value: "aluminum_040",
                priceAdder: 6,
                description: "Rigid, durable metal. Lasts years outdoors.",
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
            label: "Accessories",
            options: [
              { id: "none", label: "Sign Only", priceAdder: 0 },
              { id: "h_frame", label: "Wire H-Frame Post", priceAdder: 4.99 },
              {
                id: "yard_arm",
                label: "Yard Arm Post",
                priceAdder: 18.99,
                description: "Classic single-post arm",
              },
              {
                id: "full_frame",
                label: "Full Frame Post Kit",
                priceAdder: 34.99,
                description: "Includes two posts + crossbar",
              },
            ],
          },
        ],
        qtyDiscount: "Agent bulk pricing — buy 10+ and save",
        keyFeatures: [
          "Professional-grade coroplast or aluminum",
          "UV-resistant fade-proof printing",
          "Compatible with standard real estate frames",
          "Rider panels available for open houses & sold",
          "Ships next business day",
          "Double-sided printing available",
        ],
        useCases: [
          "For Sale Listings",
          "Open Houses",
          "Sold Panels",
          "New Listings",
          "Coming Soon",
          "Rental Properties",
          "Commercial Real Estate",
        ],
        specs: [
          {
            key: "Standard Material",
            value: "4mm Corrugated Plastic (Coroplast)",
          },
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
            a: "Absolutely. Select the rider size in the dropdown and we'll match the design style for a cohesive, professional look.",
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
            text: "The aluminum panels look incredibly professional. My clients always comment on them.",
          },
        ],
        ctaHeading: "List More. Sell Faster.",
        ctaBody:
          "Professional real estate panels that make every listing look premium.",
        ctaLabel: "Order Real Estate Panels",
        uniqueCallout: {
          icon: <Home className="w-8 h-8 text-blue-500" />,
          heading: "Trusted by 50,000+ Real Estate Agents",
          body: "From solo agents to national brokerages, real estate professionals across the country trust us for fast, professional panels that close deals.",
          color: "bg-blue-50 border border-blue-200 text-blue-900",
        },
      }}
    />
  );
}
