const fs = require('fs');

const renames = [
  { old: "banners%20hero%20image-toronto-printing-ca.png", new: "banners_hero_image-toronto-printing-ca.png" },
  { old: "nano%20hero%20flag%20section-toronto-printing-ca.png", new: "nano_hero_flag_section-toronto-printing-ca.png" },
  { old: "nano%20hero%20signs%20section-toronto-printing-ca.png", new: "nano_hero_signs_section-toronto-printing-ca.png" },
  { old: "stickers%20&%20decals%20hero%20image-toronto-printing-ca.png", new: "stickers_decals_hero_image-toronto-printing-ca.png" },
  { old: "tradeshow%20hero%20image-toronto-printing-ca.png", new: "tradeshow_hero_image-toronto-printing-ca.png" },
  { old: "banners hero image-toronto-printing-ca.png", new: "banners_hero_image-toronto-printing-ca.png" },
  { old: "nano hero flag section-toronto-printing-ca.png", new: "nano_hero_flag_section-toronto-printing-ca.png" },
  { old: "nano hero signs section-toronto-printing-ca.png", new: "nano_hero_signs_section-toronto-printing-ca.png" },
  { old: "stickers & decals hero image-toronto-printing-ca.png", new: "stickers_decals_hero_image-toronto-printing-ca.png" },
  { old: "tradeshow hero image-toronto-printing-ca.png", new: "tradeshow_hero_image-toronto-printing-ca.png" }
];

let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');
renames.forEach(r => {
  content = content.split(r.old).join(r.new);
});
fs.writeFileSync('src/lib/productsRegistry.ts', content);
console.log('Fixed filenames');
