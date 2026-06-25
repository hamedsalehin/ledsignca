const fs = require('fs');
const path = require('path');
const https = require('https');

const SITE_URL = 'https://led-signs.us/';
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

function getHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function scrape() {
  console.log('Fetching', SITE_URL);
  const html = await getHtml(SITE_URL);
  
  const startStr = '<script id="__NEXT_DATA__" type="application/json">';
  const startIndex = html.indexOf(startStr);
  if (startIndex === -1) {
    console.log('Could not find __NEXT_DATA__');
    return;
  }
  
  const endStr = '</script>';
  const endIndex = html.indexOf(endStr, startIndex + startStr.length);
  const jsonStr = html.substring(startIndex + startStr.length, endIndex);
  
  const nextData = JSON.parse(jsonStr);
  
  // Find products in pageProps
  const products = nextData.props.pageProps.products || [];
  
  if (products.length === 0) {
     console.log('No products found in pageProps, searching recursively...');
     // Just a fallback to stringify and regex search the json
     let pList = [];
     const jsonString = JSON.stringify(nextData);
     const regex = /"id":"([^"]+)","title":"([^"]+)","slug":"([^"]+)","category":"([^"]+)","image":"([^"]+)"/g;
     let match;
     while ((match = regex.exec(jsonString)) !== null) {
         pList.push({
             id: match[1],
             name: match[2],
             slug: match[3],
             category: match[4],
             imgSrc: match[5]
         });
     }
     
     if (pList.length === 0) {
        // Fallback 2: custom objects
        const regex2 = /"slug":"([^"]+)","name":"([^"]+)"(?:.*?)"image":"([^"]+)"/g;
        while ((match = regex2.exec(jsonString)) !== null) {
            pList.push({
                 id: match[1],
                 name: match[2],
                 slug: match[1],
                 imgSrc: match[3]
             });
        }
     }
     console.log('Found fallback products:', pList.length);
     
     // Deduplicate
     const unique = [];
     const seen = new Set();
     for (const p of pList) {
         if (!seen.has(p.slug)) {
             seen.add(p.slug);
             unique.push(p);
         }
     }
     
     for (const product of unique) {
         let img = product.imgSrc;
         if (img.startsWith('/')) img = 'https://led-signs.us' + img;
         const ext = path.extname(img.split('?')[0]) || '.jpg';
         const filename = `${product.slug}${ext}`;
         const dest = path.join(OUT_DIR, filename);
         
         console.log(`Downloading ${img} to ${filename}`);
         try {
             await downloadImage(img, dest);
             registryEntries.push({
                 id: product.slug,
                 name: product.name,
                 description: "Premium LED display solution",
                 image: `/images/products/led-display-signs/${filename}`,
                 price: "Request Quote"
             });
         } catch (e) {
             console.error(`Failed to download image for ${product.slug}`, e.message);
         }
     }
     
     if (unique.length > 0) {
         fs.writeFileSync(path.join(__dirname, 'scraped_led_products.json'), JSON.stringify(registryEntries, null, 2));
         return;
     }
  }

  const registryEntries = [];
  console.log(`Found ${products.length} products`);
  
  for (const product of products) {
    let img = product.image || product.coverImage;
    if (img && img.startsWith('/')) img = 'https://led-signs.us' + img;
    
    const ext = path.extname(img.split('?')[0]) || '.jpg';
    const filename = `${product.slug || product.id}${ext}`;
    const dest = path.join(OUT_DIR, filename);
    
    console.log(`Downloading ${img} to ${filename}`);
    try {
        await downloadImage(img, dest);
        registryEntries.push({
            id: product.slug || product.id,
            name: product.name || product.title,
            description: "Premium LED display solution",
            image: `/images/products/led-display-signs/${filename}`,
            price: "Request Quote"
        });
    } catch (e) {
        console.error(`Failed to download image for ${product.name}`, e.message);
    }
  }
  
  fs.writeFileSync(path.join(__dirname, 'scraped_led_products.json'), JSON.stringify(registryEntries, null, 2));
  console.log('Done!');
}

scrape().catch(console.error);
