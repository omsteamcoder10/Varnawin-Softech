"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu when clicking a link
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Only lock scroll on mobile screens to prevent layout shift on desktop
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
   <header
  className={`
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${
      scrolled
        ? "bg-[#5F73A7]/95 backdrop-blur-sm shadow-lg py-2"
        : "bg-transparent py-4"
    }
  `}
>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <img
  src="/logo/1.webp"
  alt="Varnawin Softech Logo"
  className="h-40 w-50 mt-6 object-contain transition-transform group-hover:scale-105"
/>


            {/* <div className="leading-tight"> */}
              {/* <p className="text-white font-black text-lg sm:text-xl tracking-tight">
                Varnawin Softech
              </p> */}
              {/* <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">
                Learn, Lead, Success
              </p> */}
            {/* </div> */}
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Courses", "Services"].map((item) => (
              <Link 
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                className="text-white/90 hover:text-white transition-colors font-bold text-lg"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-md hover:shadow-blue-500/20 font-bold text-lg"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={32} className="text-white" /> : <Menu size={32} className="text-white" />}
          </button>
        </div>

        {/* MOBILE NAVIGATION MENU */}
        <div className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}>
          <div className="bg-blue-950/95 backdrop-blur-md rounded-2xl p-6 space-y-3 border border-white/10 shadow-xl">
            {["Home", "About Us", "Courses", "Services"].map((item) => (
              <Link 
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`} 
                className="block text-white/90 px-4 py-4 hover:bg-white/10 rounded-xl transition-colors font-bold text-xl"
                onClick={closeMenu}
              >
                {item}
              </Link>
            ))}
            <hr className="border-white/10 my-4" />
            <a
              href="mailto:training@varnawinsoftech.com"
              className="block bg-blue-600 text-white px-4 py-4 rounded-xl text-center font-bold text-xl"
            >
              Email Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}