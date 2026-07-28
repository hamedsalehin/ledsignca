"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function UploadForPriceClient() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Validate that the message is coming from neonfl.com
      if (!event.origin.includes("neonfl.com")) return;

      const data = event.data;
      
      // Check for common success message indicators from the iframe
      const isSuccess = 
        data === "quote_success" ||
        data?.type === "quote_success" ||
        data?.event === "quote_success" ||
        data?.status === "success" ||
        (typeof data === "string" && (
          data.includes("quote_success") || 
          data.includes("success") || 
          data.startsWith("Q-") // Quote reference number format e.g., Q-508221
        ));

      if (isSuccess) {
        console.log("Quote submission success event detected from iframe. Tracking conversion...");
        if (typeof window !== "undefined" && (window as any).gtag) {
          // Track conversion event for G-C0T0585G3W
          (window as any).gtag("event", "conversion", {
            send_to: "G-C0T0585G3W",
            value: 1.0,
            currency: "USD",
          });
          
          // Track general lead event
          (window as any).gtag("event", "generate_lead", {
            event_category: "Quote",
            event_label: "Upload for Price",
          });
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Load Google Tag Manager / Global Site Tag for G-C0T0585G3W */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-C0T0585G3W"
      />
      <Script
        id="gtag-init-upload"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C0T0585G3W');
          `,
        }}
      />

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
          <h1 className="text-2xl font-bold font-poppins text-gray-900">Upload Design for Custom Neon Sign Quote</h1>
          <p className="text-gray-600 text-sm mt-1">Upload your logo, artwork, or sketch below to receive an instant price quote and 3D preview.</p>
        </div>

        {/* Iframe to original quote request tool */}
        <div className="w-full flex-grow relative" style={{ minHeight: "800px" }}>
          <iframe
            src="https://neonfl.com/quote.html"
            title="Upload for Price Custom Neon Signs"
            className="w-full h-full border-0 absolute top-0 left-0 right-0 bottom-0"
            allow="fullscreen"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
