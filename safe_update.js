const fs = require('fs');

let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

function updateProduct(id, updater) {
    const idx = content.indexOf(`id: "${id}"`);
    if (idx === -1) {
        console.error(`Product ${id} not found.`);
        return;
    }
    const nextIdx = content.indexOf(`id: "`, idx + 10);
    const blockEnd = nextIdx === -1 ? content.length : nextIdx;
    
    let block = content.substring(idx, blockEnd);
    const newBlock = updater(block);
    if (newBlock) {
        content = content.substring(0, idx) + newBlock + content.substring(blockEnd);
        console.log(`Updated ${id}`);
    }
}

function replaceSection(block, regexStr, replacement) {
    const regex = new RegExp(regexStr);
    if (regex.test(block)) {
        return block.replace(regex, replacement);
    }
    console.error("Regex not found:", regexStr);
    return block;
}

// 11. Flags
updateProduct('feather-flags', block => {
    let b = replaceSection(block, /sizes:\s*\[[\s\S]*?\]/, `sizes: [
            { label: "Small (9ft Long)", value: "small", basePrice: 175 },
            { label: "Medium (12ft Long)", value: "medium", basePrice: 215 },
            { label: "Large (15ft Long)", value: "large", basePrice: 260 }
          ]`);
    return b;
});

updateProduct('teardrop-flags', block => {
    let b = replaceSection(block, /sizes:\s*\[[\s\S]*?\]/, `sizes: [
            { label: "Small (9ft Long)", value: "small", basePrice: 180 },
            { label: "Medium (12ft Long)", value: "medium", basePrice: 220 },
            { label: "Large (15ft Long)", value: "large", basePrice: 260 }
          ]`);
    return b;
});

// 12. Postcards
updateProduct('postcards', block => {
    return replaceSection(block, /sizes:\s*\[[\s\S]*?\]/, `sizes: [
            { label: "4 x 6", value: "4x6", basePrice: 65 },
            { label: "5 x 7", value: "5x7", basePrice: 75 },
            { label: "6 x 9", value: "6x9", basePrice: 85 },
            { label: "6 x 11", value: "6x11", basePrice: 95 }
          ]`);
});

fs.writeFileSync('src/lib/productsRegistry.ts', content, 'utf8');
