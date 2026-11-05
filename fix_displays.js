const fs = require('fs');
let text = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8');

// Fix Pop-Up Displays
// Replace sizes and selects for pop-up-displays
const popupRegex = /id: "pop-up-displays"[\s\S]*?sizes: \[([\s\S]*?)\],[\s\S]*?selects: \[([\s\S]*?)\]/m;
const popupMatch = text.match(popupRegex);
if(popupMatch) {
  let newPopup = popupMatch[0]
    .replace(/sizes: \[[\s\S]*?\],/, `sizes: [
            { label: "7.5' x 7.5' (3 x 3)", value: "7.5x7.5", basePrice: 780 },
            { label: "10' x 7.5' (4 x 3)", value: "10x7.5", basePrice: 920 }
          ],`)
    .replace(/selects: \[[\s\S]*?\]/, `selects: [
            {
              label: "Options",
              options: [
                { label: "Premium Pop-Up Frame + Carry Case", value: "premium", priceAdder: 0 },
                { label: "Replacement Fabric only", value: "replacement", sizePriceAdders: { "7.5x7.5": -420, "10x7.5": -500 } }
              ]
            }
          ]`);
  text = text.replace(popupMatch[0], newPopup);
}

// Fix Backdrop Banners
const backdropRegex = /id: "step-and-repeat-banner"[\s\S]*?sizes: \[([\s\S]*?)\],/m;
const backdropMatch = text.match(backdropRegex);
if(backdropMatch) {
  let newBackdrop = backdropMatch[0]
    .replace(/sizes: \[[\s\S]*?\],/, `sizes: [
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
          ],`);
  text = text.replace(backdropMatch[0], newBackdrop);
}

fs.writeFileSync('src/lib/productsRegistry.ts', text);
console.log('Fixed pop-up-displays and step-and-repeat-banner');
