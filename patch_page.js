const fs = require('fs');
let content = fs.readFileSync('src/components/SignProductPage.tsx', 'utf8');

if (!content.includes('import { PRODUCTS_REGISTRY }')) {
  content = content.replace(
    'import { useAuth } from "./AuthContext";',
    'import { useAuth } from "./AuthContext";\nimport { PRODUCTS_REGISTRY } from "@/lib/productsRegistry";'
  );
}

const replacement = `export function SignProductPage({ cfg: originalCfg }: { cfg: ProductPageConfig }) {
  // Dynamically merge pricing from the central registry
  const cfg = useMemo(() => {
    const merged = { ...originalCfg };
    // Find the product in the registry by title
    for (const catKey of Object.keys(PRODUCTS_REGISTRY)) {
      const cat = PRODUCTS_REGISTRY[catKey];
      for (const product of cat.products) {
        if (product.config && product.config.title === originalCfg.title) {
          // Merge sizes
          if (product.config.sizes && merged.sizes) {
            merged.sizes = merged.sizes.map(size => {
              const regSize = product.config!.sizes!.find(s => s.value === size.value);
              return regSize ? { ...size, basePrice: regSize.basePrice, quantityPrices: regSize.quantityPrices } : size;
            });
          }
          // Merge selects
          if (product.config.selects && merged.selects) {
            merged.selects = merged.selects.map(sel => {
              const regSel = product.config!.selects!.find(s => s.label === sel.label);
              if (regSel) {
                return {
                  ...sel,
                  options: sel.options.map(opt => {
                    const regOpt = regSel.options.find(o => o.value === opt.value);
                    return regOpt ? { ...opt, priceAdder: regOpt.priceAdder, priceMultiplier: regOpt.priceMultiplier } : opt;
                  })
                };
              }
              return sel;
            });
          }
        }
      }
    }
    return merged;
  }, [originalCfg]);

  const [selectedSize, setSelectedSize] = useState(cfg.sizes[0]);`;

content = content.replace(
  `export function SignProductPage({ cfg }: { cfg: ProductPageConfig }) {\n  const [selectedSize, setSelectedSize] = useState(cfg.sizes[0]);`,
  replacement
);

// Fallback if previous replacement didn't match perfectly due to whitespace:
if (!content.includes('Dynamically merge pricing')) {
    content = content.replace(
        /export function SignProductPage\(\{ cfg \}: \{ cfg: ProductPageConfig \}\) \{[\s\S]*?const \[selectedSize, setSelectedSize\] = useState\(cfg\.sizes\[0\]\);/,
        replacement
    );
}

fs.writeFileSync('src/components/SignProductPage.tsx', content);
console.log('Patched SignProductPage.tsx');
