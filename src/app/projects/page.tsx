import { getPostData } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectsGalleryClient } from "./ProjectsGalleryClient";

export const metadata = {
  title: "Projects Gallery | Nano Signs",
  description: "Browse our gallery of custom signs, neon LEDs, car decals, and printed materials.",
};

export default async function ProjectsGallery() {
  let postData;
  try {
    postData = await getPostData("projects");
  } catch (error) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-8 pb-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-pink-500 transition-colors mb-8">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> Back to Home
        </Link>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-poppins tracking-tight mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#b020ff]">Gallery</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of our recent installations, custom signs, and printing jobs.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-pink-100 p-6 md:p-12">
          <ProjectsGalleryClient htmlContent={postData.contentHtml || ""} />
        </div>
      </div>
    </main>
  );
}
