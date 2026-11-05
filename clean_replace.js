const fs = require('fs');

let content = fs.readFileSync('src/lib/productsRegistry.ts', 'utf8').replace(/\r\n/g, '\n');

const replacements = [
  {
    old: `          sizes: [
            {
              label: "6ft Table Throw (Standard)",
              value: "72x30",
              basePrice: 89.99,
            },
            { label: "8ft Table Throw", value: "96x30", basePrice: 119.99 },
          ],
          selects: [
            {
              label: "Table Cloth Coverage",
              options: [
                {
                  label: "4-Sided Closed Back Throw",
                  value: "4sided",
                  priceAdder: 0,
                  description:
                    "Covers all four sides, ideal for storage underneath.",
                },
                {
                  label: "3-Sided Open Back Throw",
                  value: "3sided",
                  priceAdder: -15,
                  description:
                    "Open back for easy seating and under-table access.",
                },
              ],
            },
          ],`,
    new: `          sizes: [
            { label: "6 feet", value: "6ft", basePrice: 200 },
            { label: "8 feet", value: "8ft", basePrice: 225 }
          ],
          selects: [
            {
              label: "Options",
              options: [
                { label: "3 sided", value: "3sided", priceAdder: 0 },
                { label: "4 sided", value: "4sided", sizePriceAdders: { "6ft": 40, "8ft": 35 } }
              ]
            }
          ],`
  },
  {
    old: `          sizes: [
            { label: "6ft Stretch Fit", value: "72x30", basePrice: 129.99 },
            { label: "8ft Stretch Fit", value: "96x30", basePrice: 159.99 },
          ],
          selects: [
            {
              label: "Back Style",
              options: [
                {
                  label: "Zippered Back",
                  value: "zipper",
                  priceAdder: 0,
                },
                {
                  label: "Open Back",
                  value: "open",
                  priceAdder: -10,
                },
              ],
            },
          ],`,
    new: `          sizes: [
            { label: "6 feet", value: "6ft", basePrice: 265 },
            { label: "8 feet", value: "8ft", basePrice: 305 }
          ],
          selects: [
            {
              label: "Options",
              options: [
                { label: "Single-Sided printed", value: "single", priceAdder: 0 }
              ]
            }
          ],`
  },
  {
    old: `          sizes: [
            { label: "6ft Fitted Cover", value: "72x30", basePrice: 109.99 },
            { label: "8ft Fitted Cover", value: "96x30", basePrice: 139.99 },
          ],
          selects: [
            {
              label: "Corner Style",
              options: [
                {
                  label: "Pleated Corners",
                  value: "pleated",
                  priceAdder: 0,
                },
                {
                  label: "Box Corners",
                  value: "box",
                  priceAdder: 0,
                },
              ],
            },
          ],`,
    new: `          sizes: [
            { label: "6 feet", value: "6ft", basePrice: 255 },
            { label: "8 feet", value: "8ft", basePrice: 295 }
          ],
          selects: [
            {
              label: "Options",
              options: [
                { label: "Single-Sided printed", value: "single", priceAdder: 0 }
              ]
            }
          ],`
  },
  {
    old: `          sizes: [
            { label: "2ft x 7ft Runner", value: "24x84", basePrice: 45.0 },
            { label: "3ft x 7ft Runner", value: "36x84", basePrice: 55.0 },
            { label: "4ft x 7ft Runner", value: "48x84", basePrice: 65.0 },
          ],`,
    new: `          sizes: [
            { label: "3 x 7 feet", value: "3x7", basePrice: 135 },
            { label: "4 x 7 feet", value: "4x7", basePrice: 165 },
            { label: "5 x 7 feet", value: "5x7", basePrice: 195 }
          ],`
  },
  {
    old: `          sizes: [
            { label: "8' x 8' Pop-Up Banner", value: "8x8", basePrice: 380.0 },
            { label: "10' x 8' Pop-Up Banner", value: "10x8", basePrice: 480.0 },
          ],
          selects: [
            {
              label: "Frame Type",
              options: [
                {
                  label: "Standard Aluminum Frame",
                  value: "standard",
                  priceAdder: 0,
                },
                {
                  label: "Heavy-Duty Steel Frame",
                  value: "heavy",
                  priceAdder: 50,
                },
              ],
            },
          ],`,
    new: `          sizes: [
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
          ],`
  },
  {
    old: `          sizes: [
            {
              label: "8' x 8' Banner & Frame",
              value: "8x8",
              basePrice: 450.0,
            },
            {
              label: "10' x 8' Banner & Frame",
              value: "10x8",
              basePrice: 550.0,
            },
          ],
          selects: [
            {
              label: "Carrying Case",
              options: [
                {
                  label: "Nylon Duffel Bag (Included)",
                  value: "nylon",
                  priceAdder: 0,
                },
                {
                  label: "Hard Case with Wheels",
                  value: "hardcase",
                  priceAdder: 85,
                },
              ],
            },
          ],`,
    new: `          sizes: [
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
          ],`
  },
  {
    old: `          sizes: [
            { label: "8' x 8' Tension Fabric", value: "8x8", basePrice: 420.0 },
            {
              label: "10' x 8' Tension Fabric",
              value: "10x8",
              basePrice: 520.0,
            },
          ],
          selects: [
            {
              label: "Print Type",
              options: [
                {
                  label: "Single-Sided Print",
                  value: "single",
                  priceAdder: 0,
                },
                {
                  label: "Double-Sided Print",
                  value: "double",
                  priceAdder: 120,
                },
              ],
            },
          ],`,
    new: `          sizes: [
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
          ],`
  }
];

let replacedCount = 0;
for (const r of replacements) {
    if (content.includes(r.old)) {
        content = content.replace(r.old, r.new);
        replacedCount++;
    } else {
        console.log("Could not find replacement block!");
        console.log(r.old.substring(0, 50));
    }
}

fs.writeFileSync('src/lib/productsRegistry.ts', content, 'utf8');
console.log("Successfully replaced " + replacedCount + " blocks cleanly.");
