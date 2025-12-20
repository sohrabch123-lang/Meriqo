'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname() || '';
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDark(true);
    }
  };

  const isActive = (path: string): boolean => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
  ];

  return (
    /* MATCHED: Changed to duration-1000 ease-in-out for seamless theme morphing */
    <header className="sticky top-0 z-50 bg-heritage/80 dark:bg-black/80 backdrop-blur-md border-b border-sage/20 transition-all duration-1000 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO: Slowed down the color transition to match the luxury feel */}
          <Link 
            href="/" 
            className="text-3xl font-serif font-medium tracking-[0.25em] text-charcoal hover:text-accent-hover transition-colors duration-1000 ease-in-out"
          >
            Saldana
          </Link>

          <div className="flex items-center space-x-12">
            <nav>
              <ul className="flex space-x-10 text-[11px] font-semibold tracking-boutique uppercase text-charcoal/80 transition-colors duration-1000 ease-in-out">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        /* Links now shift colors smoothly with the theme */
                        className={`relative pb-2 group block transition-all duration-1000 ease-in-out
                          ${active ? 'text-accent-hover' : 'text-charcoal/80 hover:text-accent-hover hover:-translate-y-[2px]'}
                        `}
                      >
                        {link.name}
                        <span className={`absolute bottom-0 left-0 h-[1.5px] bg-accent-hover transition-all duration-500 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* TOGGLE BUTTON: Matched to 1000ms rhythm */}
            <button 
              onClick={toggleTheme}
              className="relative h-10 w-10 flex items-center justify-center rounded-full border border-sage/30 bg-card/30 hover:bg-accent-hover/10 text-charcoal dark:text-pearl transition-all duration-1000 ease-in-out shadow-sm outline-none"
              aria-label="Toggle Dark Mode"
            >
              <AnimatePresence mode="wait">
                {dark ? (
                  <motion.svg
                    key="sun"
                    initial={{ scale: 0, rotate: -90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0, rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="moon"
                    initial={{ scale: 0, rotate: 90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0, rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}