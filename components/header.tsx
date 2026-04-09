"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Services", href: "/services" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic: Change background after scrolling 50px OR past hero height
      const hero = document.getElementById("hero-section");
      const heroHeight = hero ? hero.offsetHeight : 50;
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      isOpen && window.innerWidth < 768 ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1F44]/95 backdrop-blur-sm shadow-lg py-2" // Slightly smaller padding on scroll
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* LOGO CONTAINER - Adjusted for Professional Sizing */}
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <img
              src="/logo/2.png"
              alt="Varnawin Logo"
              // Optimized Sizing: h-12 (48px) on mobile, h-14 (56px) on desktop
              className="h-12 md:h-14 w-auto object-contain transition-transform hover:scale-105 duration-200"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors font-semibold text-base"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-md font-bold text-sm"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>

        {/* MOBILE MENU (AMAZON STYLE) */}
        <div
          className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* BACKDROP */}
          <div className="absolute inset-0 bg-black/60" onClick={closeMenu} />

          {/* RIGHT SIDE DRAWER */}
          <div
            className={`absolute top-0 right-0 h-full w-2/3 max-w-[300px]
            bg-[#1a1a1a] transition-transform duration-300 ease-out shadow-2xl
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
              <span className="text-white font-bold text-xl">Menu</span>
              <button onClick={closeMenu} className="text-white p-1">
                <X size={28} />
              </button>
            </div>

            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-white text-lg font-medium py-4 border-b border-white/5 active:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-4 w-full text-center py-4 bg-blue-600 text-white rounded-xl font-bold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}