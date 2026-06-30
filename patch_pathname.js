const fs = require('fs');
let content = fs.readFileSync('src/components/SignProductPage.tsx', 'utf8');

const replacement = `  const pathname = usePathname();
  const cfg = useMemo(() => {
    const merged = { ...originalCfg };
    const slug = pathname ? pathname.split('/').filter(Boolean).pop() : null;
    // Find the product in the registry by slug
    for (const catKey of Object.keys(PRODUCTS_REGISTRY)) {
      const cat = PRODUCTS_REGISTRY[catKey];
      for (const product of cat.products) {
        if (product.config && product.id === slug) {
          // Merge sizes
          if (product.config.sizes && merged.sizes) {
            merged.sizes = merged.sizes.map(size => {
              const regSize = product.config!.sizes!.find((s: any) => s.value === size.value);
              return regSize ? { ...size, basePrice: regSize.basePrice, quantityPrices: regSize.quantityPrices } : size;
            });
          }
          // Merge selects
          if (product.config.selects && merged.selects) {
            merged.selects = merged.selects.map(sel => {
              const regSel = product.config!.selects!.find((s: any) => s.label === sel.label);
              if (regSel) {
                return {
                  ...sel,
                  options: sel.options.map(opt => {
                    const regOpt = regSel.options.find((o: any) => o.value === opt.value);
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
  }, [originalCfg, pathname]);`;

content = content.replace(/  const cfg = useMemo\(\(\) => \{[\s\S]*?\}, \[originalCfg\]\);/m, replacement);

fs.writeFileSync('src/components/SignProductPage.tsx', content);
console.log('Patched correctly');
