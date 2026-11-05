import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Custom Sign & Print Design Tool | Nano Signs Toronto",
  description:
    "Design and customize your banners, yard signs, vehicle decals, canvas prints, and custom signs online with live instant preview at Nano Signs.",
  alternates: {
    canonical: "https://led-sign.ca/design",
  },
};

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
