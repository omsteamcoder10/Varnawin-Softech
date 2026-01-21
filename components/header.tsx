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
      ? "bg-[#0A1F44]/95 backdrop-blur-sm shadow-lg"
      : "bg-transparent"
  }`}
>

  <nav className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-24">

          {/* LOGO */}
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <img
              src="/logo/1.webp"
              alt="Mirror Homes Logo"
              className="h-50 md:h-53 object-contain  mt-7"
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
        {/* AMAZON STYLE MOBILE MENU – RIGHT SIDE */}
<div
  className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
>
  {/* LEFT SIDE BACKDROP */}
  <div
    className="absolute inset-0 bg-black/60"
    onClick={closeMenu}
  />

  {/* RIGHT HALF MENU */}
  <div
    className={`absolute top-0 right-0 h-full w-1/2
    bg-[#2b2b2b] transition-transform duration-300 ease-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
  >
    {/* HEADER */}
    <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
      <span className="text-white font-semibold text-lg">Menu</span>
      <button onClick={closeMenu} className="text-white text-2xl">
        ✕
      </button>
    </div>

    {/* MENU ITEMS */}
    <div className="px-4 py-4 space-y-3">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={closeMenu}
          className="block text-white text-lg font-medium py-3 border-b border-white/10"
        >
          {link.label}
        </Link>
      ))}

      <Link
        href="/contact"
        onClick={closeMenu}
        className="block text-white text-lg font-medium py-3 border-b border-white/10"
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
