import ExhibitSection from '@/components/ExhibitSection';
import PanExhibitSection from '@/components/PanExhibitSection';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import RelatedStories from '@/components/RelatedStories';

// Your gallery data
const galleryData = [
  {
    id: '1899-era',
    title: '1899-1900 Regulations',
    description: 'The turn of the century brought distinct structural shifts to the officer uniform.',
    // detailText: 'Notice the specific collar lace dimensions and the precise arrangement of the front buttons, which serve as key identifiers for pieces from this brief era.',
    imageSrc: 'https://images.unsplash.com/photo-1546404061-77f543dd71e2?q=80&w=3540', // Replace with your image
  },
  {
    id: '1902-era',
    title: 'The 1902 Frock Coat',
    description: 'A refinement in naval tailoring and formal presentation.',
    // detailText: 'By 1902, regulations shifted again. The cut of the trousers and the associated headwear evolved to match the updated silhouette of the coat.',
    imageSrc: 'https://images.unsplash.com/photo-1571571854913-a6d8b59377e0?q=80&w=3552',
  },
  {
    id: '1930s-era',
    title: '1930s Era Evolution',
    description: 'Moving towards the modern silhouette prior to the Second World War.',
    // detailText: 'The materials and tailoring techniques of the 1930s reflect a modernization of the service, transitioning away from the heavier Victorian influences.',
    imageSrc: 'https://images.unsplash.com/photo-1612007295939-13ca49840bc7?q=80&w=5120',
  }
];

export default function VirtualMuseumTour() {
  return (
    <main className="bg-neutral-950">
      {/* Optional Intro Banner */}
      {/* <div className="h-screen flex items-center justify-center text-white">
        <h1 className="text-4xl tracking-widest uppercase">Scroll to Begin Tour</h1>
      </div> */}

      {/* Progress Bar to visually let user know the scrolling progress */}
      <ProgressBar />

     {/* The Map Loop */}
     {/* {galleryData.map((exhibit, index) => (
        <PanExhibitSection
          key={exhibit.id}
          index={index}
          title={exhibit.title}
          description={exhibit.description}
          imageSrc={exhibit.imageSrc}
        />
      ))} */}


      {galleryData.map((exhibit, index) => (
        <ExhibitSection
          key={exhibit.id}
          index={index}
          title={exhibit.title}
          description={exhibit.description}
          detailText={exhibit.detailText}
          imageSrc={exhibit.imageSrc}
          isLast={index === galleryData.length - 1}
        />
      ))}

      {/* Optional Outro Banner */}
      {/* <div className="h-[50vh] flex items-center justify-center text-white">
        <p className="text-2xl text-gray-400">End of Exhibition</p>
      </div> */}


      <RelatedStories />

      {/* Footer */}
      <Footer />
    </main>
  );
}
