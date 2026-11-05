"use client";

import dynamic from "next/dynamic";
import { AuthProvider } from "@/components/AuthContext";
import { CartProvider } from "@/components/CartContext";

const AuthModal = dynamic(
  () => import("@/components/AuthModal").then((mod) => mod.AuthModal),
  { ssr: false }
);
const CartSidebar = dynamic(
  () => import("@/components/CartSidebar").then((mod) => mod.CartSidebar),
  { ssr: false }
);
const PromotionalModal = dynamic(
  () => import("@/components/PromotionalModal").then((mod) => mod.PromotionalModal),
  { ssr: false }
);
const ChatWidget = dynamic(
  () => import("@/components/ChatWidget").then((mod) => mod.ChatWidget),
  { ssr: false }
);
const Chatbot = dynamic(
  () => import("@/components/Chatbot").then((mod) => mod.Chatbot),
  { ssr: false }
);

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body className="antialiased" suppressHydrationWarning>
      <AuthProvider>
        <CartProvider>
          {children}
          <AuthModal />
          <CartSidebar />
          <PromotionalModal />
          <ChatWidget />
          <Chatbot />
        </CartProvider>
      </AuthProvider>
    </body>
  );
}

