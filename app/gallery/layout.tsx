'use client'; 

import Reveal from '@/components/ui/Reveal';
import { usePathname } from 'next/navigation';
// --- BOUTIQUE IMPORTS ---
import { ANIMATION, LAYOUT, BRAND } from '@/lib/constants';

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDetailPage = pathname.split('/').length > 2;

  return (
    <div className={`flex flex-col min-h-screen transform-gpu ${ANIMATION.THEME_SYNC}`}>
      
      {/* 2025 Standard: Use LAYOUT constants for width and padding consistency */}
      <main className={`flex-grow w-full max-w-[${LAYOUT.MAX_WIDTH}] mx-auto ${LAYOUT.SAFE_PADDING} ${isDetailPage ? 'pt-0' : 'pt-12'}`}>
        
        {!isDetailPage && (
          <section className="mb-16">
            <div className="flex flex-col gap-4">
              <Reveal delay={0.1} y={10} duration={ANIMATION.DURATION}>
                <span className="font-bold tracking-[0.5em] uppercase text-[10px] mb-2 block text-brand-accent">
                  {BRAND.FULL_NAME} Photography
                </span>
              </Reveal>

              {/* Transition synced to the Master Clock */}
              <Reveal delay={0.15} duration={ANIMATION.DURATION} y={20}>
                <h1 className="text-6xl md:text-8xl font-serif tracking-tight italic leading-none text-brand-charcoal">
                  The Gallery
                </h1>
              </Reveal>
            </div>

            <Reveal delay={0.3} duration={ANIMATION.DURATION} y={0}>
              <div className="mt-10 h-[1px] w-full bg-brand-charcoal/10" />
            </Reveal>
          </section>
        )}

        <div className="w-full pb-40">
          {children}
        </div>
      </main>

      <footer className={`py-20 border-t border-brand-charcoal/5 text-center bg-heritage/50 backdrop-blur-sm ${ANIMATION.THEME_SYNC}`}>
        <span className={`text-[10px] uppercase tracking-[0.4em] text-brand-charcoal/40 font-medium ${ANIMATION.THEME_SYNC}`}>
          © {BRAND.YEAR_RANGE.split('—')[1].trim()} {BRAND.FULL_NAME} — Captured Light
        </span>
      </footer>
    </div>
  );
}