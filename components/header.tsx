"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-[#404C2F] shadow-md" : "bg-transparent"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
         <Link href="/" className="flex items-center gap-3">
  <img
    src="/logo/logos.webp"
    alt="Logo"
    className="h-15 w-auto object-contain"
  />
  <p className="text-white font-bold">Dharsana natural products</p>
</Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-gray-200">Home</Link>
            <Link href="/about" className="text-white hover:text-gray-200">About</Link>
            <Link href="/products" className="text-white hover:text-gray-200">Products</Link>
            <Link href="/blog" className="text-white hover:text-gray-200">Blog</Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* MOBILE NAVIGATION MENU */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 bg-[#404C2F] rounded-lg p-4 mt-2">
            <Link href="/" className="block text-white px-2 py-2 hover:bg-white/20 rounded">Home</Link>
            <Link href="/about" className="block text-white px-2 py-2 hover:bg-white/20 rounded">About</Link>
            <Link href="/products" className="block text-white px-2 py-2 hover:bg-white/20 rounded">Products</Link>
            <Link href="/blog" className="block text-white px-2 py-2 hover:bg-white/20 rounded">Blog</Link>
            <Link
              href="/contact"
              className="block bg-white/20 text-white px-4 py-2 rounded-full text-center hover:bg-white/30"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
