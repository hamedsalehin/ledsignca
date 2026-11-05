const fs = require('fs');
const lines = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8').split('\n');
lines.forEach((l, i) => {
    if(l.includes('id: "foam') || l.includes('id: "parking') || l.includes('id: "pop-up')) {
        console.log(i+1, l.trim());
    }
});
