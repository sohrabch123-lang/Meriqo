export default function GalleryLoading() {
  // We create an array of 6 items to represent the grid skeleton
  const skeletonItems = Array.from({ length: 6 });

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skeletonItems.map((_, i) => (
          <div key={i} className="space-y-4">
            {/* The Image Aspect Ratio Box */}
            <div className="aspect-[4/5] bg-brand-charcoal/5 animate-pulse relative overflow-hidden">
              {/* Subtle shimmer effect moving across */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
            {/* Title Skeleton */}
            <div className="h-4 w-2/3 bg-brand-charcoal/5 animate-pulse" />
            {/* Price/Subtitle Skeleton */}
            <div className="h-3 w-1/4 bg-brand-charcoal/5 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}