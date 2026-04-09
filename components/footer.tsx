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
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        {/* GRID SECTIONS - Responsive handling from 1 to 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          
          {/* 1. Brand Section */}
          <div className="flex flex-col items-start">
            {/* Logo Container - Adjusted for visibility on dark background */}
            <div className="bg-white p-2 rounded-lg mb-4 inline-block shadow-lg">
              <img
                src="/logo/2.png"
                alt="Varnawin Logo"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <h3 className="text-xl font-bold leading-tight text-white">
              Varnawin Softech
            </h3>
            <p className="text-sm text-gray-300 max-w-xs mt-3 leading-relaxed">
              Learn. Lead. Success. <br />
              Industry-focused IT training with real-time projects and expert guidance.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-6 text-lg border-b-2 border-orange-500 w-fit pb-1">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 hover:translate-x-1 transition-all inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-orange-400 hover:translate-x-1 transition-all inline-block">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-400 hover:translate-x-1 transition-all inline-block">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 hover:translate-x-1 transition-all inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Contact Section */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-6 text-lg border-b-2 border-orange-500 w-fit pb-1">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 text-orange-400" />
                <span className="text-gray-300 leading-snug">
                  38/211 Bharathipuram 2nd Street, <br />
                  Bharathipuram, Dindigul – 624003
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400" /> 
                <a href="tel:+919003254387" className="text-gray-300 hover:text-orange-400">
                  +91 90032 54387
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400" /> 
                <a href="mailto:training@varnawinsoftech.com" className="text-gray-300 hover:text-orange-400 break-all">
                  training@varnawinsoftech.com
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Social Media Section */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-6 text-lg border-b-2 border-orange-500 w-fit pb-1">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                { Icon: Facebook, color: "hover:bg-blue-600", href: "https://facebook.com/varnawinsoftech" },
                { Icon: Instagram, color: "hover:bg-pink-600", href: "https://instagram.com/varnawinsoftech" },
                { Icon: Twitter, color: "hover:bg-sky-500", href: "https://twitter.com/varnawinsoftech" },
                { Icon: Youtube, color: "hover:bg-red-600", href: "https://youtube.com/@varnawinsoftech" },
                { Icon: Linkedin, color: "hover:bg-blue-700", href: "https://linkedin.com/company/varnawinsoftech" },
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-2.5 bg-white/10 rounded-lg ${item.color} transition-all duration-300 hover:-translate-y-1 shadow-md`}
                >
                  <item.Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT SECTION */}
        <div className="border-t border-white/10 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} <span className="text-white font-medium">Varnawin Softech</span>. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 tracking-wide">
              Developed by :{" "}
              <a
                href="https://orangemegasoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-orange-400 hover:text-orange-300 transition-colors uppercase"
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