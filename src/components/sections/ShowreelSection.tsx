import { useState } from 'react';

export function ShowreelSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full py-20 md:py-60 flex flex-col justify-center text-white font-sans">
      
      <div className="w-full grid grid-cols-10 md:grid-cols-20 gap-x-0 px-6 h-[60vh] md:h-[80vh]">
        
        {/* Outer Frame acting as a Video Player Container - scaled down within grid */}
        <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-16 relative w-full h-full border border-white/20 overflow-hidden group">
          
          {/* Background Image / Video Mockup */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=2600"
              alt="Showreel Background"
              className={`w-full h-full object-cover transition-all duration-1000 ${isPlaying ? 'scale-105 grayscale-0' : 'grayscale-[50%] opacity-90'}`}
            />
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/80 pointer-events-none" />
            
            {/* Faint Center Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
              </svg>
            </div>
          </div>

          {/* UI Overlay matched with the grid visually */}
          <div className="relative z-10 w-full h-full text-[10px] xl:text-[11px] font-medium tracking-tight pointer-events-none">
            
            {/* Top Bar */}
            <div className="absolute top-0 left-0 w-full flex justify-between items-start pt-6 px-6 opacity-80">
              <div className="font-mono">00:02:30</div>
              
              {/* Top Timeline Bar Simulation */}
              <div className="flex-1 mt-2 h-[2px] bg-white/20 mx-10 md:mx-20 pointer-events-none hidden md:block relative">
                <div className="h-full bg-white/60 w-1/3 absolute left-0 top-0"></div>
              </div>
              
              <div className="text-right leading-tight">
                4k 60fps<br/>
                Res: 1920x1080
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 w-full flex flex-col md:flex-row md:items-end justify-between px-6 pb-6 gap-4">
              
              {/* Play Button */}
              <div className="pointer-events-auto flex items-center gap-3 cursor-pointer group/btn"
                  onMouseEnter={() => setIsPlaying(true)}
                  onMouseLeave={() => setIsPlaying(false)}>
                <span className="opacity-90 group-hover/btn:opacity-100 transition-opacity">Play Showreel</span>
                <svg className="w-3 h-3 text-white transition-opacity duration-300 opacity-80 group-hover/btn:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>

              {/* Center Name Box */}
              <div className="flex items-stretch border border-white/20 bg-black/40 backdrop-blur-md opacity-90 rounded-[2px] md:absolute md:left-1/2 md:-translate-x-1/2 w-max">
                <div className="px-4 py-1.5 font-mono opacity-60">04.</div>
                <div className="px-5 py-1.5 border-l border-white/20 uppercase tracking-widest text-[#cfcfcf]">
                  AI CONTENT CREATION
                </div>
              </div>

              {/* Right Label */}
              <div className="opacity-70 uppercase tracking-widest text-right">
                MIE©2025_SHOWRELL.MP4
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
