const fs = require('fs');
const filesToProcess = [
  'src/components/ValuePropositions.tsx',
  'src/components/CustomerHighlights.tsx',
  'src/components/Footer.tsx',
  'src/app/[category]/CategoryPageClient.tsx',
  'src/components/PromotionalModal.tsx'
];

filesToProcess.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add import if missing
    if (!content.includes('import Image from "next/image"') && !content.includes("import Image from 'next/image'")) {
      content = 'import Image from "next/image";\n' + content;
    }

    // Replace <img> with <Image>
    content = content.replace(/<img([\s\S]*?)\/?>/g, '<Image$1/>');
    
    // Clean up if it produced <Image ... />/>
    content = content.replace(/(\/>)\/>/g, '/>');

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Replaced imgs in ${file}`);
  }
});
