const fs = require('fs');

let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

// The regex to find:
//           ],
//             },
//             {
// or something similar. Let's just fix it.

content = content.replace(/          \],\r?\n            \},\r?\n            \{/g, `          },\n            {`);

fs.writeFileSync('src/lib/productsRegistry.ts', content, 'utf8');
console.log("Fixed all syntax errors");
