import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Neon Sign Creator | Design LED Neon Online | Nano Signs",
  description:
    "Design your custom LED neon sign online with custom text, fonts, colors, and sizes. Instant price quote and fast delivery in Toronto & GTA.",
  alternates: {
    canonical: "https://led-sign.ca/neon-signs/neon-creator",
  },
};

export default function NeonCreatorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col">
        {/* Breadcrumb / Title */}
        <div className="bg-white border-b py-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center gap-2 text-sm text-gray-500 font-sans">
            <Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/neon-signs" className="hover:text-yellow-600 transition-colors">Neon Signs</Link>
            <span>/</span>
            <span className="font-semibold text-gray-900">Neon Creator</span>
          </div>
        </div>
        
        {/* Iframe to original customizer */}
        <div className="w-full flex-grow relative" style={{ minHeight: "800px" }}>
          <iframe 
            src="https://neonfl.com/customizer.html" 
            title="Neon Creator"
            className="w-full h-full border-0 absolute top-0 left-0 right-0 bottom-0"
            allow="fullscreen"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
