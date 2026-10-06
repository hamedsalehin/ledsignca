const fs = require('fs');
let lines = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8').split('\n');

const replacements = [
  {
    start: 1809,
    end: 1836,
    lines: [
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
    ]
  },
  {
    start: 2059,
    end: 2082,
    lines: [
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
    ]
  },
  {
    start: 1945,
    end: 1968,
    lines: [
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
    ]
  },
  {
    start: 1892,
    end: 1913,
    lines: [
'          sizes: [',
'            { label: "3 x 7 feet", value: "3x7", basePrice: 135 },',
'            { label: "4 x 7 feet", value: "4x7", basePrice: 165 },',
'            { label: "5 x 7 feet", value: "5x7", basePrice: 195 }',
'          ],'
    ]
  },
  {
    start: 2198,
    end: 2226,
    lines: [
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
    ]
  },
  {
    start: 774,
    end: 802,
    lines: [
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
    ]
  }
];

// Sort descending by start so we don't mess up indices
replacements.sort((a, b) => b.start - a.start);

for(const r of replacements) {
    lines.splice(r.start, r.end - r.start + 1, ...r.lines);
}

fs.writeFileSync('src/lib/productsRegistry.ts', lines.join('\n'), 'utf8');
console.log("Replaced perfectly via splice!");
