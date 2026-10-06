const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directories to process
const sourceDir = path.join(__dirname, 'public', 'uploads');
const targetDir = path.join(__dirname, 'public', 'optimized_uploads');

const MAX_WIDTH = 1920;
const QUALITY = 80;

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function processDirectory(dir, currentTargetDir) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const targetPath = path.join(currentTargetDir, entry.name);

    if (entry.isDirectory()) {
      if (!fs.existsSync(targetPath)) fs.mkdirSync(targetPath, { recursive: true });
      await processDirectory(fullPath, targetPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        try {
          const stat = fs.statSync(fullPath);
          
          if (stat.size > 250 * 1024) {
            const metadata = await sharp(fullPath).metadata();
            let pipeline = sharp(fullPath);
            
            if (metadata.width > MAX_WIDTH) {
              pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
            }

            if (ext === '.png') {
              pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 8 });
            } else {
              pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
            }

            await pipeline.toFile(targetPath);
          } else {
            // Just copy small files
            fs.copyFileSync(fullPath, targetPath);
          }
        } catch (e) {
          console.error(`Error processing ${fullPath}:`, e.message);
          // If sharp fails, just copy
          try { fs.copyFileSync(fullPath, targetPath); } catch(err){}
        }
      } else {
        // Copy non-image files
        try { fs.copyFileSync(fullPath, targetPath); } catch(err){}
      }
    }
  }
}

async function run() {
  console.log("Starting Image Optimization to new directory...");
  await processDirectory(sourceDir, targetDir);
  console.log("Optimization Complete! The optimized files are in public/optimized_uploads");
}

run();
