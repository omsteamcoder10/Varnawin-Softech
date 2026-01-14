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
<footer className="bg-[#5F73A7] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
         <div className="flex flex-col items-start md:items-center text-left md:text-center group">
  <img
    src="/logo/1.webp"
    alt="Varnawin Softech Logo"
    className="
      h-28 w-40
      sm:h-32 sm:w-44
      md:h-16 md:w-48
      object-contain
      transition-transform
      group-hover:scale-105
    "
  />

  <h3 className="text-xl font-bold mt-2 leading-tight">
    Varnawin Softech
  </h3>

  <p className="text-sm opacity-90 max-w-xs mt-1 leading-snug">
    Learn. Lead. Success. <br />
    Industry-focused IT training with real-time projects and expert guidance.
  </p>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:opacity-80 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:opacity-80 transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-80 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>
                  38/211 Bharathipuram 2nd Street, <br />
                  Bharathipuram, Dindigul – 624003
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> training@varnawinsoftech.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-center text-sm opacity-80">
            &copy; {new Date().getFullYear()} Varnawin Softech. All rights reserved.{" "}
            <Link href="/privacy-policy" className="hover:opacity-100 underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:opacity-100 underline">
              Terms of Service
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}
