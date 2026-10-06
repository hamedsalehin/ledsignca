const fs = require('fs');
const file = 'C:/Users/eskan/OneDrive/Desktop/nod js/nano-signs/src/lib/productsRegistry.ts';
let txt = fs.readFileSync(file, 'utf8');

txt = txt.replace(/config:\s*\{\s*ctaLabel:\s*".*?"\s*\}/g, '');

fs.writeFileSync(file, txt);
