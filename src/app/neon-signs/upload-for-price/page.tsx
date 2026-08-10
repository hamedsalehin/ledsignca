import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { UploadForPriceClient } from "./UploadForPriceClient";

export const metadata: Metadata = {
  title: "Upload Design for Custom Neon Sign Quote | Nano Signs Toronto",
  description:
    "Upload your custom logo, text, or sketch to get a fast quote and proof for custom LED neon signs in Toronto and GTA. Fast turnaround & local pickup.",
  alternates: {
    canonical: "https://led-sign.ca/neon-signs/upload-for-price",
  },
};

export default function UploadForPricePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow flex flex-col">
        {/* Breadcrumb / Title */}
        <div className="bg-white border-b py-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center gap-2 text-sm text-gray-500 font-sans">
            <Link href="/" className="hover:text-yellow-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/neon-signs" className="hover:text-yellow-600 transition-colors">
              Neon Signs
            </Link>
            <span>/</span>
            <span className="font-semibold text-gray-900">Upload for Price</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-6 pb-2">
          <h1 className="text-2xl font-bold font-poppins text-gray-900">
            Upload Design for Custom Neon Sign Quote
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Upload your logo, artwork, or sketch below to receive an instant price quote and 3D preview.
          </p>
        </div>

        {/* Client iframe + Conversion Tracker */}
        <UploadForPriceClient />
      </main>
      <Footer />
    </div>
  );
}
