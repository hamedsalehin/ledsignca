import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function UploadForPricePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col">
        {/* Breadcrumb / Title */}
        <div className="bg-white border-b py-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center gap-2 text-sm text-gray-500 font-sans">
            <a href="/" className="hover:text-yellow-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/neon-signs" className="hover:text-yellow-600 transition-colors">Neon Signs</a>
            <span>/</span>
            <span className="font-semibold text-gray-900">Upload for Price</span>
          </div>
        </div>
        
        {/* Iframe to original quote request tool */}
        <div className="w-full flex-grow relative" style={{ minHeight: "800px" }}>
          <iframe 
            src="https://neonfl.com/quote.html" 
            title="Upload for Price"
            className="w-full h-full border-0 absolute top-0 left-0 right-0 bottom-0"
            allow="fullscreen"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
