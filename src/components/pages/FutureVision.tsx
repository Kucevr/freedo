import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Navbar } from '../layout/Navbar';

gsap.registerPlugin(useGSAP);

export function FutureVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleMouseMove = contextSafe((e: React.MouseEvent) => {
    if (!canvasRef.current || !containerRef.current) return;
    
    // Get mouse position relative to the center of the screen
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Calculate normalized position from -0.5 to 0.5
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    
    // Setting pan limits (reduced slightly to match tighter spacing)
    const panFactorX = innerWidth * 0.35; 
    const panFactorY = innerHeight * 0.35;
    
    gsap.to(canvasRef.current, {
      x: -x * panFactorX,
      y: -y * panFactorY,
      duration: 1.2,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#0a0a0a] font-sans antialiased text-white"
      onMouseMove={handleMouseMove}
    >
      <Navbar />

      <div 
        ref={canvasRef} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vh] flex items-center justify-center will-change-transform pointer-events-none"
      >
        <div className="relative w-full h-full">
          {/* Top Left */}
          <div className="absolute top-[18%] left-[22%] w-[35vw] md:w-[20vw] aspect-[4/3] pointer-events-auto hover:scale-[1.02] transition-transform duration-500 overflow-hidden rounded-sm">
            <img src="/image/p1.JPG" alt="Project 1" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>
          
          {/* Top Middle - Watch UI reference equivalent */}
          <div className="absolute top-[15%] left-[45%] w-[38vw] md:w-[22vw] aspect-square pointer-events-auto hover:scale-[1.02] transition-transform duration-500 overflow-hidden rounded-sm">
             <img src="/image/p2.JPG" alt="Project 2" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>

          {/* Top Right - Medellin 3D reference equivalent */}
          <div className="absolute top-[15%] left-[70%] w-[32vw] md:w-[18vw] aspect-[3/4] pointer-events-auto hover:scale-[1.02] transition-transform duration-500 overflow-hidden rounded-sm border border-white/5">
            <img src="/image/p3.JPG" alt="Project 3" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>

          {/* Center Left - Laptop open reference equivalent */}
          <div className="absolute top-[40%] left-[20%] w-[42vw] md:w-[24vw] aspect-[16/10] pointer-events-auto hover:scale-[1.02] transition-transform duration-500 overflow-hidden rounded-sm">
            <img src="/image/p4.AVIF" alt="Project 4" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>

          {/* Center - Girl in beige reference equivalent */}
          <div className="absolute top-[42%] left-[42%] w-[45vw] md:w-[25vw] aspect-[4/3] pointer-events-auto flex items-end hover:scale-[1.02] transition-transform duration-500 overflow-hidden rounded-sm z-10 shadow-2xl">
            <img src="/image/p5.JPG" alt="Project 5" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>

          {/* Center Right - Dark UI equivalent */}
          <div className="absolute top-[45%] left-[70%] w-[28vw] md:w-[16vw] aspect-[9/16] pointer-events-auto hover:translate-y-[-10px] transition-transform duration-500 overflow-hidden rounded-sm z-0">
            <img src="/image/p6.JPG" alt="Project 6" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>

          {/* Bottom Left */}
          <div className="absolute top-[60%] left-[25%] w-[32vw] md:w-[18vw] aspect-[4/5] pointer-events-auto hover:scale-[1.02] transition-transform duration-500 overflow-hidden rounded-sm">
            <img src="/image/p7.JPG" alt="Project 7" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>

          {/* Bottom Middle */}
          <div className="absolute top-[68%] left-[45%] w-[35vw] md:w-[20vw] aspect-[16/9] pointer-events-auto hover:scale-[1.02] transition-transform duration-500 overflow-hidden rounded-sm">
             <img src="/image/p8.JPG" alt="Project 8" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>

          {/* Bottom Right */}
          <div className="absolute top-[50%] left-[60%] w-[28vw] md:w-[15vw] aspect-square pointer-events-auto hover:scale-[1.02] transition-transform duration-500 overflow-hidden rounded-sm">
            <img src="/image/p9.JPG" alt="Project 9" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>

          {/* Background Grid decorative element */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />
        </div>
      </div>
    </div>
  );
}
