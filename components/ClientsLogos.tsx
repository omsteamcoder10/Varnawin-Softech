"use client";

const logos = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
  "/logos/10.png",
  
  
];

export default function ClientsLogos() {
  return (
    <div className="w-full overflow-hidden  py-10  bg-[#F9F6F3]">
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
        Our Clients
      </h2>

      {/* animation wrapper */}
      <div className="relative overflow-hidden">
        <div className="flex w-max gap-12 marquee">
          {/* first set */}
          {logos.map((logo, index) => (
            <img
              key={`logo1-${index}`}
              src={logo}
              alt="Client Logo"
              className="h-12 sm:h-16 md:h-20 object-contain pointer-events-none select-none"
              draggable={false}
            />
          ))}

          {/* duplicate set */}
          {logos.map((logo, index) => (
            <img
              key={`logo2-${index}`}
              src={logo}
              alt="Client Logo"
              className="h-12 sm:h-16 md:h-20 object-contain pointer-events-none select-none"
              draggable={false}
            />
          ))}
        </div>
      </div>

      {/* CSS INSIDE COMPONENT */}
      <style jsx>{`
        .marquee {
          animation: marquee 40s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
