const fs = require('fs');

let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

// The syntax error is:
//          ],
//            },
//            {
//              label: "Finishing Option",

const badBlock = `          ],
            },
            {
              label: "Finishing Option",`;
              
const goodBlock = `            },
            {
              label: "Finishing Option",`;

content = content.replace(badBlock, goodBlock);
fs.writeFileSync('src/lib/productsRegistry.ts', content, 'utf8');
console.log("Fixed syntax error");
