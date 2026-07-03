import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Hero({ ready }: { ready: boolean }) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ready) return;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Removed translate-y-full logic and handling everything beautifully via GSAP
    tl.from('.hero-word', { y: '110%', opacity: 0, duration: 1.2, stagger: 0.1, rotate: 2 });
    tl.from('.hero-decor', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.8");

    gsap.to('.hero-media', {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: scope.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

  }, { scope, dependencies: [ready] });

  return (
    <section ref={scope} className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">
      
      {/* Background layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="image/p8.JPG" 
          alt="Hero Cover" 
          className="hero-media object-cover w-full h-[140%] -top-[20%] relative opacity-100" 
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Decorative text based on grid */}
      <div className="absolute top-[28%] w-full grid grid-cols-10 gap-x-4 px-10 z-10 pointer-events-none text-white opacity-80 text-[10px] xl:text-[12px] font-medium tracking-tight">
         <div className="col-start-1 col-span-2 hero-decor capitalize">Strategy Layer</div>
         <div className="col-start-5 col-span-2 hero-decor text-center capitalize">Growth Layer</div>
         <div className="col-start-9 col-span-2 hero-decor text-right capitalize">Build Layer</div>
      </div>

      <div className="z-10 mix-blend-difference flex flex-col items-center justify-center w-full px-4 pt-48">
        <div className="text-center font-black leading-[0.85] tracking-tighter text-[11vw] flex flex-col items-center">
           <div className="flex gap-2 overflow-hidden pb-4 -mb-4"><span className="hero-word inline-block origin-bottom">FREEDO</span></div>
           <div className="flex gap-2 overflow-hidden pb-4 -mb-4"><span className="hero-word inline-block origin-bottom">COMMERCE</span></div>
           <div className="flex gap-2 overflow-hidden pb-4 -mb-4"><span className="hero-word inline-block origin-bottom">SYSTEMS</span></div>
        </div>
      </div>
      
    </section>
  );
}
