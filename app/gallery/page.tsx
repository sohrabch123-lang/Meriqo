'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { flowerData } from '@/data/flowers';
import Reveal from '@/components/ui/Reveal'; // Import our refined Reveal

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
    <div className="flex flex-col min-h-screen bg-heritage">

      {/* FILTER BAR - Floating Luxury look */}
      <nav className="sticky top-[80px] z-30 w-full py-6 bg-heritage/60 backdrop-blur-xl border-b border-sage/10">
        <div className="flex justify-center gap-8 md:gap-16 max-w-7xl mx-auto px-4">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`relative pb-2 text-[11px] tracking-logo uppercase transition-all duration-500 ${
                activeFilter === value
                  ? 'text-accent-hover font-bold scale-105'
                  : 'text-muted hover:text-accent-hover'
              }`}
            >
              {label}
              {activeFilter === value && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-hover"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 w-full">
        {/* We use key={activeFilter} to re-trigger the stagger wave on every filter change */}
        <div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredData.map((item, index) => (
            <Reveal 
              key={item.id} 
              // Row-Stagger Logic: Items in the same row pop up with a small delay
              delay={(index % 3) * 0.15} 
            >
              <Link href={`/gallery/${item.slug}`} className="group block">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card shadow-sm border border-sage/5">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1.5s] ease-boutique group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 dark:bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>

                {/* Text Content */}
                <div className="mt-8 text-center flex flex-col items-center">
                  <div className="relative inline-block pb-1">
                    <h3 className="text-2xl font-serif text-charcoal group-hover:text-accent-hover transition-colors">
                      {item.title}
                    </h3>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent-hover transition-all duration-700 ease-boutique group-hover:w-full" />
                  </div>

                  <p className="mt-3 text-[10px] tracking-boutique uppercase text-muted">
                    {item.type} — ${item.price}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}