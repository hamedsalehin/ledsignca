const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const registryPath = 'src/lib/productsRegistry.ts';
let content = fs.readFileSync(registryPath, 'utf8');

// Extract all keys from PRODUCTS_REGISTRY
const categoryKeys = [...content.matchAll(/^  "?([a-zA-Z0-9-]+)"?:\s*\{/gm)].map(m => m[1]);
// Extract all product IDs
const productIds = [...content.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]);

// Valid root level paths from src/app
const rootPaths = ['about-us', 'account', 'api', 'checkout', 'contact-us', 'design', 'get-a-quote', 'login', 'return-policy'];

const validPaths = new Set();
validPaths.add('/');
rootPaths.forEach(p => validPaths.add(`/${p}`));
categoryKeys.forEach(c => validPaths.add(`/${c}`));

// Add /category/productId paths
const lines = content.split('\n');
let currentCategory = null;
for (let i = 0; i < lines.length; i++) {
    const catMatch = lines[i].match(/^  "?([a-zA-Z0-9-]+)"?:\s*\{/);
    if (catMatch) {
        currentCategory = catMatch[1];
    }
    const idMatch = lines[i].match(/id:\s*"([^"]+)"/);
    if (idMatch && currentCategory) {
        validPaths.add(`/${currentCategory}/${idMatch[1]}`);
    }
}

// Special case known dynamic routes or external links
validPaths.add('/account/orders');

let allHrefs = new Set();
let fileHrefs = [];

walkDir('src', function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let fileContent = fs.readFileSync(filePath, 'utf8');
        const hrefMatches = [...fileContent.matchAll(/href=["']([^"']+)["']/g)];
        hrefMatches.forEach(m => {
            const link = m[1];
            if (link.startsWith('/')) {
                // Ignore query params or anchors
                const cleanLink = link.split('?')[0].split('#')[0];
                allHrefs.add(cleanLink);
                fileHrefs.push({ file: filePath, link: cleanLink });
            }
        });
    }
});

let brokenLinks = [];
fileHrefs.forEach(({file, link}) => {
    // Check if the link exists in validPaths
    // Also handle dynamic routes if any (like /[category]/[product])
    // But we generated all category and product links above!
    if (!validPaths.has(link)) {
        brokenLinks.push(`File: ${file} | Link: ${link}`);
    }
});

if (brokenLinks.length > 0) {
    console.log("Found potentially broken links:");
    console.log([...new Set(brokenLinks)].join('\n'));
} else {
    console.log("No broken links found!");
}
