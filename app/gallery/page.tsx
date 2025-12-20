'use client';

import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { flowerData } from '@/data/flowers';

/**
 * ANIMATION VARIANTS
 * StaggerChildren creates the "one-by-one" reveal effect.
 */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    transition: { duration: 0.3 } 
  }
};

export default function GalleryPage() {
  // 1. STATE & FILTER LOGIC
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredData = flowerData.filter((item: any) => {
    if (activeFilter === 'All') return true;
    // Ensures case-insensitivity and matches 'Florals' or 'Macramé'
    return item.type?.toLowerCase() === activeFilter.toLowerCase();
  });

  const filterOptions = ['All', 'Florals', 'Macramé'];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 2. STICKY GLASS FILTER BAR 
          - top-[80px]: This locks it right under your main Navbar
          - backdrop-blur-md: Blurs the products as they scroll behind
          - bg-heritage/80: A darker glass tint to keep the text readable
      */}
      <div className="sticky top-[80px] z-30 w-full py-8 mb-12 
                      bg-heritage/80 backdrop-blur-md border-b border-charcoal/5 
                      transition-all duration-300">
        <div className="flex justify-center gap-10 md:gap-20 max-w-7xl mx-auto px-4">
          {filterOptions.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`group relative pb-2 text-[10px] md:text-[11px] tracking-[0.4em] uppercase transition-all duration-500 ${
                activeFilter === category 
                  ? 'text-accent-hover font-bold' 
                  : 'text-muted hover:text-charcoal'
              }`}
            >
              {category}
              
              {/* Elegant Underline - Grows from center on hover/active */}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-accent-hover transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                activeFilter === category ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
              
              {/* Animated Layout Dot - Slides between buttons */}
              {activeFilter === category && (
                <motion.span 
                  layoutId="activeFilterDot"
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-hover rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 3. PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20"
        >
          <AnimatePresence mode='popLayout'>
            {filteredData.map((flower) => (
              <motion.div 
                key={flower.id} 
                layout // Smoothly slides cards into new grid positions
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link href={`/gallery/${flower.slug}`} className="group block">
                  
                  {/* IMAGE CONTAINER */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform 
                                  group-hover:-translate-y-3 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]">
                    <Image
                      src={flower.image}
                      alt={flower.title}
                      fill
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Subtle Vignette Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                  </div>

                  {/* TEXT DETAILS */}
                  <div className="mt-8 text-center">
                    <div className="relative inline-block pb-1 mb-2">
                      <h3 className="text-2xl font-serif text-charcoal transition-colors duration-500 group-hover:text-accent-hover">
                        {flower.title}
                      </h3>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-accent-hover w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                    </div>

                    <p className="text-muted font-medium tracking-boutique text-[11px] uppercase">
                      {flower.category} — ${flower.price}.00
                    </p>

                    <p className="text-[10px] tracking-[0.2em] uppercase text-accent-hover mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {flower.type === 'Macramé' ? 'View Craft' : 'View Bloom'}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}