const fs = require('fs');

// 1. Update pricing.json
const pricing = require('./src/lib/pricing.json');

pricing['coroplast-signs'] = {
  sizes: {
    "12x18": {
      basePrice: 12,
      quantityPrices: { "1": 12, "10": 55, "20": 98, "50": 180, "100": 350 }
    },
    "18x24": {
      basePrice: 20,
      quantityPrices: { "1": 20, "10": 75, "20": 120, "50": 250, "100": 430 }
    },
    "24x24": {
      basePrice: 30,
      quantityPrices: { "1": 30, "10": 95, "20": 160, "50": 320, "100": 470 }
    },
    "24x36": {
      basePrice: 40,
      quantityPrices: { "1": 40, "10": 140, "20": 220, "50": 410, "100": 680 }
    },
    "36x48": {
      basePrice: 60,
      quantityPrices: { "1": 60, "10": 210, "20": 380, "50": 680, "100": 1350 }
    }
  },
  options: {
    "single": { priceAdder: 0 },
    "double": { priceAdder: 0 } // NO DOUBLE SIDED OPTION as per doc, so it's 0 or we don't add it.
  }
};

fs.writeFileSync('./src/lib/pricing.json', JSON.stringify(pricing, null, 2));

// 2. Update productsRegistry.ts display price
let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

const idMatch = 'id: "coroplast-signs"';
const startIndex = content.indexOf(idMatch);
if (startIndex !== -1) {
  const priceIndex = content.indexOf('price: "Starting at', startIndex);
  if (priceIndex !== -1 && priceIndex < startIndex + 500) {
    const endPriceIndex = content.indexOf('"', priceIndex + 20);
    const before = content.substring(0, priceIndex);
    const after = content.substring(endPriceIndex + 1);
    content = before + 'price: "Starting at $12.00"' + after;
  }
}

fs.writeFileSync('src/lib/productsRegistry.ts', content);
console.log('Fixed Coroplast signs!');
