"use client";

import { useState, useMemo, useEffect, ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/contact-section";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Star,
  Info,
  Clock,
  UploadCloud,
  Loader2,
} from "lucide-react";
import { useCart } from "./CartContext";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "./AuthContext";
import { usePathname } from "next/navigation";
import { PRODUCTS_REGISTRY } from "@/lib/productsRegistry";

/* ─── Generic Types ─────────────────────────────── */
export interface SizeOption {
  label: string;
  value: string;
  basePrice: number;
  quantityPrices?: Record<number, number>;
}
export interface SelectOption {
  label: string;
  value: string;
  priceAdder?: number;
  priceMultiplier?: number;
  description?: string;
  image?: string;
  sizePriceAdders?: Record<string, number>;
}
export interface ToggleOption {
  id: string;
  label: string;
  priceAdder: number;
  priceMultiplier?: number;
  description?: string;
  sizePriceAdders?: Record<string, number>;
}
export interface FaqItem {
  q: string;
  a: string;
}
export interface ReviewItem {
  author: string;
  rating: number;
  text: string;
}
export interface SpecRow {
  key: string;
  value: string;
}

export interface ProductPageConfig {
  title: string;
  subtitle: string;
  breadcrumb: string;
  breadcrumbHref: string;
  promoText: string;
  image: string;
  images?: string[];
  ratingCount: string;
  ratingScore: string;
  sizes: SizeOption[];
  selects?: { label: string; options: SelectOption[] }[];
  toggleGroups?: { label: string; options: ToggleOption[] }[];
  qtyDiscount: string;
  keyFeatures: string[];
  useCases: string[];
  specs: SpecRow[];
  faqs: FaqItem[];
  reviews: ReviewItem[];
  ctaHeading: string;
  ctaBody?: string;
  ctaLabel?: string;
  uniqueCallout?: {
    icon: ReactNode;
    heading: string;
    body: string;
    color: string;
  };
  description?: string;
  minQuantity?: number;
  quantityOptions?: number[];
  bulkDiscounts?: { minQty: number; discountPercent: number }[];
  quantityPrices?: Record<number, number>;
  id?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${s <= rating ? "fill-[#ca8a04] text-[#ca8a04]" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

function ShippingCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [nextShipDate, setNextShipDate] = useState("");

  useEffect(() => {
    // Calculate next shipping date
    const today = new Date();
    const shipDate = new Date(today);

    // If it's after 5 PM, it ships the next business day
    if (today.getHours() >= 17) {
      shipDate.setDate(today.getDate() + 1);
    }

    // Adjust for weekend (Saturday=6, Sunday=0)
    while (shipDate.getDay() === 0 || shipDate.getDay() === 6) {
      shipDate.setDate(shipDate.getDate() + 1);
    }

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "short",
      day: "numeric",
    };
    setNextShipDate(shipDate.toLocaleDateString("en-US", options));

    const timer = setInterval(() => {
      const now = new Date();
      const cutoff = new Date(now);
      cutoff.setHours(17, 0, 0, 0); // 5:00 PM cutoff

      let diff = cutoff.getTime() - now.getTime();
      if (diff < 0) {
        // Cutoff passed, countdown to tomorrow's cutoff
        cutoff.setDate(cutoff.getDate() + 1);
        diff = cutoff.getTime() - now.getTime();
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-3.5 text-xs text-green-800 font-semibold flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-green-600 shrink-0 animate-pulse" />
        <span>
          Order in the next{" "}
          <span className="font-extrabold">
            {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </span>
        </span>
      </div>
      <div>
        Ships:{" "}
        <span className="underline font-extrabold text-green-900">
          {nextShipDate}
        </span>
      </div>
    </div>
  );
}

export function SignProductPage({ cfg: originalCfg }: { cfg: ProductPageConfig }) {
  // Dynamically merge pricing from the central registry
  const pathname = usePathname();
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
  }, [originalCfg, pathname]);

  const [selectedSize, setSelectedSize] = useState(cfg.sizes[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [userClickedThumbnail, setUserClickedThumbnail] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { addItem } = useCart();
  const { user, setShowAuthModal } = useAuth();

  const [pdfUploading, setPdfUploading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [pdfName, setPdfName] = useState<string | null>(null);
  const [pdfError, setPdfError] = useState<string | null>(null);

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!user) {
      setPdfError("Please sign in or create an account to upload your design.");
      setShowAuthModal(true);
      e.target.value = "";
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/jpg",
    ];
    if (!allowedTypes.includes(file.type)) {
      setPdfError("Only PDF, PNG, or JPG files are accepted.");
      return;
    }

    setPdfError(null);
    setPdfUploading(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
      const filePath = `designs/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("designs")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("designs").getPublicUrl(filePath);

      setPdfUrl(publicUrl);
      setPdfName(file.name);
    } catch (err) {
      console.error("PDF upload failed:", err);
      setPdfError(
        err instanceof Error
          ? err.message
          : "Failed to upload design file. Please try again.",
      );
    } finally {
      setPdfUploading(false);
    }
  };

  const handleRemovePdf = () => {
    setPdfUrl(null);
    setPdfName(null);
    setPdfError(null);
  };

  const handleAddToCart = () => {
    // Enforce $25 minimum order
    if (parseFloat((unitPrice * quantity).toFixed(2)) < 25) {
      alert(`Minimum order is $25.00. Please increase quantity to at least ${minOrderQty} to continue.`);
      setQuantity(minOrderQty);
      return;
    }
    const customOptions: Record<string, string> = {};
    Object.entries(selectValues).forEach(([k, v]) => {
      customOptions[k] = v.label;
    });
    Object.entries(toggleValues).forEach(([k, v]) => {
      customOptions[k] = v.label;
    });

    addItem({
      productTitle: cfg.title,
      size: selectedSize.label,
      quantity,
      unitPrice,
      totalPrice: Number(totalPrice),
      designUrl: pdfUrl || undefined,
      designFilename: pdfName || undefined,
      customOptions,
    });
  };

  useEffect(() => {
    setActiveImageIndex(0);
    setUserClickedThumbnail(false);
    const defaultMin = cfg.minQuantity || (cfg.quantityOptions ? cfg.quantityOptions[0] : 1);
    setQuantity(defaultMin);
  }, [cfg]);
  const [selectValues, setSelectValues] = useState<
    Record<string, SelectOption>
  >(() => {
    const init: Record<string, SelectOption> = {};
    cfg.selects?.forEach((s) => {
      init[s.label] = s.options[0];
    });
    return init;
  });
  const [toggleValues, setToggleValues] = useState<
    Record<string, ToggleOption>
  >(() => {
    const init: Record<string, ToggleOption> = {};
    cfg.toggleGroups?.forEach((g) => {
      init[g.label] = g.options[0];
    });
    return init;
  });
  const [quantity, setQuantity] = useState(() => cfg.minQuantity || (cfg.quantityOptions ? cfg.quantityOptions[0] : 1));
  const [activeTab, setActiveTab] = useState("overview");

  const galleryImages = useMemo(() => {
    const imagesList = cfg.images && cfg.images.length > 0 ? cfg.images : [cfg.image];
    return Array.from(new Set(imagesList.filter(Boolean)));
  }, [cfg.images, cfg.image]);

  const currentImage = useMemo(() => {
    if (userClickedThumbnail) {
      return galleryImages[activeImageIndex] || galleryImages[0] || "";
    }
    for (const val of Object.values(selectValues)) {
      if (val.image) return val.image;
    }
    return galleryImages[activeImageIndex] || galleryImages[0] || "";
  }, [selectValues, galleryImages, activeImageIndex, userClickedThumbnail]);

  const activeIndex = useMemo(() => {
    if (userClickedThumbnail) return activeImageIndex;
    const idx = galleryImages.indexOf(currentImage);
    return idx !== -1 ? idx : activeImageIndex;
  }, [userClickedThumbnail, activeImageIndex, galleryImages, currentImage]);

  const unitPrice = useMemo(() => {
    let baseUnitPrice = selectedSize.basePrice;
    const sizeQtyPrices = (selectedSize as any).quantityPrices;
    if (sizeQtyPrices && sizeQtyPrices[quantity] !== undefined) {
      baseUnitPrice = sizeQtyPrices[quantity] / quantity;
    } else if (cfg.quantityPrices && cfg.quantityPrices[quantity] !== undefined) {
      baseUnitPrice = cfg.quantityPrices[quantity] / quantity;
    }

    let price = baseUnitPrice;
    let multiplier = 1;

    Object.values(selectValues).forEach((v) => {
      const adder = (v as any).sizePriceAdders?.[selectedSize.value] ?? v.priceAdder;
      price += adder;
      if (v.priceMultiplier !== undefined) {
        multiplier *= v.priceMultiplier;
      }
    });
    Object.values(toggleValues).forEach((v) => {
      const adder = (v as any).sizePriceAdders?.[selectedSize.value] ?? v.priceAdder;
      price += adder;
      if (v.priceMultiplier !== undefined) {
        multiplier *= v.priceMultiplier;
      }
    });

    let discount = 1;
    if (cfg.bulkDiscounts) {
      const sortedDiscounts = [...cfg.bulkDiscounts].sort((a, b) => b.minQty - a.minQty);
      const matchedDiscount = sortedDiscounts.find((d) => quantity >= d.minQty);
      if (matchedDiscount) {
        discount = (100 - matchedDiscount.discountPercent) / 100;
      }
    } else if (cfg.quantityPrices || sizeQtyPrices) {
      discount = 1;
    } else {
      if (quantity >= 100) discount = 0.82;
      else if (quantity >= 50) discount = 0.87;
      else if (quantity >= 25) discount = 0.9;
      else if (quantity >= 10) discount = 0.94;
      else if (quantity >= 5) discount = 0.97;
    }

    return price * discount * multiplier;
  }, [selectedSize, selectValues, toggleValues, quantity, cfg.bulkDiscounts, cfg.quantityPrices]);

  const isBulkDiscountApplied = useMemo(() => {
    if (cfg.bulkDiscounts) {
      const minQty = Math.min(...cfg.bulkDiscounts.map((d) => d.minQty));
      return quantity >= minQty;
    }
    const sizeQtyPrices = (selectedSize as any).quantityPrices;
    if (cfg.quantityPrices || sizeQtyPrices) {
      return quantity > (cfg.quantityOptions ? cfg.quantityOptions[0] : 1);
    }
    return quantity >= 5;
  }, [cfg, selectedSize, quantity]);

  const totalPrice = (unitPrice * quantity).toFixed(2);
  const originalTotalPrice = ((unitPrice / 0.75) * quantity).toFixed(2); // 25% off display

  // ─── $25 Minimum Order Enforcement ────────────────────────────────────────
  const MIN_ORDER = 25;
  // How many units are needed so total >= $25?
  const minOrderQty = unitPrice > 0 ? Math.max(cfg.minQuantity || 1, Math.ceil(MIN_ORDER / unitPrice)) : (cfg.minQuantity || 1);
  const isBelowMinOrder = parseFloat(totalPrice) < MIN_ORDER;

  const customizeUrl = useMemo(() => {
    const parts = selectedSize.value.split("x");
    const pId = cfg.id || "51060";
    
    const selVals: Record<string, string> = {};
    Object.entries(selectValues).forEach(([k, v]) => {
      selVals[k] = v.value;
    });
    const selQuery = encodeURIComponent(JSON.stringify(selVals));

    if (parts.length === 2) {
      const height = parts[0];
      const width = parts[1];
      return `/PrintDesignExperience/Load?productId=${pId}&width=${width}&height=${height}&quantity=${quantity}&selects=${selQuery}`;
    }
    return `/PrintDesignExperience/Load?productId=${pId}&quantity=${quantity}&selects=${selQuery}`;
  }, [selectedSize.value, cfg.id, selectValues, quantity]);

  // Dynamic preview calculations
  const aspect = useMemo(() => {
    const dims = selectedSize.label.match(/\d+(\.\d+)?/g)?.map(Number);
    if (!dims || dims.length < 2) return 4 / 3;
    const [d1, d2] = dims;

    // Check if vertical orientation is selected in selects or toggle values
    let isVertical = false;
    const orientSelect = Object.entries(selectValues).find(([k]) =>
      k.toLowerCase().includes("orientation"),
    );
    if (
      orientSelect &&
      orientSelect[1].value.toLowerCase().includes("vertical")
    ) {
      isVertical = true;
    }
    const orientToggle = Object.entries(toggleValues).find(([k]) =>
      k.toLowerCase().includes("orientation"),
    );
    if (orientToggle && orientToggle[1].id.toLowerCase().includes("vertical")) {
      isVertical = true;
    }

    if (cfg.title.toLowerCase().includes("parking") || isVertical) {
      // Parking signs and products with selected vertical orientation are portrait
      const w = Math.min(d1, d2);
      const h = Math.max(d1, d2);
      return w / h;
    } else {
      // Most other products are landscape by default
      const w = Math.max(d1, d2);
      const h = Math.min(d1, d2);
      return w / h;
    }
  }, [selectedSize.label, cfg.title, selectValues, toggleValues]);

  const hasRoundedCorners = useMemo(() => {
    const cornerToggle = Object.entries(toggleValues).find(([k]) =>
      k.toLowerCase().includes("corner"),
    );
    if (cornerToggle && cornerToggle[1].id.toLowerCase().includes("round"))
      return true;
    const cornerSelect = Object.entries(selectValues).find(([k]) =>
      k.toLowerCase().includes("corner"),
    );
    if (cornerSelect && cornerSelect[1].value.toLowerCase().includes("round"))
      return true;
    return false;
  }, [toggleValues, selectValues]);

  const hasStakes = useMemo(() => {
    const stakeToggle = Object.entries(toggleValues).find(([k]) =>
      k.toLowerCase().includes("stake"),
    );
    if (
      stakeToggle &&
      !["none", "no_stake", "sign_only"].includes(stakeToggle[1].id)
    )
      return true;
    const stakeSelect = Object.entries(selectValues).find(([k]) =>
      k.toLowerCase().includes("stake"),
    );
    if (
      stakeSelect &&
      !["none", "no_stake", "sign_only"].includes(stakeSelect[1].value)
    )
      return true;
    return false;
  }, [toggleValues, selectValues]);

  const hasGrommets = useMemo(() => {
    const grommetToggle = Object.entries(toggleValues).find(
      ([k]) =>
        k.toLowerCase().includes("grommet") || k.toLowerCase().includes("hole"),
    );
    if (
      grommetToggle &&
      !["none", "no_grommets", "no_holes", "sign_only"].includes(
        grommetToggle[1].id,
      )
    )
      return true;
    const grommetSelect = Object.entries(selectValues).find(
      ([k]) =>
        k.toLowerCase().includes("grommet") || k.toLowerCase().includes("hole"),
    );
    if (
      grommetSelect &&
      !["none", "no_grommets", "no_holes", "sign_only"].includes(
        grommetSelect[1].value,
      )
    )
      return true;
    return false;
  }, [toggleValues, selectValues]);

  const acrylicType = useMemo(() => {
    const typeSelect = Object.entries(selectValues).find(([k]) =>
      k.toLowerCase().includes("acrylic type"),
    );
    return typeSelect ? typeSelect[1].value : "clear";
  }, [selectValues]);

  const isAFrame = cfg.title.toLowerCase().includes("a-frame");
  const frameMaterial = useMemo(() => {
    const fm = Object.entries(selectValues).find(([k]) =>
      k.toLowerCase().includes("frame material"),
    );
    return fm ? fm[1].value : "plastic";
  }, [selectValues]);

  const isRealEstate = cfg.title.toLowerCase().includes("real estate");
  const accessoryType = useMemo(() => {
    const acc = Object.entries(toggleValues).find(([k]) =>
      k.toLowerCase().includes("accessories"),
    );
    return acc ? acc[1].id : "none";
  }, [toggleValues]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b text-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-gray-500">
          <Link href="/" className="hover:text-yellow-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href={cfg.breadcrumbHref}
            className="hover:text-yellow-600 transition-colors"
          >
            {cfg.breadcrumb}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{cfg.title}</span>
        </div>
      </div>

      {/* Promo */}
      <div
        className="text-gray-900 text-center py-2 text-sm font-bold tracking-wide"
        style={{
          background: "#f7f82d",
        }}
      >
        {cfg.promoText}
      </div>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* ── LEFT ── */}
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-2">
              {cfg.title}
            </h1>
            <p className="text-gray-500 mb-3">{cfg.subtitle}</p>
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={5} />
              <span className="text-sm text-gray-500">
                {cfg.ratingScore} / 5 ({cfg.ratingCount} Reviews)
              </span>
            </div>

            {/* Dynamic Product Visual Configurator Preview */}
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="relative w-full aspect-square bg-slate-50 border border-slate-100 shadow-inner mb-6 rounded-2xl transition-all duration-300 cursor-zoom-in overflow-hidden"
            >
              <Image
                src={currentImage}
                alt={`${cfg.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                quality={90}
                unoptimized={currentImage.startsWith("/api/")}
                className="object-cover"
                priority
              />
            </div>

            {galleryImages.length > 1 && (
              <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveImageIndex(idx);
                      setUserClickedThumbnail(true);
                    }}
                    className={`w-16 h-16 rounded-lg border-2 cursor-pointer p-1 bg-gray-50 transition-all ${
                      activeIndex === idx
                        ? "border-[#ca8a04] ring-2 ring-pink-100"
                        : "border-gray-150 hover:border-gray-350"
                    }`}
                    aria-label={`View product gallery image ${idx + 1}`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={img}
                        alt={`Product thumbnail ${idx + 1}`}
                        fill
                        sizes="64px"
                        unoptimized={img.startsWith("/api/")}
                        className="object-contain"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Unique callout */}
            {cfg.uniqueCallout && (
              <div
                className={`${cfg.uniqueCallout.color} rounded-2xl p-5 mb-8 flex gap-4`}
              >
                <div className="flex-shrink-0 mt-1">
                  {cfg.uniqueCallout.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1">
                    {cfg.uniqueCallout.heading}
                  </h3>
                  <p className="text-sm opacity-80">{cfg.uniqueCallout.body}</p>
                </div>
              </div>
            )}

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                {
                  icon: <Truck className="w-5 h-5 text-[#ca8a04]" />,
                  t: "Next Day Ship",
                  s: "Order by 5 PM",
                },
                {
                  icon: <ShieldCheck className="w-5 h-5 text-[#ca8a04]" />,
                  t: "100% Guarantee",
                  s: "Love it or reprint",
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-[#ca8a04]" />,
                  t: "Free Proof",
                  s: "Before we print",
                },
                {
                  icon: <Star className="w-5 h-5 text-[#ca8a04]" />,
                  t: "Top Rated",
                  s: cfg.ratingScore + " stars",
                },
              ].map((b) => (
                <div
                  key={b.t}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
                >
                  {b.icon}
                  <div>
                    <p className="text-xs font-bold leading-tight">{b.t}</p>
                    <p className="text-[10px] text-gray-500">{b.s}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="border-b mb-8">
              <div className="flex overflow-x-auto">
                {["overview", "specs", "faqs", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-3 text-sm font-bold capitalize whitespace-nowrap border-b-2 -mb-px transition-colors ${activeTab === tab ? "border-[#ca8a04] text-[#ca8a04]" : "border-transparent text-gray-500 hover:text-gray-800"}`}
                  >
                    {tab === "faqs"
                      ? "FAQs"
                      : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "overview" && (
              <div className="space-y-6">
                {cfg.description && (
                  <div
                    className="text-gray-600 text-sm leading-relaxed mb-6 font-opensans border-b border-gray-150 pb-6 space-y-4"
                    dangerouslySetInnerHTML={{ __html: cfg.description }}
                  />
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {cfg.keyFeatures.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#ca8a04] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="rounded-xl p-5"
                    style={{
                      background:
                        "rgba(247,248,45,0.06)",
                    }}
                  >
                    <h3 className="font-bold mb-3">Great For</h3>
                    <div className="flex flex-wrap gap-2">
                      {cfg.useCases.map((t) => (
                        <span
                          key={t}
                          className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="rounded-2xl border overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {cfg.specs.map((s) => (
                      <tr key={s.key} className="odd:bg-gray-50">
                        <td className="px-5 py-3 font-bold text-gray-700 w-2/5">
                          {s.key}
                        </td>
                        <td className="px-5 py-3 text-gray-600">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "faqs" && (
              <div className="space-y-4">
                {cfg.faqs.map(({ q, a }) => (
                  <div key={q} className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-bold mb-2">{q}</h4>
                    <p className="text-gray-600 text-sm">{a}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-4">
                {cfg.reviews.map((r) => (
                  <div key={r.author} className="bg-gray-50 rounded-xl p-5">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-sm">{r.author}</span>
                      <StarRating rating={r.rating} />
                    </div>
                    <p className="text-gray-600 text-sm">{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: Configurator ── */}
          <div className="w-full lg:w-[420px] shrink-0 font-opensans">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 sticky top-6">
              {/* Price */}
              {cfg.breadcrumb !== "LED Display Signs" && (
                <div className="pb-5 border-b mb-5">
                  <div className="flex items-end gap-2.5 mb-1.5">
                    <span className="text-4xl font-extrabold text-gray-900 font-poppins">
                      CAD {totalPrice}
                    </span>
                    <span className="text-lg text-gray-400 line-through font-semibold mb-0.5">
                      CAD {originalTotalPrice}
                    </span>
                    <span className="text-red-500 font-extrabold text-sm mb-1 bg-red-50 px-2 py-0.5 rounded-full">
                      25% OFF
                    </span>
                  </div>
                  {isBelowMinOrder && (
                    <div className="text-red-600 font-extrabold text-xs mb-2">
                      ⚠️ Minimum order total is CAD $25.00 (Current total: CAD {totalPrice})
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-semibold">
                      CAD {unitPrice.toFixed(2)} each
                    </span>
                    {isBulkDiscountApplied && (
                      <span className="text-green-600 font-extrabold">
                        Bulk Discount Applied!
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="space-y-5">
                {/* Size */}
                <div>
                  <label className="block text-sm font-bold mb-2">Size</label>
                  <div className="relative">
                    <select
                      value={selectedSize.value}
                      onChange={(e) => {
                        setSelectedSize(
                          cfg.sizes.find((s) => s.value === e.target.value)!,
                        );
                        setUserClickedThumbnail(false);
                      }}
                      className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#f7f82d] cursor-pointer font-semibold"
                    >
                      {cfg.sizes.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Selects */}
                {cfg.selects?.map((sel) => (
                  <div key={sel.label}>
                    <label className="block text-sm font-bold mb-2">
                      {sel.label}
                    </label>
                    <div className="relative">
                      <select
                        value={selectValues[sel.label]?.value}
                        onChange={(e) => {
                          const found = sel.options.find(
                            (o) => o.value === e.target.value,
                          );
                          if (found) {
                            setSelectValues((prev) => ({
                              ...prev,
                              [sel.label]: found,
                            }));
                            setUserClickedThumbnail(false);
                          }
                        }}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#f7f82d] cursor-pointer font-semibold"
                      >
                        {sel.options.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                            {(o.priceAdder || 0) > 0
                              ? ` (+CAD ${(o.priceAdder || 0).toFixed(2)})`
                              : ""}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                    {selectValues[sel.label]?.description && (
                      <p className="mt-1.5 text-xs text-gray-500 flex items-center gap-1 leading-normal">
                        <Info className="w-3.5 h-3.5 text-gray-400 shrink-0" />{" "}
                        {selectValues[sel.label].description}
                      </p>
                    )}
                  </div>
                ))}

                {/* Toggle groups */}
                {cfg.toggleGroups?.map((grp) => (
                  <div key={grp.label}>
                    <label className="block text-sm font-bold mb-2">
                      {grp.label}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {grp.options.map((o) => (
                        <button
                          key={o.id}
                          onClick={() => {
                            setToggleValues((prev) => ({
                              ...prev,
                              [grp.label]: o,
                            }));
                            setUserClickedThumbnail(false);
                          }}
                          className={`p-3 text-left rounded-xl border-2 transition-all duration-200 ${toggleValues[grp.label]?.id === o.id ? "border-[#ca8a04] bg-pink-50" : "border-gray-200 hover:border-gray-300 bg-white"}`}
                        >
                          <span className="block text-xs font-bold text-gray-900">
                            {o.label}
                          </span>
                          {o.priceAdder > 0 && (
                            <span className="text-[10px] text-gray-500 font-semibold">
                              +CAD {o.priceAdder.toFixed(2)}
                            </span>
                          )}
                          {o.description && (
                            <span className="block text-[10px] text-gray-400 mt-0.5 leading-normal">
                              {o.description}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-3">
                    {cfg.quantityOptions ? (
                      <div className="relative flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden px-4 py-2.5">
                        <select
                          value={quantity}
                          onChange={(e) => setQuantity(parseInt(e.target.value) || 100)}
                          className="appearance-none bg-transparent pr-7 focus:outline-none font-extrabold text-sm text-gray-900 cursor-pointer"
                        >
                          {cfg.quantityOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    ) : (
                       <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setQuantity(Math.max(minOrderQty, quantity - 1))}
                          className="px-4 py-2.5 hover:bg-gray-100 text-lg font-bold transition-colors"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          min={minOrderQty}
                          onChange={(e) =>
                            setQuantity(
                              Math.max(
                                minOrderQty,
                                parseInt(e.target.value) || minOrderQty,
                              ),
                            )
                          }
                          className="w-16 text-center bg-transparent focus:outline-none font-extrabold text-sm text-gray-900"
                        />
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-4 py-2.5 hover:bg-gray-100 text-lg font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>
                    )}
                    <span className="text-xs text-gray-500 font-semibold">
                      {cfg.qtyDiscount}
                    </span>
                  </div>
                  {isBelowMinOrder && (
                    <div className="mt-2 text-xs text-red-600 font-bold">
                      💡 Minimum quantity for this option is {minOrderQty} to reach the $25.00 order minimum.
                    </div>
                  )}
                  {/* Qty tiers */}
                  {!cfg.quantityPrices && (
                    <div className="mt-3 grid grid-cols-4 gap-1.5 text-center text-[10px] font-bold">
                      {(cfg.bulkDiscounts || [
                        { minQty: 5, discountPercent: 3 },
                        { minQty: 10, discountPercent: 6 },
                        { minQty: 25, discountPercent: 10 },
                        { minQty: 50, discountPercent: 13 },
                      ]).map((d) => (
                        <div
                          key={d.minQty}
                          className="bg-gray-50 border border-gray-200 rounded-lg p-1.5 shadow-sm"
                        >
                          <div className="text-gray-700">{d.minQty}+</div>
                          <div className="text-green-600">{d.discountPercent}% off</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Shipping Date Countdown Widget */}
              <div className="mt-6">
                <ShippingCountdown />
              </div>

              <div className="space-y-3 mt-4">
                {/* Upload Finished Design Button */}
                {!(cfg.breadcrumb === "Neon Signs" || cfg.breadcrumb === "LED Display Signs") && (
                  <>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg"
                        onChange={handlePdfUpload}
                        onClick={(e) => {
                          if (!user) {
                            e.preventDefault();
                            setPdfError("Please sign in or create an account to upload your design.");
                            setShowAuthModal(true);
                          }
                        }}
                        id="pdf-upload-input"
                        className="hidden"
                        disabled={pdfUploading}
                      />
                      {pdfUrl ? (
                        <div className="bg-green-50 border border-green-200 rounded-xl p-3.5 flex items-center justify-between text-xs text-green-800 font-semibold animate-in fade-in duration-300">
                          <div className="flex items-center gap-2 min-w-0">
                            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                            <span
                              className="truncate block max-w-[220px]"
                              title={pdfName || "Finished Design.pdf"}
                            >
                              {pdfName || "Finished Design.pdf"}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={handleRemovePdf}
                            className="text-red-500 hover:text-red-700 underline font-bold shrink-0 ml-2 cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <label
                          htmlFor="pdf-upload-input"
                          className="w-full cursor-pointer flex items-center justify-center gap-2 border-2 border-dashed border-pink-200 hover:border-[#ca8a04] text-gray-800 bg-pink-50/10 hover:bg-pink-50/30 active:scale-[0.98] font-bold py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider font-poppins text-center"
                        >
                          {pdfUploading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-[#ca8a04]" />
                              Uploading file...
                            </>
                          ) : (
                            <>
                              <UploadCloud className="w-4 h-4 text-[#ca8a04]" />
                              Upload Your Own Finished Design (PDF, PNG, JPG)
                            </>
                          )}
                        </label>
                      )}
                      {pdfError && (
                        <p className="text-[11px] text-red-500 font-semibold mt-1 animate-in fade-in duration-250">
                          ⚠️ {pdfError}
                        </p>
                      )}
                    </div>

                    <Link
                      href={customizeUrl}
                      className="w-full block text-center active:scale-[0.98] text-gray-900 font-extrabold py-4 rounded-xl transition-all text-sm uppercase tracking-wider shadow-md font-poppins hover:opacity-90"
                      style={{
                        background: "#f7f82d",
                        boxShadow: "0 0 20px rgba(255,45,120,0.4)",
                      }}
                    >
                      Customize & Upload Artwork
                    </Link>
                  </>
                )}
                {cfg.breadcrumb === "LED Display Signs" ? (
                  <Link
                    href="#configurator"
                    className="w-full block text-center bg-black hover:bg-gray-900 active:scale-[0.98] text-white font-extrabold py-4 rounded-xl transition-all text-sm uppercase tracking-wider shadow-md font-poppins"
                  >
                    Request Quote
                  </Link>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-black hover:bg-gray-900 active:scale-[0.98] text-white font-extrabold py-4 rounded-xl transition-all text-sm uppercase tracking-wider shadow-md font-poppins"
                  >
                    Add to Cart
                  </button>
                )}
                <p className="text-center text-xs text-gray-400 font-semibold pt-1">
                  Free artwork check included with every order
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA / Configurator */}
      {cfg.breadcrumb === "LED Display Signs" ? (
        <div id="configurator">
          <ContactSection />
        </div>
      ) : (
        <section className="py-20 bg-black text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold font-poppins mb-4">
              {cfg.ctaHeading}
            </h2>
            <p className="text-gray-400 text-lg mb-8">{cfg.ctaBody}</p>
            <Link
              href={customizeUrl}
              className="inline-block text-gray-900 font-bold px-10 py-4 rounded-full hover:opacity-90 transition-all text-lg font-poppins"
              style={{
                background: "#f7f82d",
                boxShadow: "0 0 24px rgba(255,45,120,0.4)",
              }}
            >
              {cfg.ctaLabel}
            </Link>
          </div>
        </section>
      )}

      <Footer />

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-200"
            aria-label="Close image preview"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
            <Image
              src={currentImage}
              alt={cfg.title}
              fill
              sizes="100vw"
              quality={95}
              unoptimized={currentImage.startsWith("/api/")}
              className="object-contain"
            />
          </div>
          
          {/* Subtitle */}
          <p className="text-white/80 font-poppins text-center mt-4 text-sm font-medium">
            {activeImageIndex === 0 ? cfg.title : `${cfg.title} - View ${activeImageIndex + 1}`}
          </p>
        </div>
      )}
    </div>
  );
}
