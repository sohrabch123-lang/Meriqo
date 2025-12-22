'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative h-[80vh] w-full overflow-hidden bg-brand-charcoal">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/footer-bg.jpg" 
          alt="The Archive Entrance" 
          fill 
          className="object-cover opacity-40 grayscale transition-transform duration-[10s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.8em] text-brand-accent">
            Deep Dive
          </span>
          
          <Link href="/gallery" className="group relative inline-block">
            <h2 className="font-serif text-6xl md:text-9xl italic tracking-tighter text-heritage transition-colors duration-500 group-hover:text-brand-accent">
              The Archive
            </h2>
            {/* Animated Underline */}
            <div className="mt-4 h-[1px] w-0 bg-brand-accent transition-all duration-700 group-hover:w-full" />
          </Link>
          
          <p className="mt-12 max-w-xs text-[11px] leading-loose tracking-[0.2em] uppercase text-heritage/40">
            A curated selection of works from 2020 — 2024. London / Paris / Milan.
          </p>
        </motion.div>

        {/* Bottom Credits */}
        <div className="absolute bottom-12 w-full px-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-heritage/5 pt-12">
          <p className="text-[9px] tracking-widest text-heritage/20 uppercase">
            &copy; 2024 Saldana Studio. All rights reserved.
          </p>
          <div className="flex gap-12 text-[9px] tracking-widest text-heritage/40 uppercase font-bold">
            <Link href="/legal" className="hover:text-brand-accent transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-brand-accent transition-colors">Privacy</Link>
            <Link href="#top" className="hover:text-brand-accent transition-colors italic font-serif capitalize">Back to Top</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}