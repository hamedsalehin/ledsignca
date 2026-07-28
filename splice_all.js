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

const coroSearch = `                {
                  label: "6mm Heavy Duty",
                  value: "6mm",
                  priceAdder: 1.75,
                  description:
                    "50% thicker — ideal for long-term and reusable signs.",
                },`;

const coroReplace = `                {
                  label: "6mm Heavy Duty",
                  value: "6mm",
                  priceAdder: 0,
                  priceMultiplier: 1.3,
                  description:
                    "50% thicker — ideal for long-term and reusable signs.",
                },`;

text = text.replace(popupSearch, popupReplace);
text = text.replace(backdropSearch, backdropReplace);
text = text.replace(coroSearch, coroReplace);

fs.writeFileSync('src/lib/productsRegistry.ts', text);
console.log('Splice complete');
