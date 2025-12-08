"use client";

import Link from "next/link";

export default function ProductCard({ id, name, description, price, image }) {

  const formatINR = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Link href={`/products/${id}`}>
      <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all cursor-pointer">

        {/* Image */}
        <img 
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        {/* Name */}
        <h3 className="text-lg font-semibold mb-1 text-[#404C2F]">
          {name}
        </h3>

        {/* Description */}
        <p className="text-[#404C2F]/70 mb-3 text-sm">
          {description}
        </p>

        {/* Price */}
        <p className="text-xl font-bold text-[#404C2F]">
          {formatINR(price)}
        </p>

      </div>
    </Link>
  );
}
