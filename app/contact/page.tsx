"use client";

import type React from "react";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  whatsapp: "",
  contact: "",
  course: "",
  trainingType: "",
});


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const whatsappNumber = "919003254387";

  const message = `*New Course Enquiry - Varnawin Softech*

Name: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Contact: ${formData.contact}
Course: ${formData.course}
Training Type: ${formData.trainingType}
`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");

  // Reset form
  setFormData({
    name: "",
    email: "",
    whatsapp: "",
    contact: "",
    course: "",
    trainingType: "",
  });
};

  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}
         <section className="bg-[#5F73A7] py-30 sm:py-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact Varnawin Softech
            </h1>
            <p className="text-lg text-white/80 max-w-3xl">
              Get in touch with our training and consulting experts to learn more
              about our IT courses, corporate training, and skill development
              programs.
            </p>
          </div>
        </section>

        {/* CONTACT DETAILS + FORM */}
        <section className="py-16 sm:py-5 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* CONTACT INFO */}
              <div className="space-y-10">
                <h2 className="text-3xl font-bold text-blue-900">
                  Contact Information
                </h2>

                {/* ADDRESS */}
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">
                      Office Address
                    </h3>
                    <p className="text-blue-900/70">
                      38/211 Bharathipuram 2nd Street <br />
                      Bharathipuram, Dindigul – 624003 <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">
                      Phone / WhatsApp
                    </h3>
                    <p className="text-blue-900/70 font-medium">
                      +91 9003254387
                    </p>
                    
                  <p className="text-sm text-blue-900/60">
   <span className="mx-1"></span> Mon – Sun | 9:00 AM – 9:00 PM
</p>

                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">
                      Email Address
                    </h3>
                    <p className="text-blue-900/70">
                      training@varnawinsoftech.com
                    </p>
                  </div>
                </div>

                {/* WHATSAPP SUPPORT */}
                <div className="flex gap-4 pt-4 border-t border-blue-900/20">
                  <MessageCircle className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">
                      WhatsApp Support
                    </h3>
                    <a
                      href="https://wa.me/919003254387"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-semibold hover:text-green-700 transition"
                    >
                      Chat with our Training Advisor
                    </a>
                    <p className="text-sm text-blue-900/60 mt-1">
                      Quick response & course guidance
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTACT FORM */}
              <div className="lg:col-span-2">
  <div className="bg-white rounded-xl p-8 border border-blue-900/20 shadow-md">
    <h2 className="text-2xl font-bold mb-6 text-blue-900">
      Send Us Your Enquiry
    </h2>

    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-blue-900 mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-blue-900/30 focus:ring-2 focus:ring-blue-900"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-900 mb-2">
            Email ID *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-blue-900/30 focus:ring-2 focus:ring-blue-900"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* WhatsApp & Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-blue-900 mb-2">
            WhatsApp Number *
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-blue-900/30 focus:ring-2 focus:ring-blue-900"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-900 mb-2">
            Contact Number *
          </label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-blue-900/30 focus:ring-2 focus:ring-blue-900"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      {/* Course Name */}
      <div>
        <label className="block text-sm font-medium text-blue-900 mb-2">
          Course Name *
        </label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-blue-900/30 focus:ring-2 focus:ring-blue-900"
          placeholder="Eg: Full Stack Development"
        />
      </div>

      {/* Training Type Dropdown */}
      <div>
        <label className="block text-sm font-medium text-blue-900 mb-2">
          Training Type *
        </label>
        <select
          name="trainingType"
          value={formData.trainingType}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-blue-900/30 focus:ring-2 focus:ring-blue-900"
        >
          <option value="">Select Training Type</option>
          <option value="Individual Online">Individual Online</option>
          <option value="Individual Offline">Individual Offline</option>
          <option value="Corporate Training">Corporate Training</option>
          <option value="College Training">College Training</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 hover:shadow-lg transition-all"
      >
        Send Enquiry via WhatsApp
      </button>

    </form>
  </div>
</div>

              
            </div>
          </div>
        </section>

        {/* GOOGLE MAP */}
        <section className="py-16 sm:py-5 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-900">
              Visit Our Training Institute
            </h2>

            <div className="rounded-xl overflow-hidden shadow-lg h-96 border border-blue-900/20">
              <iframe
                src={`${process.env.NEXT_PUBLIC_MAP_URL}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
