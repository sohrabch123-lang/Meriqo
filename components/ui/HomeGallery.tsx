'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomeGallery() {
  return (
    // REDUCED: Changed pb-32 to pb-10 to remove the huge gap at the bottom
    <section className="bg-heritage pb-10">
      
      {/* 1. THE CINEMATIC BLEED */}
      <div className="relative h-[70vh] w-full mb-24 md:mb-32 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="relative h-full w-full"
        >
          <Image 
            src="/images/image4.jpg" 
            alt="Cinematic Scale" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
        <div className="absolute bottom-12 left-12 text-heritage uppercase text-[9px] tracking-[0.6em]">
          Scale // 001 — Full Bleed
        </div>
      </div>

      {/* 2. THE OFFSET DUET */}
      {/* REDUCED: Changed mb-48 to mb-32 */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full md:w-1/2 aspect-[4/5] relative bg-brand-charcoal/5"
        >
          <Image 
            src="/images/image22.jpeg" 
            alt="Portrait Study" 
            fill 
            className="object-cover"
          />
        </motion.div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-24">
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-charcoal/30 font-bold mb-4">Observation 042</p>
          <p className="font-serif italic text-xl text-brand-charcoal/60 max-w-xs leading-relaxed">
            "The beauty of the fragment is that it suggests the whole without revealing it."
          </p>
        </div>
      </div>

      {/* 3. THE FOCUS POINT */}
      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md aspect-square relative shadow-2xl mb-8"
        >
          <Image 
            src="/images/image16.jpeg" 
            alt="Intimate Detail" 
            fill 
            className="object-cover grayscale"
          />
        </motion.div>
        {/* This vertical line now acts as a pointer directly to your Philosophy text */}
        <div className="h-16 w-[1px] bg-brand-accent/30" />
      </div>

    </section>
  );
}