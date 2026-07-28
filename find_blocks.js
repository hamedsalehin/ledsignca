const fs = require('fs');

const lines = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8').split('\n');

function findBlockLines(id) {
    const idLine = lines.findIndex(l => l.includes(`id: "${id}"`));
    if (idLine === -1) return null;
    
    let sizesStart = -1;
    for(let i=idLine; i<idLine+100; i++) {
        if(lines[i].includes('sizes: [')) {
            sizesStart = i;
            break;
        }
    }
    
    // We want to extract exactly from `sizesStart` to the end of `selects`.
    // But since bracket matching is hard, let's just use exact regex on the file text!
}
