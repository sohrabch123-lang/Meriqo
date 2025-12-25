'use client'; 

import Reveal from '@/components/ui/Reveal';
import { usePathname } from 'next/navigation';

// --- BOUTIQUE IMPORTS ---
import { LAYOUT, BRAND, ANIMATION } from '@/lib/constants';

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDetailPage = pathname.split('/').length > 2;

  return (
    /* 1. Added 'contain-paint' to prevent the gallery transitions from 
          affecting the render calculations of the rest of the site.
       2. transform-gpu forces the layer onto the composite thread.
    */
    <div className={`flex flex-col min-h-screen transform-gpu contain-paint`}>
      
      <main className={`flex-grow w-full max-w-[${LAYOUT.MAX_WIDTH}] mx-auto ${LAYOUT.SAFE_PADDING} ${isDetailPage ? 'pt-0' : 'pt-16'}`}>
        
        {!isDetailPage && (
          <section className="mb-20">
            <div className="flex flex-col gap-2">
              <Reveal delay={0.1} y={10}>
                <span className="font-bold tracking-[0.6em] uppercase text-[9px] mb-3 block text-brand-accent">
                  {BRAND.FULL_NAME} // {BRAND.YEAR_RANGE}
                </span>
              </Reveal>

              <Reveal delay={0.15} duration={0.8} y={30}>
                {/* We use 'leading-[0.8]' to tighten the serif header 
                   and 'max-w-4xl' to ensure the text doesn't stretch 
                   uncomfortably on ultra-wide monitors.
                */}
                <h1 className="text-7xl md:text-[9rem] font-serif tracking-tighter italic leading-[0.9] max-w-4xl">
                  The Gallery
                </h1>
              </Reveal>
            </div>

            <Reveal delay={0.4} duration={1} y={0}>
              <div className="mt-12 h-[1px] w-full bg-brand-charcoal/10" />
            </Reveal>
          </section>
        )}

        <div className={`w-full pb-40`}>
          {children}
        </div>
      </main>

      <footer className={`py-24 border-t border-brand-charcoal/5 text-center bg-heritage/5 backdrop-blur-sm ${ANIMATION.THEME_SYNC}`}>
        <div className="flex flex-col items-center gap-6">
           <span className="text-[9px] uppercase tracking-[0.5em] text-brand-charcoal/30 font-bold">
            © {BRAND.ESTABLISHED} {BRAND.NAME} — {BRAND.LOCATIONS[0]}
          </span>
          <div className="h-8 w-[1px] bg-brand-charcoal/10" />
        </div>
      </footer>
    </div>
  );
}