import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "Showroom", href: "#showroom" },
  { label: "Features", href: "#features" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
          : "bg-white"
      }`}
    >
      {/* Main bar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-[14px]">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 no-underline shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] flex items-center justify-center text-white shrink-0">
            <img src="/logo.png" />
          </div>
          <span className="font-heading text-base sm:text-xl font-semibold text-white tracking-tight">
            <span className="text-orange-500">Enterprises</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex list-none gap-7 lg:gap-9">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-black  transition-colors duration-200 no-underline group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — hidden on sm, shown on md+ */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 lg:px-[22px] py-2 lg:py-[9px] bg-gradient-to-br from-orange-500 to-orange-600 text-white font-semibold text-sm rounded-full  transition-all duration-300 no-underline"
        >
          Get a Quote
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden bg-transparent border-none text-black cursor-pointer flex items-center p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#050d1a]/98 border-t border-white/[0.08] ${
          isOpen ? "max-h-96 py-4 px-4 sm:px-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.9rem] font-medium text-white/85 py-3 border-b border-white/[0.06] hover:text-orange-400 transition-colors duration-200 no-underline"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 text-center px-8 py-3 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-semibold text-sm rounded-full no-underline"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}