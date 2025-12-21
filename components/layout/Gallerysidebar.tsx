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
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: 'All', href: '/collection' },
    { name: 'Romance', href: '/collection/romance' },
    { name: 'Seasonal', href: '/collection/seasonal' },
    { name: 'Events', href: '/collection/events' }
  ];

  // Helper to prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <>
      {/* --- DESKTOP SIDEBAR (Unchanged Logic) --- */}
      <motion.aside
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="sticky top-24 self-start hidden lg:flex flex-col h-fit min-w-[320px] py-12 px-8 transition-colors duration-1000"
      >
        <nav className="flex flex-col space-y-7">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted mb-2 font-bold opacity-50">Categories</span>
          {categories.map((cat, index) => {
            const active = pathname === cat.href;
            return (
              <Link key={cat.name} href={cat.href} className={`relative pb-2 w-fit text-[13px] tracking-widest uppercase font-medium transition-colors duration-1000 ${active ? 'text-accent-hover' : 'text-charcoal hover:text-accent-hover'}`}>
                {cat.name}
                {active && <motion.span layoutId="sidebar-underline" className="absolute bottom-0 left-0 h-[1px] w-full bg-accent-hover" />}
              </Link>
            );
          })}
        </nav>

        <div className="mt-24 pt-10 border-t border-sage/20 max-w-[260px]">
          <AnimatePresence mode="wait">
            <motion.p key={currentQuote} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 1 }} className="text-xl leading-relaxed text-muted italic font-serif">
              “{quotes[currentQuote]}”
            </motion.p>
          </AnimatePresence>
          <div className="mt-6 text-[11px] tracking-[0.3em] uppercase text-accent-hover font-bold opacity-80">charlotte (1940–2005)</div>
        </div>

        <div className="mt-auto pt-20">
           <div className="w-10 h-[1px] bg-accent-hover/30 mb-4" />
           <p className="text-[9px] uppercase tracking-[0.2em] text-muted leading-loose">Saldana <br/> Member Portal <br/> Coming Soon</p>
        </div>
      </motion.aside>

      {/* --- MOBILE FLOATING TRIGGER --- */}
      <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 bg-card/80 dark:bg-black/60 backdrop-blur-xl border border-sage/30 px-8 py-4 rounded-full shadow-2xl transition-all active:scale-95"
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-charcoal font-bold">Categories</span>
          <div className="w-1.5 h-1.5 rounded-full bg-accent-hover animate-pulse" />
        </button>
      </div>

      {/* --- MOBILE BOTTOM SHEET --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-card dark:bg-[#121212] rounded-t-[3rem] z-[70] px-8 pt-12 pb-16 lg:hidden border-t border-sage/20"
            >
              {/* Drag Handle */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-sage/30 rounded-full" />
              
              <div className="flex flex-col space-y-10">
                <div className="space-y-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-bold opacity-50 block">Filter By</span>
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((cat) => (
                      <Link 
                        key={cat.name} href={cat.href} onClick={() => setIsOpen(false)}
                        className={`py-4 px-6 rounded-2xl border ${pathname === cat.href ? 'border-accent-hover bg-accent-hover/5 text-accent-hover' : 'border-sage/20 text-charcoal'} text-sm uppercase tracking-widest font-medium text-center`}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-10 border-t border-sage/10">
                  <p className="text-xl leading-relaxed text-muted italic font-serif">“{quotes[currentQuote]}”</p>
                  <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-accent-hover font-bold">charlotte (1940–2005)</div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-muted opacity-50">Saldana Member Portal Coming Soon</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}