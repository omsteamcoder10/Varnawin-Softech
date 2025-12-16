"use client"

import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Construct WhatsApp message
    const message = `Hello! I would like to get in touch.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`

    // WhatsApp number (replace with your number)
    const whatsappNumber = "917632974319"

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#404C2F] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-white/80">
              We'd love to hear from you. Let's get in touch!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24 bg-[#F8F8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-10">
                <h2 className="text-3xl font-bold text-[#404C2F]">Contact Information</h2>

                {/* Location */}
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-[#404C2F] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#404C2F] mb-1">Location</h3>
                    <p className="text-[#404C2F]/70">
                      123 Herbal Lane
                      <br />
                      Chennai City, WC 12345
                      <br />
                      Chennai
                    </p>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-[#404C2F] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#404C2F] mb-1">Phone / WhatsApp</h3>
                    <a
                      href="https://wa.me/917632974319"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2E8B57] hover:text-[#246b44] transition-colors font-semibold"
                    >
                      +91 76329 74319
                    </a>
                    <p className="text-sm text-[#404C2F]/60">Mon - Fri, 9am - 6pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-[#404C2F] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#404C2F] mb-1">Email</h3>
                    <p className="text-[#404C2F]/70">info@naturabeauty.com</p>
                    <p className="text-[#404C2F]/70">support@naturabeauty.com</p>
                  </div>
                </div>

                {/* WhatsApp Support */}
                <div className="flex gap-4 pt-4 border-t border-[#404C2F]/20">
                  <MessageCircle className="w-6 h-6 text-[#404C2F] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#404C2F] mb-2">WhatsApp Support</h3>
                    <a
                      href="https://wa.me/917632974319"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2E8B57] hover:text-[#246b44] transition-colors font-semibold"
                    >
                      Chat with us on WhatsApp
                    </a>
                    <p className="text-sm text-[#404C2F]/60 mt-1">Available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-8 border border-[#404C2F]/20 shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-[#404C2F]">Send us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#404C2F] mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-[#404C2F]/30 bg-white text-[#404C2F] placeholder-[#404C2F]/50 focus:outline-none focus:ring-2 focus:ring-[#404C2F]"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#404C2F] mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-[#404C2F]/30 bg-white text-[#404C2F] placeholder-[#404C2F]/50 focus:outline-none focus:ring-2 focus:ring-[#404C2F]"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-[#404C2F] mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-[#404C2F]/30 bg-white text-[#404C2F] placeholder-[#404C2F]/50 focus:outline-none focus:ring-2 focus:ring-[#404C2F]"
                        placeholder="+91 43982 75144"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-[#404C2F] mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 rounded-lg border border-[#404C2F]/30 bg-white text-[#404C2F] placeholder-[#404C2F]/50 focus:outline-none focus:ring-2 focus:ring-[#404C2F]"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#404C2F] text-white py-3 rounded-lg font-semibold hover:bg-[#2E3A24] hover:shadow-lg transition-all"
                    >
                      Send Message 
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 sm:py-24 bg-[#F8F8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#404C2F]">
              Visit Our Location
            </h2>
            <div className="rounded-xl overflow-hidden shadow-lg h-96 border border-[#404C2F]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzU0LjEiTiA3NMK0MDAnMTkuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
