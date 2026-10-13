"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  const image =
    "https://img.freepik.com/free-photo/software-developer-working-with-computer-code_23-2148819604.jpg";

  return (
    <section
      id="hero-section"
      // Change: Added lg:items-center so it stays centered only on large screens
      className="relative min-h-[95vh] md:min-h-screen w-full overflow-hidden flex items-start lg:items-center"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Varnawin Softech Training & Consulting"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* NAVY BLUE OVERLAY */}
      <div className="absolute inset-0 bg-[#0A1F44]/90" />

      {/* CONTENT ADJUSTMENT */}
      <div 
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center 
                   pt-32      /* Mobile */
                   sm:pt-52   /* Small Tab (Landscape Phone) */
                   md:pt-64   /* Tablet (iPad/Standard Tab) */
                   lg:pt-0"   /* Desktop (Return to vertical center) */
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300">
            Empowering Skills.
          </span>
          <br className="hidden sm:block" />
          <span className="text-white"> Enabling Digital Growth.</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
          At{" "}
          <span className="font-extrabold text-[#8FA8D8] underline decoration-2 underline-offset-4">
            Varnawin Softech
          </span>
          , we help learners and organizations stay competitive through
          practical, hands-on training and consulting services.
        </p>

        {/* FEATURE LIST */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-3 text-white/90 text-sm sm:text-lg md:text-xl font-bold mb-10 uppercase tracking-wider">
          <span className="flex items-center gap-2">
            <span className="text-[#8FA8D8]">✔</span> IT & Non-IT Training
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#8FA8D8]">✔</span> Corporate & College Training
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#8FA8D8]">✔</span> Internship & Placement
          </span>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link
            href="/courses"
            className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-full font-black text-lg md:text-xl
            hover:bg-blue-500 transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-105 active:scale-95"
          >
            Explore Courses <ArrowRight size={24} strokeWidth={3} />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-4 rounded-full font-black text-lg md:text-xl
            hover:bg-white/20 transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
          >
            Contact Us <ArrowRight size={24} strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  );
}