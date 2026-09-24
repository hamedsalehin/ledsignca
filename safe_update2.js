const fs = require('fs');
let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

const idx = content.indexOf(`id: "business-cards"`);
const nextIdx = content.indexOf(`id: "`, idx + 10);
const blockEnd = nextIdx === -1 ? content.length : nextIdx;
let block = content.substring(idx, blockEnd);

block = block.replace(/sizes:\s*\[[\s\S]*?\]/, `sizes: [
        { label: "Standard Business Card", value: "standard", basePrice: 55 }
      ]`);

content = content.substring(0, idx) + block + content.substring(blockEnd);
fs.writeFileSync('src/lib/productsRegistry.ts', content, 'utf8');
console.log("Updated business-cards");
