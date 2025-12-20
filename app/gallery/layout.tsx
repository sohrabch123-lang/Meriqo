'use client'; 
import Sidebar from '@/components/layout/Gallerysidebar';

interface GalleryLayoutProps {
  children: React.ReactNode;
}

export default function GalleryLayout({ children }: GalleryLayoutProps) {
  return (
    /* Use 'bg-heritage' which maps to var(--bg-main) */
    <div className="flex flex-col min-h-screen bg-heritage transition-colors duration-1000 ease-in-out">
      
      <div className="flex flex-col lg:flex-row flex-grow w-full max-w-[1600px] mx-auto pt-24">
        
        {/* SIDEBAR SLOT */}
        <aside className="lg:w-80 w-full lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] px-8 transition-colors duration-500">
          <Sidebar />
        </aside>

        {/* CONTENT COLUMN */}
        <main className="flex-grow p-6 lg:p-12 lg:border-l border-sage/10 transition-colors duration-1000">
          
          <section className="mb-20 text-left">
            {/* Maps to var(--brand-accent) */}
            <span className="text-accent-hover font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block transition-colors duration-500">
              Saldana Florals
            </span>

            {/* FIX: By using 'text-charcoal' here, it will automatically 
               point to var(--brand-charcoal). Since that variable changes 
               from 26,24,23 to 245,245,245 in your CSS, it WILL flip.
            */}
            <h1 className="text-5xl md:text-7xl font-serif text-charcoal tracking-tight mb-10 transition-colors duration-1000">
              Our Full Collection
            </h1>

            {/* THE STYLISH SIGNATURE DIVIDER */}
            <div className="relative flex items-center w-full max-w-md group">
              {/* Line: Uses accent-hover with opacity */}
              <div className="h-[1.5px] w-full bg-gradient-to-r from-accent-hover/80 via-accent-hover/30 to-transparent transition-all duration-700"></div>
              
              {/* Anchor: Pulsing Diamond */}
              <div className="absolute left-0 flex items-center justify-center">
                <div className="absolute w-4 h-4 bg-accent-hover/30 rounded-full blur-md opacity-0 dark:opacity-100 animate-pulse"></div>
                <div className="relative w-2.5 h-2.5 rotate-45 bg-accent-hover border border-white/20 shadow-[0_0_10px_rgba(var(--brand-accent),0.3)] transition-all duration-500"></div>
              </div>

              <div className="ml-6 w-1 h-1 rounded-full bg-accent-hover/40"></div>
            </div>
          </section>

          {/* PAGE CONTENT */}
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>

      <footer className="py-12 border-t border-sage/10 text-center text-[10px] text-muted uppercase tracking-[0.2em] transition-colors duration-1000">
        © 2025 Saldana Boutique
      </footer>
    </div>
  );
}