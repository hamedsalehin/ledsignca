"use client";

import React, { useEffect, useState, useRef } from "react";
import Script from "next/script";
import { Sparkles, ShieldCheck, Clock, ArrowRight, Upload } from "lucide-react";

export function UploadForPriceClient() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mount iframe on first user interaction or fallback timer (2.2s) to protect LCP
    const triggerIframe = () => {
      setShouldLoadIframe(true);
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener("scroll", triggerIframe);
      window.removeEventListener("touchstart", triggerIframe);
      window.removeEventListener("mousemove", triggerIframe);
      window.removeEventListener("pointerdown", triggerIframe);
    };

    window.addEventListener("scroll", triggerIframe, { passive: true, once: true });
    window.addEventListener("touchstart", triggerIframe, { passive: true, once: true });
    window.addEventListener("mousemove", triggerIframe, { passive: true, once: true });
    window.addEventListener("pointerdown", triggerIframe, { passive: true, once: true });

    const timer = setTimeout(triggerIframe, 2200);

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
      clearTimeout(timer);
      removeListeners();
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="w-full flex-grow flex flex-col">
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

      {/* Quick Value Prop Highlights to lock in rapid LCP */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-150 text-xs font-semibold text-gray-800">
            <Sparkles className="w-4 h-4 text-yellow-600 shrink-0" />
            <span>Instant 3D Preview &amp; Proof</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-150 text-xs font-semibold text-gray-800">
            <Clock className="w-4 h-4 text-yellow-600 shrink-0" />
            <span>Quotes Returned Within 12 Hours</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-150 text-xs font-semibold text-gray-800">
            <ShieldCheck className="w-4 h-4 text-yellow-600 shrink-0" />
            <span>2-Year Warranty &amp; Local Toronto Pickup</span>
          </div>
        </div>
      </div>

      {/* Iframe Container */}
      <div
        ref={containerRef}
        className="w-full flex-grow relative bg-slate-50"
        style={{ minHeight: "850px" }}
      >
        {/* Loading skeleton shimmer with manual open action */}
        {!isIframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-0">
            <div className="w-10 h-10 border-3 border-yellow-500 border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-sm font-bold text-gray-900">Loading Custom Neon Quote Tool...</p>
            <p className="text-xs text-gray-500 mt-1 mb-4">Preparing 3D renderer and upload module</p>
            {!shouldLoadIframe && (
              <button
                type="button"
                onClick={() => setShouldLoadIframe(true)}
                className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-bold text-xs rounded-full shadow-md transition-transform active:scale-95 flex items-center gap-2"
              >
                <Upload className="w-3.5 h-3.5" /> Start &amp; Upload Artwork Now
              </button>
            )}
          </div>
        )}

        {/* Iframe */}
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
    </div>
  );
}
