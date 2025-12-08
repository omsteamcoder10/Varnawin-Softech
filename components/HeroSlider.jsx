"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  const image =
    "https://img.freepik.com/premium-photo/high-resolution-image-glossy-ecofriendly-product-packaging-with-green-labels-sustainable-con_980716-194929.jpg";

  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] md:h-screen w-full overflow-hidden flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="hero"
          fill
          priority
          className="object-cover w-full h-full"
        />
      </div>

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50"></div>

      {/* TEXT + BUTTONS */}
      <div className="relative z-20 text-center px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-xl mb-4 sm:mb-6">
          Pure Herbal Products for Your Wellness
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-full sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-10">
          Experience nature’s finest blends crafted with love and purity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Link
            href="/products"
            className="bg-green-600 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-full font-semibold 
              hover:bg-green-700 hover:shadow-2xl transition-all flex items-center gap-2"
          >
            Shop Now <ArrowRight size={22} />
          </Link>

          <Link
            href="/about"
            className="bg-white/20 backdrop-blur-md text-white px-6 py-3 sm:px-10 sm:py-4 rounded-full font-semibold 
              hover:bg-white/30 transition-all flex items-center gap-2"
          >
            Learn More <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
}
