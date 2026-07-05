import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../layout/Navbar';
import { GridLines } from '../layout/GridLines';
import { Footer } from '../sections/Footer';
import { SplitTextReveal } from '../ui/SplitTextReveal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const servicesData = [
  { id: '01', title: 'Commerce Mapping', img: '/image/p1.JPG', desc: ['- MARKET RESEARCH', '- CATEGORY MODELING', '- GROWTH ROADMAP'] },
  { id: '02', title: 'Platform Build', img: '/image/p2.JPG', desc: ['- CUSTOM PLATFORMS', '- HEADLESS ARCHITECTURE', '- API DEVELOPMENT'] },
  { id: '03', title: 'Migration Sprint', img: '/image/p3.JPG', desc: ['- DATA MIGRATION', '- PLATFORM TRANSITION', '- RISK MITIGATION'] },
  { id: '04', title: 'Experience Design', img: '/image/p4.AVIF', desc: ['- USER RESEARCH', '- WIREFRAMING', '- HIGH-FIDELITY PROTOTYPES'] },
  { id: '05', title: 'Conversion Tuning', img: '/image/p5.JPG', desc: ['- A/B TESTING', '- FUNNEL ANALYSIS', '- USER BEHAVIOR TRACKING'] },
  { id: '06', title: 'Growth Media', img: '/image/p6.JPG', desc: ['- PAID SEARCH', '- SOCIAL ADS', '- RETARGETING'] },
  { id: '07', title: 'Lifecycle Automation', img: '/image/p7.JPG', desc: ['- CAMPAIGN STRATEGY', '- AUTOMATION FLOWS', '- SEGMENTATION'] },
  { id: '08', title: 'System Sync', img: '/image/p8.JPG', desc: ['- ERP INTEGRATION', '- CRM SYNC', '- INVENTORY MANAGEMENT'] },
  { id: '09', title: 'Data Signal Lab', img: '/image/p9.JPG', desc: ['- CUSTOM DASHBOARDS', '- PREDICTIVE ANALYTICS', '- DATA WAREHOUSING'] },
  { id: '10', title: 'Search Intelligence', img: '/image/p10.JPG', desc: ['- SEMANTIC KEYWORD RESEARCH', '- SEO CONTENT LOOPS', '- METADATA AND SCHEMA'] },
  { id: '11', title: 'Visual Production', img: '/image/p1.JPG', desc: ['- 3D MODELING', '- PROMPT ENGINEERING', '- VIRTUAL PHOTOSHOOTS'] },
  { id: '12', title: 'Global Launch', img: '/image/p2.JPG', desc: ['- MARKET LOCALIZATION', '- CROSS-BORDER COMPLIANCE', '- PAYMENT GATEWAYS'] },
  { id: '13', title: 'Operations Stack', img: '/image/p3.JPG', desc: ['- FULFILLMENT STRATEGY', '- TAX MANAGEMENT', '- FRAUD PREVENTION'] },
  { id: '14', title: 'Retention Design', img: '/image/p4.AVIF', desc: ['- LOYALTY PROGRAMS', '- CHURN REDUCTION', '- LTV OPTIMIZATION'] }
];

export function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(9);

  useGSAP(() => {
    gsap.to('.services-flowers-img', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.services-flowers-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-black min-h-screen text-white w-full relative selection:bg-white selection:text-black">
      <GridLines />
      <Navbar />

      <main className="w-full relative">
        {/* Simple non-sticky Hero Background */}
        <div className="relative w-full h-screen z-0 mb-32">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2600" 
              alt="Office/Agency"
              className="w-full h-full object-cover grayscale opacity-70"
            />
            {/* Fade out bottom */}
              <div className="absolute bottom-0 left-0 w-full h-[15%] bg-linear-to-t from-black to-transparent" />
          </div>
          <div className="absolute inset-0 w-full flex justify-center items-center px-6 pt-10 mix-blend-difference">
             <h1 className="text-[20px] md:text-[32px] xl:text-[4vw] font-medium tracking-tight text-center z-10 text-white leading-[1.05]">
               DESIGN. TECHNOLOGY. STRATEGY.<br /> FREEDO CONNECTS THE SYSTEM.
             </h1>
          </div>
        </div>

        {/* Content Section Starts */}
        <div className="relative z-10 bg-transparent mb-32">
          
          <div className="grid grid-cols-1 md:grid-cols-40 px-6 gap-x-0 mb-32 mix-blend-difference">
            <div className="col-span-1 md:col-start-30 md:col-span-11 text-[12px] leading-[1.2] indent-8 font-medium opacity-90 text-[#e0e0e0]">
              <SplitTextReveal className="indent-8" text="In commerce, design, technology, marketing and data often pull in different directions. The result is friction. Freedo was created to bring them together. We design digital ecosystems where strategy, design, development and growth work as one operating system. We don't add layers. We reduce them." />
             </div>
          </div>

          <div className="grid grid-cols-40 px-6 gap-x-0 mt-32 mb-40 mix-blend-difference">
             <div className="col-start-2 col-span-36">
               <h1 className="text-[24px] md:text-[36px] xl:text-[5vw] uppercase font-medium leading-[0.85] tracking-tight">
                  <SplitTextReveal text="AN END-TO-END" />
                  <SplitTextReveal text="OPERATING SYSTEM" />
                  <SplitTextReveal text="BUILT TO SCALE," />
                  <SplitTextReveal text="MOVE FASTER AND" />
                  <SplitTextReveal text="STAY CONNECTED." />
               </h1>
             </div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-40 px-6 gap-x-0 gap-y-12 md:gap-y-0 mt-32 min-h-150 mb-40">
             <div className="w-full md:col-start-2 md:col-span-8 flex flex-col gap-1 text-[10px] uppercase font-mono tracking-widest text-[#666] self-start pt-0 md:pt-[5%]">
                 <div className="mb-4 text-white/50">( a. ) SERVICES</div>
                 <div className="flex flex-col gap-1 transition-opacity duration-300">
                    {servicesData[activeService].desc.map((item, i) => (
                      <div key={i}>{item}</div>
                    ))}
                 </div>
             </div>
             
             <div className="w-full md:col-start-13 md:col-span-12 flex justify-center items-start self-center mb-8 overflow-hidden">
                 <div className="relative w-full md:w-[80%] aspect-4/5 mix-blend-screen opacity-80 bg-black">
                      {servicesData.map((service, index) => (
                        <img 
                          key={index}
                          src={service.img} 
                          alt="Service visualization" 
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${index === activeService ? 'opacity-100' : 'opacity-0'}`} 
                        />
                      ))}
                 </div>
             </div>

             <div className="w-full md:col-start-27 md:col-span-12 flex flex-col self-center text-[16px] xl:text-[20px] font-medium leading-[1.3] pb-10">
                 {servicesData.map((service, index) => (
                    <div 
                      key={index} 
                      className="cursor-pointer group flex items-center mb-1"
                      onMouseEnter={() => setActiveService(index)}
                      onClick={() => setActiveService(index)}
                    >
                      <span className={`text-[12px] inline-block w-6 relative -top-0.5 transition-colors duration-300 font-mono tracking-tighter ${index === activeService ? 'text-white font-bold' : 'text-[#666] font-normal'}`}>
                        {service.id}.
                      </span>
                      <span className={`transition-all duration-300 rounded-xs leading-tight flex-inline pb-px ${index === activeService ? 'text-black bg-white px-2 font-bold py-1' : 'text-[#666] hover:text-white px-0 font-normal py-0'}`}>
                        {service.title}
                      </span>
                    </div>
                 ))}
             </div>
          </div>
        </div>

        {/* 2 Photos Section Cleaned Up */}
        <div className="flex flex-col md:grid md:grid-cols-40 px-6 gap-y-12 md:gap-y-0 gap-x-0 items-start w-full relative mb-40">
           <div className="col-span-1 md:col-start-2 md:col-span-9 text-[10px] uppercase font-mono tracking-widest text-[#666] mb-4 md:mb-0">
              ( b. ) APPROACH
           </div>
           
           <div className="col-span-1 md:col-start-12 md:col-span-13">
               <div className="w-full aspect-3/4 overflow-hidden bg-[#111] services-flowers-container">
                 <img 
                   src="image/p10.JPG" 
                   className="services-flowers-img w-full h-[120%] -mt-[10%] object-cover  brightness-65"
                   alt="Flowers blur"
                 />
               </div>
               <div className="text-[12px] leading-[1.2] indent-8 font-medium opacity-90 mt-8 pr-0 md:pr-[10%]">
                 Freedo works with brands that refuse to treat commerce as a simple sales channel. Brands that see it as infrastructure, as strategy, and as a system to build and scale over time.
               </div>
           </div>
           
           <div className="col-span-1 md:col-start-26 md:col-span-14 flex flex-col items-center mt-0 md:mt-32">
               <div className="w-full aspect-4/3 overflow-hidden bg-[#111]">
                 <img 
                   src="image/p9.JPG" 
                   className="w-full h-full object-cover opacity-65 mix-blend-screen"
                   alt="Model blur motion"
                 />
               </div>
               <div className="text-[12px] leading-[1.2] indent-8 font-medium opacity-90 mt-8 pl-0 md:pl-8 pr-0 md:pr-[10%] self-start md:self-end">
                 From established companies to emerging brands, we collaborate with teams that want clarity, structure and real performance. Fashion, lifestyle and consumer brands that understand growth doesn't come from noise, but from strong foundations. Together we design digital systems built to perform, adapt and compound.
               </div>
           </div>
        </div>

        {/* Sticky Text Section Over Blurred Image */}
        <div className="relative w-full mb-80 h-[150vh] md:h-[240vh]">
             {/* The Text is sticky relative to the parent height */}
             <div className="sticky top-[30vh] w-full z-20 px-6 mix-blend-difference pointer-events-none flex justify-center items-center">
                <div className="w-full xl:w-[90%]">
                  <p className="text-[20px] md:text-[40px] xl:text-[48px] leading-tight md:leading-[0.85] tracking-tight font-medium text-white text-center">
                      Every project begins with a close dialogue with the brands we work with. We study their business models, their growth ambitions and the dynamics of the markets they operate in. From there we design structures built to perform over time, able to adapt and grow with the company. 
                  </p>
                </div>
             </div>

             {/* The Image Wrapper sits inside the same relative parent but spans height so you scroll over it */}
             <div className="absolute top-[40vh] md:top-[60vh] left-0 right-0 h-[100vh] md:h-[150vh] z-10 pointer-events-none flex items-center">
                <div className="relative w-full h-[120vh] md:h-[200vh]">
                   {/* Top Fade */}
                   <div className="absolute top-0 left-0 w-full h-[15%] bg-linear-to-b from-black to-transparent z-10" />
                   <img 
                     src="image/p3.JPG" 
                     className="w-full h-full object-cover brightness-[0.5]"
                     alt="Abstract texture blur"
                   />
                   {/* Bottom Fade */}
                   <div className="absolute bottom-0 left-0 w-full h-[15%] bg-linear-to-t from-black to-transparent z-10" />
                </div>
             </div>
        </div>

        {/* Featured Clients */}
        <div className="relative z-20 bg-black pt-40 pb-20 px-6 mb-40 mt-[-30vh]">
           <div className="flex md:grid md:grid-cols-40 gap-x-0 w-full">
              <div className="col-span-1 md:col-start-2 md:col-span-10 text-white/40 text-[10px] uppercase font-mono tracking-widest mb-12 md:mb-16">
                     Selected Systems<br />2014-2026
              </div>
           </div>
           
           <div className="flex flex-col md:grid md:grid-cols-40 gap-y-12 md:gap-y-0 gap-x-0 w-full mb-10 items-start">
              <div className="col-span-1 md:col-start-2 md:col-span-12 group cursor-pointer">
                  <div className="flex justify-between items-center text-[10px] uppercase font-mono tracking-widest text-[#666] mb-3 group-hover:text-white transition-colors duration-300">
                      <span>( e. )</span>
                      <span>FLORENCE LINE</span>
                  </div>
                  <div className="w-full aspect-4/3 overflow-hidden bg-[#111]">
                      <img src="image/p5.JPG" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" alt="client" />
                  </div>
              </div>

              <div className="col-span-1 md:col-start-18 md:col-span-8 group cursor-pointer mt-0 md:mt-[15%]">
                  <div className="flex justify-between items-center text-[10px] uppercase font-mono tracking-widest text-[#666] mb-3 group-hover:text-white transition-colors duration-300">
                      <span>( b. )</span>
                      <span>ATLAS SPORT</span>
                  </div>
                  <div className="w-full aspect-3/4 overflow-hidden bg-[#111]">
                      <img src="image/p6.JPG" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" alt="client" />
                  </div>
              </div>

              <div className="col-span-1 md:col-start-30 md:col-span-10 group cursor-pointer mt-0 md:mt-[5%]">
                  <div className="flex justify-between items-center text-[10px] uppercase font-mono tracking-widest text-[#666] mb-3 group-hover:text-white transition-colors duration-300">
                      <span>( a. )</span>
                      <span>ORBIT WEAR</span>
                  </div>
                  <div className="w-full aspect-square overflow-hidden bg-[#111]">
                      <img src="image/p7.JPG" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" alt="client" />
                  </div>
              </div>
           </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
