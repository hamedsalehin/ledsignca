const fs = require('fs');
let lines = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8').split('\n');

const products = [
  'tablecloths',
  'stretch-tablecloths',
  'fitted-tablecloths',
  'table-runners',
  'step-and-repeat-banner',
  'step-and-repeat-banners'
];

for (const id of products) {
  const idLine = lines.findIndex(l => l.includes(`id: "${id}"`));
  if (idLine === -1) continue;
  
  let endOfSelects = lines.findIndex((l, i) => i > idLine && l.includes('qtyDiscount:'));
  if (endOfSelects === -1) {
    console.log(`--- ${id} MISSING qtyDiscount`);
    continue;
  }
  
  console.log(`\n--- ${id}`);
  console.log(lines.slice(endOfSelects - 5, endOfSelects + 1).join('\n'));
}
