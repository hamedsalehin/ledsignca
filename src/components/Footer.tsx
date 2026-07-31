import Image from "next/image";
import Link from "next/link";
import {

  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const footerLinks = {
  helpCenter: {
    title: "Help Center",
    links: [
      { name: "Contact Us", href: "/contact-us" },
      { name: "Design Online", href: "/design" },
      { name: "Support & Downloads", href: "/support" },
      { name: "Get a Quote", href: "/get-a-quote" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Projects Gallery", href: "/projects" },
      { name: "Our Blog", href: "/blog" },
      { name: "Return Policy", href: "/return-policy" },
    ],
  },
  products: {
    title: "Products",
    links: [
      { name: "Custom Signs", href: "/custom-signs" },
      { name: "Banners", href: "/custom-banners" },
      { name: "Neon Signs", href: "/neon-signs" },
      { name: "Custom Flags", href: "/custom-flags" },
    ],
  },
};

const paymentMethods = [
  {
    name: "Mastercard",
    icon: "https://ext.same-assets.com/1114826555/2789702158.svg",
  },
  {
    name: "Visa",
    icon: "https://ext.same-assets.com/1114826555/794747697.svg",
  },
  {
    name: "Discover",
    icon: "https://ext.same-assets.com/1114826555/3085012672.svg",
  },
  {
    name: "PayPal",
    icon: "https://ext.same-assets.com/1114826555/4065183383.svg",
  },
];

const bottomLinks = [
  { name: "Return Policy", href: "/return-policy" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Support", href: "/support" },
];

const socialIcons = [
  { Icon: Facebook, name: "Facebook", href: "https://facebook.com/signsnano" },
  { Icon: Instagram, name: "Instagram", href: "https://instagram.com/nanosigns" },
  { Icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/company/nano-signs" },
  { Icon: Youtube, name: "YouTube", href: "#" },
  { Icon: Twitter, name: "X", href: "https://x.com/nanosigns1" },
];

export function Footer({ light = false }: { light?: boolean } = {}) {
  return (
    <footer
      className={light ? "text-slate-600 bg-slate-50 border-t border-gray-200" : "text-white"}
      style={
        light
          ? undefined
          : {
              background:
                "#0d0d1a",
            }
      }
    >
      {/* Top gradient accent line */}
      {!light && (
        <div
          className="h-1 w-full"
          style={{
            background:
              "#f7f82d",
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand and Contact */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/nano logo complete-toronto-printing-ca.png"
                alt="Nano Signs"
                width={160}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className={`text-sm mb-6 leading-relaxed ${light ? "text-slate-500" : "text-gray-400"}`}>
              Your trusted custom printing expert in Toronto, ON. Quality
              signs, banners, and more.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href="tel:+14168388994"
                className={`flex items-center gap-2 transition-colors ${light ? "text-slate-600 hover:text-yellow-600" : "text-gray-300 hover:text-yellow-600"}`}
              >
                <Phone
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#f7f82d" }}
                />
                <span>+1 416-838-8994</span>
              </a>
              <a
                href="mailto:info@led-sign.ca"
                className={`flex items-center gap-2 transition-colors ${light ? "text-slate-600 hover:text-yellow-600" : "text-gray-300 hover:text-yellow-600"}`}
              >
                <Mail
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: light ? "#f7f82d" : "#f7f82d" }}
                />
                <span>info@led-sign.ca</span>
              </a>
              <div className={`flex items-start gap-2 ${light ? "text-slate-600" : "text-gray-300"}`}>
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: light ? "#f7f82d" : "#f7f82d" }}
                />
                <span>2190 Warden Ave, Toronto, ON M1T 1V6</span>
              </div>
            </div>

            {/* Social icons � pure CSS hover via .social-icon-hover */}
            <div className="flex gap-3">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className={`social-icon-hover p-2 rounded-full ${light ? "bg-slate-200 border border-slate-350" : ""}`}
                  aria-label={social.name}
                >
                  <social.Icon className={`w-5 h-5 ${light ? "text-slate-600 hover:text-white" : ""}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Help Center */}
          <div>
            <h3 className={`font-poppins font-bold mb-4 ${light ? "text-slate-800" : "pink-cyan-text"}`}>
              {footerLinks.helpCenter.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.helpCenter.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors text-sm ${light ? "text-slate-500 hover:text-yellow-600" : "text-gray-400 hover:text-yellow-600"}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={`font-poppins font-bold mb-4 ${light ? "text-slate-800" : "pink-cyan-text"}`}>
              {footerLinks.company.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors text-sm ${light ? "text-slate-500 hover:text-yellow-600" : "text-gray-400 hover:text-yellow-600"}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className={`font-poppins font-bold mb-4 ${light ? "text-slate-800" : "pink-cyan-text"}`}>
              {footerLinks.products.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors text-sm ${light ? "text-slate-500 hover:text-yellow-600" : "text-gray-400 hover:text-yellow-600"}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className={`text-sm mb-2 ${light ? "text-slate-400" : "text-gray-500"}`}>We accept:</p>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <Image
                    key={method.name}
                    src={method.icon}
                    alt={method.name}
                    width={38}
                    height={24}
                    className="h-6 bg-white rounded px-1 border border-gray-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>        {/* Popular Signage Guides & Blog Links (Internal Linking for SEO & Orphan Page Fix) */}
        <div className={`mt-10 pt-8 border-t ${light ? "border-slate-200" : "border-slate-800/80"}`}>
          <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${light ? "text-slate-700" : "text-slate-300"}`}>
            Popular Signage Guides &amp; Insights
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-xs">
            <Link href="/blog/all-about-led-signs" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">All About LED Signs</Link>
            <Link href="/blog/full-color-custom-led-sign-board" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Full Color LED Signs</Link>
            <Link href="/blog/led-channel-letters" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">LED Channel Letters</Link>
            <Link href="/blog/front-store-signs" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Front Store Signs</Link>
            <Link href="/blog/pylon-signs-and-all-about-pylon-signs-buy" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Pylon Signs Guide</Link>
            <Link href="/blog/light-box-sign-custom-signage-services" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Light Box Signage</Link>
            <Link href="/blog/neon-led-signs-neon-sign-led-sign" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Custom Neon LED Signs</Link>
            <Link href="/blog/retractable-banners" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Retractable Banners</Link>
            <Link href="/blog/car-wrap" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Vehicle Wraps Toronto</Link>
            <Link href="/blog/real-estate-signs-all-about-real-estate-signs" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Real Estate Signs</Link>
            <Link href="/blog/brochure-printing-design-4168388994" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Brochures &amp; Flyers</Link>
            <Link href="/blog/vinyl-printing" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Vinyl Printing Guide</Link>
            <Link href="/blog/neon-sign" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Neon Signs Guide</Link>
            <Link href="/blog/full-color-led-display-screen-citylight-sign" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Full Color Display</Link>
            <Link href="/blog/led-channel-letter" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Channel Letter Info</Link>
            <Link href="/blog/cart-advertising-signs-electronic-led-reader" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Cart LED Reader</Link>
            <Link href="/blog/6901-2" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">T-Shirt Printing</Link>
            <Link href="/blog/mesh" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Mesh Banners</Link>
            <Link href="/blog/full-color-led-scrolling-sign" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Scrolling Signs</Link>
            <Link href="/blog/products-led-sign-board" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">LED Products Guide</Link>
            <Link href="/blog/request-quote" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Quote Guide</Link>
            <Link href="/blog/led-poster-smart-led-poster-1-416-8388994" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">LED Posters</Link>
            <Link href="/blog/make-any-phrase-into-a-neon-sign" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Custom Neon Phrase</Link>
            <Link href="/blog/flyer" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Flyers &amp; Printing</Link>
            <Link href="/blog/light-box-sign-led-backlight-sign-illuminated" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Illuminated Lightbox</Link>
            <Link href="/blog/contact-nano-signs-screen-sign-for-store-citylight-group" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Store Signs Contact</Link>
            <Link href="/blog/checkout-led-digital-display-digital-printing-services" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Digital Display Info</Link>
            <Link href="/blog/full-color-digital-display-screen" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Digital Display</Link>
            <Link href="/blog/front-store-signs-and-all-about-front-store" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Front Store Guide</Link>
            <Link href="/blog/so-many-options-when-it-comes-down-to-brochures" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Brochure Options</Link>
            <Link href="/blog/full-color-electronic-signs" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Electronic Signs</Link>
            <Link href="/blog/custom-t-shirt" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Custom T-Shirt</Link>
            <Link href="/blog/billboards-and-their-impact-on-business" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Billboard Impact</Link>
            <Link href="/blog/led-panels-toronto" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">LED Panels Toronto</Link>
            <Link href="/blog/single-color-programable-led-sign-led-screen" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Single Color Sign</Link>
            <Link href="/blog/indoor-full-color-led-display-indoor4168388994" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Indoor Full Color</Link>
            <Link href="/blog/car-magnet-signs-led-signs-toronto" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Car Magnet Signs</Link>
            <Link href="/blog/quote-rental-industrial-led-displays-nano-signs" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Industrial Displays</Link>
            <Link href="/blog/full-color-led-display-screen" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">LED Display Screen</Link>
            <Link href="/blog/programmable-led-sign-toronto-signs-company-signage" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Programmable Signs</Link>
            <Link href="/blog/programmable-led-sign" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Programmable LED</Link>
            <Link href="/blog/projects" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Project Showcase</Link>
            <Link href="/blog/billboards" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Billboards Guide</Link>
            <Link href="/blog/my-account-led-advertising-signs" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Account &amp; Signs</Link>
            <Link href="/blog/about-us-citylight-group-citylight-sign" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">About Signage</Link>
            <Link href="/blog/install-led-channel" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Install LED Channel</Link>
            <Link href="/blog/why-business-cards" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Why Business Cards</Link>
            <Link href="/blog/full-color-programmable-led-display" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Full Color Display</Link>
            <Link href="/blog/bag-lawn-signs-yard-signs-by-nano-signs" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Bag Lawn Signs</Link>
            <Link href="/blog/metal-sign" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Metal Signage</Link>
            <Link href="/blog/business-card-custom-design-toronto-4168388994" className="text-gray-400 hover:text-[#f7f82d] transition-colors truncate">Business Card Design</Link>
            <Link href="/blog" className="text-[#f7f82d] font-bold hover:underline">View All Articles &rarr;</Link>
          </div>
        </div>



        {/* Google Maps Location Embed */}
        <div className={`mt-12 rounded-2xl overflow-hidden shadow-lg h-[250px] w-full border ${light ? "border-slate-200" : "border-gray-800"}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4!2d-79.2765!3d43.7830!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d05d5e3a4b4b%3A0x1a2b3c4d5e6f7a8b!2s2190%20Warden%20Ave%2C%20Scarborough%2C%20ON%20M1T%201V6!5e0!3m2!1sen!2sca!4v1781380571760!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nano Signs Toronto Location"
          ></iframe>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={light ? "border-t border-slate-200" : ""}
        style={light ? undefined : { borderTop: "1px solid rgba(255,45,120,0.2)" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              {bottomLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors text-sm ${light ? "text-slate-400 hover:text-yellow-600" : "text-gray-500 hover:text-yellow-600"}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className={`text-sm ${light ? "text-slate-400" : "text-gray-600"}`}>
              Copyright &copy; 2020-2026 Nano Signs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
