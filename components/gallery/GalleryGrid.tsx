'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Flower } from '@/data/flowers';

interface GalleryGridProps {
  items: Flower[];
  viewMode: 'exhibition' | 'archive';
}

export default function GalleryGrid({ items, viewMode }: GalleryGridProps) {
  return (
    <motion.div 
      layout 
      className={`grid gap-x-8 lg:gap-x-16 transition-all duration-1000 ${
        viewMode === 'exhibition' 
          ? 'grid-cols-1 md:grid-cols-12 gap-y-40' 
          : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20'
      }`}
    >
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => {
          const pos = index % 8;
          
          // Layout Logic for "Exhibition" Mode
          let colSpan = "md:col-span-6 lg:col-span-4"; 
          let aspect = "aspect-[4/5]";
          let containerClass = "theme-sync";

          if (viewMode === 'exhibition') {
            if (pos === 0) {
              colSpan = "md:col-span-12 lg:col-span-10";
              aspect = "aspect-[16/9] lg:aspect-[21/9]";
            } else if (pos === 1 || pos === 2) {
              colSpan = "md:col-span-6";
              containerClass += pos === 2 ? " md:mt-32" : ""; 
            } else if (pos === 3) {
              colSpan = "md:col-span-12 lg:col-span-8 lg:col-start-3";
              aspect = "aspect-[16/9]";
            }
          } else {
            // "Archive" Mode: Standardized Grid
            colSpan = "col-span-1";
            aspect = "aspect-square";
            containerClass = "";
          }

          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className={`${colSpan} ${containerClass} flex flex-col group relative`}
            >
              <Link href={`/gallery/${item.slug}`} className="block">
                <motion.div 
                  layout
                  className={`relative overflow-hidden rounded-sm bg-card border border-brand-charcoal/5 theme-sync ${aspect}`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-[2.5s] ease-out group-hover:scale-105"
                  />
                </motion.div>

                <div className="mt-6">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-lg text-charcoal truncate pr-4">{item.title}</h3>
                    <span className="text-[9px] text-muted/40 font-sans tracking-widest">${item.price}</span>
                  </div>
                  <p className="mt-1 text-[8px] tracking-[0.2em] uppercase text-accent-hover font-bold">{item.type}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}