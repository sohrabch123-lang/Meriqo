'use client'; 

import Reveal from '@/components/ui/Reveal';
import { usePathname } from 'next/navigation';

interface GalleryLayoutProps {
  children: React.ReactNode;
}

export default function GalleryLayout({ children }: GalleryLayoutProps) {
  const pathname = usePathname();
  const themeSync = "transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] theme-sync";

  // Check if we are on a detail page (e.g., /gallery/some-flower)
  const isDetailPage = pathname.split('/').length > 2;

  return (
    <div className={`flex flex-col min-h-screen bg-[rgb(var(--bg-main))] ${themeSync}`}>
      
      {/* TIGHTER PADDING: 
          On Archive: pt-12 (approx 48px) provides a clean gap under the sticky nav.
          On Detail: pt-0 because the FlowerDetailClient handles its own top spacing.
      */}
      <main className={`flex-grow w-full max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-500 ${isDetailPage ? 'pt-0' : 'pt-12'}`}>
        
        {/* HEADER SECTION: Only renders on the main Archive grid */}
        {!isDetailPage && (
          <section className="mb-16">
            <div className="flex flex-col gap-4">
              <Reveal delay={0.1} y={10}>
                <span className={`font-bold tracking-[0.5em] uppercase text-[10px] mb-2 block text-brand-accent ${themeSync}`}>
                  Saldana Photography
                </span>
              </Reveal>

              <Reveal delay={0.15} duration={0.6} y={20}>
                <h1 className={`text-6xl md:text-8xl font-serif tracking-tight text-brand-charcoal italic leading-none ${themeSync}`}>
                  The Gallery
                </h1>
              </Reveal>
            </div>

            <Reveal delay={0.3} duration={0.8} y={0}>
              <div className={`mt-10 h-[1px] w-full bg-brand-charcoal/10 ${themeSync}`} />
            </Reveal>
          </section>
        )}

        {/* PAGE CONTENT */}
        <div className="w-full pb-40">
          {children}
        </div>
      </main>

      <footer className={`py-20 border-t border-brand-charcoal/5 text-center bg-[rgb(var(--bg-main)/0.5)] backdrop-blur-sm ${themeSync}`}>
        <span className={`text-[10px] uppercase tracking-[0.4em] text-brand-charcoal/40 font-medium ${themeSync}`}>
          © 2025 Saldana Studio — Captured Light
        </span>
      </footer>
    </div>
  );
}