import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitTextReveal } from '../ui/SplitTextReveal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PHOTOS = [
  "image/p2.JPG",
  "image/p1.JPG",
  "image/p7.JPG",
  "image/p5.JPG"
];

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full text-white font-sans">
      <div className="w-full grid grid-cols-40 gap-x-0  pb-40">
        
        {/* Left Side: 2x2 Image Grid spanning 8 columns */}
        {/* Note: In a 10-column layout, cols 1-8 are images, cols 9-10 are text. */}
        <div className="col-start-2 col-span-28 grid grid-cols-2 gap-x-6 gap-y-6">
          {PHOTOS.map((src, i) => (
            <div key={i} className="w-full relative aspect-3/4 md:aspect-4/5 bg-white/5 overflow-hidden group">
              <img 
                src={src} 
                alt="" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-800 group-hover:scale-[1.03] grayscale-20"
              />
            </div>
          ))}
        </div>

        {/* Right Side: Sticky Text Content spanning 2 columns */}
        <div className="col-start-30 col-span-10 relative">
          {/* 
            To align the text perfectly with the bottom of the first row of images, 
            we give the sticky wrapper a matching `marginTop`.
            A `aspect-[4/5]` item spanning 4 cols (40% width approx) means its height is 50vw. 
            We use pt-[42vw] approx. 
          */}
          <div className="manifesto-text sticky top-[30vh] pt-[100%] pl-6 flex flex-col gap-6 text-[10px] xl:text-[12px] leading-[1.2] font-medium opacity-90 text-left text-white/90 pb-[4vh] h-max">
            <SplitTextReveal className="indent-8" text="We live in an age where everything is everywhere, all the time. The real challenge is no longer visibility, but meaning. Freedo exists to build authentic connections between brands and people where every experience, physical or digital, becomes part of the same story." />
            <SplitTextReveal className="indent-8" text="We believe commerce is culture: a coherent system where technology, design, and strategy merge to create living brands, worlds with identity, and relationships that last over time." />
          </div>
        </div>

      </div>
    </section>
  );
}
