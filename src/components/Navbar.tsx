import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Showroom", href: "#showroom" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled
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

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden bg-transparent border-none text-black dark:text-white cursor-pointer flex items-center p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md focus:outline-none"
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>

        {/* Mobile menu drawer */}
        <div
          className={`fixed inset-0 z-[1001] transition-all duration-300 md:hidden ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer container */}
          <div
            className={`absolute top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white dark:bg-neutral-900 border-l border-neutral-200/80 dark:border-neutral-800/80 shadow-2xl p-6 flex flex-col gap-6 transition-transform duration-300 ease-out transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Header with logo & close button */}
            <div className="flex items-center justify-between">
              <span className="font-heading text-lg font-semibold text-neutral-900 dark:text-white">
                <span className="text-orange-500">Enterprises</span>
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 cursor-pointer focus:outline-none border-none bg-transparent"
                aria-label="Close Menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-[0.95rem] font-medium text-neutral-800 dark:text-neutral-200 py-2.5 px-4 hover:bg-orange-500 hover:text-white transition-colors duration-200 no-underline rounded-xl cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-full px-4 py-2.5 mt-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-semibold text-sm rounded-full no-underline transition-all duration-300"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}