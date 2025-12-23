export interface PhotographyItem {
  id: number;
  // CHANGED: From Florals/Macrame to Archival Types
  type: 'Organic Studies' | 'Tactile Series'; 
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
  const isOrganic = id <= 20;
  const extension = id === 4 ? 'jpg' : 'jpeg';

  const archivalTerms = [
    "Light Study", "Shadow Composition", "Grain Impression", 
    "Tonal Narrative", "Visual Dialogue", "Form & Texture",
    "Ephemeral Capture", "Static Motion"
  ];

  const term = archivalTerms[id % archivalTerms.length];

  return {
    id,
    // CHANGED: Mapping the logic to the new types
    type: isOrganic ? 'Organic Studies' : 'Tactile Series',
    name: `${term} No. ${id}`,
    title: `Saldana Studio Archive`,
    subtitle: "35mm High-Resolution Print",
    slug: `saldana-series-${id}`,
    category: isOrganic 
      ? (id % 3 === 0 ? 'Nature' : id % 3 === 1 ? 'Portrait' : 'Editorial') 
      : 'Atmospheric',
    price: 150 + (id * 2),
    description: `An archival photographic exploration focusing on the ${isOrganic ? 'delicate organic geometry of nature' : 'tactile rhythms of handcrafted form'}.`,
    image: `/images/image${id}.${extension}`,
    alt: `Saldana Photography - Archival Print #${id}`,
  };
};

export const flowerData: Flower[] = [
  {
    id: 1,
    type: 'Organic Studies', // Updated
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
    type: 'Organic Studies', // Updated
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
  ...Array.from({ length: 38 }, (_, i) => generatePhotoData(i + 3))
];