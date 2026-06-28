import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { Lightbulb } from "lucide-react";


export const metadata: Metadata = {
  title: "Foam Board Signs Toronto ON | Fast Turnaround | Nano Signs",
  description: "Lightweight and professional indoor display signs for presentations, lobbies, and events in the Greater Toronto Area. Fast turnaround in Toronto.",
  alternates: {
    canonical: "https://led-sign.ca/custom-signs/foam-board-signs",
  },
};

export default function FoamBoardSignsPage() {
  return (
    <SignProductPage
      cfg={{
        title: "Foam Board Signs",
        subtitle:
          "Lightweight and professional indoor display signs for presentations, lobbies, and events.",
        breadcrumb: "Signs",
        breadcrumbHref: "/custom-signs",
        promoText:
          "✨ Foam Board Signs — Ultra-Light, Ultra-Crisp. Perfect for Presentations!",
        image: "/images/products/main%20page/foam_board-toronto-printing-ca.jpeg",
        images: [
          "/images/products/main%20page/foam_board-toronto-printing-ca.jpeg",
          "/images/products/foam_sign_hover-toronto-printing-ca.png",
        ],
        ratingScore: "4.8",
        ratingCount: "1,280",
        sizes: [
          { label: '8.5" x 11"', value: "8_5x11", basePrice: 7.99 },
          { label: '11" x 14"', value: "11x14", basePrice: 10.99 },
          { label: '11" x 17"', value: "11x17", basePrice: 12.99 },
          { label: '18" x 24"', value: "18x24", basePrice: 19.99 },
          { label: '24" x 36"', value: "24x36", basePrice: 32.99 },
          { label: '36" x 48"', value: "36x48", basePrice: 54.99 },
          { label: "Custom Size", value: "custom", basePrice: 0 },
        ],
        selects: [
          {
            label: "Board Thickness",
            options: [
              {
                label: '3/16" (5mm) Standard',
                value: "3_16",
                priceAdder: 0,
                description: "Best for most display applications.",
              },
              {
                label: '1/2" (12mm) Thick',
                value: "half",
                priceAdder: 4,
                description:
                  "Extra rigid — stands up on its own with an easel.",
              },
              {
                label: '1" (25mm) Ultra-Thick',
                value: "1in",
                priceAdder: 9,
                description: "Museum-quality thickness for premium displays.",
              },
            ],
          },
          {
            label: "Surface Finish",
            options: [
              {
                label: "Matte (Standard)",
                value: "matte",
                priceAdder: 0,
                description:
                  "No glare — great for photography and presentations.",
              },
              {
                label: "Gloss",
                value: "gloss",
                priceAdder: 2.5,
                description: "Deep, vivid colors with a polished look.",
              },
              {
                label: "Satin",
                value: "satin",
                priceAdder: 2,
                description:
                  "The best of both — minimal glare with rich color.",
              },
            ],
          },
        ],
        toggleGroups: [
          {
            label: "Mounting Backing",
            options: [
              { id: "none", label: "No Backing", priceAdder: 0 },
              {
                id: "self_stick",
                label: "Self-Adhesive Back",
                priceAdder: 2.5,
                description: "Peel & stick to any flat surface.",
              },
              {
                id: "easel",
                label: "Easel Back",
                priceAdder: 1.99,
                description: "Stands up on any flat surface.",
              },
            ],
          },
          {
            label: "Border / Frame",
            options: [
              { id: "no_border", label: "No Border", priceAdder: 0 },
              { id: "black_border", label: "Black Border", priceAdder: 0 },
              { id: "white_border", label: "White Border", priceAdder: 0 },
              {
                id: "custom_frame",
                label: "Custom Color Border",
                priceAdder: 1,
              },
            ],
          },
        ],
        qtyDiscount: "Buy 5+ foam boards and save up to 10%",
        keyFeatures: [
          "Crisp, vivid full-color printing",
          "Ultra-lightweight for easy transport",
          "Smooth white surface for premium look",
          "Multiple thickness options",
          "Matte, Gloss or Satin finish",
          "Self-adhesive or easel-back options",
        ],
        useCases: [
          "Trade Show Displays",
          "Lobbies",
          "Presentations",
          "Real Estate Open Houses",
          "Photo Backdrops",
          "Wedding Signs",
          "School Projects",
          "Retail Displays",
        ],
        specs: [
          { key: "Core Material", value: "Polystyrene foam with paper face" },
          { key: "Standard Thickness", value: '3/16" (5mm)' },
          { key: "Print Method", value: "Direct UV Digital Inkjet" },
          { key: "Print Resolution", value: "1440 dpi" },
          { key: "Color Profile", value: "CMYK" },
          { key: "Bleed Required", value: '0.125" all sides' },
          { key: "Turnaround", value: "Next Business Day" },
        ],
        faqs: [
          {
            q: "Are foam board signs suitable for outdoor use?",
            a: "Foam board is designed for indoor use. It can be used outdoors briefly, but prolonged sun and moisture exposure will damage the board. For outdoor use, consider our coroplast or aluminum signs.",
          },
          {
            q: "Can foam board signs stand on their own?",
            a: "Yes, with the easel-back option selected. The easel attaches to the back and allows the sign to stand freestanding on any flat surface.",
          },
          {
            q: "How do I hang a foam board sign?",
            a: "Use push pins, foam tape, or command strips. With the self-adhesive backing option, simply peel and stick directly to any wall or surface.",
          },
          {
            q: 'Can I get large format foam boards over 36"?',
            a: "Yes, contact us for larger custom sizes. We can print foam boards up to 4' x 8' with seams jointed for larger displays.",
          },
        ],
        reviews: [
          {
            author: "Linda K.",
            rating: 5,
            text: "Perfect for our trade show booth. They were lightweight and the print quality was stunning!",
          },
          {
            author: "Jason R.",
            rating: 5,
            text: "Used these for an open house. Very professional looking and easy to carry around the property.",
          },
          {
            author: "Amanda T.",
            rating: 4,
            text: "Great for indoor use. Colors were accurate to my file. The easel back is a nice touch.",
          },
        ],
        ctaHeading: "Make Your Presentation Pop",
        ctaBody:
          "Vivid foam board signs that command attention at any indoor event.",
        ctaLabel: "Order Foam Board Signs",
        uniqueCallout: {
          icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
          heading: "Ultra-Light. Ultra-Crisp. Ultra-Affordable.",
          body: "Foam board signs weigh as little as half a pound, making them the easiest display solution to transport and set up. Perfect for presenters, event planners, and open houses.",
          color: "bg-yellow-50 border border-yellow-200 text-yellow-900",
        },
      }}
    />
  );
}
