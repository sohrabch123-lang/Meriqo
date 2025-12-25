'use client'; 

import { memo } from 'react';
import { motion, AnimatePresence, BezierDefinition } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Flower } from '@/data/flowers';

interface GalleryGridProps {
  items: Flower[];
  viewMode: 'exhibition' | 'archive';
}

const GalleryGrid = memo(function GalleryGrid({ items, viewMode }: GalleryGridProps) {
  const boutiqueEase: BezierDefinition = [0.23, 1, 0.32, 1];
  
  // THE FIX: We remove the 'all' or 'layout' properties from CSS transitions.
  // We only want Tailwind to handle the COLOR fade. 
  // Framer Motion handles the movement.
  const colorSync = "transition-colors duration-700 ease-[var(--ease-boutique)]";

  return (
    <motion.div 
      layout
      /* Removed themeSync here to prevent conflict with layout animation */
      className={`grid gap-x-8 lg:gap-x-16 ${
        viewMode === 'exhibition' 
          ? 'grid-cols-1 md:grid-cols-12 gap-y-40' 
          : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20'
      }`}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {items.map((item, index) => {
          const pos = index % 8;
          
          let colSpan = "md:col-span-6 lg:col-span-4"; 
          let aspect = "aspect-[4/5]";
          let extraClasses = "";

          if (viewMode === 'exhibition') {
            if (pos === 0) {
              colSpan = "md:col-span-12 lg:col-span-10";
              aspect = "aspect-[16/9] lg:aspect-[21/9]";
            } else if (pos === 1 || pos === 2) {
              colSpan = "md:col-span-6";
              extraClasses = pos === 2 ? " md:mt-32" : ""; 
            } else if (pos === 3) {
              colSpan = "md:col-span-12 lg:col-span-8 lg:col-start-3";
              aspect = "aspect-[16/9]";
            }
          } else {
            colSpan = "col-span-1";
            aspect = "aspect-square";
          }

          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ 
                duration: 0.7, 
                ease: boutiqueEase,
                // layout: { duration: 0.7, ease: boutiqueEase } // This is good
              }}
              className={`${colSpan} ${extraClasses} flex flex-col group relative transform-gpu`}
            >
              <Link href={`/gallery/${item.slug}`} className="block outline-none">
                <motion.div 
                  layout
                  /* Only transition COLORS here, let Framer handle the aspect ratio/layout change */
                  className={`relative overflow-hidden rounded-sm bg-card border border-brand-charcoal/5 ${aspect} ${colorSync}`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale-[10%] group-hover:grayscale-0 transition-transform duration-[2s] ease-out group-hover:scale-105"
                  />
                </motion.div>

                <motion.div layout className="mt-6">
                  <div className="flex justify-between items-baseline">
                    <h3 className={`font-serif text-lg text-brand-charcoal truncate pr-4 ${colorSync}`}>
                      {item.title}
                    </h3>
                    <span className={`text-[9px] text-brand-charcoal/40 font-sans tracking-widest ${colorSync}`}>
                      ${item.price}
                    </span>
                  </div>
                  <p className={`mt-1 text-[8px] tracking-[0.2em] uppercase text-brand-accent font-bold ${colorSync}`}>
                    {item.type}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
});

export default GalleryGrid;