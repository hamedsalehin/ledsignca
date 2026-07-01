const fs = require('fs');
let lines = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8').split('\n');

const stepAndRepeatLines = [
'          sizes: [',
'            {',
'              label: "8\' x 8\' Square Backdrop",',
'              value: "96x96",',
'              basePrice: 145.99,',
'            },',
'            {',
'              label: "10\' x 8\' Large Backdrop",',
'              value: "120x96",',
'              basePrice: 179.99,',
'            },',
'          ],'
];

const stepAndRepeatBannersLines = [
'          sizes: [',
'            {',
'              label: "8\' x 8\' Square Backdrop",',
'              value: "96x96",',
'              basePrice: 204.39,',
'            },',
'            {',
'              label: "10\' x 8\' Large Backdrop",',
'              value: "120x96",',
'              basePrice: 251.99,',
'            },',
'          ],'
];

const popUpDisplaysLines = [
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

const parkingSignsLines = [
'          sizes: [',
'            { label: \'18" x 24"\', value: "18x24", basePrice: 105 },',
'            { label: \'36" x 24"\', value: "36x24", basePrice: 130 },',
'          ],'
];

const foamBoardSignsLines = [
'          sizes: [',
'            { label: \'12" x 18"\', value: "12x18", basePrice: 20.01 },',
'            { label: \'18" x 24"\', value: "18x24", basePrice: 38 },',
'            { label: \'24" x 36"\', value: "24x36", basePrice: 58 },',
'            { label: \'36" x 48"\', value: "36x48", basePrice: 72 },',
'          ],'
];

const replacements = [
  {
    start: 6305, // 6306
    end: 6324,   // 6325
    lines: parkingSignsLines
  },
  {
    start: 5521, // 5522
    end: 5577,   // 5578
    lines: foamBoardSignsLines
  },
  {
    start: 1983, // 1984
    end: 1996,   // 1997
    lines: stepAndRepeatLines
  },
  {
    start: 1904, // 1905
    end: 1942,   // 1943
    lines: popUpDisplaysLines
  },
  {
    start: 774,  // 775
    end: 787,    // 788
    lines: stepAndRepeatBannersLines
  }
];

replacements.sort((a, b) => b.start - a.start);

for(const r of replacements) {
    lines.splice(r.start, r.end - r.start + 1, ...r.lines);
}

fs.writeFileSync('src/lib/productsRegistry.ts', lines.join('\n'), 'utf8');
console.log("Replaced perfectly via splice!");
