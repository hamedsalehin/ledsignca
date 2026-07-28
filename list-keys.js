const fs = require('fs');
const content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');
const matches = [...content.matchAll(/^  "?([a-zA-Z0-9-]+)"?:\s*\{/gm)];
console.log(matches.map(m => m[1]));
