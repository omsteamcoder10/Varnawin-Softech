import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

import {
  Code,
  Users,
  Briefcase,
  Award,
  Target,
  Layers,
  ArrowRight,
} from "lucide-react";



export default function About() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
      <section className="bg-[#5F73A7] py-30 sm:py-30">
  <div className="max-w-7xl mx-auto px-4 text-center sm:text-left">

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
      About Varnawin Softech
    </h1>

    <h2 className="text-lg sm:text-xl font-semibold text-white/90 mb-6">
      Trusted Training & Consulting Partner
    </h2>

    <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-3xl leading-relaxed">
      Varnawin Softech is a trusted <strong>training company in India</strong> and
      consulting partner, delivering customized IT and professional training
      solutions for individuals, corporates, and educational institutions.
      <br />
     
    </p>

  </div>
</section>


        {/* WHO WE ARE */}
        <section className="py-16 sm:py-5 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* CONTENT */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-900">
                  Trusted Training & Consulting Partner
                </h2>

                <p className="text-blue-900/80 mb-4 leading-relaxed">
                  Varnawin Softech is recognized as a reliable{" "}
                  <strong>IT training institute and corporate training provider</strong>,
                  offering customized learning solutions across multiple technology
                  and professional domains.
                </p>

                <p className="text-blue-900/80 mb-4 leading-relaxed">
                  We specialize in{" "}
                  <strong>
                    IT training, corporate upskilling, technology consulting,
                    and career-focused learning programs
                  </strong>{" "}
                  designed to meet real-world business and employment demands.
                </p>

                <p className="text-blue-900/80 leading-relaxed">
                  Every program at Varnawin Softech is crafted from scratch with a
                  strong focus on practical exposure, measurable outcomes, and
                  real-world relevance—ensuring originality, quality, and
                  zero content duplication concerns.
                </p>
              </div>

              {/* IMAGE */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-96">
                <img
                  src="/about/1.webp"
                  alt="Varnawin Softech Training & Consulting Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-16 sm:py-5 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-900">
              Our Mission & Vision
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 border border-blue-900/20 shadow-md hover:shadow-lg transition-all">
                <Target className="w-12 h-12 text-blue-900 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Our Mission
                </h3>
                <p className="text-blue-900/80 leading-relaxed">
                  To deliver high-quality, job-oriented training and consulting
                  services that create measurable value for learners and
                  organizations through practical, industry-aligned programs.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-blue-900/20 shadow-md hover:shadow-lg transition-all">
                <Award className="w-12 h-12 text-blue-900 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Our Vision
                </h3>
                <p className="text-blue-900/80 leading-relaxed">
                  To be a globally trusted training and consulting company,
                  enabling digital skills, workforce transformation, and
                  long-term career success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRAINING METHODOLOGY */}
        <section className="py-16 sm:py-5 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-900">
              Our Training Methodology
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                "Requirement Analysis",
                "Curriculum Customization",
                "Instructor-Led Interactive Sessions",
                "Hands-On Practice & Assignments",
                "Assessments & Feedback",
                "Post-Training Support",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl border border-blue-900/20"
                >
                  <Layers className="w-8 h-8 text-blue-900 mt-1" />
                  <p className="text-blue-900 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16 sm:py-5 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-900">
              Why Choose Varnawin Softech?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Code,
                  title: "Industry-Aligned Training",
                  desc: "SEO-driven, practical, and job-oriented curriculum.",
                },
                {
                  icon: Users,
                  title: "Experienced Trainers",
                  desc: "Certified corporate trainers and industry consultants.",
                },
                {
                  icon: Briefcase,
                  title: "Flexible Training Delivery",
                  desc: "Online, classroom, onsite, and customized learning modes.",
                },
                {
                  icon: Award,
                  title: "Career & Placement Support",
                  desc: "Dedicated guidance for interviews and career readiness.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-8 border border-blue-900/20 shadow-md hover:shadow-xl transition-all"
                  >
                    <Icon className="w-12 h-12 text-blue-900 mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-blue-900">
                      {item.title}
                    </h3>
                    <p className="text-blue-900/70">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* SEO Support Text */}
            <p className="sr-only">
              Training company in India, IT training institute, corporate training provider,
              professional training services, skill development company.
            </p>
          </div>
        </section>

        {/* TAGLINE CTA */}
        <section className="py-16 sm:py-5">
  <div className="max-w-5xl mx-auto px-4">
    <div className="bg-[#6B7FB3] rounded-2xl px-8 py-14 text-center shadow-xl">

      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Ready to Upgrade Your Skills or Workforce?
      </h2>

      <p className="text-white/90 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
        Partner with Varnawin Softech for industry-relevant training, 
        corporate solutions, and measurable learning outcomes.
      </p>

      <Link
        href="/contact"
        className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#6B7FB3]
        rounded-full font-semibold transition hover:bg-white/90 hover:shadow-lg"
      >
        Get in Touch <ArrowRight size={18} />
      </Link>

    </div>
  </div>
</section>
      </main>

      <Footer />
    </>
  );
}
