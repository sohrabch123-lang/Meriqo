import Hero from '@/components/sections/Hero';
import FlowerCard from '@/components/ui/FlowerCard';
import Reveal from '@/components/ui/Reveal';
import { flowerData, Flower } from '@/data/flowers';
import Link from 'next/link';

export default function HomePage() {
  const featuredFlowers: Flower[] = [
    flowerData.find(f => f.id === 2),
    flowerData.find(f => f.id === 38)
  ].filter((f): f is Flower => !!f);

  return (
    <div className="overflow-hidden bg-heritage">
      
      <Hero />

      <section id="featured-flowers" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif text-center text-charcoal mb-16 relative pb-6">
              Featured Blooms
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-accent-hover/40" />
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full items-stretch">
            {featuredFlowers.map((flower, index) => (
              <Reveal key={flower.id} delay={index * 0.2}>
                <FlowerCard flower={flower} />
              </Reveal>
            ))}
            
            {/* The "See More" Card - Precision matched to FlowerCard dimensions */}
            <Reveal delay={featuredFlowers.length * 0.2}>
              <div className="flex flex-col h-full bg-card border border-sage/20 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-700 ease-boutique overflow-hidden group will-change-transform hover:-translate-y-2">
                
                {/* Image Spacer - Matches FlowerCard aspect ratio */}
                <div className="w-full aspect-[4/5] relative flex flex-col items-center justify-center p-12 bg-heritage/20 dark:bg-black/20">
                  <h3 className="text-2xl md:text-3xl font-serif text-charcoal tracking-wide mb-4 text-center">
                    See All Arrangements
                  </h3>
                  <p className="text-muted italic text-base font-serif max-w-[200px] mx-auto text-center">
                    Discover our full collection of bespoke floral designs.
                  </p>
                </div>

                {/* Info Area - Matches FlowerCard padding/structure */}
                <div className="p-8 flex flex-col items-center justify-center flex-grow text-center">
                   <Link 
                    href="/gallery" 
                    className="relative inline-block pb-1 text-[11px] font-bold tracking-boutique uppercase text-charcoal/60 group-hover:text-accent-hover transition-colors"
                  >
                    View Gallery
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-accent-hover w-0 group-hover:w-full transition-all duration-500 ease-boutique" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 text-center bg-heritage border-t border-sage/10">
        <Reveal>
          <h3 className="text-3xl font-serif text-charcoal tracking-wide">
            Our Craftsmanship
          </h3>
          <p className="mt-4 text-muted italic font-serif text-lg max-w-2xl mx-auto px-4">
            Every bouquet is hand-arranged with the utmost care and attention to the poetry of nature.
          </p>
        </Reveal>
      </section>
    </div>
  );
}