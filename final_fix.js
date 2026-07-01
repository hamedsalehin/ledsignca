const fs = require('fs');
let lines = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8').split('\n');

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

const replacements = [
  // Parking signs (remove selects)
  {
    start: 6309, // line 6310
    end: 6324, // line 6325
    lines: []
  },
  // step-and-repeat-banner
  {
    start: 2197,
    end: 2225,
    lines: stepAndRepeatLines
  },
  // pop-up-displays
  {
    start: 1904,
    end: 1942,
    lines: popUpDisplaysLines
  },
  // step-and-repeat-banners
  {
    start: 773,
    end: 801,
    lines: stepAndRepeatBannersLines
  }
];

replacements.sort((a, b) => b.start - a.start);

for(const r of replacements) {
    lines.splice(r.start, r.end - r.start + 1, ...r.lines);
}

fs.writeFileSync('src/lib/productsRegistry.ts', lines.join('\n'), 'utf8');
console.log("Replaced perfectly via splice!");
