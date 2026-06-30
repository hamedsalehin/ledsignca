const fs = require('fs');
let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

const replacements = [
  // Yard Signs base prices are already correct (45, 65, 70, 80).
  // Aluminum Signs base prices are already correct.
  // Car Magnets base prices are already correct.
  // A-Frame Signs base prices are already correct.
  // Foam Board base prices are already correct.
  // Parking Signs base prices are already correct.

  // Real Estate Panels: Since I updated pricing.json to handle bulk tiers, 
  // I need to REMOVE the quantityPrices from the productsRegistry IF they exist, or wait... 
  // actually earlier I already deleted quantityPrices from productsRegistry for real-estate-panels.
  // I should add them back in productsRegistry so it displays correctly, OR pricing.json overrides it!
  // Wait, pricing.json bulk tiers DO override productsRegistry because of mergePricing.ts! So that's handled.

  // The main thing left for productsRegistry.ts is the `price` display string 
  // (e.g. `price: "Starting at CAD 18.19"`) 
  // and ensuring `quantityPrices` is correct if they don't use pricing.json for that specific tier.

  // Let's replace the display strings in productsRegistry.ts to match the new starting prices.
  {
    regex: /id:\s*"real-estate-panels"[\s\S]*?price:\s*"[^"]*"/,
    replaceFn: (match) => match.replace(/price:\s*"[^"]*"/, `price: "Starting at $330.00"`)
  },
  {
    regex: /id:\s*"tablecloths"[\s\S]*?price:\s*"[^"]*"/,
    replaceFn: (match) => match.replace(/price:\s*"[^"]*"/, `price: "Starting at $200.00"`)
  },
  {
    regex: /id:\s*"flags"[\s\S]*?price:\s*"[^"]*"/,
    replaceFn: (match) => match.replace(/price:\s*"[^"]*"/, `price: "Starting at $175.00"`)
  },
  {
    regex: /id:\s*"vinyl-banners"[\s\S]*?price:\s*"[^"]*"/,
    replaceFn: (match) => match.replace(/price:\s*"[^"]*"/, `price: "Starting at $45.00"`)
  },
  {
    regex: /id:\s*"custom-postcards"[\s\S]*?price:\s*"[^"]*"/,
    replaceFn: (match) => match.replace(/price:\s*"[^"]*"/, `price: "Starting at $65.00"`)
  },
  {
    regex: /id:\s*"business-cards"[\s\S]*?price:\s*"[^"]*"/g,
    replaceFn: (match) => match.replace(/price:\s*"[^"]*"/, `price: "Starting at $55.00"`)
  },
  {
    regex: /id:\s*"pop-up-displays"[\s\S]*?price:\s*"[^"]*"/,
    replaceFn: (match) => match.replace(/price:\s*"[^"]*"/, `price: "Starting at $780.00"`)
  },
  {
    regex: /id:\s*"step-and-repeat-banner"[\s\S]*?price:\s*"[^"]*"/g,
    replaceFn: (match) => match.replace(/price:\s*"[^"]*"/, `price: "Starting at $330.00"`)
  }
];

let updatedContent = content;
for (const rep of replacements) {
  updatedContent = updatedContent.replace(rep.regex, rep.replaceFn);
}

fs.writeFileSync('src/lib/productsRegistry.ts', updatedContent);
console.log('productsRegistry.ts display prices updated!');
