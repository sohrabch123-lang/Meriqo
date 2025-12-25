'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION, LAYOUT, BRAND } from '@/lib/constants';

export default function Navbar() {
  const pathname = usePathname() || '';
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
  ];

  // Using the LAYOUT constant to reserve the correct amount of space during SSR
  if (!mounted) return <header style={{ height: LAYOUT.NAV_HEIGHT }} />;

  const isDark = theme === 'dark';

  return (
    <>
      <header 
        className={`sticky top-0 z-[100] w-full border-b border-brand-charcoal/10 backdrop-blur-md ${ANIMATION.THEME_SYNC}`}
        style={{ 
          backgroundColor: 'rgb(var(--bg-main) / 0.85)', 
          height: LAYOUT.NAV_HEIGHT, // Using our master constant
          isolation: 'isolate' 
        }}
      >
        <div className={`max-w-[${LAYOUT.MAX_WIDTH}] mx-auto ${LAYOUT.SAFE_PADDING} h-full`}>
          <div className="flex justify-between items-center h-full">
            
            {/* LOGO: Pulling from BRAND constant */}
            <Link href="/" className="z-[110] outline-none group">
              <span className={`font-serif italic tracking-[0.2em] text-2xl text-brand-charcoal ${ANIMATION.THEME_SYNC}`}>
                {BRAND.NAME}
              </span>
            </Link>

            <div className="flex items-center gap-8">
              {/* DESKTOP NAV */}
              <nav className="hidden md:block">
                <ul className="flex space-x-12 lg:space-x-16">
                  {navLinks.map((link) => {
                    const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                    return (
                      <li key={link.name} className="relative flex flex-col items-center">
                        <Link 
                          href={link.href} 
                          className={`text-[10px] uppercase transition-all ${ANIMATION.THEME_SYNC}
                            ${active 
                              ? 'text-brand-charcoal font-bold' 
                              : 'text-brand-charcoal/40 hover:text-brand-charcoal'}
                            tracking-[0.4em]
                          `}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                {/* THEME TOGGLE */}
                <button 
                  onClick={() => setTheme(isDark ? 'light' : 'dark')}
                  className={`relative h-10 w-10 flex items-center justify-center rounded-full border border-brand-charcoal/10 hover:border-brand-charcoal text-brand-charcoal ${ANIMATION.THEME_SYNC} z-[110]`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={isDark ? 'sun' : 'moon'}
                      initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
                      transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
                    >
                      {isDark ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2m-18.78 7.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>

                {/* MOBILE MENU TOGGLE */}
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden z-[110] flex flex-col justify-center items-center w-10 h-10 gap-2 outline-none"
                >
                  <motion.span 
                    animate={isOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
                    className={`w-6 h-[1px] bg-brand-charcoal ${ANIMATION.THEME_SYNC}`}
                  />
                  <motion.span 
                    animate={isOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
                    className={`w-6 h-[1px] bg-brand-charcoal ${ANIMATION.THEME_SYNC}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
            className="fixed inset-0 z-[90] bg-[rgb(var(--bg-main))] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05, duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
                >
                  <Link 
                    href={link.href} 
                    className={`text-4xl font-serif italic tracking-widest transition-colors ${ANIMATION.THEME_SYNC}
                      ${pathname === link.href ? 'text-brand-charcoal' : 'text-brand-charcoal/30'}
                    `}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}