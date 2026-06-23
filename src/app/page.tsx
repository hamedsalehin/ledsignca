import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryCarousel } from "@/components/CategoryCarousel";
import { CustomerFavorites } from "@/components/CustomerFavorites";
import { ExpertsSection } from "@/components/ExpertsSection";
import { ProductsGrid } from "@/components/ProductsGrid";
import { ValuePropositions } from "@/components/ValuePropositions";
import { CustomerHighlights } from "@/components/CustomerHighlights";
import { Footer } from "@/components/Footer";

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
      <Footer />
    </main>
  );
}
