"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export function UploadForPriceClient() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("neonfl.com")) return;

      const data = event.data;

      const isSuccess =
        data === "quote_success" ||
        data?.type === "quote_success" ||
        data?.event === "quote_success" ||
        data?.status === "success" ||
        (typeof data === "string" &&
          (data.includes("quote_success") ||
            data.includes("success") ||
            data.startsWith("Q-")));

      if (isSuccess) {
        console.log("Quote submission success event detected from iframe. Tracking conversion...");
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", {
            send_to: "G-C0T0585G3W",
            value: 1.0,
            currency: "USD",
          });

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
    <div className="w-full flex-grow flex flex-col font-sans">
      {/* Load Google Tag Manager / Global Site Tag for G-C0T0585G3W with lazyOnload */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-C0T0585G3W"
      />
      <Script
        id="gtag-init-upload"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C0T0585G3W');
          `,
        }}
      />

      {/* Iframe Container */}
      <div className="w-full flex-grow relative bg-slate-50 min-h-[3200px] md:min-h-[2200px]">
        <iframe
          src="https://neonfl.com/quote.html"
          title="Upload for Price Custom Neon Signs"
          className="w-full h-full border-0 absolute top-0 left-0 right-0 bottom-0 z-10"
          allow="fullscreen"
        />
      </div>
    </div>
  );
}
