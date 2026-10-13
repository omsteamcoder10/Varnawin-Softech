"use client";

import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { allProducts } from "@/app/data/courses"; // Data-vai import seiyavum

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id;

  // Find the course that matches the ID in the URL
  const course = allProducts.find((p) => p.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Link href="/courses" className="text-[#5F73A7] hover:underline">Return to Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
<main>
        {/* HERO */}
     {/* HERO */}
<section className="pl-0 sm:pl-18 bg-[#5F73A7] pt-20 pb-10 sm:pt-24 sm:pb-12">
  <div className="max-w-7xl mx-auto px-3 text-center sm:text-left">

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
      Courses
    </h1>

    <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed">
      Industry-focused IT and professional training programs from
      <strong> Varnawin Softech</strong>, designed for students, freshers,
      and working professionals.
    </p>

  </div>
</section>


        <div className="max-w-6xl mx-auto px-4">
          <Link href="/courses" className="text-[#5F73A7] font-medium hover:underline mb-8 inline-block">
            ← Back to All Courses
          </Link>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto bg-gray-200">
                <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs font-bold text-[#5F73A7] uppercase tracking-widest mb-2">
                  Professional Training
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-[#2f3e6f] mb-6 leading-tight">
                  {course.name}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {course.description}
                </p>

                <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row">
                 <Link href="/contact" className="flex-1">
  <button className="w-full bg-[#2f3e6f] text-white py-4 rounded-lg font-semibold hover:bg-[#5F73A7] transition-all">
    Enroll Now
  </button>
</Link>
                  {/* <button className="flex-1 border-2 border-[#2f3e6f] text-[#2f3e6f] py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                    Get Syllabus
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[#2f3e6f] mb-6">Course Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5F73A7]"></div>
                <p className="text-gray-700">Hands-on labs and real-time projects</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5F73A7]"></div>
                <p className="text-gray-700">Expert-led training sessions</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5F73A7]"></div>
                <p className="text-gray-700">100% Placement Assistance</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5F73A7]"></div>
                <p className="text-gray-700">Global Industry Certification prep</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}