import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#404C2F] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div>
             <img
    src="/logo/logoes.webp"
    alt="Logo"
    className="h-15 w-auto object-contain"
  />
            <h3 className="text-xl font-bold mb-4">Darshana Natural Care</h3>
            <p className="text-sm opacity-90">
              Pure. Herbal. Ayurvedic. Experience nature’s true healing and beauty.
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
                <Link href="/products" className="hover:opacity-80 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:opacity-80 transition">
                  Blog
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
              <li className="flex items-center gap-2">
                <Phone size={16} /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> info@darshananaturalcare.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm opacity-80">
            &copy; 2025 Darshana Natural Care. All rights reserved. |{" "}
            <Link href="#" className="hover:opacity-100">Privacy Policy</Link> |{" "}
            <Link href="#" className="hover:opacity-100">Terms of Service</Link>
          </p>
        </div>

      </div>
    </footer>
  )
}
