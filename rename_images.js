const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public', 'images');
const srcDir = path.join(__dirname, 'src');
const suffix = '-toronto-printing-ca';

const renamedMap = []; 

function processImages(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const f of files) {
        const fullPath = path.join(dir, f);
        if (fs.statSync(fullPath).isDirectory()) {
            processImages(fullPath);
        } else {
            const ext = path.extname(f);
            const base = path.basename(f, ext);
            
            // Skip non-image files if any, though it should just be images
            if (!['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'].includes(ext.toLowerCase())) continue;
            
            // Skip if already renamed
            if (base.endsWith(suffix)) continue;

            const newBase = base + suffix;
            const newName = newBase + ext;
            const newFullPath = path.join(dir, newName);

            let relativePath = fullPath.substring(path.join(__dirname, 'public').length).replace(/\\/g, '/');
            if (!relativePath.startsWith('/')) relativePath = '/' + relativePath;
            
            let newRelativePath = newFullPath.substring(path.join(__dirname, 'public').length).replace(/\\/g, '/');
            if (!newRelativePath.startsWith('/')) newRelativePath = '/' + newRelativePath;

            renamedMap.push({
                oldDiskPath: fullPath,
                newDiskPath: newFullPath,
                oldUrlDecoded: relativePath,
                oldUrlEncoded: encodeURI(relativePath),
                newUrlDecoded: newRelativePath,
                newUrlEncoded: encodeURI(newRelativePath)
            });
            
            // Rename on disk
            fs.renameSync(fullPath, newFullPath);
        }
    }
}

function replaceInCode(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const f of files) {
        const fullPath = path.join(dir, f);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInCode(fullPath);
        } else if (f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.json')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Sort map by oldUrl length descending so longer paths are replaced first (prevents partial replaces)
            const sortedMap = [...renamedMap].sort((a, b) => b.oldUrlDecoded.length - a.oldUrlDecoded.length);

            for (const map of sortedMap) {
                // Replace encoded first
                content = content.split(map.oldUrlEncoded).join(map.newUrlEncoded);
                // Then decoded
                content = content.split(map.oldUrlDecoded).join(map.newUrlDecoded);
            }

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated references in: ' + fullPath);
            }
        }
    }
}

console.log('Starting image renaming process...');
processImages(publicDir);
console.log(`Renamed ${renamedMap.length} images on disk.`);
console.log('Updating codebase references...');
replaceInCode(srcDir);
console.log('Done.');
