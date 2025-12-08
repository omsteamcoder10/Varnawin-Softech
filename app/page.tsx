"use client";

import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, Leaf, Droplet, Sparkles } from "lucide-react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import FloatingButtons from "@/components/common/FloatingButtons";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function Home() {
  const featuredProducts = [
    {
      id: "1",
      name: "Brahmi Hair Oil",
      description: "Nourishing herbal blend to strengthen and promote healthy hair growth",
      price: 249,
      image: "/herbal-hair-oil-bottle.jpg",
    },
    {
      id: "2",
      name: "Turmeric Face Pack",
      description: "Ancient Ayurvedic formula for glowing, radiant skin",
      price: 189,
      image: "/turmeric-face-pack.jpg",
    },
    {
      id: "3",
      name: "Neem Herbal Powder",
      description: "Pure organic neem powder for deep cleansing and purification",
      price: 149,
      image: "/neem-powder-natural.jpg",
    },
    {
      id: "4",
      name: "Rose Beauty Cream",
      description: "Luxurious moisturizing cream with organic rose extract",
      price: 329,
      image: "/rose-beauty-cream.jpg",
    },
  ];

  const testimonials = [
    { name: "Sarah M.", text: "My hair has never felt better! The Brahmi Oil is absolutely magical.", role: "Verified Customer" },
    { name: "Priya K.", text: "Finally found products that work without harsh chemicals. Love Natura!", role: "Beauty Enthusiast" },
    { name: "Maria D.", text: "The turmeric face pack cleared my skin in just two weeks. Highly recommend!", role: "Skincare Blogger" },
  ];

  // **Make body overflow hidden while HeroSlider is active**
  useEffect(() => {
    document.body.style.overflowX = "hidden"; // hide horizontal overflow
    return () => {
      document.body.style.overflowX = "auto"; // restore on unmount
    };
  }, []);

  return (
    <>
      <Header />

      <main className="overflow-x-hidden">

        {/* HERO SECTION */}
        <HeroSlider />

        {/* VALUES SECTION */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#404C2F]">
              Why Choose Darshana Natural Care?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { icon: Leaf, label: "Organic", desc: "Certified organic ingredients" },
                { icon: Droplet, label: "Vegan", desc: "No animal-derived products" },
                { icon: Sparkles, label: "Chemical Free", desc: "Pure natural formulations" },
                { icon: Leaf, label: "Skin Safe", desc: "Dermatologist approved" },
              ].map((value, i) => {
                const Icon = value.icon;
                return (
                  <div key={i} className="text-center p-6 rounded-xl bg-[#404C2F] border border-[#404C2F] hover:shadow-xl transition-all">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-white" />
                    <h3 className="font-semibold text-lg mb-2 text-white">{value.label}</h3>
                    <p className="text-sm text-white/80">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#404C2F]">Featured Products</h2>
            <p className="mb-12 text-lg text-[#404C2F]/70">Explore our most loved and bestselling Ayurvedic beauty essentials</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/products" className="px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 bg-[#404C2F] text-white hover:bg-[#2E3A24] hover:shadow-lg transition-all">
                View All Products <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#404C2F]">What Our Customers Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-white rounded-xl p-6 sm:p-8 border border-[#404C2F]/20 shadow-md hover:shadow-lg transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#404C2F] text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-[#404C2F]/70 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-[#404C2F]">{testimonial.name}</p>
                    <p className="text-sm text-[#404C2F]/70">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#404C2F]">
              Ready to Transform Your Skincare Routine?
            </h2>
            <p className="text-lg text-[#404C2F]/80 mb-8">
              Join thousands of satisfied customers enjoying natural beauty from within.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="bg-[#404C2F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2E3A24] hover:shadow-lg transition-all">
                Shop Now
              </Link>

              <Link href="/contact" className="border-2 border-[#404C2F] text-[#404C2F] px-8 py-3 rounded-full font-semibold hover:bg-[#404C2F] hover:text-white transition-all">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            <div className="flex justify-center">
              <img
                src="https://img.freepik.com/premium-photo/visually-appealing-herbal-advertisements_1008415-67677.jpg"
                alt="Darshana Natural Hair Products"
                className="w-full max-w-md rounded-xl shadow"
              />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#404C2F]">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is Darshana Natural Hair Oil?", a: "It is a natural herbal blend that nourishes the scalp, strengthens roots, and promotes healthy hair growth." },
                  { q: "How long does it take to see results?", a: "Visible improvement typically appears within 3–4 weeks with consistent use." },
                  { q: "Does it help with dandruff?", a: "Ingredients like neem and fenugreek help reduce dandruff and soothe the scalp." },
                  { q: "Is the oil suitable for all hair types?", a: "It is safe for all hair types including dry, oily, curly, and treated hair." },
                  { q: "Do you deliver across India?", a: "Yes, we offer fast and reliable delivery across India." },
                ].map((faq, i) => (
                  <details key={i} className="group border border-[#DDE3D5] p-4 rounded-lg">
                    <summary className="flex justify-between items-center cursor-pointer font-semibold text-[#404C2F]">
                      {faq.q} <span className="text-2xl text-[#404C2F] group-open:rotate-45 transition">+</span>
                    </summary>
                    <p className="mt-3 text-[#404C2F]/80">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>

      <ScrollToTop />
      <FloatingButtons />
      <Footer />
    </>
  );
}
