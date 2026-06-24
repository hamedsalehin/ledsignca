import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { Eye } from "lucide-react";


export const metadata: Metadata = {
  title: "Custom Window Graphics & Decals Fort Lauderdale FL",
  description: "Design high-res window decals, perforated vinyl, & clings online. Professional storefront graphics with fast turnaround in Broward County.",
  alternates: {
    canonical: "https://nano-signs.com/custom-signs/window-signs",
  },
};

export default function WindowSignsPage() {
  return (
    <SignProductPage
      cfg={{
        title: "Window Signs & Clings",
        subtitle:
          "Custom window graphics, clings, perforated vinyl, and decals for storefronts and offices.",
        breadcrumb: "Signs",
        breadcrumbHref: "/custom-signs",
        promoText:
          "🪟 Window Signs That Turn Passersby Into Customers — Ships Next Day!",
        image: "/images/products/main%20page/window_sign-toronto-printing-ca.png",
        images: [
          "/images/products/main%20page/window_sign-toronto-printing-ca.png",
          "/images/products/wind_sign_hover-toronto-printing-ca.png",
        ],
        ratingScore: "4.8",
        ratingCount: "1,940",
        sizes: [
          { label: '12" x 12"', value: "12x12", basePrice: 9.99 },
          { label: '12" x 24"', value: "12x24", basePrice: 14.99 },
          { label: '24" x 24"', value: "24x24", basePrice: 22.99 },
          { label: '24" x 36"', value: "24x36", basePrice: 32.99 },
          { label: '36" x 48"', value: "36x48", basePrice: 49.99 },
          { label: '48" x 72"', value: "48x72", basePrice: 79.99 },
          { label: "Custom Size", value: "custom", basePrice: 0 },
        ],
        selects: [
          {
            label: "Window Graphic Type",
            options: [
              {
                label: "Static Cling (Removable)",
                value: "static_cling",
                priceAdder: 0,
                description:
                  "No adhesive — clings electrostatically. Fully removable & reusable.",
              },
              {
                label: "Clear Vinyl Decal",
                value: "clear_vinyl",
                priceAdder: 2,
                description:
                  "Permanent adhesive on clear film. Very professional look.",
              },
              {
                label: "White Vinyl Decal",
                value: "white_vinyl",
                priceAdder: 2,
                description: "Opaque white background — bold, vivid colors.",
              },
              {
                label: "Perforated Vinyl (One-Way Vision)",
                value: "perforated",
                priceAdder: 6,
                description:
                  "See-through from inside, solid image from outside. 60/40 blockout.",
              },
              {
                label: "Frosted Vinyl",
                value: "frosted",
                priceAdder: 5,
                description:
                  "Privacy glass effect. Great for offices & conference rooms.",
              },
            ],
          },
          {
            label: "Adhesive",
            options: [
              {
                label: "Removable (Standard)",
                value: "removable",
                priceAdder: 0,
                description: "Peels off cleanly without residue.",
              },
              {
                label: "Permanent",
                value: "permanent",
                priceAdder: 0,
                description: "Long-term adhesion for extended display.",
              },
            ],
          },
        ],
        toggleGroups: [
          {
            label: "Application Surface",
            options: [
              {
                id: "inside",
                label: "Apply Inside (Facing Out)",
                priceAdder: 0,
                description: "Protected from weather — most durable.",
              },
              {
                id: "outside",
                label: "Apply Outside (Facing Out)",
                priceAdder: 0,
                description: "Maximum visibility from street.",
              },
              {
                id: "second_surface",
                label: "Second-Surface Reverse Print",
                priceAdder: 2,
                description:
                  "Image reversed so it reads correctly applied inside.",
              },
            ],
          },
          {
            label: "Lamination",
            options: [
              { id: "no_lam", label: "No Lamination", priceAdder: 0 },
              {
                id: "matte_lam",
                label: "Matte Laminate",
                priceAdder: 2,
                description: "UV protection, scratch-resistant.",
              },
              {
                id: "gloss_lam",
                label: "Gloss Laminate",
                priceAdder: 2,
                description: "Vibrant colors, scratch-resistant.",
              },
            ],
          },
        ],
        qtyDiscount: "Buy 3+ and save up to 10%",
        keyFeatures: [
          "Multiple window graphic types available",
          "One-way vision perforated vinyl available",
          "Removable or permanent adhesive options",
          "Inside or outside application",
          "UV-resistant inks",
          "Easy DIY installation",
        ],
        useCases: [
          "Retail Storefronts",
          "Restaurant Windows",
          "Office Branding",
          "Sales & Promotions",
          "Privacy Screens",
          "Vehicle Windows",
          "Real Estate Listings",
          "Event Promotion",
        ],
        specs: [
          { key: "Cling Material", value: "Electrostatic PVC (no adhesive)" },
          {
            key: "Vinyl Material",
            value: "Calendered PVC with acrylic adhesive",
          },
          {
            key: "Perforated Vinyl",
            value: "60% ink coverage / 40% hole (one-way vision)",
          },
          { key: "Print Resolution", value: "1440 dpi" },
          { key: "Color Profile", value: "CMYK" },
          { key: "Bleed Required", value: '0.25" all sides' },
          {
            key: "Max Width",
            value: '54" (custom widths for larger installs)',
          },
          { key: "Turnaround", value: "Next Business Day" },
        ],
        faqs: [
          {
            q: "What is the difference between a window cling and a decal?",
            a: "A static cling uses no adhesive — it clings to glass via static electricity and can be removed and reused. A decal uses adhesive to create a more permanent bond.",
          },
          {
            q: "Can I see through perforated vinyl?",
            a: "Yes! Perforated vinyl (one-way vision) blocks 60% of light from outside, forming your printed image. From the inside, you can see through the small holes clearly.",
          },
          {
            q: "How do I apply a window decal without bubbles?",
            a: "Clean the glass thoroughly, wet the surface with soapy water, apply with a squeegee, and work from center to edges. We include installation instructions with every order.",
          },
          {
            q: "Will window graphics damage my glass?",
            a: "Removable adhesive window graphics peel off cleanly without damage or residue when removed within the recommended display period (typically 2 years).",
          },
        ],
        reviews: [
          {
            author: "Naomi S.",
            rating: 5,
            text: "The perforated vinyl looks incredible on our storefront. We get compliments on it every day.",
          },
          {
            author: "Kyle R.",
            rating: 5,
            text: "Ordered frosted vinyl for our conference room for privacy. Looks extremely professional and high-end.",
          },
          {
            author: "Isabella T.",
            rating: 4,
            text: "Great quality static clings for a seasonal sale promotion. Easy to put up and remove — will reorder.",
          },
        ],
        ctaHeading: "Your Window Is Your Best Billboard",
        ctaBody:
          "Window signs turn every passerby into a potential customer. Start designing yours.",
        ctaLabel: "Design Your Window Sign",
        uniqueCallout: {
          icon: <Eye className="w-8 h-8 text-indigo-500" />,
          heading: "One-Way Vision — See Out, Can't See In",
          body: "Our perforated vinyl window graphics display your full-color image to people outside while allowing a clear view from inside. Perfect for storefronts that want maximum privacy without sacrificing natural light.",
          color: "bg-indigo-50 border border-indigo-200 text-indigo-900",
        },
      }}
    />
  );
}
