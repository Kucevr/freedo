import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitTextReveal } from '../ui/SplitTextReveal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.footer-bg-img', 
      { scale: 1.1, opacity: 0 },
      {
        scale: 1,
        opacity: 0.5,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <footer ref={containerRef} className="relative w-full min-h-screen h-auto md:h-screen flex flex-col font-sans md:overflow-hidden bg-black text-[#cfcfcf] py-12 md:py-0">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black pointer-events-none">
        <img 
          src="/image/p9.JPG"
          alt="Audience with 3D glasses"
          className="footer-bg-img w-full h-full object-cover mix-blend-screen opacity-50"
        />
        {/* Soft edge blur to black at the top and bottom edges */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
        {/* Central vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)' }} />
      </div>

      {/* Center Text */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center text-white py-16 md:py-0">
        <SplitTextReveal text="Let's build something that lasts." className="text-[28px] md:text-[40px] xl:text-[3vw] font-medium leading-[1.05] tracking-tight" />
        <SplitTextReveal text="hello@madeinfreedo.com" className="text-[28px] md:text-[40px] xl:text-[3vw] font-medium leading-[1.05] tracking-tight" />
      </div>

      {/* Bottom Grid content */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-40 gap-y-10 md:gap-y-0 px-6 md:px-0 pb-12 md:pb-6 text-[10px] xl:text-[12px] font-medium opacity-80 leading-relaxed text-white/70">
        
        {/* Col 1: CONTACT */}
        <div className="col-span-1 md:col-start-2 md:col-span-6 flex flex-col gap-4 md:gap-[3vh]">
          <div className="font-mono tracking-widest text-white/50">
            (a.) CONTACT
          </div>
          <div className="flex flex-col gap-1">
            <p>hello@madeinfreedo.com</p>
            <p>Prospekt Niezaleznasti, 121 <br />41126 Minsk (Belarus)</p>
          </div>
          <div className="mt-4 md:mt-auto">
            <p className="hover:text-white cursor-pointer transition-colors">Privacy Data Removal</p>
          </div>
        </div>

        {/* Col 6: LEGAL */}
        <div className="col-span-1 md:col-start-12 md:col-span-6 flex flex-col gap-4 md:gap-[3vh]">
          <div className="font-mono tracking-widest text-white/50">
            (b.) LEGAL
          </div>
          <div className="flex flex-col gap-1 pr-0 md:pr-[20%]">
            <p>©20014-2026 Freedo S.r.l. P.IVA<br />
            IT03497200364 // REA<br />
            MO392876 Capitale Sociale:<br />12.000 Eur</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-auto">
            <p className="hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer transition-colors">Other Policies</p>
          </div>
        </div>

        {/* Col 11: NEWSLETTER */}
        <div className="col-span-1 md:col-start-23 md:col-span-6 flex flex-col gap-4 md:gap-[3vh]">
          <div className="font-mono tracking-widest text-white/50">
            (c.) NEWSLETTER
          </div>
          <div className="flex flex-col gap-1">
            <p>Get commerce ideas in<br />your inbox.<br />No noise, just useful signals.</p>
          </div>
          <div className="flex flex-col gap-2 mt-4 md:mt-auto pr-0 md:pr-6">
            <input 
              type="text" 
              placeholder="enter your email"
              className="w-full bg-[#111] border border-white/5 px-4 py-2 outline-none placeholder:text-white/20 text-white focus:border-white/30 transition-colors rounded-xs"
            />
            <button className="text-left font-bold tracking-widest text-white hover:opacity-70 transition-opacity uppercase pt-1 text-[12px]">
              JOIN NOW
            </button>
          </div>
        </div>

        {/* Col 17: PRESS */}
        <div className="col-span-1 md:col-start-34 md:col-span-6 flex flex-col gap-4 md:gap-[3vh]">
          <div className="font-mono tracking-widest text-white/50">
            (d.) PRESS
          </div>
          <div className="flex flex-col gap-1">
            <p className="hover:text-white cursor-pointer transition-colors">Forbes</p>
            <p className="hover:text-white cursor-pointer transition-colors">Pambianco News</p>
            <p className="hover:text-white cursor-pointer transition-colors">Pambianco News</p>
            <p className="hover:text-white cursor-pointer transition-colors">Forbes</p>
          </div>
          <div className="flex flex-col gap-1 mt-4 md:mt-auto">
            <p className="hover:text-white cursor-pointer transition-colors">Instagram</p>
            <p className="hover:text-white cursor-pointer transition-colors">Linkedin</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
