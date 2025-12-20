'use client';

import { motion, Variants } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import FlowerCard from '@/components/ui/FlowerCard';
import { flowerData, Flower } from '@/data/flowers';
import Link from 'next/link';

// 1. Type-safe Container Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 2. Type-safe Item Variants (Fixed the Ease error)
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
  // 1. Define the featured products by selecting specific IDs
// We pick ID 1 (Rose Bouquet) and ID 20 (Your first Macramé)
const featuredFlowers: Flower[] = [
  flowerData.find(f => f.id === 2),
  flowerData.find(f => f.id === 38)
].filter((f): f is Flower => !!f); // This filter ensures the page won't crash if an ID is missing

  return (
    <div className="overflow-hidden bg-heritage">
      {/* 1. The Main Hero Section */}
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
          {/* Section Heading - Balanced and Prominent */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif text-center text-charcoal mb-16 relative pb-6"
          >
            Featured Blooms
            {/* Elegant 1px accent line */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-accent-hover/40" />
          </motion.h2>

          {/* Flower Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {featuredFlowers.map((flower) => (
              <motion.div key={flower.id} variants={itemVariants}>
                <FlowerCard flower={flower} />
              </motion.div>
            ))}
            
            {/* The "See More" Card - Now with Eyecandy Hover */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center bg-card border border-stone-200/20 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] p-10 group will-change-transform hover:-translate-y-2 min-h-[400px]"
            >
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-serif text-charcoal tracking-wide mb-4">
                  See All Arrangements
                </h3>
                <p className="text-muted italic text-base mb-10 font-serif max-w-[200px] mx-auto">
                  Discover our full collection of bespoke floral designs.
                </p>
                
                {/* View Gallery Link with Animated Underline */}
                <Link 
                  href="/gallery" 
                  className="relative inline-block pb-1 text-xs font-bold tracking-boutique uppercase text-charcoal/60 group-hover:text-accent-hover transition-colors duration-500"
                >
                  View Gallery
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-accent-hover w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. Craftsmanship Section - Smooth Visual Anchor */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="py-24 text-center bg-heritage border-t border-stone-200/10"
      >
        <h3 className="text-3xl font-serif text-charcoal tracking-wide">Our Craftsmanship</h3>
        <p className="mt-4 text-muted italic font-serif text-lg max-w-2xl mx-auto px-4">
          Every bouquet is hand-arranged with the utmost care and attention to the poetry of nature.
        </p>
      </motion.section>
    </div>
  );
}