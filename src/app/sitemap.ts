import { MetadataRoute } from "next";
import { PRODUCTS_REGISTRY } from "@/lib/productsRegistry";
import { getSortedPostsData } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://led-sign.ca";

  // Static routes
  const staticRoutes = [
    "",
    "/about-us",
    "/contact-us",
    "/return-policy",
    "/login",
    "/get-a-quote",
    "/projects",
    "/design",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Categories
  const categoryRoutes = Object.keys(PRODUCTS_REGISTRY).map((category) => ({
    url: `${baseUrl}/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Products
  const productRoutes = Object.entries(PRODUCTS_REGISTRY).flatMap(([category, data]) => {
    return data.products.map((product) => ({
      url: `${baseUrl}/${category}/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  });

  // Blog Posts
  const blogPosts = getSortedPostsData().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...blogPosts];
}
