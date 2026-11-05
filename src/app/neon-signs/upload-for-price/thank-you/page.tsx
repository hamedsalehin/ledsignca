import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NeonThankYouClient } from "./NeonThankYouClient";

export const metadata: Metadata = {
  title: "Quote Request Received | Nano Signs Custom Neon",
  description:
    "Thank you for submitting your custom LED neon sign request. We are reviewing your design and will get back to you with a proof and quote shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <NeonThankYouClient />
      </main>
      <Footer />
    </div>
  );
}
