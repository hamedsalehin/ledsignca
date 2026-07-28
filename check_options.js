const fs = require('fs');
const content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

const products = [
  'tablecloths',
  'stretch-tablecloths',
  'fitted-tablecloths',
  'table-runners',
  'pop-up-displays',
  'step-and-repeat-banner'
];

products.forEach(id => {
  const start = content.indexOf(`id: "${id}"`);
  if (start > -1) {
    const end = content.indexOf('id: "', start + 10);
    console.log(`\n\n--- ${id} ---`);
    console.log(content.slice(start, end === -1 ? start + 1000 : end).substring(0, 500));
  } else {
    console.log(`\n\n--- ${id} not found ---`);
  }
});
