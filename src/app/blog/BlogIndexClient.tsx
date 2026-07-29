"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export interface BlogPostItem {
  slug: string;
  date: string;
  title: string;
  description: string;
  image?: string;
}

export function BlogIndexClient({ posts }: { posts: BlogPostItem[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const totalPages = Math.ceil(posts.length / postsPerPage) || 1;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 pt-8 pb-20 font-opensans">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-pink-500 transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
          </Link>

          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-poppins tracking-tight mb-4">
              Blog &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#b020ff]">News</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, industry updates, and expert advice on custom signage and printing in Toronto.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              No blog posts found. Check back soon!
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map(({ slug, date, title, description, image }) => (
                  <Link
                    href={`/blog/${slug}`}
                    key={slug}
                    className="group flex flex-col bg-white rounded-2xl shadow-sm border border-pink-100/50 hover:shadow-xl hover:border-pink-200 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                      <Image
                        src={image && image.trim() !== "" ? image : "/uploads/2023/08/neon-led2-300x146.jpg"}
                        alt={title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-pink-500 mb-3 uppercase tracking-wider">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 font-poppins group-hover:text-[#b020ff] transition-colors leading-tight">
                        {title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
                        {description}
                      </p>
                      <div className="flex items-center text-sm font-bold text-[#b020ff] group-hover:text-pink-600 transition-colors mt-auto">
                        Read Article{" "}
                        <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Page Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-16 font-poppins">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 disabled:opacity-40 transition-colors flex items-center gap-1 shadow-sm"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </button>

                  <div className="flex items-center gap-1 px-3">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-xl text-xs font-extrabold transition-all shadow-sm ${
                          currentPage === pageNum
                            ? "bg-[#f7f82d] text-gray-950 scale-105"
                            : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 disabled:opacity-40 transition-colors flex items-center gap-1 shadow-sm"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
