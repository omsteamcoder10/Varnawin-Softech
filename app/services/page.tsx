import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Code,
  GraduationCap,
  Briefcase,
  Users,
  Laptop,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
       <section className="bg-[#5F73A7] py-16 sm:py-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              We provide end-to-end IT training and technology services designed
              to build skills, careers, and businesses.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-5 sm:py-5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-900">
              What We Offer
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "IT Training Programs",
                  desc: "Industry-oriented training in Full Stack, Python, Java, UI/UX, Data Science, and more.",
                },
                {
                  icon: Code,
                  title: "Software Development",
                  desc: "Custom web and software development solutions using modern technologies.",
                },
                {
                  icon: Briefcase,
                  title: "Internship Programs",
                  desc: "Live project-based internships with real industry exposure and mentorship.",
                },
                {
                  icon: Users,
                  title: "Placement Assistance",
                  desc: "Resume preparation, mock interviews, and job placement support.",
                },
                {
                  icon: Laptop,
                  title: "Corporate Training",
                  desc: "Customized corporate IT training programs for teams and organizations.",
                },
                {
                  icon: ShieldCheck,
                  title: "Project Support",
                  desc: "Final year project guidance, development, and technical support.",
                },
              ].map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="rounded-xl p-8 border border-blue-900/20 shadow-md hover:shadow-xl transition-all bg-white"
                  >
                    <Icon className="w-12 h-12 text-blue-900 mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-blue-900">
                      {service.title}
                    </h3>
                    <p className="text-blue-900/70 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-5 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-900">
              Why Choose Varnawin Softech?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                "Experienced Trainers",
                "Real-Time Projects",
                "Job-Oriented Curriculum",
                "Career & Placement Support",
              ].map((point, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 text-center border border-blue-900/20 bg-white shadow-sm hover:shadow-lg transition-all"
                >
                  <p className="font-semibold text-blue-900">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-900">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-900/80 mb-8">
              Join Varnawin Softech and take the next step in your IT career.
            </p>

            <a
              href="/contact"
              className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
