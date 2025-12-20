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
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 bg-heritage/80 dark:bg-black/80 backdrop-blur-md border-b border-sage/20 transition-all duration-1000 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO - Scaled slightly for mobile */}
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-serif font-medium tracking-[0.2em] text-charcoal dark:text-pearl transition-colors duration-1000 ease-in-out z-[60]"
          >
            Saldana
          </Link>

          {/* RIGHT SIDE CONTROLS */}
          <div className="flex items-center space-x-5 md:space-x-12">
            
            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-10 text-[11px] font-semibold tracking-[0.3em] uppercase text-charcoal/80 transition-colors duration-1000">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className={`relative pb-2 group block transition-all duration-1000 
                          ${active ? 'text-accent-hover' : 'text-charcoal/80 dark:text-pearl/70 hover:text-accent-hover'}
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

            {/* THE BOUTIQUE THEME TOGGLE (Refined Geometry) */}
            <button 
              onClick={toggleTheme}
              className="relative h-11 w-11 flex items-center justify-center rounded-full border border-sage/20 bg-transparent hover:border-accent-hover/40 text-charcoal dark:text-pearl transition-all duration-1000 group outline-none z-[60]"
              aria-label="Toggle Dark Mode"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-full bg-accent-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <AnimatePresence mode="wait">
                {dark ? (
                  <motion.svg
                    key="sun"
                    initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.15" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 5V3M12 21v-2M5 12H3m18 0h-2M7.05 7.05L5.64 5.64m12.72 12.72-1.41-1.41M7.05 16.95l-1.41 1.41m12.72-12.72-1.41-1.41" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="moon"
                    initial={{ scale: 0.5, rotate: 45, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="currentColor" fillOpacity="0.1" />
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>

            {/* MOBILE HAMBURGER BUTTON */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[60] outline-none"
            >
              <span className={`block w-6 h-0.5 bg-charcoal dark:bg-pearl transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-charcoal dark:bg-pearl transition-all duration-500 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-charcoal dark:bg-pearl transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 w-full h-screen bg-heritage dark:bg-[#0A0B09] flex flex-col items-center justify-center space-y-10 md:hidden z-[50] transition-colors duration-1000"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl tracking-[0.3em] uppercase font-serif transition-colors duration-500 ${isActive(link.href) ? 'text-accent-hover' : 'text-charcoal/60 dark:text-pearl/60'}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}