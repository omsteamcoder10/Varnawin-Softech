import Image from "next/image";

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
};

export default function ProductCard({
  name,
  description,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all flex flex-col">

      {/* Course Image */}
      <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Course Title */}
      <h3 className="text-xl font-semibold mb-2 text-[#2f3e6f]">
        {name}
      </h3>

      {/* Course Description */}
      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      {/* CTA */}
      <button
        type="button"
        className="mt-auto inline-flex justify-center items-center px-6 py-2.5 rounded-full
        bg-[#6B7FB3] text-white font-medium transition hover:opacity-90"
      >
        View Details
      </button>

    </div>
  );
}
