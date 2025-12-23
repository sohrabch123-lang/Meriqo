'use client'; 

import Reveal from '@/components/ui/Reveal';

interface GalleryLayoutProps {
  children: React.ReactNode;
}

export default function GalleryLayout({ children }: GalleryLayoutProps) {
  return (
    /* 1. Replaced 'bg-heritage' with the CSS variable to match RootLayout speed.
       2. Kept 'theme-sync' to ensure the background color fades at 0.4s. 
    */
    <div className="flex flex-col min-h-screen theme-sync bg-[rgb(var(--bg-main))] transition-colors duration-500">
      
      <main className="flex-grow w-full max-w-[1400px] mx-auto pt-40 px-6 lg:px-12">
        
        <section className="mb-20 text-left">
          {/* Photography Label */}
          <Reveal delay={0.1} y={15}>
            <span className="font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block text-brand-accent transition-colors duration-500">
              Saldana Photography
            </span>
          </Reveal>

          {/* Main Title 
              FIXED: Lowered duration from 1.4 to 0.6 to stop the color-lag.
              Replaced 'duration-700' with 'theme-sync' for perfect timing.
          */}
          <Reveal delay={0.15} duration={0.6} y={30}>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tight mb-8 theme-sync text-brand-charcoal italic">
              The Gallery
            </h1>
          </Reveal>

          {/* Minimal Divider */}
          <Reveal delay={0.3} duration={0.8} y={0}>
            <div className="h-[1px] w-24 bg-brand-charcoal/20 theme-sync" />
          </Reveal>
        </section>

        {/* PAGE CONTENT */}
        <div className="w-full pb-40">
          {children}
        </div>
      </main>

      {/* FOOTER - Synced with the overall theme transition speed */}
      <footer className="py-20 border-t border-brand-charcoal/5 text-center bg-[rgb(var(--bg-main)/0.5)] backdrop-blur-sm theme-sync">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-charcoal/40 font-medium">
          © 2025 Saldana Studio — Captured Light
        </span>
      </footer>
    </div>
  );
}