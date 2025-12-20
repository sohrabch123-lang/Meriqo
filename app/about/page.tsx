'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    /* Change 1: Replaced #F9F8F6 with bg-heritage */
    <div className="min-h-screen bg-heritage flex flex-col items-center justify-center px-6 py-20">
      
      {/* The Image Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        /* Changed shadow to match boutique style */
        className="relative w-full max-w-2xl aspect-[4/5] overflow-hidden rounded-sm shadow-md"
      >
        <Image 
          src="/images/kathrin-portrait.png" 
          alt="Charlotte"
          fill
          className="object-cover grayscale-[20%] hover:scale-105 transition-transform duration-1000"
        />
      </motion.div>

      {/* The Story Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-xl text-center mt-12"
      >
        {/* Change 2: text-stone-800 to text-charcoal */}
        <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">
          My Love, The Heart Behind the Blooms
        </h1>
        
        {/* Change 3: text-stone-600 to text-muted */}
        <p className="text-lg md:text-xl text-muted font-serif italic leading-relaxed mb-8">
          "Flowers are more than just decoration; they are a silent language of kindness and creation."
        </p>

        {/* Change 4: text-stone-500 to text-muted/80 */}
        <div className="space-y-6 text-muted/80 text-sm md:text-base leading-loose tracking-wide font-sans uppercase">
          <p>
            Charlotte spent her life believing that hands were meant for making. 
            Every petal arranged in this gallery is a reflection of a life dedicated 
            to beauty, silence, and the glory of God's timing.
          </p>
          
          {/* Subtle Contact Info */}
          <div className="pt-10 border-t border-stone-200/30">
            {/* Change 5: text-rose-400 to text-brand-rose */}
            <p className="text-brand-rose font-bold tracking-[0.3em]">Connect With Us</p>
            <p className="mt-2 text-charcoal lowercase">hello@saldanaflorals.com</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}