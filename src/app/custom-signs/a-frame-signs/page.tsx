import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { ArrowUpDown } from "lucide-react";


export const metadata: Metadata = {
  title: "A-Frame Sidewalk Signs Toronto ON | Fast Turnaround | Nano Signs",
  description: "Design & order portable, double-sided sidewalk A-frame signs in Toronto & Scarborough ON. Fastest turnaround times in the Greater Toronto Area.",
  alternates: {
    canonical: "https://led-sign.ca/custom-signs/a-frame-signs",
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
          breadcrumbHref: "/personalized-signs",
          promoText: "🪧 A-Frame Signs — Double-Sided, Portable, Ships Tomorrow!",
          image: "/images/products/main-page/A-frame_sign-toronto-printing-ca.jpeg",
          images: [
            "/images/products/main-page/A-frame_sign-toronto-printing-ca.jpeg",
            "/images/products/aframe_sign_hover-toronto-printing-ca.png",
          ],
          ratingScore: "4.8",
          ratingCount: "1,640",
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
              text: "Sturdy and looks expert-grade on the sidewalk. The chain accessory was a great add-on.",
            },
          ],
          ctaHeading: "Bring Customers Through the Door",
          }}
    />
  );
}
