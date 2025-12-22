import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter', 
  display: 'swap' 
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif', 
  display: 'swap',
});

export const metadata = {
  // Updated from 'Floral' to 'Photography'
  title: 'Saldana Photography | Fine Art Gallery',
  description: 'A curated portfolio showcasing visual stories through light and texture.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          ${inter.variable} ${playfair.variable} font-sans
          bg-heritage text-brand-charcoal 
          antialiased min-h-screen flex flex-col 
          /* Updated selection from rose to accent-hover (now Ochre) */
          selection:bg-brand-accent/20 selection:text-brand-charcoal
        `}
      >
        {/* Navbar remains the shell */}
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}