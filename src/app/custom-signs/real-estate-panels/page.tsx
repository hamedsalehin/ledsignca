import { Metadata } from "next";
import { SignProductPage } from "@/components/SignProductPage";
import { PRODUCTS_REGISTRY } from "@/lib/productsRegistry";

export const metadata: Metadata = {
  title: "Real Estate Sign Panels Toronto ON | Nano Signs",
  description: "Design custom real estate panels, riders, and frames online or in person in the Greater Toronto Area. High-durability property signs with fast turnaround.",
  alternates: {
    canonical: "https://led-sign.ca/custom-signs/real-estate-panels",
  },
};

export default function RealEstatePanelsPage() {
  const category = PRODUCTS_REGISTRY["custom-signs"];
  const product = category?.products.find((p: any) => p.id === "real-estate-panels");
  const config = product?.config;

  if (!config) {
    return <div>Product configuration not found. Please check productsRegistry.ts.</div>;
  }

  return <SignProductPage cfg={config} />;
}
