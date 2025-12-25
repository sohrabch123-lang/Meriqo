'use client';

import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Flower } from '@/data/flowers';
import { ANIMATION } from '@/lib/constants';

interface GalleryGridProps {
  items: Flower[];
  viewMode: 'exhibition' | 'archive';
}

const GalleryGrid = memo(function GalleryGrid({ items, viewMode }: GalleryGridProps) {
  const boutiqueEase = ANIMATION.EASE_ARRAY;
  const textSync = "transition-colors duration-700 ease-[var(--ease-boutique)] text-sync";

  return (
    <motion.div 
      layout="position"
      role="list" // SEO: Tells Google this is a list
      aria-label="Photography Gallery"
      className={`grid gap-x-8 lg:gap-x-16 ${
        viewMode === 'exhibition' 
          ? 'grid-cols-1 md:grid-cols-12 gap-y-40' 
          : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-24'
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
              colSpan = "md:col-span-12 lg:col-span-10 lg:col-start-2";
              aspect = "aspect-[16/9] lg:aspect-[21/9]";
            } else if (pos === 1 || pos === 2) {
              colSpan = "md:col-span-6 lg:col-span-5";
              extraClasses = pos === 2 ? " md:mt-40 lg:col-start-7" : "lg:col-start-2"; 
            } else if (pos === 3) {
              colSpan = "md:col-span-12 lg:col-span-8 lg:col-start-3";
              aspect = "aspect-[16/9]";
            }
          } else {
            colSpan = "col-span-1";
            aspect = "aspect-[4/5]";
          }

          return (
            <motion.div
              key={item.id}
              role="listitem" // SEO: Tells Google this is a list item
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ 
                duration: ANIMATION.DURATION, 
                ease: boutiqueEase 
              }}
              className={`${colSpan} ${extraClasses} flex flex-col group relative transform-gpu`}
            >
              <Link href={`/gallery/${item.slug}`} className="block outline-none">
                <motion.div 
                  layout="position"
                  className={`relative overflow-hidden rounded-sm bg-brand-charcoal/5 border border-brand-charcoal/10 
                  ${aspect} max-h-[75vh]`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-[1s] ease-out group-hover:scale-105"
                  />
                </motion.div>

                <motion.div layout="position" className="mt-8">
                  <div className={`flex justify-between items-baseline border-b border-brand-charcoal/5 pb-4 ${textSync}`}>
                    <h3 className={`font-serif text-xl text-brand-charcoal truncate pr-4 ${textSync}`}>
                      {item.title}
                    </h3>
                    <span className={`text-[10px] text-brand-charcoal/40 font-sans tracking-[0.2em] ${textSync}`}>
                      {item.price}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3">
                    <p className={`text-[9px] tracking-[0.3em] uppercase text-brand-accent font-bold ${textSync}`}>
                      {item.type}
                    </p>
                    <p className={`text-[8px] tracking-widest text-brand-charcoal/20 uppercase ${textSync}`}>
                      Ref. 00{index + 1}
                    </p>
                  </div>
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