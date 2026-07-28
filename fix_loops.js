const fs = require('fs');
let lines = fs.readFileSync('next.config.js', 'utf8').split('\n');

lines = lines.filter(l => {
  const sm = l.match(/source: "(.*?)"/);
  const dm = l.match(/destination: "(.*?)"/);
  if (sm && dm) {
    const s = sm[1].replace(/\/$/, '');
    const d = dm[1].replace(/\/$/, '');
    if (s === d) {
      console.log('Removed loop: ' + l.trim());
      return false;
    }
  }
  return true;
});

fs.writeFileSync('next.config.js', lines.join('\n'));
