'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-center px-6 py-20">
      
      {/* The Image Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-2xl aspect-[4/5] overflow-hidden rounded-sm shadow-sm"
      >
        <Image 
          src="/images/kathrin-portrait.png" // Change to her photo
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
        <h1 className="text-4xl md:text-6xl font-serif text-stone-800 mb-6">
         My Love , The Heart Behind the Blooms
        </h1>
        
        <p className="text-lg md:text-xl text-stone-600 font-serif italic leading-relaxed mb-8">
          "Flowers are more than just decoration; they are a silent language of kindness and creation."
        </p>

        <div className="space-y-6 text-stone-500 text-sm md:text-base leading-loose tracking-wide font-sans uppercase">
          <p>
            Charlotte spent her life believing that hands were meant for making. 
            Every petal arranged in this gallery is a reflection of a life dedicated 
            to beauty, silence, and the glory of God's timing.
          </p>
          
          {/* Subtle Contact Info */}
          <div className="pt-10 border-t border-stone-200">
            <p className="text-rose-400 font-bold tracking-[0.3em]">Connect With Us</p>
            <p className="mt-2 text-stone-800 lowercase">hello@saldanaflorals.com</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}