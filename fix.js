const fs = require('fs');
let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('heroImage: "/images/products/main-page/')) {
    // check if next two lines don't already have tabletHeroImage and mobileHeroImage
    if (i + 1 < lines.length && !lines[i+1].includes('tabletHeroImage')) {
      const tabletLine = lines[i].replace('heroImage', 'tabletHeroImage');
      const mobileLine = lines[i].replace('heroImage', 'mobileHeroImage');
      lines.splice(i + 1, 0, tabletLine, mobileLine);
      i += 2;
    }
  }
}

fs.writeFileSync('src/lib/productsRegistry.ts', lines.join('\n'));
console.log('Fixed registry');
