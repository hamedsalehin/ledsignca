const fs = require('fs');

const redirects = [
  { source: '/why-programmable-led-signs/', destination: '/blog/why-programmable-led-signs', permanent: true },
  { source: '/so-many-options-when-it-comes-down-to-brochures/', destination: '/blog/so-many-options-when-it-comes-down-to-brochures', permanent: true },
  { source: '/vinyl-printing-simplest-option-for-large-format-advertising/', destination: '/blog/vinyl-printing', permanent: true },
  { source: '/make-any-phrase-into-a-neon-sign-with-one-click/', destination: '/blog/make-any-phrase-into-a-neon-sign', permanent: true },
  { source: '/why-business-cards/', destination: '/blog/why-business-cards', permanent: true },
  { source: '/why-roll-up-banners/', destination: '/blog/why-roll-up-banners', permanent: true },
  { source: '/billboards/', destination: '/blog/billboards', permanent: true },
  { source: '/retractable-banners/', destination: '/blog/retractable-banners', permanent: true },
  { source: '/programmable-led-sign/', destination: '/led-display-signs', permanent: true },
  { source: '/billboards-and-their-impact-on-business/', destination: '/blog/billboards', permanent: true },
  { source: '/neon-sign/', destination: '/neon-signs', permanent: true },
  { source: '/metal-sign/', destination: '/custom-signs/metal-signs', permanent: true },
  { source: '/mesh/', destination: '/custom-banners', permanent: true },
  { source: '/led-channel-letter/', destination: '/custom-signs/channel-letters', permanent: true },
  { source: '/front-store-signs/', destination: '/custom-signs', permanent: true },
  { source: '/all-about-led-signs-toronto-4168388994/', destination: '/blog/all-about-led-signs', permanent: true },
  { source: '/led-panels-toronto/', destination: '/led-display-signs', permanent: true },
  { source: '/install-led-channel/', destination: '/custom-signs/channel-letters', permanent: true },
  { source: '/full-color-led-display-screen-citylight-sign/', destination: '/led-display-signs', permanent: true },
  { source: '/product-category/led-signs/', destination: '/led-display-signs', permanent: true },
  { source: '/product-category/printing/', destination: '/custom-printing', permanent: true },
  { source: '/product-category/custom-signs/', destination: '/custom-signs', permanent: true },
  { source: '/contact-rgb-sign-screen-sign-for-store-citylight-group/', destination: '/contact-us', permanent: true },
  { source: '/refund_returns/', destination: '/return-policy', permanent: true },
  { source: '/projects/', destination: '/projects', permanent: true },
  { source: '/support/', destination: '/contact-us', permanent: true },
  { source: '/request-quote/', destination: '/get-a-quote', permanent: true },
  { source: '/quote-rental-industrial-led-displays-rgb-sign-print/', destination: '/get-a-quote', permanent: true },
  { source: '/about-us-citylight-group-citylight-sign/', destination: '/about-us', permanent: true },
  { source: '/category/posts/', destination: '/blog', permanent: true },
  { source: '/products-led-sign-board/', destination: '/led-display-signs', permanent: true },
  { source: '/product/full-color-custom-led-sign-board/', destination: '/led-display-signs', permanent: true },
  { source: '/product/full-color-electronic-signs/', destination: '/led-display-signs', permanent: true },
  { source: '/product/full-color-programmable-led-display/', destination: '/led-display-signs', permanent: true },
  { source: '/product/full-color-digital-display-screen/', destination: '/led-display-signs', permanent: true },
  { source: '/product/full-color-led-scrolling-sign/', destination: '/led-display-signs', permanent: true },
  { source: '/product/full-color-led-display-screen/', destination: '/led-display-signs', permanent: true },
  { source: '/product/programmable-led-signs/', destination: '/led-display-signs', permanent: true },
  { source: '/product/car-magnet-signs-led-signs-toronto/', destination: '/custom-signs/car-magnets', permanent: true },
  { source: '/product/full-color-outdoor-led-sign/', destination: '/led-display-signs', permanent: true },
  { source: '/product/indoor-full-color-led-display-indoor4168388994/', destination: '/led-display-signs', permanent: true },
  { source: '/product/flyer/', destination: '/custom-printing', permanent: true },
  { source: '/product/light-box-sign-led-backlight-sign-illuminated/', destination: '/custom-signs/light-boxes', permanent: true },
  { source: '/product/brochure-printing-design-4168388994/', destination: '/custom-printing', permanent: true },
  { source: '/product/banners-vinyl-fabric-mesh-rull-up-retractable/', destination: '/custom-banners', permanent: true },
  { source: '/product/neon-led-signs-neon-sign-led-sign/', destination: '/neon-signs', permanent: true },
  { source: '/product/led-poster-smart-led-poster-1-416-8388994/', destination: '/led-display-signs', permanent: true },
  { source: '/product/pylon-signs-and-all-about-pylon-signs-buy/', destination: '/custom-signs/pylon-signs', permanent: true },
  { source: '/product/front-store-signs-and-all-about-front-store/', destination: '/custom-signs', permanent: true },
  { source: '/product/business-card-custom-design-toronto-4168388994/', destination: '/custom-printing', permanent: true },
  { source: '/product/bag-lawn-signs-yard-signs-by-rgb-sign-print/', destination: '/custom-signs/lawn-signs', permanent: true },
  { source: '/product/custom-t-shirt/', destination: '/custom-printing', permanent: true },
  { source: '/product/single-color-programable-led-sign-led-screen/', destination: '/led-display-signs', permanent: true },
  { source: '/product/car-wrap/', destination: '/custom-signs', permanent: true },
  { source: '/product/real-estate-signs-all-about-real-estate-signs/', destination: '/custom-signs/real-estate', permanent: true },
  { source: '/product/light-box-sign-custom-signage-services/', destination: '/custom-signs/light-boxes', permanent: true },
  { source: '/product/led-channel-letters/', destination: '/custom-signs/channel-letters', permanent: true },
];

let nextConfigStr = fs.readFileSync('next.config.js', 'utf8');

// Also handle the trailing slashes safely by adding a second redirect for each rule without the trailing slash if we want
let allRedirects = [];
redirects.forEach(r => {
  allRedirects.push(`      { source: "${r.source}", destination: "${r.destination}", permanent: true }`);
  if(r.source.endsWith('/')) {
    allRedirects.push(`      { source: "${r.source.slice(0, -1)}", destination: "${r.destination}", permanent: true }`);
  }
});

const injectString = '\n' + allRedirects.join(',\n') + ',';

nextConfigStr = nextConfigStr.replace('return [', 'return [' + injectString);

fs.writeFileSync('next.config.js', nextConfigStr);
