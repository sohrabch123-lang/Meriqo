'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname() || '';

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
    <header className="sticky top-0 z-50 bg-heritage/80 backdrop-blur-md border-b border-stone-200/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* PROMINENT LOGO:
              - Changed text-brand-rose to text-charcoal for immediate impact.
              - Increased weight to font-medium.
              - Hover now "blooms" into brand-rose.
          */}
          <Link 
            href="/" 
            className="text-3xl font-serif font-medium tracking-[0.25em] text-charcoal hover:text-brand-rose transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform hover:-translate-y-[1px]"
          >
            Saldana
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-10 text-[11px] font-semibold tracking-boutique uppercase text-charcoal/80">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                
                return (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className={`relative pb-2 group block will-change-transform transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                        ${active ? 'text-accent-hover' : 'hover:text-accent-hover hover:-translate-y-[3px]'}
                      `}
                    >
                      {link.name}
                      
                      <span 
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-accent-hover transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                          ${active ? 'w-full' : 'w-0 group-hover:w-full'}
                        `}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}