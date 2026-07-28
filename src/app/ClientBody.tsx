"use client";

import { AuthProvider } from "@/components/AuthContext";
import { CartProvider } from "@/components/CartContext";
import { AuthModal } from "@/components/AuthModal";
import { CartSidebar } from "@/components/CartSidebar";
import { PromotionalModal } from "@/components/PromotionalModal";
import { ChatWidget } from "@/components/ChatWidget";
import dynamic from 'next/dynamic';
const Chatbot = dynamic(() => import('@/components/Chatbot').then(mod => mod.Chatbot), { ssr: false });

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

