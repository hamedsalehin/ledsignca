const fs = require('fs');

const text = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

function extractBlock(id) {
    const regex = new RegExp(`id: "${id}"[\\s\\S]*?(sizes: \\[[\\s\\S]*?selects: \\[[\\s\\S]*?\\n\\s*\\]\\n\\s*\\])`);
    const match = regex.exec(text);
    if(match) {
        return match[1];
    }
    // try without selects
    const regexSizesOnly = new RegExp(`id: "${id}"[\\s\\S]*?(sizes: \\[[\\s\\S]*?\\n\\s*\\])`);
    const matchSizes = regexSizesOnly.exec(text);
    if(matchSizes) {
        return matchSizes[1];
    }
    return null;
}

const products = [
    'tablecloths',
    'stretch-tablecloths',
    'fitted-tablecloths',
    'table-runners',
    'step-and-repeat-banner',
    'step-and-repeat-banners'
];

const extracts = {};
for(const p of products) {
    extracts[p] = extractBlock(p);
}

fs.writeFileSync('extracted_blocks.json', JSON.stringify(extracts, null, 2));
console.log("Extracted!");
