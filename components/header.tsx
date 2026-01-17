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
      const hero = document.getElementById("hero-section");
      const heroHeight = hero ? hero.offsetHeight : 0;
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
  className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
    scrolled
      ? "bg-[#5F73A7]/95 backdrop-blur-sm shadow-lg"
      : "bg-transparent"
  }`}
>
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-24">

          {/* LOGO */}
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <img
              src="/logo/1.webp"
              alt="Mirror Homes Logo"
              className="h-30 md:h-43 object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors font-bold text-lg"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-md font-bold text-lg"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={32} className="text-white" />
            ) : (
              <Menu size={32} className="text-white" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-blue-950/95 backdrop-blur-md rounded-2xl p-6 space-y-3 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block text-white px-4 py-4 hover:bg-white/10 rounded-xl font-bold text-xl"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="block bg-blue-600 text-white px-4 py-4 rounded-xl text-center font-bold text-xl"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
