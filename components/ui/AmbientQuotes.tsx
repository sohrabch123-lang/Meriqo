'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fragments = [
  { text: "The interplay of shadow and grain.", lang: "English" },
  { text: "Gra cieni i ziarna.", lang: "Polish" },
  { text: "بازی سایه و دانه", lang: "Farsi" },
  { text: "阴影与纹理的交织", lang: "Chinese" },
  { text: "L'interplay d'ombre et de grain.", lang: "French" }
];

export default function AmbientQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % fragments.length);
    }, 10000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-16 flex flex-col justify-center items-start border-l border-brand-charcoal/10 pl-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 10, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: -10, filter: 'blur(8px)' }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col gap-1"
        >
          <p className="text-[11px] leading-relaxed tracking-[0.2em] text-brand-charcoal/50 font-serif italic max-w-[280px]">
            "{fragments[index].text}"
          </p>
          <span className="text-[7px] uppercase tracking-[0.4em] text-brand-charcoal/20">
            {fragments[index].lang}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}