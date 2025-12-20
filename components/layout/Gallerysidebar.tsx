'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  "Never sit idle; our hands were meant for creation. I believe in honoring God’s time through craft, one stem at a time.",
  "If you cannot find a positive word for another, let there be silence. We choose to speak through the beauty of our blooms."
];

export default function Sidebar() {
  const pathname = usePathname() || '';
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: 'All', href: '/collection' },
    { name: 'Romance', href: '/collection/romance' },
    { name: 'Seasonal', href: '/collection/seasonal' },
    { name: 'Events', href: '/collection/events' }
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      /* MATCHED: 1000ms duration */
      className="sticky top-24 self-start hidden lg:flex flex-col h-fit min-w-[320px] py-12 px-8 bg-transparent transition-colors duration-1000 ease-in-out"
    >

      {/* NAVIGATION */}
      <nav className="flex flex-col space-y-7">
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted mb-2 font-bold opacity-50 transition-colors duration-1000">
          Categories
        </span>
        {categories.map((cat, index) => {
          const active = pathname === cat.href;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
            >
              <Link
                href={cat.href}
                className={`relative pb-2 w-fit text-[13px] tracking-widest uppercase font-medium group transition-colors duration-1000 ease-in-out
                  ${active ? 'text-accent-hover' : 'text-charcoal hover:text-accent-hover'}
                `}
              >
                {cat.name}
                {active && (
                  <motion.span
                    layoutId="sidebar-underline"
                    className="absolute bottom-0 left-0 h-[1px] w-full bg-accent-hover transition-colors duration-1000"
                  />
                )}
                {!active && (
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent-hover transition-all duration-500 group-hover:w-full" />
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* QUOTE SECTION - Increased font size and container width */}
      <div className="mt-24 pt-10 border-t border-sage/20 max-w-[260px] transition-colors duration-1000 ease-in-out">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentQuote}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            /* UPDATED: Increased from text-base to text-xl */
            className="text-xl leading-relaxed text-muted italic font-serif transition-colors duration-1000 ease-in-out"
          >
            “{quotes[currentQuote]}”
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          /* UPDATED: Slightly larger attribution name for balance (text-[11px]) */
          className="mt-6 text-[11px] tracking-[0.3em] uppercase text-accent-hover font-bold transition-colors duration-1000 opacity-80"
        >
          charlotte (1940–2005)
        </motion.div>
      </div>

      {/* FOOTER PLACEHOLDER */}
      <div className="mt-auto pt-20">
         <div className="w-10 h-[1px] bg-accent-hover/30 mb-4 transition-colors duration-1000" />
         <p className="text-[9px] uppercase tracking-[0.2em] text-muted leading-loose transition-colors duration-1000">
           Saldana <br/> Member Portal <br/> Coming Soon
         </p>
      </div>

    </motion.aside>
  );
}