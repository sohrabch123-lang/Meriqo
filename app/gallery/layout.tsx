'use client'; // Corrected from 'use React'
import Sidebar from '@/components/layout/Gallerysidebar';

interface GalleryLayoutProps {
  children: React.ReactNode;
}

export default function GalleryLayout({ children }: GalleryLayoutProps) {
  return (
    // Standardized transition for smooth theme switching
    <div className="flex flex-col min-h-screen bg-heritage transition-colors duration-500">
      
      {/* 1. MINI-HERO SECTION 
          FIX: Removed bg-heritage/50. It was stacking on the main BG 
          and causing the "hazy" layering under the Navbar.
      */}
      <section className="relative h-[35vh] w-full flex flex-col items-center justify-center">
        <div className="relative text-center z-10 px-4">
          <span className="text-accent-hover font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block transition-colors duration-500">
            Saldana Florals
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-8 transition-colors duration-500">
            Our Full Collection
          </h1>

          {/* 2. THE BOUTIQUE DIVIDER 
              FIX: Changed stone-200/60 to sage/20 for a cleaner look in Dark Mode.
          */}
          <div className="relative flex items-center justify-center w-64 mx-auto">
            <div className="w-full h-[1px] bg-sage/20 transition-colors duration-500"></div>
            <div className="absolute w-1.5 h-1.5 rotate-45 bg-accent-hover shadow-[0_0_8px_rgba(var(--accent-rgb),0.4)] transition-all duration-500"></div>
          </div>
        </div>
      </section>

      {/* 3. THE MAIN WRAPPER */}
      <div className="flex flex-col lg:flex-row flex-grow w-full max-w-[1600px] mx-auto">
        
        {/* SIDEBAR SLOT 
            FIX: lg:top-20 matches your Navbar height to prevent overlap.
        */}
        <aside className="lg:w-72 border-r border-sage/10 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] transition-colors duration-500">
          <Sidebar />
        </aside>

        {/* CONTENT SLOT */}
        <main className="flex-grow p-6 lg:p-12">
          {children}
        </main>
      </div>

      {/* FOOTER */}
      <footer className="py-12 border-t border-sage/10 text-center text-[10px] text-muted uppercase tracking-[0.2em] transition-colors duration-500">
        © 2025 Saldana Boutique
      </footer>
    </div>
  );
}