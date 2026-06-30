const fs = require('fs');
const pricing = require('./src/lib/pricing.json');

const targetKeys = [
  'yard-signs',
  'aluminum-signs',
  'magnetic-signs',
  'a-frame-signs',
  'real-estate-panels',
  'foam-board-signs',
  'parking-signs',
  'tablecloths',
  'pop-up-displays',
  'step-and-repeat-banner',
  'flags',
  'vinyl-banners',
  'custom-postcards',
  'business-cards'
];

const result = {};
for (const key of targetKeys) {
  if (pricing[key]) {
    result[key] = pricing[key];
  }
}

fs.writeFileSync('scratch/pricing_dump.json', JSON.stringify(result, null, 2));
console.log('Dumped to scratch/pricing_dump.json');
