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
      <div className="w-full grid grid-cols-1 md:grid-cols-40 gap-y-12 md:gap-y-0 pb-40 px-6 md:px-0">
        
        {/* Left Side: 2x2 Image Grid - takes full width on mobile, 28 cols on desktop */}
        <div className="col-span-1 md:col-start-2 md:col-span-28 grid grid-cols-2 gap-x-6 gap-y-6">
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

        {/* Right Side: Text Content - stacks on mobile, sticky on desktop */}
        <div className="col-span-1 md:col-start-30 md:col-span-10 relative">
          <div className="manifesto-text md:sticky md:top-[30vh] pt-4 md:pt-[100%] pl-0 md:pl-6 flex flex-col gap-6 text-[10px] xl:text-[12px] leading-[1.2] font-medium opacity-90 text-left text-white/90 pb-[4vh] h-max">
            <SplitTextReveal className="indent-8" text="We live in an age where everything is everywhere, all the time. The real challenge is no longer visibility, but meaning. Freedo exists to build authentic connections between brands and people where every experience, physical or digital, becomes part of the same story." />
            <SplitTextReveal className="indent-8" text="We believe commerce is culture: a coherent system where technology, design, and strategy merge to create living brands, worlds with identity, and relationships that last over time." />
          </div>
        </div>

      </div>
    </section>
  );
}
