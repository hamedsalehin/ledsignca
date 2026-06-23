import { ProductPageConfig } from "@/components/SignProductPage";

export interface RegistryProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  hoverImage?: string;
  price: string;
  badge?: string;
  config: ProductPageConfig;
}

export interface RegistryCategory {
  title: string;
  description: string;
  heroImage: string;
  tabletHeroImage?: string;
  mobileHeroImage?: string;
  heroSubtitle?: string;
  breadcrumbLabel?: string;
  products: RegistryProduct[];
  categoryDescriptionText?: string;
  categorySecondaryImage?: string;
  faqs?: { q: string; a: string }[];
  reviewRating?: string;
  reviewCount?: string;
  reviewQuote?: string;
}

export const PRODUCTS_REGISTRY: Record<string, RegistryCategory> = {
  "custom-banners": {
    title: "Custom Banners",
    breadcrumbLabel: "Custom Banners",
    heroSubtitle: "Big Impact. Quick Production. Durable.",
    description:
      "High-quality custom banners for any occasion. From outdoor vinyl to professional retractable displays, we have the perfect solution for your business or event.",
    heroImage: "/images/products/main%20page/banners%20hero%20image.png",
    tabletHeroImage: "/images/products/main%20page/banners%20hero%20image.png",
    mobileHeroImage: "/images/products/main%20page/banners%20hero%20image.png",
    reviewRating: "4.9",
    reviewCount: "2,680",
    reviewQuote:
      "The vinyl banner quality blew us away — vivid colors, sturdy grommets, and it arrived the next day. Already reordering for our next event!",
    categoryDescriptionText:
      "Discover high-impact custom banners designed to capture attention in any setting. Whether you need heavy-duty outdoor vinyl banners to weather the elements, mesh banners for high-wind fences, premium fabric banners for trade shows, or retractable roll-up displays for quick events, we have you covered. All banners are printed using state-of-the-art printers with vibrant, fade-resistant UV inks.",
    categorySecondaryImage:
      "/images/products/main%20page/banners_desc.png",
    faqs: [
      {
        q: "What is the difference between vinyl and fabric banners?",
        a: "Vinyl banners are highly durable and water-resistant, making them ideal for outdoor advertising. Fabric banners offer a premium, non-glare matte finish which is excellent for indoor displays, photo backdrops, and trade shows. Fabric banners are also machine washable.",
      },
      {
        q: "Do the banners come with grommets for hanging?",
        a: "Yes, our vinyl and fabric banners come with optional metal brass grommets pre-installed around the perimeter at no extra charge, allowing for easy hanging with ropes, bungee cords, or zip ties.",
      },
      {
        q: "Are retractable banners suitable for outdoor use?",
        a: "Retractable banners are primarily designed for indoor use. They can be used outdoors in calm, dry weather, but wind can easily blow them over due to their lightweight standing structure.",
      },
    ],
    products: [
      {
        id: "vinyl-banners",
        name: "Vinyl Banners",
        description: "Durable and weather-resistant for indoor or outdoor use.",
        image: "/images/products/main%20page/vinyl_banner.png",
        price: "Starting at $12.99",
        badge: "Most Popular",
        config: {
          title: "Custom Vinyl Banners",
          subtitle:
            "Durable, waterproof, outdoor-rated vinyl banners complete with grommets or pole pockets.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF ALL VINYL BANNERS - SHIPS NEXT DAY",
          image: "/images/products/main%20page/vinyl_banner.png",
          ratingCount: "1,530",
          ratingScore: "4.8",
          sizes: [
            { label: "2' x 4' Small Banner", value: "24x48", basePrice: 12.99 },
            {
              label: "3' x 6' Standard Banner",
              value: "36x72",
              basePrice: 24.99,
            },
            { label: "4' x 8' Large Banner", value: "48x96", basePrice: 45.99 },
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                {
                  label: "13oz Standard Gloss Vinyl",
                  value: "13oz_gloss",
                  priceAdder: 0,
                },
                {
                  label: "15oz Premium Matte Vinyl",
                  value: "15oz_matte",
                  priceAdder: 5.0,
                },
              ],
            },
            {
              label: "Finishing Option",
              options: [
                {
                  label: "Brass Grommets (Every 2ft)",
                  value: "grommets",
                  priceAdder: 0,
                },
                {
                  label: "3-inch Pole Pockets",
                  value: "pockets",
                  priceAdder: 6.0,
                },
              ],
            },
          ],
          qtyDiscount: "Save up to 15% on bulk banner orders",
          keyFeatures: [
            "Waterproof & UV resistant",
            "Heat-welded hems for extra strength",
            "Vibrant full-color digital printing",
          ],
          useCases: [
            "Storefront advertising",
            "Outdoor events",
            "Grand openings",
            "Sponsorship banners",
          ],
          specs: [
            { key: "Material", value: "13oz or 15oz flexible PVC vinyl" },
            { key: "Print Resolution", value: "1440 DPI High Definition" },
            {
              key: "Outdoor Lifespan",
              value: "3-5 years in standard conditions",
            },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Ready to design your banner?",
          ctaBody:
            "Start designing online in minutes or upload your print-ready files.",
          ctaLabel: "Customize Vinyl Banner",
        },
      },
      {
        id: "fabric-banners",
        name: "Fabric Banners",
        description:
          "Dye-sub polyester with a premium, wrinkle-free matte finish.",
        image: "/images/products/main%20page/fabric_banner.png",
        price: "Starting at $45.99",
        badge: "Premium",
        config: {
          title: "Custom Fabric Banners",
          subtitle:
            "Dye-sublimation printed on premium wrinkle-free knit polyester fabric.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF PREMIUM FABRIC BANNERS",
          image: "/images/products/main%20page/fabric_banner.png",
          images: [
            "/images/products/main%20page/fabric_banner.png",
            "/images/products/gallery/fabric_banner_use_1.png",
            "/images/products/gallery/fabric_banner_use_1.png",
            "/images/products/gallery/fabric_banner_use_1.png",
          ],
          ratingCount: "980",
          ratingScore: "4.9",
          sizes: [
            { label: "2' x 6' Small Banner", value: "24x72", basePrice: 45.99 },
            {
              label: "3' x 8' Standard Banner",
              value: "36x96",
              basePrice: 74.99,
            },
            { label: "4' x 8' Large Banner", value: "48x96", basePrice: 94.99 },
          ],
          selects: [
            {
              label: "Fabric Material",
              options: [
                {
                  label: "Premium Dye-Sub Polyester",
                  value: "polyester",
                  priceAdder: 0,
                  description:
                    "Vibrant dye-sublimation on wrinkle-resistant, washable polyester.",
                },
                {
                  label: "Satin Fabric",
                  value: "satin",
                  priceAdder: 12.0,
                  description:
                    "Luxurious sheen with rich, deep colors. Ideal for upscale events.",
                },
                {
                  label: "Velvet Fabric",
                  value: "velvet",
                  priceAdder: 20.0,
                  description:
                    "Premium velvet texture for an elegant, high-end look.",
                },
              ],
            },
            {
              label: "Banner Stand Hardware",
              options: [
                { label: "No Stand", value: "none", priceAdder: 0 },
                { label: "X-Banner Stand", value: "x_stand", priceAdder: 35.0 },
                { label: "L-Banner Stand", value: "l_stand", priceAdder: 55.0 },
              ],
            },
          ],
          qtyDiscount: "Bulk savings apply",
          keyFeatures: [
            "Wrinkle-resistant knit polyester",
            "Dye-sub infused ink (never cracks or peels)",
            "Machine washable and reusable",
          ],
          useCases: [
            "Lobbies & offices",
            "Trade show backdrops",
            "Press releases",
            "Upscale retail window displays",
          ],
          specs: [
            { key: "Material", value: "100% Knit Polyester Fabric" },
            { key: "Printing Type", value: "Dye-Sublimation Heat Transfer" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Elevate your indoor displays",
          ctaBody:
            "Order a luxury fabric banner today for your business or corporate lobby.",
          ctaLabel: "Customize Fabric Banner",
        },
      },
      {
        id: "mesh-banners",
        name: "Mesh Banners",
        description:
          "Perforated vinyl that allows wind to pass through, ideal for fences.",
        image: "/images/products/main%20page/mesh_banner.png",
        price: "Starting at $42.99",
        badge: "Wind-Resistant",
        config: {
          title: "Custom Mesh Banners",
          subtitle:
            "Perforated vinyl mesh allows wind to blow right through, perfect for fence lines.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF ALL MESH FENCE BANNERS",
          image: "/images/products/main%20page/mesh_banner.png",
          ratingCount: "680",
          ratingScore: "4.8",
          sizes: [
            {
              label: "2' x 6' Small Fence Banner",
              value: "24x72",
              basePrice: 42.99,
            },
            {
              label: "3' x 8' Standard Fence Banner",
              value: "36x96",
              basePrice: 64.99,
            },
            {
              label: "4' x 8' Large Fence Banner",
              value: "48x96",
              basePrice: 84.99,
            },
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                {
                  label: "8oz Perforated Wind Mesh Vinyl",
                  value: "8oz_mesh",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume discounts for construction zones & boundaries",
          keyFeatures: [
            "70/30 air flow pass-through design",
            "Reduces wind load stress on fences",
            "Metal brass grommets included",
          ],
          useCases: [
            "Construction sites",
            "Sports field fences",
            "Scaffolding signs",
            "High-wind zones",
          ],
          specs: [{ key: "Material", value: "8oz PVC Mesh Vinyl" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Secure your mesh fence banner",
          ctaBody: "Print logos and renderings to fence lines.",
          ctaLabel: "Customize Mesh Banner",
        },
      },
      {
        id: "pole-banners",
        name: "Pole Banners",
        description:
          "Street-pole double sided banners with pockets for outdoor municipal displays.",
        image: "/images/products/main%20page/pole_banner.png",
        price: "Starting at $29.99",
        config: {
          title: "Custom Pole Banners",
          subtitle:
            "Double-sided heavy duty pole banners finished with pole pockets for light posts and boulevard mounts.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF STREET & BOULEVARD POLE BANNERS",
          image: "/images/products/main%20page/pole_banner.png",
          ratingCount: "210",
          ratingScore: "4.7",
          sizes: [
            {
              label: '18" x 36" Small Pole Banner',
              value: "36x18",
              basePrice: 29.99,
            },
            {
              label: '24" x 48" Standard Pole Banner',
              value: "48x24",
              basePrice: 49.99,
            },
            {
              label: '30" x 60" Large Pole Banner',
              value: "60x30",
              basePrice: 79.99,
            },
          ],
          selects: [
            {
              label: "Material Strength",
              options: [
                {
                  label: "18oz Double-Sided Blockout Vinyl",
                  value: "18oz_blockout",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Save up to 12% on municipal boulevard orders",
          keyFeatures: [
            "Heavy 18oz blockout vinyl prevents light show-through",
            "Double-sided prints",
            "Reinforced pole pocket sleeves",
          ],
          useCases: [
            "Main street lamppost decorations",
            "University campus wayfinding",
            "Seasonal city events",
          ],
          specs: [
            { key: "Material", value: "18oz Blockout Vinyl" },
            { key: "Finishing", value: '3" flat pole pockets on top & bottom' },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Decorate your boulevard poles",
          ctaBody: "Print double-sided advertising layouts today.",
          ctaLabel: "Customize Pole Banner",
        },
      },
      {
        id: "breakaway-banners",
        name: "Breakaway Banners",
        description:
          "Run-through spirit banners for sports games with center Velcro seam.",
        image: "/images/products/main%20page/breakaway_banner.png",
        price: "Starting at $34.99",
        config: {
          title: "Custom Breakaway Banners",
          subtitle:
            "Reusable sports run-through banners with Velcro center seams, perfect for team entrances.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF SCHOOL SPIRIT BREAKAWAYS",
          image: "/images/products/main%20page/breakaway_banner.png",
          ratingCount: "135",
          ratingScore: "4.8",
          sizes: [
            {
              label: "8' x 10' Run-Through Banner",
              value: "96x120",
              basePrice: 99.99,
            },
            {
              label: "10' x 12' Giant Team Banner",
              value: "120x144",
              basePrice: 149.99,
            },
          ],
          selects: [
            {
              label: "Pole Handles Finishing",
              options: [
                {
                  label: "Top/Bottom and Side Pole Pockets",
                  value: "sleeves",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Saves with booster club codes",
          keyFeatures: [
            "Reusable hook-and-loop center seam",
            "Vibrant school prints",
            "Heavy-duty matte blockout vinyl fabric",
          ],
          useCases: [
            "Football team stadium entry",
            "Pep rallies",
            "High school sports events",
          ],
          specs: [
            {
              key: "Velcro Seams",
              value: "Double stitched hook-and-loop strip center",
            },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Ignite team spirit",
          ctaBody: "Design a reusable sports breakaway banner.",
          ctaLabel: "Customize Breakaway",
        },
      },
      {
        id: "vertical-banners",
        name: "Vertical Banners",
        description:
          "Hanging vertical banners for slim storefront pillars or corridor walls.",
        image: "/images/products/main%20page/vertical_banner.png",
        price: "Starting at $19.99",
        config: {
          title: "Custom Vertical Banners",
          subtitle:
            "Stately vertical hanging banners for column displays, storefront pillars, and lobby announcements.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF VERTICAL SIGNS & BANNERS",
          image: "/images/products/main%20page/vertical_banner.png",
          ratingCount: "290",
          ratingScore: "4.7",
          sizes: [
            {
              label: "2' x 6' Vertical Banner",
              value: "72x24",
              basePrice: 19.99,
            },
            {
              label: "3' x 8' Large Vertical Banner",
              value: "96x36",
              basePrice: 34.99,
            },
          ],
          selects: [
            {
              label: "Lamination",
              options: [
                {
                  label: "High Gloss Lamination",
                  value: "gloss",
                  priceAdder: 0,
                },
                {
                  label: "Velvet Matte Finish",
                  value: "matte",
                  priceAdder: 3.5,
                },
              ],
            },
          ],
          qtyDiscount: "Volume tiers starting at 5+ banners",
          keyFeatures: [
            "Space-efficient design",
            "Reinforced corner grommets included",
            "Indoor and outdoor weather-safe",
          ],
          useCases: [
            "Storefront entrance pillars",
            "Indoor corridor directions",
            "Trade show stand fillers",
          ],
          specs: [{ key: "Orientation", value: "Strict vertical layout" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Design vertical banner displays",
          ctaBody:
            "Fill vertical pillar assets with clean logos and phone markers.",
          ctaLabel: "Customize Vertical Banner",
        },
      },
      {
        id: "roll-up-banners",
        name: "Retractable Banners",
        description: "Portable and easy to set up for trade shows and events.",
        image: "/images/products/main%20page/retractable_roll_up_banner.png",
        price: "Starting at $89.00",
        badge: "Best Seller",
        config: {
          title: "Retractable Banners (Roll Up)",
          subtitle:
            "Portable stand and pre-installed banner, rolls up in seconds for easy transport.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF RETRACTABLE ROLL-UP BANNERS",
          image: "/images/products/main%20page/retractable_roll_up_banner.png",
          images: [
            "/images/products/main%20page/retractable_roll_up_banner.png",
            "/images/products/gallery/retractable_use_1.png",
            "/images/products/gallery/retractable_use_2.png",
            "/images/products/gallery/retractable_use_3.png",
          ],
          ratingCount: "1240",
          ratingScore: "4.9",
          sizes: [
            {
              label: '33" x 80" Standard Stand Size',
              value: "33x80",
              basePrice: 89.00,
            },
            {
              label: '46" x 80" Vertical Size',
              value: "46x80",
              basePrice: 220.00,
            },
          ],
          selects: [
            {
              label: "Stand Option",
              options: [
                {
                  label: "Standard Silver Cassette Stand",
                  value: "standard_stand",
                  priceAdder: 0,
                },
                {
                  label: "Black Standard Plus Stand",
                  value: "black_plus",
                  priceAdder: 13.5,
                },
                {
                  label: "Professional Luxury Stand",
                  value: "professional",
                  priceAdder: 19.5,
                },
              ],
            },
          ],
          qtyDiscount: "Bulk discounts starting at 2 or more banners",
          bulkDiscounts: [
            { minQty: 2, discountPercent: 5 },
            { minQty: 5, discountPercent: 10 },
            { minQty: 10, discountPercent: 15 },
            { minQty: 25, discountPercent: 20 },
          ],
          keyFeatures: [
            "Sturdy aluminum base container",
            "Padded carrying case included",
            "Setup in under 60 seconds",
            "Anti-curl curl-free polyester film",
          ],
          useCases: [
            "Trade show booths",
            "Corporate lobbies",
            "Retail announcements",
            "Presentations",
          ],
          specs: [
            { key: "Weight", value: "Approximately 7-10 lbs including stand" },
            { key: "Display Size", value: '79" x 33" (Standard) or 80" x 46" (Large)' },
            {
              key: "Hardware",
              value: "Anodized aluminum body with fold-out feet",
            },
          ],
          description: `Maximize your brand visibility at trade shows, retail storefronts, conferences, and exhibitions with our premium Custom Retractable Roll Up Banners. These portable banner displays are the gold standard for high-impact offline marketing, offering a seamless blend of durability, convenience, and visual appeal. 

Every retractable banner stand comes pre-assembled with your custom-printed graphic rolled inside a sturdy, lightweight aluminum cassette. Setup takes under 60 seconds—simply extend the vertical support pole, pull up the banner graphic, and lock it into place. Whether you need custom trade show signage or a permanent retail display, our roll up stands are built to last.

Our banners are printed on curl-free, light-blocking polyester grayback film. This prevents the edges of the banner from curling over time and ensures that light does not shine through from behind, keeping your message fully legible under bright exhibition lights. With next-day banner printing options, we help you get event-ready at a moment's notice.

Why Choose Our Professional Rollup Banners?
- Premium Anti-Curl Material: Printed on smooth, opaque blockout film for a clean, flat presentation.
- Heavy-Duty Cassette: Anodized aluminum base with fold-out stabilizing feet for reliable outdoor and indoor standee stability.
- Effortless Portability: A padded travel carrying case is included with every order, making transportation a breeze.
- Dynamic Visual Impact: High-resolution UV printing at 1440 DPI delivers vivid, fade-resistant colors that stand out across crowded halls.`,
          faqs: [
            {
              q: "How do I set up a retractable roll up banner?",
              a: "Setting up your pull up banner is incredibly simple. Unpack the aluminum base, turn out the stabilizing feet, insert the support pole into the base slot, and then pull the banner up gently and attach it to the top hook of the pole. The entire process takes less than a minute.",
            },
            {
              q: "What material is used for the rollup banner graphic?",
              a: "We use a premium curl-free polyester film with a blockout greyback coating. This professional material ensures your graphics remain completely flat and prevents rear light show-through, ensuring maximum legibility under bright trade show lighting.",
            },
            {
              q: "Can I replace the banner graphic in my existing retractable stand?",
              a: "Yes, the graphic can be replaced, but it requires tensioning the internal spring mechanism of the aluminum cassette. We recommend sending it to our print facility or purchasing a new stand bundle for the best results.",
            },
            {
              q: "What is the difference between standard and professional stands?",
              a: "Standard stands feature swing-out stabilizing feet that extend from the front and back of the aluminum base. Professional luxury stands have a wider, heavier teardrop-shaped base that stands stable on its own without visible swing-out feet, offering a cleaner look.",
            },
            {
              q: "Is the roll up banner suitable for outdoor use?",
              a: "Retractable banners are designed primarily for indoor applications. They can be used outdoors in calm, dry conditions, but because of their tall profile, wind can act as a sail and tip the stand. For outdoor promotions, we recommend our heavy-duty feather flags or mesh banners.",
            },
          ],
          reviews: [
            {
              author: "Marcus K., Event Director",
              rating: 5,
              text: "The custom rollup banner exceeded our expectations. The greyback film is completely blockout and doesn't curl at all. Set up was a breeze at our conference booth.",
            },
            {
              author: "Sarah J., Retail Manager",
              rating: 5,
              text: "Absolute lifesaver! Ordered with next day banner printing and it arrived right on time for our store opening. The print colors are stunningly bright.",
            },
            {
              author: "David T., Startup Founder",
              rating: 5,
              text: "Excellent quality trade show banner stand. We've used it at three separate events now and the aluminum retracting mechanism still works perfectly.",
            },
          ],
          ctaHeading: "Ready to make an impression?",
          ctaBody:
            "Order a retractable banner stand and roll out your messages quickly.",
          ctaLabel: "Customize Retractable Banner",
        },
      },
      {
        id: "x-banner-stands",
        name: "X-Banner Stands",
        description:
          "Collapsible lightweight cross stands with custom printed corner-grommet banners.",
        image: "/images/products/main%20page/x_banner_stand.png",
        price: "Starting at $49.99",
        config: {
          title: "X-Frame Banner Stands",
          subtitle:
            "Highly cost-effective standing banners utilizing tension fiberglass arms to pull banner corners taut.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF BUDGET X-BANNER DISPLAYS",
          image: "/images/products/main%20page/x_banner_stand.png",
          ratingCount: "385",
          ratingScore: "4.7",
          sizes: [
            {
              label: '24" x 63" Small X-Stand',
              value: "63x24",
              basePrice: 49.99,
            },
            {
              label: '31" x 70" Large X-Stand',
              value: "70x31",
              basePrice: 69.99,
            },
          ],
          selects: [
            {
              label: "Frame Assembly",
              options: [
                {
                  label: "Include Fiberglass X-Stand & Carrying Bag",
                  value: "full_kit",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Saves up to 15% on bulk packages",
          keyFeatures: [
            "Lightweight carbon-fiberglass frame legs",
            "Super easy backdrop replacements",
            "4 grommeted corners attach to pegs",
          ],
          useCases: [
            "Product marketing roll-outs",
            "Retail storefronts",
            "Special church events",
            "Expositions",
          ],
          specs: [{ key: "Material", value: "13oz Matte PVC Vinyl" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Promote on a budget",
          ctaBody: "Order lightweight X-stands that fold down flat in seconds.",
          ctaLabel: "Customize X-Stand Banner",
        },
      },
      {
        id: "step-and-repeat-banners",
        name: "Backdrop Banners",
        description:
          "Ideal for red carpet events, photo backdrops and press conferences.",
        image: "/images/products/main%20page/backdrop_banners.png",
        price: "Starting at $145.99",
        badge: "Event Ready",
        config: {
          title: "Backdrop Banners",
          subtitle:
            "Professional background banners for press walls, photo shoots, and red carpets.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF STEP AND REPEAT PRESS WALLS",
          image: "/images/products/main%20page/backdrop_banners.png",
          images: [
            "/images/products/main%20page/backdrop_banners.png",
            "/images/products/gallery/step_repeat_use_1.png",
            "/images/products/gallery/step_repeat_use_2.png",
            "/images/products/gallery/step_repeat_use_3.png",
          ],
          ratingCount: "430",
          ratingScore: "4.8",
          sizes: [
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
          ],
          selects: [
            {
              label: "Adjustable Backdrop Stand Hardware",
              options: [
                {
                  label: "Include Adjustable Backdrop Stand",
                  value: "with_stand",
                  priceAdder: 95.0,
                },
                {
                  label: "Banner Print Only (No Stand)",
                  value: "banner_only",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Event planner package discounts available",
          keyFeatures: [
            "Large seamless backdrops",
            "Pole pockets on top & bottom for mounting",
            "Glariess matte finish ensures clear photography",
          ],
          useCases: [
            "Press conferences",
            "Red carpet arrivals",
            "Wedding photo booths",
            "Corporate events",
          ],
          specs: [{ key: "Material", value: "15oz Blockout Matte Vinyl" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Create your logo background backdrop",
          ctaBody:
            "Upload your sponsor logos and create repeated patterns instantly.",
          ctaLabel: "Customize Backdrop",
        },
      },
      {
        id: "tabletop-retractable-banners",
        name: "Tabletop Retractables",
        description:
          "Miniature counter-top roll up banners for checkout registries and lobbies.",
        image: "/images/products/main%20page/tabletop_retractable.jpg",
        price: "Starting at $29.99",
        config: {
          title: "Tabletop Retractable Banners",
          subtitle:
            "Mini roll-up banners designed to sit on tables, point-of-sale registers, and service desks.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF TABLETOP RETRACTABLE DISPLAYS",
          image: "/images/products/main%20page/tabletop_retractable.jpg",
          ratingCount: "420",
          ratingScore: "4.8",
          sizes: [
            {
              label: '11.75" x 17" A3 Size Mini Stand',
              value: "17x11.75",
              basePrice: 39.99,
            },
            {
              label: '8.25" x 11.5" A4 Size Micro Stand',
              value: "11.5x8.25",
              basePrice: 29.99,
            },
          ],
          selects: [
            {
              label: "Base Housing",
              options: [
                {
                  label: "Miniature Silver Aluminum Base",
                  value: "mini_silver",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume counter-top rates starting at 10+",
          keyFeatures: [
            "Fits compact desk spaces",
            "Retracts into a tiny housing for travel",
            "Smooth banner film ensures high detail readability",
          ],
          useCases: [
            "Counter checkout promotions",
            "Hotel registration desks",
            "Restaurant menus",
            "Job fair table displays",
          ],
          specs: [
            {
              key: "Print Film",
              value: "8mil thick smooth polypropylene film",
            },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Maximize register branding",
          ctaBody: "Order mini tabletop roll-up stands today.",
          ctaLabel: "Customize Mini Roll-Up",
        },
      },
    ],
  },
  "custom-flags": {
    title: "Custom Flags",
    breadcrumbLabel: "Custom Flags",
    heroSubtitle: "All-Weather. Quick Production. Affordable.",
    description:
      "Catch the attention of passing traffic with high-impact outdoor flags. Perfect for grand openings, store front promotions, and events.",
    heroImage: "/images/products/main%20page/nano hero flag section.png",
    tabletHeroImage: "/images/products/main%20page/nano hero flag section.png",
    mobileHeroImage: "/images/products/main%20page/nano hero flag section.png",
    reviewRating: "4.8",
    reviewCount: "1,920",
    reviewQuote:
      "The feather flags are so vibrant and eye-catching! Setup was effortless and they've survived multiple rainstorms without any fading.",
    categoryDescriptionText:
      "Draw crowds and increase outdoor visibility with premium custom flags printed to last. Designed to withstand wind, rain, and intense sun, our custom advertising flags are constructed from lightweight, high-density knit polyester that ensures rich colors and single or double-sided visibility. Complete with heavy-duty composite fiberglass poles and ground stakes or solid steel cross stands.",
    categorySecondaryImage: "/images/products/main%20page/flags_desc.png",
    faqs: [
      {
        q: "What types of custom flags do you offer?",
        a: "We offer a wide range of custom flags to suit any need, including standing styles like feather flags, teardrop flags, straight flags, and stick flags, as well as hanging options like standard flags and pennant flags.",
      },
      {
        q: "Can I customize both the design and size of my flag?",
        a: "Yes! Our online design tools let you fully customize your flag’s artwork, and we offer a variety of sizes to match your intended use whether it’s for outdoor promotions, indoor displays, or handheld use.",
      },
      {
        q: "What accessories are available for displaying custom flags?",
        a: "We carry a full line of accessories, including outdoor base kits, auger and drive-over bases, indoor flag stands, telescopic handheld poles, spinner poles, and adjustable aluminum brackets to suit any display environment.",
      },
      {
        q: "Are your custom flags suitable for both indoor and outdoor use?",
        a: "Yes! Our custom flags are made with high-quality, durable materials that perform well outdoors in various weather conditions. They're also great for indoor settings like trade shows, storefronts, lobbies, and events. With a wide selection of bases and mounting options, you can easily display your flag wherever you need it.",
      },
      {
        q: "Do your flags come with hardware or do I need to purchase that separately?",
        a: "Many of our flags have optional hardware bundles, but accessories like bases and poles are typically sold separately so you can mix and match based on your needs. Be sure to check the product description for bundling options.",
      },
      {
        q: "Do you offer design assistance for custom flags?",
        a: "Yes! You can start from scratch, use one of our templates, or upload your own artwork. If you need help, our customer support team is happy to assist with setup and design tips.",
      },
    ],
    products: [
      {
        id: "feather-flags",
        name: "Feather Flags",
        description:
          "Eye-catching fluttering flags designed to draw crowds from the roadside.",
        image: "/images/products/main%20page/feather_flag.png",
        price: "Starting at $80.00",
        badge: "Best Seller",
        config: {
          title: "Custom Feather Flags",
          subtitle:
            "Outdoor advertising flags printed on durable knit polyester, complete with poles and hardware.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF ALL ADVERTISING FLAGS - SHIPS NEXT DAY",
          image: "/images/products/main%20page/feather_flag.png",
          ratingCount: "820",
          ratingScore: "4.8",
          sizes: [
            {
              label: "9ft Feather Flag",
              value: "9ft",
              basePrice: 80.00,
            },
            {
              label: "10ft Feather Flag",
              value: "10ft",
              basePrice: 100.00,
            },
            {
              label: "13ft Feather Flag",
              value: "13ft",
              basePrice: 110.00,
            },
            {
              label: "16ft Feather Flag",
              value: "16ft",
              basePrice: 130.00,
            },
          ],
          selects: [
            {
              label: "Pole Option",
              options: [
                {
                  label: "No Pole (Flag Fabric Only)",
                  value: "no_pole",
                  priceAdder: 0,
                  description: "Select if you already have a pole.",
                },
                {
                  label: "Include Pole (+$35.00)",
                  value: "pole",
                  priceAdder: 35.00,
                  description: "Premium carbon-fiberglass pole.",
                },
              ],
            },
            {
              label: "Base Option",
              options: [
                {
                  label: "No Base",
                  value: "no_base",
                  priceAdder: 0,
                },
                {
                  label: "Ground Stake (+$40.00)",
                  value: "stake",
                  priceAdder: 40.00,
                  description: "Classic stake for soil or grass.",
                },
                {
                  label: "Cross Base (+$55.00)",
                  value: "cross",
                  priceAdder: 55.00,
                  description: "Standard folding cross base.",
                },
                {
                  label: "CS-01 Metal Cross Base (+$65.00)",
                  value: "cs01",
                  priceAdder: 65.00,
                  description: "Heavy duty metal cross base.",
                },
                {
                  label: "CS-02 Cross Base (+$45.00)",
                  value: "cs02",
                  priceAdder: 45.00,
                  description: "Standard economy cross base.",
                },
                {
                  label: "GS-01 Ground Spike (+$45.00)",
                  value: "gs01",
                  priceAdder: 45.00,
                  description: "Heavy duty ground spike.",
                },
              ],
            },
            {
              label: "Water Bag Option",
              options: [
                {
                  label: "No Water Bag",
                  value: "no_water_bag",
                  priceAdder: 0,
                },
                {
                  label: "Water Bag (+$10.00)",
                  value: "water_bag_10",
                  priceAdder: 10.00,
                  description: "Adds stability for cross bases.",
                },
                {
                  label: "WF-08 Water Bag (+$14.00)",
                  value: "wf08",
                  priceAdder: 14.00,
                  description: "Premium donut water weight bag.",
                },
              ],
            },
            {
              label: "Carry Bag Option",
              options: [
                {
                  label: "No Carry Bag",
                  value: "no_carry_bag",
                  priceAdder: 0,
                },
                {
                  label: "Flag Carry Bag (+$45.00)",
                  value: "carry_bag",
                  priceAdder: 45.00,
                  description: "Convenient travel bag for hardware.",
                },
              ],
            },
            {
              label: "Flag Material & Build",
              options: [
                {
                  label: "Premium Polyester Knit",
                  value: "standard",
                  priceAdder: 0,
                  description:
                    "Lightweight mesh fabric designed for wind flow.",
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Print Direction",
              options: [
                {
                  id: "single",
                  label: "Single-Sided (Show through)",
                  priceAdder: 0,
                  description: "Design printed on one side, mirrored on back.",
                },
                {
                  id: "double",
                  label: "Double-Sided (Three layers)",
                  priceAdder: 150.00,
                  sizePriceAdders: {
                    "9ft": 150.00,
                    "10ft": 150.00,
                    "13ft": 160.00,
                    "16ft": 160.00,
                  },
                  description:
                    "Two separate prints with blocker liner in between.",
                },
              ],
            },
          ],
          qtyDiscount: "Save up to 10% on bulk quantities",
          keyFeatures: [
            "Fluttering wind-resistant design",
            "Dye-sublimation high-contrast printing",
            "Flexible fiberglass poles",
            "Carrying bag included",
          ],
          useCases: [
            "Business storefronts",
            "Grand openings",
            "Car dealerships",
            "Outdoor sporting events",
          ],
          specs: [
            { key: "Material", value: "110g Knit Polyester" },
            {
              key: "Pole Material",
              value: "Premium carbon-fiberglass telescoping poles",
            },
            { key: "DPI", value: "720 DPI High density print" },
            { key: "Wind Rating", value: "Up to 30 MPH wind gusts" },
          ],
          faqs: [
            {
              q: "Do these flags rotate in the wind?",
              a: "Yes, our flagpole hardware includes a rotating spindle that allows the flag to pivot 360 degrees to face the oncoming breeze.",
            },
            {
              q: "How long do feather flags last outdoors?",
              a: "With normal day-to-day weather, outdoor flag fabrics last about 6 to 12 months. We recommend taking them inside during severe storms.",
            },
          ],
          reviews: [
            {
              author: "Marcus G.",
              rating: 5,
              text: "Excellent height and print resolution. Brought people in for our bakery open house immediately!",
            },
          ],
          ctaHeading: "Ready to capture passing traffic?",
          ctaBody:
            "Design your custom feather flag now and start turning drivers into customers.",
          ctaLabel: "Customize Flag",
        },
      },
      {
        id: "teardrop-flags",
        name: "Teardrop Flags",
        description:
          "Elegant teardrop shape that remains taut and visible even in low wind conditions.",
        image: "/images/products/main%20page/teardrop_flag.png",
        price: "Starting at $49.68",
        config: {
          title: "Custom Teardrop Flags",
          subtitle:
            "Beautiful drop-shaped flags designed to stay open and display your logo clearly.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF ALL TEARDROP FLAGS",
          image: "/images/products/main%20page/teardrop_flag.png",
          ratingCount: "432",
          ratingScore: "4.7",
          sizes: [
            {
              label: "7ft Small Teardrop Flag",
              value: "84x30",
              basePrice: 49.68,
            },
            {
              label: "9ft Medium Teardrop Flag",
              value: "108x35",
              basePrice: 74.99,
            },
            {
              label: "11ft Large Teardrop Flag",
              value: "132x40",
              basePrice: 109.99,
            },
          ],
          selects: [
            {
              label: "Base Mount Option",
              options: [
                { label: "Ground Stake", value: "stake", priceAdder: 0 },
                { label: "Cross Base", value: "cross", priceAdder: 15.0 },
              ],
            },
          ],
          qtyDiscount: "Bulk discounts available",
          keyFeatures: [
            "Stiff teardrop loop structure",
            "Resists flapping noises",
            "Great for indoor trade shows",
            "Durable outdoor knit polyester",
          ],
          useCases: [
            "Corporate events",
            "Store entrances",
            "Sports tournaments",
            "Lobbies",
          ],
          specs: [
            { key: "Material", value: "110g Knit Polyester" },
            { key: "Pole Structure", value: "Flexible composite fiber poles" },
          ],
          faqs: [
            {
              q: "Why choose a teardrop flag?",
              a: "Teardrop flags remain fully tensioned, meaning your branding doesn't wrinkle or fold away even when there is no wind.",
            },
          ],
          reviews: [
            {
              author: "Samantha L.",
              rating: 5,
              text: "The print colors are very rich. Easy to assemble, and looks extremely professional.",
            },
          ],
          ctaHeading: "Get noticed with a teardrop flag",
          ctaBody:
            "Start designing online in minutes and make a bold statement.",
          ctaLabel: "Customize Teardrop Flag",
        },
      },
      {
        id: "straight-flags",
        name: "Straight Flags",
        description:
          "Classic rectangular standing flags that offer a large design canvas.",
        image: "/images/products/main%20page/straight_flag.png",
        price: "Starting at $54.37",
        config: {
          title: "Custom Straight Flags",
          subtitle:
            "Stately rectangular standing flags perfect for business branding and signage.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF STRAIGHT ADVERTISING FLAGS",
          image: "/images/products/main%20page/straight_flag.png",
          ratingCount: "295",
          ratingScore: "4.7",
          sizes: [
            {
              label: "8ft Small Straight Flag",
              value: "96x24",
              basePrice: 54.37,
            },
            {
              label: "10.5ft Medium Straight Flag",
              value: "126x28",
              basePrice: 79.99,
            },
            {
              label: "14ft Large Straight Flag",
              value: "168x30",
              basePrice: 119.99,
            },
          ],
          selects: [
            {
              label: "Hardware Base",
              options: [
                { label: "Ground Spike", value: "spike", priceAdder: 0 },
                { label: "Cross Base", value: "cross", priceAdder: 15.0 },
              ],
            },
          ],
          qtyDiscount: "Volume discounts apply",
          keyFeatures: [
            "Max advertising real estate",
            "Strong steel frames",
            "Double stitched hems",
          ],
          useCases: ["Auto dealerships", "Real estate sites", "Festivals"],
          specs: [{ key: "Material", value: "110g Knit Polyester" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Design your straight flag",
          ctaBody: "Build your custom flag using our online template catalog.",
          ctaLabel: "Customize Straight Flag",
        },
      },
      {
        id: "flags",
        name: "Standard Flags",
        description:
          "Classic horizontal flags with brass grommets, perfect for flagpoles or hanging.",
        image: "/images/products/main%20page/flags.png",
        price: "Starting at $38.43",
        config: {
          title: "Standard Custom Flags",
          subtitle:
            "Fly your colors proud on standard flagpoles, indoor walls, or events.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF CUSTOM HANGING FLAGS",
          image: "/images/products/main%20page/flags.png",
          images: [
            "/images/products/main%20page/flags.png",
            "/images/products/gallery/flag_use_1.png",
            "/images/products/gallery/flag_use_1.png",
            "/images/products/gallery/flag_use_1.png",
          ],
          ratingCount: "612",
          ratingScore: "4.8",
          sizes: [
            {
              label: "3' x 5' Standard Flag",
              value: "36x60",
              basePrice: 38.43,
            },
            { label: "2' x 3' Small Flag", value: "24x36", basePrice: 24.99 },
            { label: "4' x 6' Large Flag", value: "48x72", basePrice: 59.99 },
          ],
          selects: [
            {
              label: "Finishing Option",
              options: [
                {
                  label: "Metal Brass Grommets on Left",
                  value: "grommets",
                  priceAdder: 0,
                },
                {
                  label: "3-inch Pole Sleeve",
                  value: "sleeve",
                  priceAdder: 5.0,
                },
              ],
            },
          ],
          qtyDiscount: "Buy in bulk and save",
          keyFeatures: [
            "Heavy duty canvas header",
            "Rust-proof brass grommets",
            "Lightweight polyester mesh flys easily",
          ],
          useCases: [
            "Business flags",
            "Schools and clubs",
            "Personal/residential poles",
          ],
          specs: [{ key: "Material", value: "115g Polyester Mesh" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Design your custom flagpole flag",
          ctaBody:
            "Upload your crest, company emblem, or art to start printing today.",
          ctaLabel: "Customize Flag",
        },
      },
      {
        id: "pennant-flags",
        name: "Pennant Flags",
        description:
          "Triangular pennant flags for sports teams, schools, and festive string lines.",
        image: "/images/products/main%20page/pennant_flag.png",
        price: "Starting at $51.11",
        config: {
          title: "Custom Pennant Flags",
          subtitle:
            "Triangle flag pennants for schools, spirit events, and custom promotions.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF SPIRIT PENNANTS",
          image: "/images/products/main%20page/pennant_flag.png",
          ratingCount: "140",
          ratingScore: "4.7",
          sizes: [
            {
              label: "3' x 5' Triangle Pennant",
              value: "36x60",
              basePrice: 51.11,
            },
          ],
          selects: [
            {
              label: "Finishing",
              options: [
                { label: "Grommets", value: "grommets", priceAdder: 0 },
                { label: "Pole Sleeve", value: "sleeve", priceAdder: 5.0 },
              ],
            },
          ],
          qtyDiscount: "Bulk school discounts available",
          keyFeatures: [
            "Unique triangular shape",
            "Vibrant dye-sub printing",
            "Indoor/outdoor versatile",
          ],
          useCases: [
            "School gymnasiums",
            "Sports team tailgates",
            "Promotional strings",
          ],
          specs: [{ key: "Material", value: "Knit Polyester" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Create your team pennant",
          ctaBody: "Customize your sports pennant with team logos and colors.",
          ctaLabel: "Customize Pennant",
        },
      },
    ],
  },
  "vehicle-signs": {
    title: "Custom Vehicle Signs",
    breadcrumbLabel: "Vehicle Signs",
    heroSubtitle: "Every Mile is an Opportunity.",
    description:
      "Turn any vehicle into a mobile billboard. Promote your business on the go with custom car magnets, decals, and truck lettering.",
    heroImage: "/images/products/main%20page/magnet_hero_image.jpeg",
    tabletHeroImage: "/images/products/main%20page/magnet_hero_image.jpeg",
    mobileHeroImage: "/images/products/main%20page/magnet_hero_image.jpeg",
    reviewRating: "4.9",
    reviewCount: "2,150",
    reviewQuote:
      "Our fleet car magnets look incredibly professional. They stick perfectly at highway speeds and the print quality is showroom-grade.",
    categoryDescriptionText:
      "Make every commute count with durable vehicle signs custom-built to stand out. Nano Signs provides the options you need, from removable vehicle magnets and regulation door decals to bumper stickers and license plates. All vehicle products are constructed from high-grade vinyl and magnetic sheeting designed to hold tight at highway speeds and resist sun damage.",
    categorySecondaryImage: "/images/products/main%20page/vehicle_signs_desc.png",
    faqs: [
      {
        q: "Will car magnets stick to aluminum vehicle panels?",
        a: "No, magnets only attract steel doors. Make sure to test your door with a kitchen magnet before purchasing.",
      },
      {
        q: "Are vehicle decals easy to remove?",
        a: "Yes. They can be removed by applying gentle heat from a hairdryer and peeling back, without damaging factory car paint.",
      },
    ],
    products: [
      {
        id: "bumper-stickers",
        name: "Bumper Stickers",
        description:
          "Classic adhesive labels for car bumpers and windows. High visibility branding.",
        image: "/images/products/main%20page/bumper_sticker.png",
        price: "Starting at $2.24",
        config: {
          title: "Custom Bumper Stickers",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Standard bumper stickers printed on waterproof, UV-proof outdoor vinyl adhesive.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF BUMPER STICKERS",
          image: "/images/products/main%20page/bumper_sticker.png",
          ratingCount: "850",
          ratingScore: "4.8",
          sizes: [
            {
              label: '3" x 10" Rectangle Bumper Sticker',
              value: "3x10",
              basePrice: 2.24,
            },
            { label: '4" x 4" Circle Sticker', value: "4x4", basePrice: 3.49 },
          ],
          selects: [
            {
              label: "Finish Options",
              options: [
                {
                  label: "High Gloss Protective UV",
                  value: "gloss",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Bulk packs save up to 80% per sticker",
          keyFeatures: [
            "Premium 4mil vinyl layer",
            "Waterproof and car-wash safe",
            "Easy bubble-free application",
          ],
          useCases: [
            "Business giveaways",
            "School spirit labels",
            "Political campaigns",
          ],
          specs: [
            { key: "Material", value: "4mil calendered white gloss vinyl" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Print bumper stickers today",
          ctaBody: "Add custom text, sports numbers, or business graphics.",
          ctaLabel: "Customize Bumper Sticker",
        },
      },
      {
        id: "license-plates",
        name: "License Plates",
        description:
          "Custom front license plates made from heavy duty aluminum.",
        image: "/images/products/main%20page/license_plate.png",
        price: "Starting at $13.72",
        config: {
          title: "Custom License Plates",
          subtitle:
            "Heavy duty rust-proof aluminum plate inserts, pre-drilled for easy mounting.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF ALUMINUM AUTO PLATES",
          image: "/images/products/main%20page/license_plate.png",
          ratingCount: "192",
          ratingScore: "4.7",
          sizes: [
            {
              label: '6" x 12" Standard Vehicle Size',
              value: "6x12",
              basePrice: 13.72,
            },
          ],
          selects: [
            {
              label: "Plate Mounting Hole Layout",
              options: [
                {
                  label: "Standard 4 Mounting Slots",
                  value: "slots",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Save on fleet auto plaques",
          keyFeatures: [
            "Rust-free aluminum sheeting",
            "Vibrant colors baked onto metal",
            "Pre-drilled mounting holes",
          ],
          useCases: [
            "Front vanity plates",
            "Company branding",
            "Novelty gifts",
          ],
          specs: [{ key: "Material", value: '0.040" thick Aluminum' }],
          faqs: [],
          reviews: [],
          ctaHeading: "Design front vanity plates",
          ctaBody:
            "Customize auto plates with corporate colors, logos, and phone lines.",
          ctaLabel: "Customize License Plate",
        },
      },
      {
        id: "magnetic-signs",
        name: "Magnetic Car Signs",
        description:
          "Durable magnetic signs that attach to car doors and can be removed easily.",
        image: "/images/products/main%20page/vehicle_magnets.png",
        price: "Starting at $4.99",
        badge: "Most Popular",
        config: {
          title: "Custom Car Magnets",
          subtitle:
            "Heavy duty 30mil vehicle magnets that stay secure at highway speeds.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF VEHICLE ADVERTISING - AUTO SHIPPED",
          image: "/images/products/main%20page/vehicle_magnets.png",
          images: [
            "/images/products/main%20page/vehicle_magnets.png",
            "/images/products/gallery/magnet_use_1.png",
            "/images/products/gallery/magnet_use_2.png",
            "/images/products/gallery/magnet_use_3.png",
          ],
          ratingCount: "1530",
          ratingScore: "4.9",
          sizes: [
            {
              label: '12" x 24" Standard Door Size',
              value: "12x24",
              basePrice: 19.99,
            },
            {
              label: '12" x 18" Small Magnet',
              value: "12x18",
              basePrice: 14.99,
            },
            {
              label: '18" x 24" Large Door Size',
              value: "18x24",
              basePrice: 27.99,
            },
            { label: '6" x 12" Mini Magnet', value: "6x12", basePrice: 4.99 },
          ],
          selects: [
            {
              label: "Corner Style",
              options: [
                {
                  label: "Rounded Corners (Aerodynamic)",
                  value: "rounded",
                  priceAdder: 0,
                  description: "Prevents wind drag lifting on highway speeds.",
                },
                {
                  label: "Square Corners",
                  value: "square",
                  priceAdder: -1.0,
                  description: "Classic sharp-cut rectangular magnet.",
                },
              ],
            },
          ],
          qtyDiscount: "Bulk discounts starting at 2 or more magnets",
          keyFeatures: [
            "Premium 30mil thick magnetic sheeting",
            "Rounded corners prevent highway peel",
            "UV resistant inks",
            "Glossy protective laminations",
          ],
          useCases: [
            "Delivery vans",
            "Real estate agent vehicles",
            "Contractors and technicians",
            "Personal cars used for business",
          ],
          specs: [
            { key: "Thickness", value: "30mil Magnetic material" },
            { key: "Coating", value: "Gloss UV Protective Finish" },
            { key: "Max Speed Rating", value: "Tested up to 80 MPH" },
          ],
          faqs: [
            {
              q: "Will this magnet stick to aluminum doors?",
              a: "No, magnets only stick to steel doors. Please verify your vehicle door panels with a kitchen magnet before purchasing.",
            },
            {
              q: "How often should I clean the magnet?",
              a: "We recommend removing and wiping down the magnet and car panel weekly to prevent moisture buildup.",
            },
          ],
          reviews: [
            {
              author: "Steve H.",
              rating: 5,
              text: "These magnets are thick and do not slide off even in highway storms. Printing is crisp.",
            },
          ],
          ctaHeading: "Start advertising on the go",
          ctaBody:
            "Design a clean car magnet with your logo, services, and phone number.",
          ctaLabel: "Customize Magnet",
        },
      },
      {
        id: "car-door-decals",
        name: "Car Door Decals",
        description:
          "Adhesive door decals for car bodies. Durable semi-permanent advertising.",
        image: "/images/products/main%20page/car_door_decal.png",
        price: "Starting at $23.86",
        config: {
          title: "Custom Car Door Decals",
          subtitle:
            "Professional semi-permanent adhesive branding decals for truck and car door panels.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF SEMI-PERMANENT DOOR DECALS",
          image: "/images/products/main%20page/car_door_decal.png",
          ratingCount: "320",
          ratingScore: "4.7",
          sizes: [
            {
              label: '12" x 18" Small Door Decal',
              value: "12x18",
              basePrice: 23.86,
            },
            {
              label: '18" x 24" Standard Door Decal',
              value: "18x24",
              basePrice: 34.99,
            },
          ],
          selects: [
            {
              label: "Vinyl Option",
              options: [
                {
                  label: "Opaque Adhesive Gloss Vinyl",
                  value: "opaque",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume discounts on door pairs",
          keyFeatures: [
            "High performance calendered vinyl",
            "Waterproof and UV laminated",
            "Semi-permanent solid adhesion",
          ],
          useCases: [
            "Business logos",
            "Regulation USDOT numbers",
            "Contractor branding",
          ],
          specs: [{ key: "Material", value: "4mil High-performance Vinyl" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Brand your fleet vehicles",
          ctaBody: "Design car door branding decals using our templates.",
          ctaLabel: "Customize Door Decal",
        },
      },
      {
        id: "car-window-decals",
        name: "Car Window Decals",
        description:
          "Rear and side window adhesive graphics, available in transparent and opaque materials.",
        image: "/images/products/main%20page/car_window_decal.png",
        price: "Starting at $23.86",
        config: {
          title: "Custom Car Window Decals",
          subtitle:
            "Highly visible rear window adhesive decals. Perfect for glass surfaces.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF WINDOW ADHESIVE DECALS",
          image: "/images/products/main%20page/car_window_decal.png",
          ratingCount: "285",
          ratingScore: "4.8",
          sizes: [
            {
              label: '12" x 18" Small Window Decal',
              value: "12x18",
              basePrice: 23.86,
            },
            {
              label: '18" x 24" Medium Window Decal',
              value: "18x24",
              basePrice: 34.99,
            },
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                {
                  label: "Opaque White Backing Vinyl",
                  value: "opaque",
                  priceAdder: 0,
                },
                {
                  label: "Clear Transparent Window Vinyl",
                  value: "clear",
                  priceAdder: 4.5,
                },
              ],
            },
          ],
          qtyDiscount: "Volume savings apply",
          keyFeatures: [
            "Window safe adhesive backing",
            "Vibrant inks pop on transparent base",
            "Rain and rear-wiper proof",
          ],
          useCases: [
            "Rear window advertisement",
            "Store hours",
            "Reg numbers on windows",
          ],
          specs: [
            { key: "Material", value: "4mil window-form adhesive vinyl" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Make your rear window sell",
          ctaBody:
            "Build rear window banners with easy-to-read font and phone info.",
          ctaLabel: "Customize Window Decal",
        },
      },
    ],
  },
  "trade-show": {
    title: "Tradeshow Displays",
    breadcrumbLabel: "Tradeshow",
    description:
      "Get trade show ready with custom products that make your brand stand out. Table covers, step and repeats, and stands.",
    heroImage: "/images/products/main%20page/tradeshow%20hero%20image.png",
    tabletHeroImage: "/images/products/main%20page/tradeshow%20hero%20image.png",
    mobileHeroImage: "/images/products/main%20page/tradeshow%20hero%20image.png",
    heroSubtitle: "Where First Impressions Get Noticed.",
    reviewRating: "4.9",
    reviewCount: "3,240",
    reviewQuote:
      "The table cover and pop-up backdrop banner printed beautifully! Setup took seconds and our logo colors matched perfectly.",
    categoryDescriptionText:
      "Your tradeshow booth should do more than fill space, it should tell your brand story. With a full range of customizable displays, signage, and print materials, we help you make every event count. From table covers to backdrops, banners to business cards, our products are designed to build cohesion, attract attention, and drive engagement. Whether you're setting up for a local fair or a national expo, we've got everything you need to show up strong and stay top of mind.",
    categorySecondaryImage: "/images/products/main%20page/trade_show_desc.png",
    faqs: [
      {
        q: "Can I customize designs with my logo and brand colors?",
        a: "Yes! All of our tradeshow products are fully customizable with your logo, brand colors, messaging, and graphics. You can upload your own artwork or use our easy online design tools. Need help? Our professional design team is here to assist, whether you need a quick layout fix or a fully custom design, we’ve got you covered. 1-800-330-9622",
      },
      {
        q: "Do you offer portable and easy-to-set-up display options?",
        a: "Yes! Many of our products; like retractable banners, pop up displays, and tabletop signage; are lightweight, portable, and quick to assemble, making setup and teardown fast and stress-free.",
      },
      {
        q: "How long does it take to receive my order?",
        a: "Production and shipping times vary depending on the product and customization, but most orders ship within a few business days. Expedited options are available at checkout.",
      },
      {
        q: "What should I include in my tradeshow booth setup?",
        a: "A well-rounded booth typically includes branded table covers, vertical signage like banners or displays, informational handouts (such as postcards or business cards), and high-impact elements like custom tents or backdrops for visibility.",
      },
      {
        q: "What if I need help choosing the right products for my event?",
        a: "Our team is here to help! If you're not sure which products best suit your booth space, goals, or budget, our event specialists can walk you through options and make personalized recommendations based on your needs. 1-800-330-9622",
      },
    ],
    products: [
      {
        id: "tablecloths",
        name: "Custom Tablecloths",
        description:
          "Transform any standard folding table into a highly professional promotional display with our Custom Tablecloths. Printed using advanced dye-sublimation on premium 300D polyester twill, these covers feature a vibrant, scratch-resistant print that won't crack or peel. They are completely machine washable, flame-retardant (meeting NFPA 701 safety certifications), and designed to stay wrinkle-free throughout long events. Available in standard 6ft and 8ft sizes in both 4-sided (closed back) and 3-sided (open back) configurations for convenient under-table storage access.",
        image: "/images/products/main%20page/tablecloths.png",
        price: "Starting at $89.99",
        badge: "Best Seller",
        config: {
          title: "Custom Tablecloths",
          subtitle:
            "Dye-sublimation printed fabric table cloths that drape perfectly over display tables.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF CUSTOM TABLECLOTHS - SHIPS NEXT DAY",
          image: "/images/products/main%20page/tablecloths.png",
          images: [
            "/images/products/main%20page/tablecloths.png",
            "/images/products/gallery/tablecloth_use_1.png",
            "/images/products/gallery/tablecloth_use_2.png",
            "/images/products/gallery/tablecloth_use_3.png",
          ],
          ratingCount: "680",
          ratingScore: "4.9",
          sizes: [
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
                    "Covers all four sides, perfect for storage underneath.",
                },
                {
                  label: "3-Sided Open Back Throw",
                  value: "3sided",
                  priceAdder: -10.0,
                  description: "Leaves the back open for easy seating access.",
                },
              ],
            },
          ],
          qtyDiscount: "Volume discounts on bulk promotional items",
          keyFeatures: [
            "100% Wrinkle-resistant polyester fabric",
            "Fully hemmed finished edges",
            "Scratch resistant dye-sub print",
            "Machine washable",
          ],
          useCases: [
            "Job fairs",
            "Trade show booths",
            "School orientations",
            "Craft shows & market stalls",
          ],
          specs: [
            { key: "Material", value: "300D Polyester Twill" },
            {
              key: "Flame Retardant",
              value: "Meets NFPA 701 fire safety rating",
            },
            { key: "Care", value: "Machine washable, tumble dry low" },
          ],
          faqs: [
            {
              q: "Is the material flame retardant?",
              a: "Yes, our table fabrics are treated to meet standard trade show safety fire certifications.",
            },
          ],
          reviews: [
            {
              author: "Emily T.",
              rating: 5,
              text: "Excellent washability! Spillages from coffee wiped right off, and it didn't wrinkle.",
            },
          ],
          ctaHeading: "Elevate your booth display",
          ctaBody:
            "Customize a premium table throw with your core branding and logos.",
          ctaLabel: "Customize Cover",
        },
      },
      {
        id: "table-runners",
        name: "Table Runners",
        description:
          "For a versatile, portable, and budget-friendly branding solution, our Custom Table Runners are the perfect choice. Drape one over a plain solid-colored tablecloth to instantly elevate your booth's look without the cost of a full tablecloth. Made from durable 300D polyester twill with optional liquid-repellent coatings, our table runners roll down flat, fit easily in any travel bag, and wash clean in the machine. Choose from multiple standard widths to display your company logo prominently.",
        image: "/images/products/main%20page/table_runner.png",
        price: "Starting at $39.99",
        badge: "Budget-Friendly",
        config: {
          title: "Custom Table Runners",
          subtitle:
            "Add branding to any plain tablecloth with a custom printed twill table runner.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF TABLE RUNNERS - SHIPS NEXT DAY",
          image: "/images/products/main%20page/table_runner.png",
          ratingCount: "540",
          ratingScore: "4.8",
          sizes: [
            { label: '24" x 84" (Standard)', value: "24x84", basePrice: 39.99 },
            { label: '30" x 84"', value: "30x84", basePrice: 49.99 },
            { label: '36" x 84" (Wide)', value: "36x84", basePrice: 59.99 },
          ],
          selects: [
            {
              label: "Material Twill",
              options: [
                {
                  label: "300D Polyester Twill (Standard)",
                  value: "standard",
                  priceAdder: 0,
                },
                {
                  label: "Liquid-Repellent Twill",
                  value: "repellent",
                  priceAdder: 10.0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume discounts on promotional items",
          keyFeatures: [
            "Adds modular branding to any setup",
            "NFPA 701 certified flame retardant",
            "Machine washable",
          ],
          useCases: ["Job recruiting", "Farmers markets", "Check-in desks"],
          specs: [{ key: "Material", value: "300D Polyester Twill" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Ready to design table runners?",
          ctaBody: "Custom print table runners with corporate logos.",
          ctaLabel: "Customize Table Runner",
        },
      },
      {
        id: "fitted-tablecloths",
        name: "Fitted Tablecloths",
        description:
          "Give your display tables a clean, sharp, box-tailored look with Fitted Tablecloths. Custom-tailored to slip perfectly over standard 6ft and 8ft rectangular tables, these covers stay securely in place without hanging or pooling on the floor, making them excellent for busy outdoor venues or professional recruiting events. Constructed from flame-retardant 300D knit polyester twill, they are machine-washable, wrinkle-resistant, and built to withstand repeated setups.",
        image: "/images/products/main%20page/fitted_tablecloth.png",
        price: "Starting at $109.99",
        config: {
          title: "Fitted Tablecloths",
          subtitle:
            "Box-style custom tablecloths tailored to standard 6ft and 8ft display tables.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF TAILORED FITTED TABLE COVERS",
          image:
            "/images/products/main%20page/fitted_tablecloth.png",
          ratingCount: "310",
          ratingScore: "4.8",
          sizes: [
            {
              label: '6ft Fitted (72" x 30" x 30")',
              value: "6ft_fitted",
              basePrice: 109.99,
            },
            {
              label: '8ft Fitted (96" x 30" x 30")',
              value: "8ft_fitted",
              basePrice: 139.99,
            },
          ],
          selects: [
            {
              label: "Material",
              options: [
                {
                  label: "300D Polyester Twill (Standard)",
                  value: "standard",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Bulk event pricing applies",
          keyFeatures: [
            "Box-tailored structure stays secure",
            "NFPA 701 fire certified",
            "Machine washable",
          ],
          useCases: ["Conventions", "Summits", "Job fairs"],
          specs: [{ key: "Material", value: "300D Knit Polyester" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Tailor your booth layout",
          ctaBody: "Order fitted box tablecloths with custom printed fronts.",
          ctaLabel: "Customize Fitted Cover",
        },
      },
      {
        id: "round-tablecloths",
        name: "Round Tablecloths",
        description:
          "Elevate your round banquet, registry, or cocktail tables with our Round Custom Tablecloths. Specially hemmed for standard circular table sizes, they drape elegantly to the floor in a seamless design. Using full-spectrum dye-sublimation printing, your custom colors, patterns, and logos will appear bright and clear, providing a premium aesthetic for weddings, evening galas, corporate fundraisers, and hotel lobbies.",
        image: "/images/products/main%20page/round_tablecloth.png",
        price: "Starting at $129.99",
        config: {
          title: "Round Custom Tablecloths",
          subtitle:
            "Full color dye-sublimated tablecloths designed for circular highboy and banquet tables.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF CUSTOM ROUND TABLECLOTHS",
          image: "/images/products/main%20page/round_tablecloth.png",
          ratingCount: "195",
          ratingScore: "4.7",
          sizes: [
            {
              label: '30" Round Table Throw',
              value: "30_round",
              basePrice: 129.99,
            },
            {
              label: '60" Circular Banquet Cover',
              value: "60_round",
              basePrice: 179.99,
            },
            {
              label: '72" Large Circular Cover',
              value: "72_round",
              basePrice: 219.99,
            },
          ],
          selects: [
            {
              label: "Drape Drop Type",
              options: [
                {
                  label: "Full Floor Length Drop",
                  value: "floor",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume discounts for banquet halls and events",
          keyFeatures: [
            "Seamless round draping",
            "Dye-sublimation full spectrum print",
            "Flame certified fabric",
          ],
          useCases: ["Cocktail hours", "Weddings", "Gala banquets"],
          specs: [{ key: "Material", value: "300D Polyester" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Decorate round tables",
          ctaBody: "Brand circular lobby high-boys or food service rounds.",
          ctaLabel: "Customize Round Cover",
        },
      },
      {
        id: "stretch-tablecloths",
        name: "Stretch Tablecloths",
        description:
          "Achieve a sleek, modern, and high-impact look with our contoured Stretch Tablecloths. Made from an elastic polyester-spandex blend, these covers stretch tightly over your table frame and secure into place using reinforced rubber leg pockets, preventing any flapping or shifting in windy outdoor conditions. The tight tension naturally pulls out all folds and wrinkles, ensuring a perfectly smooth, professional surface for tech conferences, outdoor festivals, and modern brand exhibitions.",
        image: "/images/products/main%20page/stretch_tablecloth.png",
        price: "Starting at $129.99",
        config: {
          title: "Stretch Tablecloths (Spandex Style)",
          subtitle:
            "Elastic stretch tablecloths contouring tightly to rectangular event tables. Modern and wrinkle-free.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF CONTOURED SPANDEX DISPLAYS",
          image:
            "/images/products/main%20page/stretch_tablecloth.png",
          ratingCount: "290",
          ratingScore: "4.9",
          sizes: [
            {
              label: "6ft Stretch Spandex (Standard)",
              value: "6ft_stretch",
              basePrice: 129.99,
            },
            {
              label: "8ft Stretch Spandex",
              value: "8ft_stretch",
              basePrice: 159.99,
            },
          ],
          selects: [
            {
              label: "Table Leg Pockets",
              options: [
                {
                  label: "Reinforced Rubber Leg Pockets",
                  value: "reinforced",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Spandex volume levels apply",
          keyFeatures: [
            "Wrinkle-free stretch spandex material",
            "Hook-under pockets keep cover locked down",
            "Ultra modern contours",
          ],
          useCases: [
            "Outdoor windy venues",
            "Tech trade conventions",
            "Modern product roll-outs",
          ],
          specs: [
            { key: "Material", value: "Polyester-Spandex Elastic Blend" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Go modern with stretch spandex",
          ctaBody:
            "Order contoured tablecloth covers that hook securely in place.",
          ctaLabel: "Customize Stretch Cover",
        },
      },
      {
        id: "pop-up-displays",
        name: "Pop-Up Displays",
        description:
          "Make a massive impression on the trade show floor with our premium Pop-Up Backdrop Displays. Featuring a lightweight accordion-style aluminum frame that snaps open in under two minutes, this backdrop utilizes a large, high-definition tension fabric graphic that attaches securely around the perimeter with heavy-duty hook-and-loop velcro. It packs down into a compact trolley bag with rolling wheels for effortless travel and setup.",
        image: "/images/products/main%20page/pop_up_display.png",
        price: "Starting at $299.99",
        config: {
          title: "Pop-Up Backdrop Displays",
          subtitle:
            "Collapsible aluminum accordion frame with custom printed tension fabric screen cover.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF ALL POP-UP EVENT DISPLAYS",
          image: "/images/products/main%20page/pop_up_display.png",
          ratingCount: "430",
          ratingScore: "4.8",
          sizes: [
            {
              label: "8ft Straight Accordion Frame",
              value: "8ft_straight",
              basePrice: 299.99,
            },
            {
              label: "10ft Straight Accordion Frame",
              value: "10ft_straight",
              basePrice: 399.99,
            },
            {
              label: "8ft Curved Exhibition Frame",
              value: "8ft_curved",
              basePrice: 349.99,
            },
            {
              label: "10ft Curved Exhibition Frame",
              value: "10ft_curved",
              basePrice: 449.99,
            },
          ],
          selects: [
            {
              label: "Frame Kit Option",
              options: [
                {
                  label: "Include Collapsible Frame & Trolley Bag",
                  value: "full_kit",
                  priceAdder: 120.0,
                },
                {
                  label: "Fabric Replacement Print Only",
                  value: "print_only",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Exposition vendor rates apply",
          keyFeatures: [
            "Sets up in 2 minutes",
            "Wrinkle-resistant heavy knit stretch fabric",
            "Travel-friendly transport wheels bag",
          ],
          useCases: [
            "Exhibitions",
            "Major expos",
            "Stage presentations",
            "Press announcements",
          ],
          specs: [
            { key: "Frame Structure", value: "Accordion-style aluminum tubes" },
            { key: "Fabric Attach", value: "Hook-and-loop velcro perimeter" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Dominate the show floor",
          ctaBody: "Order a massive accordion pop-up wall back wall.",
          ctaLabel: "Customize Pop-Up Display",
        },
      },
      {
        id: "step-and-repeat-banner",
        name: "Backdrop Banners",
        description:
          "Create the perfect photo opportunity at red carpets, press conferences, weddings, and corporate summits with our Step & Repeat Banners. Designed to display repeated logos in a clean grid layout, the glare-free matte finish of our heavy-duty blockout vinyl ensures beautiful, flash-friendly photography. The package comes with an optional adjustable backdrop stand and top/bottom pole pockets for fast mounting.",
        image: "/images/products/main%20page/backdrop_banners.png",
        price: "Starting at $145.99",
        badge: "Event Ready",
        config: {
          title: "Backdrop Banners",
          subtitle:
            "Professional background banners for press walls, photo shoots, and red carpets.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF STEP AND REPEAT PRESS WALLS",
          image:
            "/images/products/main%20page/backdrop_banners.png",
          ratingCount: "430",
          ratingScore: "4.8",
          sizes: [
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
          ],
          selects: [
            {
              label: "Adjustable Backdrop Stand Hardware",
              options: [
                {
                  label: "Include Adjustable Backdrop Stand",
                  value: "with_stand",
                  priceAdder: 95.0,
                },
                {
                  label: "Banner Print Only (No Stand)",
                  value: "banner_only",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Event planner package discounts available",
          keyFeatures: [
            "Large seamless backdrops",
            "Pole pockets on top & bottom for mounting",
            "Anti-glare matte finish ensures clear photography",
          ],
          useCases: [
            "Press conferences",
            "Red carpet arrivals",
            "Wedding photo booths",
            "Corporate events",
          ],
          specs: [{ key: "Material", value: "15oz Blockout Matte Vinyl" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Create your logo background backdrop",
          ctaBody:
            "Upload your sponsor logos and create repeated patterns instantly.",
          ctaLabel: "Customize Backdrop",
        },
      },
      {
        id: "retractable-banners",
        name: "Retractable Banner",
        description:
          "Our Retractable Banners (Roll Up Stands) are the ultimate standalone banner display for trade shows, retail checkouts, and office lobbies. The banner graphic pulls up from an anodized aluminum base stand in seconds and secures with a vertical support rod. Each kit includes a padded carrying bag, making transport and setup incredibly simple. Printed on premium curl-resistant polyester film or standard 13oz vinyl to maintain a clean, flat presentation.",
        image: "/images/products/main%20page/retractable_roll_up_banner.png",
        price: "Starting at $89.00",
        badge: "Most Popular",
        config: {
          title: "Retractable Banners (Roll Up)",
          subtitle:
            "Portable stand and pre-installed banner, rolls up in seconds for easy transport.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF RETRACTABLE ROLL-UP BANNERS",
          image:
            "/images/products/main%20page/retractable_roll_up_banner.png",
          ratingCount: "1240",
          ratingScore: "4.9",
          sizes: [
            {
              label: '33" x 80" Standard Stand Size',
              value: "33x80",
              basePrice: 89.00,
            },
            {
              label: '46" x 80" Vertical Size',
              value: "46x80",
              basePrice: 220.00,
            },
          ],
          selects: [
            {
              label: "Stand Option",
              options: [
                {
                  label: "Standard Silver Cassette Stand",
                  value: "standard_stand",
                  priceAdder: 0,
                },
                {
                  label: "Professional Luxury Stand",
                  value: "professional",
                  priceAdder: 19.5,
                },
              ],
            },
          ],
          qtyDiscount: "Bulk discounts starting at 2 or more banners",
          bulkDiscounts: [
            { minQty: 2, discountPercent: 5 },
            { minQty: 5, discountPercent: 10 },
            { minQty: 10, discountPercent: 15 },
            { minQty: 25, discountPercent: 20 },
          ],
          keyFeatures: [
            "Sturdy aluminum base container",
            "Padded carrying case included",
            "Setup in under 60 seconds",
            "Anti-curl curl-free polyester film",
          ],
          useCases: [
            "Trade show booths",
            "Corporate lobbies",
            "Retail announcements",
            "Presentations",
          ],
          specs: [
            { key: "Weight", value: "Approximately 7-10 lbs including stand" },
            { key: "Display Size", value: '79" x 33" (Standard) or 80" x 46" (Large)' },
          ],
          description: `Maximize your brand visibility at trade shows, retail storefronts, conferences, and exhibitions with our premium Custom Retractable Roll Up Banners. These portable banner displays are the gold standard for high-impact offline marketing, offering a seamless blend of durability, convenience, and visual appeal. 

Every retractable banner stand comes pre-assembled with your custom-printed graphic rolled inside a sturdy, lightweight aluminum cassette. Setup takes under 60 seconds—simply extend the vertical support pole, pull up the banner graphic, and lock it into place. Whether you need custom trade show signage or a permanent retail display, our roll up stands are built to last.

Our banners are printed on curl-free, light-blocking polyester grayback film. This prevents the edges of the banner from curling over time and ensures that light does not shine through from behind, keeping your message fully legible under bright exhibition lights. With next-day banner printing options, we help you get event-ready at a moment's notice.

Why Choose Our Professional Rollup Banners?
- Premium Anti-Curl Material: Printed on smooth, opaque blockout film for a clean, flat presentation.
- Heavy-Duty Cassette: Anodized aluminum base with fold-out stabilizing feet for reliable outdoor and indoor standee stability.
- Effortless Portability: A padded travel carrying case is included with every order, making transportation a breeze.
- Dynamic Visual Impact: High-resolution UV printing at 1440 DPI delivers vivid, fade-resistant colors that stand out across crowded halls.`,
          faqs: [
            {
              q: "How do I set up a retractable roll up banner?",
              a: "Setting up your pull up banner is incredibly simple. Unpack the aluminum base, turn out the stabilizing feet, insert the support pole into the base slot, and then pull the banner up gently and attach it to the top hook of the pole. The entire process takes less than a minute.",
            },
            {
              q: "What material is used for the rollup banner graphic?",
              a: "We use a premium curl-free polyester film with a blockout greyback coating. This professional material ensures your graphics remain completely flat and prevents rear light show-through, ensuring maximum legibility under bright trade show lighting.",
            },
            {
              q: "Can I replace the banner graphic in my existing retractable stand?",
              a: "Yes, the graphic can be replaced, but it requires tensioning the internal spring mechanism of the aluminum cassette. We recommend sending it to our print facility or purchasing a new stand bundle for the best results.",
            },
            {
              q: "What is the difference between standard and professional stands?",
              a: "Standard stands feature swing-out stabilizing feet that extend from the front and back of the aluminum base. Professional luxury stands have a wider, heavier teardrop-shaped base that stands stable on its own without visible swing-out feet, offering a cleaner look.",
            },
            {
              q: "Is the roll up banner suitable for outdoor use?",
              a: "Retractable banners are designed primarily for indoor applications. They can be used outdoors in calm, dry conditions, but because of their tall profile, wind can act as a sail and tip the stand. For outdoor promotions, we recommend our heavy-duty feather flags or mesh banners.",
            },
          ],
          reviews: [
            {
              author: "Marcus K., Event Director",
              rating: 5,
              text: "The custom rollup banner exceeded our expectations. The greyback film is completely blockout and doesn't curl at all. Set up was a breeze at our conference booth.",
            },
            {
              author: "Sarah J., Retail Manager",
              rating: 5,
              text: "Absolute lifesaver! Ordered with next day banner printing and it arrived right on time for our store opening. The print colors are stunningly bright.",
            },
            {
              author: "David T., Startup Founder",
              rating: 5,
              text: "Excellent quality trade show banner stand. We've used it at three separate events now and the aluminum retracting mechanism still works perfectly.",
            },
          ],
          ctaHeading: "Ready to make an impression?",
          ctaBody:
            "Order a retractable banner stand and roll out your messages quickly.",
          ctaLabel: "Customize Retractable Banner",
        },
      },
      {
        id: "x-banner-stand",
        name: "X-Banners",
        description:
          "The X-Frame Banner Stand is a highly cost-effective, portable freestanding banner solution. By utilizing flexible composite fiberglass arms connected to a central hinge, the stand pulls a custom corner-grommeted banner taut, keeping your graphic perfectly flat and readable. Because the banner attaches simply via grommets, you can order replacement prints and swap graphics in seconds without needing to buy new stands.",
        image: "/images/products/main%20page/x_banner_stand.png",
        price: "Starting at $49.99",
        config: {
          title: "X-Frame Banner Stands",
          subtitle:
            "Highly cost-effective standing banners utilizing tension fiberglass arms to pull banner corners taut.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF BUDGET X-BANNER DISPLAYS",
          image: "/images/products/main%20page/x_banner_stand.png",
          ratingCount: "385",
          ratingScore: "4.7",
          sizes: [
            {
              label: '24" x 63" Small X-Stand',
              value: "63x24",
              basePrice: 49.99,
            },
            {
              label: '31" x 70" Large X-Stand',
              value: "70x31",
              basePrice: 69.99,
            },
          ],
          selects: [
            {
              label: "Frame Assembly",
              options: [
                {
                  label: "Include Fiberglass X-Stand & Carrying Bag",
                  value: "full_kit",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Saves up to 15% on bulk packages",
          keyFeatures: [
            "Lightweight carbon-fiberglass frame legs",
            "Super easy backdrop replacements",
            "4 grommeted corners attach to pegs",
          ],
          useCases: [
            "Product marketing roll-outs",
            "Retail storefronts",
            "Special church events",
            "Expositions",
          ],
          specs: [{ key: "Material", value: "13oz Matte PVC Vinyl" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Promote on a budget",
          ctaBody: "Order lightweight X-stands that fold down flat in seconds.",
          ctaLabel: "Customize X-Stand Banner",
        },
      },
      {
        id: "tabletop-retractable-banners",
        name: "Tabletop Retractable Banners",
        description:
          "Bring high-impact branding to counter-tops, checkout registers, hotel lobbies, and registration desks with Tabletop Retractable Banners. These miniature versions of our full-sized roll-up stands feature a compact aluminum base housing that pulls up and retracts in seconds. Printed on smooth, high-resolution polypropylene film, they ensure small details and text are clear and easy to read from a close distance.",
        image:
          "/images/products/main%20page/tabletop_retractable.jpg",
        price: "Starting at $27.18",
        config: {
          title: "Tabletop Retractable Banners",
          subtitle:
            "Mini roll-up banners designed to sit on tables, point-of-sale registers, and service desks.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF TABLETOP RETRACTABLE DISPLAYS",
          image:
            "/images/products/main%20page/tabletop_retractable.jpg",
          ratingCount: "420",
          ratingScore: "4.8",
          sizes: [
            {
              label: '11.75" x 17" A3 Size Mini Stand',
              value: "17x11.75",
              basePrice: 39.99,
            },
            {
              label: '8.25" x 11.5" A4 Size Micro Stand',
              value: "11.5x8.25",
              basePrice: 27.18,
            },
          ],
          selects: [
            {
              label: "Base Housing",
              options: [
                {
                  label: "Miniature Silver Aluminum Base",
                  value: "mini_silver",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume counter-top rates starting at 10+",
          keyFeatures: [
            "Fits compact desk spaces",
            "Retracts into a tiny housing for travel",
            "Smooth banner film ensures high detail readability",
          ],
          useCases: [
            "Counter checkout promotions",
            "Hotel registration desks",
            "Restaurant menus",
            "Job fair table displays",
          ],
          specs: [
            {
              key: "Print Film",
              value: "8mil thick smooth polypropylene film",
            },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Maximize register branding",
          ctaBody: "Order mini tabletop roll-up stands today.",
          ctaLabel: "Customize Mini Roll-Up",
        },
      },
      {
        id: "custom-canopy-tents",
        name: "Custom Canopies",
        description:
          "Stand out at outdoor events, farmers markets, sporting events, and street fairs with our 10' x 10' Custom Canopy Tents. The canopy top is made from heavy-duty, waterproof, and UV-resistant fabric printed in rich full-color dye-sublimation. The popup frame features a commercial-grade steel or aluminum truss system with adjustable height settings, popping up in minutes for instant shade and high-visibility branding.",
        image: "/images/products/main%20page/event_tents.png",
        price: "Starting at $349.99",
        config: {
          title: "Custom Canopy Tents",
          subtitle:
            "Outdoor 10' x 10' custom canopy tents. Waterproof, UV-resistant fabric over steel popup frames.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF OUTDOOR EVENT CANOPIES",
          image: "/images/products/main%20page/event_tents.png",
          images: [
            "/images/products/main%20page/event_tents.png",
            "/images/products/gallery/canopy_tent_use_1.png",
            "/images/products/gallery/canopy_tent_use_1.png",
            "/images/products/gallery/canopy_tent_use_1.png",
          ],
          ratingCount: "110",
          ratingScore: "4.7",
          sizes: [
            {
              label: "10ft x 10ft Canopy Tent",
              value: "10x10",
              basePrice: 349.99,
            },
          ],
          selects: [
            {
              label: "Frame Type",
              options: [
                {
                  label: "Standard Steel Frame",
                  value: "steel",
                  priceAdder: 0,
                },
                {
                  label: "Premium Lightweight Aluminum Frame",
                  value: "aluminum",
                  priceAdder: 120.0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume canopy packaging available",
          keyFeatures: [
            "Waterproof & UV resistant fabric",
            "Durable popup truss system",
            "Dye-sublimation peak printing",
          ],
          useCases: [
            "Outdoor farmers markets",
            "Festivals & concerts",
            "Sports events",
          ],
          specs: [{ key: "Dimensions", value: '120" W x 120" D x 135" H max' }],
          faqs: [],
          reviews: [],
          ctaHeading: "Establish outdoor presence",
          ctaBody: "Print full-color canopy tops today.",
          ctaLabel: "Customize Canopy Tent",
        },
      },
      {
        id: "feather-flags",
        name: "Feather Flags",
        description:
          "Draw customers in from the roadside with our best-selling Custom Feather Flags. Designed to flutter in the wind and turn heads, these tall advertising flags are printed on premium open-weave knit polyester to reduce wind load stress. Supported by composite fiberglass poles and a rotating ground spike or cross stand, they rotate 360 degrees to remain visible from any traffic direction.",
        image: "/images/products/main%20page/feather_flag.png",
        price: "Starting at $80.00",
        config: {
          title: "Custom Feather Flags",
          subtitle:
            "Outdoor advertising flags printed on durable knit polyester, complete with poles and hardware.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF ALL ADVERTISING FLAGS - SHIPS NEXT DAY",
          image: "/api/assets/0085996_feather-flags_360.png",
          ratingCount: "820",
          ratingScore: "4.8",
          sizes: [
            {
              label: "9ft Feather Flag",
              value: "9ft",
              basePrice: 80.00,
            },
            {
              label: "10ft Feather Flag",
              value: "10ft",
              basePrice: 100.00,
            },
            {
              label: "13ft Feather Flag",
              value: "13ft",
              basePrice: 110.00,
            },
            {
              label: "16ft Feather Flag",
              value: "16ft",
              basePrice: 130.00,
            },
          ],
          selects: [
            {
              label: "Pole Option",
              options: [
                {
                  label: "No Pole (Flag Fabric Only)",
                  value: "no_pole",
                  priceAdder: 0,
                  description: "Select if you already have a pole.",
                },
                {
                  label: "Include Pole (+$35.00)",
                  value: "pole",
                  priceAdder: 35.00,
                  description: "Premium carbon-fiberglass pole.",
                },
              ],
            },
            {
              label: "Base Option",
              options: [
                {
                  label: "No Base",
                  value: "no_base",
                  priceAdder: 0,
                },
                {
                  label: "Ground Stake (+$40.00)",
                  value: "stake",
                  priceAdder: 40.00,
                  description: "Classic stake for soil or grass.",
                },
                {
                  label: "Cross Base (+$55.00)",
                  value: "cross",
                  priceAdder: 55.00,
                  description: "Standard folding cross base.",
                },
                {
                  label: "CS-01 Metal Cross Base (+$65.00)",
                  value: "cs01",
                  priceAdder: 65.00,
                  description: "Heavy duty metal cross base.",
                },
                {
                  label: "CS-02 Cross Base (+$45.00)",
                  value: "cs02",
                  priceAdder: 45.00,
                  description: "Standard economy cross base.",
                },
                {
                  label: "GS-01 Ground Spike (+$45.00)",
                  value: "gs01",
                  priceAdder: 45.00,
                  description: "Heavy duty ground spike.",
                },
              ],
            },
            {
              label: "Water Bag Option",
              options: [
                {
                  label: "No Water Bag",
                  value: "no_water_bag",
                  priceAdder: 0,
                },
                {
                  label: "Water Bag (+$10.00)",
                  value: "water_bag_10",
                  priceAdder: 10.00,
                  description: "Adds stability for cross bases.",
                },
                {
                  label: "WF-08 Water Bag (+$14.00)",
                  value: "wf08",
                  priceAdder: 14.00,
                  description: "Premium donut water weight bag.",
                },
              ],
            },
            {
              label: "Carry Bag Option",
              options: [
                {
                  label: "No Carry Bag",
                  value: "no_carry_bag",
                  priceAdder: 0,
                },
                {
                  label: "Flag Carry Bag (+$45.00)",
                  value: "carry_bag",
                  priceAdder: 45.00,
                  description: "Convenient travel bag for hardware.",
                },
              ],
            },
            {
              label: "Flag Material & Build",
              options: [
                {
                  label: "Premium Polyester Knit",
                  value: "standard",
                  priceAdder: 0,
                  description:
                    "Lightweight mesh fabric designed for wind flow.",
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Print Direction",
              options: [
                {
                  id: "single",
                  label: "Single-Sided (Show through)",
                  priceAdder: 0,
                  description: "Design printed on one side, mirrored on back.",
                },
                {
                  id: "double",
                  label: "Double-Sided (Three layers)",
                  priceAdder: 150.00,
                  sizePriceAdders: {
                    "9ft": 150.00,
                    "10ft": 150.00,
                    "13ft": 160.00,
                    "16ft": 160.00,
                  },
                  description:
                    "Two separate prints with blocker liner in between.",
                },
              ],
            },
          ],
          qtyDiscount: "Save up to 10% on bulk quantities",
          keyFeatures: [
            "Fluttering wind-resistant design",
            "Dye-sublimation high-contrast printing",
            "Flexible fiberglass poles",
          ],
          useCases: [
            "Outdoor storefronts",
            "Grand openings",
            "Car dealerships",
          ],
          specs: [{ key: "Material", value: "110g Knit Polyester" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Get noticed from the road",
          ctaBody: "Order fluttering advertising flags.",
          ctaLabel: "Customize Feather Flag",
        },
      },
      {
        id: "vinyl-banners",
        name: "Vinyl Banners",
        description:
          "Our Custom Vinyl Banners are a versatile, heavy-duty signage solution for indoor and outdoor advertising. Constructed from durable 13oz gloss or 15oz premium matte PVC vinyl with heat-welded hems, they are fully waterproof and UV-resistant to survive the elements. Complete with pre-installed brass grommets or pole pockets for easy hanging, they are perfect for storefront openings, construction fences, and event banners.",
        image: "/images/products/main%20page/vinyl_banner.png",
        price: "Starting at $12.99",
        config: {
          title: "Custom Vinyl Banners",
          subtitle:
            "Durable, waterproof, outdoor-rated vinyl banners complete with grommets.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF ALL VINYL BANNERS - SHIPS NEXT DAY",
          image: "/images/products/main%20page/vinyl_banner.png",
          ratingCount: "1530",
          ratingScore: "4.8",
          sizes: [
            { label: "2' x 4' Small Banner", value: "24x48", basePrice: 12.99 },
            {
              label: "3' x 6' Standard Banner",
              value: "36x72",
              basePrice: 24.99,
            },
            { label: "4' x 8' Large Banner", value: "48x96", basePrice: 45.99 },
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                {
                  label: "13oz Standard Gloss Vinyl",
                  value: "13oz_gloss",
                  priceAdder: 0,
                },
                {
                  label: "15oz Premium Matte Vinyl",
                  value: "15oz_matte",
                  priceAdder: 5.0,
                },
              ],
            },
          ],
          qtyDiscount: "Save up to 15% on bulk banner orders",
          keyFeatures: [
            "Waterproof & UV resistant",
            "Heat-welded hems for extra strength",
            "Vibrant full-color digital printing",
          ],
          useCases: ["Event announcements", "Sponsorship banners"],
          specs: [
            { key: "Material", value: "13oz or 15oz flexible PVC vinyl" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Ready to design your banner?",
          ctaBody:
            "Start designing online in minutes or upload your print-ready files.",
          ctaLabel: "Customize Vinyl Banner",
        },
      },      {
        id: "business-cards",
        name: "Business Cards",
        description:
          'Leave a lasting impression with premium Custom Business Cards. Printed on ultra-thick 14pt or 16pt cardstock with offset high-resolution printing, these standard 3.5" x 2" cards represent your business with absolute quality. Customize your finish with professional non-glare matte or high-gloss UV sheen, and choose single or double-sided layouts to distribute to tradeshow attendees, recruits, and new leads.',
        image: "/images/products/main%20page/business_cards.png",
        price: "Starting at $29.98",
        config: {
          title: "Custom Business Cards",
          quantityOptions: [100, 250, 500, 1000, 1500, 2000, 2500, 5000, 10000],
          quantityPrices: {
            100: 29.98,
            250: 39.98,
            500: 49.98,
            1000: 79.98,
            1500: 117.98,
            2000: 145.98,
            2500: 179.98,
            5000: 319.98,
            10000: 559.98,
          },
          subtitle:
            'Standard 3.5" x 2" cards printed on ultra-thick cardstock with multiple finishes.',
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF ALL EVENT STATIONERY",
          image: "/images/products/main%20page/business_cards.png",
          ratingCount: "1120",
          ratingScore: "4.9",
          sizes: [
            {
              label: '3.5" x 2" Standard size',
              value: "3.5x2",
              basePrice: 29.98,
            },
          ],
          selects: [
            {
              label: "Paper Stock & Finish",
              options: [
                {
                  label: "14pt semi gloss (profit maximizer)",
                  value: "semi_gloss",
                  priceAdder: 0,
                  description: "Clean, professional look with a smooth semi-gloss finish. Easy to write on.",
                  image: "/images/products/main%20page/business_cards_semigloss.png",
                },
                {
                  label: "Glossy",
                  value: "glossy",
                  priceAdder: 0,
                  description: "High-shine glossy finish that makes colors pop.",
                  image: "/images/products/main%20page/business_cards_glossy.png",
                },
                {
                  label: "Embossed Gloss",
                  value: "embossed_gloss",
                  priceAdder: 0.15,
                  description: "Raised clear gloss accents for a textured, high-end feel.",
                  image: "/images/products/main%20page/business_cards_foil.png",
                },
                {
                  label: "Soft Touch",
                  value: "soft_touch",
                  priceAdder: 0.12,
                  description: "Velvety coating that feels soft and premium in the hand.",
                  image: "/images/products/main%20page/business_cards.png",
                },
                {
                  label: "Painted Edge",
                  value: "painted_edge",
                  priceAdder: 0.25,
                  description: "Thick cards with colored edges for a bold, modern look.",
                  image: "/images/products/main%20page/business_cards_painted_edge.png",
                },
                {
                  label: "Ultra Thick",
                  value: "ultra_thick",
                  priceAdder: 0.23,
                  description: "Double-thick cardstock for a substantial, sturdy feel.",
                  image: "/images/products/main%20page/business_cards_ultra_thick.png",
                },
                {
                  label: "Clear Plastic",
                  value: "clear_plastic",
                  priceAdder: 0.35,
                  description: "See-through modern plastic cards that make a unique statement.",
                  image: "/images/products/main%20page/business_cards_clear_plastic.png",
                },
                {
                  label: "Pearl",
                  value: "pearl",
                  priceAdder: 0.12,
                  description: "Glimmering, light-catching surface with a pearlescent shine.",
                  image: "/images/products/main%20page/business_cards_pearl.png",
                },
                {
                  label: "Gold Raised Foil",
                  value: "gold_raised_foil",
                  priceAdder: 0.20,
                  description: "Elevated, 3D raised gold foil accents for a luxury feel.",
                  image: "/images/products/main%20page/business_cards_gold_raised_foil.png",
                },
                {
                  label: "Silver Raised Foil",
                  value: "silver_raised_foil",
                  priceAdder: 0.20,
                  description: "Elevated, 3D raised silver foil accents for a luxury feel.",
                  image: "/images/products/main%20page/business_cards_silver_raised_foil.png",
                },
              ],
            },
            {
              label: "Sides",
              options: [
                {
                  label: "Single-Sided",
                  value: "single",
                  priceAdder: 0,
                  priceMultiplier: 1.0,
                  description: "Printed on front side only.",
                },
                {
                  label: "Double-Sided",
                  value: "double",
                  priceAdder: 0,
                  priceMultiplier: 1.25,
                  description: "Printed on both front and back sides.",
                },
              ],
            },
            {
              label: "Corners",
              options: [
                {
                  label: "Standard Square Corners",
                  value: "square",
                  priceAdder: 0,
                },
                {
                  label: "Rounded Corners",
                  value: "rounded",
                  priceAdder: 0.05,
                },
              ],
            },
          ],
          qtyDiscount: "Predefined package quantities selected below",
          keyFeatures: [
            "Vibrant color offset printing",
            "Ultra-thick cardstock options",
            "Easy design templates",
          ],
          useCases: ["Networking events", "Customer takeaways"],
          specs: [
            { key: "Dimensions", value: '3.5" x 2" (Standard size)' },
            { key: "Standard Stock", value: "14pt semi gloss (profit maximizer)" },
            { key: "Premium Finishes", value: "Glossy, Soft Touch, Pearl" },
            { key: "Luxury Finishes", value: "Embossed Gloss, Gold Raised Foil, Silver Raised Foil" },
            { key: "Specialty Stocks", value: "Painted Edge, Ultra Thick, Clear Plastic" },
            { key: "Standard Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "What is the standard size of a business card?",
              a: 'The standard size for standard business cards is 3.5 inches by 2 inches. This fits perfectly into standard wallets, cardholders, and organizer slots.',
            },
            {
              q: "What is the difference between 14 pt and 16 pt cardstock?",
              a: 'The point (pt) unit measures paper thickness. 14 pt cardstock is the industry standard for high-quality business cards. 16 pt cardstock is thicker and sturdier, providing a heavier, more premium feel.',
            },
            {
              q: "Can I write on both matte and glossy business cards?",
              a: 'You can write on matte and uncoated cards using standard ballpoint pens or pencils. Glossy cards have a slick UV coating that resists ink, making them harder to write on.',
            },
            {
              q: "What is the difference between Pearl and Soft Touch finishes?",
              a: 'Pearl cardstock uses a specialized paper embedded with natural shimmering fibers that give the entire card a pearlescent sheen. Soft Touch is a velvet-matte protective coating applied after printing that gives the cards a soft, suede-like texture.',
            },
          ],
          reviews: [
            {
              author: "Marcus K., Event Director",
              rating: 5,
              text: "The metallic foil cards look amazing! They really capture attention when handed out. Exact color registration and excellent premium paper stock.",
            },
            {
              author: "Sarah J., Retail Manager",
              rating: 5,
              text: "I ordered the Pearl business cards and have received so many compliments on the shimmer. The offset print quality is pristine.",
            },
            {
              author: "David T., Startup Founder",
              rating: 5,
              text: "Sturdy 16 pt premium cards. Excellent price point and extremely fast turnaround. Will definitely reorder standard cards here.",
            },
          ],
          ctaHeading: "Design business cards now",
          ctaBody: "Upload your business info and logo to print double-sided cards fast.",
          ctaLabel: "Customize Cards",
        },
      },
      {
        id: "custom-postcards",
        name: "Postcards",
        description:
          "Hand out rich, full-color Custom Postcards at your event table to advertise promotions, catalog your services, or distribute coupons. Printed in high definition on heavy 14pt gloss cover paper, they feel substantial and professional. Choose between matte or high-gloss front finishes and custom sizes to create flyers, handouts, or mailers that prompt action from potential clients.",
        image: "/images/products/main%20page/postcard_glossy.png",
        price: "Starting at $60.00 for 100",
        config: {
          title: "Custom Postcards",
          quantityOptions: [100, 250, 500, 750, 1000, 1500, 2000],
          subtitle:
            "Standard promotional postcards printed in high definition gloss or matte cardstock.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF ALL POSTCARDS AND HANDOUTS",
          image: "/images/products/main%20page/postcard_glossy.png",
          images: [
            "/images/products/main%20page/postcard_glossy.png",
            "/images/products/main%20page/postcard_matte.png",
            "/images/products/main%20page/postcard_action_1.png",
            "/images/products/main%20page/postcard_action_2.png",
            "/images/products/main%20page/postcard_action_3.png",
          ],
          ratingCount: "280",
          ratingScore: "4.8",
          sizes: [
            {
              label: '4" x 6" Postcard',
              value: "4x6",
              basePrice: 0.60,
              quantityPrices: {
                100: 60.00,
                250: 100.00,
                500: 140.00,
                750: 165.00,
                1000: 180.00,
                1500: 240.00,
                2000: 280.00,
              },
            },
            {
              label: '5" x 7" Postcard',
              value: "5x7",
              basePrice: 0.80,
              quantityPrices: {
                100: 80.00,
                250: 140.00,
                500: 200.00,
                750: 225.00,
                1000: 260.00,
                1500: 330.00,
                2000: 360.00,
              },
            },
            {
              label: '6" x 9" Postcard',
              value: "6x9",
              basePrice: 1.10,
              quantityPrices: {
                100: 110.00,
                250: 210.00,
                500: 290.00,
                750: 330.00,
                1000: 380.00,
                1500: 480.00,
                2000: 560.00,
              },
            },
            {
              label: '6" x 11" Postcard',
              value: "6x11",
              basePrice: 1.20,
              quantityPrices: {
                100: 120.00,
                250: 220.00,
                500: 310.00,
                750: 360.00,
                1000: 400.00,
                1500: 480.00,
                2000: 600.00,
              },
            },
          ],
          selects: [
            {
              label: "Paper Stock",
              options: [
                {
                  label: "Glossy",
                  value: "glossy",
                  priceAdder: 0,
                  description: "High-shine glossy finish that makes colors pop.",
                  image: "/images/products/main%20page/postcard_glossy.png",
                },
                {
                  label: "Matte",
                  value: "matte",
                  priceAdder: 0,
                  description: "Clean, professional look with a smooth non-glare matte finish.",
                  image: "/images/products/main%20page/postcard_matte.png",
                },
              ],
            },
            {
              label: "Orientation",
              options: [
                {
                  label: "Horizontal",
                  value: "horizontal",
                  priceAdder: 0,
                  description: "Landscape orientation layout.",
                },
                {
                  label: "Vertical",
                  value: "vertical",
                  priceAdder: 0,
                  description: "Portrait orientation layout.",
                },
              ],
            },
          ],
          qtyDiscount: "Save more when printing in bulk",
          keyFeatures: [
            "Premium heavyweight 14pt cardstock",
            "Vibrant double-sided printing available",
            "Premium glossy or matte textures",
          ],
          useCases: [
            "Product coupon codes",
            "Information spec sheets",
            "Direct mail advertisements",
          ],
          specs: [
            { key: "Material", value: "14pt Premium Cardstock" },
            { key: "Finish Options", value: "Glossy (front only) or Smooth Matte" },
          ],
          description:
            `<div class="space-y-4">
              <h3 class="text-lg font-bold text-slate-900">Custom Event Postcards & Table Handouts</h3>
              <p class="text-sm text-gray-700 leading-relaxed">
                Nano Signs provides high-quality postcard printing tailored for trade shows, networking events, and corporate displays nationwide. Printed on rigid 14pt cardstock, these postcards make outstanding spec sheets, coupon hand-outs, and direct mail ads. The clean, square-cornered trim ensures a simple, modern look that matches corporate guidelines.
              </p>
              <p class="text-sm text-gray-700 leading-relaxed">
                Choose between high-gloss coating for ultimate vibrance or matte finish for a elegant, non-glare appearance that is easy to write on. Personalize with your logo and messaging in our Design Studio or upload custom layouts to print single-sided or double-sided.
              </p>
            </div>`,
          faqs: [
            {
              q: "What paper stock options do you offer for custom postcards?",
              a: "We print our postcards on premium heavy 14pt glossy cover or matte cardstock, giving them a stiff and substantial feel. Our glossy finish offers a high-shine coating that enhances photographic prints, while our smooth matte finish offers an elegant, writeable surface that resists smudging.",
            },
            {
              q: "Can I print on both the front and back of the postcards?",
              a: "Yes, absolutely! We offer both single-sided and double-sided full-color printing. Double-sided printing is highly recommended for direct mailers so you can place address and postage details on one side and a beautiful visual promotion on the other.",
            },
            {
              q: "Are your postcards compatible with direct mail services like EDDM?",
              a: "Yes! Our postcards are cut with square corners (no round cornering) to comply with Canada Post and USPS direct mail standards. Popular EDDM sizes like 6\" x 9\" and 6\" x 11\" are fully supported.",
            },
            {
              q: "What is the difference between glossy and matte postcard finishes?",
              a: "Glossy paper has a reflective coating that makes images pop with intense color and deep contrasts, perfect for real estate flyers. Matte finish is non-reflective, soft to the touch, and makes text highly legible, ideal for info-dense postcards.",
            },
            {
              q: "Do you offer layout templates for designing postcards?",
              a: "Yes, our online Design Studio provides easy-to-use layouts, shapes, cliparts, and text boxes. You can design your custom postcard from scratch or upload a print-ready PDF/AI file directly to place your order.",
            },
          ],
          reviews: [
            {
              author: "Tina M., Sales Rep",
              rating: 5,
              text: "Used these as handout spec sheets for our trade show in Fort Lauderdale. Colors are bright, and the 14pt stock feels very thick and expensive. Highly recommended local print shop!",
            },
            {
              author: "Robert G., General Contractor",
              rating: 5,
              text: "Durable, thick cards. Square corners look very modern. Handed out to clients and got a great response.",
            },
          ],
          ctaHeading: "Build flyers & postcards",
          ctaBody: "Design promotional cards to hand out at your event tables.",
          ctaLabel: "Customize Postcards",
        },
      },
    ],
  },
  "custom-decals": {
    title: "Custom Decals",
    breadcrumbLabel: "Custom Decals",
    description:
      "Discover our full lineup of custom decal solutions, including vinyl decals, static clings, sticker sheets, and roll labels.",
    heroImage: "/images/products/main%20page/stickers%20%26%20decals%20hero%20image.png",
    tabletHeroImage: "/images/products/main%20page/stickers%20%26%20decals%20hero%20image.png",
    mobileHeroImage: "/images/products/main%20page/stickers%20%26%20decals%20hero%20image.png",
    heroSubtitle: "Design It. Stick It. Leave Your Mark.",
    reviewRating: "4.9",
    reviewCount: "1,840",
    reviewQuote:
      "The custom window decals turned out perfectly! Extremely easy to apply without bubbles, and the resolution is incredibly sharp. Will buy again!",
    categoryDescriptionText:
      "Discover our full lineup of custom decal solutions, including vinyl decals, static clings, sticker sheets, and roll labels. Perfect for use indoors or out, our decals are built to last and ideal for everything from storefront displays to vehicle branding and promotional giveaways. Easily personalize your decals with our intuitive design tools by uploading your own artwork or choosing from our ready-made templates to get started today.",
    categorySecondaryImage: "/images/products/main%20page/custom_decals_desc.png",
    faqs: [
      {
        q: "What type of decal material should I choose?",
        a: "It depends on your surface and how you plan to use the decal. Clear decals are great for glass and offer a sleek, see-through look where the background shows through. Opaque decals have a solid white backing, making colors pop and providing full coverage making them ideal for most surfaces and long-term use. Static clings use no adhesive, are easy to reposition, and perfect for short-term use on smooth surfaces like windows. For bulk needs, sticker sheets and roll labels offer flexible, efficient options.",
      },
      {
        q: "Can these decals be used indoors and outdoors?",
        a: "Yes! We offer materials that suit both environments. Opaque vinyl and clear decals are durable enough for outdoor use, while static clings and wall decals are best for indoor or short-term outdoor placement.",
      },
      {
        q: "What surfaces do your decals stick to best?",
        a: "All our decals are made for smooth, non-porous surfaces like glass, metal, painted walls, and plastic. For best results, apply to clean, flat areas free of dust or texture.",
      },
      {
        q: "Are custom decals easy to apply and remove?",
        a: "Yes! Most apply with simple pressure and can be removed without damage. Static clings are especially easy to reposition or remove, while adhesive decals may require heat or adhesive remover for clean removal. Sticker sheets and roll labels are designed for peel-and-stick convenience and are easy to handle in bulk.",
      },
      {
        q: "Can I upload my own design or logo?",
        a: "Absolutely! You can upload your own artwork, logos, or images, or start with one of our pre-designed templates. Our design tool lets you customize text, colors, and layout—no design experience needed.",
      },
      {
        q: "What decal sizes do you offer?",
        a: "We offer a wide range of standard and custom sizes to fit your needs; whether it's a small window graphic or a large wall display. You can select your preferred size on each product page or enter a custom dimension if needed.",
      },
    ],
    products: [
      {
        id: "bumper-stickers",
        name: "Bumper Stickers",
        description:
          "Classic adhesive labels for car bumpers and windows. High visibility branding.",
        image: "/images/products/main%20page/bumper_sticker_product.png",
        price: "Starting at $2.24",
        badge: "Car Favorite",
        config: {
          title: "Custom Bumper Stickers",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Standard bumper stickers printed on waterproof, UV-proof outdoor vinyl adhesive.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF BUMPER STICKERS - SHIPS NEXT DAY",
          image: "/images/products/main%20page/bumper_sticker_product.png",
          ratingCount: "850",
          ratingScore: "4.8",
          sizes: [
            {
              label: '3" x 10" Rectangle Bumper Sticker',
              value: "3x10",
              basePrice: 2.24,
            },
            { label: '4" x 4" Circle Sticker', value: "4x4", basePrice: 3.49 },
          ],
          selects: [
            {
              label: "Finish Options",
              options: [
                {
                  label: "High Gloss Protective UV",
                  value: "gloss",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Bulk packs save up to 80% per sticker",
          keyFeatures: [
            "Premium 4mil vinyl layer",
            "Waterproof and car-wash safe",
            "Easy bubble-free application",
          ],
          useCases: [
            "Business giveaways",
            "School spirit labels",
            "Political campaigns",
          ],
          specs: [
            { key: "Material", value: "4mil calendered white gloss vinyl" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Print bumper stickers today",
          ctaBody: "Add custom text, sports numbers, or business graphics.",
          ctaLabel: "Customize Bumper Sticker",
        },
      },
      {
        id: "car-door-decals",
        name: "Car Door Decals",
        description:
          "Adhesive door decals for car bodies. Durable semi-permanent advertising.",
        image: "/images/products/main%20page/car_door_decal_product.png",
        price: "Starting at $23.86",
        config: {
          title: "Custom Car Door Decals",
          subtitle:
            "Professional semi-permanent adhesive branding decals for truck and car door panels.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF SEMI-PERMANENT DOOR DECALS",
          image: "/images/products/main%20page/car_door_decal_product.png",
          ratingCount: "320",
          ratingScore: "4.7",
          sizes: [
            {
              label: '12" x 18" Small Door Decal',
              value: "12x18",
              basePrice: 23.86,
            },
            {
              label: '18" x 24" Standard Door Decal',
              value: "18x24",
              basePrice: 34.99,
            },
          ],
          selects: [
            {
              label: "Vinyl Option",
              options: [
                {
                  label: "Opaque Adhesive Gloss Vinyl",
                  value: "opaque",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume discounts on door pairs",
          keyFeatures: [
            "High performance calendered vinyl",
            "Waterproof and UV laminated",
            "Semi-permanent solid adhesion",
          ],
          useCases: [
            "Business logos",
            "Regulation USDOT numbers",
            "Contractor branding",
          ],
          specs: [{ key: "Material", value: "4mil High-performance Vinyl" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Brand your fleet vehicles",
          ctaBody: "Design car door branding decals using our templates.",
          ctaLabel: "Customize Door Decal",
        },
      },
      {
        id: "car-window-decals",
        name: "Car Window Decals",
        description:
          "Rear and side window adhesive graphics, available in transparent and opaque materials.",
        image: "/images/products/main%20page/car_window_decal_product.png",
        price: "Starting at $23.86",
        config: {
          title: "Custom Car Window Decals",
          subtitle:
            "Highly visible rear window adhesive decals. Perfect for glass surfaces.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF WINDOW ADHESIVE DECALS",
          image: "/images/products/main%20page/car_window_decal_product.png",
          ratingCount: "285",
          ratingScore: "4.8",
          sizes: [
            {
              label: '12" x 18" Small Window Decal',
              value: "12x18",
              basePrice: 23.86,
            },
            {
              label: '18" x 24" Medium Window Decal',
              value: "18x24",
              basePrice: 34.99,
            },
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                {
                  label: "Opaque White Backing Vinyl",
                  value: "opaque",
                  priceAdder: 0,
                },
                {
                  label: "Clear Transparent Window Vinyl",
                  value: "clear",
                  priceAdder: 4.5,
                },
              ],
            },
          ],
          qtyDiscount: "Volume savings apply",
          keyFeatures: [
            "Window safe adhesive backing",
            "Vibrant inks pop on transparent base",
            "Rain and rear-wiper proof",
          ],
          useCases: [
            "Rear window advertisement",
            "Store hours",
            "Reg numbers on windows",
          ],
          specs: [
            { key: "Material", value: "4mil window-form adhesive vinyl" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Make your rear window sell",
          ctaBody:
            "Build rear window banners with easy-to-read font and phone info.",
          ctaLabel: "Customize Window Decal",
        },
      },
      {
        id: "window-decals",
        name: "Window Decals",
        description:
          "Adhesive signage for business storefront windows and glass panels.",
        image: "/images/products/main%20page/vinyl_sticker.png",
        price: "Starting at $23.86",
        badge: "Best Seller",
        config: {
          title: "Custom Storefront Window Decals",
          subtitle:
            "Professional adhesive decals for storefront glass, entrances, and office doors.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF STOREFRONT WINDOW DECALS",
          image: "/images/products/main%20page/vinyl_sticker.png",
          images: [
            "/images/products/main%20page/vinyl_sticker.png",
            "/images/products/gallery/vinyl_decal_use_1.png",
            "/images/products/gallery/vinyl_decal_use_1.png",
            "/images/products/gallery/vinyl_decal_use_1.png",
          ],
          ratingCount: "940",
          ratingScore: "4.9",
          sizes: [
            {
              label: '12" x 18" Small Window Decal',
              value: "12x18",
              basePrice: 23.86,
            },
            {
              label: '18" x 24" Standard Window Decal',
              value: "18x24",
              basePrice: 34.99,
            },
            {
              label: '24" x 36" Large Window Decal',
              value: "24x36",
              basePrice: 54.99,
            },
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                {
                  label: "Opaque White Adhesive Gloss",
                  value: "opaque",
                  priceAdder: 0,
                  description:
                    "Solid background makes colors extremely vibrant.",
                },
                {
                  label: "Clear Transparent Adhesive Glass",
                  value: "clear",
                  priceAdder: 4.0,
                  description: "Allows see-through glass margins.",
                },
                {
                  label: "Frosted Glass Etched Finish",
                  value: "frosted",
                  priceAdder: 12.0,
                  description:
                    "Offers privacy with a premium sandblasted look.",
                },
              ],
            },
          ],
          qtyDiscount: "Saves up to 15% on commercial building orders",
          keyFeatures: [
            "Weatherproof outdoor vinyl print",
            "Apply on inside or outside of glass",
            "Vibrant UV inks resist fading",
          ],
          useCases: [
            "Business hours lists",
            "Storefront branding logos",
            "Open/Closed door banners",
            "Office partition privacy",
          ],
          specs: [
            { key: "Thickness", value: "4mil self-adhesive PVC" },
            {
              key: "Adhesive Type",
              value: "Low-residue pressure-activated acrylic",
            },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Brand your glass fronts",
          ctaBody: "Order clean die-cut window layouts or frosted bands.",
          ctaLabel: "Customize Window Decal",
        },
      },
      {
        id: "roll-labels",
        name: "Roll Labels",
        description:
          "Bulk promotional logo stickers printed on paper or plastic rolls, perfect for packaging.",
        image: "/images/products/main%20page/roll_labels_product.png",
        price: "Starting at $0.54 each",
        config: {
          title: "Custom Printed Roll Labels",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Bulk logo and product label rolls, perfect for quick peeling, boxing, and product jars.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF ALL BULK ROLL LABELS",
          image: "/images/products/main%20page/roll_labels_product.png",
          ratingCount: "410",
          ratingScore: "4.8",
          sizes: [
            { label: '2" x 2" Round Label', value: "2x2", basePrice: 0.54 },
            { label: '3" x 3" Square Label', value: "3x3", basePrice: 0.75 },
            { label: '4" x 2" Rectangle Label', value: "4x2", basePrice: 0.85 },
          ],
          selects: [
            {
              label: "Paper Quality",
              options: [
                {
                  label: "Gloss White Paper (BOPP)",
                  value: "gloss_paper",
                  priceAdder: 0,
                },
                {
                  label: "Clear Polypropylene Film",
                  value: "clear_film",
                  priceAdder: 0.1,
                },
              ],
            },
          ],
          qtyDiscount:
            "Pricing drops as low as $0.05 per label in high bulk quantities",
          keyFeatures: [
            'Wound on standard 3" cardboard cores',
            "Easy machine or hand dispensing",
            "Vibrant colors",
          ],
          useCases: [
            "Product jar branding",
            "Takeout bag sealing stickers",
            "Retail box shipping labels",
          ],
          specs: [{ key: "Material", value: "Premium BOPP adhesive stock" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Print product packaging rolls",
          ctaBody:
            "Design labels in bulk for box sealing and retail containers.",
          ctaLabel: "Customize Roll Labels",
        },
      },
      {
        id: "window-clings",
        name: "Static Window Clings",
        description:
          "Glueless static clings that stick to glass using static energy. Easy to reposition.",
        image:
          "/images/products/main%20page/window_clings_product.png",
        price: "Starting at $62.96",
        config: {
          title: "Static Window Clings",
          subtitle:
            "No-adhesive window clings. Slide in place, remove, and reuse with static cling science.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF REPOSITIONABLE WINDOW CLINGS",
          image:
            "/images/products/main%20page/window_clings_product.png",
          ratingCount: "220",
          ratingScore: "4.7",
          sizes: [
            {
              label: '12" x 18" Small Window Cling',
              value: "12x18",
              basePrice: 62.96,
            },
            {
              label: '18" x 24" Medium Window Cling',
              value: "18x24",
              basePrice: 79.99,
            },
            {
              label: '24" x 36" Large Window Cling',
              value: "24x36",
              basePrice: 99.99,
            },
          ],
          selects: [
            {
              label: "Cling Attachment side",
              options: [
                {
                  label: "Face Cling (Apply inside glass looking out)",
                  value: "face_cling",
                  priceAdder: 0,
                },
                {
                  label: "Back Cling (Apply outside glass looking in)",
                  value: "back_cling",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Saves with multi-clings packs",
          keyFeatures: [
            "Zero adhesive residue",
            "100% repositionable & reusable",
            "Clings to smooth glass surfaces",
          ],
          useCases: [
            "Temporary retail campaigns",
            "Holiday promotional banners",
            "Car service reminder tags",
          ],
          specs: [
            { key: "Material", value: "7.5mil static-cling gloss PVC film" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Get flexible glass branding",
          ctaBody: "Order clings that peel right off without clean-up.",
          ctaLabel: "Customize Window Cling",
        },
      },
      {
        id: "sheet-stickers",
        name: "Sheet Stickers",
        description:
          "Multiple custom stickers printed on a flat sheet, perfect for retail labelling.",
        image: "/images/products/main%20page/sticker_and_labels.png",
        price: "Starting at $11.16",
        config: {
          title: "Custom Sheet Stickers",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Sticker sheets featuring multiple peel-off sticker cut contours on a single page.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF PRINTED STICKER SHEETS",
          image: "/images/products/main%20page/sticker_and_labels.png",
          images: [
            "/images/products/main%20page/sticker_and_labels.png",
            "/images/products/gallery/sticker_use_1.png",
            "/images/products/gallery/sticker_use_1.png",
            "/images/products/gallery/sticker_use_1.png",
          ],
          ratingCount: "340",
          ratingScore: "4.8",
          sizes: [
            {
              label: '8.5" x 11" Standard Sheet Size',
              value: "8.5x11",
              basePrice: 11.16,
            },
          ],
          selects: [
            {
              label: "Sticker Sheet material",
              options: [
                {
                  label: "Glossy White Sticker Paper",
                  value: "gloss_sheet",
                  priceAdder: 0,
                },
                {
                  label: "Matte White Sticker Paper",
                  value: "matte_sheet",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Saves up to 40% on bulk sheets",
          keyFeatures: [
            "Multiple stickers per sheet",
            "Durable peel-and-stick backings",
            "Contour kiss-cut contours",
          ],
          useCases: [
            "Product labeling",
            "Fun office handouts",
            "Packaging decorations",
          ],
          specs: [{ key: "Sheet Count", value: "Custom layouts per sheet" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Design multi-sticker layouts",
          ctaBody: "Order flat sheets containing multiple business stickers.",
          ctaLabel: "Customize Sticker Sheet",
        },
      },
      {
        id: "return-address-labels",
        name: "Return Address Labels",
        description:
          "Mini address stickers for envelope branding, packaging returns, and office logs.",
        image:
          "/images/products/main%20page/return_address_labels_product.png",
        price: "Starting at $0.14 each",
        config: {
          title: "Return Address Labels",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Convenient return address labels printed on premium sticky sheets.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF RETURN ADDRESS LABELS",
          image:
            "/images/products/main%20page/return_address_labels_product.png",
          ratingCount: "480",
          ratingScore: "4.9",
          sizes: [
            {
              label: '0.75" x 2.25" Mini Label size',
              value: "0.75x2.25",
              basePrice: 0.14,
            },
          ],
          selects: [
            {
              label: "Label Color Style",
              options: [
                {
                  label: "Standard White paper backing",
                  value: "white_back",
                  priceAdder: 0,
                },
                {
                  label: "Clear transparent window film",
                  value: "clear_back",
                  priceAdder: 0.05,
                },
              ],
            },
          ],
          qtyDiscount: "Pack options of 100, 250, 500",
          keyFeatures: [
            "Peel & stick quickly",
            "Vibrant black text layout",
            "Durable cardstock box container",
          ],
          useCases: [
            "Business correspondence envelopes",
            "Wedding invitations",
            "Product labels",
          ],
          specs: [
            { key: "Dimensions", value: "0.75 inches tall x 2.25 inches wide" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Design return labels",
          ctaBody: "Input your name and corporate address details.",
          ctaLabel: "Customize Address Labels",
        },
      },
    ],
  },
  "sign-accessories": {
    title: "Stands & Sign Holders",
    breadcrumbLabel: "Sign Accessories",
    description:
      "Premium stakes, frames and heavy duty steel mounts to hold your yard signs, outdoor notices, and trade show displays.",
    heroImage: "https://ext.same-assets.com/1114826555/1286398033.png",
    reviewRating: "4.8",
    reviewCount: "980",
    reviewQuote:
      "The H-frame stakes are rock solid. Held our yard signs through a nasty storm without budging an inch.",
    products: [
      {
        id: "h-frames",
        name: "Metal H-Frame Stakes",
        description:
          "Heavy duty metal wire stakes to hold corrugated plastic signs in lawns.",
        image: "https://ext.same-assets.com/1114826555/1286398033.png",
        price: "Starting at $1.49",
        config: {
          title: "Metal Yard Stakes (H-Frames)",
          subtitle:
            "Heavy duty galvanized steel wire stakes designed to hold 4mm coroplast yard signs.",
          breadcrumb: "Sign Holders",
          breadcrumbHref: "/sign-accessories",
          promoText: "25% OFF WIRE STAKES & HOLDERS",
          image: "https://ext.same-assets.com/1114826555/1286398033.png",
          ratingCount: "940",
          ratingScore: "4.8",
          sizes: [
            {
              label: '30" x 10" Standard Wire Stake',
              value: "30x10",
              basePrice: 1.99,
            },
            {
              label: '15" x 10" Half Size Stake',
              value: "15x10",
              basePrice: 1.49,
            },
          ],
          selects: [
            {
              label: "Wire Thickness Quality",
              options: [
                {
                  label: "Standard 9-Gauge Steel",
                  value: "9gauge",
                  priceAdder: 0,
                  description: "Classic sturdy wire, fits standard lawns.",
                },
                {
                  label: "Heavy Duty Galvanized Steel",
                  value: "heavy",
                  priceAdder: 1.25,
                  description: "Reinforced structure for clay or hard soils.",
                },
              ],
            },
          ],
          qtyDiscount:
            "Volume pricing drops under $0.99 for quantities over 100",
          keyFeatures: [
            "Corrosion-resistant steel",
            "Slides easily into yard sign flutes",
            "Steps directly into lawn",
            "Reusable seasonal hardware",
          ],
          useCases: [
            "Political campaigns",
            "Real estate open houses",
            "Contractor lawn advertising",
            "Community event notices",
          ],
          specs: [
            { key: "Material", value: "Galvanized Steel Wire" },
            { key: "Height", value: "30 inches standard" },
            {
              key: "Compatibility",
              value: "Fits standard 4mm corrugated yard signs",
            },
          ],
          faqs: [
            {
              q: "How do I install these stakes?",
              a: "Simply push the top prongs into the bottom center of the yard sign, then step the bottom crossbar into the soil.",
            },
          ],
          reviews: [
            {
              author: "Arthur L.",
              rating: 5,
              text: "Sturdy stakes. Did not bend even in dry Florida lawn dirt.",
            },
          ],
          ctaHeading: "Order stakes for your yard signs",
          ctaBody:
            "Pair stakes with your yard signs for a complete campaign ready to deploy.",
          ctaLabel: "Configure Stakes",
        },
      },
    ],
  },
  "marketing-materials": {
    title: "Marketing Materials",
    breadcrumbLabel: "Marketing Materials",
    heroSubtitle: "Professional Print. Promoted Brand.",
    description:
      "Grow your business and look professional with customized business cards, flyers, and brochures.",
    heroImage: "/images/products/main%20page/marketing%20_materials_hero_image.png",
    reviewRating: "4.9",
    reviewCount: "1,150",
    reviewQuote:
      "The flyers and folded menus turned out absolutely gorgeous! Perfect color alignment with our corporate branding guidelines and the paper quality is very thick.",
    categoryDescriptionText:
      `<div class="space-y-4">
        <h3 class="text-xl font-bold text-slate-900">Elevate Your Brand in Broward County with Premium Marketing Materials</h3>
        <p class="text-sm text-gray-700 leading-relaxed">
          At <strong>Nano Signs</strong>, we deliver industry-leading commercial printing and sign services designed to grab attention and convert leads. Serving <strong>Fort Lauderdale</strong>, <strong>Oakland Park</strong>, and the wider <strong>Broward County</strong> area, we specialize in high-definition print collateral that represents your business with distinction. Whether you need standard business cards for networking events, door hangers for targeted local neighborhood mailings, or folded brochures to pitch complex services, our state-of-the-art print production facilities ensure crisp details, harmonious colors, and premium paper weights.
        </p>
        <p class="text-sm text-gray-700 leading-relaxed">
          Our complete suite of custom marketing collateral includes premium business cards (including our 14pt semi-gloss profit maximizer), custom postcards and direct mailers, vibrant flyers and folded brochures, and pre-cut door hangers. We print on heavy cardstock and high-density text papers using advanced offset lithography. Plus, with our local facility advantages, we support next-day shipping throughout South Florida, ensuring you never show up empty-handed to your next client pitch or local tradeshow event.
        </p>
      </div>`,
    categorySecondaryImage: "/images/products/main%20page/marketing_materials_desc.png",
    faqs: [
      {
        q: "What cardstock and paper options do you offer?",
        a: "We offer a variety of professional materials tailored to each product. Our cards, door hangers, rack cards, and table tents are printed on thick 14pt or 16pt cardstock with gloss or matte finishes. Our flyers and brochures are printed on high-density 100lb glossy or matte text paper for high foldability.",
      },
      {
        q: "Can I write on the glossy printed materials?",
        a: "Glossy UV-coated materials have a slick finish that is resistant to standard ballpoint ink. If you need to write notes, dates, or prices on your handouts, we highly recommend choosing our Smooth Matte finish, which works perfectly with pens and pencils.",
      },
      {
        q: "Do you offer folding services for brochures?",
        a: "Yes! When configuring our 8.5\" x 11\" flyers, you can select 'Tri-Fold' or 'Half-Fold' finishes. Your brochures will arrive pre-folded and event-ready at no extra hassle.",
      },
    ],
    products: [
      {
        id: "business-cards",
        name: "Business Cards",
        description:
          'Leave a lasting impression with premium Custom Business Cards. Printed on ultra-thick 14pt or 16pt cardstock with offset high-resolution printing, these standard 3.5" x 2" cards represent your business with absolute quality. Customize your finish with professional non-glare matte or high-gloss UV sheen, and choose single or double-sided layouts to distribute to tradeshow attendees, recruits, and new leads.',
        image: "/images/products/main%20page/business_cards.png",
        price: "Starting at $29.98",
        config: {
          title: "Custom Business Cards",
          quantityOptions: [100, 250, 500, 1000, 1500, 2000, 2500, 5000, 10000],
          quantityPrices: {
            100: 29.98,
            250: 39.98,
            500: 49.98,
            1000: 79.98,
            1500: 117.98,
            2000: 145.98,
            2500: 179.98,
            5000: 319.98,
            10000: 559.98,
          },
          subtitle:
            'Standard 3.5" x 2" cards printed on ultra-thick cardstock with multiple finishes.',
          breadcrumb: "Marketing",
          breadcrumbHref: "/marketing-materials",
          promoText: "25% OFF ALL CORPORATE STATIONERY",
          image: "/images/products/main%20page/business_cards.png",
          ratingCount: "1120",
          ratingScore: "4.9",
          sizes: [
            {
              label: '3.5" x 2" Standard size',
              value: "3.5x2",
              basePrice: 29.98,
            },
          ],
          selects: [
            {
              label: "Paper Stock & Finish",
              options: [
                {
                  label: "14pt semi gloss (profit maximizer)",
                  value: "semi_gloss",
                  priceAdder: 0,
                  description: "Clean, professional look with a smooth semi-gloss finish. Easy to write on.",
                  image: "/images/products/main%20page/business_cards_semigloss.png",
                },
                {
                  label: "Glossy",
                  value: "glossy",
                  priceAdder: 0,
                  description: "High-shine glossy finish that makes colors pop.",
                  image: "/images/products/main%20page/business_cards_glossy.png",
                },
                {
                  label: "Embossed Gloss",
                  value: "embossed_gloss",
                  priceAdder: 0.15,
                  description: "Raised clear gloss accents for a textured, high-end feel.",
                  image: "/images/products/main%20page/business_cards_foil.png",
                },
                {
                  label: "Soft Touch",
                  value: "soft_touch",
                  priceAdder: 0.12,
                  description: "Velvety coating that feels soft and premium in the hand.",
                  image: "/images/products/main%20page/business_cards.png",
                },
                {
                  label: "Painted Edge",
                  value: "painted_edge",
                  priceAdder: 0.25,
                  description: "Thick cards with colored edges for a bold, modern look.",
                  image: "/images/products/main%20page/business_cards_painted_edge.png",
                },
                {
                  label: "Ultra Thick",
                  value: "ultra_thick",
                  priceAdder: 0.23,
                  description: "Double-thick cardstock for a substantial, sturdy feel.",
                  image: "/images/products/main%20page/business_cards_ultra_thick.png",
                },
                {
                  label: "Clear Plastic",
                  value: "clear_plastic",
                  priceAdder: 0.35,
                  description: "See-through modern plastic cards that make a unique statement.",
                  image: "/images/products/main%20page/business_cards_clear_plastic.png",
                },
                {
                  label: "Pearl",
                  value: "pearl",
                  priceAdder: 0.12,
                  description: "Glimmering, light-catching surface with a pearlescent shine.",
                  image: "/images/products/main%20page/business_cards_pearl.png",
                },
                {
                  label: "Gold Raised Foil",
                  value: "gold_raised_foil",
                  priceAdder: 0.20,
                  description: "Elevated, 3D raised gold foil accents for a luxury feel.",
                  image: "/images/products/main%20page/business_cards_gold_raised_foil.png",
                },
                {
                  label: "Silver Raised Foil",
                  value: "silver_raised_foil",
                  priceAdder: 0.20,
                  description: "Elevated, 3D raised silver foil accents for a luxury feel.",
                  image: "/images/products/main%20page/business_cards_silver_raised_foil.png",
                },
              ],
            },
            {
              label: "Sides",
              options: [
                {
                  label: "Single-Sided",
                  value: "single",
                  priceAdder: 0,
                  priceMultiplier: 1.0,
                  description: "Printed on front side only.",
                },
                {
                  label: "Double-Sided",
                  value: "double",
                  priceAdder: 0,
                  priceMultiplier: 1.25,
                  description: "Printed on both front and back sides.",
                },
              ],
            },
            {
              label: "Corners",
              options: [
                {
                  label: "Standard Square Corners",
                  value: "square",
                  priceAdder: 0,
                },
                {
                  label: "Rounded Corners",
                  value: "rounded",
                  priceAdder: 0.05,
                },
              ],
            },
          ],
          qtyDiscount: "Predefined package quantities selected below",
          keyFeatures: [
            "Vibrant color offset printing",
            "Ultra-thick cardstock options",
            "Easy design templates",
          ],
          useCases: ["Networking events", "Customer takeaways", "Loyalty stamp cards", "Appointment reminders"],
          specs: [
            { key: "Dimensions", value: '3.5" x 2" (Standard size)' },
            { key: "Standard Stock", value: "14pt semi gloss (profit maximizer)" },
            { key: "Premium Finishes", value: "Glossy, Soft Touch, Pearl" },
            { key: "Luxury Finishes", value: "Embossed Gloss, Gold Raised Foil, Silver Raised Foil" },
            { key: "Specialty Stocks", value: "Painted Edge, Ultra Thick, Clear Plastic" },
            { key: "Standard Turnaround", value: "Next Business Day" },
          ],
          description:
            `<div class="space-y-4">
              <h3 class="text-lg font-bold text-slate-900">Premium Business Cards Printed in Fort Lauderdale</h3>
              <p class="text-sm text-gray-700 leading-relaxed">
                Make a striking professional statement with custom business cards from Nano Signs. Serving Fort Lauderdale, Oakland Park, and Broward County, we specialize in high-definition offset business card printing that sets your brand apart. Our cards are printed on ultra-sturdy 14pt semi-gloss cardstock (our profit maximizer option) or heavy-weight 16pt stock, ensuring they never feel flimsy or cheap. Choose between a glossy UV protective coating for high vibrant contrast, or a smooth matte coating for a sophisticated, writable surface.
              </p>
              <p class="text-sm text-gray-700 leading-relaxed">
                Whether you are an independent contractor in Broward County, a startup founder in Oakland Park, or a real estate agent in Fort Lauderdale, having a pocket full of pristine, double-sided business cards ensures you are always ready to network. Customize yours with raised foil accents, custom shapes, or painted edges to leave a memorable physical impression.
              </p>
            </div>`,
          faqs: [
            {
              q: "What is the standard size of a business card?",
              a: 'The standard size for standard business cards is 3.5 inches by 2 inches. This fits perfectly into standard wallets, cardholders, and organizer slots.',
            },
            {
              q: "What is the difference between 14 pt and 16 pt cardstock?",
              a: 'The point (pt) unit measures paper thickness. 14 pt cardstock is the industry standard for high-quality business cards. 16 pt cardstock is thicker and sturdier, providing a heavier, more premium feel.',
            },
            {
              q: "Can I write on both matte and glossy business cards?",
              a: 'You can write on matte and uncoated cards using standard ballpoint pens or pencils. Glossy cards have a slick UV coating that resists ink, making them harder to write on.',
            },
            {
              q: "What is the difference between Pearl and Soft Touch finishes?",
              a: 'Pearl cardstock uses a specialized paper embedded with natural shimmering fibers that give the entire card a pearlescent sheen. Soft Touch is a velvet-matte protective coating applied after printing that gives the cards a soft, suede-like texture.',
            },
            {
              q: "What is the minimum order quantity for custom business cards?",
              a: "Our minimum quantity starts at just 100 cards. We provide significant bulk printing discounts for quantities of 250, 500, 1000, and up to 10,000 cards per order, giving you maximum value.",
            },
          ],
          reviews: [
            {
              author: "Marcus K., Event Director",
              rating: 5,
              text: "The metallic foil cards look amazing! They really capture attention when handed out. Exact color registration and excellent premium paper stock.",
            },
            {
              author: "Sarah J., Retail Manager",
              rating: 5,
              text: "I ordered the Pearl business cards and have received so many compliments on the shimmer. The offset print quality is pristine.",
            },
            {
              author: "David T., Startup Founder",
              rating: 5,
              text: "Sturdy 16 pt premium cards. Excellent price point and extremely fast turnaround. Will definitely reorder standard cards here.",
            },
          ],
          ctaHeading: "Design business cards now",
          ctaBody: "Upload your business info and logo to print double-sided cards fast.",
          ctaLabel: "Customize Cards",
        },
      },
      {
        id: "postcards",
        name: "Custom Postcards",
        description:
          "High-quality postcards for direct mail, handouts, and promotional inserts.",
        image: "/images/products/main%20page/postcard_glossy.png",
        price: "Starting at $60.00 for 100",
        badge: "Event Choice",
        config: {
          title: "Custom Postcards",
          quantityOptions: [100, 250, 500, 750, 1000, 1500, 2000],
          subtitle:
            "Full-color promotional postcards printed on premium thick cardstock.",
          breadcrumb: "Marketing",
          breadcrumbHref: "/marketing-materials",
          promoText: "25% OFF ALL EVENT MARKETING PRINTS",
          image: "/images/products/main%20page/postcard_glossy.png",
          images: [
            "/images/products/main%20page/postcard_glossy.png",
            "/images/products/main%20page/postcard_matte.png",
            "/images/products/main%20page/postcard_action_1.png",
            "/images/products/main%20page/postcard_action_2.png",
            "/images/products/main%20page/postcard_action_3.png",
          ],
          ratingCount: "580",
          ratingScore: "4.8",
          sizes: [
            {
              label: '4" x 6" Standard Postcard',
              value: "4x6",
              basePrice: 0.60,
              quantityPrices: {
                100: 60.00,
                250: 100.00,
                500: 140.00,
                750: 165.00,
                1000: 180.00,
                1500: 240.00,
                2000: 280.00,
              },
            },
            {
              label: '5" x 7" Medium Postcard',
              value: "5x7",
              basePrice: 0.80,
              quantityPrices: {
                100: 80.00,
                250: 140.00,
                500: 200.00,
                750: 225.00,
                1000: 260.00,
                1500: 330.00,
                2000: 360.00,
              },
            },
            {
              label: '6" x 9" Large Postcard',
              value: "6x9",
              basePrice: 1.10,
              quantityPrices: {
                100: 110.00,
                250: 210.00,
                500: 290.00,
                750: 330.00,
                1000: 380.00,
                1500: 480.00,
                2000: 560.00,
              },
            },
            {
              label: '6" x 11" Jumbo Postcard',
              value: "6x11",
              basePrice: 1.20,
              quantityPrices: {
                100: 120.00,
                250: 220.00,
                500: 310.00,
                750: 360.00,
                1000: 400.00,
                1500: 480.00,
                2000: 600.00,
              },
            },
          ],
          selects: [
            {
              label: "Paper Stock",
              options: [
                {
                  label: "Glossy",
                  value: "glossy",
                  priceAdder: 0,
                  description: "High-shine glossy finish that makes colors pop.",
                  image: "/images/products/main%20page/postcard_glossy.png",
                },
                {
                  label: "Matte",
                  value: "matte",
                  priceAdder: 0,
                  description: "Clean, professional look with a smooth non-glare matte finish.",
                  image: "/images/products/main%20page/postcard_matte.png",
                },
              ],
            },
            {
              label: "Orientation",
              options: [
                {
                  label: "Horizontal",
                  value: "horizontal",
                  priceAdder: 0,
                  description: "Landscape orientation layout.",
                },
                {
                  label: "Vertical",
                  value: "vertical",
                  priceAdder: 0,
                  description: "Portrait orientation layout.",
                },
              ],
            },
          ],
          qtyDiscount: "Save more when printing in bulk",
          keyFeatures: [
            "Archival grade cardstock",
            "Stunning gloss or writable matte finish",
            "Double sided color printing available",
          ],
          useCases: [
            "Direct mail advertising",
            "Coupons & promotional hand-outs",
            "Event invitations",
            "Product package inserts",
          ],
          specs: [
            { key: "Material", value: "14pt Premium Cardstock" },
            { key: "Finish Options", value: "Glossy (front only) or Smooth Matte" },
          ],
          description:
            `<div class="space-y-4">
              <h3 class="text-lg font-bold text-slate-900">Custom Printed Postcards in Fort Lauderdale & Oakland Park</h3>
              <p class="text-sm text-gray-700 leading-relaxed">
                Take your local direct mail marketing or client handouts to the next level with premium custom postcards from Nano Signs. Serving Broward County, Fort Lauderdale, and Oakland Park, FL, we offer crisp, full-color postcard printing that is perfect for neighborhood outreach, retail promotions, coupons, and corporate invitations. Our postcards are cut with square corners to comply with standard USPS and Canada Post specifications, guaranteeing a clean and simple product-focused aesthetic.
              </p>
              <p class="text-sm text-gray-700 leading-relaxed">
                Choose between high-shine glossy finish that accentuates photographic imagery and makes colors pop, or smooth matte cardstock for a non-glare, writeable finish. With single-sided or double-sided printing options, you can design your postcard layout to showcase eye-catching graphics on the front while keeping the back clear for address, postage, and local business details.
              </p>
            </div>`,
          faqs: [
            {
              q: "What paper stock options do you offer for custom postcards?",
              a: "We print our postcards on premium heavy 14pt glossy cover or matte cardstock, giving them a stiff and substantial feel. Our glossy finish offers a high-shine coating that enhances photographic prints, while our smooth matte finish offers an elegant, writeable surface that resists smudging.",
            },
            {
              q: "Can I print on both the front and back of the postcards?",
              a: "Yes, absolutely! We offer both single-sided and double-sided full-color printing. Double-sided printing is highly recommended for direct mailers so you can place address and postage details on one side and a beautiful visual promotion on the other.",
            },
            {
              q: "Are your postcards compatible with direct mail services like EDDM?",
              a: "Yes! Our postcards are cut with square corners (no round cornering) to comply with Canada Post and USPS direct mail standards. Popular EDDM sizes like 6\" x 9\" and 6\" x 11\" are fully supported.",
            },
            {
              q: "What is the difference between glossy and matte postcard finishes?",
              a: "Glossy paper has a reflective coating that makes images pop with intense color and deep contrasts, perfect for real estate flyers. Matte finish is non-reflective, soft to the touch, and makes text highly legible, ideal for info-dense postcards.",
            },
            {
              q: "Do you offer layout templates for designing postcards?",
              a: "Yes, our online Design Studio provides easy-to-use layouts, shapes, cliparts, and text boxes. You can design your custom postcard from scratch or upload a print-ready PDF/AI file directly to place your order.",
            },
          ],
          reviews: [
            {
              author: "Elena R., Boutique Owner",
              rating: 5,
              text: "The matte postcards were perfect for our summer collection mailer! They feel very high-quality and the printing is incredibly sharp. Excellent Broward local service.",
            },
            {
              author: "Jason L., Realtor",
              rating: 5,
              text: "Exactly what I was looking for. No rounded corners, very simple and professional. Will buy all my listing postcards here.",
            },
          ],
          ctaHeading: "Ready to design postcards?",
          ctaBody:
            "Custom print postcards using our online template catalog or upload artwork.",
          ctaLabel: "Customize Postcards",
        },
      },
      {
        id: "flyers",
        name: "Custom Flyers",
        description:
          "Vibrant single or double sided flyers to promote events, menus, and packages.",
        image: "/images/products/main%20page/flyer_glossy.png",
        price: "Starting at $74.00 for 100",
        badge: "Best Value",
        config: {
          title: "Custom Flyers",
          quantityOptions: [100, 250, 500, 750, 1000, 1500, 2000, 2500],
          subtitle:
            "Premium full color flyers printed on professional paper stock.",
          breadcrumb: "Marketing",
          breadcrumbHref: "/marketing-materials",
          promoText: "25% OFF BULK EVENT FLYERS",
          image: "/images/products/main%20page/flyer_glossy.png",
          images: [
            "/images/products/main%20page/flyer_glossy.png",
            "/images/products/main%20page/flyer_matte.png",
          ],
          ratingCount: "430",
          ratingScore: "4.7",
          sizes: [
            {
              label: '5.5" x 8.5" Small Flyer',
              value: "5.5x8.5",
              basePrice: 0.74,
              quantityPrices: {
                100: 74.00,
                250: 120.00,
                500: 160.00,
                750: 195.00,
                1000: 240.00,
                1500: 330.00,
                2000: 400.00,
                2500: 480.00,
              },
            },
            {
              label: '8.5" x 14" Medium Flyer',
              value: "8.5x14",
              basePrice: 1.08,
              quantityPrices: {
                100: 108.00,
                250: 220.00,
                500: 330.00,
                750: 390.00,
                1000: 460.00,
                1500: 570.00,
                2000: 680.00,
                2500: 768.00,
              },
            },
            {
              label: '11" x 17" Large Flyer',
              value: "11x17",
              basePrice: 1.48,
              quantityPrices: {
                100: 148.00,
                250: 285.00,
                500: 440.00,
                750: 525.00,
                1000: 700.00,
                1500: 1050.00,
                2000: 1400.00,
                2500: 1698.00,
              },
            },
          ],
          selects: [
            {
              label: "Paper Stock",
              options: [
                {
                  label: "Glossy",
                  value: "glossy",
                  priceAdder: 0,
                  description: "High-shine glossy finish that makes colors pop.",
                  image: "/images/products/main%20page/flyer_glossy.png",
                },
                {
                  label: "Matte",
                  value: "matte",
                  priceAdder: 0,
                  description: "Clean, professional look with a smooth non-glare matte finish.",
                  image: "/images/products/main%20page/flyer_matte.png",
                },
              ],
            },
            {
              label: "Orientation",
              options: [
                {
                  label: "Vertical",
                  value: "vertical",
                  priceAdder: 0,
                  description: "Portrait orientation layout.",
                },
                {
                  label: "Horizontal",
                  value: "horizontal",
                  priceAdder: 0,
                  description: "Landscape orientation layout.",
                },
              ],
            },
          ],
          qtyDiscount: "Save more when printing in bulk",
          keyFeatures: [
            "High definition color reproduction",
            "Vibrant double-sided printing available",
            "Premium glossy or matte textures",
          ],
          useCases: [
            "Event handouts",
            "Restaurant menus",
            "Real estate listing sheets",
            "Corporate handouts",
          ],
          specs: [
            { key: "Material", value: "Premium Glossy or Matte paper stock" },
            { key: "Printing", value: "High definition offset printing" },
          ],
          description:
            `<div class="space-y-4">
              <h3 class="text-lg font-bold text-slate-900">Custom Flyer Printing in Fort Lauderdale</h3>
              <p class="text-sm text-gray-700 leading-relaxed">
                Promote your next corporate event, local restaurant menu, or real estate open house with custom flyers from Nano Signs. Serving Oakland Park, Fort Lauderdale, and all of Broward County, we specialize in high-definition offset flyer printing with fast turnarounds. Printed on premium 100lb glossy text paper (which makes colors pop with photographic vibrance) or smooth matte text paper (ideal for a sophisticated, glare-free readable finish), our flyers offer a thick, substantial feel.
              </p>
              <p class="text-sm text-gray-700 leading-relaxed">
                Choose single or double-sided layouts and orientation options (horizontal or vertical) to match your campaign goals. Hand them out at local South Florida events, display them at front desks, or mail them directly to neighborhood prospects.
              </p>
            </div>`,
          faqs: [
            {
              q: "What sizes are available for custom flyers?",
              a: "Our flyers are available in three versatile sizes: 5.5\"x8.5\" (compact handouts), 8.5\"x14\" (legal-size sheets), and 11\"x17\" (large display posters).",
            },
            {
              q: "What paper stocks are used for printing flyers?",
              a: "We use high-density 100lb glossy text paper and smooth matte text paper, ensuring a thick, premium feel without compromising on flexibility.",
            },
            {
              q: "Are flyers printed on both sides?",
              a: "Yes! You can choose between single-sided and double-sided printing. Double-sided flyers are excellent for menus, pamphlets, and product sheets.",
            },
            {
              q: "Can I fold these flyers to make brochures?",
              a: "While we offer folded brochures separately, our flyers are shipped flat. If you want pre-folded handouts, we recommend ordering from our Brochures section.",
            },
            {
              q: "Is there a bulk discount for large flyer orders?",
              a: "Yes! We offer bulk tier discounts starting at 250 flyers. The unit price decreases significantly as you print higher quantities (up to 2,500 units).",
            },
          ],
          reviews: [
            {
              author: "Kevin M., Event Coordinator",
              rating: 5,
              text: "The glossy 100lb text flyers looked stunning under the venue lighting. Very fast local pickup in Broward County.",
            },
            {
              author: "Maria S., Restaurant Owner",
              rating: 5,
              text: "Printed our double-sided takeout menus on the matte stock. Beautifully clean, easy to read, and very thick. Excellent value!",
            },
          ],
          ctaHeading: "Design flyers online",
          ctaBody:
            "Input your logo, menus, and corporate text using templates.",
          ctaLabel: "Customize Flyers",
        },
      },
      {
        id: "brochures",
        name: "Folded Brochures",
        description:
          "Professional tri-fold or half-fold brochures to showcase your services, menus, and business details.",
        image: "/images/products/main%20page/custom_brochures.png",
        price: "Starting at $29.99 for 50",
        badge: "Corporate Choice",
        config: {
          title: "Folded Brochures",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Premium full color folded brochures printed on professional paper stock.",
          breadcrumb: "Marketing",
          breadcrumbHref: "/marketing-materials",
          promoText: "25% OFF FOLDED BUSINESS BROCHURES",
          image: "/images/products/main%20page/custom_brochures.png",
          ratingCount: "320",
          ratingScore: "4.8",
          sizes: [
            {
              label: '8.5" x 11" Standard Brochure',
              value: "8.5x11",
              basePrice: 29.99,
            },
          ],
          selects: [
            {
              label: "Paper Quality",
              options: [
                {
                  label: "100lb Glossy Text",
                  value: "100lb_gloss",
                  priceAdder: 0,
                },
                {
                  label: "100lb Matte Text",
                  value: "100lb_matte",
                  priceAdder: 0,
                },
                {
                  label: "80lb Recycled Text",
                  value: "80lb_recycled",
                  priceAdder: 3.0,
                },
              ],
            },
            {
              label: "Fold Style",
              options: [
                { label: "Tri-Fold", value: "tri_fold", priceAdder: 8.0 },
                { label: "Half-Fold", value: "half_fold", priceAdder: 5.0 },
              ],
            },
          ],
          qtyDiscount: "Save more when printing in packs of 100+",
          keyFeatures: [
            "High definition color reproduction",
            "Pre-folded and ready to display",
            "Tri-fold & half-fold options",
          ],
          useCases: [
            "Business guides & service lists",
            "Restaurant take-out menus",
            "Marketing handouts",
            "Product display pamphlets",
          ],
          specs: [
            { key: "Material", value: "100lb Text Paper" },
            { key: "Printing", value: "Offset lithography" },
          ],
          description:
            `<div class="space-y-4">
              <h3 class="text-lg font-bold text-slate-900">Custom Folded Brochures in Broward County</h3>
              <p class="text-sm text-gray-700 leading-relaxed">
                Present your products, services, or menu items in an elegant, structured format with custom folded brochures from Nano Signs. Serving businesses in Fort Lauderdale, Oakland Park, and neighboring South Florida cities, we provide high-definition brochure printing with clean scoring and machine-folding. Our standard 8.5" x 11" brochures are available in standard Tri-Fold or Half-Fold configurations, ensuring your layouts line up perfectly.
              </p>
              <p class="text-sm text-gray-700 leading-relaxed">
                Customize your print run with premium 100lb glossy text paper (vibrant and eye-catching), 100lb matte text paper (sophisticated, smudge-resistant), or 80lb recycled text paper for green-focused branding. Organize complex business information, portfolios, or restaurant menu items into readable panels that encourage prospective customers to learn more.
              </p>
            </div>`,
          faqs: [
            {
              q: "What fold styles do you offer for custom brochures?",
              a: "We offer pre-folded brochures in two styles: Tri-Fold (divided into 3 panels per side) and Half-Fold (folded down the middle into 4 pages).",
            },
            {
              q: "What paper qualities are available for brochures?",
              a: "You can select 100lb Glossy Text (ideal for vivid brochures), 100lb Matte Text (classy, readable), or 80lb Recycled Text for eco-friendly branding.",
            },
            {
              q: "What are the dimensions of the brochures?",
              a: "Our standard brochures start with flat sheets of 8.5\" x 11\" and are pre-folded to compact sizes (approx. 3.7\" x 8.5\" for tri-folds).",
            },
            {
              q: "Do the brochures arrive pre-folded?",
              a: "Yes, absolutely! We score and fold your brochures in-house, so they arrive fully assembled and ready to hand out.",
            },
            {
              q: "Can I design a brochure with custom layouts?",
              a: "Yes! Our online customizer lets you place images, logos, and descriptions in dedicated text panels matching the folding guidelines.",
            },
          ],
          reviews: [
            {
              author: "Clarissa W., Medical Clinic Manager",
              rating: 5,
              text: "The matte 100lb tri-fold brochures looked highly professional. Text is very sharp and the folds are perfectly aligned. Excellent South Florida printer.",
            },
            {
              author: "Daniel H., HVAC Owner",
              rating: 5,
              text: "Tri-fold brochures were perfect for listing our residential seasonal maintenance packages. Very sturdy paper weight.",
            },
          ],
          ctaHeading: "Design brochures online",
          ctaBody:
            "Create beautiful brochures with professional folding styles.",
          ctaLabel: "Customize Brochures",
        },
      },
      {
        id: "door-hangers",
        name: "Door Hangers",
        description:
          "Targeted local advertising hangers that slip easily onto front door handles.",
        image: "/images/products/main%20page/door_hangers.png",
        price: "Starting at $39.99 for 100",
        config: {
          title: "Custom Door Hangers",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Vibrant door hangers pre-cut with handle holes, perfect for local business advertising.",
          breadcrumb: "Marketing",
          breadcrumbHref: "/marketing-materials",
          promoText: "25% OFF BUSINESS DOOR HANGERS",
          image: "/images/products/main%20page/door_hangers.png",
          ratingCount: "310",
          ratingScore: "4.8",
          sizes: [
            {
              label: '3.5" x 8.5" Compact Hanger',
              value: "3.5x8.5",
              basePrice: 39.99,
            },
            {
              label: '4.25" x 11" Standard Large Hanger',
              value: "4.25x11",
              basePrice: 54.99,
            },
          ],
          selects: [
            {
              label: "Card Material",
              options: [
                {
                  label: "14pt Gloss Cardstock",
                  value: "14pt_gloss",
                  priceAdder: 0,
                },
                {
                  label: "14pt Matte Cardstock",
                  value: "14pt_matte",
                  priceAdder: 0,
                },
              ],
            },
            {
              label: "Handle Cutout Style",
              options: [
                {
                  label: 'Standard 1.25" Circle Hole with Slit',
                  value: "circle_slit",
                  priceAdder: 0,
                },
                {
                  label: "Curved Arch Hook Cut",
                  value: "arch_hook",
                  priceAdder: 4.0,
                },
              ],
            },
          ],
          qtyDiscount: "Bulk local campaigns save up to 70%",
          keyFeatures: [
            "Pre-cut hole and slit fits all door handles",
            "Durable 14pt thick cover stock",
            "Double-sided full color printing",
          ],
          useCases: [
            "Home services (lawn, roofing, cleaning)",
            "Political campaigning",
            "Local restaurant menu advertising",
            "Do Not Disturb door signs",
          ],
          specs: [
            { key: "Material", value: "14pt cardstock" },
            { key: "Hole Diameter", value: "1.25 inches standard" },
          ],
          description:
            `<div class="space-y-4">
              <h3 class="text-lg font-bold text-slate-900">Custom Door Hanger Printing in Fort Lauderdale & Oakland Park</h3>
              <p class="text-sm text-gray-700 leading-relaxed">
                Connect directly with local neighborhoods using custom door hangers from Nano Signs. Highly popular for landscaping, pressure washing, pest control, roofing, plumbing, and local restaurant delivery campaigns, door hangers provide a guaranteed physical touchpoint on the front doors of Fort Lauderdale, Oakland Park, and Broward County homes. Printed on heavy 14pt cardstock, these hangers hold up against South Florida's outdoor humidity without curling.
              </p>
              <p class="text-sm text-gray-700 leading-relaxed">
                Our door hangers are pre-cut with a circular hole and a slit (or curved arch hook) at the top, sliding effortlessly onto any standard handle. Design your custom door hangers with double-sided printing: use the front for bold, high-gloss promos and contact details, and the back for detailed service pricing or client reviews.
              </p>
            </div>`,
          faqs: [
            {
              q: "What sizes do you offer for door hangers?",
              a: "We provide two standard sizes: 3.5\" x 8.5\" (compact) and 4.25\" x 11\" (large and highly visible).",
            },
            {
              q: "Do the door hangers come with pre-cut holes?",
              a: "Yes! All door hangers are pre-cut with a circular hole and a slit at the top, allowing them to hang easily on any standard door knob.",
            },
            {
              q: "What cardstock weight do you use for door hangers?",
              a: "We print on thick, durable 14pt cardstock. This ensures they resist bending and withstand outdoor humidity while hanging on front doors.",
            },
            {
              q: "Are door hangers weather-resistant?",
              a: "Our 14pt Gloss Cardstock has a light protective sheen that helps resist light South Florida moisture, but they are designed for temporary outdoor hangings.",
            },
            {
              q: "What businesses benefit most from door hangers?",
              a: "Local home services (landscaping, pressure washing, pest control, roofing, plumbing) and restaurants benefit massively from direct neighborhood canvassing.",
            },
          ],
          reviews: [
            {
              author: "Dwayne K., Lawn Care Owner",
              rating: 5,
              text: "Our response rate was excellent! We distributed 500 hangers in Oakland Park and gained 12 new monthly accounts. Very clean cut, thick cardstock.",
            },
            {
              author: "Linda J., Pizzeria Manager",
              rating: 5,
              text: "Used these to distribute our menu coupon codes locally. The glossy printing is bright and the hole fits perfectly over door handles.",
            },
          ],
          ctaHeading: "Kick off local door hanger campaigns",
          ctaBody:
            "Custom print door hangers with coupon codes and contact numbers.",
          ctaLabel: "Customize Door Hangers",
        },
      },



    ],
  },
  "promotional-products": {
    title: "Promotional Swag & Merch",
    breadcrumbLabel: "Promotional Products",
    heroSubtitle: "Brand It. Share It. Grow It.",
    description:
      "Customize apparel, mugs, and trade show giveaways with your business branding.",
    heroImage: "/images/products/main%20page/promotional_products_hero_image.png",
    reviewRating: "4.9",
    reviewCount: "1,480",
    reviewQuote:
      "We ordered 500 custom logo pens and a couple dozen ceramic mugs for our annual summit giveaway bags. The logo resolution is incredibly sharp and the mugs look amazing.",
    categoryDescriptionText:
      "Promote your business and look professional with customized promo swag. From screen-printed cotton t-shirts and ceramic coffee mugs to canvas tote bags, retractable logo pens, executive journals, keychains, and fridge magnets, we have everything you need to leave a lasting impression. All items are constructed with high-grade, durable materials designed to proudly showcase your brand.",
    categorySecondaryImage: "/images/products/main%20page/promotional_products_desc.png",
    faqs: [
      {
        q: "Is there a minimum order quantity (MOQ) for promotional products?",
        a: "Many of our promotional products, including custom t-shirts, mugs, and journals, have no minimum order quantity—you can order just a single item! For items like custom pens or fridge magnets, we sell them in convenient pack sizes (e.g., packs of 50 or 100) to ensure you get the absolute best bulk rates.",
      },
      {
        q: "What print file formats do you recommend for logos?",
        a: "For the absolute sharpest print results, we recommend uploading vector files such as PDF, EPS, or AI. High-resolution PNG and JPG files are also supported. Our design check process automatically verifies that your files have sufficient resolution before printing begins.",
      },
      {
        q: "Are ceramic mugs and tumblers dishwasher safe?",
        a: "Yes! Our custom ceramic mugs are printed using industrial dye-sublimation wraps that are fully microwave and dishwasher safe, meaning your design won't fade or peel over time.",
      },
    ],
    products: [
      {
        id: "t-shirts",
        name: "Custom T-Shirts",
        description:
          "Screen printed cotton shirts featuring your company logo or message.",
        image: "/images/products/main%20page/custom_t_shirts.png",
        price: "Starting at $14.99",
        badge: "Staff Wear",
        config: {
          title: "Custom Printed T-Shirts",
          minQuantity: 12,
          subtitle:
            "Comfortable cotton tees customized with full-color heat-press or screen prints.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF PROMOTIONAL MERCHANDISE",
          image: "/images/products/main%20page/custom_t_shirts.png",
          ratingCount: "740",
          ratingScore: "4.8",
          sizes: [
            {
              label: "Medium Unisex Tee",
              value: "medium_tee",
              basePrice: 14.99,
            },
            { label: "Large Unisex Tee", value: "large_tee", basePrice: 14.99 },
            {
              label: "Extra Large Unisex Tee",
              value: "xl_tee",
              basePrice: 16.99,
            },
          ],
          selects: [
            {
              label: "Shirt Fabric Style",
              options: [
                {
                  label: "100% Premium Cotton",
                  value: "cotton",
                  priceAdder: 0,
                  description: "Soft, breathable, preshrunk ringspun cotton.",
                },
              ],
            },
          ],
          qtyDiscount: "Volume discounts for outfitting your entire team",
          keyFeatures: [
            "Comfortable cotton knit fabric",
            "High durability dye-sub print",
            "Available in white and dark slate",
            "Wash-proof print bond",
          ],
          useCases: [
            "Staff uniforms",
            "Brand promotional giveaways",
            "Family reunions",
            "Corporate retreats",
          ],
          specs: [
            { key: "Material", value: "4.5oz Ringspun Cotton" },
            {
              key: "Wash Care",
              value: "Machine wash cold inside-out, tumble dry low",
            },
          ],
          faqs: [
            {
              q: "Will the graphic peel in the wash?",
              a: "No, our prints utilize high-temp industrial heat fusion that bonds print ink fibers directly to fabrics.",
            },
          ],
          reviews: [
            {
              author: "Nate W.",
              rating: 5,
              text: "Sizing is spot on and the print did not crack after multiple wash cycles.",
            },
          ],
          ctaHeading: "Design shirts for your team",
          ctaBody:
            "Add logo prints to front or back positions on premium shirts.",
          ctaLabel: "Customize Shirt",
        },
      },
      {
        id: "mugs",
        name: "Coffee Mugs & Tumblers",
        description:
          "Vibrant ceramic coffee mugs and travel tumblers with your company logo.",
        image: "/images/products/main%20page/coffee_mugs.png",
        price: "Starting at $4.99 each",
        badge: "Office Best-Seller",
        config: {
          title: "Custom Coffee Mugs",
          minQuantity: 12,
          subtitle:
            "Full-color sublimation print ceramic mugs, perfect for corporate swag and office desks.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF CUSTOM LOGO DRINKWARE",
          image: "/images/products/main%20page/coffee_mugs.png",
          ratingCount: "840",
          ratingScore: "4.9",
          sizes: [
            {
              label: "11oz Classic Ceramic Mug",
              value: "11oz",
              basePrice: 4.99,
            },
            {
              label: "15oz Deluxe Ceramic Mug",
              value: "15oz",
              basePrice: 6.99,
            },
          ],
          selects: [
            {
              label: "Ceramic Color",
              options: [
                { label: "Bright White", value: "white", priceAdder: 0 },
                { label: "Midnight Black", value: "black", priceAdder: 1.5 },
              ],
            },
          ],
          qtyDiscount: "Save up to 55% in bulk orders",
          keyFeatures: [
            "Microwave and dishwasher safe",
            "Sublimated print wraps edge-to-edge",
            "Lead-free high-grade ceramic",
          ],
          useCases: [
            "Corporate gifts",
            "Office mugs",
            "Exhibition giveaways",
            "Client appreciation packages",
          ],
          specs: [
            { key: "Material", value: "High-quality Ceramic" },
            { key: "Printing", value: "Dye-Sublimation Wrap" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Brand your office drinkware",
          ctaBody: "Upload your logo to design custom coffee mugs today.",
          ctaLabel: "Customize Coffee Mugs",
        },
      },
      {
        id: "tote-bags",
        name: "Canvas Tote Bags",
        description:
          "Durable cotton canvas tote bags custom printed with your logo.",
        image: "/images/products/main%20page/canvas_tote_bags.png",
        price: "Starting at $5.99 each",
        config: {
          title: "Custom Canvas Tote Bags",
          minQuantity: 12,
          subtitle:
            "Eco-friendly, reusable cotton canvas totes printed with vibrant logo colors.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF ECO-FRIENDLY PROM BAGS",
          image: "/images/products/main%20page/canvas_tote_bags.png",
          ratingCount: "490",
          ratingScore: "4.8",
          sizes: [
            {
              label: 'Standard 15" x 16" Tote',
              value: "15x16",
              basePrice: 5.99,
            },
          ],
          selects: [
            {
              label: "Cotton Weight",
              options: [
                {
                  label: "6oz Lightweight Cotton",
                  value: "6oz",
                  priceAdder: 0,
                },
                {
                  label: "12oz Heavyweight Canvas",
                  value: "12oz",
                  priceAdder: 2.5,
                },
              ],
            },
          ],
          qtyDiscount: "Save on bulk event tote packs",
          keyFeatures: [
            "Reinforced shoulder handles",
            "Eco-friendly reusable design",
            "Full color heat transfer printing",
          ],
          useCases: [
            "Grocery shoppers",
            "Event giveaway bags",
            "Staff welcome packages",
            "Library book bags",
          ],
          specs: [
            { key: "Material", value: "100% Cotton Canvas" },
            { key: "Handles", value: "21-inch fabric handles" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Design reusable event bags",
          ctaBody:
            "Custom print canvas tote bags with your graphics and emblems.",
          ctaLabel: "Customize Tote Bags",
        },
      },
      {
        id: "pens",
        name: "Custom Logo Pens",
        description:
          "Retractable ballpoint writing guidelines, perfect for trade shows and lobbies.",
        image: "/images/products/main%20page/custom_pens.png",
        price: "Starting at $0.89 each",
        badge: "Trade Show Choice",
        config: {
          title: "Custom Logo Pens",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Sleek retractable clicker pens printed with your business website or phone number.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF BULK LOGO WRITING PENS",
          image: "/images/products/main%20page/custom_pens.png",
          ratingCount: "1250",
          ratingScore: "4.8",
          sizes: [
            {
              label: "Standard Fine Point Pen",
              value: "fine_pen",
              basePrice: 0.89,
            },
          ],
          selects: [
            {
              label: "Ink Color",
              options: [
                {
                  label: "Classic Black Ink",
                  value: "black_ink",
                  priceAdder: 0,
                },
                { label: "Deep Blue Ink", value: "blue_ink", priceAdder: 0 },
              ],
            },
            {
              label: "Pen Barrel Color",
              options: [
                {
                  label: "White/Yellow Trim",
                  value: "yellow_trim",
                  priceAdder: 0,
                },
                {
                  label: "White/Black Trim",
                  value: "black_trim",
                  priceAdder: 0,
                },
                {
                  label: "Solid Silver Barrel",
                  value: "silver_barrel",
                  priceAdder: 0.25,
                },
              ],
            },
          ],
          qtyDiscount: "Super bulk prices drop to $0.29 each",
          keyFeatures: [
            "Smooth ink flow prevents smudges",
            "Soft rubber grip for comfort",
            "Durable pocket clip attachment",
          ],
          useCases: [
            "Lobby counter registers",
            "Trade show swag baskets",
            "Office stationery chests",
            "Direct mail package fillers",
          ],
          specs: [
            { key: "Ink Style", value: "Ballpoint medium ink" },
            { key: "Body", value: "ABS plastic housing" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Order bulk giveaway pens",
          ctaBody: "Custom print barrels with logo text and web address.",
          ctaLabel: "Customize Pens",
        },
      },
      {
        id: "notebooks",
        name: "Custom Journals & Notebooks",
        description:
          "Pre-ruled journals and notebooks, perfect for client meetings and logs.",
        image: "/images/products/main%20page/custom_notebooks.png",
        price: "Starting at $3.99 each",
        config: {
          title: "Custom Notebooks & Journals",
          minQuantity: 10,
          subtitle:
            "Lined paper journals with premium custom covers to organize meetings and ideas.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF CUSTOM EXECUTIVE NOTEBOOKS",
          image: "/images/products/main%20page/custom_notebooks.png",
          ratingCount: "380",
          ratingScore: "4.8",
          sizes: [
            {
              label: '5.5" x 8.5" Classic Journal',
              value: "5.5x8.5",
              basePrice: 3.99,
            },
          ],
          selects: [
            {
              label: "Cover Style",
              options: [
                { label: "Flexible Softcover", value: "soft", priceAdder: 0 },
                {
                  label: "Rigid Leatherette Hardcover",
                  value: "hard",
                  priceAdder: 3.0,
                },
              ],
            },
          ],
          qtyDiscount: "Save on office packs starting at 10+ journals",
          keyFeatures: [
            "80 ruled pages (acid-free paper)",
            "Elastic band closure strip",
            "Color-matching ribbon bookmark",
          ],
          useCases: [
            "Client meeting diaries",
            "Employee onboarding logs",
            "Gift-away packages",
            "Educational seminars",
          ],
          specs: [
            { key: "Page Count", value: "80 lined sheets (160 pages)" },
            { key: "Binding", value: "Stitched lay-flat binding" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Create custom corporate journals",
          ctaBody:
            "Custom print journal covers with debossed logos or full color prints.",
          ctaLabel: "Customize Notebooks",
        },
      },
      {
        id: "keychains",
        name: "Custom Logo Keychains",
        description:
          "Acrylic and metallic keyring tags customized with your company logo.",
        image: "/images/products/main%20page/custom_keychains.png",
        price: "Starting at $1.29 each",
        config: {
          title: "Custom Logo Keychains",
          minQuantity: 25,
          subtitle:
            "Sturdy custom key rings featuring printed acrylic shapes or laser engraved metal.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF CUSTOM ENGRAVED KEYCHAINS",
          image: "/images/products/main%20page/custom_keychains.png",
          ratingCount: "290",
          ratingScore: "4.7",
          sizes: [
            {
              label: '2" x 2" Acrylic Keychain',
              value: "2x2_acrylic",
              basePrice: 1.29,
            },
          ],
          selects: [
            {
              label: "Keychain Material",
              options: [
                { label: "Clear Acrylic", value: "acrylic", priceAdder: 0 },
                {
                  label: "Laser-Engraved Stainless Steel",
                  value: "steel",
                  priceAdder: 2.0,
                },
              ],
            },
          ],
          qtyDiscount: "Save on corporate key ring packs",
          keyFeatures: [
            "Stainless steel split ring holds keys safely",
            "Double sided full color print under acrylic",
            "Scratch-resistant shield coatings",
          ],
          useCases: [
            "Car dealership client handovers",
            "Real estate open house promotions",
            "Gym member tags",
            "Corporate swag keyrings",
          ],
          specs: [
            { key: "Ring", value: "1-inch split key ring" },
            { key: "Materials", value: "Acrylic or Stainless steel" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Design key ring promos",
          ctaBody: "Engrave steel tags or print acrylic shapes with logos.",
          ctaLabel: "Customize Keychains",
        },
      },
      {
        id: "fridge-magnets",
        name: "Custom Fridge Magnets",
        description:
          "Flexible promo magnets, perfect for household fridges and direct mail.",
        image: "/images/products/main%20page/custom_fridge_magnets.png",
        price: "Starting at $0.49 each",
        badge: "Household Favorite",
        config: {
          title: "Custom Fridge Magnets",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Lightweight flexible promo magnets, perfect for direct mail and fridge doors.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF CUSTOM HOUSEHOLD MAGNETS",
          image: "/images/products/main%20page/custom_fridge_magnets.png",
          ratingCount: "710",
          ratingScore: "4.9",
          sizes: [
            { label: '2" x 2" Square Magnet', value: "2x2", basePrice: 0.49 },
            {
              label: '3.5" x 2" Business Card Magnet',
              value: "3.5x2",
              basePrice: 0.79,
            },
          ],
          selects: [
            {
              label: "Lamination Finish",
              options: [
                { label: "Gloss UV Coat", value: "gloss_lam", priceAdder: 0 },
                { label: "Matte Finish", value: "matte_lam", priceAdder: 0 },
              ],
            },
          ],
          qtyDiscount: "Volume packs drop price under $0.15 each",
          keyFeatures: [
            "Flexible 20mil magnetic backings",
            "Sticks tight to fridges & whiteboards",
            "Full-bleed color printing",
          ],
          useCases: [
            "Plumbers & repair hotlines",
            "Pizza takeout phone lists",
            "Save the Date reminders",
            "Calendar fridge cards",
          ],
          specs: [
            { key: "Material", value: "20mil flexible magnet" },
            { key: "Sizing", value: "2x2 inches or 3.5x2 inches" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Print fridge promo magnets",
          ctaBody:
            "Design business card magnets for household services and dispatch centers.",
          ctaLabel: "Customize Fridge Magnets",
        },
      },
    ],
  },
  "custom-signs": {
    title: "Custom Signs",
    breadcrumbLabel: "Signs",
    heroSubtitle: "Built to Stand Out. Built to Last.",
    description:
      "From yard signs to premium acrylic, we print stunning custom signs fast. Choose your product, upload your design, and we ship next day.",
    heroImage: "/images/products/main%20page/nano%20hero%20signs%20section.png",
    tabletHeroImage: "/images/products/main%20page/nano%20hero%20signs%20section.png",
    mobileHeroImage: "/images/products/main%20page/nano%20hero%20signs%20section.png",
    reviewRating: "4.9",
    reviewCount: "8,420",
    reviewQuote:
      "Ordered 200 yard signs for a local election campaign. They arrived the next day and looked exactly like the proof!",
    categoryDescriptionText:
      "Discover our complete lineup of custom sign solutions. From lightweight corrugated plastic yard signs that withstand any weather to premium acrylic and aluminum signs built for permanent installations. Whether you need a single sign for your business or thousands for a nationwide campaign, we deliver vibrant, full-color prints with next-day shipping.",
    categorySecondaryImage:
      "/images/products/main%20page/custom_signs_desc.png",
    faqs: [
      {
        q: "What sign materials do you offer?",
        a: "We offer a variety of materials including corrugated plastic (Coroplast), aluminum, foam board, acrylic, and PVC. Each material has unique benefits suited for different indoor and outdoor applications.",
      },
      {
        q: "How long will signs last outdoors?",
        a: "Corrugated plastic signs typically last 6–12 months outdoors. Aluminum signs can last 5+ years. All signs feature UV-resistant inks that resist fading in direct sunlight.",
      },
      {
        q: "Do you offer sign stakes and mounting hardware?",
        a: "Yes! We offer H-frame wire stakes, step stakes, grommets, and various mounting accessories. You can add these during the product configuration process.",
      },
      {
        q: "Can I order just one sign?",
        a: "Absolutely! We have no minimum order quantity. Whether you need 1 sign or 10,000, we print and ship with the same speed and quality.",
      },
      {
        q: "What file formats do you accept for sign artwork?",
        a: 'We accept PDF, AI, EPS, PNG, JPG, and TIFF files. For best results, upload vector files at 300 DPI with 0.125" bleed on all sides.',
      },
    ],
    products: [
      {
        id: "yard-signs",
        name: "Yard Signs",
        description:
          "Hanging corrugated plastic signs suspended from premium L-shaped stands, perfect for real estate, campaigns, and storefronts.",
        image: "/images/products/main%20page/yard_sign.jpeg",
        price: "Starting at $3.99",
        badge: "Best Seller",
        config: {
          title: "Custom Yard Signs",
          subtitle: "Hanging lawn and commercial signs suspended from wood or metal L-stands.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "🏡 25% OFF Yard Signs + Free Shipping — Most Popular Sign in America!",
          image: "/images/products/main%20page/yard_sign.jpeg",
          images: [
            "/images/products/main%20page/yard_sign.jpeg",
            "/images/products/gallery/yard_sign_in_action_1.png",
            "/images/products/gallery/yard_sign_in_action_2.png",
          ],
          ratingScore: "4.9",
          ratingCount: "8,420",
          sizes: [
            { label: '12" x 18" (Standard)', value: "12x18", basePrice: 3.99 },
            { label: '18" x 24"', value: "18x24", basePrice: 6.99 },
            { label: '24" x 24"', value: "24x24", basePrice: 9.99 },
            { label: '24" x 36"', value: "24x36", basePrice: 13.99 },
            { label: '36" x 48"', value: "36x48", basePrice: 22.99 },
          ],
          selects: [
            {
              label: "Material",
              options: [
                {
                  label: "4mm Corrugated Plastic (Standard)",
                  value: "4mm",
                  priceAdder: 0,
                  description:
                    "Lightweight, weatherproof, great for short-term outdoor use.",
                },
                {
                  label: "6mm Heavy-Duty Coroplast",
                  value: "6mm",
                  priceAdder: 1.5,
                  description:
                    "50% thicker — perfect for long-term yard sign campaigns.",
                },
                {
                  label: "Aluminum (Substrate)",
                  value: "aluminum",
                  priceAdder: 4,
                  description:
                    "Rigid aluminum for permanent outdoor installations.",
                },
              ],
            },
            {
              label: "Printing",
              options: [
                { label: "Single Sided", value: "single", priceAdder: 0 },
                { label: "Double Sided", value: "double", priceAdder: 2.5 },
              ],
            },
            {
              label: "Hanging Holes",
              options: [
                {
                  label: "Top Hanging Holes (Grommets)",
                  value: "top_holes",
                  priceAdder: 0,
                  description: "Pre-drilled holes at top corners to hang from the arm.",
                },
                {
                  label: "No Holes",
                  value: "no_holes",
                  priceAdder: 0,
                  description: "Solid panel without pre-drilled holes.",
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Frame/Stand Option",
              options: [
                { id: "no_stand", label: "Sign Panel Only", priceAdder: 0 },
                {
                  id: "wood_l_stand",
                  label: "White L-Shaped Wood Yard Arm Stand",
                  priceAdder: 39.99,
                  description: "Premium wooden colonial yard post",
                },
                {
                  id: "metal_l_stand",
                  label: "Black L-Shaped Metal Yard Arm Stand",
                  priceAdder: 49.99,
                  description: "Heavy-duty steel hanging sign post",
                },
              ],
            },
            {
              label: "UV Coating",
              options: [
                { id: "no_coat", label: "None", priceAdder: 0 },
                {
                  id: "uv",
                  label: "UV Gloss Coating",
                  priceAdder: 0.75,
                  description: "Adds scratch & fade protection.",
                },
              ],
            },
          ],
          qtyDiscount: "Buy more, save more — up to 13% off!",
          keyFeatures: [
            "Weather-resistant corrugated plastic",
            "Full-color edge-to-edge printing",
            "Ships in as fast as 1 business day",
            "Optional L-shaped wood or metal stands available",
            "Recyclable & eco-friendly material",
            "Single or double-sided printing",
          ],
          useCases: [
            "Political Campaigns",
            "Real Estate",
            "Open Houses",
            "Elections",
            "Business Promotions",
            "Events",
          ],
          specs: [
            {
              key: "Standard Material",
              value: "4mm Corrugated Plastic (Coroplast)",
            },
            { key: "Heavy Duty Option", value: "6mm Coroplast" },
            { key: "Print Resolution", value: "720 x 1440 dpi Full Color" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.125" on all sides' },
            { key: "File Formats", value: "PDF, AI, EPS, PNG, TIFF" },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "How long will yard signs last outdoors?",
              a: "Standard 4mm coroplast yard signs typically last 6–12 months outdoors. The 6mm heavy-duty option can last 1–2+ years depending on conditions.",
            },
            {
              q: "Do your yard signs come with stands?",
              a: "Stands are optional. You can select either a White L-Shaped Wood Yard Arm Stand or a Black L-Shaped Metal Yard Arm Stand in the configurator. We can pre-drill top hanging holes to make hanging simple.",
            },
            {
              q: "Can I order just 1 yard sign?",
              a: "Yes! We have no minimum order quantity. Single signs ship just as fast as bulk orders.",
            },
            {
              q: "Are the signs waterproof?",
              a: "Yes. Corrugated plastic is inherently waterproof. Our inks are UV-resistant and won't run or fade in rain.",
            },
          ],
          reviews: [
            {
              author: "Mike D.",
              rating: 5,
              text: "Ordered 200 yard signs for a local election campaign. They arrived the next day and looked exactly like the proof!",
            },
            {
              author: "Sandra R.",
              rating: 5,
              text: "Used for our open house. Very professional look, easy to hang on the L-stand. Will definitely order again.",
            },
            {
              author: "Tom B.",
              rating: 4,
              text: "Great quality for the price. Colors were vibrant and matched perfectly.",
            },
          ],
          ctaHeading: "Get Your Signs Out There",
          ctaBody: "Order by 5 PM and your custom yard signs ship tomorrow.",
          ctaLabel: "Order Yard Signs Now",
        },
      },
      {
        id: "real-estate-panels",
        name: "Real Estate Panels",
        description:
          "Professional-grade aluminum and coroplast panels for property listings, open houses, and riders.",
        image: "/images/products/main%20page/Real_estate_panels.png",
        price: "Starting at $12.99",
        badge: "Most Popular",
        config: {
          title: "Custom Real Estate Panels",
          subtitle:
            "Professional-grade panels for property listings and open houses.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "🏠 Real Estate Panels — Next Day Delivery Available!",
          image: "/images/products/main%20page/Real_estate_panels.png",
          images: [
            "/images/products/main%20page/Real_estate_panels.png",
            "/images/products/gallery/real_estate_panels_in_action_1.png",
            "/images/products/gallery/real_estate_panels_in_action_2.png",
          ],
          ratingScore: "4.9",
          ratingCount: "3,150",
          sizes: [
            { label: '18" x 24" (Standard)', value: "18x24", basePrice: 12.99 },
            { label: '24" x 24"', value: "24x24", basePrice: 16.99 },
            { label: '24" x 36"', value: "24x36", basePrice: 22.99 },
            { label: '18" x 6" Rider', value: "18x6_rider", basePrice: 5.99 },
            { label: '24" x 6" Rider', value: "24x6_rider", basePrice: 7.99 },
          ],
          selects: [
            {
              label: "Material",
              options: [
                {
                  label: "4mm Coroplast (Standard)",
                  value: "4mm_coro",
                  priceAdder: 0,
                  description:
                    "Lightweight, waterproof. Best for short listings.",
                },
                {
                  label: ".040 Aluminum",
                  value: "aluminum_040",
                  priceAdder: 6,
                  description: "Rigid, durable metal. Lasts years outdoors.",
                },
                {
                  label: "6mm Heavy-Duty Coroplast",
                  value: "6mm_coro",
                  priceAdder: 2.5,
                  description: "Thicker plastic for longer listing cycles.",
                },
              ],
            },
            {
              label: "Printing",
              options: [
                { label: "Single Sided", value: "single", priceAdder: 0 },
                { label: "Double Sided", value: "double", priceAdder: 3.5 },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Accessories",
              options: [
                { id: "none", label: "Sign Only", priceAdder: 0 },
                { id: "h_frame", label: "Wire H-Frame Post", priceAdder: 4.99 },
                {
                  id: "yard_arm",
                  label: "Yard Arm Post",
                  priceAdder: 18.99,
                  description: "Classic single-post arm",
                },
                {
                  id: "full_frame",
                  label: "Full Frame Post Kit",
                  priceAdder: 34.99,
                  description: "Includes two posts + crossbar",
                },
              ],
            },
          ],
          qtyDiscount: "Agent bulk pricing — buy 10+ and save",
          keyFeatures: [
            "Professional real estate layouts",
            "Durable outdoor materials",
            "Rider slot compatible",
            "UV-resistant fade-proof printing",
            "Compatible with standard real estate frames",
            "Next-day turnaround available",
          ],
          useCases: ["For Sale", "Open House", "For Rent", "Sold"],
          specs: [
            { key: "Standard Material", value: "4mm Corrugated Plastic (Coroplast)" },
            { key: "Metal Option", value: ".040 Aluminum" },
            { key: "Print Resolution", value: "720 x 1440 dpi" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.125" all sides' },
            { key: "Frame Compatibility", value: 'Standard 30" wide RE frames' },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "Are your panels compatible with standard real estate frames?",
              a: 'Yes! Our 18"x24" and 24"x24" panels are designed to fit standard real estate wire frames and yard arm posts.',
            },
            {
              q: "Can I order rider panels to match my main panel?",
              a: "Absolutely. Select the rider size in the dropdown and we'll match the design style for a cohesive, professional look.",
            },
            {
              q: "Can I include my brokerage logo and headshot?",
              a: "Yes. Upload any artwork file and we'll print it exactly as provided. Our free artwork check ensures everything looks perfect.",
            },
            {
              q: "What is the minimum order?",
              a: "We have no minimum! Order as few as 1 panel or as many as 1,000.",
            },
          ],
          reviews: [
            {
              author: "Jessica A.",
              rating: 5,
              text: "I've been ordering from here for 2 years. Best quality real estate panels I've found, and delivery is always on time.",
            },
            {
              author: "Carlos M.",
              rating: 5,
              text: "Ordered riders for my open house last minute — they arrived the next morning. Saved my weekend!",
            },
            {
              author: "Patricia W.",
              rating: 5,
              text: "The aluminum panels look incredibly professional. My clients always comment on them.",
            },
          ],
          ctaHeading: "List More. Sell Faster.",
          ctaBody: "Professional real estate panels shipped next day.",
          ctaLabel: "Order Real Estate Panels",
        },
      },
      {
        id: "aluminum-signs",
        name: "Aluminum Signs",
        description:
          "Durable rust-proof aluminum signs for permanent indoor and outdoor branding, safety, and parking installations.",
        image: "/images/products/main%20page/aluminum_sign.png",
        price: "Starting at $8.99",
        badge: "Heavy Duty",
        config: {
          title: "Custom Aluminum Signs",
          subtitle:
            "Heavy-duty, rust-proof aluminum signs built to last years in any weather.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "⚙️ Aluminum Signs — Rust-Proof, Fade-Proof, Weatherproof. Ships Next Day!",
          image: "/images/products/main%20page/aluminum_sign.png",
          images: [
            "/images/products/main%20page/aluminum_sign.png",
            "/images/products/alum_sign_hover.png",
          ],
          ratingScore: "4.9",
          ratingCount: "2,840",
          sizes: [
            { label: '6" x 12"', value: "6x12", basePrice: 8.99 },
            { label: '12" x 12"', value: "12x12", basePrice: 12.99 },
            { label: '12" x 18"', value: "12x18", basePrice: 14.99 },
            { label: '18" x 24"', value: "18x24", basePrice: 21.99 },
            { label: '24" x 24"', value: "24x24", basePrice: 28.99 },
            { label: '24" x 36"', value: "24x36", basePrice: 38.99 },
            { label: "Custom Size", value: "custom", basePrice: 0 },
          ],
          selects: [
            {
              label: "Aluminum Grade",
              options: [
                {
                  label: ".040 Aluminum (Standard)",
                  value: "040",
                  priceAdder: 0,
                  description: "Standard gauge — great for most applications.",
                },
                {
                  label: ".080 Aluminum (Heavy Duty)",
                  value: "080",
                  priceAdder: 5.5,
                  description: "Double thickness for maximum rigidity.",
                },
              ],
            },
            {
              label: "Finish",
              options: [
                {
                  label: "Matte White (Standard)",
                  value: "matte",
                  priceAdder: 0,
                },
                { label: "High Gloss", value: "gloss", priceAdder: 2.5 },
                {
                  label: "Reflective (ASTM D4956)",
                  value: "reflective",
                  priceAdder: 8,
                  description:
                    "Highly visible at night — for safety & regulatory use.",
                },
              ],
            },
            {
              label: "Printing",
              options: [
                { label: "Single Sided", value: "single", priceAdder: 0 },
                { label: "Double Sided", value: "double", priceAdder: 6 },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Mounting Holes",
              options: [
                { id: "no_holes", label: "No Holes", priceAdder: 0 },
                { id: "corner_holes", label: "Corner Holes", priceAdder: 0 },
                {
                  id: "custom_holes",
                  label: "Custom Hole Placement",
                  priceAdder: 1,
                },
                { id: "grommets", label: "Grommets Added", priceAdder: 2 },
              ],
            },
            {
              label: "Rounded Corners",
              options: [
                { id: "square", label: "Square Corners", priceAdder: 0 },
                { id: "rounded", label: "Rounded Corners", priceAdder: 1.5 },
              ],
            },
          ],
          qtyDiscount: "Volume pricing — buy 10+ for up to 13% off",
          keyFeatures: [
            "Rust-proof, corrosion-resistant aluminum",
            "UV-resistant inks — won't fade for years",
            "Available in .040 and .080 gauge",
            "Reflective finish option for regulatory use",
            "Pre-drilled mounting holes available",
            "Square or rounded corner options",
          ],
          useCases: [
            "Business Signs",
            "Parking Signs",
            "Street Signs",
            "Safety Signs",
            "Property Signs",
            "Regulatory Signs",
            "Directional Signs",
          ],
          specs: [
            { key: "Standard Grade", value: '.040" Aluminum' },
            { key: "Heavy Duty Grade", value: '.080" Aluminum' },
            { key: "Print Method", value: "Direct UV Digital Print" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Finish Options", value: "Matte, Gloss, Reflective" },
            { key: "Hole Diameter", value: '5/16" standard' },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "How long do aluminum signs last?",
              a: "Our aluminum signs are rated for 7–10+ years outdoors. The UV-resistant inks won't fade, and aluminum won't rust or corrode.",
            },
            {
              q: "Can I get reflective aluminum signs?",
              a: "Yes! Select the 'Reflective' finish option. Our reflective signs meet ASTM D4956 standards and are great for regulatory, safety, and parking applications.",
            },
            {
              q: "Are mounting holes included?",
              a: 'Mounting holes are optional. Choose corner holes (standard 5/16") or custom placement in the configurator — always free to add.',
            },
            {
              q: "Do you offer custom shapes?",
              a: "Standard shapes (square/rectangle with optional rounded corners) are available online. Contact us for completely custom cut shapes.",
            },
          ],
          reviews: [
            {
              author: "Frank L.",
              rating: 5,
              text: "We've had these parking signs up for 3 years and they still look brand new. Incredible durability.",
            },
            {
              author: "Donna S.",
              rating: 5,
              text: "Ordered 50 directional signs for our campus. Fast turnaround, perfect print quality.",
            },
            {
              author: "Brian T.",
              rating: 5,
              text: "The reflective signs are exactly what we needed for night visibility. Very professional.",
            },
          ],
          ctaHeading: "Signs That Last a Decade",
          ctaBody:
            "Rust-proof aluminum signs printed with UV inks that resist fading for years.",
          ctaLabel: "Order Aluminum Signs Now",
        },
      },
      {
        id: "a-frame-signs",
        name: "A-Frame Signs",
        description:
          "Portable double-sided sandwich board sidewalk signs that grab foot traffic and drive customers through your door.",
        image: "/images/products/main%20page/A-frame_sign.jpeg",
        price: "Starting at $89.99",
        badge: "Eye-Catching",
        config: {
          title: "A-Frame Signs (Sandwich Boards)",
          subtitle:
            "Portable, double-sided sidewalk signs that grab foot traffic and drive customers through your door.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "🪧 A-Frame Signs — Double-Sided, Portable, Ships Tomorrow!",
          image: "/images/products/main%20page/A-frame_sign.jpeg",
          images: [
            "/images/products/main%20page/A-frame_sign.jpeg",
            "/images/products/aframe_sign_hover.png",
          ],
          ratingScore: "4.8",
          ratingCount: "1,640",
          sizes: [
            {
              label: '18" x 24" Insert (Standard)',
              value: "18x24",
              basePrice: 89.99,
            },
            { label: '22" x 28" Insert', value: "22x28", basePrice: 109.99 },
            { label: '24" x 36" Insert', value: "24x36", basePrice: 134.99 },
          ],
          selects: [
            {
              label: "Frame Material",
              options: [
                {
                  label: "Plastic A-Frame (Standard)",
                  value: "plastic",
                  priceAdder: 0,
                  description: "Lightweight, weather-resistant. Budget-friendly.",
                },
                {
                  label: "Aluminum A-Frame",
                  value: "aluminum",
                  priceAdder: 25,
                  description: "Heavier, more stable in wind. Long-lasting.",
                },
                {
                  label: "Premium Swinger Frame",
                  value: "swinger",
                  priceAdder: 45,
                  description: "360° swivel top. Maximum visibility.",
                },
              ],
            },
            {
              label: "Insert Material",
              options: [
                {
                  label: "Coroplast Insert (Standard)",
                  value: "coro",
                  priceAdder: 0,
                  description: "Waterproof, lightweight corrugated plastic.",
                },
                {
                  label: "PVC Foam Board Insert",
                  value: "pvc",
                  priceAdder: 8,
                  description: "Rigid, premium look for upscale establishments.",
                },
                {
                  label: "Aluminum Insert",
                  value: "alum",
                  priceAdder: 14,
                  description: "The most durable, longest-lasting option.",
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Printing",
              options: [
                { id: "single", label: "1-Sided Print", priceAdder: 0 },
                {
                  id: "double",
                  label: "2-Sided Print",
                  priceAdder: 0,
                  description: "Both panels printed (standard for A-frames)",
                },
              ],
            },
            {
              label: "Anti-Wind Accessory",
              options: [
                { id: "none", label: "No Accessory", priceAdder: 0 },
                {
                  id: "chain",
                  label: "Connecting Chain",
                  priceAdder: 2.99,
                  description: "Limits how far the sign opens in wind",
                },
                {
                  id: "sandbag",
                  label: "Sandbag Weight",
                  priceAdder: 9.99,
                  description: "Keeps sign stable in windy conditions",
                },
              ],
            },
          ],
          qtyDiscount: "Buy 3+ A-frames and save up to 10%",
          keyFeatures: [
            "Double-sided by default",
            "Portable — set up in seconds",
            "Weather-resistant frame & inserts",
            "Interchangeable insert panels",
            "Multiple frame material options",
            "Compact for storage",
          ],
          useCases: [
            "Restaurants & Cafes",
            "Retail Stores",
            "Salons",
            "Sidewalk Promotions",
            "Event Venues",
            "Hotels",
            "Markets",
            "Pop-Up Shops",
          ],
          specs: [
            {
              key: "Standard Frame",
              value: "Plastic A-Frame with coroplast insert",
            },
            { key: "Insert Fits", value: '18"x24", 22"x28", or 24"x36"' },
            { key: "Print Method", value: "Full-Color Digital UV Print" },
            { key: "Fold Height", value: 'Approximately 48" tall when open' },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.125" all sides' },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "Is printing included on both sides?",
              a: "Yes! A-frame signs are inherently double-sided. Both panels are printed by default.",
            },
            {
              q: "Can I swap out the inserts?",
              a: "Yes. The coroplast and PVC foam board inserts slide out easily so you can swap promotions or update messaging without buying a new frame.",
            },
            {
              q: "Are they stable in wind?",
              a: "Plastic A-frames can tip in strong wind. We recommend the connecting chain or sandbag weight add-on for windy locations.",
            },
            {
              q: "Can I store them inside at night?",
              a: "Absolutely. A-frames fold flat for easy interior storage. This also extends the life of the printed inserts.",
            },
          ],
          reviews: [
            {
              author: "Rachel H.",
              rating: 5,
              text: "Our restaurant's daily specials board. Customers stop to read it every single day. Best investment we've made!",
            },
            {
              author: "Aaron P.",
              rating: 5,
              text: "Ordered 5 for our chain of yoga studios. Fast delivery and great print quality on both sides.",
            },
            {
              author: "Maria C.",
              rating: 4,
              text: "Sturdy and looks professional on the sidewalk. The chain accessory was a great add-on.",
            },
          ],
          ctaHeading: "Bring Customers Through the Door",
          ctaBody:
            "A-frame signs are proven to increase foot traffic. Order yours today.",
          ctaLabel: "Design Your A-Frame Sign",
        },
      },
      {
        id: "foam-board-signs",
        name: "Foam Board Signs",
        description:
          "Lightweight, professional indoor display signs for presentations and lobbies.",
        image: "/images/products/main%20page/foam_board.jpeg",
        price: "Starting at $7.99",
        badge: "Indoor Favorite",
        config: {
          title: "Foam Board Signs",
          subtitle:
            "Lightweight and professional indoor display signs for presentations, lobbies, and events.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText:
            "✨ Foam Board Signs — Ultra-Light, Ultra-Crisp. Perfect for Presentations!",
          image: "/images/products/main%20page/foam_board.jpeg",
          images: [
            "/images/products/main%20page/foam_board.jpeg",
            "/images/products/foam_sign_hover.png",
          ],
          ratingScore: "4.8",
          ratingCount: "1,280",
          sizes: [
            { label: '8.5" x 11"', value: "8_5x11", basePrice: 7.99 },
            { label: '11" x 14"', value: "11x14", basePrice: 10.99 },
            { label: '11" x 17"', value: "11x17", basePrice: 12.99 },
            { label: '18" x 24"', value: "18x24", basePrice: 19.99 },
            { label: '24" x 36"', value: "24x36", basePrice: 32.99 },
            { label: '36" x 48"', value: "36x48", basePrice: 54.99 },
            { label: "Custom Size", value: "custom", basePrice: 0 },
          ],
          selects: [
            {
              label: "Board Thickness",
              options: [
                {
                  label: '3/16" (5mm) Standard',
                  value: "3_16",
                  priceAdder: 0,
                  description: "Best for most display applications.",
                },
                {
                  label: '1/2" (12mm) Thick',
                  value: "half",
                  priceAdder: 4,
                  description:
                    "Extra rigid — stands up on its own with an easel.",
                },
                {
                  label: '1" (25mm) Ultra-Thick',
                  value: "1in",
                  priceAdder: 9,
                  description: "Museum-quality thickness for premium displays.",
                },
              ],
            },
            {
              label: "Surface Finish",
              options: [
                {
                  label: "Matte (Standard)",
                  value: "matte",
                  priceAdder: 0,
                  description:
                    "No glare — great for photography and presentations.",
                },
                {
                  label: "Gloss",
                  value: "gloss",
                  priceAdder: 2.5,
                  description: "Deep, vivid colors with a polished look.",
                },
                {
                  label: "Satin",
                  value: "satin",
                  priceAdder: 2,
                  description:
                    "The best of both — minimal glare with rich color.",
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Mounting Backing",
              options: [
                { id: "none", label: "No Backing", priceAdder: 0 },
                {
                  id: "self_stick",
                  label: "Self-Adhesive Back",
                  priceAdder: 2.5,
                  description: "Peel & stick to any flat surface.",
                },
                {
                  id: "easel",
                  label: "Easel Back",
                  priceAdder: 1.99,
                  description: "Stands up on any flat surface.",
                },
              ],
            },
            {
              label: "Border / Frame",
              options: [
                { id: "no_border", label: "No Border", priceAdder: 0 },
                { id: "black_border", label: "Black Border", priceAdder: 0 },
                { id: "white_border", label: "White Border", priceAdder: 0 },
                {
                  id: "custom_frame",
                  label: "Custom Color Border",
                  priceAdder: 1,
                },
              ],
            },
          ],
          qtyDiscount: "Buy 5+ foam boards and save up to 10%",
          keyFeatures: [
            "Crisp, vivid full-color printing",
            "Ultra-lightweight for easy transport",
            "Smooth white surface for premium look",
            "Multiple thickness options",
            "Matte, Gloss or Satin finish",
            "Self-adhesive or easel-back options",
          ],
          useCases: [
            "Trade Show Displays",
            "Lobbies",
            "Presentations",
            "Real Estate Open Houses",
            "Photo Backdrops",
            "Wedding Signs",
            "School Projects",
            "Retail Displays",
          ],
          specs: [
            { key: "Core Material", value: "Polystyrene foam with paper face" },
            { key: "Standard Thickness", value: '3/16" (5mm)' },
            { key: "Print Method", value: "Direct UV Digital Inkjet" },
            { key: "Print Resolution", value: "1440 dpi" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.125" all sides' },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "Are foam board signs suitable for outdoor use?",
              a: "Foam board is designed for indoor use. It can be used outdoors briefly, but prolonged sun and moisture exposure will damage the board. For outdoor use, consider our coroplast or aluminum signs.",
            },
            {
              q: "Can foam board signs stand on their own?",
              a: "Yes, with the easel-back option selected. The easel attaches to the back and allows the sign to stand freestanding on any flat surface.",
            },
            {
              q: "How do I hang a foam board sign?",
              a: "Use push pins, foam tape, or command strips. With the self-adhesive backing option, simply peel and stick directly to any wall or surface.",
            },
            {
              q: 'Can I get large format foam boards over 36"?',
              a: "Yes, contact us for larger custom sizes. We can print foam boards up to 4' x 8' with seams jointed for larger displays.",
            },
          ],
          reviews: [
            {
              author: "Linda K.",
              rating: 5,
              text: "Perfect for our trade show booth. They were lightweight and the print quality was stunning!",
            },
            {
              author: "Jason R.",
              rating: 5,
              text: "Used these for an open house. Very professional looking and easy to carry around the property.",
            },
            {
              author: "Amanda T.",
              rating: 4,
              text: "Great for indoor use. Colors were accurate to my file. The easel back is a nice touch.",
            },
          ],
          ctaHeading: "Make Your Presentation Pop",
          ctaBody:
            "Vivid foam board signs that command attention at any indoor event.",
          ctaLabel: "Order Foam Board Signs",
        },
      },
      {
        id: "acrylic-signs",
        name: "Acrylic Signs",
        description:
          "Premium clear or colored acrylic for a polished, modern look.",
        image: "/images/products/main%20page/acrylic_sign.png",
        price: "Starting at $24.99",
        badge: "Premium",
        config: {
          title: "Custom Acrylic Signs",
          subtitle:
            "Premium clear and colored acrylic signs for a sleek, modern, upscale look.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText:
            "💎 Premium Acrylic Signs — Crystal-Clear Quality, Ships Next Day!",
          image: "/images/products/main%20page/acrylic_sign.png",
          images: [
            "/images/products/main%20page/acrylic_sign.png",
            "/images/products/acryl_sign_hover.png",
          ],
          ratingScore: "4.9",
          ratingCount: "980",
          sizes: [
            { label: '5" x 7"', value: "5x7", basePrice: 24.99 },
            { label: '8" x 10"', value: "8x10", basePrice: 34.99 },
            { label: '12" x 12"', value: "12x12", basePrice: 49.99 },
            { label: '12" x 18"', value: "12x18", basePrice: 59.99 },
            { label: '18" x 24"', value: "18x24", basePrice: 89.99 },
            { label: '24" x 36"', value: "24x36", basePrice: 139.99 },
            { label: "Custom Size", value: "custom", basePrice: 0 },
          ],
          selects: [
            {
              label: "Acrylic Type",
              options: [
                {
                  label: "Clear Acrylic (Standard)",
                  value: "clear",
                  priceAdder: 0,
                  description: "Crystal clear — print shows through beautifully.",
                },
                {
                  label: "White Acrylic",
                  value: "white",
                  priceAdder: 5,
                  description: "Bright white base for maximum color vibrancy.",
                },
                {
                  label: "Frosted Acrylic",
                  value: "frosted",
                  priceAdder: 8,
                  description:
                    "Elegant translucent appearance, ideal for office reception.",
                },
                {
                  label: "Black Acrylic",
                  value: "black",
                  priceAdder: 10,
                  description:
                    "Dramatic and modern — great for gold/silver text.",
                },
              ],
            },
            {
              label: "Thickness",
              options: [
                { label: '1/8" (3mm) Standard', value: "3mm", priceAdder: 0 },
                {
                  label: '1/4" (6mm) Heavy',
                  value: "6mm",
                  priceAdder: 15,
                  description: "Premium weight that commands respect.",
                },
                {
                  label: '3/8" (9mm) Ultra-Thick',
                  value: "9mm",
                  priceAdder: 30,
                  description: "The heaviest, most substantial option.",
                },
              ],
            },
            {
              label: "Print Method",
              options: [
                {
                  label: "UV Printed (Front)",
                  value: "uv_front",
                  priceAdder: 0,
                  description: "Direct printed on the front surface.",
                },
                {
                  label: "Second-Surface Print (Back)",
                  value: "second_surface",
                  priceAdder: 10,
                  description:
                    "Image printed on the back for a glass-effect look.",
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Corners",
              options: [
                { id: "square", label: "Square Corners", priceAdder: 0 },
                { id: "rounded", label: "Rounded Corners", priceAdder: 3 },
                { id: "custom_shape", label: "Custom Shape", priceAdder: 15 },
              ],
            },
            {
              label: "Mounting Hardware",
              options: [
                { id: "none", label: "No Mounting", priceAdder: 0 },
                {
                  id: "standoffs",
                  label: "Standoff Mounts (x4)",
                  priceAdder: 12.99,
                  description:
                    "Polished metal standoffs for wall floating effect.",
                },
                { id: "adhesive", label: "3M Adhesive Tape", priceAdder: 2.99 },
                { id: "holes", label: "Pre-Drilled Holes", priceAdder: 0 },
              ],
            },
          ],
          qtyDiscount: "Volume pricing — perfect for office signage packages",
          keyFeatures: [
            "Premium cast acrylic material",
            "Laser-cut edges for a perfect finish",
            "Multiple color and thickness options",
            "Second-surface printing for glass effect",
            "Standoff mounting hardware available",
            "Custom shapes and sizes supported",
          ],
          useCases: [
            "Office Reception",
            "Lobby Signage",
            "Awards & Recognition",
            "Retail Branding",
            "Wayfinding Signs",
            "Restaurant Menus",
            "Hotel Signage",
          ],
          specs: [
            { key: "Material", value: "Cast Acrylic (PMMA)" },
            { key: "Standard Thickness", value: '1/8" (3mm)' },
            { key: "Print Method", value: "UV Direct Print or Second-Surface" },
            {
              key: "Edge Finish",
              value: "Laser-polished, flame-polished, or matte",
            },
            { key: "Color Profile", value: "CMYK + White Ink Base" },
            { key: "Bleed Required", value: '0.125" all sides' },
            { key: "Turnaround", value: "2-3 Business Days" },
          ],
          faqs: [
            {
              q: "What is second-surface printing?",
              a: "The design is printed on the back of clear acrylic. You view it through the clear surface, creating a premium glass-like appearance that protects the ink from scratches.",
            },
            {
              q: "What standoff mounts do you recommend?",
              a: 'We offer 3/4" polished chrome standoffs for a sleek corporate look, or brushed nickel for a warmer finish. Both create a floating effect on the wall.',
            },
            {
              q: "Can acrylic signs be used outdoors?",
              a: "Cast acrylic is UV-stable and can be used outdoors. However, we recommend UV-printed finishes and avoiding direct harsh weather exposure for longest life.",
            },
            {
              q: "How do I clean acrylic signs?",
              a: "Use a soft cloth and mild soap or specialized acrylic cleaner. Never use ammonia-based cleaners (like Windex) as they may cloud the surface.",
            },
          ],
          reviews: [
            {
              author: "Gabriel M.",
              rating: 5,
              text: "Ordered acrylic signs for our new office. They look stunning — clients always ask about them.",
            },
            {
              author: "Sophia K.",
              rating: 5,
              text: "The second-surface printing is absolutely beautiful. Totally worth the extra cost.",
            },
            {
              author: "David N.",
              rating: 5,
              text: "The standoff mounts are a great touch. The floating effect on the wall looks very high-end.",
            },
          ],
          ctaHeading: "Upgrade to Premium Acrylic",
          ctaBody:
            "Crystal-clear signs that make your brand look like a million dollars.",
          ctaLabel: "Design Your Acrylic Sign",
        },
      },
      {
        id: "coroplast-signs",
        name: "Coroplast Signs",
        description:
          "Waterproof corrugated plastic signs — the most versatile, lightweight, and affordable outdoor advertising signs.",
        image: "/images/products/main%20page/coroplast_sign.png",
        price: "Starting at $4.99",
        badge: "Waterproof",
        config: {
          title: "Custom Coroplast Signs",
          subtitle:
            "The most versatile waterproof outdoor sign — durable, colorful, and incredibly affordable.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "💧 Waterproof Coroplast Signs — Weatherproof & Budget-Friendly. Ships Tomorrow!",
          image: "/images/products/main%20page/coroplast_sign.png",
          images: [
            "/images/products/main%20page/coroplast_sign.png",
            "/images/products/coro_sign_hover.png",
            "/images/products/yard_sign_hover.png",
          ],
          ratingScore: "4.8",
          ratingCount: "5,620",
          sizes: [
            { label: '12" x 18"', value: "12x18", basePrice: 4.99 },
            {
              label: '18" x 24" (Most Popular)',
              value: "18x24",
              basePrice: 7.99,
            },
            { label: '24" x 24"', value: "24x24", basePrice: 10.99 },
            { label: '24" x 36"', value: "24x36", basePrice: 14.99 },
            { label: '24" x 48"', value: "24x48", basePrice: 19.99 },
            { label: '48" x 96"', value: "48x96", basePrice: 64.99 },
            { label: "Custom Size", value: "custom", basePrice: 0 },
          ],
          selects: [
            {
              label: "Thickness",
              options: [
                {
                  label: "4mm (Standard — Most Popular)",
                  value: "4mm",
                  priceAdder: 0,
                  description:
                    "Best for general outdoor signage up to 12 months.",
                },
                {
                  label: "6mm Heavy Duty",
                  value: "6mm",
                  priceAdder: 1.75,
                  description:
                    "50% thicker — ideal for long-term and reusable signs.",
                },
                {
                  label: "8mm Ultra Heavy Duty",
                  value: "8mm",
                  priceAdder: 4,
                  description: "The thickest option for maximum rigidity.",
                },
              ],
            },
            {
              label: "Printing",
              options: [
                { label: "Single Sided", value: "single", priceAdder: 0 },
                {
                  label: "Double Sided",
                  value: "double",
                  priceAdder: 2.5,
                  description: "Both faces printed for maximum visibility.",
                },
              ],
            },
            {
              label: "Color",
              options: [
                {
                  label: "White Background (Standard)",
                  value: "white",
                  priceAdder: 0,
                },
                { label: "Yellow Background", value: "yellow", priceAdder: 0 },
                { label: "Red Background", value: "red", priceAdder: 0 },
                { label: "Blue Background", value: "blue", priceAdder: 0 },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Stakes",
              options: [
                { id: "none", label: "No Stakes", priceAdder: 0 },
                { id: "9in", label: '9" Wire H-Stakes', priceAdder: 0.99 },
                { id: "15in", label: '15" Wire H-Stakes', priceAdder: 1.49 },
                {
                  id: "step",
                  label: "Step Stakes",
                  priceAdder: 1.99,
                  description: "Easy push-in with foot",
                },
              ],
            },
            {
              label: "Grommets",
              options: [
                { id: "no_grommets", label: "No Grommets", priceAdder: 0 },
                {
                  id: "corner_grommets",
                  label: "Corner Grommets",
                  priceAdder: 0.5,
                },
                {
                  id: "perimeter_grommets",
                  label: 'Perimeter Grommets (every 24")',
                  priceAdder: 1.5,
                },
              ],
            },
          ],
          qtyDiscount: "Buy more, save more — up to 13% off on large orders",
          keyFeatures: [
            "100% waterproof corrugated plastic",
            "UV-resistant full-color printing",
            "Available in 4mm, 6mm, and 8mm",
            "Lightweight and easy to transport",
            "Double-sided printing available",
            "Custom sizes available",
          ],
          useCases: [
            "Yard Signs",
            "Construction Sites",
            "Fence Signs",
            "Event Signage",
            "Political Signs",
            "For Sale Signs",
            "Business Promotions",
            "Directional Signs",
          ],
          specs: [
            { key: "Material", value: "Corrugated Polypropylene (Coroplast)" },
            { key: "Standard Thickness", value: "4mm" },
            {
              key: "Weatherproof Rating",
              value: "Fully waterproof, UV-resistant inks",
            },
            { key: "Print Resolution", value: "720 x 1440 dpi" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.125" all sides' },
            {
              key: "Expected Lifespan",
              value: "6–18 months outdoors (4mm); 2+ years (6mm+)",
            },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "What is the difference between coroplast and regular cardboard?",
              a: "Coroplast is corrugated polypropylene plastic — it is 100% waterproof, flexible, and far more durable than cardboard. It won't absorb moisture or warp in the rain.",
            },
            {
              q: "Can I use coroplast signs indoors?",
              a: "Absolutely. Coroplast is a great indoor sign material too — it's lightweight, rigid, and easy to display with stakes, grommets, or adhesive.",
            },
            {
              q: "How do I attach coroplast signs to a fence?",
              a: "Use zip ties through grommets, or bungee cords. We can add pre-punched grommets to any side of the sign for easy attachment.",
            },
            {
              q: "Are they recyclable?",
              a: "Yes! Coroplast signs are made from polypropylene (PP #5) and are fully recyclable at facilities that accept rigid plastics.",
            },
          ],
          reviews: [
            {
              author: "Derek F.",
              rating: 5,
              text: "We ordered 500 signs for our campaign and they were perfect. Fast delivery and great price per sign.",
            },
            {
              author: "Tina R.",
              rating: 5,
              text: "The 6mm signs are incredibly sturdy. Held up through a whole hurricane season on our construction site.",
            },
            {
              author: "Bobby M.",
              rating: 5,
              text: "Best price I found anywhere for coroplast signs. Will definitely order again.",
            },
          ],
          ctaHeading: "Sign Big, Spend Small",
          ctaBody: "Coroplast signs deliver maximum impact at the lowest possible price per sign.",
          ctaLabel: "Order Coroplast Signs Now",
        },
      },
      {
        id: "window-signs",
        name: "Window Signs",
        description:
          "Custom window graphics, clings, perforated vinyl, and decals for storefronts and offices.",
        image: "/images/products/main%20page/window_sign.png",
        price: "Starting at $9.99",
        badge: "Storefront",
        config: {
          title: "Window Signs & Clings",
          subtitle:
            "Custom window graphics, clings, perforated vinyl, and decals for storefronts and offices.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText:
            "🪟 Window Signs That Turn Passersby Into Customers — Ships Next Day!",
          image: "/images/products/main%20page/window_sign.png",
          images: [
            "/images/products/main%20page/window_sign.png",
            "/images/products/wind_sign_hover.png",
          ],
          ratingScore: "4.8",
          ratingCount: "1,940",
          sizes: [
            { label: '12" x 12"', value: "12x12", basePrice: 9.99 },
            { label: '12" x 24"', value: "12x24", basePrice: 14.99 },
            { label: '24" x 24"', value: "24x24", basePrice: 22.99 },
            { label: '24" x 36"', value: "24x36", basePrice: 32.99 },
            { label: '36" x 48"', value: "36x48", basePrice: 49.99 },
            { label: '48" x 72"', value: "48x72", basePrice: 79.99 },
            { label: "Custom Size", value: "custom", basePrice: 0 },
          ],
          selects: [
            {
              label: "Window Graphic Type",
              options: [
                {
                  label: "Static Cling (Removable)",
                  value: "static_cling",
                  priceAdder: 0,
                  description:
                    "No adhesive — clings electrostatically. Fully removable & reusable.",
                },
                {
                  label: "Clear Vinyl Decal",
                  value: "clear_vinyl",
                  priceAdder: 2,
                  description:
                    "Permanent adhesive on clear film. Very professional look.",
                },
                {
                  label: "White Vinyl Decal",
                  value: "white_vinyl",
                  priceAdder: 2,
                  description: "Opaque white background — bold, vivid colors.",
                },
                {
                  label: "Perforated Vinyl (One-Way Vision)",
                  value: "perforated",
                  priceAdder: 6,
                  description:
                    "See-through from inside, solid image from outside. 60/40 blockout.",
                },
                {
                  label: "Frosted Vinyl",
                  value: "frosted",
                  priceAdder: 5,
                  description:
                    "Privacy glass effect. Great for offices & conference rooms.",
                },
              ],
            },
            {
              label: "Adhesive",
              options: [
                {
                  label: "Removable (Standard)",
                  value: "removable",
                  priceAdder: 0,
                  description: "Peels off cleanly without residue.",
                },
                {
                  label: "Permanent",
                  value: "permanent",
                  priceAdder: 0,
                  description: "Long-term adhesion for extended display.",
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Application Surface",
              options: [
                {
                  id: "inside",
                  label: "Apply Inside (Facing Out)",
                  priceAdder: 0,
                  description: "Protected from weather — most durable.",
                },
                {
                  id: "outside",
                  label: "Apply Outside (Facing Out)",
                  priceAdder: 0,
                  description: "Maximum visibility from street.",
                },
                {
                  id: "second_surface",
                  label: "Second-Surface Reverse Print",
                  priceAdder: 2,
                  description:
                    "Image reversed so it reads correctly applied inside.",
                },
              ],
            },
            {
              label: "Lamination",
              options: [
                { id: "no_lam", label: "No Lamination", priceAdder: 0 },
                {
                  id: "matte_lam",
                  label: "Matte Laminate",
                  priceAdder: 2,
                  description: "UV protection, scratch-resistant.",
                },
                {
                  id: "gloss_lam",
                  label: "Gloss Laminate",
                  priceAdder: 2,
                  description: "Vibrant colors, scratch-resistant.",
                },
              ],
            },
          ],
          qtyDiscount: "Buy 3+ and save up to 10%",
          keyFeatures: [
            "Multiple window graphic types available",
            "One-way vision perforated vinyl available",
            "Removable or permanent adhesive options",
            "Inside or outside application",
            "UV-resistant inks",
            "Easy DIY installation",
          ],
          useCases: [
            "Retail Storefronts",
            "Restaurant Windows",
            "Office Branding",
            "Sales & Promotions",
            "Privacy Screens",
            "Vehicle Windows",
            "Real Estate Listings",
            "Event Promotion",
          ],
          specs: [
            { key: "Cling Material", value: "Electrostatic PVC (no adhesive)" },
            {
              key: "Vinyl Material",
              value: "Calendered PVC with acrylic adhesive",
            },
            {
              key: "Perforated Vinyl",
              value: "60% ink coverage / 40% hole (one-way vision)",
            },
            { key: "Print Resolution", value: "1440 dpi" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.25" all sides' },
            {
              key: "Max Width",
              value: '54" (custom widths for larger installs)',
            },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "What is the difference between a window cling and a decal?",
              a: "A static cling uses no adhesive — it clings to glass via static electricity and can be removed and reused. A decal uses adhesive to create a more permanent bond.",
            },
            {
              q: "Can I see through perforated vinyl?",
              a: "Yes! Perforated vinyl (one-way vision) blocks 60% of light from outside, forming your printed image. From the inside, you can see through the small holes clearly.",
            },
            {
              q: "How do I apply a window decal without bubbles?",
              a: "Clean the glass thoroughly, wet the surface with soapy water, apply with a squeegee, and work from center to edges. We include installation instructions with every order.",
            },
            {
              q: "Will window graphics damage my glass?",
              a: "Removable adhesive window graphics peel off cleanly without damage or residue when removed within the recommended display period (typically 2 years).",
            },
          ],
          reviews: [
            {
              author: "Naomi S.",
              rating: 5,
              text: "The perforated vinyl looks incredible on our storefront. We get compliments on it every day.",
            },
            {
              author: "Kyle R.",
              rating: 5,
              text: "Ordered frosted vinyl for our conference room for privacy. Looks extremely professional and high-end.",
            },
            {
              author: "Isabella T.",
              rating: 4,
              text: "Great quality static clings for a seasonal sale promotion. Easy to put up and remove — will reorder.",
            },
          ],
          ctaHeading: "Your Window Is Your Best Billboard",
          ctaBody:
            "Window signs turn every passerby into a potential customer. Start designing yours.",
          ctaLabel: "Design Your Window Sign",
        },
      },
      {
        id: "parking-signs",
        name: "Parking Signs",
        description:
          "Regulatory, reserved, and custom parking signs — aluminum or coroplast, ships next day.",
        image: "/images/products/main%20page/Parking_sign.jpeg",
        price: "Starting at $6.99",
        badge: "Ready to Ship",
        config: {
          title: "Custom Parking Signs",
          subtitle:
            "Regulatory, reserved, and custom parking signs — aluminum or coroplast, ships next day.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText:
            "🅿️ Custom Parking Signs — MUTCD-Compliant Reflective Available. Ships Tomorrow!",
          image: "/images/products/main%20page/Parking_sign.jpeg",
          images: [
            "/images/products/main%20page/Parking_sign.jpeg",
            "/images/products/park_sign_hover.png",
          ],
          ratingScore: "4.9",
          ratingCount: "2,310",
          sizes: [
            { label: '6" x 12" (Small)', value: "6x12", basePrice: 6.99 },
            { label: '9" x 12"', value: "9x12", basePrice: 8.99 },
            { label: '12" x 18" (Standard)', value: "12x18", basePrice: 11.99 },
            { label: '18" x 24" (Large)', value: "18x24", basePrice: 17.99 },
            { label: '24" x 24"', value: "24x24", basePrice: 24.99 },
            { label: "Custom Size", value: "custom", basePrice: 0 },
          ],
          selects: [
            {
              label: "Material",
              options: [
                {
                  label: ".040 Aluminum (Most Popular)",
                  value: "040_alum",
                  priceAdder: 0,
                  description:
                    "Industry standard for parking signs. Rigid and durable.",
                },
                {
                  label: ".080 Aluminum Heavy Duty",
                  value: "080_alum",
                  priceAdder: 5,
                  description: "Double thickness — ideal for high-traffic lots.",
                },
                {
                  label: "4mm Coroplast (Budget)",
                  value: "coro",
                  priceAdder: -3,
                  description:
                    "Lightweight and waterproof — best for temporary use.",
                },
              ],
            },
            {
              label: "Finish",
              options: [
                { label: "Matte (Standard)", value: "matte", priceAdder: 0 },
                { label: "High Gloss", value: "gloss", priceAdder: 1.5 },
                {
                  label: "Engineer-Grade Reflective",
                  value: "reflective_eng",
                  priceAdder: 7,
                  description:
                    "ASTM D4956 Type I — visible at night with headlights.",
                },
                {
                  label: "High-Intensity Reflective",
                  value: "reflective_hi",
                  priceAdder: 14,
                  description: "ASTM D4956 Type III — maximum night visibility.",
                },
              ],
            },
            {
              label: "Sign Template",
              options: [
                {
                  label: "Custom Design (Upload Artwork)",
                  value: "custom",
                  priceAdder: 0,
                },
                {
                  label: "No Parking (Standard Red/White)",
                  value: "no_parking",
                  priceAdder: 0,
                },
                { label: "Reserved Parking", value: "reserved", priceAdder: 0 },
                {
                  label: "Handicap Accessible",
                  value: "handicap",
                  priceAdder: 0,
                },
                { label: "Tow Away Zone", value: "tow_away", priceAdder: 0 },
                {
                  label: "Customer Parking Only",
                  value: "customer_only",
                  priceAdder: 0,
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Mounting Holes",
              options: [
                { id: "no_holes", label: "No Holes", priceAdder: 0 },
                { id: "two_top", label: "2 Holes at Top", priceAdder: 0 },
                { id: "four_corner", label: "4 Corner Holes", priceAdder: 0 },
                {
                  id: "center_holes",
                  label: "2 Center-Side Holes",
                  priceAdder: 0,
                },
              ],
            },
            {
              label: "Post / Mounting Bracket",
              options: [
                { id: "sign_only", label: "Sign Only", priceAdder: 0 },
                {
                  id: "u_channel",
                  label: "U-Channel Post (included)",
                  priceAdder: 18.99,
                  description: "Standard street-sign post",
                },
                {
                  id: "square_post",
                  label: "Square Tubing Post",
                  priceAdder: 22.99,
                  description: "Heavy-duty square post for permanent installs",
                },
              ],
            },
          ],
          qtyDiscount: "Bulk parking sign orders — save up to 13%",
          keyFeatures: [
            "Industry-standard .040 aluminum",
            "Reflective finish available (ASTM D4956 Type I & III)",
            "Standard templates or fully custom designs",
            "Pre-drilled mounting holes included free",
            "MUTCD-compliant options available",
            "U-channel and square post add-ons",
          ],
          useCases: [
            "Private Parking Lots",
            "Business Parking",
            "HOA Communities",
            "Hotels & Motels",
            "Hospitals & Clinics",
            "Churches",
            "Schools",
            "Apartment Complexes",
          ],
          specs: [
            { key: "Standard Material", value: '.040" Aluminum' },
            { key: "Heavy Duty", value: '.080" Aluminum' },
            {
              key: "Reflective Standard",
              value: "ASTM D4956 Type I (Engineer Grade)",
            },
            {
              key: "Reflective Premium",
              value: "ASTM D4956 Type III (High Intensity)",
            },
            { key: "Hole Diameter", value: '5/16" standard' },
            { key: "Print Resolution", value: "1440 dpi" },
            { key: "Color Profile", value: "CMYK + Spot colors available" },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "Are your parking signs MUTCD compliant?",
              a: "Yes! Our reflective aluminum signs can be produced to MUTCD (Manual on Uniform Traffic Control Devices) specifications. Select the Engineer-Grade or High-Intensity Reflective finish.",
            },
            {
              q: "Do you have standard parking sign templates?",
              a: "Yes — we offer standard pre-designed templates (No Parking, Reserved, Handicap, Tow Away Zone, etc.) that follow regulatory color standards. You can also fully customize any sign.",
            },
            {
              q: "How do I mount a parking sign to a post?",
              a: 'We offer U-Channel and square tubing post add-ons. Alternatively, pre-drilled holes allow you to mount to any standard 2" U-channel post with sign-mounting hardware.',
            },
            {
              q: "Can I include time restrictions on my parking sign?",
              a: "Absolutely. Our custom design upload lets you include any specific text, time ranges, or language. We also have templates with 'Hours of Enforcement' sections.",
            },
          ],
          reviews: [
            {
              author: "Steve P.",
              rating: 5,
              text: "Ordered 30 parking signs for our apartment complex. All look great and the reflective finish is very visible at night.",
            },
            {
              author: "Rebecca O.",
              rating: 5,
              text: "Fast, high quality, and exactly the right regulatory look. Our HOA board approved them immediately.",
            },
            {
              author: "Marcus J.",
              rating: 5,
              text: "The U-channel posts were a perfect add-on. Everything arrived together and install was straightforward.",
            },
          ],
          ctaHeading: "Control Your Parking. Protect Your Space.",
          ctaBody:
            "Professional-grade parking signs that are clear, visible, and regulation-ready.",
          ctaLabel: "Order Parking Signs Now",
        },
      },
      {
        id: "channel-letter-signs",
        name: "Channel Letter Signs",
        description:
          "Premium 3D backlit and front-lit channel letters to make your business storefront stand out.",
        image: "/images/products/main%20page/channel_letter_signs.png",
        price: "Starting at $149.99",
        badge: "Premium",
        config: {
          title: "Custom Channel Letter Signs",
          subtitle:
            "Professional dimensional signage with brilliant LED illumination options.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "✨ Modern LED Channel Letters — Professional Storefront Impact. Shipped Fast!",
          image: "/images/products/main%20page/channel_letter_signs.png",
          images: [
            "/images/products/main%20page/channel_letter_signs.png",
            "/images/products/gallery/channel_letter_storefront_1.png",
            "/images/products/gallery/channel_letter_storefront_2.png",
          ],
          ratingScore: "4.9",
          ratingCount: "820",
          sizes: [
            { label: '12" High Letters', value: "12in", basePrice: 149.99 },
            { label: '18" High Letters', value: "18in", basePrice: 224.99 },
            { label: '24" High Letters', value: "24in", basePrice: 299.99 },
            { label: '36" High Letters', value: "36in", basePrice: 449.99 },
          ],
          selects: [
            {
              label: "Illumination Type",
              options: [
                {
                  label: "Front-Lit (LED Face Glowing)",
                  value: "front_lit",
                  priceAdder: 0,
                  description: "Standard bright acrylic faces with internal LED illumination.",
                },
                {
                  label: "Halo-Lit / Reverse-Lit (Rear Glowing)",
                  value: "halo_lit",
                  priceAdder: 50.0,
                  description: "Light projects onto the wall behind, creating a halo effect.",
                },
                {
                  label: "Dual-Lit (Front & Rear Glowing)",
                  value: "dual_lit",
                  priceAdder: 90.0,
                  description: "Combines glowing faces and halo backlighting for maximum impact.",
                },
                {
                  label: "Non-Illuminated Dimensional Letters",
                  value: "non_illuminated",
                  priceAdder: -40.0,
                  description: "High-end 3D metal or acrylic letters without lights.",
                },
              ],
            },
            {
              label: "Mounting Style",
              options: [
                {
                  label: "Raceway Mount (Standard)",
                  value: "raceway",
                  priceAdder: 0,
                  description: "Letters pre-installed on a metal box/bar container for easier wiring.",
                },
                {
                  label: "Flush / Direct Wall Mount",
                  value: "flush",
                  priceAdder: 35.0,
                  description: "Letters mounted directly to the wall surface with individual wiring.",
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Face Acrylic Color",
              options: [
                { id: "white_face", label: "Brilliant White", priceAdder: 0 },
                { id: "red_face", label: "Vibrant Red", priceAdder: 0 },
                { id: "blue_face", label: "Royal Blue", priceAdder: 0 },
                { id: "black_face", label: "Black (Glows White)", priceAdder: 15.0 },
              ],
            },
            {
              label: "Return / Trim Color (Sides)",
              options: [
                { id: "black_return", label: "Sleek Black", priceAdder: 0 },
                { id: "silver_return", label: "Brushed Aluminum", priceAdder: 0 },
                { id: "bronze_return", label: "Classic Bronze", priceAdder: 0 },
              ],
            },
          ],
          qtyDiscount: "Volume discounts on complex multi-letter signs",
          keyFeatures: [
            "Heavy-duty aluminum returns (side walls) will not rust",
            "Energy-efficient and long-lasting UL-listed LEDs",
            "Custom fonts, colors, and logos supported",
            "Front-lit and halo-lit options for stunning looks",
            "Raceway mount option for simplified building installation",
          ],
          useCases: [
            "Retail Storefronts",
            "Corporate Offices",
            "Restaurants & Cafes",
            "Shopping Centers",
            "Building Exterior Signage",
          ],
          specs: [
            { key: "Letter Thickness (Depth)", value: "3\" to 5\" deep returns" },
            { key: "Illumination source", value: "UL-certified Low-voltage 12V LEDs" },
            { key: "Face Material", value: "3/16\" Cast Acrylic" },
            { key: "Return Material", value: "0.040\" Pre-painted Aluminum" },
            { key: "Wiring Type", value: "Single-source connection (with Raceway)" },
            { key: "Outdoor Lifespan", value: "10+ years maintenance-free" },
          ],
          faqs: [
            {
              q: "What is the difference between front-lit and halo-lit letters?",
              a: "Front-lit letters have acrylic faces that glow in the chosen color, throwing light forward. Halo-lit (or reverse-lit) letters have aluminum faces but open backs, allowing light to reflect off the wall behind the letter to create a soft, upscale halo glow.",
            },
            {
              q: "What is a raceway mount?",
              a: "A raceway is a metal box structure that the channel letters are mounted to. It holds the power supplies and wiring. Mounting via a raceway only requires a few holes in the building's facade, whereas flush mounting requires drilling individual mounting and wiring holes for every single letter.",
            },
            {
              q: "Do you supply the mounting templates and hardware?",
              a: "Yes! Every channel letter sign comes with a full-size paper mounting template, studs, silicone spacers, and clear instructions to make installation straightforward for any handyman or signage installer.",
            },
          ],
          reviews: [
            {
              author: "Gordon K.",
              rating: 5,
              text: "The halo-lit letters transformed our cafe facade. Absolute showstopper at night. Highly recommend!",
            },
            {
              author: "Samantha V.",
              rating: 5,
              text: "Fantastic customer support in setting up our custom vector logo. The letters arrived securely crated and installation templates were exact.",
            },
          ],
          ctaHeading: "Brighten Your Business Facade",
          ctaBody:
            "Custom 3D LED channel letters manufactured with commercial-grade components.",
          ctaLabel: "Order Channel Letter Signs Now",
        },
      },
    ],
  },
};
