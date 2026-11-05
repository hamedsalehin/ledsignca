const fs = require('fs');
let lines = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8').split('\n');

const flagLines = [
'          sizes: [',
'            { label: "10 feet", value: "10ft", basePrice: 95 },',
'            { label: "13 feet", value: "13ft", basePrice: 125 }',
'          ],',
'          selects: [',
'            {',
'              label: "Options",',
'              options: [',
'                { label: "Single-Sided printed", value: "single", priceAdder: 0 },',
'                { label: "Double-Sided printed", value: "double", sizePriceAdders: { "10ft": 25, "13ft": 50 } }',
'              ]',
'            }',
'          ],'
];

const replacements = [
  {
    start: 933, // 0-indexed for line 934
    end: 1063,  // 0-indexed for line 1064
    lines: flagLines
  },
  {
    start: 1149,
    end: 1174,
    lines: flagLines
  },
  {
    start: 1225,
    end: 1250,
    lines: flagLines
  }
];

// Sort descending by start so we don't mess up indices
replacements.sort((a, b) => b.start - a.start);

for(const r of replacements) {
    lines.splice(r.start, r.end - r.start + 1, ...r.lines);
}

fs.writeFileSync('src/lib/productsRegistry.ts', lines.join('\n'), 'utf8');
console.log("Flags replaced perfectly via splice!");
