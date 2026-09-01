import type { Metadata, Viewport } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import Script from "next/script";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f7f82d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://led-sign.ca"),
  title: "Custom Signs, LED Signs & Banners Toronto | Neon LED Sign",
  description:
    "Design and order custom signs, Neon LED signs, retractable banners, business cards, and marketing materials online. Fast turnaround in the Toronto Area.",
  keywords: [
    "led signs toronto",
    "custom signs toronto",
    "business signs toronto",
    "neon signs toronto",
    "channel letters toronto",
    "pylon signs toronto",
    "banners toronto",
    "print shop toronto"
  ],
  icons: {
    icon: "/images/nano logo O-toronto-printing-ca.png",
    apple: "/images/nano logo O-toronto-printing-ca.png",
  },
  openGraph: {
    title: "Nano Signs Toronto | Custom Signs, LED Signs & Banners",
    description: "Premium custom signage, Neon LED signs, retractable banners, and commercial print in the Greater Toronto Area.",
    siteName: "Nano Signs",
    url: "https://led-sign.ca",
    images: [
      {
        url: "/images/nano logo O-toronto-printing-ca.png",
        width: 1200,
        height: 630,
        alt: "Nano Signs Logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nano Signs Toronto | Custom Signs, LED Signs & Banners",
    description: "Premium custom signage, Neon LED signs, retractable banners, and commercial print in the Greater Toronto Area.",
    images: ["/images/nano logo O-toronto-printing-ca.png"],
  },
};

import { CanonicalTag } from "@/components/CanonicalTag";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${openSans.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://neonfl.com" />
        {/* Google tag (gtag.js) */}
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-YESMFLCB2D" />
        <Script id="google-analytics" strategy="lazyOnload" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YESMFLCB2D');
          `
        }} />
        {/* Local Business Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Nano Signs",
              "image": "https://led-sign.ca/images/nano%20logo%20complete-toronto-printing-ca.png",
              "@id": "https://led-sign.ca/#localbusiness",
              "url": "https://led-sign.ca",
              "telephone": "+1 416-838-8994",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "areaServed": [
                "Toronto",
                "Scarborough",
                "North York",
                "Etobicoke",
                "Mississauga",
                "Markham",
                "Vaughan",
                "Richmond Hill"
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.6532,
                "longitude": -79.3832
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
