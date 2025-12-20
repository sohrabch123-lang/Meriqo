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
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex flex-col h-full justify-start pt-24 pb-12 px-8 bg-heritage"
    >

      {/* NAVIGATION */}
      <nav className="flex flex-col space-y-7">
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
                className={`relative pb-2 w-fit text-[13px] tracking-boutique uppercase font-medium group
                  ${active ? 'text-accent-hover' : 'text-charcoal hover:text-accent-hover'}
                `}
              >
                {cat.name}

                {/* Active / hover underline */}
                {active && (
                  <motion.span
                    layoutId="sidebar-underline"
                    className="absolute bottom-0 left-0 h-[1px] w-full bg-accent-hover"
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

      {/* QUOTE */}
      <div className="mt-16 pt-8 border-t border-stone-200/30 max-w-[240px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentQuote}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-lg md:text-xl leading-relaxed text-muted italic font-serif"
          >
            “{quotes[currentQuote]}”
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-[11px] tracking-boutique uppercase text-brand-rose font-bold"
        >
          charlotte (1940–2005)
        </motion.div>
      </div>

    </motion.aside>
  );
}
