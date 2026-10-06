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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289569687!2d-79.5181427!3d43.7181557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1710000000000!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nano Signs Toronto Service Area"
        />
      ) : (
        <div className="text-xs text-slate-500 font-medium">
          Loading Toronto Shop Location Map...
        </div>
      )}
    </div>
  );
}
