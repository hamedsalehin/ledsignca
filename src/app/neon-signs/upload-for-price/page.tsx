import { Metadata } from "next";
import { UploadForPriceClient } from "./UploadForPriceClient";

export const metadata: Metadata = {
  title: "Upload Design for Custom Neon Sign Quote | Nano Signs Toronto",
  description:
    "Upload your custom logo, text, or sketch to get a fast quote and proof for custom LED neon signs in Toronto and GTA. Fast turnaround & local pickup.",
  alternates: {
    canonical: "https://led-sign.ca/neon-signs/upload-for-price",
  },
};

export default function UploadForPricePage() {
  return <UploadForPriceClient />;
}
