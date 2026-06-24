import { getPostData, getSortedPostsData } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PRODUCTS_REGISTRY } from "@/lib/productsRegistry";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const postData = await getPostData(slug);
    return {
      title: `${postData.title} | Nano Signs Blog`,
      description: postData.description,
    };
  } catch (e) {
    return {
      title: "Blog Post Not Found | Nano Signs",
    };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let postData;
  try {
    postData = await getPostData(slug);
  } catch (error) {
    notFound();
  }

  // Extract all products
  const allProducts = Object.values(PRODUCTS_REGISTRY).map(c => c.products).flat();
  
  // Smart Recommendation Algorithm based on the FULL blog post content
  const fullText = `${postData.title} ${postData.description || ""} ${postData.contentHtml || ""}`.toLowerCase();
  
  // Score products based on matching keywords
  const scoredProducts = allProducts.map(product => {
    let score = 0;
    const productName = product.name.toLowerCase();
    const productDesc = product.description.toLowerCase();
    const productId = product.id.toLowerCase();
    
    // 1. Exact phrase matches get massive scores
    if (fullText.includes(productId.replace(/-/g, " "))) score += 20;
    if (fullText.includes(productName)) score += 15;
    
    // 2. Dynamic word matching (count how many times unique product words appear in the article)
    const ignoreWords = ["custom", "signs", "sign", "printing", "full", "color", "display", "screen", "the", "and", "for"];
    const productWords = productName.replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(w => w.length > 2 && !ignoreWords.includes(w));
    
    productWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'g');
      const matches = fullText.match(regex);
      if (matches) {
        score += matches.length * 2; // +2 points for every time the word is mentioned
      }
    });

    // 3. Category/Broad keyword overlaps
    const keywords = ["neon", "channel", "led", "banner", "coroplast", "acrylic", "window", "vehicle", "magnet", "flag", "pylon", "canvas", "t-shirt", "card", "flyer", "box", "decal", "sticker", "wrap", "metal"];
    keywords.forEach(kw => {
      if (fullText.includes(kw) && (productName.includes(kw) || productId.includes(kw) || productDesc.includes(kw))) {
        score += 5;
      }
    });

    // 4. Add a tiny bit of random to shuffle equal scores (e.g. 0 scores)
    score += Math.random();

    return { product, score };
  });

  // Sort by highest score first, take top 3
  const relatedProducts = scoredProducts.sort((a, b) => b.score - a.score).slice(0, 3).map(p => p.product);

  return (
    <main className="min-h-screen bg-slate-50 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link href="/blog" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-pink-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
        
        <article className="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden">
          {postData.image && (
            <div className="relative w-full h-64 md:h-96 bg-slate-100">
              <Image
                src={postData.image}
                alt={postData.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
          
          <div className="p-6 md:p-12">
            <header className="mb-10 text-center">
              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-pink-500 mb-4 uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                {new Date(postData.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 font-poppins leading-tight tracking-tight mb-6">
                {postData.title}
              </h1>
              {postData.description && (
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                  {postData.description}
                </p>
              )}
            </header>

            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-[#b020ff] mx-auto rounded-full mb-10"></div>

            <div 
              className="prose prose-lg md:prose-xl max-w-none prose-headings:font-poppins prose-headings:font-bold prose-h2:text-3xl prose-h2:text-gray-900 prose-p:text-gray-600 prose-a:text-pink-500 hover:prose-a:text-pink-600 prose-img:rounded-xl prose-img:shadow-sm prose-li:text-gray-600"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} 
            />

            {/* Related Products Section */}
            <div className="mt-20 pt-12 border-t border-gray-100">
              <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-8 text-center">
                Need signage for your business?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((product, i) => {
                  // Find category for the link
                  const catId = Object.keys(PRODUCTS_REGISTRY).find(key => 
                    PRODUCTS_REGISTRY[key].products.some(p => p.id === product.id)
                  ) || "custom-signs";

                  return (
                    <Link 
                      key={i} 
                      href={`/${catId}/${product.id}`}
                      className="group block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-pink-200"
                    >
                      <div className="relative h-40 w-full overflow-hidden bg-white">
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="font-bold text-gray-900 mb-1">{product.name}</h4>
                        <div className="flex items-center text-pink-500 text-sm font-semibold mt-3 group-hover:text-pink-600">
                          View Details <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="text-center mt-8">
                <Link href="/custom-signs" className="inline-block bg-gray-900 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-sm">
                  View All Products
                </Link>
              </div>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}
