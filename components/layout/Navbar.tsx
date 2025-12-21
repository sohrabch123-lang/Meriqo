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
          
          {/* --- LOGO SECTION --- */}
          <Link 
            href="/" 
            className="z-[60] outline-none group flex items-center"
            aria-label="Saldana Home"
          >
            <svg 
              width="180" 
              height="35" 
              viewBox="0 0 180 35" 
              className="text-charcoal dark:text-pearl group-hover:text-accent-hover transition-colors duration-700 ease-in-out"
            >
              {/* Elegant Serif Text */}
              <text 
                x="0" 
                y="25" 
                className="font-serif italic tracking-[0.15em] text-[24px]"
                style={{ fontFamily: 'Georgia, serif' }} 
                fill="currentColor"
              >
                Saldana
              </text>
              
              {/* The Boutique "Floral Dot" - it changes color on hover slightly faster for a 'sparkle' effect */}
              <circle 
                cx="125" 
                cy="20" 
                r="2" 
                className="fill-accent-hover opacity-0 group-hover:opacity-100 transition-all duration-500" 
              />
            </svg>
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

            {/* THE BOUTIQUE THEME TOGGLE */}
            <button 
              onClick={toggleTheme}
              className="relative h-11 w-11 flex items-center justify-center rounded-full border border-sage/20 bg-transparent hover:border-accent-hover/40 text-charcoal dark:text-pearl transition-all duration-1000 group outline-none z-[60]"
              aria-label="Toggle Dark Mode"
            >
              <div className="absolute inset-0 rounded-full bg-accent-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <AnimatePresence mode="wait">
                {dark ? (
                  <motion.svg
                    key="sun"
                    initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    width="22" height="22" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity="0.15" />
                    <circle cx="12" cy="12" r="3.5" />
                    <line x1="12" y1="5" x2="12" y2="2" />
                    <line x1="12" y1="22" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="2" y2="12" />
                    <line x1="22" y1="12" x2="19" y2="12" />
                    <line x1="7.05" y1="7.05" x2="4.93" y2="4.93" />
                    <line x1="19.07" y1="19.07" x2="16.95" y2="16.95" />
                    <line x1="7.05" y1="16.95" x2="4.93" y2="19.07" />
                    <line x1="19.07" y1="4.93" x2="16.95" y2="7.05" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="moon"
                    initial={{ scale: 0.5, rotate: 45, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    width="20" height="20" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
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