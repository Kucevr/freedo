import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../layout/Navbar';
import { GridLines } from '../layout/GridLines';
import { Footer } from '../sections/Footer';
import { SplitTextReveal } from '../ui/SplitTextReveal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax on team image
    gsap.to('.about-parallax', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.about-parallax-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
    
    // Scale out lines
    gsap.from('.about-line', {
      scaleX: 0,
      transformOrigin: 'left',
      stagger: 0.2,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 80%',
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-black min-h-[200vh] text-white w-full relative selection:bg-white selection:text-black">
      <GridLines />
      <Navbar />

      <main className="pt-40 pb-32 px-6">
        {/* Header Section */}
        <div className="grid grid-cols-10 md:grid-cols-20 xl:grid-cols-40 gap-x-0 mb-32">
          <div className="col-start-1 col-span-10 md:col-start-2 md:col-span-18 xl:col-start-2 xl:col-span-30">
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#666] mb-8">
              (About Freedo)
            </div>
            <SplitTextReveal 
              text="We are an independent digital studio shaping platforms, products, and experiences for ambitious brands."
              className="text-[24px] md:text-[50px] xl:text-[4vw] leading-[0.95] indent-8 md:indent-16 tracking-tight font-medium"
            />
          </div>
        </div>

        {/* Hero Image with Parallax */}
        <div className="about-parallax-container w-full h-[60vh] md:h-[80vh] relative overflow-hidden mb-32 grayscale opacity-80">
           <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2850" 
            alt="Agency Team"
            className="about-parallax absolute top-[-20%] left-0 w-full h-[140%] object-cover"
           />
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-10 md:grid-cols-20 xl:grid-cols-40 gap-x-0 mb-32">
          <div className="col-start-1 col-span-10 md:col-start-2 md:col-span-8 xl:col-start-2 xl:col-span-12 flex flex-col gap-[3vh] mb-12 md:mb-0">
            <div className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
              01 // Principles
            </div>
            <div className="text-sm xl:text-base indent-6 md:indent-8 leading-relaxed opacity-70 pr-0 md:pr-8">
              Since 2014, we have shaped digital commerce through a blend of engineering depth, strategic thinking, and refined design. Our mission is to move your business forward in the digital landscape.
            </div>
          </div>
          
          <div className="col-start-1 col-span-10 md:col-start-11 md:col-span-10 xl:col-start-16 xl:col-span-22">
             <SplitTextReveal 
                text="Real momentum happens when technology meets a clear creative vision. We don't just build websites; we shape scalable ecosystems designed for lasting growth."
                className="text-[18px] md:text-[32px] xl:text-[2.5vw] leading-[1.1] tracking-tight font-medium indent-8 md:indent-16"
             />
          </div>
        </div>

        {/* Stats & Structure */}
        <div className="about-stats grid grid-cols-10 md:grid-cols-20 xl:grid-cols-40 gap-x-0 pt-20 mb-32">
          {[
            { label: 'Founded', value: '2014' },
            { label: 'Offices', value: 'Minsk, Belarus' },
            { label: 'Expertise', value: 'Commerce, UX/UI, System Integration' },
            { label: 'Awwwards', value: '5× Site of the Day' },
            { label: 'FWA', value: '2× FWA of the Day, 1× FWA of the Month' },
            { label: 'CSS Design Awards', value: '8× Website of the Day' },
            { label: 'Webby Awards', value: '2× Honoree, 1× Nominee' },
            { label: 'Lovie Awards', value: 'Bronze Lovie Winner' }
          ].map((stat, i) => (
             <div key={i} className="col-start-1 col-span-10 md:col-span-20 xl:col-span-40 w-full mb-8 group">
                <div className="about-line h-px w-full bg-white/20 mb-4 group-hover:bg-white transition-colors duration-500" />
                <div className="flex justify-between items-start text-xs xl:text-sm uppercase font-mono tracking-widest group-hover:text-white transition-colors duration-500 opacity-70 group-hover:opacity-100">
                  <span className="opacity-50">{stat.label}</span>
                  <span className="text-right">{stat.value}</span>
                </div>
             </div>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="grid grid-cols-10 md:grid-cols-20 xl:grid-cols-40 gap-x-0 pt-16 border-t border-white/10">
           <div className="col-start-1 col-span-10 md:col-span-20 xl:col-span-40 text-[10px] uppercase font-mono tracking-widest text-[#666] mb-16">
              ( Selected Collaborators )
           </div>
           
           <div className="col-start-1 col-span-10 md:col-span-20 xl:col-span-40 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-12 md:gap-16 items-center place-items-center opacity-60">
              <img src="https://cdn.simpleicons.org/nike/white" alt="Nike" className="w-20 md:w-25" />
              <img src="https://cdn.simpleicons.org/adidas/white" alt="Adidas" className="w-17.5 md:w-20" />
              <img src="https://cdn.simpleicons.org/puma/white" alt="Puma" className="w-20 md:w-25" />
              <img src="https://cdn.simpleicons.org/levis/white" alt="Levi's" className="w-20 md:w-25" />
              <img src="https://cdn.simpleicons.org/the-north-face/white" alt="The North Face" className="w-20 md:w-25" />
              
              <img src="https://cdn.simpleicons.org/hugo-boss/white" alt="Hugo Boss" className="w-22.5 md:w-27.5" />
              <img src="https://cdn.simpleicons.org/diesel/white" alt="Diesel" className="w-22.5 md:w-27.5" />
              <img src="https://cdn.simpleicons.org/vans/white" alt="Vans" className="w-25 md:w-30" />
              <img src="https://cdn.simpleicons.org/tommy-hilfiger/white" alt="Tommy Hilfiger" className="w-25 md:w-32.5" />
              <img src="https://cdn.simpleicons.org/zara/white" alt="Zara" className="w-30 md:w-37.5" />
           </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
