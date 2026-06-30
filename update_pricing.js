const fs = require('fs');
const pricing = require('./src/lib/pricing.json');

// Tablecloths
pricing['tablecloths'] = {
  sizes: {
    "6ft": { basePrice: 200 },
    "8ft": { basePrice: 225 }
  },
  options: {
    "4sided": { priceAdder: 40 }, // 240 for 6ft, 260 for 8ft
    "stretch_single": { priceAdder: 65 }, // 265 for 6ft (200+65), 305 for 8ft (225+80) -> wait, sizePriceAdders better
    "fitted_single": { priceAdder: 55 }
  }
};
// Fix Tablecloths exactly
pricing['tablecloths'] = {
  sizes: {
    "6ft": { basePrice: 200 },
    "8ft": { basePrice: 225 }
  },
  options: {
    "3sided": { priceAdder: 0 },
    "4sided": { sizePriceAdders: { "6ft": 40, "8ft": 35 } },
    "stretch_single": { sizePriceAdders: { "6ft": 65, "8ft": 80 } },
    "fitted_single": { sizePriceAdders: { "6ft": 55, "8ft": 70 } }
  }
};

pricing['table-runners'] = {
  sizes: {
    "3x7": { basePrice: 135 },
    "4x7": { basePrice: 165 },
    "5x7": { basePrice: 195 }
  },
  options: {}
};

// Flags
pricing['flags'] = {
  sizes: {
    "small": { basePrice: 175 },
    "medium": { basePrice: 215 },
    "large": { basePrice: 260 }
  },
  options: {
    "feather": { priceAdder: 0 },
    "teardrop": { sizePriceAdders: { "small": 5, "medium": 5, "large": 0 } },
    "square": { sizePriceAdders: { "small": 55, "medium": 75, "large": 60 } },
    "single": { priceAdder: 0 },
    "double": { sizePriceAdders: { "small": 55, "medium": 55, "large": 70 } },
    "print_only_single": { sizePriceAdders: { "small": -65, "medium": -85, "large": -100 } },
    "print_only_double": { sizePriceAdders: { "small": 5, "medium": -5, "large": -20 } },
    "cross_base": { priceAdder: 70 },
    "ground_spike": { priceAdder: 80 },
    "water_bag": { priceAdder: 25 }
  }
};

// Vinyl Banners
pricing['vinyl-banners'] = {
  sizes: {
    "2x4": { basePrice: 45 },
    "3x6": { basePrice: 90 },
    "4x8": { basePrice: 160 }
  },
  options: {
    "13oz": { priceAdder: 0 },
    "15oz": { sizePriceAdders: { "2x4": 5, "3x6": 8, "4x8": 10 } }
  }
};

// Custom Postcards
pricing['custom-postcards'] = {
  sizes: {
    "4x6": {
      basePrice: 0.65,
      quantityPrices: { "100": 65, "250": 75, "500": 140, "750": 160, "1000": 170, "2500": 180, "5000": 250 }
    },
    "5x7": {
      basePrice: 0.75,
      quantityPrices: { "100": 75, "250": 95, "500": 155, "750": 180, "1000": 190, "2500": 210, "5000": 320 }
    },
    "6x9": {
      basePrice: 0.85,
      quantityPrices: { "100": 85, "250": 110, "500": 165, "750": 195, "1000": 220, "2500": 260, "5000": 450 }
    },
    "6x11": {
      basePrice: 0.95,
      quantityPrices: { "100": 95, "250": 120, "500": 185, "750": 210, "1000": 250, "2500": 350, "5000": 550 }
    }
  },
  options: {}
};

// Business Cards
pricing['business-cards'] = {
  sizes: {
    "3.5x2": {
      basePrice: 55,
      quantityPrices: { "100": 55, "500": 65, "1000": 85, "2500": 180, "5000": 205 }
    }
  },
  options: {
    "regular": { priceAdder: 0 },
    "gloss_lamination": {
      sizePriceAdders: { "100": 20, "500": 55, "1000": 75, "2500": 15, "5000": 5 }
    },
    "soft_touch": {
      sizePriceAdders: { "100": 40, "500": 65, "1000": 95, "2500": 30, "5000": 85 }
    },
    "painted_edge": {
      sizePriceAdders: { "100": 55, "500": 95, "1000": 165, "2500": 470, "5000": 600 }
    },
    "gold_foil": {
      sizePriceAdders: { "100": 65, "500": 120, "1000": 145, "2500": 200, "5000": 435 }
    },
    "silver_foil": {
      sizePriceAdders: { "100": 65, "500": 120, "1000": 145, "2500": 200, "5000": 435 }
    },
    "spot_uv": {
      sizePriceAdders: { "100": 30, "500": 55, "1000": 65, "2500": 80, "5000": 155 }
    },
    "pearl": {
      sizePriceAdders: { "100": 5, "500": 0, "1000": 65, "2500": 0, "5000": 0 }
    },
    "clear_plastic": {
      sizePriceAdders: { "100": 105, "500": 275, "1000": 465, "2500": 1020, "5000": 2095 }
    }
  }
};

// Pop-Up Displays
pricing['pop-up-displays'] = {
  sizes: {
    "7.5x7.5": { basePrice: 780 },
    "10x7.5": { basePrice: 920 }
  },
  options: {
    "premium": { priceAdder: 0 },
    "replacement": { sizePriceAdders: { "7.5x7.5": -420, "10x7.5": -500 } }
  }
};

// Backdrops
pricing['step-and-repeat-banner'] = {
  sizes: {
    "8x8": { basePrice: 330 },
    "10x7.5": { basePrice: 380 }
  },
  options: {
    "premium": { priceAdder: 0 },
    "replacement": { sizePriceAdders: { "8x8": -20, "10x7.5": -20 } },
    "vinyl": { sizePriceAdders: { "8x8": -180, "10x7.5": -210 } }
  }
};

// Real Estate Panels (Revert to Bulk Matrix as requested by PDF)
pricing['real-estate-panels'] = {
  sizes: {
    "20x24": {
      basePrice: 3.3,
      quantityPrices: { "100": 330, "200": 650, "300": 970 }
    }
  },
  options: {}
};

fs.writeFileSync('./src/lib/pricing.json', JSON.stringify(pricing, null, 2));
console.log('pricing.json updated successfully!');
