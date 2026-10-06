"use client";
import { usePathname } from "next/navigation";

export function CanonicalTag() {
  const pathname = usePathname();
  const rawPath = pathname || "";
  const cleanPath = rawPath === "/" ? "" : rawPath.replace(/\/+$/, "");
  const canonicalUrl = `https://led-sign.ca${cleanPath}`;
  return <link rel="canonical" href={canonicalUrl} />;
}

