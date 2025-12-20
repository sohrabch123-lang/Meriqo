'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const quotes = [
  "Never sit idle; our hands were meant for creation. I believe in honoring God’s time through craft, one stem at a time.",
  "If you cannot find a positive word for another, let there be silence. We choose to speak through the beauty of our blooms."
];

export default function Sidebar() {
  const pathname = usePathname() || '';
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setIsFading(false);
      }, 800);
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
    /* Changed 'justify-between' to 'justify-start' to pull everything up */
    <div className="flex flex-col h-full justify-start pt-24 pb-12 px-8 bg-heritage">
      
      {/* 1. Navigation Section */}
      <div>
        <nav className="flex flex-col space-y-7">
          {categories.map((cat) => {
            const active = pathname === cat.href;
            return (
              <Link
                key={cat.name}
                href={cat.href}
                className={`relative pb-2 w-fit text-[13px] tracking-boutique uppercase font-medium will-change-transform transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group
                  ${active ? 'text-accent-hover' : 'text-charcoal hover:text-accent-hover hover:translate-x-1'}
                `}
              >
                {cat.name}
                <span 
                  className={`absolute bottom-0 left-0 h-[1px] bg-accent-hover transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${active ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 2. Quote Section: 
          - Changed 'mt-20' to 'mt-16' to sit closer to the buttons.
          - Removed the border-t or kept it subtle for a cleaner transition.
      */}
      <div className="mt-16 pt-8 border-t border-stone-200/30 max-w-[240px]">
        <p className={`text-lg md:text-xl leading-relaxed text-muted italic font-serif transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          "{quotes[currentQuote]}"
        </p>
        
        <div className="mt-4 text-[11px] tracking-boutique uppercase text-brand-rose font-bold">
          charlotte (1940–2005)
        </div>
      </div>

    </div>
  );
}