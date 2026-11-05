const fs = require('fs');

let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');
let lines = content.split(/\r?\n/);

// Feather flags
// 958:               ]
// 959:             }
// 960:           ],
// 961:             },
// 962:             {
// 963:               label: "Base Option",

if (lines[958].includes('}') && lines[959].includes('],') && lines[960].includes('},')) {
    // wait, let's just search line by line so it's immune to line number shifts
}

for (let i = 0; i < lines.length - 3; i++) {
    if (lines[i].includes(']') && 
        lines[i+1].includes('}') && 
        lines[i+2].includes('],') && 
        lines[i+3].includes('},')) {
        
        // Match found!
        // We want it to be:
        // ]
        // },
        // {
        // label: "..."
        lines[i+1] = lines[i+1].replace('}', '},');
        lines.splice(i+2, 2); // remove `],` and `},`
    }
}

// Wait, teardrop flags ended with:
// 1160:             }
// 1161:           ],
// 1162:             },
// 1163:           ],
// 1164:           qtyDiscount: "Bulk discounts available",
for (let i = 0; i < lines.length - 4; i++) {
    if (lines[i].includes('}') && 
        lines[i+1].includes('],') && 
        lines[i+2].includes('},') && 
        lines[i+3].includes('],') &&
        lines[i+4].includes('qtyDiscount')) {
        
        lines[i] = lines[i].replace('}', '},');
        lines.splice(i+1, 2); // remove `],` and `},`
    }
}

fs.writeFileSync('src/lib/productsRegistry.ts', lines.join('\n'), 'utf8');
console.log("Syntax fixed perfectly by line");
