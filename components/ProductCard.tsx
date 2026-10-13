// components/ProductCard.tsx
import Link from 'next/link';

export default function ProductCard({ id, name, description, image }) {
  return (
    <Link href={`/products/${id}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-full h-70 object-cover object-bottom"
        />

        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>

          {/* Same product page */}
          <span className="inline-block bg-[#5F73A7] text-white px-4 py-2 rounded hover:bg-[#2f3e6f]">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}
