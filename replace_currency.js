const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function replaceCurrency(filePath) {
    if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Fix the previous replacement if any CAD $ exist
    content = content.replace(/CAD \$(\d)/g, 'CAD $1');
    content = content.replace(/CAD \$\$\{/g, 'CAD ${');
    content = content.replace(/CAD \$\{/g, 'CAD ${');

    // Replace $12.99 with CAD 12.99
    content = content.replace(/\$(\d)/g, 'CAD $1');
    
    // Replace $${price} with CAD ${price} (in template strings)
    content = content.replace(/\$\$\{/g, 'CAD ${');
    
    // Replace ${price} with CAD {price} (in JSX text nodes)
    // We only want to do this for JSX literals. This is a bit tricky, but usually it's `> ${` or `>${` or `-${`
    content = content.replace(/>\$/g, '>CAD ');
    content = content.replace(/> \$/g, '> CAD ');
    content = content.replace(/-\$/g, '-CAD ');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

walkDir('./src', replaceCurrency);
console.log('Currency replacement complete.');
