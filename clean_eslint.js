const fs = require('fs');

const filesToClean = [
  'src/app/design/page.tsx',
  'src/components/DesignCanvas.tsx'
];

filesToClean.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/\{\/\*\s*eslint-disable-next-line @next\/next\/no-img-element\s*\*\/\}/g, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Cleaned ${file}`);
  }
});
