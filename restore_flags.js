const fs = require('fs');

const current = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');
const pristine = fs.readFileSync('pristine_registry.ts', 'utf8');

function getBlock(content, id, nextId) {
    const start = content.indexOf(`id: "${id}"`);
    let end = content.indexOf(`id: "${nextId}"`, start);
    
    // go back to find the closing brace of the previous product
    // The previous product ends with `\n      },\n      {\n        id: "nextId"`
    const endBlock = content.lastIndexOf('      {', end);
    return content.substring(start - 9, endBlock); 
    // -9 is to include `      {\n        id: "${id}"`
}

const cleanFeather = getBlock(pristine, 'feather-flags', 'teardrop-flags');
const cleanTeardrop = getBlock(pristine, 'teardrop-flags', 'straight-flags');

const currentFeatherStart = current.indexOf('id: "feather-flags"') - 9;
const currentFeatherEnd = current.lastIndexOf('      {', current.indexOf('id: "teardrop-flags"', currentFeatherStart));
let newCurrent = current.substring(0, currentFeatherStart) + cleanFeather + current.substring(currentFeatherEnd);

const currentTeardropStart = newCurrent.indexOf('id: "teardrop-flags"') - 9;
const currentTeardropEnd = newCurrent.lastIndexOf('      {', newCurrent.indexOf('id: "straight-flags"', currentTeardropStart));
newCurrent = newCurrent.substring(0, currentTeardropStart) + cleanTeardrop + newCurrent.substring(currentTeardropEnd);

fs.writeFileSync('src/lib/productsRegistry.ts', newCurrent, 'utf8');
console.log("Restored feather-flags and teardrop-flags perfectly");
