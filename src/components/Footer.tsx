import {
  FaFacebook,
  FaInstagram,

} from "react-icons/fa";

const solutionsLinks = [
  { name: "Running Footwear", href: "#showroom" },
  { name: "Basketball Shoes", href: "#showroom" },
  { name: "Hiking & Outdoor", href: "#showroom" },
  { name: "OEM/ODM Production", href: "#inquiry" },
  { name: "Custom Brand Development", href: "#inquiry" },
];

const contactItems = [
  {
    label: "Factory Office",
    value: "Plot 42, Phase III, Industrial Apparel Zone, IN",
  },
  {
    label: "Email",
    value: "info@rsenterprises.com",
  },
  {
    label: "Phone",
    value: "+91 (800) 555-SHOE",
  },
];

const socialLinks = [
  {
    icon: <FaInstagram size={16} />,
    href: "#",
    label: "Instagram",
  },
  {
    icon: <FaFacebook size={16} />,
    href: "#",
    label: "Facebook",
  },


];

interface FooterProps {
  description?: string;
  copyright?: string;
}

export const Footer = ({
  description = "RS Enterprises is a pioneer in high-performance sports shoe manufacturing. We blend biomechanics, cutting-edge material science, and precision craftsmanship to power athletes globally.",
  copyright = `© ${new Date().getFullYear()} RS Enterprises. All rights reserved.`,
}: FooterProps) => {
  return (
    <footer className="relative overflow-hidden bg-[#050d1a] border-t border-white/10 pt-12 sm:pt-16 lg:pt-20 pb-8">
      {/* Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[180px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          {/* Brand Section */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">
              RS <span className="text-orange-500">Enterprises</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
              {description}
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/15 hover:text-orange-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
          </div>

          {/* Links Area */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {/* Categories */}
            <div className="text-center sm:text-left">
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-white">
                Categories
              </h3>

              <ul className="space-y-3">
                {solutionsLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-white/55 transition-colors duration-200 hover:text-orange-400"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-white">
                Contact Info
              </h3>

              <ul className="space-y-5">
                {contactItems.map((item, index) => (
                  <li key={index}>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-white/35">
                      {item.label}
                    </p>

                    <p className="break-words text-sm leading-6 text-white/65">
                      {item.value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-xs sm:text-sm text-white/35">
            {copyright}
          </p>

          <p className="text-xs text-white/25">
            Designed & Manufactured with Precision
          </p>
        </div>
      </div>
    </footer>
  );
};