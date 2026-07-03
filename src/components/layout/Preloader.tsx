import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete,
        defaults: { ease: 'power3.inOut' }
      });

      // Pulse
      tl.to('.preloader-logo', { scale: 1.1, opacity: 0.8, duration: 0.5, yoyo: true, repeat: 3 })
        // Zoom and vanish
        .to('.preloader-logo', { scale: 20, opacity: 0, duration: 1, ease: 'expo.in' }, '+=0.2')
        .to(scope.current, { autoAlpha: 0, duration: 0.5 }, '<0.2');
    },
    { scope }
  );

  return (
    <div
      ref={scope}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center pointer-events-none"
    >
      {/* Minimalistic SVG logo */}
      <svg className="preloader-logo w-16 h-16 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <path d="M12 2L2 22h20L12 2z"/>
      </svg>
      <div className="absolute bottom-10 uppercase text-[10px] tracking-[0.2em] text-white/50">
        EXPERIENCE LOADING
      </div>
    </div>
  );
}
