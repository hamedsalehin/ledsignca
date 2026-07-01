const fs = require('fs');

let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

// The problematic snippet looks exactly like:
//           ],
//             },
//             {
//               label: "Base Option",

// For feather-flags:
content = content.replace(/\s*\]\s*,\s*\}\s*,\s*\{\s*label:\s*"Base Option",/, `
            },
            {
              label: "Base Option",`);

// For teardrop-flags:
// 1160:             }
// 1161:           ],
// 1162:             },
// 1163:           ],
// 1164:           qtyDiscount: "Bulk discounts available",

content = content.replace(/\s*\]\s*,\s*\}\s*,\s*\]\s*,\s*qtyDiscount:\s*"Bulk discounts available",/, `
            }
          ],
          qtyDiscount: "Bulk discounts available",`);

fs.writeFileSync('src/lib/productsRegistry.ts', content, 'utf8');
console.log("Syntax fixed via robust regex");
