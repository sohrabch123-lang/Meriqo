'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function FlowerDetailClient({ flower, prevSlug, nextSlug }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }} 
      className="max-w-7xl mx-auto px-4 py-6 md:py-10 transition-colors duration-1000 ease-in-out"
    >
      {/* 1. TOP NAVIGATION - Responsive Capsule Design */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 md:mb-16">
        
        {/* Collection Button - FIXED: Now in a matching prominent pill style */}
        <Link 
          href="/gallery" 
          className="group flex items-center bg-sage/10 dark:bg-white/5 backdrop-blur-sm rounded-full px-5 py-2.5 border border-sage/20 transition-all duration-1000 hover:border-brand-rose/40"
        >
          <span className="text-[11px] md:text-xs tracking-boutique uppercase text-charcoal font-medium group-hover:text-brand-rose transition-colors duration-1000">
            &larr; Collection
          </span>
        </Link>
        
        {/* Prev/Next Capsule Controls */}
        <div className="flex items-center bg-sage/10 dark:bg-white/5 backdrop-blur-sm rounded-full px-2 py-1.5 border border-sage/20 transition-all duration-1000">
          
          <Link href={`/gallery/${prevSlug}`} className="group px-6 py-2 transition-all">
            <span className="text-[10px] md:text-xs tracking-boutique uppercase text-charcoal/80 group-hover:text-brand-rose transition-colors duration-1000">
              Prev
            </span>
          </Link>

          {/* Vertical Separator */}
          <div className="h-4 w-[1.5px] bg-charcoal/10 dark:bg-white/20 transition-colors duration-1000"></div>

          <Link href={`/gallery/${nextSlug}`} className="group px-6 py-2 transition-all">
            <span className="text-[10px] md:text-xs tracking-boutique uppercase text-charcoal/80 group-hover:text-brand-rose transition-colors duration-1000">
              Next
            </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* LEFT: IMAGE SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-card border border-sage/5 transition-all duration-1000 ease-in-out"
        >
          <Image 
            src={flower.image} 
            alt={flower.alt} 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-black/0 dark:bg-black/10 transition-colors duration-1000 ease-in-out" />
        </motion.div>

        {/* RIGHT: CONTENT SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 lg:sticky lg:top-32"
        >
          <span className="text-brand-rose font-bold tracking-[0.3em] uppercase text-[10px] md:text-[11px] mb-4 block transition-colors duration-1000">
            {flower.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-serif text-charcoal leading-tight mb-4 transition-colors duration-1000">
            {flower.title}
          </h1>

          <p className="text-muted italic text-lg md:text-xl mb-8 font-serif transition-colors duration-1000">
            {flower.subtitle}
          </p>
          
          <p className="text-2xl md:text-3xl text-charcoal font-light mb-8 md:mb-10 transition-colors duration-1000">
            ${flower.price}.00
          </p>
          
          <div className="h-px bg-sage/20 w-full mb-8 md:mb-10 transition-colors duration-1000"></div>
          
          <p className="text-charcoal/80 text-base md:text-lg leading-relaxed mb-10 md:mb-12 font-serif italic transition-colors duration-1000">
            {flower.description}
          </p>

          <button className="w-full py-5 md:py-6 bg-btn-base text-btn-content rounded-full hover:bg-btn-accent transition-all duration-1000 ease-in-out tracking-boutique uppercase text-[11px] md:text-[12px] font-bold shadow-xl active:scale-[0.98] will-change-transform">
            Inquire for Arrangement
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}