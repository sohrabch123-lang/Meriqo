// app/page.tsx
import Header from '@/components/Header'; // Use the @/ alias for clean imports

export default function Home() {
  return (
    <main>
      {/* Your new component goes here! */}
      <Header />
      
      <div className="p-4 text-xl">
        This is where the main content will go.
      </div>
    </main>
  );
}