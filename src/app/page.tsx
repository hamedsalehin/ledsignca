import { Metadata } from "next";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: "Custom LED Signs, Digital Displays & Banners Toronto | Nano Signs",
  description:
    "Design and order custom signs, LED display signs, neon signs, retractable banners, car magnets, and marketing materials online. Fast turnaround in the Toronto Area.",
  alternates: {
    canonical: "https://led-sign.ca",
  },
};

const CategoryCarousel = dynamic(() => import('@/components/CategoryCarousel').then(mod => mod.CategoryCarousel));
const CustomerFavorites = dynamic(() => import('@/components/CustomerFavorites').then(mod => mod.CustomerFavorites));
const ExpertsSection = dynamic(() => import('@/components/ExpertsSection').then(mod => mod.ExpertsSection));
const ProductsGrid = dynamic(() => import('@/components/ProductsGrid').then(mod => mod.ProductsGrid));
const ValuePropositions = dynamic(() => import('@/components/ValuePropositions').then(mod => mod.ValuePropositions));
const CustomerHighlights = dynamic(() => import('@/components/CustomerHighlights').then(mod => mod.CustomerHighlights));
const FaqSection = dynamic(() => import('@/components/FaqSection').then(mod => mod.FaqSection));
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoryCarousel />
      <CustomerFavorites />
      <ExpertsSection />
      <ProductsGrid />
      <ValuePropositions />
      <CustomerHighlights />
      <FaqSection />
      
      {/* SEO Content Block to address Thin Content and Keyword Consistency */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-slate-600 prose prose-slate">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Your Premier Source for Custom Signs and Displays in Toronto</h2>
        <p className="mb-4">
          Welcome to Nano Signs, Toronto's leading destination for high-quality <strong>custom signs</strong>, cutting-edge <strong>LED display</strong> boards, and versatile <strong>retractable banners</strong>. 
          Whether you need vibrant <strong>neon signs</strong> to illuminate your storefront, impactful <strong>car magnets</strong> for on-the-go advertising, or sophisticated digital <strong>displays</strong> to engage your customers, we deliver exceptional results tailored to your brand's unique needs.
        </p>
        <p>
          We specialize in comprehensive commercial print and marketing materials, ensuring your message stands out. From expertly crafted <strong>LED signs</strong> to durable outdoor banners, our Toronto-based team is dedicated to providing fast turnaround times without compromising on quality.
        </p>
      </section>

      <Footer />
    </main>
  );
}

