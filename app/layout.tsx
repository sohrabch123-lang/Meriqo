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
  title: 'Saldana Floral Portfolio | Elegant Flowers',
  description: 'A beautiful and calm portfolio showcasing luxury floral arrangements.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          ${inter.variable} ${playfair.variable} font-sans
          bg-heritage text-charcoal 
          antialiased min-h-screen flex flex-col 
          selection:bg-accent-hover/30
        `}
      >
        {/* Navbar is a 'Shell' component—it stays here forever */}
        <Navbar />
        
        <main className="flex-grow">
          {/* Everything inside {children} will be wrapped by 
            the template.tsx we are about to create. 
          */}
          {children}
        </main>
      </body>
    </html>
  );
}