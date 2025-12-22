'use client';

import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

export default function AboutPage() {
  return (
    /* We keep the layout container clean. 
       The bg-heritage is already handled by the layout/template. */
    <div className="flex flex-col items-center justify-center px-6 py-24 md:py-32">
      
      {/* The Portrait Section */}
      <div className="w-full max-w-xl">
        <Reveal duration={1.1} y={15} instant>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl border border-sage/10">
            <Image 
              src="/images/kathrin-portrait.png" 
              alt="Charlotte - The Heart Behind the Blooms"
              fill
              priority
              className="object-cover grayscale-[15%] hover:scale-105 transition-transform duration-[2500ms] ease-out"
            />
            <div className="absolute inset-0 bg-black/0 dark:bg-black/20 transition-colors duration-1000" />
          </div>
        </Reveal>
      </div>

      {/* The Story Section */}
      <div className="max-w-xl text-center mt-20 md:mt-24 space-y-12">
        
        <div>
          <Reveal delay={0.2} duration={0.9} y={20} instant>
            <h1 className="text-4xl md:text-6xl font-serif text-charcoal leading-tight mb-8">
              My Love, The Heart <br/> Behind the Blooms
            </h1>
          </Reveal>
          
          <Reveal delay={0.3} duration={1.2} y={10} instant>
            <p className="text-xl md:text-2xl text-muted font-serif italic leading-relaxed">
              "Flowers are more than just decoration; they are a silent language of kindness and creation."
            </p>
          </Reveal>
        </div>

        <div className="space-y-8 text-muted/90 text-sm md:text-base leading-loose tracking-widest font-sans">
          <Reveal delay={0.4} duration={0.9} y={15} instant>
            <p className="max-w-md mx-auto italic">
              Charlotte spent her life believing that hands were meant for making. 
              Every petal arranged in this gallery is a reflection of a life dedicated 
              to beauty, silence, and the glory of God's timing.
            </p>
          </Reveal>
          
          {/* THE BOUTIQUE DIVIDER */}
          <Reveal delay={0.5} duration={1} y={0} instant>
            <div className="flex flex-col items-center pt-12">
              <div className="relative flex items-center justify-center w-32 mb-10">
                <div className="w-full h-[1px] bg-sage/30"></div>
                <div className="absolute w-1.5 h-1.5 rotate-45 bg-accent-hover shadow-[0_0_10px_rgba(var(--brand-accent),0.4)]"></div>
              </div>

              <p className="text-accent-hover font-bold tracking-[0.4em] uppercase text-[10px] mb-4">
                Connect With Us
              </p>
              
              <a 
                href="mailto:hello@saldanaflorals.com" 
                className="group relative text-charcoal text-sm tracking-widest pb-1 transition-colors duration-500"
              >
                hello@saldanaflorals.com
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-hover transition-all duration-500 group-hover:w-full" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}