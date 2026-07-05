import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CopyEmailText } from '../ui/CopyEmailText';
import { navigateWithTransition } from '../../utils/transition';

gsap.registerPlugin(useGSAP);

const AnimatedCharLink = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-flex overflow-hidden w-max leading-none">
      {/* Первая линия (уходит вверх) */}
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform">
        {text}
      </span>
      {/* Вторая линия (появляется снизу) */}
      <span className="absolute top-full left-0 block leading-none transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform">
        {text}
      </span>
    </span>
  );
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuWrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: menuWrapperRef });

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(dropdownRef.current, 
        { height: 0, opacity: 0 }, 
        { height: 'auto', opacity: 1, duration: 0.6, ease: 'power4.out', overwrite: 'auto' }
      );
      gsap.fromTo('.menu-item',
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: 'power3.out', delay: 0.2, overwrite: 'auto' }
      );
    } else {
      gsap.to(dropdownRef.current, { height: 0, opacity: 0, duration: 0.4, ease: 'power3.inOut', overwrite: 'auto' });
    }
  }, [menuOpen, contextSafe]);

  const handleLinkClick = (e: React.MouseEvent, path: string, label: string) => {
    e.preventDefault();
    setMenuOpen(false);
    navigateWithTransition(path, label);
  };

  return (
    <nav className="fixed top-0 w-full z-40 p-5 px-6 md:px-10 font-sans pointer-events-none" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', transform: 'translateZ(0)' }}>
      <div className="flex md:grid md:grid-cols-10 md:gap-x-4 justify-between items-center md:items-start w-full tracking-tight text-[10px] xl:text-[12px] pointer-events-auto">
        
        {/* Col 1: Logo */}
        <div className="col-start-1 col-span-2 text-white mix-blend-difference">
          <div className="hover:opacity-60 cursor-pointer transition-opacity font-bold tracking-[0.15em] text-sm flex items-center gap-1.5 w-max" onClick={(e) => handleLinkClick(e, '/', 'Home')}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
              <path d="M12 2L2 22h20L12 2z"/>
            </svg>
            FreeDo
          </div>
        </div>

        {/* Col 4: Text 1 */}
        <div className="col-start-4 col-span-2 indent-6 hidden lg:block leading-[1.1] normal-case opacity-90 font-medium text-white mix-blend-difference">
          Commerce systems and brand worlds.<br/>
          Driven by clarity. Built with design<br/>
          and technology.
        </div>

        {/* Col 7: Text 2 */}
        <div className="col-start-7 col-span-2 hidden md:block leading-[1.1] normal-case opacity-90 font-medium whitespace-nowrap text-white mix-blend-difference">
          <div className="indent-6 flex flex-col items-start justify-start">
             <CopyEmailText email="hello@madeinfreedo.com" />
          </div>
          <div className="indent-6 -mt-px">Minsk, EST 20014©</div>
        </div>

        {/* Col 10: Menu */}
        <div className="col-start-10 flex md:justify-end items-center md:items-start gap-4 uppercase font-semibold">
          <span className="text-white/80 cursor-pointer hover:text-white transition-colors uppercase mix-blend-difference">IT</span> 
          
          <div ref={menuWrapperRef} className="flex flex-col text-white min-w-28 md:min-w-25 xl:min-w-32.5 font-medium tracking-normal text-[11px] xl:text-xs relative z-50">
             <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className="group w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 rounded-xl text-left px-4 py-2 capitalize font-semibold tracking-wide flex justify-between relative overflow-hidden shadow-lg"
              >
               <AnimatedCharLink text="Menu" />
             </button>

             <div ref={dropdownRef} className="absolute top-[calc(100%+0.5rem)] right-0 left-auto md:left-0 md:right-auto flex flex-col bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl w-40 md:w-full capitalize overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] z-[101] px-1.5 py-1.5" style={{ display: menuOpen ? 'flex' : 'none' }}>
                 <a href="/projects" onClick={(e) => handleLinkClick(e, '/projects', 'Projects')} className="group menu-item w-full px-3 py-2 rounded-xl hover:bg-white/15 transition-colors overflow-hidden"><AnimatedCharLink text="Projects" /></a>
                 <div className="h-px bg-white/10 w-full my-0.5 mx-auto max-w-[90%]" />
                 <a href="/about" onClick={(e) => handleLinkClick(e, '/about', 'About')} className="group menu-item w-full px-3 py-2 rounded-xl hover:bg-white/15 transition-colors overflow-hidden"><AnimatedCharLink text="About" /></a>
                 <div className="h-px bg-white/10 w-full my-0.5 mx-auto max-w-[90%]" />
                 <a href="/future-vision" onClick={(e) => handleLinkClick(e, '/future-vision', 'Future Vision')} className="group menu-item w-full px-3 py-2 whitespace-nowrap rounded-xl hover:bg-white/15 transition-colors overflow-hidden"><AnimatedCharLink text="Future Vision" /></a>
                 <div className="h-px bg-white/10 w-full my-0.5 mx-auto max-w-[90%]" />
                 <a href="/services" onClick={(e) => handleLinkClick(e, '/services', 'Services')} className="group menu-item w-full px-3 py-2 rounded-xl hover:bg-white/15 transition-colors overflow-hidden"><AnimatedCharLink text="Services" /></a>
                 <div className="h-px bg-white/10 w-full my-0.5 mx-auto max-w-[90%]" />
                 <a href="/contacts" onClick={(e) => handleLinkClick(e, '/contacts', 'Contacts')} className="group menu-item w-full px-3 py-2 rounded-xl hover:bg-white/15 transition-colors overflow-hidden"><AnimatedCharLink text="Contacts" /></a>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
