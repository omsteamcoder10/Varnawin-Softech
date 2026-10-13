"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const socialLinks = [
  {
    Icon: Facebook,
    color: "hover:bg-blue-600",
    href: "https://www.facebook.com/varnawinsoftech",
    label: "Facebook",
  },
  {
    Icon: Instagram,
    color: "hover:bg-pink-600",
    href: "https://www.instagram.com/varnawinsoftech",
    label: "Instagram",
  },
  {
    Icon: Twitter,
    color: "hover:bg-sky-500",
    href: "https://twitter.com/varnawinsoftech",
    label: "Twitter",
  },
  {
    Icon: Youtube,
    color: "hover:bg-red-600",
    href: "https://www.youtube.com/@varnawinsoftech",
    label: "YouTube",
  },
  {
    Icon: Linkedin,
    color: "hover:bg-blue-700",
    href: "https://www.linkedin.com/company/varnawinsoftech",
    label: "LinkedIn",
  },
];

/* -------- Company name block (same font for both words) -------- */
function CompanyName() {
  return (
    <div className="flex min-w-0 flex-col justify-center leading-none">
      {/* VARNAWIN SOFTECH — same font size & weight */}
      <div className="flex items-baseline whitespace-nowrap">
        <span className="text-[16px] font-bold tracking-[-0.7px] text-[#0A1F44] min-[380px]:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
          VARNAWIN
        </span>
        <span className="ml-1.5 text-[16px] font-bold tracking-[-0.7px] text-[#0A1F44] min-[380px]:text-[18px] sm:ml-2 sm:text-[22px] md:text-[24px] lg:text-[26px]">
          SOFTECH
        </span>
      </div>

      {/* Tagline */}
      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="whitespace-nowrap text-[6px] font-semibold tracking-[0.4px] text-orange-600 sm:text-[8px] md:text-[9px]">
          LEARN · LEAD · SUCCEED
        </span>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#DCE7F5] py-12 text-[#0A1F44]">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* ============ BRAND COLUMN ============ */}
          <div className="flex flex-col items-start">
            {/* Logo + Company Name — moved slightly to the left */}
            <Link
              href="/"
              aria-label="Varnawin Softech Private Limited home"
              className="mb-4 flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
              style={{ marginLeft: "-8px" }}
            >
              <img
                src="/logo/1.png"
                alt="Varnawin Softech logo"
                className="h-12 w-auto max-w-[60px] shrink-0 object-contain sm:h-14 sm:max-w-[70px] md:h-16 md:max-w-[80px]"
              />
              <CompanyName />
            </Link>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#0A1F44]/80">
              Learn. Lead. Success. <br />
              Industry-focused IT training with real-time projects and expert
              guidance.
            </p>
          </div>

          {/* ============ QUICK LINKS ============ */}
          <div className="flex flex-col">
            <h4 className="mb-6 w-fit border-b-2 border-orange-500 pb-1 text-lg font-bold text-[#0A1F44]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="inline-block text-[#0A1F44]/80 transition-all hover:translate-x-1 hover:text-orange-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="inline-block text-[#0A1F44]/80 transition-all hover:translate-x-1 hover:text-orange-600"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="inline-block text-[#0A1F44]/80 transition-all hover:translate-x-1 hover:text-orange-600"
                >
                  Corporate and College Training
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block text-[#0A1F44]/80 transition-all hover:translate-x-1 hover:text-orange-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ============ CONTACT ============ */}
          <div className="flex flex-col">
            <h4 className="mb-6 w-fit border-b-2 border-orange-500 pb-1 text-lg font-bold text-[#0A1F44]">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 text-orange-600" />
                <span className="leading-snug text-[#0A1F44]/80">
                  38/211 Bharathipuram 2nd Street, <br />
                  Bharathipuram, Dindigul - 624003
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-orange-600" />
                <a
                  href="tel:+919003254387"
                  className="text-[#0A1F44]/80 hover:text-orange-600"
                >
                  +91 90032 54387
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-orange-600" />
                <a
                  href="mailto:training@varnawinsoftech.com"
                  className="break-all text-[#0A1F44]/80 hover:text-orange-600"
                >
                  training@varnawinsoftech.com
                </a>
              </li>
            </ul>
          </div>

          {/* ============ SOCIAL ============ */}
          <div className="flex flex-col">
            <h4 className="mb-6 w-fit border-b-2 border-orange-500 pb-1 text-lg font-bold text-[#0A1F44]">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ Icon, color, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-lg bg-[#0A1F44]/10 p-2.5 text-[#0A1F44] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-white ${color}`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ============ BOTTOM BAR ============ */}
        <div className="mt-4 border-t border-[#0A1F44]/15 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-[#0A1F44]/70">
              © {new Date().getFullYear()}{" "}
              <span className="font-medium text-[#0A1F44]">
                Varnawin Softech
              </span>
              . All rights reserved.
            </p>
            <p className="text-xs tracking-wide text-[#0A1F44]/70">
              Developed by :{" "}
              <a
                href="https://orangemegasoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold uppercase text-orange-600 transition-colors hover:text-orange-500"
              >
                OrangeMegaSoftware
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}