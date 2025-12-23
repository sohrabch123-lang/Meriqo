'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fragments = [
  { text: "The job of the artist is always to deepen the mystery.", author: "Francis Bacon", lang: "English" },
  { text: "大象無形。", author: "Lao Tzu", lang: "Chinese" },
  { text: "در آینه هنر بنگر، تا حقیقت دل خویش را ببینی", author: "Hafez", lang: "Farsi" },
  { text: "Die Kunst ist eine Vermittlerin des Unaussprechlichen.", author: "Johann Wolfgang von Goethe", lang: "German" },
  { text: "L'essentiel est invisible pour les yeux.", author: "Antoine de Saint-Exupéry", lang: "French" },
  { text: "千日の稽古を鍛とし、万日の稽古を練とす。", author: "Miyamoto Musashi", lang: "Japanese" },
  { text: "بصرُ العينِ مَحدود، وبصرُ القلبِ مَمدود", author: "Ali ibn Abi Talib", lang: "Arabic" },
  { text: "Świat jest wielki, ale i w kropli wody się mieści.", author: "Wisława Szymborska", lang: "Polish" },
  { text: "L'arte non è mai finita, è solo abbandonata.", author: "Leonardo da Vinci", lang: "Italian" }
];

export default function AmbientQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % fragments.length);
    }, 13000); // Increased to 13 seconds for a calmer rhythm
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[100px] w-[400px] flex flex-col justify-center items-start border-l border-brand-charcoal/10 pl-10 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 15, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: -15, filter: 'blur(10px)' }}
          transition={{ 
            duration: 1.8, // Slower, more elegant transition
            ease: [0.23, 1, 0.32, 1] 
          }}
          className="flex flex-col gap-3 w-full"
        >
          <p 
            dir="auto" 
            className="text-[13px] leading-relaxed tracking-wide text-brand-charcoal/70 font-serif italic"
          >
            "{fragments[index].text}"
          </p>
          
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-charcoal/90 font-bold">
              — {fragments[index].author}
            </span>
            <span className="text-[8px] uppercase tracking-[0.5em] text-brand-charcoal/30">
              {fragments[index].lang}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}