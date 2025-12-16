// Define the shape of a single flower data object using a TypeScript Interface
export interface Flower {
  id: number;
  title: string;
  subtitle: string;
  image: string; // The path to the image in the /public directory
  alt: string;    // Alternative text for accessibility
}

// NOTE: Replace the placeholder values with actual paths to images in your /public directory
// and actual names/descriptions of your flowers.
export const flowerData: Flower[] = [
  {
    id: 1,
    title: "The Classic Rose Bouquet",
    subtitle: "A timeless arrangement of premium deep red roses.",
    image: "/images/Kathrinflowers1.jpg",
    alt: "Classic red rose bouquet wrapped in white paper.",
  },
  {
    id: 2,
    title: "Serene Wildflower Mix",
    subtitle: "A gentle mix of lavender, daisies, and delicate greens.",
    image: "/images/Kathrinflowers2.jpg",
    alt: "Assortment of wildflowers in soft colors.",
  },
  {
    id: 3,
    title: "Elegant White Lilies",
    subtitle: "Pristine white lilies symbolizing purity and commitment.",
    image: "/images/Kathrinflowers3.jpg",
    alt: "Close-up of elegant white lilies.",
  },
];