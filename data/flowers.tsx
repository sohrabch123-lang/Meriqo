export interface PhotographyItem {
  id: number;
  type: 'Florals' | 'Macramé'; 
  name: string;        
  slug: string;        
  category: 'Portrait' | 'Nature' | 'Editorial' | 'Atmospheric';    
  price: number;       
  description: string; 
  image: string;
  alt: string;         
  title: string;       
  subtitle: string;
}

export type Flower = PhotographyItem;

const generatePhotoData = (id: number): PhotographyItem => {
  const isFloral = id <= 20;
  
  // FIX: Determine extension based on ID
  const extension = id === 4 ? 'jpg' : 'jpeg';

  return {
    id,
    type: isFloral ? 'Florals' : 'Macramé',
    name: isFloral ? `Botanical Study No. ${id}` : `Textured Weave No. ${id}`,
    title: isFloral ? `Ethereal Flora ${id}` : `Artisanal Fiber ${id}`,
    subtitle: "High-Resolution Photography",
    slug: `${isFloral ? 'floral' : 'macrame'}-series-${id}`,
    category: isFloral ? (id % 2 === 0 ? 'Portrait' : 'Nature') : 'Atmospheric',
    price: 150 + (id * 2),
    description: `A high-quality 35mm photographic study focusing on ${isFloral ? 'natural organic forms' : 'tactile geometric patterns'}.`,
    image: `/images/image${id}.${extension}`, // Uses the correct extension here
    alt: `Professional photography of ${isFloral ? 'flowers' : 'macrame art'} - Shot ${id}`,
  };
};

export const flowerData: Flower[] = [
  {
    id: 1,
    type: 'Florals',
    name: "The Classic Rose",
    title: "Kathrin the shining head",
    subtitle: "A study in radiance",
    slug: "kathrin-shining-head",
    category: "Portrait",
    price: 185,
    description: "An ethereal silhouette capturing the intersection of light and persona.",
    image: "/images/image1.jpeg",
    alt: "Kathrin the shining head photography",
  },
  {
    id: 2,
    type: 'Florals',
    name: "Wildflower Mix",
    title: "Kathrin green house",
    subtitle: "Organic immersion",
    slug: "kathrin-green-house",
    category: "Nature",
    price: 165,
    description: "Deep greens and vibrant life captured within the glass walls of the sanctuary.",
    image: "/images/image2.jpeg",
    alt: "Kathrin green house photography",
  },
  // Generates 3 through 40 automatically
  ...Array.from({ length: 38 }, (_, i) => generatePhotoData(i + 3))
];