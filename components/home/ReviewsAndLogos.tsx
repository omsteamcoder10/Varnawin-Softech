"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight, UserCircle2 } from "lucide-react";

export default function ReviewsAndLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const reviews = [
    {
      name: "Arun Kumar",
      text: "I joined the Software Testing (Selenium with Java) course with basic knowledge. The trainers explained concepts clearly and focused on hands-on practice with real-time automation scenarios. The practical approach helped me understand Selenium and Java better, and I now feel confident and job-ready.",
    },
    {
      name: "Priya Sharma",
      text: "The trainers are highly experienced and supportive throughout the Digital Marketing training. The course content is well structured and easy to follow, covering SEO, social media, and practical campaign strategies. The non-IT sessions on communication and interview skills were extremely helpful in improving my confidence and career readiness.. The course content covered SEO, social media, and practical campaign strategies clearly.",
    },
    {
      name: "Mohammed Faizal",
      text: "This institute provides excellent Data Analytics training with strong hands-on practice and real-world data scenarios. The learning environment is friendly, and the trainers ensure every student understands concepts like data analysis, visualization, and reporting clearly. I would definitely recommend this course to anyone looking to grow a career in analytics..",
    },
    {
      name: "Sneha Reddy",
      text: "I found the training to be very practical and industry-oriented, with a strong focus on real-time examples and hands-on learning. The balanced combination of technical skills and soft skills, including communication and interview preparation, helped me perform better during job interviews. The trainers were always approachable, patient, and available to clear doubts and provide proper guidance throughout the course, which made the learning experience very effective and confidence-building.",
    },
    {
      name: "Karthik S",
      text: "UiPath RPA training included real-time projects and assignments that boosted my confidence in automation.",
    },
    {
      name: "Anjali Verma",
      text: "The UiPath course helped me upgrade my skills using the latest RPA tools and automation practices. The training included hands-on assignments, real-time projects, and continuous assessments, which made learning practical and effective. The trainers explained concepts clearly and guided us throughout the course. Overall, it was a great learning experience and boosted my confidence in RPA automation..",
    },
    {
      name: "Ramesh Naidu",
      text: "I really appreciated the practical approach followed during the AWS Cloud training. The sessions were interactive, easy to understand, and focused on real-time cloud scenarios and hands-on labs. The career guidance provided along with the course, including certification and job-oriented support, added great value and helped me plan my cloud career confidently..",
    },
    {
      name: "Kavya N",
      text: "The trainers explained even complex Python concepts in a simple and easy-to-understand way. Flexible timings and well-organized classes helped me manage my learning effectively along with my schedule. The hands-on practice and clear explanations made the course very useful, and I am highly satisfied with the overall training quality.",
    },
    {
      name: "Santhosh Kumar",
      text: "This is one of the best places to learn both IT and Non-IT skills. The Advanced Excel training was fully aligned with current industry requirements, covering formulas, data analysis, pivot tables, and dashboards. I gained practical exposure through hands-on exercises and real-time examples, which boosted my confidence to handle tasks and face interviews successfully.",
    },
    {
      name: "Deepika Rao",
      text: "From technical training to soft skills and career support, everything was covered in a highly professional and structured manner. The trainers not only explained concepts clearly but also provided hands-on practice, real-time projects, and practical examples that helped me understand and apply the skills effectively. Beyond the technical sessions, the guidance on communication, interview preparation, and career planning was extremely valuable. The trainers genuinely care about student success and go the extra mile to ensure everyone is confident and job-ready. I strongly recommend this institute to anyone looking to build a strong and successful career.",
    },
  ];

  return (
    <section className="py-16    bg-[#F9F6F3]">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-blue-900">
          Student Reviews & Industry Trust
        </h2>

        {/* COMPANY LOGOS - Keep these as they are */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center mb-12 opacity-70 grayscale hover:grayscale-0 transition-all">
          <img src="/logos/company1.png" className="mx-auto h-10 object-contain" alt="Partner" />
          <img src="/logos/company2.png" className="mx-auto h-10 object-contain" alt="Partner" />
          <img src="/logos/company3.png" className="mx-auto h-10 object-contain" alt="Partner" />
          <img src="/logos/company4.png" className="mx-auto h-10 object-contain" alt="Partner" />
          <img src="/logos/company5.png" className="mx-auto h-10 object-contain" alt="Partner" />
        </div> */}

        {/* SCROLL BUTTONS */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 top-[65%] -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full p-2 sm:p-3 hover:bg-blue-50 transition"
        >
          <ChevronLeft className="text-blue-900 w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-1 top-[65%] -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full p-2 sm:p-3 hover:bg-blue-50 transition"
        >
          <ChevronRight className="text-blue-900 w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* REVIEWS SCROLLER */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 px-1 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="min-w-[280px] sm:min-w-[380px] bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic text-sm leading-relaxed">
                  “{review.text}”
                </p>
              </div>

              {/* PERSON ICON + NAME */}
              <div className="flex items-center gap-3 border-t pt-4">
                <UserCircle2 className="text-blue-900/20" size={42} strokeWidth={1.5} />
                <div>
                  <p className="font-bold text-blue-900 text-sm sm:text-base">
                    {review.name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-blue-600 font-medium uppercase tracking-wider">
                    Verified Student
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}