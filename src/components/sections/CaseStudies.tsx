import { useRef } from 'react';
import gsap from 'gsap';

const CASE_DATA = [
  { partner: "Northline", platform: "SHOPIFY", index: "( a. )", service: "Integration, Growth, SEO, CRO, Operations", image: "image/p1.JPG" },
  { partner: "Arcform", platform: "SHOPIFY PLUS", index: "( b. )", service: "UX/UI, Dev, Integration, SEO, Growth", image: "image/p2.JPG" },
  { partner: "Vero Mode", platform: "SHOPIFY PLUS", index: "( c. )", service: "UX/UI, Dev, Integration, SEO", image: "image/p3.JPG" },
  { partner: "Sailhouse", platform: "CUSTOM", index: "( d. )", service: "UX/UI, Positioning", image: "image/p10.JPG" },
  { partner: "Monarch", platform: "SHOPIFY PLUS", index: "( e. )", service: "UX/UI, Dev, Integration, SEO", image: "image/p5.JPG" },
  { partner: "Noir Studio", platform: "SHOPIFY PLUS", index: "( f. )", service: "UX/UI, Dev B2C, Growth, Integration, SEO", image: "image/p6.JPG" },
  { partner: "Pillar", platform: "LARAVEL", index: "( g. )", service: "UX/UI, Dev, Integration, SEO, Growth", image: "image/p7.JPG" },
  { partner: "Relay", platform: "SHOPIFY HEADLESS", index: "( h. )", service: "Dev, Growth, Integration", image: "image/p8.JPG" },
  { partner: "Rift Group", platform: "SHOPIFY", index: "( i. )", service: "UX/UI, Dev (B2C/B2B), Growth, Integration, SEO", image: "image/p9.JPG" }
];

export function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const zIndexRef = useRef(1);
  const activeIndexRef = useRef(-1);

  const handleMouseEnter = (index: number) => {
    if (activeIndexRef.current === index) return;

    zIndexRef.current += 1;
    const currentContainer = imagesRef.current[index];
    if (!currentContainer) return;
    const currentImg = currentContainer.querySelector('img');

    // Bring the new image wrapper to the front and initialize clip-path hidden in center
    gsap.set(currentContainer, { zIndex: zIndexRef.current, clipPath: 'inset(50%)' });
    if (currentImg) {
      gsap.set(currentImg, { scale: 1.3 });
    }

    // Animate to show
    gsap.to(currentContainer, {
      clipPath: 'inset(0%)',
      duration: 0.6,
      ease: 'power3.out',
      overwrite: 'auto'
    });

    if (currentImg) {
      gsap.to(currentImg, {
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    }

    activeIndexRef.current = index;
  };

  const handleSectionLeave = () => {
    // ЗАКРЫВАЕМ ВСЕ ФОТО: проходимся по всему массиву и скрываем
    imagesRef.current.forEach((container) => {
      if (!container) return;
      const img = container.querySelector('img');
      
      gsap.to(container, {
        clipPath: 'inset(50%)',
        duration: 0.4,
        ease: 'power3.inOut',
        overwrite: 'auto'
      });
      
      if (img) {
        gsap.to(img, {
          scale: 1.3,
          duration: 0.4,
          ease: 'power3.inOut',
          overwrite: 'auto'
        });
      }
    });
    
    activeIndexRef.current = -1;
  };

  return (
    <section ref={containerRef} className="case-studies-container relative w-full pt-16 pb-32">
      
      {/* Central Fixed Image Container */}
      <div className="absolute inset-0 z-20 pointer-events-none flex justify-center items-start pt-20 xl:pt-40.5">
        <div className="sticky top-37.5 w-55 xl:w-82.5 aspect-4/5">
          {CASE_DATA.map((row, i) => (
            <div
              key={i}
              ref={el => { imagesRef.current[i] = el; }}
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: 'inset(50%)', zIndex: 0 }}
            >
              <img
                src={row.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Header Row */}
      <div className="relative z-10 grid grid-cols-40 gap-x-0 px-0 pb-20 text-[10px] xl:text-[12px] text-white/50 tracking-tight pointer-events-none">
        <div className="col-start-2 col-span-1 text-left capitalize">Partner</div>
        <div className="col-start-10 col-span-1 capitalize text-right">Platform</div>
        <div className="col-start-18 col-span-6 text-white/50 normal-case text-center">(&nbsp;&nbsp;&nbsp;FREEDO WORKS&nbsp;&nbsp;&nbsp;)</div>
        <div className="col-start-39 col-span-1 text-right capitalize">Service</div>
      </div>

      {/* Table Rows */}
      <div 
        className="relative w-full flex flex-col gap-y-4 uppercase font-sans"
        onMouseLeave={handleSectionLeave}
      >
        {CASE_DATA.map((row, i) => (
          <div 
            key={i} 
            onMouseEnter={() => handleMouseEnter(i)}
            className="group relative grid grid-cols-40 h-8 items-center hover:bg-white hover:text-black transition-colors duration-150 cursor-pointer z-30 mix-blend-difference"
          >
            <div className="col-start-2 col-span-4 tracking-wide font-medium xl:text-sm">{row.partner}</div>
            <div className="col-start-10 col-span-4 text-left tracking-wide font-light opacity-80 group-hover:opacity-100 xl:text-[13px]">{row.platform}</div>
            
            <div className="col-start-28 col-span-1 opacity-60 normal-case xl:text-xs text-center">{row.index}</div>
            <div className="col-start-32 col-span-8 text-right pr-4 text-[9px] xl:text-[12px] tracking-[0.03em] normal-case truncate lg:whitespace-normal leading-snug font-medium opacity-90 group-hover:opacity-100">{row.service}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
