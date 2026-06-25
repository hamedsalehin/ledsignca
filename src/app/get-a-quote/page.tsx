import { Metadata } from "next";
import QuotePageClient from "./QuotePageClient";

export const metadata: Metadata = {
  title: "Get a Custom Printing & Signage Quote Toronto ON | Nano Signs",
  description: "Request a custom printing quote for signs, LED signs, banners, business cards, & marketing materials in Toronto. Fast 12-hour response turnaround.",

  alternates: {
    canonical: "https://led-sign.ca/get-a-quote",
  },
};

export default function GetQuotePage() {
  return <QuotePageClient />;
}
