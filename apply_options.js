const fs = require('fs');

const content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');
let lines = content.split(/\r?\n/);

function replaceBlock(id, newBlockLines) {
  const idLine = lines.findIndex(l => l.includes(`id: "${id}"`));
  if (idLine === -1) return;
  
  let sizesLineStart = -1;
  for (let i = idLine; i < idLine + 100; i++) {
    if (lines[i].includes('sizes: [')) {
      sizesLineStart = i;
      break;
    }
  }
  
  let selectsLineStart = -1;
  let selectsLineEnd = -1;
  let bracketCount = 0;
  let inSelects = false;
  
  for (let i = sizesLineStart; i < sizesLineStart + 200; i++) {
    if (!inSelects && lines[i].includes('selects: [')) {
      selectsLineStart = i;
      inSelects = true;
    }
    if (inSelects) {
      bracketCount += (lines[i].match(/\[/g) || []).length;
      bracketCount -= (lines[i].match(/\]/g) || []).length;
      if (bracketCount === 0) {
        selectsLineEnd = i;
        break;
      }
    }
  }
  
  if (sizesLineStart > -1 && selectsLineEnd > -1) {
    const deleteCount = selectsLineEnd - sizesLineStart + 1;
    lines.splice(sizesLineStart, deleteCount, ...newBlockLines);
    console.log(`Updated ${id}`);
  } else if (sizesLineStart > -1) {
      // If there are no selects, just find the end of sizes
      let endOfSizes = sizesLineStart;
      let bc = 0;
      for (let i = sizesLineStart; i < sizesLineStart + 50; i++) {
          bc += (lines[i].match(/\[/g) || []).length;
          bc -= (lines[i].match(/\]/g) || []).length;
          if (bc === 0) {
              endOfSizes = i;
              break;
          }
      }
      lines.splice(sizesLineStart, endOfSizes - sizesLineStart + 1, ...newBlockLines);
      console.log(`Updated ${id} (sizes only)`);
  }
}

// Tablecloths
replaceBlock('tablecloths', [
'          sizes: [',
'            { label: "6 feet", value: "6ft", basePrice: 200 },',
'            { label: "8 feet", value: "8ft", basePrice: 225 }',
'          ],',
'          selects: [',
'            {',
'              label: "Options",',
'              options: [',
'                { label: "3 sided", value: "3sided", priceAdder: 0 },',
'                { label: "4 sided", value: "4sided", sizePriceAdders: { "6ft": 40, "8ft": 35 } }',
'              ]',
'            }',
'          ],'
]);

// Stretch Tablecloths
replaceBlock('stretch-tablecloths', [
'          sizes: [',
'            { label: "6 feet", value: "6ft", basePrice: 265 },',
'            { label: "8 feet", value: "8ft", basePrice: 305 }',
'          ],',
'          selects: [',
'            {',
'              label: "Options",',
'              options: [',
'                { label: "Single-Sided printed", value: "single", priceAdder: 0 }',
'              ]',
'            }',
'          ],'
]);

// Fitted Tablecloths
replaceBlock('fitted-tablecloths', [
'          sizes: [',
'            { label: "6 feet", value: "6ft", basePrice: 255 },',
'            { label: "8 feet", value: "8ft", basePrice: 295 }',
'          ],',
'          selects: [',
'            {',
'              label: "Options",',
'              options: [',
'                { label: "Single-Sided printed", value: "single", priceAdder: 0 }',
'              ]',
'            }',
'          ],'
]);

// Table Runners
replaceBlock('table-runners', [
'          sizes: [',
'            { label: "3 x 7 feet", value: "3x7", basePrice: 135 },',
'            { label: "4 x 7 feet", value: "4x7", basePrice: 165 },',
'            { label: "5 x 7 feet", value: "5x7", basePrice: 195 }',
'          ],'
]);

// Step and Repeat Banners (Both)
const stepAndRepeatBlock = [
'          sizes: [',
'            { label: "8 x 8 feet", value: "8x8", basePrice: 330 },',
'            { label: "10 x 7.5 feet", value: "10x7.5", basePrice: 380 }',
'          ],',
'          selects: [',
'            {',
'              label: "Options",',
'              options: [',
'                { label: "Premium Pop-Up Frame + Carry Case", value: "premium", priceAdder: 0 },',
'                { label: "Replacement Fabric only", value: "replacement", sizePriceAdders: { "8x8": -20, "10x7.5": -20 } },',
'                { label: "13oz Vinyl Banner", value: "vinyl", sizePriceAdders: { "8x8": -180, "10x7.5": -210 } }',
'              ]',
'            }',
'          ],'
];

replaceBlock('step-and-repeat-banner', stepAndRepeatBlock);
replaceBlock('step-and-repeat-banners', stepAndRepeatBlock);

fs.writeFileSync('src/lib/productsRegistry.ts', lines.join('\n'), 'utf8');
console.log("Done");
