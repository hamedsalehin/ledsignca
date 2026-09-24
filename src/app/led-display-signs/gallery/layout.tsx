import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LED Display Signs Installation Gallery | Nano Signs Toronto",
  description:
    "Explore our portfolio of completed indoor, outdoor, rental, and curved LED video wall installations across Toronto and Ontario.",
  alternates: {
    canonical: "https://led-sign.ca/led-display-signs/gallery",
  },
};

export default function LedGalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
