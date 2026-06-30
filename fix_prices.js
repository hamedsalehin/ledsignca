const fs = require('fs');

// 1. Fix pricing.json
const pricing = require('./src/lib/pricing.json');
if (pricing['yard-signs']) {
  pricing['coroplast-signs'] = JSON.parse(JSON.stringify(pricing['yard-signs']));
}
fs.writeFileSync('./src/lib/pricing.json', JSON.stringify(pricing, null, 2));

// 2. Safely fix productsRegistry.ts
let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');
const lines = content.split('\n');

const replacements = {
  "yard-signs": "$45.00",
  "aluminum-signs": "$19.84",
  "magnetic-signs": "$18.99",
  "a-frame-signs": "$105.00",
  "coroplast-signs": "$45.00",
  "foam-board-signs": "$20.00",
  "parking-signs": "$105.00",
  "acrylic-signs": "$45.00",
};

let currentId = null;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Detect if we entered a product definition
  const idMatch = line.match(/id:\s*"([^"]+)"/);
  if (idMatch) {
    currentId = idMatch[1];
  }
  
  // If we find a price and we know which product we are in, replace it
  if (currentId && replacements[currentId] && line.includes('price: "Starting at')) {
    lines[i] = line.replace(/price:\s*"Starting at [^"]+"/, `price: "Starting at ${replacements[currentId]}"`);
    currentId = null; // reset to avoid replacing deeper prices if any
  }
}

fs.writeFileSync('src/lib/productsRegistry.ts', lines.join('\n'));
console.log('Fixed prices successfully!');
