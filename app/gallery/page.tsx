'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { flowerData } from '@/data/flowers';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
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
          <Link href={`/gallery/${flower.slug}`} className="group block">
            
            {/* IMAGE CONTAINER 
                - Updated: group-hover:-translate-y-3 (More lift)
                - Updated: Custom Deep Bloom Shadow on hover
            */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform 
              group-hover:-translate-y-3 
              group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]"
            >
              <Image
                src={flower.image}
                alt={flower.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              
              {/* Optional: Subtle vignette on hover for more focus */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
            </div>

            {/* TEXT SECTION */}
            <div className="mt-8 text-center">
              <div className="relative inline-block pb-1">
                <h3 className="text-2xl font-serif text-charcoal transition-colors duration-500 group-hover:text-accent-hover">
                  {flower.title}
                </h3>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-accent-hover w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
              </div>

              <p className="text-muted font-medium mt-3 tracking-boutique text-[11px] uppercase">
                {flower.category || 'Collection'} — ${flower.price}.00
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}