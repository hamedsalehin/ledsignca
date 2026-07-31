import { Metadata } from "next";
import { ContactUsClient } from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact Nano Signs Toronto | Call +1 416-838-8994 | Warden Ave Hub",
  description:
    "Contact Nano Signs in Toronto for custom LED signs, neon displays, banners, and printing quotes. Visit our showroom at 2190 Warden Ave or call +1 416-838-8994.",
  alternates: {
    canonical: "https://led-sign.ca/contact-us",
  },
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
