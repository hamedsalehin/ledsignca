"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

export function UploadForPriceClient() {
  const router = useRouter();

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
        console.log("Quote submission success event detected from iframe. Tracking conversion...", data);
        const quoteId = typeof data === "string" && data.startsWith("Q-") ? data : undefined;

        if (typeof window !== "undefined" && (window as any).gtag) {
          // 1. Send to led-sign.ca Analytics (G-YESMFLCB2D)
          (window as any).gtag("event", "generate_lead", {
            send_to: "G-YESMFLCB2D",
            event_category: "Quote Request",
            event_label: "Upload For Price",
            source_site: "led-sign.ca",
            quote_id: quoteId,
            value: 1.0,
            currency: "CAD",
          });

          (window as any).gtag("event", "conversion", {
            send_to: "G-YESMFLCB2D",
            source_site: "led-sign.ca",
            value: 1.0,
            currency: "CAD",
          });

          // 2. Send to neonfl.com Analytics (G-C0T0585G3W) so neonfl keeps tracking as well
          (window as any).gtag("event", "generate_lead", {
            send_to: "G-C0T0585G3W",
            event_category: "Quote Request",
            event_label: "Upload For Price",
            source_site: "neonfl.com",
            quote_id: quoteId,
            value: 1.0,
            currency: "USD",
          });

          (window as any).gtag("event", "conversion", {
            send_to: "G-C0T0585G3W",
            source_site: "neonfl.com",
            value: 1.0,
            currency: "USD",
          });
        }

        // Seamlessly redirect to the dedicated Thank You page
        const targetUrl = quoteId
          ? `/neon-signs/upload-for-price/thank-you?ref=${encodeURIComponent(quoteId)}`
          : "/neon-signs/upload-for-price/thank-you";
        router.push(targetUrl);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="w-full flex-grow flex flex-col font-sans">
      {/* Load Google Tag Manager / Global Site Tag for G-YESMFLCB2D */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-YESMFLCB2D"
      />
      <Script
        id="gtag-init-upload"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YESMFLCB2D');
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
