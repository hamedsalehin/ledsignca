import React from "react";
import { notFound } from "next/navigation";
import { PRODUCTS_REGISTRY } from "@/lib/productsRegistry";
import { CategoryPageClient } from "./CategoryPageClient";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  const categoryData = PRODUCTS_REGISTRY[decodedCategory];
  if (!categoryData) return {};
  
  const title = `${categoryData.title} Toronto ON | Fast Turnaround | Nano Signs`;
  const description = categoryData.description
    ? `Design & order custom ${categoryData.title.toLowerCase()} online or in person in the Greater Toronto Area. Fastest turnaround times. ${categoryData.description}`
    : `High-quality custom ${categoryData.title.toLowerCase()} printing in Toronto & Mississauga, ON. Fastest turnaround times in Ontario. Call +1 416-838-8994!`;

  return {
    title,
    description: description.slice(0, 160), // Keep description within SEO limits
    alternates: {
      canonical: `https://nano-signs.com/${decodedCategory}`,
    },
  };
}

export async function generateStaticParams() {
  const categories = Object.keys(PRODUCTS_REGISTRY);
  return categories.map((category) => ({
    category: category,
  }));
}

export const dynamicParams = false;

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  const categoryData = PRODUCTS_REGISTRY[decodedCategory];

  if (!categoryData) {
    notFound();
  }

  const firstTwoProducts = categoryData.products.slice(0, 2);

  return (
    <CategoryPageClient
      categorySlug={decodedCategory}
      title={categoryData.title}
      breadcrumbLabel={categoryData.breadcrumbLabel || categoryData.title}
      heroSubtitle={
        categoryData.heroSubtitle ||
        "All-Weather. Quick Production. Affordable."
      }
      heroImage={categoryData.heroImage}
      tabletHeroImage={categoryData.tabletHeroImage}
      mobileHeroImage={categoryData.mobileHeroImage}
      products={categoryData.products.map((p) => ({
        id: p.id,
        name: p.name,
        image: p.image,
        hoverImage: p.hoverImage,
        price: p.price,
        description: p.description,
        badge: p.badge,
        reviewRating: p.config?.ratingScore,
        reviewCount: p.config?.ratingCount,
      }))}
      categoryDescriptionText={categoryData.categoryDescriptionText}
      categorySecondaryImage={categoryData.categorySecondaryImage}
      faqs={categoryData.faqs || []}
      reviewRating={categoryData.reviewRating}
      reviewCount={categoryData.reviewCount}
      reviewQuote={categoryData.reviewQuote}
      ctaProduct1={
        firstTwoProducts[0]
          ? {
              name: firstTwoProducts[0].name,
              href: `/${decodedCategory}/${firstTwoProducts[0].id}`,
            }
          : undefined
      }
      ctaProduct2={
        firstTwoProducts[1]
          ? {
              name: firstTwoProducts[1].name,
              href: `/${decodedCategory}/${firstTwoProducts[1].id}`,
            }
          : undefined
      }
    />
  );
}
