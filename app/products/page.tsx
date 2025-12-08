import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/ProductCard";

export default function Products() {
  const allProducts = [
    {
      id: "1",
      name: "Brahmi Hair Oil",
      description: "Nourishing herbal blend to strengthen and promote healthy hair growth",
      price: 249,
      image: "/oil.webp",
    },
    {
      id: "2",
      name: "Turmeric Face Pack",
      description: "Ancient Ayurvedic formula for glowing, radiant skin",
      price: 189,
      image: "/pack.webp",
    },
    {
      id: "3",
      name: "Neem Herbal Powder",
      description: "Pure organic neem powder for deep cleansing and purification",
      price: 149,
      image: "/powder.webp",
    },
    {
      id: "4",
      name: "Rose Beauty Cream",
      description: "Luxurious moisturizing cream with organic rose extract",
      price: 329,
      image: "/rose-beauty-cream.jpg",
    },
    {
      id: "5",
      name: "Ashwagandha Toner",
      description: "Balancing toner with adaptogenic ashwagandha for stress-relief skincare",
      price: 219,
      image: "/ashwagandha-toner.jpg",
    },
    {
      id: "6",
      name: "Coconut Oil Hair Mask",
      description: "Deep conditioning hair mask with pure organic coconut oil",
      price: 199,
      image: "https://tiimg.tistatic.com/fp/1/003/365/herbal-virgin-coconut-oil-200-ml-119.jpg",
    },
    {
      id: "7",
      name: "Lavender Bath Soak",
      description: "Soothing herbal bath blend with organic lavender and essential oils",
      price: 169,
      image: "/lavender-bath-soak.jpg",
    },
    {
      id: "8",
      name: "Sandalwood Face Serum",
      description: "Premium anti-aging serum with cooling sandalwood essence",
      price: 429,
      image: "/sandalwood-serum.jpg",
    },
    {
      id: "9",
      name: "Aloe Vera Gel",
      description: "Pure organic aloe vera gel for soothing and hydrating skin",
      price: 139,
      image: "/aloe-vera-gel.png",
    },
  ]

  return (
    <>
      <Header />
      <main>

        {/* Hero Section */}
        <section className="bg-[#404C2F] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-lg text-white/80">
              Discover our complete collection of authentic Ayurvedic beauty essentials
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#404C2F]">
              All Products
            </h2>

            <p className="text-lg text-[#404C2F]/70 mb-12">
              Explore our complete range of natural Ayurvedic beauty essentials
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {allProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
