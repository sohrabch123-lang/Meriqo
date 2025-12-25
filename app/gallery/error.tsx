'use client';

import { motion } from 'framer-motion';

export default function GalleryError({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-beige">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="text-center space-y-8"
      >
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-serif text-5xl text-brand-charcoal"
          >
            Exhibition Interrupted
          </motion.h2>
        </div>
        
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-charcoal/40 max-w-sm mx-auto leading-relaxed">
          The digital archive is currently undergoing maintenance. <br /> 
          Please attempt to re-enter the gallery.
        </p>

        <button
          onClick={() => reset()}
          className="px-10 py-4 border border-brand-charcoal/10 hover:border-brand-charcoal transition-colors duration-500 uppercase text-[9px] tracking-[0.3em]"
        >
          Re-synchronize
        </button>
      </motion.div>
    </div>
  );
}