const fs = require('fs');
const content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

// I will parse the TypeScript object by matching 'id:' and extracting blocks up to the next 'id:'
const productBlocks = content.split('id: "').slice(1);

let output = '';

for (const block of productBlocks) {
    const id = block.split('"')[0];
    
    // Extract sizes
    let sizesMatch = block.match(/sizes:\s*\[([\s\S]*?)\]/);
    // Extract selects
    let selectsMatch = block.match(/selects:\s*\[([\s\S]*?)\]\s*(?:,|qtyDiscount|keyFeatures|toggleGroups)/);
    // Extract toggleGroups
    let toggleMatch = block.match(/toggleGroups:\s*\[([\s\S]*?)\]\s*(?:,|qtyDiscount|keyFeatures|selects)/);
    
    output += `\n\n====================\nID: ${id}\n====================\n`;
    
    if (sizesMatch) output += `\nSIZES:\n${sizesMatch[1].trim()}\n`;
    if (selectsMatch) output += `\nSELECTS:\n${selectsMatch[1].trim()}\n`;
    if (toggleMatch) output += `\nTOGGLE GROUPS:\n${toggleMatch[1].trim()}\n`;
}

fs.writeFileSync('C:\\Users\\eskan\\.gemini\\antigravity-ide\\brain\\b9455b30-cff8-4372-bf6c-d25cdfb2f221\\current_options.md', output, 'utf8');
console.log("Dumped options to artifact");
