const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('src/lib/ledProducts.ts', 'utf8');
const productsDir = 'public/images/products';
const files = fs.readdirSync(productsDir);

content = content.replace(/"images":\s*\[\s*"([^"]+)"\s*\]/g, (match, firstImage) => {
  const baseNameFull = path.basename(firstImage);
  const nameMatch = baseNameFull.match(/^(.+?)(-\d+)?\.(jpg|png|jpeg|JPG|PNG)$/);
  if (!nameMatch) return match;
  
  const basePrefix = nameMatch[1];
  
  // Find all files starting with basePrefix and ending with image extension
  const matchingFiles = files.filter(f => f.startsWith(basePrefix) && f.match(/\.(jpg|png|jpeg|JPG|PNG)$/));
  
  const mappedImages = matchingFiles.map(f => `"/images/products/${f}"`);
  
  if (mappedImages.length > 0) {
    return `"images": [\n        ${mappedImages.join(',\n        ')}\n      ]`;
  }
  return match;
});

fs.writeFileSync('src/lib/ledProducts.ts', content, 'utf8');
console.log('Updated ledProducts.ts');
