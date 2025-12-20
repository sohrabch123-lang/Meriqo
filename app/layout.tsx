import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Saldana Floral Portfolio | Elegant Flowers',
  description: 'A beautiful and calm portfolio showcasing luxury floral arrangements.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* FIX 1: Standardized transition to duration-1000 ease-in-out.
        FIX 2: Ensured 'bg-heritage' and 'text-charcoal' use the global transition rhythm.
      */}
      <body 
        className={`
          ${inter.className} 
          bg-heritage text-charcoal 
          antialiased min-h-screen flex flex-col 
          transition-colors duration-1000 ease-in-out
          selection:bg-accent-hover/30
        `}
      >
        
        {/* Navbar sits on top of the stack */}
        <Navbar />

        {/* FIX 3: flex-grow ensures the heritage background covers the screen.
          The relative positioning here acts as the anchor for all your page transitions.
        */}
        <main className="flex-grow relative">
          {children}
        </main>

        {/* Global Footer or Portals can be added here */}
      </body>
    </html>
  );
}