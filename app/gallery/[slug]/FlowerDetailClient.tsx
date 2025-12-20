'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function FlowerDetailClient({ flower, prevSlug, nextSlug }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} // Standardized transition
      className="max-w-7xl mx-auto px-4 py-10 transition-colors duration-500"
    >
      {/* 1. TOP NAVIGATION */}
      <div className="flex justify-between items-center mb-16">
        <Link 
          href="/gallery" 
          className="relative pb-1 group text-sm tracking-boutique uppercase text-charcoal/60 hover:text-accent-hover transition-all duration-500"
        >
          &larr; Collection
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-hover transition-all duration-500 group-hover:w-full" />
        </Link>
        
        <div className="flex gap-10 items-center">
          <Link href={`/gallery/${prevSlug}`} className="group relative pb-1 block">
            <span className="text-xs tracking-boutique uppercase text-charcoal/40 group-hover:text-accent-hover transition-colors duration-500">
              Prev
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent-hover transition-all duration-500 group-hover:w-full" />
          </Link>

          {/* Theme-aware divider */}
          <div className="h-4 w-px bg-sage/20 transition-colors duration-500"></div>

          <Link href={`/gallery/${nextSlug}`} className="group relative pb-1 block">
            <span className="text-xs tracking-boutique uppercase text-charcoal/40 group-hover:text-accent-hover transition-colors duration-500">
              Next
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent-hover transition-all duration-500 group-hover:w-full" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* LEFT: IMAGE SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-card border border-sage/5 transition-all duration-500"
        >
          <Image 
            src={flower.image} 
            alt={flower.alt} 
            fill 
            className="object-cover" 
            priority
          />
          {/* Subtle overlay for dark mode depth */}
          <div className="absolute inset-0 bg-black/0 dark:bg-black/10 transition-colors duration-500" />
        </motion.div>

        {/* RIGHT: CONTENT SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 lg:sticky lg:top-32"
        >
          {/* FIXED: NO MORE ROSE - Matches accent system (Red/Gold) */}
          <span className="text-accent-hover font-bold tracking-[0.3em] uppercase text-[11px] mb-4 block transition-colors duration-500">
            {flower.category}
          </span>

          <h1 className="text-5xl md:text-6xl font-serif text-charcoal leading-tight mb-2 transition-colors duration-500">
            {flower.title}
          </h1>

          <p className="text-muted italic text-xl mb-8 font-serif transition-colors duration-500">
            {flower.subtitle}
          </p>
          
          <p className="text-3xl text-charcoal font-light mb-10 transition-colors duration-500">${flower.price}.00</p>
          
          <div className="h-px bg-sage/20 w-full mb-10 transition-colors duration-500"></div>
          
          <p className="text-charcoal/80 text-lg leading-relaxed mb-12 font-serif italic transition-colors duration-500">
            {flower.description}
          </p>

          {/* DYNAMIC BUTTON: Auto-flips to Gold/Black in dark mode */}
          <button className="w-full py-6 bg-btn-base text-btn-content rounded-full hover:bg-btn-accent transition-all duration-500 tracking-boutique uppercase text-[12px] font-bold shadow-xl active:scale-[0.98] will-change-transform">
            Inquire for Arrangement
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}