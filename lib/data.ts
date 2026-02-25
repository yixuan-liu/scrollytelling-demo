// Define the shape of your Main Exhibit Data
export interface ExhibitData {
  id: string;
  title: string;
  description: string;
  detailText?: string;
  imageSrc: string;
}

// Define the shape of your Related Stories Data
export interface RelatedTheme {
  title: string;
  subtitle: string;
  thumbnail: string;
  url: string;
}

export interface RelatedStory {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  type: string;
  url: string;
}

export interface RelatedContent {
  theme: RelatedTheme;
  partner: string;
  stories: RelatedStory[];
}

// ==========================================
// EXPORTED DATA ARRAYS & OBJECTS
// ==========================================

export const galleryData: ExhibitData[] = [
  {
    id: '1899-frock-coat',
    title: '1899 Officer Frock Coat',
    description: 'A rare example of turn-of-the-century naval tailoring, strictly adhering to the updated 1899 uniform regulations.',
    detailText: 'Notice the specific weave of the broadcloth and the precise arrangement of the brass buttons. At this time, the frock coat was worn with a white shirt and black tie underneath for formal duties.',
    imageSrc: 'https://images.unsplash.com/photo-1546404061-77f543dd71e2?q=80&w=3540', // Replace with your high-res scans
  },
  {
    id: '1930s-medical-corps',
    title: '1930s Medical Corps Captain',
    description: 'The interwar period saw subtle but distinct shifts in the cut and drape of the standard officer uniform.',
    detailText: 'The heavy gold bullion lace on the sleeves denotes the rank of Captain, accompanied by the distinct embroidered oak leaf of the Medical Corps.',
    imageSrc: 'https://images.unsplash.com/photo-1571571854913-a6d8b59377e0?q=80&w=3552',
  },
  {
    id: 'bicorn-and-epaulets',
    title: 'Full Dress Accoutrements',
    description: 'The highly formal bicorn hat and heavy fringed epaulets worn during full dress occasions.',
    detailText: 'These items were mandated for full dress ceremonies and inspections. The epaulets physically anchor to the shoulders of the frock coat, adding considerable weight to the garment.',
    imageSrc: 'https://images.unsplash.com/photo-1612007295939-13ca49840bc7?q=80&w=5120',
  }
];

export const relatedData: RelatedContent = {
  theme: {
    title: 'The Evolution of Naval Rank Insignia',
    subtitle: 'Trace the history of sleeve lace, epaulets, and collar devices from the Civil War to the modern era.',
    thumbnail: 'https://images.unsplash.com/photo-1604263368964-458cd7644b37?q=80&w=4592',
    url: '/explore/insignia',
  },
  partner: 'National Naval Aviation Museum',
  stories: [
    {
      id: 'ww1-aviation',
      title: 'Early Naval Aviation Flight Gear',
      subtitle: 'Leather, canvas, and the transition to purpose-built aviator uniforms.',
      thumbnail: 'https://images.unsplash.com/photo-1623792165505-b42b0c54372b?q=80&w=3173',
      type: '1910s Collection',
      url: '/stories/ww1-aviation',
    },
    {
      id: 'enlisted-ranks',
      title: 'The Iconic Crackerjack',
      subtitle: 'How enlisted deck uniforms became a symbol of the service.',
      thumbnail: 'https://images.unsplash.com/photo-1580135657424-8ecfbe64c13e?q=80&w=1610',
      type: 'Enlisted History',
      url: '/stories/crackerjack',
    },
    {
      id: 'dress-whites',
      title: 'Tropical & Summer Whites',
      subtitle: 'Adapting formal wear for the Pacific Fleet and warm climates.',
      thumbnail: 'https://images.unsplash.com/photo-1579762714760-1cc4cfe140e3?q=80&w=1977',
      type: 'Pacific Fleet',
      url: '/stories/summer-whites',
    },
  ],
};
