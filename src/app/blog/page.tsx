import { getSortedPostsData } from "@/lib/blog";
import { BlogIndexClient } from "./BlogIndexClient";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog & Signage Industry News | Nano Signs Toronto",
  description:
    "Read expert guides, signage trends, and tips on custom LED signs, storefront channel letters, neon lights, and commercial printing in Toronto.",
};

export default function BlogIndex() {
  const posts = getSortedPostsData();
  return <BlogIndexClient posts={posts} />;
}


