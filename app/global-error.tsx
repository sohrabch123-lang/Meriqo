'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Note: You must manually import your global CSS here 
// because global-error bypasses your root layout.
import './globals.css'; 

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In 2025, we log this to a studio dashboard (or just console for now)
    console.error("CRITICAL_SYSTEM_ERROR:", error);
  }, [error]);

  return (
    <html lang="en" className="selection:bg-brand-accent/30">
      <body className="bg-brand-beige antialiased overflow-hidden">
        <main className="relative h-screen w-full flex items-center justify-center p-8">
          
          {/* Subtle Studio Branding Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
            <h1 className="text-[20vw] font-serif leading-none uppercase">Studio</h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10 text-center max-w-2xl"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-brand-accent font-bold mb-6 block">
              System Critical
            </span>
            
            <h2 className="font-serif text-4xl md:text-6xl text-brand-charcoal mb-6 leading-tight">
              The Architecture <br /> encountered a break.
            </h2>
            
            <p className="font-sans text-sm text-brand-charcoal/60 mb-12 max-w-md mx-auto leading-relaxed uppercase tracking-widest">
              A core process has failed. We suggest refreshing the environment to restore the collection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => reset()}
                className="group relative px-12 py-4 bg-brand-charcoal text-white overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10 text-[10px] tracking-[0.3em] uppercase">
                  Attempt Recovery
                </span>
                <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="text-[10px] tracking-[0.3em] uppercase border-b border-brand-charcoal/20 pb-1 hover:border-brand-charcoal transition-colors"
              >
                Return to Entry
              </button>
            </div>
          </motion.div>
        </main>
      </body>
    </html>
  );
}