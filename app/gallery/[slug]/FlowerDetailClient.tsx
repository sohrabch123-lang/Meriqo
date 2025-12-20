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
      className="max-w-7xl mx-auto px-4 py-10"
    >
      {/* 1. Stylish Top Navigation */}
      <div className="flex justify-between items-center mb-16">
        {/* Back to Collection - Now bigger and with the line */}
        <Link 
          href="/gallery" 
          className="relative pb-1 group text-sm tracking-boutique uppercase text-charcoal/60 hover:text-accent-hover transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
        >
          &larr; Collection
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-hover transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-full" />
        </Link>
        
        {/* Prev / Next - Bigger text and individual lines */}
        <div className="flex gap-10 items-center">
          <Link href={`/gallery/${prevSlug}`} className="group relative pb-1 block">
            <span className="text-xs tracking-boutique uppercase text-charcoal/40 group-hover:text-accent-hover transition-colors duration-500">
              Prev
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent-hover transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-full" />
          </Link>

          <div className="h-4 w-px bg-stone-200/40"></div>

          <Link href={`/gallery/${nextSlug}`} className="group relative pb-1 block">
            <span className="text-xs tracking-boutique uppercase text-charcoal/40 group-hover:text-accent-hover transition-colors duration-500">
              Next
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent-hover transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-full" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left: Animated Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-card"
        >
          <Image 
            src={flower.image} 
            alt={flower.alt} 
            fill 
            className="object-cover" 
            priority
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full lg:w-1/2 lg:sticky lg:top-32"
        >
          <span className="text-brand-rose font-bold tracking-[0.3em] uppercase text-[11px] mb-4 block">
            {flower.category}
          </span>

          <h1 className="text-5xl md:text-6xl font-serif text-charcoal leading-tight mb-2">
            {flower.title}
          </h1>

          <p className="text-muted italic text-xl mb-8 font-serif">
            {flower.subtitle}
          </p>
          
          <p className="text-3xl text-charcoal font-light mb-10">${flower.price}.00</p>
          
          <div className="h-px bg-stone-200/20 w-full mb-10"></div>
          
          <p className="text-charcoal/80 text-lg leading-relaxed mb-12 font-serif italic">
            {flower.description}
          </p>

          {/* 2. DYNAMIC BUTTON CONNECTION:
              - Linked to 'bg-btn-base' and 'hover:bg-btn-accent'
              - Connected to btn-content (White)
          */}
          <button className="w-full py-6 bg-btn-base text-btn-content rounded-full hover:bg-btn-accent transition-all duration-500 tracking-boutique uppercase text-[12px] font-bold shadow-xl active:scale-[0.98] will-change-transform">
            Inquire for Arrangement
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}