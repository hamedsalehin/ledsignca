const fs = require('fs');
const current = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');
const pristine = fs.readFileSync('pristine.ts', 'utf8');

function getBlock(content, id, nextId) {
    const start = content.indexOf(`id: "${id}"`);
    let end = content.indexOf(`id: "${nextId}"`, start);
    
    // go back to find the closing brace of the previous product
    const endBlock = content.lastIndexOf('      {', end);
    return content.substring(start - 9, endBlock); 
    // -9 is to include `      {\n        id: "${id}"`
}

const cleanFeather = getBlock(pristine, 'feather-flags', 'teardrop-flags');
const cleanTeardrop = getBlock(pristine, 'teardrop-flags', 'straight-flags');

// We need to insert them back into current
// Where did they go? They were between `step-and-repeat-banner` (wait, no. The order of products is important!)
// Let's find `id: "straight-flags"`. They were right before straight-flags.
const straightFlagsStart = current.indexOf('id: "straight-flags"');
const straightFlagsBlockStart = current.lastIndexOf('      {', straightFlagsStart);

const newCurrent = current.substring(0, straightFlagsBlockStart) + 
                   cleanFeather + 
                   cleanTeardrop + 
                   current.substring(straightFlagsBlockStart);

fs.writeFileSync('src/lib/productsRegistry.ts', newCurrent, 'utf8');
console.log("Re-inserted feather-flags and teardrop-flags correctly.");
