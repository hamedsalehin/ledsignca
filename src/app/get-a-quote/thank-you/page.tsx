import { Metadata } from "next";
import { Suspense } from "react";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Custom Quote Request Received - Nano Signs Toronto",
  description: "Thank you for submitting your custom sign & printing quote request to Nano Signs Toronto. We will email your proof and pricing within 12 hours.",
  alternates: {
    canonical: "https://led-sign.ca/get-a-quote/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center font-bold text-slate-500">Loading...</div>}>
      <ThankYouClient />
    </Suspense>
  );
}
