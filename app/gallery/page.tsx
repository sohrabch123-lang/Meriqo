'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { flowerData } from '@/data/flowers';

type FilterValue = 'all' | 'Florals' | 'Macramé';

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Florals', value: 'Florals' },
  { label: 'Macramé', value: 'Macramé' },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const filteredData = flowerData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <div className="flex flex-col min-h-screen bg-heritage transition-colors duration-500">

      {/* FILTER BAR */}
      <nav className="sticky top-[80px] z-30 w-full py-6 bg-heritage/60 backdrop-blur-xl border-b border-sage/10 transition-colors duration-500">
        <div className="flex justify-center gap-8 md:gap-16 max-w-7xl mx-auto px-4">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`relative pb-2 text-[11px] tracking-[0.4em] uppercase transition-all duration-300 ${
                activeFilter === value
                  ? 'text-accent-hover font-bold scale-105'
                  : 'text-muted hover:text-accent-hover'
              }`}
            >
              {label}
              {activeFilter === value && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-hover"
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <Link href={`/gallery/${item.slug}`} className="group block">
                  {/* IMAGE CONTAINER */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card shadow-sm border border-sage/5 transition-all duration-500">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 dark:bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>

                  <div className="mt-6 text-center flex flex-col items-center">
                    {/* TITLE WITH ANIMATED UNDERLINE */}
                    <div className="relative inline-block pb-1">
                      <h3 className="text-xl font-serif text-charcoal group-hover:text-accent-hover transition-colors duration-500">
                        {item.title}
                      </h3>
                      {/* THE BLOOMING LINE: Expands from center on group hover */}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent-hover transition-all duration-500 ease-out group-hover:w-full" />
                    </div>

                    <p className="mt-2 text-[10px] tracking-widest uppercase text-muted transition-colors duration-500">
                      {item.type} — ${item.price}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}