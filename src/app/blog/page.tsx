import { getSortedPostsData } from "@/lib/blog";
import { BlogIndexClient } from "./BlogIndexClient";

export const metadata = {
  title: "Blog & News | Nano Signs Toronto",
  description: "Read the latest news, updates, and expert tips on signage and custom printing in Toronto.",
};

export default function BlogIndex() {
  const posts = getSortedPostsData();
  return <BlogIndexClient posts={posts} />;
}

