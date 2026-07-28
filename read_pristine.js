const fs = require('fs');
const content = fs.readFileSync('pristine_registry.ts', 'utf8');
const start = content.indexOf('id: "step-and-repeat-banner"');
console.log(content.substring(start, start + 2000));
