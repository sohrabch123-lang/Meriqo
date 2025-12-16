import Image from 'next/image';

export default function Hero() {
  // Use data from the first flower as the background for the hero
  // NOTE: Ensure your /public/images/rose_bouquet_classic.jpg is available!
  const heroImage = '/images/Kathrinflowers5.jpg';

  return (
    <section className="relative h-[600px] md:h-[750px] overflow-hidden">
      
      {/* Background Image (set to fill the container) */}
      <Image
        src={heroImage}
        alt="A serene arrangement of beautiful flowers"
        fill
        className="object-cover"
        priority={true} // Load this main image first for performance
        sizes="100vw"
      />

      {/* Overlay to ensure text readability against the image */}
      <div className="absolute inset-0 bg-stone-900/30"></div>

      {/* Hero Content (Centered) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-xl shadow-2xl max-w-xl">
          <h1 className="text-5xl md:text-7xl font-serif text-stone-800 tracking-tighter mb-4 leading-snug">
            Saldana Florals
          </h1>
          <p className="text-xl md:text-2xl text-stone-700 italic mb-6">
            Elegance in Bloom. Calm, Crafted, and Beautiful Arrangements.
          </p>
          <a
            href="#featured-flowers" // Scroll down to the featured section
            className="inline-block py-3 px-8 bg-rose-400 text-white text-lg font-medium tracking-wider uppercase rounded-full hover:bg-rose-500 transition-colors duration-300 shadow-md"
          >
            Explore the Collection
          </a>
        </div>
      </div>
    </section>
  );
}