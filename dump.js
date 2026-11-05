const fs = require('fs');
const lines = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8').split('\n');

const getRange = (id) => {
  let start = -1;
  let end = -1;
  let braceCount = 0;
  for(let i=0; i<lines.length; i++) {
    if(start === -1 && lines[i].includes('id: "' + id + '"')) {
      start = i;
      // find the config brace
      for(let j=i; j<lines.length; j++) {
        if(lines[j].includes('sizes: [')) {
           braceCount = 1;
           for(let k=j+1; k<lines.length; k++) {
             braceCount += (lines[k].match(/\[/g) || []).length;
             braceCount -= (lines[k].match(/\]/g) || []).length;
             if(braceCount === 0) {
                // If there's selects right after, let's include it
                let hasSelects = false;
                let m = k;
                while (lines[m+1].trim() === '' || lines[m+1].includes(',')) m++;
                if (lines[m+1] && lines[m+1].includes('selects: [')) {
                   braceCount = 1;
                   for(let n=m+2; n<lines.length; n++) {
                     braceCount += (lines[n].match(/\[/g) || []).length;
                     braceCount -= (lines[n].match(/\]/g) || []).length;
                     if(braceCount === 0) {
                        end = n;
                        break;
                     }
                   }
                } else {
                   end = k;
                }
                break;
             }
           }
           break;
        }
      }
    }
  }
  return { start: start-1, end: end }; // Include 'config:' or what not?
}

// Just search the lines
let puStart = lines.findIndex(l => l.includes('id: "pop-up-displays"'));
let srStart = lines.findIndex(l => l.includes('id: "step-and-repeat-banner"'));
let coroStart = lines.findIndex(l => l.includes('label: "6mm Heavy Duty"'));

console.log("PU start:", puStart);
console.log(lines.slice(puStart, puStart+30).join('\n'));
console.log("SR start:", srStart);
console.log(lines.slice(srStart, srStart+30).join('\n'));
console.log("Coro start:", coroStart);
console.log(lines.slice(coroStart-2, coroStart+10).join('\n'));
