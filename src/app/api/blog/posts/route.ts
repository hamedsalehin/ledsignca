import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const postsDirectory = path.join(process.cwd(), "src/content/blog");
    if (!fs.existsSync(postsDirectory)) {
      return NextResponse.json({ posts: [] });
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
      .filter((file) => file.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        return {
          id: slug,
          slug,
          title: matterResult.data.title || slug,
          category: matterResult.data.category || "General Signage",
          description: matterResult.data.description || "",
          image: matterResult.data.image || "/uploads/2023/08/neon-led2-300x146.jpg",
          content: matterResult.content || "",
          published: true,
          date: matterResult.data.date || new Date().toISOString().split("T")[0],
        };
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));

    return NextResponse.json({ posts });
  } catch (err: any) {
    console.error("Failed to list blog posts:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
