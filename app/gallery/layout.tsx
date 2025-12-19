import React from 'react';

/**
 * PATH: src/app/gallery/layout.tsx
 * * This layout wraps both:
 * 1. The Main Gallery Grid (/gallery)
 * 2. The Individual Flower Detail Pages (/gallery/[slug])
 */

interface GalleryLayoutProps {
  children: React.ReactNode;
}

export default function GalleryLayout({ children }: GalleryLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. MINI-HERO SECTION 
          This provides the "Visual Bridge" between the Home and Gallery.
          Using h-[35vh] ensures it feels significant but doesn't overpower the flowers.
      */}
      <section className="relative h-[35vh] w-full flex items-center justify-center bg-stone-100 overflow-hidden border-b border-stone-200">
        
        {/* Subtly textured background for a premium feel */}
        <div 
          className="absolute inset-0 opacity-40 bg-[url('/images/subtle-texture.png')] bg-repeat"
          aria-hidden="true"
        />
        
        {/* Soft radial gradient to draw eyes to the center */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-200/50" />

        <div className="relative text-center z-10 px-4">
          <span className="text-rose-400 font-medium tracking-[0.2em] uppercase text-xs mb-3 block">
            Saldana Florals
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-800 tracking-tight leading-none">
            Our Full Collection
          </h1>
          <div className="w-16 h-px bg-rose-300 mx-auto mt-6"></div>
        </div>
      </section>

      {/* 2. SUB-NAV / FILTER BAR (Optional Placeholder)
          You could eventually add categories like [All, Romance, Wedding] here.
      */}
      <nav className="bg-white/50 backdrop-blur-md sticky top-20 z-20 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-center space-x-8 text-[10px] tracking-[0.2em] uppercase font-semibold text-stone-500">
          <span className="cursor-pointer hover:text-rose-400 transition-colors border-b border-rose-400 text-stone-800">All</span>
          <span className="cursor-pointer hover:text-rose-400 transition-colors">Romance</span>
          <span className="cursor-pointer hover:text-rose-400 transition-colors">Events</span>
          <span className="cursor-pointer hover:text-rose-400 transition-colors">Seasonal</span>
        </div>
      </nav>

      {/* 3. MAIN CONTENT AREA
          This is where {children} (the Grid or the Slug Page) is injected.
      */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {children}
      </main>

      {/* 4. GALLERY FOOTER
          A small nudge to keep users engaged.
      */}
      <footer className="py-12 border-t border-stone-200 bg-stone-100/50 text-center">
        <p className="font-serif italic text-stone-500">
          Tailored arrangements for your most cherished moments.
        </p>
      </footer>
    </div>
  );
}