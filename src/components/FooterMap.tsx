"use client";

import { useEffect, useRef, useState } from "react";

export function FooterMap({ light = false }: { light?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`mt-12 rounded-2xl overflow-hidden shadow-lg h-[250px] w-full border relative bg-slate-900 flex items-center justify-center ${
        light ? "border-slate-200 bg-slate-100" : "border-gray-800"
      }`}
    >
      {isVisible ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4!2d-79.2765!3d43.7830!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d05d5e3a4b4b%3A0x1a2b3c4d5e6f7a8b!2s2190%20Warden%20Ave%2C%20Scarborough%2C%20ON%20M1T%201V6!5e0!3m2!1sen!2sca!4v1781380571760!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nano Signs Toronto Location"
        />
      ) : (
        <div className="text-xs text-slate-500 font-medium">
          Loading Toronto Shop Location Map...
        </div>
      )}
    </div>
  );
}
