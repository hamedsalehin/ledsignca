const fs = require('fs');
const lines = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8').split('\n');

const products = [
    'step-and-repeat-banner',
    'step-and-repeat-banners',
    'pop-up-displays',
    'parking-signs',
    'foam-board-signs'
];

for(const p of products) {
    const idLine = lines.findIndex(l => l.includes(`id: "${p}"`));
    let sizesLine = -1;
    let endLine = -1;
    for(let i=idLine; i<idLine+200; i++) {
        if(lines[i].includes('sizes: [')) {
            sizesLine = i;
            break;
        }
    }
    
    for(let i=sizesLine+1; i<sizesLine+300; i++) {
        if(lines[i].startsWith('          toggleGroups:') || 
           lines[i].startsWith('          qtyDiscount:') || 
           lines[i].startsWith('          keyFeatures:')) {
            endLine = i - 1;
            break;
        }
    }
    console.log(`${p}: lines ${sizesLine + 1} to ${endLine + 1}`);
}
