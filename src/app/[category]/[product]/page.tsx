import React from "react";
import { notFound } from "next/navigation";
import { SignProductPage } from "@/components/SignProductPage";
import { PRODUCTS_REGISTRY } from "@/lib/productsRegistry";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    category: string;
    product: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, product } = await params;
  const decodedCategory = decodeURIComponent(category);
  const decodedProduct = decodeURIComponent(product);
  const categoryData = PRODUCTS_REGISTRY[decodedCategory];
  if (!categoryData) return {};
  const productData = categoryData.products.find((p) => p.id === decodedProduct);
  if (!productData) return {};
  const title = `${productData.name} Fort Lauderdale FL | Fast Turnaround | Nano Signs`;
  const description = productData.description
    ? `Design custom ${productData.name.toLowerCase()} online or in person in Broward County. Fastest turnaround times. ${productData.description}`
    : `Custom ${productData.name} design and high-quality printing in Fort Lauderdale & Oakland Park FL. Fastest turnaround times in Broward. Call 305-967-1005!`;

  return {
    title,
    description: description.slice(0, 160),
    alternates: {
      canonical: `https://nano-signs.com/${decodedCategory}/${decodedProduct}`,
    },
  };
}

// Categories that have their own static product sub-pages (e.g. custom-signs/yard-signs/page.tsx)
// These must be excluded from generateStaticParams to avoid route conflicts.
const STATIC_PRODUCT_CATEGORIES = new Set(["custom-signs"]);

export async function generateStaticParams() {
  const paths: { category: string; product: string }[] = [];

  for (const category of Object.keys(PRODUCTS_REGISTRY)) {
    if (STATIC_PRODUCT_CATEGORIES.has(category)) {
      continue;
    }
    const categoryData = PRODUCTS_REGISTRY[category];
    for (const product of categoryData.products) {
      paths.push({
        category: category,
        product: product.id,
      });
    }
  }
  return paths;
}

export const dynamicParams = false;

export default async function ProductConfiguratorPage({ params }: PageProps) {
  const { category, product } = await params;
  const decodedCategory = decodeURIComponent(category);
  const decodedProduct = decodeURIComponent(product);

  const categoryData = PRODUCTS_REGISTRY[decodedCategory];
  if (!categoryData) {
    notFound();
  }

  const productData = categoryData.products.find(
    (p) => p.id === decodedProduct,
  );
  if (!productData) {
    notFound();
  }

  // Render the pre-configured product layout page with dynamic description
  const configWithDesc = {
    ...productData.config,
    id: productData.id,
    description: productData.config.description || productData.description,
  };

  return <SignProductPage cfg={configWithDesc} />;
}
