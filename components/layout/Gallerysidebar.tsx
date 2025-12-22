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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000); // Slightly slower for better readability
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: 'All', href: '/collection' },
    { name: 'Romance', href: '/collection/romance' },
    { name: 'Seasonal', href: '/collection/seasonal' },
    { name: 'Events', href: '/collection/events' }
  ];

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <>
      {/* --- DESKTOP SIDEBAR --- */}
      <aside className="sticky top-24 self-start hidden lg:flex flex-col h-fit min-w-[320px] py-12 px-8">
        <nav className="flex flex-col space-y-8"> {/* Increased space-y for luxury feel */}
          <span className="text-[10px] tracking-logo uppercase text-muted mb-2 font-bold opacity-40">
            Categories
          </span>
          {categories.map((cat) => {
            const active = pathname === cat.href;
            return (
              <Link 
                key={cat.name} 
                href={cat.href} 
                className={`group relative pb-2 w-fit text-[12px] tracking-boutique uppercase transition-colors duration-700 ${
                  active ? 'text-accent-hover font-bold' : 'text-charcoal/70 hover:text-accent-hover'
                }`}
              >
                {cat.name}
                {/* Fixed Underline for Active, Growing Underline for Hover */}
                {active ? (
                  <motion.span 
                    layoutId="sidebar-underline" 
                    className="absolute bottom-0 left-0 h-[1.5px] w-full bg-accent-hover" 
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent-hover/40 transition-all duration-500 ease-boutique group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Quote Section - The Soul */}
        <div className="mt-32 pt-12 border-t border-sage/20 max-w-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xl leading-relaxed text-muted italic font-serif">
                “{quotes[currentQuote]}”
              </p>
              <div className="mt-6 text-[10px] tracking-logo uppercase text-accent-hover font-bold opacity-70">
                charlotte (1940–2005)
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Portal Info */}
        <div className="mt-20">
            <div className="w-8 h-[1px] bg-accent-hover/20 mb-6" />
            <p className="text-[9px] uppercase tracking-widest text-muted/60 leading-relaxed font-medium">
              Saldana <br/> Member Portal <br/> Coming Soon
            </p>
        </div>
      </aside>

      {/* --- MOBILE FLOATING TRIGGER --- */}
      <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-4 bg-card/90 dark:bg-black/80 backdrop-blur-xl border border-sage/20 px-10 py-5 rounded-full shadow-2xl"
        >
          <span className="text-[11px] tracking-boutique uppercase text-charcoal font-bold">Menu</span>
          <div className="w-1.5 h-1.5 rounded-full bg-accent-hover animate-pulse" />
        </motion.button>
      </div>

      {/* --- MOBILE BOTTOM SHEET --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[60] lg:hidden"
            />
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-heritage dark:bg-[#0f0f0f] rounded-t-[3rem] z-[70] px-8 pt-14 pb-16 lg:hidden border-t border-sage/20"
            >
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-10 h-1 bg-sage/20 rounded-full" />
              
              <div className="flex flex-col space-y-12">
                <div className="space-y-6">
                  <span className="text-[10px] tracking-logo uppercase text-muted font-bold opacity-50 block text-center">Select Category</span>
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((cat) => (
                      <Link 
                        key={cat.name} href={cat.href} onClick={() => setIsOpen(false)}
                        className={`py-5 px-4 rounded-2xl border transition-all duration-500 text-[11px] uppercase tracking-boutique font-bold text-center ${
                          pathname === cat.href 
                          ? 'border-accent-hover bg-accent-hover/5 text-accent-hover' 
                          : 'border-sage/10 text-charcoal/60'
                        }`}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-10 border-t border-sage/10 text-center">
                  <p className="text-lg leading-relaxed text-muted italic font-serif px-4">“{quotes[currentQuote]}”</p>
                  <div className="mt-4 text-[10px] tracking-logo uppercase text-accent-hover font-bold">charlotte (1940–2005)</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}