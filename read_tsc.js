const fs = require('fs');
const lines = fs.readFileSync('tsc_errors.txt', 'utf8').split('\n');
console.log(lines.slice(0, 20).join('\n'));
