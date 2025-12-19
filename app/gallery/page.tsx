'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { flowerData } from '@/data/flowers';

/**
 * TEACHING MOMENT: Variants
 * We use 'as const' to tell TypeScript that the strings like "easeOut" 
 * are exact values and won't change to something invalid like "banana".
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Creates the one-by-one waterfall effect
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 }, // Start 30px lower and invisible
  visible: {
    opacity: 1,
    y: 0, // Float up to the original position
    transition: {
      duration: 0.8,
      ease: "easeOut" as const, // Fixed the TS error here
    },
  },
};

export default function GalleryPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
    >
      {flowerData.map((flower) => (
        <motion.div key={flower.id} variants={itemVariants}>
          <Link href={`/gallery/${flower.slug}`} className="group">
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
              <Image
                src={flower.image}
                alt={flower.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Subtle dark overlay on hover to make it feel premium */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>

            {/* Text Section */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-serif text-stone-800 group-hover:text-rose-400 transition-colors duration-300">
                {flower.name}
              </h3>
              <p className="text-stone-400 font-medium mt-1 tracking-widest text-xs uppercase">
                {flower.category || 'Collection'} — ${flower.price}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}