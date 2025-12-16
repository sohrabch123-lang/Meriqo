import Hero from '@/components/sections/Hero';
import FlowerCard from '@/components/ui/FlowerCard';
// Import the data and the type definition
import { flowerData, Flower } from '@/data/flowers';

export default function HomePage() {
  
  // We'll use the first two flowers as "Featured" on the homepage for a clean look
  const featuredFlowers: Flower[] = flowerData.slice(0, 2);

  return (
    <div>
      {/* 1. The Main Hero Section */}
      <Hero />

      {/* 2. Featured Flowers Section */}
      <section id="featured-flowers" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-serif text-center text-stone-800 mb-12 border-b-2 border-rose-400/50 inline-block mx-auto pb-2">
          Featured Blooms
        </h2>

        {/* Flower Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFlowers.map((flower) => (
            <FlowerCard key={flower.id} flower={flower} />
          ))}
          
          {/* Add a static card prompting users to see more */}
          <div className="flex items-center justify-center bg-white border border-stone-100 rounded-lg shadow-xl p-6">
             <div className="text-center">
                <h3 className="text-2xl font-serif text-stone-800 tracking-wide mb-2">
                    See All Arrangements
                </h3>
                <p className="text-stone-500 mb-4">
                    Discover our full collection of bespoke floral designs.
                </p>
                <a href="/gallery" className="text-sm font-medium text-rose-400 hover:text-rose-600 transition-colors">
                    View Gallery &rarr;
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for more sections, like an About snippet */}
      <section className="py-12 text-center bg-white border-t border-stone-200">
        <h3 className="text-3xl font-serif text-stone-800">Our Craftsmanship</h3>
        <p className="mt-2 text-stone-600">Every bouquet is hand-arranged with the utmost care and attention.</p>
      </section>
    </div>
  );
}