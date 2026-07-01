import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS_REGISTRY } from "@/lib/productsRegistry";

export const metadata: Metadata = {
  title: "Search Results | Nano Signs",
  description: "Search results for custom signage and printing.",
};

export default async function SearchPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const query = (typeof searchParams.q === 'string' ? searchParams.q : '') || "";
  const lowercaseQuery = query.toLowerCase();

  // Find products matching the search query
  const results = [];

  if (query) {
    for (const [categoryId, categoryData] of Object.entries(PRODUCTS_REGISTRY)) {
      for (const product of categoryData.products) {
        if (
          product.name.toLowerCase().includes(lowercaseQuery) ||
          product.description.toLowerCase().includes(lowercaseQuery) ||
          categoryData.title.toLowerCase().includes(lowercaseQuery)
        ) {
          results.push({
            product,
            categoryId,
            categoryTitle: categoryData.title,
          });
        }
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-2 text-gray-900">Search Results</h1>
        <p className="text-gray-600 mb-8">
          Showing results for <span className="font-semibold">"{query}"</span>
        </p>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((result, idx) => (
              <Link
                key={`${result.categoryId}-${result.product.id}-${idx}`}
                href={`/${result.categoryId}/${result.product.id}`}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 h-full flex flex-col border border-gray-100">
                  <div className="relative w-full aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image
                      src={result.product.image}
                      alt={result.product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    {result.product.badge && (
                      <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded">
                        {result.product.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-auto">
                    <p className="text-xs text-gray-500 mb-1">{result.categoryTitle}</p>
                    <h3 className="font-bold text-gray-900 leading-tight mb-1 group-hover:text-[#ca8a04] transition-colors">
                      {result.product.name}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                      {result.product.description}
                    </p>
                    <p className="text-sm font-extrabold text-[#ca8a04]">
                      {result.product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2">No products found</h2>
            <p className="text-gray-600 mb-6">
              We couldn't find any products matching "{query}".
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-full shadow-sm text-gray-900 bg-[#f7f82d] hover:bg-[#e5e625] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
