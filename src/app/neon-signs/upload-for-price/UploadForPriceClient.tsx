"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

export function UploadForPriceClient() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);

  useEffect(() => {
    // Mount iframe right after critical render so FCP and LCP complete first
    const timer = setTimeout(() => {
      setShouldLoadIframe(true);
    }, 100);

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
        (typeof data === "string" &&
          (data.includes("quote_success") ||
            data.includes("success") ||
            data.startsWith("Q-"))); // Quote reference number format e.g., Q-508221

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
      clearTimeout(timer);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="w-full flex-grow relative" style={{ minHeight: "800px" }}>
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

      {/* Lightweight skeleton shimmer while iframe initializes */}
      {!isIframeLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-8 z-0">
          <div className="w-10 h-10 border-3 border-yellow-500 border-t-transparent rounded-full animate-spin mb-3" />
          <p className="text-sm font-medium text-slate-600">Loading Quote Request Tool...</p>
        </div>
      )}

      {/* Iframe to quote request tool */}
      {shouldLoadIframe && (
        <iframe
          src="https://neonfl.com/quote.html"
          title="Upload for Price Custom Neon Signs"
          className="w-full h-full border-0 absolute top-0 left-0 right-0 bottom-0 z-10 transition-opacity duration-300"
          allow="fullscreen"
          loading="lazy"
          onLoad={() => setIsIframeLoaded(true)}
        />
      )}
    </div>
  );
}
