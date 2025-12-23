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
  
  // Extension logic: id 4 is jpg, others are jpeg
  const extension = id === 4 ? 'jpg' : 'jpeg';

  // Photography terms to replace "Floral/Macrame" titles
  const archivalTerms = [
    "Light Study", 
    "Shadow Composition", 
    "Grain Impression", 
    "Tonal Narrative", 
    "Visual Dialogue", 
    "Form & Texture",
    "Ephemeral Capture",
    "Static Motion"
  ];

  // Logic to rotate through terms based on ID
  const term = archivalTerms[id % archivalTerms.length];

  return {
    id,
    type: isFloral ? 'Florals' : 'Macramé',
    name: `${term} No. ${id}`,
    title: `Saldana Studio Archive`,
    subtitle: "35mm High-Resolution Print",
    slug: `saldana-series-${id}`,
    category: isFloral 
      ? (id % 3 === 0 ? 'Nature' : id % 3 === 1 ? 'Portrait' : 'Editorial') 
      : 'Atmospheric',
    price: 150 + (id * 2),
    description: `An archival photographic exploration focusing on the ${isFloral ? 'delicate organic geometry of nature' : 'tactile rhythms of handcrafted form'}.`,
    image: `/images/image${id}.${extension}`,
    alt: `Saldana Photography - Archival Print #${id}`,
  };
};

export const flowerData: Flower[] = [
  // Keeping your custom first two items but updating titles to match the new vibe
  {
    id: 1,
    type: 'Florals',
    name: "Radiance No. 1",
    title: "Saldana Studio",
    subtitle: "A study in illumination",
    slug: "saldana-archive-01",
    category: "Portrait",
    price: 185,
    description: "An ethereal silhouette capturing the intersection of light and persona.",
    image: "/images/image1.jpeg",
    alt: "Saldana artistic photography",
  },
  {
    id: 2,
    type: 'Florals',
    name: "Sanctuary No. 2",
    title: "Saldana Studio",
    subtitle: "Organic immersion",
    slug: "saldana-archive-02",
    category: "Nature",
    price: 165,
    description: "Deep greens and vibrant life captured within the glass walls of the sanctuary.",
    image: "/images/image2.jpeg",
    alt: "Saldana nature photography",
  },
  // Automatically generates items 3 through 40
  ...Array.from({ length: 38 }, (_, i) => generatePhotoData(i + 3))
];