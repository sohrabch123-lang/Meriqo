'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    /* Standardized transition and theme-aware background */
    <div className="min-h-screen bg-heritage flex flex-col items-center justify-center px-6 py-20 transition-colors duration-500 ease-in-out">
      
      {/* The Image Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        /* Added a soft border for dark mode definition */
        className="relative w-full max-w-2xl aspect-[4/5] overflow-hidden rounded-sm shadow-md border border-sage/10 transition-all duration-500"
      >
        <Image 
          src="/images/kathrin-portrait.png" 
          alt="Charlotte"
          fill
          className="object-cover grayscale-[20%] hover:scale-105 transition-transform duration-1000"
        />
        {/* Subtle dark mode image dimming */}
        <div className="absolute inset-0 bg-black/0 dark:bg-black/10 transition-colors duration-500" />
      </motion.div>

      {/* The Story Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-xl text-center mt-12"
      >
        {/* Theme-aware primary text */}
        <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6 transition-colors duration-500">
          My Love, The Heart Behind the Blooms
        </h1>
        
        {/* Theme-aware italic text */}
        <p className="text-lg md:text-xl text-muted font-serif italic leading-relaxed mb-8 transition-colors duration-500">
          "Flowers are more than just decoration; they are a silent language of kindness and creation."
        </p>

        {/* Story details */}
        <div className="space-y-6 text-muted/80 text-sm md:text-base leading-loose tracking-wide font-sans uppercase transition-colors duration-500">
          <p>
            Charlotte spent her life believing that hands were meant for making. 
            Every petal arranged in this gallery is a reflection of a life dedicated 
            to beauty, silence, and the glory of God's timing.
          </p>
          
          {/* Subtle Contact Info - Switched border to Sage variable */}
          <div className="pt-10 border-t border-sage/20 transition-colors duration-500">
            {/* FIXED: Removed brand-rose for accent-hover (Red/Gold system) */}
            <p className="text-accent-hover font-bold tracking-[0.3em] transition-colors duration-500">Connect With Us</p>
            <p className="mt-2 text-charcoal lowercase transition-colors duration-500">hello@saldanaflorals.com</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}