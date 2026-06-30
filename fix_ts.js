const fs = require('fs');
let content = fs.readFileSync('src/components/SignProductPage.tsx', 'utf8');

content = content.replace(/find\(s =>/g, "find((s: any) =>");
content = content.replace(/find\(o =>/g, "find((o: any) =>");

fs.writeFileSync('src/components/SignProductPage.tsx', content);
console.log('Fixed typescript errors');
