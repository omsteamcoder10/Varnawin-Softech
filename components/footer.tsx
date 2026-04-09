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
<<<<<<< HEAD
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
=======
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
>>>>>>> aecfc54aa6da959b5836d326e80ed4f930a169d6
              Learn. Lead. Success. <br />
              Industry-focused IT training with real-time projects and expert guidance.
            </p>
          </div>

<<<<<<< HEAD
          {/* 2. Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-6 text-lg border-b-2 border-orange-500 w-fit pb-1">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 hover:translate-x-1 transition-all inline-block">
=======
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-orange-400 transition">
>>>>>>> aecfc54aa6da959b5836d326e80ed4f930a169d6
                  About Us
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/courses" className="text-gray-300 hover:text-orange-400 hover:translate-x-1 transition-all inline-block">
=======
                <Link href="/courses" className="hover:text-orange-400 transition">
>>>>>>> aecfc54aa6da959b5836d326e80ed4f930a169d6
                  Courses
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/services" className="text-gray-300 hover:text-orange-400 hover:translate-x-1 transition-all inline-block">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 hover:translate-x-1 transition-all inline-block">
=======
                <Link href="/services" className="hover:text-orange-400 transition">
                  Corporate and College Training
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition">
>>>>>>> aecfc54aa6da959b5836d326e80ed4f930a169d6
                  Contact
                </Link>
              </li>
            </ul>
          </div>

<<<<<<< HEAD
          {/* 3. Contact Section */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-6 text-lg border-b-2 border-orange-500 w-fit pb-1">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 text-orange-400" />
                <span className="text-gray-300 leading-snug">
=======
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 shrink-0 text-orange-400" />
                <span>
>>>>>>> aecfc54aa6da959b5836d326e80ed4f930a169d6
                  38/211 Bharathipuram 2nd Street, <br />
                  Bharathipuram, Dindigul – 624003
                </span>
              </li>
<<<<<<< HEAD
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400" /> 
                <a href="tel:+919003254387" className="text-gray-300 hover:text-orange-400">
                  +91 90032 54387
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400" /> 
                <a href="mailto:training@varnawinsoftech.com" className="text-gray-300 hover:text-orange-400 break-all">
=======
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-orange-400" /> 
                <a href="tel:+919003254387" className="hover:text-orange-400">+91 90032 54387</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-orange-400" /> 
                <a href="mailto:training@varnawinsoftech.com" className="hover:text-orange-400">
>>>>>>> aecfc54aa6da959b5836d326e80ed4f930a169d6
                  training@varnawinsoftech.com
                </a>
              </li>
            </ul>
          </div>

<<<<<<< HEAD
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
=======
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
>>>>>>> aecfc54aa6da959b5836d326e80ed4f930a169d6
            </div>
          </div>
        </div>

<<<<<<< HEAD
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
=======
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
>>>>>>> aecfc54aa6da959b5836d326e80ed4f930a169d6
        </div>
      </div>
    </footer>
  );
}