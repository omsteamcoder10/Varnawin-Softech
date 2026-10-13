"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";

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
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      isOpen && window.innerWidth < 768 ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const CompanyName = ({ mobile = false }) => (
    <div
      className={`flex min-w-0 flex-col justify-center leading-none ${
        mobile ? "gap-0" : ""
      }`}
    >
      {/* VARNAWIN SOFTECH — same font size & weight */}
      <div className="flex items-baseline whitespace-nowrap">
        <span className="text-[16px] font-bold tracking-[-0.7px] text-[#0A1F44] min-[380px]:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
          VARNAWIN
        </span>

        <span className="ml-1.5 text-[16px] font-bold tracking-[-0.7px] text-[#0A1F44] min-[380px]:text-[18px] sm:ml-2 sm:text-[22px] md:text-[24px] lg:text-[26px]">
          SOFTECH
        </span>
      </div>

      {/* TAGLINE */}
      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="whitespace-nowrap text-[6px] font-semibold tracking-[0.4px] text-orange-600 sm:text-[8px] md:text-[9px]">
          LEARN · LEAD · SUCCEED
        </span>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      {/* TOP CONTACT BAR */}
      <div className="w-full bg-[#0A1F44] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-3 py-2 text-[10px] leading-tight sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:text-xs md:text-sm lg:px-8">
          <div className="flex items-center gap-1.5 text-center sm:gap-2 sm:text-left">
            <MapPin
              size={13}
              className="shrink-0 text-orange-400 sm:h-3.5 sm:w-3.5"
            />
            <span className="text-white/90">
              <span className="hidden md:inline">
                38/211 Bharathipuram 2nd Street, Bharathipuram,
                Dindigul - 624003
              </span>
              <span className="md:hidden">
                Bharathipuram, Dindigul - 624003
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+919003254387"
              className="flex items-center gap-1.5 text-white/90 transition-colors hover:text-white"
            >
              <Phone size={13} className="shrink-0 text-orange-400" />
              <span>+91 90032 54387</span>
            </a>

            <a
              href="mailto:training@varnawinsoftech.com"
              className="flex items-center gap-1.5 text-white/90 transition-colors hover:text-white"
            >
              <Mail size={13} className="shrink-0 text-orange-400" />
              <span className="hidden sm:inline">
                training@varnawinsoftech.com
              </span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR — mild blue background */}
      <div
        className={`w-full bg-[#DCE7F5] transition-all duration-300 ${
          scrolled ? "py-1" : "py-2"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="flex min-h-12 items-center justify-between gap-2 sm:min-h-14 sm:gap-3 md:min-h-16">
            {/* LOGO + COMPANY NAME */}
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Varnawin Softech Private Limited home"
              className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
            >
              <img
                src="/logo/1.png"
                alt="Varnawin Softech logo"
                className="h-9 w-auto max-w-[48px] shrink-0 object-contain sm:h-11 sm:max-w-[60px] md:h-12 md:max-w-[68px]"
              />

              <CompanyName />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden shrink-0 items-center gap-5 md:flex lg:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[#0A1F44] transition-colors hover:text-[#0750B8] lg:text-base"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="rounded-full bg-[#0750B8] px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:bg-[#06439A] sm:px-5 sm:text-sm"
              >
                Contact
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className="shrink-0 rounded-lg p-2 text-[#0A1F44] transition-colors hover:bg-white/60 md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* MOBILE DRAWER */}
          <div
            id="mobile-navigation"
            className={`fixed inset-0 z-50 md:hidden ${
              isOpen ? "visible" : "invisible pointer-events-none"
            }`}
            aria-hidden={!isOpen}
          >
            <button
              type="button"
              tabIndex={isOpen ? 0 : -1}
              className={`absolute inset-0 h-full w-full bg-black/60 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={closeMenu}
              aria-label="Close navigation menu"
            />

            <div
              className={`absolute right-0 top-0 flex h-full w-[85%] max-w-[320px] flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* DRAWER HEADER */}
              <div className="flex min-h-[76px] items-center justify-between gap-2 border-b border-gray-200 px-4 sm:px-5">
                <Link
                  href="/"
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  className="flex min-w-0 items-center gap-2"
                >
                  <img
                    src="/logo/1.png"
                    alt="Varnawin Softech logo"
                    className="h-9 w-auto max-w-[45px] shrink-0 object-contain"
                  />

                  <CompanyName mobile />
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  className="shrink-0 rounded-lg p-2 text-gray-800 transition-colors hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* DRAWER LINKS */}
              <div className="flex flex-1 flex-col px-5 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    tabIndex={isOpen ? 0 : -1}
                    className="border-b border-gray-100 py-4 text-base font-medium text-gray-800 transition-colors hover:text-[#0750B8] active:bg-gray-50"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  className="mt-5 w-full rounded-xl bg-[#0750B8] py-3.5 text-center text-sm font-bold text-white shadow-md transition-colors hover:bg-[#06439A]"
                >
                  Contact Us
                </Link>

                {/* QUICK CONTACT DETAILS */}
                <div className="mt-6 space-y-4 border-t border-gray-100 pt-5 text-xs text-gray-600 sm:text-sm">
                  <a
                    href="tel:+919003254387"
                    tabIndex={isOpen ? 0 : -1}
                    className="flex items-center gap-2 transition-colors hover:text-[#0750B8]"
                  >
                    <Phone size={15} className="shrink-0 text-orange-500" />
                    <span>+91 90032 54387</span>
                  </a>

                  <a
                    href="mailto:training@varnawinsoftech.com"
                    tabIndex={isOpen ? 0 : -1}
                    className="flex items-start gap-2 transition-colors hover:text-[#0750B8]"
                  >
                    <Mail
                      size={15}
                      className="mt-0.5 shrink-0 text-orange-500"
                    />
                    <span className="break-all">
                      training@varnawinsoftech.com
                    </span>
                  </a>

                  <div className="flex items-start gap-2">
                    <MapPin
                      size={15}
                      className="mt-0.5 shrink-0 text-orange-500"
                    />
                    <span>
                      38/211 Bharathipuram 2nd Street, Bharathipuram,
                      Dindigul - 624003
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}