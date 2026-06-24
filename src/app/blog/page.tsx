import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata = {
  title: "Blog & News | Nano Signs",
  description: "Read the latest news, updates, and expert tips on signage and custom printing in Toronto.",
};

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="min-h-screen bg-slate-50 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-pink-500 transition-colors mb-8">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> Back to Home
        </Link>
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-poppins tracking-tight mb-4">
            Blog & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#b020ff]">News</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, updates, and expert advice on custom signage and printing.
          </p>
        </div>

        {allPostsData.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No blog posts found. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData.map(({ slug, date, title, description, image }) => (
              <Link href={`/blog/${slug}`} key={slug} className="group flex flex-col bg-white rounded-2xl shadow-sm border border-pink-100/50 hover:shadow-xl hover:border-pink-200 transition-all duration-300 overflow-hidden">
                {image && (
                  <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-pink-500 mb-3 uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 font-poppins group-hover:text-[#b020ff] transition-colors leading-tight">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {description}
                  </p>
                  <div className="flex items-center text-sm font-bold text-[#b020ff] group-hover:text-pink-600 transition-colors mt-auto">
                    Read Article <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
