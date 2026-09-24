const fs = require('fs');

let text = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

const popupSearch = `          sizes: [
            { label: "8 x 8 feet", value: "8x8", basePrice: 330 },
            { label: "10 x 7.5 feet", value: "10x7.5", basePrice: 380 }
          ],
          selects: [
            {
              label: "Options",
              options: [
                { label: "Premium Pop-Up Frame + Carry Case", value: "premium", priceAdder: 0 },
                { label: "Replacement Fabric only", value: "replacement", sizePriceAdders: { "8x8": -20, "10x7.5": -20 } },
                { label: "13oz Vinyl Banner", value: "vinyl", sizePriceAdders: { "8x8": -180, "10x7.5": -210 } }
              ]
            }
          ],`;

const popupReplace = `          sizes: [
            { label: "7.5' x 7.5' (3 x 3)", value: "7.5x7.5", basePrice: 780 },
            { label: "10' x 7.5' (4 x 3)", value: "10x7.5", basePrice: 920 }
          ],
          selects: [
            {
              label: "Options",
              options: [
                { label: "Premium Pop-Up Frame + Carry Case", value: "premium", priceAdder: 0 },
                { label: "Replacement Fabric only", value: "replacement", sizePriceAdders: { "7.5x7.5": -420, "10x7.5": -500 } }
              ]
            }
          ],`;

const backdropSearch = `          sizes: [
            {
              label: "8' x 8' Square Backdrop",
              value: "96x96",
              basePrice: 145.99,
            },
            {
              label: "10' x 8' Large Backdrop",
              value: "120x96",
              basePrice: 179.99,
            },
          ],`;

const backdropReplace = `          sizes: [
            { label: "8' x 8' Square Backdrop", value: "8x8", basePrice: 330 },
            { label: "10' x 7.5' Large Backdrop", value: "10x7.5", basePrice: 380 }
          ],
          selects: [
            {
              label: "Options",
              options: [
                { label: "Premium Pop-Up Frame + Carry Case", value: "premium", priceAdder: 0 },
                { label: "Replacement Fabric only", value: "replacement", sizePriceAdders: { "8x8": -20, "10x7.5": -20 } },
                { label: "13oz Vinyl Banner", value: "vinyl", sizePriceAdders: { "8x8": -180, "10x7.5": -210 } }
              ]
            }
          ],`;

const coroplastSearch = `                {
                  label: "6mm Heavy Duty",
                  value: "6mm",
                  priceAdder: 1.75,
                  description:
                    "50% thicker — ideal for long-term and reusable signs.",
                },`;
                
const coroplastReplace = `                {
                  label: "6mm Heavy Duty",
                  value: "6mm",
                  priceAdder: 0,
                  priceMultiplier: 1.3,
                  description:
                    "50% thicker — ideal for long-term and reusable signs.",
                },`;

if(text.includes(popupSearch)) {
  text = text.replace(popupSearch, popupReplace);
  console.log('Fixed pop up displays');
} else {
  console.log('Could not find pop up displays search text');
}

if(text.includes(backdropSearch)) {
  text = text.replace(backdropSearch, backdropReplace);
  console.log('Fixed step and repeat banner');
} else {
  console.log('Could not find backdrop search text');
}

if(text.includes(coroplastSearch)) {
  text = text.replace(coroplastSearch, coroplastReplace);
  console.log('Fixed coroplast 6mm pricing');
} else {
  console.log('Could not find coroplast search text');
}

fs.writeFileSync('src/lib/productsRegistry.ts', text);
