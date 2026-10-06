const fs = require('fs');
const lines = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8').split('\n');
let id = '';
for(let i=2050; i>=0; i--) {
  if(lines[i].includes('id: "')) {
    id = lines[i];
    break;
  }
}
console.log(id);
