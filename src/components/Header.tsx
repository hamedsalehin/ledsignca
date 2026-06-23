"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  User,
  Phone,
  MessageCircle,
  HelpCircle,
  Package,
  Menu,
  X,
  ChevronDown,
  Info,
} from "lucide-react";
import { useAuth } from "./AuthContext";
import { useCart } from "./CartContext";

const navItems = [
  { name: "Signs", href: "/custom-signs" },
  { name: "Banners", href: "/custom-banners" },
  { name: "Flags", href: "/custom-flags" },
  { name: "Vehicle Signs", href: "/vehicle-signs" },
  { name: "Tradeshow", href: "/trade-show" },
  { name: "Stickers & Decals", href: "/custom-decals" },
  { name: "Marketing Materials", href: "/marketing-materials" },
  { name: "Promotional Products", href: "/promotional-products" },
  { name: "Neon Signs", href: "https://neonFL.com", isExternal: true },
  {
    name: "Programmable LED Signs",
    href: "https://led-signs.us",
    isExternal: true,
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, signOut, setShowAuthModal } = useAuth();
  const { items, setCartOpen } = useCart();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top utility bar — simple white */}
      <div className="bg-white border-b border-gray-150 text-gray-500 text-xs py-1.5 font-medium">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-4 md:gap-6">
          <Link
            href="/about-us"
            className="flex items-center gap-1.5 hover:text-[#ff2d78] transition-colors duration-200"
            aria-label="About Us"
          >
            <Info className="w-4 h-4" />
            <span className="hidden sm:inline">About Us</span>
          </Link>
          <a
            href="mailto:nanosign1@gmail.com"
            className="flex items-center gap-1.5 hover:text-[#ff2d78] transition-colors duration-200"
            aria-label="Email support at nanosign1@gmail.com"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">nanosign1@gmail.com</span>
          </a>
          <Link
            href="/contact-us"
            className="flex items-center gap-1.5 hover:text-[#ff2d78] transition-colors duration-200"
            aria-label="Contact Us"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Contact Us</span>
          </Link>
          <a
            href="tel:305-967-1005"
            className="flex items-center gap-1.5 hover:text-[#ff2d78] transition-colors duration-200"
            aria-label="Call support at 305-967-1005"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">305-967-1005</span>
          </a>
        </div>
      </div>

      {/* Main header — white with pink/cyan search accents */}
      <div className="bg-white border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 pt-1.5 pb-1.5 md:pt-2.5 md:pb-2">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/nano logo complete.png"
                alt="Nano Signs Logo"
                width={180}
                height={70}
                className="h-10 md:h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-xl">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#ff2d78] transition-colors duration-200"
                />
                <button
                  type="button"
                  aria-label="Search"
                  className="absolute right-0 top-0 h-full px-5 rounded-r-full text-white font-semibold text-sm brand-gradient hover:opacity-90 transition-opacity"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              {/* User Sign In / Account Dropdown */}
              <div className="relative">
                {user ? (
                  <>
                    <button
                      onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                      className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-[#ff2d78] transition-colors duration-200"
                    >
                      <User className="w-5 h-5" />
                      <span className="text-sm font-medium truncate max-w-[100px]">
                        {user.user_metadata?.full_name ||
                          user.email?.split("@")[0] ||
                          "Account"}
                      </span>
                      <ChevronDown
                        className="w-4 h-4 transition-transform duration-200"
                        style={{
                          transform: userDropdownOpen
                            ? "rotate(180deg)"
                            : "none",
                        }}
                      />
                    </button>

                    {userDropdownOpen && (
                      <div className="absolute right-0 mt-2.5 w-56 rounded-2xl bg-white border border-pink-100 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 font-opensans">
                        <div className="px-4 py-2 border-b border-gray-100 text-xs text-gray-500 font-semibold">
                          Signed in as:
                          <div className="text-gray-900 font-bold truncate mt-0.5">
                            {user.email}
                          </div>
                        </div>
                        <Link
                          href="/account/orders"
                          onClick={() => setUserDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-slate-50 hover:text-[#ff2d78] font-semibold transition-colors"
                        >
                          My Orders
                        </Link>
                        <button
                          onClick={() => {
                            setUserDropdownOpen(false);
                            signOut();
                          }}
                          className="w-full text-left block px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 font-bold transition-colors"
                        >
                          Sign Out
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-[#ff2d78] transition-colors duration-200"
                  >
                    <User className="w-5 h-5" />
                    <span className="text-sm font-medium">Sign In</span>
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                )}
              </div>

              <button
                onClick={() => setCartOpen(true)}
                className="relative flex items-center gap-2 text-gray-700 hover:text-[#ff2d78] transition-colors duration-200"
                aria-label="Shopping Cart"
              >
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {items.length > 0 && (
                    <span
                      className="absolute -top-2 -right-2 text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-extrabold animate-in zoom-in duration-300"
                      style={{
                        background: "linear-gradient(135deg, #ff2d78, #00e5ff)",
                      }}
                    >
                      {items.length}
                    </span>
                  )}
                </div>
                <span className="text-sm font-medium hidden sm:inline">
                  Cart
                </span>
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden p-2 text-gray-700 hover:text-[#ff2d78] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden mt-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-3.5 py-1.5 border border-gray-200 rounded-full text-xs focus:outline-none focus:border-[#ff2d78] transition-colors"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ff2d78]"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation — static cyan to pink gradient */}
        <nav className="hidden md:block w-full brand-gradient">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex justify-center items-center">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative text-center flex-shrink-0"
                >
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full relative px-1.5 lg:px-2.5 xl:px-3.5 py-2 font-bold text-white hover:text-[#00e5ff] transition-colors duration-200 font-poppins text-[12px] lg:text-[14px] xl:text-[15.5px] whitespace-nowrap after:content-[''] after:absolute after:h-[3px] after:bg-[#00e5ff] after:bottom-0 after:left-0 after:w-full after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-200"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block w-full h-full relative px-1.5 lg:px-2.5 xl:px-3.5 py-2 font-bold text-white hover:text-[#00e5ff] transition-colors duration-200 font-poppins text-[12px] lg:text-[14px] xl:text-[15.5px] whitespace-nowrap after:content-[''] after:absolute after:h-[3px] after:bg-[#00e5ff] after:bottom-0 after:left-0 after:w-full after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t brand-gradient">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-sm font-medium text-white hover:text-[#00e5ff] hover:bg-white/10 transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-sm font-medium text-white hover:text-[#00e5ff] hover:bg-white/10 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}

              {/* Mobile Auth Items */}
              <li className="border-t border-white/20 mt-2 pt-2">
                {user ? (
                  <>
                    <div className="px-4 py-2 text-xs text-white/60 font-semibold truncate">
                      Signed in: {user.email}
                    </div>
                    <Link
                      href="/account/orders"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm font-bold text-white hover:text-[#00e5ff] hover:bg-white/10 transition-colors"
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        signOut();
                      }}
                      className="w-full text-left block px-4 py-3 text-sm font-bold text-red-200 hover:bg-white/10 transition-colors"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-bold text-white hover:text-[#00e5ff] hover:bg-white/10 transition-colors"
                  >
                    Sign In
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Promo banner — white with pink text */}
      <div className="py-1.5 text-center bg-white border-b border-pink-100">
        <p className="text-xs md:text-sm font-bold text-[#ff2d78] tracking-wide px-4 flex flex-wrap justify-center items-center gap-x-2 gap-y-0.5">
          <span className="hidden md:inline">✨ Custom Printing &amp; Signage — Fast Turnaround!</span>
          <a
            href="tel:305-967-1005"
            className="hidden md:inline underline hover:no-underline hover:text-[#b020ff] transition-colors"
          >
            Call 305-967-1005
          </a>
          <span className="hidden md:inline text-gray-300 font-normal">|</span>
          {/* Desktop Version */}
          <span className="hidden md:inline text-gray-500 font-semibold">
            Can't find the product you're looking for? No worries!{" "}
            <span className="text-black font-bold">WE PRINT EVERYTHING, </span>
            <Link
              href="/get-a-quote"
              className="underline font-bold text-[#ff2d78] hover:text-[#b020ff] transition-colors"
            >
              ask for a quote
            </Link>{" "}
            and get your prices within 12 hours.
          </span>

          {/* Mobile Version */}
          <span className="inline md:hidden text-gray-500 font-semibold">
            <span className="text-black font-bold">WE PRINT EVERYTHING, </span>
            <Link
              href="/get-a-quote"
              className="underline font-bold text-[#ff2d78] hover:text-[#b020ff] transition-colors"
            >
              get your custom quote in 12 hrs
            </Link>
          </span>
        </p>
      </div>
    </header>
  );
}
