const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

const OUT_DIR = path.join(__dirname, 'public', 'images', 'products', 'led-display-signs');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', err => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

(async () => {
  console.log('Launching puppeteer...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  console.log('Navigating to led-signs.us...');
  await page.goto('https://led-signs.us/', { waitUntil: 'networkidle2' });
  
  // Find all a tags that link to /products/
  const products = await page.evaluate(() => {
     const items = [];
     const links = document.querySelectorAll('a[href^="/products/"]');
     links.forEach(link => {
         const img = link.querySelector('img');
         if (img && img.src) {
             const title = img.alt || link.textContent.trim() || link.href.split('/').pop().replace(/-/g, ' ');
             items.push({
                 id: link.href.split('/').pop(),
                 name: title,
                 imgSrc: img.src
             });
         }
     });
     
     // Deduplicate
     const unique = [];
     const seen = new Set();
     for (const p of items) {
         if (!seen.has(p.id) && p.imgSrc) {
             seen.add(p.id);
             unique.push(p);
         }
     }
     return unique;
  });
  
  await browser.close();
  
  console.log(`Found ${products.length} products`);
  
  const registryEntries = [];
  
  for (const product of products) {
    let imgUrl = product.imgSrc;
    if (imgUrl.startsWith('data:')) continue; // Skip data URIs if any
    
    // Some urls might be next.js _next/image
    if (imgUrl.includes('_next/image')) {
       const urlMatch = new URL(imgUrl).searchParams.get('url');
       if (urlMatch) {
           imgUrl = urlMatch.startsWith('/') ? 'https://led-signs.us' + urlMatch : urlMatch;
       }
    }
    
    const ext = path.extname(imgUrl.split('?')[0]) || '.jpg';
    const filename = `${product.id}${ext}`;
    const dest = path.join(OUT_DIR, filename);
    
    console.log(`Downloading ${imgUrl} to ${filename}`);
    try {
        await downloadImage(imgUrl, dest);
        registryEntries.push({
            id: product.id,
            name: product.name,
            description: "Premium LED display solution",
            image: `/images/products/led-display-signs/${filename}`,
            price: "Request Quote"
        });
    } catch (e) {
        console.error(`Failed to download image for ${product.id}`, e.message);
    }
  }
  
  fs.writeFileSync(path.join(__dirname, 'scraped_led_products.json'), JSON.stringify(registryEntries, null, 2));
  console.log('Done!');
})();
