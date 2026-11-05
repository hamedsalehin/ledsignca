import { Metadata } from "next";
import { ContactUsClient } from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact Nano Signs Toronto | Call +1 416-838-8994 | Custom Signs & Print",
  description:
    "Contact Nano Signs in Toronto for custom LED signs, neon displays, banners, and printing quotes. Call +1 416-838-8994 or get in touch online.",
  alternates: {
    canonical: "https://led-sign.ca/contact-us",
  },
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
