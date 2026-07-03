import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitTextReveal } from '../ui/SplitTextReveal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SERVICES_DATA = [
  {
    title: "Signal Architecture",
    index: "( a. )",
    list: ["Positioning", "Identity Systems", "Voice Frameworks", "Operating Rules"],
    image: "/image/p2.JPG"
  },
  {
    title: "Commerce Build",
    index: "( b. )",
    list: ["Headless Commerce", "Custom Development", "Integrations", "Architecture"],
    image: "/image/p3.JPG"
  },
  {
    title: "Growth Activation",
    index: "( c. )",
    list: ["Marketing Strategy", "Paid Media", "Email Flows", "Audience Segmentation", "Optimization", "Remarketing"],
    image: "/image/p4.AVIF"
  },
  {
    title: "Operations Layer",
    index: "( d. )",
    list: ["Global Payments", "Tax Compliance", "Risk Control", "Legal Framework"],
    image: "/image/p5.JPG"
  }
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full min-h-[110vh] pb-20 flex flex-col justify-end text-white font-sans border-t/5 overflow-hidden">
      
      {/* Background Images Map */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}>
        {SERVICES_DATA.map((item, i) => (
          <img 
            key={i}
            src={item.image}
            alt=""
            className={`absolute inset-0 w-full h-[120%] -top-[10%] object-cover transition-opacity duration-700 ease-in-out mix-blend-screen grayscale-20 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        {/* Soft overlay when active */}
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-700 ${hoveredIndex !== null ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Big Text Container */}
      <div className="relative z-10 w-full grid grid-cols-10 md:grid-cols-20 gap-x-0 px-0 mb-20">
        <SplitTextReveal 
          text="Freedo is a commerce studio built around one idea: clarity across the entire system. Strategy, build, growth and operations move together, so every part of the brand can scale without friction."
          className="reveal-big-text indent-20 col-start-1 col-span-10 md:col-start-3 md:col-span-17 xl:col-start-2 xl:col-span-18 text-[32px] md:text-[40px] xl:text-[40px] font-medium leading-[0.85] tracking-[-0.05em] mix-blend-difference"
        />
      </div>

      {/* Sub headers */}
      <div className="relative z-10 w-full grid grid-cols-10 md:grid-cols-40 gap-x-0 px-6 mb-4 text-[10px] xl:text-[12px] font-medium tracking-tight text-white/50 capitalize">
        <div className="col-start-1 col-span-4 pl-4">Core Layers</div>
        <div className="col-start-9 md:col-start-15 xl:col-start-34 col-span-2 text-left">Edition 2026</div>
      </div>

      {/* Grid Boxes */}
      <div className="relative z-10 w-full grid grid-cols-10 md:grid-cols-40 gap-x-0 px-10 h-max min-h-75">
        
        {/* The 4 boxes span exactly the first 8 columns collectively (using 2 cols out of 10 each, or 4 out of 20) */}
        {SERVICES_DATA.map((item, i) => (
          <div 
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="md:col-span-8 col-span-2 relative overflow-hidden transition-all duration-500 ease-out border-r border-white-[0.02] last:border-r-0 group cursor-pointer"
            style={{ 
               backgroundColor: hoveredIndex === i ? 'rgba(255,255,255,0.08)' : (hoveredIndex !== null ? 'transparent' : 'rgba(255,255,255,0.03)')
            }}
          >
            {/* Box Inner Content */}
            <div className="p-4 md:p-6 w-full h-full flex flex-col justify-between min-h-75">
              <div className="flex justify-between items-start">
                <h3 className="text-sm border-white/10 md:text-base font-semibold leading-tight w-2/3 wrap-break-word">
                  {item.title.split(' ').map((w) => <>{w}<br/></>)}
                </h3>
                <span className={`text-[10px] font-mono opacity-60 transition-opacity duration-300 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}>
                  {item.index}
                </span>
              </div>

              <div className="mt-auto flex flex-col gap-1 text-[10px] xl:text-xs leading-none opacity-80 tracking-tight">
                {item.list.map((li, j) => (
                  <div 
                    key={j}
                    className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: hoveredIndex === i ? `${j * 0.04}s` : '0s' }}
                  >
                    {li}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Right side text */}
        <div className="reveal-small-text col-start-9 col-span-2 md:col-start-34 md:col-span-8 xl:col-start-34 xl:col-span-8 flex flex-col gap-6 text-[10px] xl:text-[12px] leading-[1.2] font-medium pl-0 md:pl-4 pt-6 text-white/90">
          <SplitTextReveal className="indent-6" text="Every eCommerce is already in motion. Processes, people, numbers, decisions. Our job isn't to sit on top of it. It's to step inside." />
          <SplitTextReveal className="indent-6" text="We work alongside teams, read the business, identify where energy is being lost and where it needs to be amplified. We don't operate in silos: design, technology and marketing move together, because that's how growth becomes sustainable." />
          <SplitTextReveal className="indent-6" text="With in-house teams collaborating in real time, we reduce friction, align decisions and turn complexity into structure. We don't add noise. We bring direction." />
        </div>
      </div>
      
    </section>
  );
}
