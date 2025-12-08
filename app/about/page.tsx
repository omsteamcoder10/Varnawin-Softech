import Header from "@/components/header"
import Footer from "@/components/footer"
import { Leaf, Droplet, Sparkles, Heart } from "lucide-react"

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
       <section className="bg-[#404C2F] py-16 sm:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance">
      About Darshana Natural Care
    </h1>
    <p className="text-lg text-white/80 max-w-2xl">
      We are committed to bringing you the purest Ayurvedic beauty products, crafted with passion and integrity.
    </p>
  </div>
</section>


      {/* Our Story */}
<section className="py-16 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* TEXT CONTENT */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#404C2F]">
          Our Story
        </h2>

        <p className="text-[#404C2F]/80 mb-4 leading-relaxed">
          Founded in 2015, Darshana Natural Care began as a passion project to revive the
          ancient wisdom of Ayurveda. Our founder, inspired by traditional natural beauty
          remedies, envisioned a brand that blends time-tested knowledge with modern skincare needs.
        </p>

        <p className="text-[#404C2F]/80 mb-4 leading-relaxed">
          What started in a small home kitchen has now grown into a trusted brand loved by
          customers worldwide. Each product is carefully crafted using pure, organic,
          ethically sourced ingredients — staying true to authentic Ayurvedic practices.
        </p>

        <p className="text-[#404C2F]/80 leading-relaxed">
          Today, we proudly serve over 50,000 happy customers who rely on Darshana Natural Care
          for safe, natural beauty solutions that work in harmony with the body.
        </p>
      </div>

      {/* IMAGE */}
      <div className="rounded-2xl overflow-hidden shadow-xl h-96">
        <img
          src="/natural-ingredients-ayurvedic.jpg"
          alt="Our Story"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</section>

       {/* Mission & Values */}
<section className="py-16 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#404C2F]">
      Our Mission & Values
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* Mission */}
      <div className="rounded-xl p-8 border border-[#404C2F]/30 shadow-md hover:shadow-lg transition-all bg-white">
        <h3 className="text-2xl font-bold mb-4 text-[#404C2F]">Our Mission</h3>
        <p className="text-[#404C2F]/80 leading-relaxed">
          To make authentic, organic Ayurvedic beauty products accessible to everyone—promoting
          natural wellness and environmental sustainability while honoring the ancient wisdom
          of Ayurveda.
        </p>
      </div>

      {/* Vision */}
      <div className="rounded-xl p-8 border border-[#404C2F]/30 shadow-md hover:shadow-lg transition-all bg-white">
        <h3 className="text-2xl font-bold mb-4 text-[#404C2F]">Our Vision</h3>
        <p className="text-[#404C2F]/80 leading-relaxed">
          To be the world’s most trusted brand for natural beauty, known for our purity,
          quality, and positive impact on both people and the planet.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* Core Values */}
<section className="py-16 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#404C2F]">
      Our Core Values
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          icon: Leaf,
          title: "Organic",
          description:
            "We use 100% certified organic ingredients, free from synthetic pesticides and harmful chemicals.",
        },
        {
          icon: Droplet,
          title: "Vegan",
          description:
            "All our products are completely vegan, with no animal-derived ingredients or animal testing.",
        },
        {
          icon: Sparkles,
          title: "Chemical Free",
          description:
            "Our formulations contain zero artificial preservatives, colors, or synthetic additives.",
        },
        {
          icon: Heart,
          title: "Skin Safe",
          description:
            "Every product is dermatologist tested and suitable for all skin types, including sensitive skin.",
        },
      ].map((value, i) => {
        const Icon = value.icon;
        return (
          <div
            key={i}
            className="
              rounded-xl p-8 
              border border-[#404C2F]/30 
              bg-white
              shadow-md hover:shadow-xl 
              transition-all
            "
          >
            <Icon className="w-12 h-12 text-[#404C2F] mb-4" />
            <h3 className="text-xl font-bold mb-3 text-[#404C2F]">
              {value.title}
            </h3>
            <p className="text-[#404C2F]/70">
              {value.description}
            </p>
          </div>
        );
      })}
    </div>

  </div>
</section>


        {/* Ingredients Section */}
        <section className="py-16 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#404C2F]">
      Natural Ingredients We Love
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {[
        { name: "Brahmi", benefit: "Hair strength & growth" },
        { name: "Turmeric", benefit: "Skin glow & anti-inflammatory" },
        { name: "Neem", benefit: "Deep cleansing & purification" },
        { name: "Rose", benefit: "Hydration & radiance" },
        { name: "Coconut Oil", benefit: "Deep moisturizing" },
        { name: "Ashwagandha", benefit: "Stress relief & vitality" },
      ].map((ingredient, i) => (
        <div
          key={i}
          className="
            rounded-xl p-6 text-center 
            border border-[#404C2F]/30 
            bg-white 
            shadow-sm hover:shadow-lg 
            transition-all
          "
        >
          <h3 className="font-bold text-lg text-[#404C2F] mb-2">
            {ingredient.name}
          </h3>
          <p className="text-sm text-[#404C2F]/70">
            {ingredient.benefit}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

      </main>
      <Footer />
    </>
  )
}
