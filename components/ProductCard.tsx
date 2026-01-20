"use client";

import Image from "next/image";

type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export default function ProductCard({ name, description, image }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      
      {/* IMAGE */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm flex-1">{description}</p>

        <button className="mt-4 self-start bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
