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
      const heroHeight = hero ? hero.offsetHeight : 50;
      setScrolled(window.scrollY > heroHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      isOpen && window.innerWidth < 768 ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1F44]/95 py-2 shadow-lg backdrop-blur-sm"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <img
              src="/logo/2.png"
              alt="Varnawin Softech logo"
              className="h-12 w-auto object-contain transition-transform duration-200 hover:scale-105 md:h-14"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-500"
            >
              Contact
            </Link>
          </div>

          <button
            className="rounded-md p-2 transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>

        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <button
            className="absolute inset-0 bg-black/60"
            onClick={closeMenu}
            aria-label="Close menu"
          />

          <div
            className={`absolute right-0 top-0 h-full w-2/3 max-w-[300px] bg-[#1a1a1a] shadow-2xl transition-transform duration-300 ease-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
              <span className="text-xl font-bold text-white">Menu</span>
              <button onClick={closeMenu} className="p-1 text-white">
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-2 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-white/5 py-4 text-lg font-medium text-white transition-colors active:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-4 w-full rounded-xl bg-blue-600 py-4 text-center font-bold text-white"
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
