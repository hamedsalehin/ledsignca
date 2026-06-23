import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { Sparkles } from "lucide-react";


export const metadata: Metadata = {
  title: "Custom Acrylic Signs Fort Lauderdale FL | Fast Turnaround | Nano Signs",
  description: "Premium clear, colored, and frosted custom acrylic signs in Broward County. Online design and next-day local pick up in Fort Lauderdale.",
  alternates: {
    canonical: "https://nano-signs.com/custom-signs/acrylic-signs",
  },
};

export default function AcrylicSignsPage() {
  return (
    <SignProductPage
      cfg={{
        title: "Custom Acrylic Signs",
        subtitle:
          "Premium clear and colored acrylic signs for a sleek, modern, upscale look.",
        breadcrumb: "Signs",
        breadcrumbHref: "/custom-signs",
        promoText:
          "💎 Premium Acrylic Signs — Crystal-Clear Quality, Ships Next Day!",
        image: "/images/products/main%20page/acrylic_sign.png",
        images: [
          "/images/products/main%20page/acrylic_sign.png",
          "/images/products/acryl_sign_hover.png",
        ],
        ratingScore: "4.9",
        ratingCount: "980",
        sizes: [
          { label: '5" x 7"', value: "5x7", basePrice: 24.99 },
          { label: '8" x 10"', value: "8x10", basePrice: 34.99 },
          { label: '12" x 12"', value: "12x12", basePrice: 49.99 },
          { label: '12" x 18"', value: "12x18", basePrice: 59.99 },
          { label: '18" x 24"', value: "18x24", basePrice: 89.99 },
          { label: '24" x 36"', value: "24x36", basePrice: 139.99 },
          { label: "Custom Size", value: "custom", basePrice: 0 },
        ],
        selects: [
          {
            label: "Acrylic Type",
            options: [
              {
                label: "Clear Acrylic (Standard)",
                value: "clear",
                priceAdder: 0,
                description: "Crystal clear — print shows through beautifully.",
              },
              {
                label: "White Acrylic",
                value: "white",
                priceAdder: 5,
                description: "Bright white base for maximum color vibrancy.",
              },
              {
                label: "Frosted Acrylic",
                value: "frosted",
                priceAdder: 8,
                description:
                  "Elegant translucent appearance, ideal for office reception.",
              },
              {
                label: "Black Acrylic",
                value: "black",
                priceAdder: 10,
                description:
                  "Dramatic and modern — great for gold/silver text.",
              },
            ],
          },
          {
            label: "Thickness",
            options: [
              { label: '1/8" (3mm) Standard', value: "3mm", priceAdder: 0 },
              {
                label: '1/4" (6mm) Heavy',
                value: "6mm",
                priceAdder: 15,
                description: "Premium weight that commands respect.",
              },
              {
                label: '3/8" (9mm) Ultra-Thick',
                value: "9mm",
                priceAdder: 30,
                description: "The heaviest, most substantial option.",
              },
            ],
          },
          {
            label: "Print Method",
            options: [
              {
                label: "UV Printed (Front)",
                value: "uv_front",
                priceAdder: 0,
                description: "Direct printed on the front surface.",
              },
              {
                label: "Second-Surface Print (Back)",
                value: "second_surface",
                priceAdder: 10,
                description:
                  "Image printed on the back for a glass-effect look.",
              },
            ],
          },
        ],
        toggleGroups: [
          {
            label: "Corners",
            options: [
              { id: "square", label: "Square Corners", priceAdder: 0 },
              { id: "rounded", label: "Rounded Corners", priceAdder: 3 },
              { id: "custom_shape", label: "Custom Shape", priceAdder: 15 },
            ],
          },
          {
            label: "Mounting Hardware",
            options: [
              { id: "none", label: "No Mounting", priceAdder: 0 },
              {
                id: "standoffs",
                label: "Standoff Mounts (x4)",
                priceAdder: 12.99,
                description:
                  "Polished metal standoffs for wall floating effect.",
              },
              { id: "adhesive", label: "3M Adhesive Tape", priceAdder: 2.99 },
              { id: "holes", label: "Pre-Drilled Holes", priceAdder: 0 },
            ],
          },
        ],
        qtyDiscount: "Volume pricing — perfect for office signage packages",
        keyFeatures: [
          "Premium cast acrylic material",
          "Laser-cut edges for a perfect finish",
          "Multiple color and thickness options",
          "Second-surface printing for glass effect",
          "Standoff mounting hardware available",
          "Custom shapes and sizes supported",
        ],
        useCases: [
          "Office Reception",
          "Lobby Signage",
          "Awards & Recognition",
          "Retail Branding",
          "Wayfinding Signs",
          "Restaurant Menus",
          "Hotel Signage",
        ],
        specs: [
          { key: "Material", value: "Cast Acrylic (PMMA)" },
          { key: "Standard Thickness", value: '1/8" (3mm)' },
          { key: "Print Method", value: "UV Direct Print or Second-Surface" },
          {
            key: "Edge Finish",
            value: "Laser-polished, flame-polished, or matte",
          },
          { key: "Color Profile", value: "CMYK + White Ink Base" },
          { key: "Bleed Required", value: '0.125" all sides' },
          { key: "Turnaround", value: "2-3 Business Days" },
        ],
        faqs: [
          {
            q: "What is second-surface printing?",
            a: "The design is printed on the back of clear acrylic. You view it through the clear surface, creating a premium glass-like appearance that protects the ink from scratches.",
          },
          {
            q: "What standoff mounts do you recommend?",
            a: 'We offer 3/4" polished chrome standoffs for a sleek corporate look, or brushed nickel for a warmer finish. Both create a floating effect on the wall.',
          },
          {
            q: "Can acrylic signs be used outdoors?",
            a: "Cast acrylic is UV-stable and can be used outdoors. However, we recommend UV-printed finishes and avoiding direct harsh weather exposure for longest life.",
          },
          {
            q: "How do I clean acrylic signs?",
            a: "Use a soft cloth and mild soap or specialized acrylic cleaner. Never use ammonia-based cleaners (like Windex) as they may cloud the surface.",
          },
        ],
        reviews: [
          {
            author: "Gabriel M.",
            rating: 5,
            text: "Ordered acrylic signs for our new office. They look stunning — clients always ask about them.",
          },
          {
            author: "Sophia K.",
            rating: 5,
            text: "The second-surface printing is absolutely beautiful. Totally worth the extra cost.",
          },
          {
            author: "David N.",
            rating: 5,
            text: "The standoff mounts are a great touch. The floating effect on the wall looks very high-end.",
          },
        ],
        ctaHeading: "Upgrade to Premium Acrylic",
        ctaBody:
          "Crystal-clear signs that make your brand look like a million dollars.",
        ctaLabel: "Design Your Acrylic Sign",
        uniqueCallout: {
          icon: <Sparkles className="w-8 h-8 text-purple-500" />,
          heading: "The Glass Effect — Without the Fragility",
          body: "Second-surface acrylic printing creates a stunning glass-like appearance. Your design is protected beneath the crystal-clear surface, making it scratch-resistant and incredibly durable.",
          color: "bg-purple-50 border border-purple-200 text-purple-900",
        },
      }}
    />
  );
}
