export function mergePricing(registry: any, pricing: any) {
  const clone = JSON.parse(JSON.stringify(registry));
  for (const catKey of Object.keys(clone)) {
    const cat = clone[catKey];
    for (const product of cat.products) {
       if (pricing[product.id] && product.config) {
           const pData = pricing[product.id];
           if (pData.sizes && product.config.sizes) {
               for (const size of product.config.sizes) {
                   if (pData.sizes[size.value]) {
                       if (pData.sizes[size.value].basePrice !== undefined) size.basePrice = pData.sizes[size.value].basePrice;
                       if (pData.sizes[size.value].quantityPrices !== undefined) size.quantityPrices = pData.sizes[size.value].quantityPrices;
                   }
               }
           }
           const handleOpts = (optsList: any[]) => {
               for (const select of optsList) {
                   for (const opt of select.options) {
                       const optKey = opt.value || opt.id || opt.label;
                       if (pData.options[optKey]) {
                           if (pData.options[optKey].priceAdder !== undefined) opt.priceAdder = pData.options[optKey].priceAdder;
                           if (pData.options[optKey].priceMultiplier !== undefined) opt.priceMultiplier = pData.options[optKey].priceMultiplier;
                           if (pData.options[optKey].sizePriceAdders !== undefined) opt.sizePriceAdders = pData.options[optKey].sizePriceAdders;
                       }
                   }
               }
           };
           if (product.config.selects) handleOpts(product.config.selects);
           if (product.config.toggleGroups) handleOpts(product.config.toggleGroups);
       }
    }
  }
  return clone;
}
