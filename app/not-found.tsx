import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-brand-beige px-6 text-center">
      {/* Visual Element: A subtle '404' watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <h1 className="text-[30vw] font-serif opacity-[0.02] select-none">Void</h1>
      </div>

      <div className="relative z-10 space-y-6">
        <h2 className="font-serif text-4xl text-brand-charcoal">Location Unknown.</h2>
        <p className="text-[10px] tracking-[0.4em] uppercase text-brand-charcoal/40 max-w-xs mx-auto">
          The requested asset has been moved or does not exist in the current exhibition.
        </p>
        
        <div className="pt-8">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-4 text-[11px] tracking-[0.2em] uppercase"
          >
            <span className="w-8 h-[1px] bg-brand-charcoal/20 group-hover:w-12 transition-all duration-500" />
            Go Back
          </Link>
        </div>
      </div>
    </main>
  );
}