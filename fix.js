const fs = require('fs');
let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

content = content.replace(/"personalized-decals":/g, '"custom-decals":');
content = content.replace(/"personalized-signs":/g, '"custom-signs":');

fs.writeFileSync('src/lib/productsRegistry.ts', content, 'utf8');
console.log('Reverted category keys');
