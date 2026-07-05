import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Navbar } from '../layout/Navbar';
import { GridLines } from '../layout/GridLines';
import { Footer } from '../sections/Footer';
import { SplitTextReveal } from '../ui/SplitTextReveal';

interface ProjectCardProps {
  images: string[];
  title: string;
  category: string;
  className?: string;
  partner?: string;
  services?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ images, title, category, className = "", partner, services }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    // Reset to scale 1.3 before animating to 1
    gsap.set(imageContainerRef.current, { clipPath: "inset(50%)" });
    const imgs = imageContainerRef.current?.querySelectorAll('img');
    if (imgs?.length) gsap.set(imgs, { scale: 1.3 });

    gsap.to(imageContainerRef.current, {
      clipPath: "inset(0%)",
      duration: 0.6,
      ease: "power3.out",
      overwrite: 'auto'
    });

    if (imgs?.length) {
      gsap.to(imgs, {
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        overwrite: 'auto'
      });
    }
    
    // Start interval
    intervalRef.current = window.setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 400);
  };

  const handleMouseLeave = () => {
    const imgs = imageContainerRef.current?.querySelectorAll('img');
    
    gsap.to(imageContainerRef.current, {
      clipPath: "inset(50%)",
      duration: 0.6,
      ease: "power3.out",
      onComplete: () => setCurrentImageIndex(0),
      overwrite: 'auto'
    });

    if (imgs?.length) {
      gsap.to(imgs, {
        scale: 1.3,
        duration: 0.6,
        ease: "power3.out",
        overwrite: 'auto'
      });
    }

    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`flex flex-col gap-4 cursor-pointer relative group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full aspect-4/5 relative bg-[#111] overflow-hidden">
        {/* Placeholder or initial background layer */}
        <div 
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center grayscale opacity-30" 
          style={{ backgroundImage: `url(${images[0]})` }} 
        />
        
        {/* Reveal mask layer */}
        <div 
          ref={imageContainerRef}
          className="absolute inset-0 w-full h-full object-cover overflow-hidden"
          style={{ clipPath: "inset(50%)" }}
        >
          {images.map((img, i) => (
             <img 
              key={i}
              src={img} 
              alt={title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${i === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
            />
          ))}
        </div>
      </div>
      
      <div className="flex w-full justify-between text-[10px] font-mono tracking-widest uppercase opacity-70 mt-2">
        <div className="flex flex-col gap-1 w-[20%]">
          <span>PARTNER</span>
          <span className="opacity-50">SERVICES</span>
        </div>
        <div className="flex flex-col gap-1 w-[80%] pl-4">
          <span className="text-white">{partner || title}</span>
          <span className="opacity-50 wrap-break-word">{services || category}</span>
        </div>
      </div>
    </div>
  );
};

export function Projects() {
  const projectsData = [
    {
      colSpan: "col-start-2 col-span-38 md:col-start-2 md:col-span-12",
      partner: "Northlane",
      services: "eCommerce Development, Design UX/UI, System Integration, Custom App",
      images: [
        "/image/p6.JPG",
        "/image/p7.JPG",
        "/image/p8.JPG"
      ]
    },
    {
      colSpan: "col-start-2 col-span-38 md:col-start-22 md:col-span-18 mt-8 md:mt-0",
      partner: "Meridian",
      services: "eCommerce Development, Design UX/UI, System Integration, SEO, Data Analysis",
      images: [
        "/image/p9.JPG",
        "/image/p10.JPG",
      ]
    },
    {
      colSpan: "col-start-2 col-span-38 md:col-start-12 md:col-span-10 mt-8 md:mt-24",
      partner: "Solstice",
      services: "Design UX/UI",
      images: [
        "/image/p2.JPG",
        "/image/p3.JPG"
      ]
    },
    {
      colSpan: "col-start-2 col-span-38 md:col-start-23 md:col-span-8 mt-8 md:mt-24",
      partner: "Monza Atelier",
      services: "eCommerce Development, Design UX/UI, Custom App",
      images: [
        "/image/p4.AVIF",
        "/image/p5.JPG"
      ]
    },
    {
      colSpan: "col-start-2 col-span-38 md:col-start-32 md:col-span-8 mt-8 md:mt-24",
      partner: "Arcline",
      services: "eCommerce Development, Design UX/UI, SEO",
      images: [
        "/image/p6.JPG",
        "/image/p1.JPG"
      ]
    },
    // Adding more mock data to fill the grid based on image structure
    {
      colSpan: "col-start-2 col-span-38 md:col-start-12 md:col-span-10 mt-8 md:mt-32",
      partner: "Lumen",
      services: "Design UX/UI, Custom App",
      images: ["/image/p8.JPG"]
    },
    {
      colSpan: "col-start-2 col-span-38 md:col-start-23 md:col-span-17 mt-8 md:mt-32 aspect-[16/9]",
      partner: "Eight Point",
      services: "eCommerce Development, Design UX/UI, System Integration",
      images: ["/image/p9.JPG"]
    },
    // Row 4
    {
      colSpan: "col-start-2 col-span-38 md:col-start-12 md:col-span-10 mt-8 md:mt-32",
      partner: "Kairo",
      services: "eCommerce Development, SEO",
      images: ["/image/p10.JPG"]
    },
    {
      colSpan: "col-start-2 col-span-38 md:col-start-23 md:col-span-10 mt-8 md:mt-32",
      partner: "Vanta",
      services: "Custom App, Data Analysis",
      images: ["/image/p7.JPG"]
    },
  ];

  return (
    <div className="bg-black min-h-[200vh] text-white w-full relative">
      <GridLines />
      <Navbar />

      <main className="pt-32 pb-40 px-6">
        
        {/* Top Header Labels */}
        <div className="flex md:grid md:grid-cols-40 gap-x-0 justify-between text-[8px] md:text-[10px] uppercase font-mono tracking-widest text-[#666] mb-12">
          <div className="md:col-start-2 md:col-span-4">Signal Design</div>
          <div className="hidden md:block md:col-start-20 md:col-span-4 text-center">Growth Systems</div>
          <div className="md:col-start-36 md:col-span-4 text-right">Build Logic</div>
        </div>

        {/* Huge Title Statement */}
        <div className="grid grid-cols-40 gap-x-0 mb-32">
          <div className="col-start-2 col-span-38">
            <h1 className="text-[20px] md:text-[32px] xl:text-[3vw] leading-[0.95] indent-8 md:indent-16 tracking-tight font-medium">
              <SplitTextReveal text="WE BUILD COMMERCE SYSTEMS WITH A CLEAR POINT OF VIEW, BLENDING PRODUCT DESIGN, PLATFORM ENGINEERING, GROWTH OPS, DATA LAYERING AND THE KIND OF STRUCTURE THAT LETS BRAND WORLDS SCALE WITH CONFIDENCE." />
            </h1>
            <div className="mt-8 text-2xl font-mono tracking-wide">[All]</div>
          </div>
        </div>

        {/* Masonry / Grid Project Cards */}
        <div className="grid grid-cols-40 gap-x-0 gap-y-16 w-full">
          {projectsData.map((project, idx) => (
             <ProjectCard 
               key={idx}
               className={project.colSpan}
               partner={project.partner}
               services={project.services}
               images={project.images}
               title={project.partner}
               category={project.services}
             />
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
