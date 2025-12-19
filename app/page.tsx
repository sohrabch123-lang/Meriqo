'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import FlowerCard from '@/components/ui/FlowerCard';
import { flowerData, Flower } from '@/data/flowers';

// 1. Define the Stagger Container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each element appearing
    },
  },
};

// 2. Define the individual element slide-up
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function HomePage() {
  const featuredFlowers: Flower[] = flowerData.slice(0, 2);

  return (
    <div className="overflow-hidden">
      {/* 1. The Main Hero Section */}
      {/* Note: Ensure Hero component is also 'use client' if you add motion there */}
      <Hero />

      {/* 2. Featured Flowers Section */}
      <section id="featured-flowers" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* We wrap the whole section in a motion.div to trigger the stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // This triggers animation when the user scrolls to it
          viewport={{ once: true, margin: "-100px" }} // Triggers slightly before it enters view
          className="flex flex-col items-center"
        >
          {/* Section Heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-serif text-center text-stone-800 mb-12 border-b-2 border-rose-400/50 inline-block pb-2"
          >
            Featured Blooms
          </motion.h2>

          {/* Flower Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {featuredFlowers.map((flower) => (
              <motion.div key={flower.id} variants={itemVariants}>
                <FlowerCard flower={flower} />
              </motion.div>
            ))}
            
            {/* The "See More" Card */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center bg-white border border-stone-100 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="text-center">
                <h3 className="text-2xl font-serif text-stone-800 tracking-wide mb-2">
                    See All Arrangements
                </h3>
                <p className="text-stone-500 mb-4">
                    Discover our full collection of bespoke floral designs.
                </p>
                <a href="/gallery" className="text-sm font-medium text-rose-400 hover:text-rose-600 transition-colors inline-flex items-center gap-2">
                    View Gallery <span>&rarr;</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. Craftsmanship Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="py-12 text-center bg-white border-t border-stone-200"
      >
        <h3 className="text-3xl font-serif text-stone-800">Our Craftsmanship</h3>
        <p className="mt-2 text-stone-600 italic">Every bouquet is hand-arranged with the utmost care and attention.</p>
      </motion.section>
    </div>
  );
}