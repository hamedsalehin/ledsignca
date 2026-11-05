import { Metadata } from "next";
import { ReturnPolicyClient } from "./ReturnPolicyClient";

export const metadata: Metadata = {
  title: "Return Policy & Guarantee | Nano Signs Toronto",
  description:
    "Review Nano Signs terms, return policies, order cancellations, quality guarantee, and shipping conditions for custom signs and commercial printing in Toronto.",
  alternates: {
    canonical: "https://led-sign.ca/return-policy",
  },
};

export default function ReturnPolicyPage() {
  return <ReturnPolicyClient />;
}
