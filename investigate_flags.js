const fs = require('fs');
const content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

// We need to replace the entire feather-flags block up to toggleGroups
// Let's just find the start of feather-flags and the start of toggleGroups
const featherStart = content.indexOf('id: "feather-flags"');
const featherToggle = content.indexOf('toggleGroups:', featherStart);

if (featherStart > -1 && featherToggle > -1) {
    console.log("Feather flags block:");
    console.log(content.substring(featherStart, featherToggle).substring(0, 500));
}

const teardropStart = content.indexOf('id: "teardrop-flags"');
const teardropToggle = content.indexOf('qtyDiscount:', teardropStart);

if (teardropStart > -1 && teardropToggle > -1) {
    console.log("\nTeardrop flags block:");
    console.log(content.substring(teardropStart, teardropToggle).substring(0, 500));
}
