const fs = require('fs');
const text = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');
const lines = text.split('\n');
for(let i=0; i<lines.length; i++) {
  if (lines[i].toLowerCase().includes('foam')) {
    console.log(i + ': ' + lines[i].trim());
  }
}

