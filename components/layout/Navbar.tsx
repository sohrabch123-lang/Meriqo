'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const pathname = usePathname() || '';
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevents hydration mismatch and "flickering" on first load
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path));

  // If not mounted, we render a placeholder to keep layout stable
  if (!mounted) return <header className="h-24" />;

  const isDark = theme === 'dark';

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-brand-charcoal/5 backdrop-blur-md theme-sync"
      style={{ backgroundColor: 'rgb(var(--bg-main) / 0.85)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          
          {/* LOGO */}
          <Link href="/" className="z-[60] group outline-none">
            <span className="font-serif italic tracking-[0.2em] text-2xl text-brand-charcoal transition-colors duration-700">
              Saldana
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="flex items-center space-x-12">
            <nav className="hidden md:flex">
              <ul className="flex space-x-16">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className={`group relative py-1 text-[10px] uppercase transition-all duration-500 ease-in-out theme-sync
                          ${active 
                            ? 'text-brand-charcoal font-bold tracking-[0.6em]' 
                            : 'text-brand-charcoal/40 hover:text-brand-charcoal tracking-[0.4em] hover:tracking-[0.6em]'}
                        `}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* THEME TOGGLE */}
            <button 
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label="Toggle Theme"
              className="relative h-10 w-10 flex items-center justify-center rounded-full border border-brand-charcoal/10 hover:border-brand-charcoal text-brand-charcoal transition-all duration-500 z-[60] theme-sync"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2m-18.78 7.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}