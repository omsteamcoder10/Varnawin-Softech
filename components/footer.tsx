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

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start">
            <div className="mb-4 inline-block rounded-lg bg-white p-2 shadow-lg">
              <img
                src="/logo/2.png"
                alt="Varnawin Softech logo"
                className="h-16 w-auto object-contain md:h-20"
              />
            </div>
            <h3 className="text-xl font-bold leading-tight text-white">
              Varnawin Softech
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-300">
              Learn. Lead. Success. <br />
              Industry-focused IT training with real-time projects and expert
              guidance.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="mb-6 w-fit border-b-2 border-orange-500 pb-1 text-lg font-bold">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="inline-block text-gray-300 transition-all hover:translate-x-1 hover:text-orange-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="inline-block text-gray-300 transition-all hover:translate-x-1 hover:text-orange-400"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="inline-block text-gray-300 transition-all hover:translate-x-1 hover:text-orange-400"
                >
                  Corporate and College Training
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block text-gray-300 transition-all hover:translate-x-1 hover:text-orange-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="mb-6 w-fit border-b-2 border-orange-500 pb-1 text-lg font-bold">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 text-orange-400" />
                <span className="leading-snug text-gray-300">
                  38/211 Bharathipuram 2nd Street, <br />
                  Bharathipuram, Dindigul - 624003
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400" />
                <a
                  href="tel:+919003254387"
                  className="text-gray-300 hover:text-orange-400"
                >
                  +91 90032 54387
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400" />
                <a
                  href="mailto:training@varnawinsoftech.com"
                  className="break-all text-gray-300 hover:text-orange-400"
                >
                  training@varnawinsoftech.com
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="mb-6 w-fit border-b-2 border-orange-500 pb-1 text-lg font-bold">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ Icon, color, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-lg bg-white/10 p-2.5 shadow-md transition-all duration-300 hover:-translate-y-1 ${color}`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()}{" "}
              <span className="font-medium text-white">Varnawin Softech</span>.
              All rights reserved.
            </p>
            <p className="text-xs tracking-wide text-gray-400">
              Developed by :{" "}
              <a
                href="https://orangemegasoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold uppercase text-orange-400 transition-colors hover:text-orange-300"
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
