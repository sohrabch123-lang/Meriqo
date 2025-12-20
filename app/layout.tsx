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
    <html lang="en">
      {/* RULE 1: Use Semantic Classes
        - 'bg-heritage' matches your CSS variable for the Stone background.
        - 'text-charcoal' ensures high-end readability for your serif fonts.
      */}
      <body className={`${inter.className} bg-heritage text-charcoal antialiased min-h-screen flex flex-col`}>
        
        {/* Navbar is global, appearing on every page */}
        <Navbar />

        {/* RULE 2: Layout Structure
          - 'flex-grow' ensures that even if a page has very little content, 
             the background stays consistent all the way to the bottom.
        */}
        <main className="flex-grow">
          {children}
        </main>

        {/* This is a great place for a global Footer in the future */}
      </body>
    </html>
  );
}