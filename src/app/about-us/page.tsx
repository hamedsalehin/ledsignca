import { Metadata } from "next";
import { AboutUsClient } from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Nano Signs Toronto | Commercial Signage & Print Shop",
  description:
    "Learn about Nano Signs, Toronto's leading commercial print and sign shop. Local production of LED displays, neon signs, and banners across the GTA.",
  alternates: {
    canonical: "https://led-sign.ca/about-us",
  },
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
