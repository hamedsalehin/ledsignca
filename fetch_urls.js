const https = require('https');
const fs = require('fs');

const sitemaps = [
  'page-sitemap.xml',
  'product-sitemap.xml',
  'category-sitemap.xml',
  'product_cat-sitemap.xml',
  'post-sitemap.xml'
];

let urls = [];
let completed = 0;

sitemaps.forEach(sm => {
  https.get(`https://led-sign.ca/${sm}`, res => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      const matches = [...data.matchAll(/<loc>(.*?)<\/loc>/g)];
      matches.forEach(m => urls.push(m[1]));
      completed++;
      if (completed === sitemaps.length) {
        fs.writeFileSync('old_urls.txt', urls.join('\n'));
        console.log('Saved ' + urls.length + ' URLs to old_urls.txt');
      }
    });
  }).on('error', e => console.error(e));
});
