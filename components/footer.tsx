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

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="flex flex-col items-start group">
            <img
              src="/logo/1.webp"
              alt="Mirror Homes Logo"
              className="h-50 md:h-53 object-contain  mt-7"
            />
            <h3 className="text-xl font-bold mt-4 leading-tight">
              Varnawin Softech
            </h3>
            <p className="text-sm opacity-90 max-w-xs mt-2 leading-snug">
              Learn. Lead. Success. <br />
              Industry-focused IT training with real-time projects and expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-orange-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-orange-400 transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition">
                  Corporate and College Training
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 shrink-0 text-orange-400" />
                <span>
                  38/211 Bharathipuram 2nd Street, <br />
                  Bharathipuram, Dindigul – 624003
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-orange-400" /> 
                <a href="tel:+919003254387" className="hover:text-orange-400">+91 90032 54387</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-orange-400" /> 
                <a href="mailto:training@varnawinsoftech.com" className="hover:text-orange-400">
                  training@varnawinsoftech.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/varnawinsoftech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/10 rounded-full hover:bg-blue-600 transition-all" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/varnawinsoftech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/10 rounded-full hover:bg-pink-600 transition-all" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/varnawinsoftech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/10 rounded-full hover:bg-sky-500 transition-all" 
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@varnawinsoftech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/10 rounded-full hover:bg-red-600 transition-all" 
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/varnawinsoftech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/10 rounded-full hover:bg-blue-700 transition-all" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col items-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Varnawin Softech. All rights reserved.
          </p>
          <p className="text-xs mt-3 opacity-80">
            Developed by :{" "}
            <a
              href="https://orangemegasoftware.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-400 hover:text-orange-300 underline transition"
            >
              OrangeMegaSoftware
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}