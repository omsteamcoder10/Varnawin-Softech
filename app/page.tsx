"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import FloatingButtons from "@/components/common/FloatingButtons";
import ScrollToTop from "@/components/common/ScrollToTop";

import {
  ArrowRight,
  Code,
  Mail,
   Phone,
  Briefcase,
  Users,
  Award,
  Building2,
  GraduationCap,
  Settings,
  CheckCircle,
  Target,
  Eye,
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  const featuredCourses = [
    {
      id: "1",
      name: "Full Stack Development",
      description:
        "Java / .NET / Python full stack programs with hands-on projects and real-world exposure.",
      price: 14999,
      image: "/courses/fullstack.jpg",
    },
    {
      id: "2",
      name: "Data Science & Machine Learning",
      description:
        "Data analytics, machine learning, and AI tools aligned with industry requirements.",
      price: 16999,
      image: "/courses/datascience.jpg",
    },
    {
      id: "3",
      name: "Cloud Computing & DevOps",
      description:
        "AWS, Azure, Google Cloud, DevOps & DevSecOps with practical labs.",
      price: 15999,
      image: "/courses/cloud-devops.jpg",
    },
    {
      id: "4",
      name: "Cyber Security & SOC Analyst",
      description:
        "Cyber security fundamentals, SOC tools, and real-time security practices.",
      price: 17999,
      image: "/courses/cybersecurity.jpg",
    },
  ];

  return (
    <>
      <Header />

      <main className="overflow-x-hidden">
        {/* HERO */}
        <HeroSlider />

        {/* COMPANY INTRO */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-900">
              Varnawin Softech – Training & Consulting Services
            </h1>
            <p className="text-lg text-blue-900/80 leading-relaxed">
              Varnawin Softech is a leading <strong>training and consulting company in India</strong>,
              delivering industry-focused, job-oriented training solutions for corporates,
              professionals, students, and educational institutions.
            </p>
            <p className="mt-4 text-blue-900/70">
              We specialize in IT training, corporate upskilling, technology consulting,
              and career-focused learning programs aligned with real-world business needs.
               Our trainers bring real-time industry experience, ensuring learners gain
      skills that are relevant, current, and in demand. With a strong focus on
      practical learning, skill development, and workforce productivity, we help
      organizations and professionals achieve measurable outcomes.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US */}
       <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
              Why Choose Varnawin Softech?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Code,
                  title: "Industry-Aligned Content",
                  desc: "SEO-driven, practical, and business-relevant training programs.",
                },
                {
                  icon: Briefcase,
                  title: "Hands-On Learning",
                  desc: "Live projects, labs, assignments, and real-world case studies.",
                },
                {
                  icon: Users,
                  title: "Expert Trainers",
                  desc: "Experienced corporate trainers and consultants.",
                },
                {
                  icon: Award,
                  title: "Career Support",
                  desc: "Dedicated placement and interview guidance.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
<div
  key={i}
  className="bg-[#6B7FB3] text-white p-6 rounded-xl text-center"
>
                    <Icon className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
              Our Training & Consulting Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Service
                icon={Building2}
                title="Corporate Training"
                desc="Customized corporate IT training, leadership development, digital transformation, onsite and online delivery."
              />
              <Service
                icon={GraduationCap}
                title="Individual & Professional Training"
                desc="Job-oriented IT and professional courses with placement and certification support."
              />
              <Service
                icon={Settings}
                title="College & Consulting Services"
                desc="Faculty development, student employability training, internships, and consulting."
              />
            </div>
          </div>
        </section>

        {/* TRAINING DOMAINS */}
         <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-blue-900 text-center">
              Training Domains & Courses
            </h2>

            <DomainList
              title="IT Training Domains"
              items={[
                "Full Stack Development (Java / .NET / Python)",
                "Data Analytics & Business Intelligence",
                "Data Science & Machine Learning",
                "Artificial Intelligence & Generative AI",
                "Cloud Computing (AWS, Azure, GCP)",
                "DevOps & DevSecOps",
                "Cyber Security & SOC Analyst",
                "Software Testing (Manual, Automation, API, Performance, ETL, Mobile)",
                "RPA & Intelligent Automation",
                "Microsoft Power Platform & M365",
                "Web & UI/UX Development",
                "Mobile App Development",
              ]}
            />

            <DomainList
              title="Non-IT & Professional Skills"
              items={[
                "Advanced Excel & PowerPoint",
                "Business Analysis & Product Management",
                "Digital Marketing",
                "Project Management (Agile, Scrum, PMP)",
                "Leadership & People Management",
                "Communication & Presentation Skills",
                "Career Readiness & Interview Skills",
                "Entrepreneurship & Startup Skills",
              ]}
            />
          </div>
        </section>

        {/* TRAINING METHODOLOGY */}
         <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">
              Our Training Methodology
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Requirement Analysis",
                "Curriculum Customization",
                "Instructor-Led Sessions",
                "Hands-On Practice",
                "Assessments & Feedback",
                "Post-Training Support",
              ].map((step, i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow">
                  <CheckCircle className="text-blue-800 mx-auto mb-3" />
                  <p className="font-medium text-blue-900">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-16 sm:py-24">
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
        {/* CONTACT CTA */}
        ;

;

<section className="py-16 sm:py-24">
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

      <ScrollToTop />
      <FloatingButtons />
      <Footer />
    </>
  );
}

/* Helper Components */
function Service({ icon: Icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-xl shadow text-center">
      <Icon className="w-14 h-14 mx-auto mb-4 text-blue-900" />
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-blue-900/70">{desc}</p>
    </div>
  );
}

function DomainList({ title, items }: any) {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4 text-blue-900">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {items.map((item: string, i: number) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <CheckCircle className="inline text-blue-800 mr-2" />
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
