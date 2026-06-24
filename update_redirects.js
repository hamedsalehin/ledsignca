const fs = require('fs');

const redirectsToAdd = `
      { source: '/product-tag/outdoor-led-screen', destination: '/custom-signs', permanent: true },
      { source: '/support', destination: '/contact-us', permanent: true },
      { source: '/product/custom-t-shirt', destination: '/promotional-products', permanent: true },
      { source: '/product/bag-lawn-signs-yard-signs-by-rgb-sign-print', destination: '/custom-signs/yard-signs', permanent: true },
      { source: '/product/pylon-signs-and-all-about-pylon-signs-buy', destination: '/custom-signs', permanent: true },
      { source: '/quote-rental-industrial-led-displays-rgb-sign-print', destination: '/get-a-quote', permanent: true },
      { source: '/product/led-poster-smart-led-poster-1-416-8388994', destination: '/custom-signs', permanent: true },
      { source: '/about-us-citylight-group-citylight-sign', destination: '/about-us', permanent: true },
      { source: '/projects', destination: '/about-us', permanent: true },
      { source: '/product/led-channel-letters', destination: '/custom-signs/channel-letter-signs', permanent: true },
      { source: '/product/full-color-led-display-screen', destination: '/custom-signs', permanent: true },
      { source: '/install-led-channel', destination: '/about-us', permanent: true },
      { source: '/product/indoor-full-color-led-display-indoor4168388994', destination: '/custom-signs', permanent: true },
      { source: '/product/front-store-signs-and-all-about-front-store', destination: '/custom-signs', permanent: true },
      { source: '/product/single-color-programable-led-sign-led-screen', destination: '/custom-signs', permanent: true },
      { source: '/product/light-box-sign-custom-signage-services', destination: '/custom-signs/channel-letter-signs', permanent: true },
      { source: '/product/car-magnet-signs-led-signs-toronto', destination: '/vehicle-signs/magnetic-signs', permanent: true },
      { source: '/led-channel-letter', destination: '/custom-signs/channel-letter-signs', permanent: true },
      { source: '/product/full-color-programmable-led-display', destination: '/custom-signs', permanent: true },
      { source: '/product/light-box-sign-led-backlight-sign-illuminated', destination: '/custom-signs/channel-letter-signs', permanent: true },
      { source: '/product/full-color-led-scrolling-sign', destination: '/custom-signs', permanent: true },
      { source: '/product/banners-vinyl-fabric-mesh-rull-up-retractable', destination: '/custom-banners/vinyl-banners', permanent: true },
      { source: '/product/programmable-led-signs', destination: '/custom-signs', permanent: true },
      { source: '/product/full-color-custom-led-sign-board', destination: '/custom-signs', permanent: true },
      { source: '/product-tag/custom-plaza-pylon-signs', destination: '/custom-signs', permanent: true },
      { source: '/product/real-estate-signs-all-about-real-estate-signs', destination: '/custom-signs/real-estate-panels', permanent: true },
      { source: '/product-tag/cladding-pylon-sign', destination: '/custom-signs', permanent: true },
      { source: '/product/full-color-digital-display-screen', destination: '/custom-signs', permanent: true },
      { source: '/product-tag/led-poster-display', destination: '/custom-signs', permanent: true },
      // Catch-all for other old products
      { source: '/product/:slug', destination: '/custom-signs', permanent: true },
      { source: '/product-tag/:slug', destination: '/custom-signs', permanent: true },
    ];`;

let content = fs.readFileSync('next.config.js', 'utf8');

// Replace the end of the redirects array
content = content.replace(/    \];\n  \},\n\};\n\nmodule\.exports = nextConfig;/g, redirectsToAdd + '\n  },\n};\n\nmodule.exports = nextConfig;');

fs.writeFileSync('next.config.js', content, 'utf8');
console.log('Updated next.config.js with redirects');
