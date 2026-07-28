const fs = require('fs');
const text = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

// Regex to find "foam board"
const matches = text.match(/.{0,50}foam.{0,50}/gi);
console.log("Foam mentions:", [...new Set(matches)]);
