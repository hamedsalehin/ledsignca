const fs = require('fs');
const path = require('path');

const registryPath = path.join(__dirname, 'src', 'lib', 'productsRegistry.ts');
let content = fs.readFileSync(registryPath, 'utf8');

const products = require('./scraped_led_products.json');

let newCategoryStr = `  "led-display-signs": {
    title: "LED Display Signs",
    description: "High-impact, programmable LED displays for commercial storefronts, events, and advertising.",
    heroImage: "/images/products/main page/programmable_led_sign-toronto-printing-ca.jpeg",
    categoryDescriptionText: "Elevate your brand with our premium programmable LED display signs. Whether you need an outdoor fixed display, a flexible indoor screen, or a dynamic vehicle billboard, Nano Signs delivers high-brightness, energy-efficient solutions.",
    products: [
`;

for (const p of products) {
  newCategoryStr += `      {
        id: "${p.id}",
        name: "${p.name}",
        description: "${p.description}",
        image: "${p.image}",
        price: "${p.price}",
        config: {
          seoTitle: "${p.name} | Nano Signs",
          seoDescription: "Order premium ${p.name} from Nano Signs.",
          gallery: ["${p.image}"],
          features: [
            "High brightness and contrast",
            "Energy efficient LED technology",
            "Custom programmable options",
            "Weather resistant for outdoor models"
          ],
          ctaHeadline: "Get Your Custom LED Display",
          ctaBody: "Contact our team to get a quote on the ${p.name}.",
          ctaLabel: "Request Quote"
        }
      },\n`;
}

newCategoryStr += `    ]
  },
`;

// Insert before the last "};"
const insertIndex = content.lastIndexOf('};');
if (insertIndex > -1) {
  content = content.slice(0, insertIndex) + ',\n' + newCategoryStr + content.slice(insertIndex);
  fs.writeFileSync(registryPath, content);
  console.log('Successfully added led-display-signs to productsRegistry.ts');
} else {
  console.error('Could not find the end of PRODUCTS_REGISTRY object');
}
