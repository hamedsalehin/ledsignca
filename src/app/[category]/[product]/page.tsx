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
  const title = `${productData.name} Toronto ON | Fast Turnaround | Nano Signs`;
  const description = productData.description
    ? `Design custom ${productData.name.toLowerCase()} online or in person in the Greater Toronto Area. Fastest turnaround times. ${productData.description}`
    : `Custom ${productData.name} design and high-quality printing in Toronto & Mississauga, ON. Fastest turnaround times in Ontario. Call +1 416-838-8994!`;

  return {
    title,
    description: description.slice(0, 160),
    openGraph: {
      title,
      description: description.slice(0, 160),
      url: `https://led-sign.ca/${decodedCategory}/${decodedProduct}`,
      siteName: "Nano Signs",
      locale: "en_CA",
      type: "website",
    },
    alternates: {
      canonical: `https://led-sign.ca/${decodedCategory}/${decodedProduct}`,
    },
  };
}

export async function generateStaticParams() {
  const paths: { category: string; product: string }[] = [];

  for (const category of Object.keys(PRODUCTS_REGISTRY)) {
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

  // Format numerical price for Google Schema.org Offer (removes $ symbol)
  const rawPrice = productData.price ? productData.price.replace(/[^0-9.]/g, "") : "99.00";
  const formattedPrice = (parseFloat(rawPrice) || 99.00).toFixed(2);
  const imageUrl = productData.image.startsWith("http")
    ? productData.image
    : `https://led-sign.ca${productData.image}`;

  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": productData.name,
    "image": [imageUrl],
    "description": productData.description || `${productData.name} custom printing in Toronto`,
    "sku": productData.id,
    "mpn": productData.id,
    "brand": {
      "@type": "Brand",
      "name": "Nano Signs"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "184",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://led-sign.ca/${decodedCategory}/${decodedProduct}`,
      "priceCurrency": "CAD",
      "price": formattedPrice,
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Nano Signs"
      }
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://led-sign.ca"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": categoryData.title,
        "item": `https://led-sign.ca/${decodedCategory}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": productData.name,
        "item": `https://led-sign.ca/${decodedCategory}/${decodedProduct}`
      }
    ]
  };

  const configWithDesc = {
    ...productData.config,
    id: productData.id,
    description: productData.config?.description || productData.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SignProductPage cfg={configWithDesc} />
    </>
  );
}
