import { NextResponse } from "next/server";
import { PRODUCTS_REGISTRY } from "@/lib/productsRegistry";
import { getSortedPostsData } from "@/lib/blog";

export async function GET() {
  const host = "led-sign.ca";
  const key = "c0326f2122d2427a9447ff6bd10f443b";
  const keyLocation = `https://${host}/${key}.txt`;

  const baseUrl = `https://${host}`;

  const staticRoutes = [
    "",
    "/about-us",
    "/contact-us",
    "/return-policy",
    "/get-a-quote",
    "/projects",
    "/design",
    "/blog",
    "/support",
    "/led-display-signs/gallery",
    "/neon-signs/neon-creator",
    "/neon-signs/upload-for-price",
  ];

  const categoryRoutes = Object.keys(PRODUCTS_REGISTRY).map((category) => `/${category}`);

  const productRoutes = Object.entries(PRODUCTS_REGISTRY).flatMap(([category, data]) =>
    data.products.map((product) => `/${category}/${product.id}`)
  );

  const blogPosts = getSortedPostsData()
    .filter((post) => post.slug !== "support")
    .map((post) => `/blog/${post.slug}`);

  const urlList = [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...blogPosts,
  ].map((route) => `${baseUrl}${route}`);

  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: res.ok,
      status: res.status,
      submittedCount: urlList.length,
      urls: urlList,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
