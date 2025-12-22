'use client';
import { motion } from 'framer-motion';

export default function Reveal({ 
  children, 
  delay = 0, 
  duration = 0.9, 
  y = 15, 
  instant = false 
}: any) {
  return (
    <motion.div
      initial={instant ? false : { opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }} // Trigger slightly before it hits center
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // The "Leica" smooth curve
      }}
    >
      {children}
    </motion.div>
  );
}