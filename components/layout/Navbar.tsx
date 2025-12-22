'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname() || '';
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path));

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-brand-charcoal/5 backdrop-blur-md theme-sync"
      style={{ backgroundColor: 'rgb(var(--bg-main) / 0.85)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          
          {/* LOGO */}
          <Link href="/" className="z-[60] group outline-none">
            <span className="font-serif italic tracking-[0.2em] text-2xl text-charcoal transition-colors duration-700 group-hover:text-charcoal dark:group-hover:text-white">
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
                        className={`group relative py-1 text-[10px] uppercase transition-all duration-700 ease-in-out
                          ${active 
                            ? 'text-charcoal dark:text-white font-bold tracking-[0.6em]' 
                            : 'text-charcoal/40 dark:text-muted/40 hover:text-charcoal dark:hover:text-white tracking-[0.4em] hover:tracking-[0.6em]'}
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
              onClick={toggleTheme}
              className="relative h-10 w-10 flex items-center justify-center rounded-full border border-brand-charcoal/10 hover:border-charcoal dark:hover:border-white text-charcoal hover:text-charcoal dark:hover:text-white transition-all duration-700 z-[60]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={dark ? 'sun' : 'moon'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {dark ? (
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