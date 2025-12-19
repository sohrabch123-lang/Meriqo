import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-stone-50/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand Name */}
          <Link href="/" className="text-3xl font-serif tracking-widest text-rose-400 hover:text-rose-500 transition-colors">
              Saldana
          </Link>

          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-6 text-sm font-medium tracking-wider uppercase">
              <li>
                <Link href="/" className="hover:text-rose-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                {/* This will be our dynamic gallery page */}
                <Link href="/gallery" className="hover:text-rose-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rose-400 transition-colors">
                  about
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}