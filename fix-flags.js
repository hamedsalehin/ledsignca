const fs = require('fs');

let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

const target1 = `              ]
            }
          ],
            },
            {
              label: "Base Option",`;
              
const target2 = `              ]
            }
          ],
            },
          ],`; // Wait, teardrop flags ended with this? Let's check.

const replacement1 = `              ]
            },
            {
              label: "Base Option",`;
              
const replacement2 = `              ]
            }
          ],`;

content = content.replace(target1, replacement1);

// Teardrop flags:
// 1160:             }
// 1161:           ],
// 1162:             },
// 1163:           ],
const teardropTarget = `              ]
            }
          ],
            },
          ],`;
const teardropReplacement = `              ]
            }
          ],`;

content = content.replace(teardropTarget, teardropReplacement);

fs.writeFileSync('src/lib/productsRegistry.ts', content, 'utf8');
console.log("Syntax fixed");
