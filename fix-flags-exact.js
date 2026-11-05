const fs = require('fs');

let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');
let lines = content.split(/\r?\n/);

lines.splice(960, 2, '            },'); // Replaces `          ],` and `            },` with `            },`
lines.splice(1160, 2, '            }'); // Replaces `          ],` and `            },` with `            }`

fs.writeFileSync('src/lib/productsRegistry.ts', lines.join('\n'), 'utf8');
console.log("Fixed by exact line index");
