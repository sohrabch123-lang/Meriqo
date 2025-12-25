'use client'; 

import Reveal from '@/components/ui/Reveal';
import { usePathname } from 'next/navigation';

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDetailPage = pathname.split('/').length > 2;

  return (
    /* We removed themeSync from here. The CSS 'body' tag takes over. */
    <div className="flex flex-col min-h-screen transform-gpu">
      
      <main className={`flex-grow w-full max-w-[1400px] mx-auto px-6 lg:px-12 ${isDetailPage ? 'pt-0' : 'pt-12'}`}>
        
        {!isDetailPage && (
          <section className="mb-16">
            <div className="flex flex-col gap-4">
              <Reveal delay={0.1} y={10}>
                <span className="font-bold tracking-[0.5em] uppercase text-[10px] mb-2 block text-brand-accent">
                  Saldana Photography
                </span>
              </Reveal>

              <Reveal delay={0.15} duration={0.6} y={20}>
                {/* Simplified: No transition classes needed on text */}
                <h1 className="text-6xl md:text-8xl font-serif tracking-tight italic leading-none">
                  The Gallery
                </h1>
              </Reveal>
            </div>

            <Reveal delay={0.3} duration={0.8} y={0}>
              <div className="mt-10 h-[1px] w-full bg-brand-charcoal/10" />
            </Reveal>
          </section>
        )}

        <div className="w-full pb-40">
          {children}
        </div>
      </main>

      {/* Footer background is handled by heritage variable inside the global transition */}
      <footer className="py-20 border-t border-brand-charcoal/5 text-center bg-heritage/50 backdrop-blur-sm">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-charcoal/40 font-medium">
          © 2025 Saldana Studio — Captured Light
        </span>
      </footer>
    </div>
  );
}