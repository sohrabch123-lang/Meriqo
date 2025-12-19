'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const quotes = [
  "Never sit idle; our hands were meant for creation. I believe in honoring God’s time through craft, one stem at a time.",
  "If you cannot find a positive word for another, let there be silence. We choose to speak through the beauty of our blooms."
];

export default function Sidebar() {
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

  return (
    <div className="flex flex-col h-full justify-between pt-24 pb-12 px-8">
      <div>
        
        <nav className="flex flex-col space-y-5">
          {['All', 'Romance', 'Seasonal', 'Events'].map((cat) => (
            <button 
              key={cat} 
              className="text-left text-[15px] tracking-[0.3em] uppercase text-stone-800 hover:text-rose-400 hover:pl-3 transition-all duration-300 ease-in-out font-medium"
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {/* FIXED: Removed the space in "mt-20" so the margin works */}
      <div className="mt-20 border-t border-stone-100 pt-8">
        {/* FIXED: Changed "text-1g" to "text-xl md:text-2xl" for significantly bigger text */}
        <p className={`text-xl md:text-2xl leading-relaxed text-stone-600 italic font-serif transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          "{quotes[currentQuote]}"
        </p>
        <div className="mt-4 text-[15px] tracking-[0.3em] uppercase text-rose-300 font-bold">
          charlotte (1940–2005)
        </div>
      </div>
    </div>
  );
}