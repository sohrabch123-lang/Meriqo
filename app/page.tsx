'use client';

import { motion, Variants } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import FlowerCard from '@/components/ui/FlowerCard';
import { flowerData, Flower } from '@/data/flowers';
import Link from 'next/link';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    },
  },
};

export default function HomePage() {
  const featuredFlowers: Flower[] = [
    flowerData.find(f => f.id === 2),
    flowerData.find(f => f.id === 38)
  ].filter((f): f is Flower => !!f);

  return (
    /* MATCHED: duration-1000 ease-in-out */
    <div className="overflow-hidden bg-heritage transition-colors duration-1000 ease-in-out">
      
      <Hero />

      {/* 2. Featured Flowers Section */}
      <section id="featured-flowers" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          {/* Section Heading - MATCHED: duration-1000 */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif text-center text-charcoal mb-16 relative pb-6 transition-colors duration-1000 ease-in-out"
          >
            Featured Blooms
            {/* Theme-aware accent line */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-accent-hover/40 transition-colors duration-1000 ease-in-out" />
          </motion.h2>

          {/* Flower Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {featuredFlowers.map((flower) => (
              <motion.div key={flower.id} variants={itemVariants}>
                <FlowerCard flower={flower} />
              </motion.div>
            ))}
            
            {/* The "See More" Card - MATCHED: duration-1000 */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center bg-card border border-sage/20 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-1000 ease-in-out p-10 group will-change-transform hover:-translate-y-2 min-h-[400px]"
            >
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-serif text-charcoal tracking-wide mb-4 transition-colors duration-1000 ease-in-out">
                  See All Arrangements
                </h3>
                <p className="text-muted italic text-base mb-10 font-serif max-w-[200px] mx-auto transition-colors duration-1000 ease-in-out">
                  Discover our full collection of bespoke floral designs.
                </p>
                
                <Link 
                  href="/gallery" 
                  className="relative inline-block pb-1 text-xs font-bold tracking-boutique uppercase text-charcoal/60 group-hover:text-accent-hover transition-colors duration-1000 ease-in-out"
                >
                  View Gallery
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-accent-hover w-0 group-hover:w-full transition-all duration-500 ease-out" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. Craftsmanship Section - MATCHED: duration-1000 */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="py-24 text-center bg-heritage border-t border-sage/10 transition-colors duration-1000 ease-in-out"
      >
        <h3 className="text-3xl font-serif text-charcoal tracking-wide transition-colors duration-1000 ease-in-out">
          Our Craftsmanship
        </h3>
        <p className="mt-4 text-muted italic font-serif text-lg max-w-2xl mx-auto px-4 transition-colors duration-1000 ease-in-out">
          Every bouquet is hand-arranged with the utmost care and attention to the poetry of nature.
        </p>
      </motion.section>
    </div>
  );
}