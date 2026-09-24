const fs = require('fs');
const file = 'C:/Users/eskan/OneDrive/Desktop/nod js/nano-signs/src/app/[category]/CategoryPageClient.tsx';
let txt = fs.readFileSync(file, 'utf8');
txt = txt.replace('href="#"', 'href="#configurator"');
fs.writeFileSync(file, txt);
