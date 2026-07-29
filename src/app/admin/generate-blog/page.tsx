"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Sparkles,
  RefreshCw,
  CheckCircle,
  Eye,
  Send,
  FileText,
  AlertCircle,
  Globe,
  Lock,
  PlusCircle,
  Edit3,
  Check,
  Trash2
} from "lucide-react";


interface DraftArticle {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  content: string;
  published: boolean;
}

const INITIAL_DRAFTS: DraftArticle[] = [
  {
    id: "draft-1",
    category: "Storefront Signs",
    title: "5 High-Converting Sign Designs for Toronto Businesses in 2026",
    description: "Learn how modern LED channel letters and acrylic logo signs dramatically increase walk-in customers across the GTA.",
    image: "/uploads/2023/08/neon-led2-300x146.jpg",
    published: false,
    content: `
<h2>Why Signage is Your Store's #1 Salesperson in Toronto</h2>
<p>First impressions matter more than ever in busy retail areas like Scarborough, Markham, and Downtown Toronto. Custom 3D acrylic signs and illuminated LED channel letters create an immediate feeling of trust and quality.</p>

<h3>1. High-Contrast Illumination</h3>
<p>Bright LED lighting ensures your business is visible 24/7, even during dark Canadian winter evenings.</p>

<h3>2. Durable Weatherproofing</h3>
<p>Using premium aluminum casing and UV-resistant acrylics ensures your sign remains vibrant against rain, snow, and summer heat.</p>

<p>For custom signage quotes, call <strong>Nano Signs</strong> today at <strong>416-838-8994</strong>.</p>
`
  },
  {
    id: "draft-2",
    category: "LED Display Screens",
    title: "Programmable LED Display Boards vs Traditional Printed Banners",
    description: "A complete comparison of cost, durability, and customer engagement for Toronto retail stores.",
    image: "/uploads/2022/02/Custom-LED-Sign-Board.png",
    published: false,
    content: `
<h2>Choosing the Right Display Technology</h2>
<p>Retail stores looking to attract passing traffic often wonder whether to invest in traditional vinyl banners or electronic full-color LED screens.</p>

<h3>Why Programmable LED Signs Deliver Higher ROI</h3>
<ul>
  <li><strong>Instant Content Updates:</strong> Change price promotions and store announcements in seconds.</li>
  <li><strong>Dynamic Motion:</strong> Moving text and animations attract 4x more attention than static text.</li>
</ul>

<p>Explore our LED sign options at <strong>Nano Signs Toronto</strong> on 2190 Warden Ave.</p>
`
  }
];

export default function AdminBlogStudio() {
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const [drafts, setDrafts] = useState<DraftArticle[]>(INITIAL_DRAFTS);
  const [generating, setGenerating] = useState(false);
  const [previewId, setPreviewId] = useState<string | null>(null);

  // Editing state
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State (Used for both Creation & Editing)
  const [showForm, setShowForm] = useState(false);
  const [customTitle, setCustomTitle] = useState("");
  const [customDescription, setCustomDescription] = useState("");
  const [customCategory, setCustomCategory] = useState("Custom Article");
  const [customImage, setCustomImage] = useState("/uploads/2023/08/neon-led2-300x146.jpg");
  const [customContent, setCustomContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [loadingPosts, setLoadingPosts] = useState(false);

  const loadExistingPosts = async () => {
    setLoadingPosts(true);
    try {
      const res = await fetch("/api/blog/posts");
      const data = await res.json();
      if (res.ok && data.posts && data.posts.length > 0) {
        setDrafts(data.posts);
      }
    } catch (err) {
      console.error("Failed to load existing blog posts:", err);
    } finally {
      setLoadingPosts(false);
    }
  };

  React.useEffect(() => {
    if (authenticated) {
      loadExistingPosts();
    }
  }, [authenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      (username.trim().toLowerCase() === "nano" || username.trim().toLowerCase() === "admin") &&
      (passcode === "NanoSigns@2026" || passcode === "nano2026")
    ) {
      setAuthenticated(true);
    } else {
      alert("Invalid Username or Password.");
    }
  };

  const handleGenerateNewNews = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      alert("Fetched 2 new trending sign news topics!");
    }, 1000);
  };

  const openEditModal = (article: DraftArticle) => {
    setEditingId(article.id);
    setCustomTitle(article.title);
    setCustomCategory(article.category);
    setCustomDescription(article.description);
    setCustomImage(article.image || "/uploads/2023/08/neon-led2-300x146.jpg");
    setCustomContent(article.content);
    setShowForm(true);
  };

  const openNewForm = () => {
    setEditingId(null);
    setCustomTitle("");
    setCustomCategory("Custom Article");
    setCustomDescription("");
    setCustomImage("/uploads/2023/08/neon-led2-300x146.jpg");
    setCustomContent("");
    setShowForm(!showForm);
  };

  // Publish or Update article in Markdown file store
  const publishArticleData = async (article: {
    title: string;
    description: string;
    content: string;
    image: string;
    originalSlug?: string;
  }) => {
    const res = await fetch("/api/blog/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Failed to save article.");
    }
    return data;
  };

  const handlePublishPost = async (draftId: string) => {
    const target = drafts.find((d) => d.id === draftId);
    if (!target) return;

    try {
      const data = await publishArticleData({
        title: target.title,
        description: target.description,
        content: target.content,
        image: target.image,
      });

      setDrafts((prev) =>
        prev.map((d) => (d.id === draftId ? { ...d, published: true } : d))
      );
      alert(`🎉 Article published! It is live on Page 1 at /blog/${data.slug}`);
    } catch (e: any) {
      alert(`Error publishing post: ${e.message}`);
    }
  };

  const handleDeletePost = async (draft: DraftArticle) => {
    const slug = draft.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    if (!confirm(`Are you sure you want to delete "${draft.title}"?`)) return;

    try {
      const res = await fetch(`/api/blog/delete?slug=${slug}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete");

      setDrafts((prev) => prev.filter((d) => d.id !== draft.id));
      alert(`🗑️ Successfully deleted "${draft.title}"`);
    } catch (err: any) {
      alert(`Error deleting post: ${err.message}`);
    }
  const handleSaveAndPublish = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customTitle.trim() || !customContent.trim()) {
      alert("Please fill in both Title and Content.");
      return;
    }

    setSubmitting(true);
    try {
      const existingArticle = drafts.find((d) => d.id === editingId);
      const originalSlug = existingArticle
        ? existingArticle.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "")
        : undefined;

      const data = await publishArticleData({
        title: customTitle,
        description: customDescription,
        content: customContent,
        image: customImage,
        originalSlug,
      });

      if (editingId) {
        // Update existing item
        setDrafts((prev) =>
          prev.map((d) =>
            d.id === editingId
              ? {
                  ...d,
                  title: customTitle,
                  category: customCategory,
                  description: customDescription,
                  image: customImage,
                  content: customContent,
                  published: true,
                }
              : d
          )
        );
        alert(`✅ Article updated successfully on Page 1 at /blog/${data.slug}`);
      } else {
        // Create new item
        const newArticle: DraftArticle = {
          id: `article-${Date.now()}`,
          title: customTitle,
          category: customCategory,
          description: customDescription,
          image: customImage,
          content: customContent,
          published: true,
        };
        setDrafts((prev) => [newArticle, ...prev]);
        alert(`🎉 Published successfully! Article is live on Page 1 at /blog/${data.slug}`);
      }

      setShowForm(false);
      setEditingId(null);
    } catch (err: any) {
      alert(`Failed to save article: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (!authenticated) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-[#f7f82d]/10 border border-[#f7f82d]/30 text-[#f7f82d] flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold font-poppins text-center mb-2">
              Admin Blog Studio Login
            </h1>
            <p className="text-xs text-slate-400 text-center mb-6">
              Authorized access only. Enter credentials to manage blog content.
            </p>

            <form onSubmit={handleLogin} className="space-y-4 font-poppins">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Username"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-[#f7f82d]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-[#f7f82d]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#f7f82d] text-slate-950 font-bold rounded-xl text-sm hover:opacity-90 transition-opacity mt-2"
              >
                Log In to Admin Studio
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const selectedPreview = drafts.find((d) => d.id === previewId);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 md:px-8 font-poppins">
        <div className="max-w-6xl mx-auto">
          {/* Header Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-slate-900 border border-slate-800 p-6 rounded-3xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f82d]/10 border border-[#f7f82d]/30 text-[#f7f82d] text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                AI Content &amp; Article Manager
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white">
                Admin Blog Studio
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Write, edit, and publish articles directly to Page 1 of your blog.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={openNewForm}
                className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm transition-colors flex items-center gap-2 border border-slate-700"
              >
                <PlusCircle className="w-4 h-4 text-[#f7f82d]" />
                {showForm && !editingId ? "Close Form" : "Write Custom Article"}
              </button>

              <button
                onClick={handleGenerateNewNews}
                disabled={generating}
                className="px-5 py-3 bg-[#f7f82d] text-slate-950 font-bold rounded-xl text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${generating ? "animate-spin" : ""}`} />
                {generating ? "Scanning News..." : "Fetch Daily News"}
              </button>
            </div>
          </div>

          {/* Form for Writing / Editing */}
          {showForm && (
            <div className="mb-8 bg-slate-900 border border-[#f7f82d]/40 rounded-3xl p-6 md:p-8 animate-in fade-in duration-200 shadow-xl">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-[#f7f82d]" />
                {editingId ? "Edit Article & Update on Blog" : "Write & Publish New Article"}
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                {editingId
                  ? "Make your changes below and click Update to republish to Page 1."
                  : "Fill in the details below. Once published, your article will immediately appear at the top of Page 1."}
              </p>

              <form onSubmit={handleSaveAndPublish} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Article Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={customTitle}
                      onChange={(e) => setCustomTitle(e.target.value)}
                      placeholder="e.g. Best Neon Signs for Toronto Restaurants in 2026"
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#f7f82d]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Category Name
                    </label>
                    <input
                      type="text"
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                      placeholder="e.g. Neon Signs / Storefront Tips"
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#f7f82d]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Short Summary / Meta Description
                  </label>
                  <input
                    type="text"
                    value={customDescription}
                    onChange={(e) => setCustomDescription(e.target.value)}
                    placeholder="Brief overview for search engines..."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#f7f82d]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Image URL Path
                  </label>
                  <input
                    type="text"
                    value={customImage}
                    onChange={(e) => setCustomImage(e.target.value)}
                    placeholder="/uploads/2023/08/neon-led2-300x146.jpg"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#f7f82d]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Article Content (Supports HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;) *
                  </label>
                  <textarea
                    required
                    rows={8}
                    value={customContent}
                    onChange={(e) => setCustomContent(e.target.value)}
                    placeholder="<h2>Article Headline</h2><p>Article body content...</p>"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#f7f82d] font-mono resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-3 bg-[#f7f82d] text-slate-950 font-bold rounded-xl text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow"
                  >
                    <Send className="w-4 h-4" />
                    {submitting
                      ? "Saving..."
                      : editingId
                      ? "Update & Publish Changes to Page 1"
                      : "Publish Article Now to Page 1"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingId(null);
                    }}
                    className="px-4 py-3 bg-slate-800 text-slate-300 rounded-xl text-sm font-semibold hover:bg-slate-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Articles Management Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* List Column */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#f7f82d]" /> Manage &amp; Edit Articles
              </h2>

              {drafts.map((draft) => (
                <div
                  key={draft.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    draft.published
                      ? "bg-emerald-950/20 border-emerald-800/40"
                      : "bg-slate-900 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold text-yellow-600 bg-[#f7f82d]/10 px-2.5 py-0.5 rounded-md">
                      {draft.category}
                    </span>
                    {draft.published ? (
                      <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Published on Page 1
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-amber-400">
                        Ready to Review
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {draft.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                    {draft.description}
                  </p>

                  <div className="flex items-center gap-3 pt-2 border-t border-slate-800/60">
                    <button
                      onClick={() => setPreviewId(draft.id)}
                      className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg text-slate-200 flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" /> Preview
                    </button>

                    <button
                      onClick={() => openEditModal(draft)}
                      className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg text-[#f7f82d] flex items-center gap-1.5 transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5" /> Edit Article
                    </button>

                    <button
                      onClick={() => handleDeletePost(draft)}
                      className="px-3.5 py-1.5 bg-rose-950/60 border border-rose-800/40 hover:bg-rose-900/60 text-xs font-semibold rounded-lg text-rose-400 flex items-center gap-1.5 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>

                    {!draft.published && (
                      <button
                        onClick={() => handlePublishPost(draft.id)}
                        className="px-4 py-1.5 bg-[#f7f82d] hover:bg-[#e2e327] text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors ml-auto shadow"
                      >
                        <Send className="w-3.5 h-3.5" /> Publish Now
                      </button>
                    )}

                  </div>
                </div>
              ))}
            </div>

            {/* Live Preview Panel */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 h-fit sticky top-6">
              <h2 className="text-base font-bold text-slate-200 mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#f7f82d]" /> Article Preview
              </h2>

              {selectedPreview ? (
                <div className="space-y-4 text-slate-300 text-xs">
                  <div className="border-b border-slate-800 pb-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#f7f82d] font-bold">
                      {selectedPreview.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 leading-snug">
                      {selectedPreview.title}
                    </h3>
                  </div>

                  <div
                    className="prose prose-invert prose-xs max-w-none text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: selectedPreview.content }}
                  />

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => openEditModal(selectedPreview)}
                      className="w-full py-2.5 bg-slate-800 text-[#f7f82d] font-bold rounded-xl text-xs flex items-center justify-center gap-1.5"
                    >
                      <Edit3 className="w-4 h-4" /> Edit This Article
                    </button>

                    {!selectedPreview.published && (
                      <button
                        onClick={() => handlePublishPost(selectedPreview.id)}
                        className="w-full py-2.5 bg-[#f7f82d] text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow"
                      >
                        <Send className="w-4 h-4" /> Publish Now
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center text-slate-500 space-y-2">
                  <AlertCircle className="w-8 h-8 mx-auto text-slate-600" />
                  <p className="text-xs">Click &quot;Preview&quot; on any article to inspect content.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}


