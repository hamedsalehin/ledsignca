const fs = require('fs');

const { products } = require('C:/Users/eskan/OneDrive/Desktop/nod js/22jun/nanosigns_latest_backup_v6/lib/products-data.ts');

const newProducts = products.map((p: any) => {
  const isNeon = p.category === 'Neon LED';
  const price = "Request Quote";

  // Build a rich config object based on ProductPageConfig
  const config = {
    title: p.name,
    subtitle: p.description,
    breadcrumb: isNeon ? "Neon Signs" : "LED Display Signs",
    breadcrumbHref: isNeon ? "/neon-signs" : "/led-display-signs",
    promoText: "Free design consultation and quote",
    image: p.image,
    images: p.gallery && p.gallery.length > 0 ? p.gallery : [p.image],
    ratingCount: "0",
    ratingScore: "5.0",
    sizes: p.models && p.models.length > 0 ? p.models.map((m: any) => ({
      label: m.name,
      value: m.name.toLowerCase().replace(/\s+/g, '-'),
      basePrice: p.price || 0,
      description: `Pitch: ${m.pitch} | Brightness: ${m.brightness}`
    })) : [
      {
        label: "Standard",
        value: "standard",
        basePrice: p.price || 0,
        description: "Standard model configuration"
      }
    ],
    description: p.longDescription,
    qtyDiscount: "Bulk discounts available for large orders.",
    keyFeatures: p.features ? p.features.map((f: any) => f.title) : ["High Quality", "Durable", "Vibrant"],
    useCases: p.features ? p.features.map((f: any) => f.description) : [],
    specs: p.specs ? p.specs.map((s: any) => ({ key: s.label, value: s.value })) : [],
    faqs: [],
    reviews: [],
    ctaHeading: "Ready to get started?",
    ctaBody: "Contact us to discuss your project requirements.",
    ctaLabel: "Request Quote"
  };

  return {
    id: p.slug,
    name: p.name,
    description: p.description,
    image: p.image,
    price: price,
    category: p.category, // internal use to split neon vs led-display
    config: config
  };
});

const ledProducts = newProducts.filter((p: any) => p.category !== 'Neon LED');
const neonProducts = newProducts.filter((p: any) => p.category === 'Neon LED');

// Write out to ledProducts.ts
const ledTs = `export const ledProducts = ${JSON.stringify(ledProducts.map((p: any) => {
    const {category, ...rest} = p;
    return rest;
}), null, 2)};\n`;

fs.writeFileSync('C:/Users/eskan/OneDrive/Desktop/nod js/nano-signs/src/lib/ledProducts.ts', ledTs);

// Also generate neonProducts if needed, but for now we just care about ledProducts
