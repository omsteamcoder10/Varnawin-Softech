import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"

// Professional Theme Color: #2D3748 (Dark Slate/Charcoal)
const PRIMARY_COLOR = "#2D3748"
const LIGHT_COLOR = "#F7FAFC"

export default function Blog() {
  const blogPosts = [
    {
      id: "1",
      title: "The Power of Brahmi Oil: A Complete Guide to Hair Health",
      excerpt:
        "Discover the ancient Ayurvedic secrets behind brahmi oil and how it can transform your hair care routine with natural strength and shine.",
      author: "Priya Sharma",
      date: "December 1, 2024",
      category: "Hair Care",
      image: "/brahmi-oil-guide.jpg",
    },

    {
      id: "2",
      title: "Herbal Face Pack for Natural Glow: Science Meets Tradition",
      excerpt:
        "Discover how herbal face packs made with ingredients like turmeric, rose, multani mitti, and sandalwood can brighten, detoxify, and rejuvenate your skin naturally.",
      author: "Dr. Ananya Patel",
      date: "November 28, 2024",
      category: "Skincare",
      image: "/pack.webp",
    },
    {
  id: "3",
  title: "Herbal Hair Growth Oil: The Natural Solution for Strong & Healthy Hair",
  excerpt:
    "Discover how traditional herbs like amla, bhringraj, and neem support stronger roots, reduce hair fall, and promote natural hair growth.",
  author: "Rajesh Kumar",
  date: "November 25, 2024",
  category: "Hair Care",
  image: "/oil.webp",
},

   {
  id: "4",
  title: "Herbal Hair Wash & Pack Routine: The Natural Way to Strong, Healthy Hair",
  excerpt:
    "Discover how an herbal hair wash and nourishing hair pack can restore strength, reduce hair fall, and enhance natural shine using traditional Ayurvedic ingredients.",
  author: "Maya Desai",
  date: "November 20, 2024",
  category: "Beauty Tips",
  image: "/powder.webp",
},

    {
      id: "5",
      title: "The Benefits of Rose Extract in Modern Skincare",
      excerpt:
        "Understand why rose has remained a beauty secret across cultures and how it benefits different skin types.",
      author: "Dr. Sophia Leone",
      date: "November 15, 2024",
      category: "Ingredients",
      image: "rose.webp",
    },
    {
  id: "6",
  title: "Saffron for Radiant Skin: The Secret to Natural Brightening",
  excerpt:
    "Learn how saffron, one of Ayurveda’s most precious ingredients, helps brighten skin, reduce pigmentation, and enhance your natural glow.",
  author: "Vikram Singh",
  date: "November 10, 2024",
  category: "Wellness",
  image: "/packs.webp",
}
,
  ]

  return (
    <>
      <Header />
      <main className={`bg-[${LIGHT_COLOR}]`}>
        {/* Hero */}
        <section className="bg-[#404C2F] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight">
              The Wellness Journal
            </h1>

            <p className="text-xl text-white/80 font-light max-w-3xl">
              In-depth articles, scientific insights, and natural beauty wisdom for a balanced life.
            </p>
          </div>
        </section>

       {/* Featured Post */}
<section className="py-20 sm:py-32 bg-[#F7F6F2]"> 
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-4xl font-bold mb-12 text-[#404C2F]">
      Featured Article
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      {/* IMAGE */}
      <div className="rounded-xl overflow-hidden shadow-2xl h-128 transform hover:scale-[1.01] transition-all duration-500">
        <img
          src={blogPosts[0].image}
          alt={blogPosts[0].title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div>
        {/* Featured Badge */}
        <span className="inline-block bg-[#404C2F] text-white px-5 py-1 rounded-full text-sm font-semibold mb-4 tracking-wider">
          SPOTLIGHT
        </span>

        {/* Title */}
        <h3 className="text-4xl sm:text-5xl font-extrabold mb-5 text-[#404C2F] leading-tight">
          {blogPosts[0].title}
        </h3>

        {/* Meta Info */}
        <div className="flex items-center gap-6 text-sm text-[#404C2F]/70 mb-8 font-medium">
          <div className="flex items-center gap-2">
            <User size={16} className="text-[#404C2F]" /> {blogPosts[0].author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-[#404C2F]" /> {blogPosts[0].date}
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-[#404C2F]/80 mb-10 leading-relaxed text-lg">
          {blogPosts[0].excerpt}
        </p>

        {/* Button */}
        <button
          className="
            px-10 py-4 rounded-full font-bold inline-flex items-center gap-3 text-lg
            bg-[#404C2F] text-white 
            shadow-lg hover:bg-[#2E3A24] hover:shadow-xl transition-all duration-300
          "
        >
          Continue Reading <ArrowRight size={20} />
        </button>
      </div>

    </div>
  </div>
</section>


        {/* Blog Grid */}
<section className="py-20 sm:py-28 bg-[#F7F6F2]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Title */}
    <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-[#404C2F] border-b border-[#404C2F]/20 pb-4">
      Latest Articles
    </h2>

    {/* Blog Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {blogPosts.slice(1).map((post) => (
        <article
          key={post.id}
          className="
            rounded-2xl overflow-hidden bg-white
            shadow-lg hover:shadow-2xl 
            transition-all duration-500 transform hover:-translate-y-2
            border border-[#E5E7EB]
          "
        >
          {/* Image */}
          <div className="h-[20rem] sm:h-[22rem] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="
                w-full h-full object-cover 
                hover:scale-110 
                transition-transform duration-700
              "
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <span className="
              inline-block text-xs font-semibold text-white 
              bg-[#404C2F] px-4 py-1.5 rounded-full 
              mb-4 uppercase tracking-wider shadow-sm
            ">
              {post.category}
            </span>

            <h3 className="
              text-2xl font-bold mb-3 text-[#404C2F] 
              leading-snug hover:text-[#2E3A24] 
              transition-colors duration-300
            ">
              {post.title}
            </h3>

            <p className="text-sm text-[#404C2F]/70 mb-6 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="
              flex items-center justify-between 
              text-xs text-[#404C2F]/60 border-t border-gray-200 
              pt-4 font-medium
            ">
              <div className="flex items-center gap-1">
                <User size={14} className="text-[#404C2F]/70" /> {post.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} className="text-[#404C2F]/70" /> {post.date}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>

  </div>
</section>


        {/* Newsletter - New Look and Section */}
        <section className={`py-20 sm:py-28 bg-[${PRIMARY_COLOR}]/5 border-t border-b border-[${PRIMARY_COLOR}]/10`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

           <h2 className={`text-4xl font-extrabold mb-4 text-[${PRIMARY_COLOR}]`}>
  Reveal Your Best Hair Yet
</h2>

<p className={`text-lg text-[${PRIMARY_COLOR}]/80 mb-10`}>
  Discover natural  care powered by Ayurvedic ingredients for softer, smoother, and healthier hair.
</p>


            <div className="flex flex-col sm:flex-row gap-4">

              {/* Email Input */}
              {/* <input
                type="email"
                placeholder="Enter your professional email address"
                className={`
                  flex-1 px-6 py-4 rounded-lg
                  text-[${PRIMARY_COLOR}]
                  bg-white border-2 border-[${PRIMARY_COLOR}]/20
                  focus:outline-none 
                  focus:ring-4 focus:ring-[${PRIMARY_COLOR}]/10
                  placeholder:text-[${PRIMARY_COLOR}]/50
                  transition-all
                `}
              /> */}

              {/* Subscribe Button */}
              {/* <button
                className={`
                  px-8 py-4 rounded-lg font-bold text-lg
                  bg-[${PRIMARY_COLOR}] text-white
                  shadow-lg hover:bg-[#4A5568] hover:shadow-xl
                  transition-all
                `}
              >
                Subscribe Now
              </button> */}

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}