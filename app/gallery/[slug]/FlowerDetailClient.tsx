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
      className="max-w-7xl mx-auto px-4"
    >
      {/* 1. Stylish Top Navigation */}
      <div className="flex justify-between items-center mb-12">
        <Link href="/gallery" className="text-xs tracking-[0.2em] uppercase text-stone-400 hover:text-rose-400 transition-colors">
          &larr; Collection
        </Link>
        
        <div className="flex gap-8 items-center">
          <Link href={`/gallery/${prevSlug}`} className="group flex items-center gap-2">
            <span className="text-[10px] tracking-widest uppercase text-stone-300 group-hover:text-stone-800 transition-colors">Prev</span>
          </Link>
          <div className="h-4 w-px bg-stone-200"></div>
          <Link href={`/gallery/${nextSlug}`} className="group flex items-center gap-2">
            <span className="text-[10px] tracking-widest uppercase text-stone-300 group-hover:text-stone-800 transition-colors">Next</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left: Animated Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-stone-50"
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
          <span className="text-rose-300 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
            {flower.category}
          </span>

          <h1 className="text-5xl md:text-6xl font-serif text-stone-800 leading-tight mb-2">
            {flower.title}
          </h1>

          <p className="text-stone-400 italic text-xl mb-8 font-serif">
            {flower.subtitle}
          </p>
          
          <p className="text-3xl text-stone-800 font-light mb-10">${flower.price}.00</p>
          
          <div className="h-px bg-stone-100 w-full mb-10"></div>
          
          <p className="text-stone-600 text-lg leading-relaxed mb-12 font-serif italic">
            {flower.description}
          </p>

          <button className="w-full py-5 bg-stone-800 text-white rounded-full hover:bg-rose-400 transition-all duration-500 tracking-[0.3em] uppercase text-[10px] font-bold shadow-lg active:scale-95">
            Inquire for Arrangement
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}