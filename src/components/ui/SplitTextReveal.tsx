import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SplitTextReveal({ text, className = "" }: { text: string, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Unified detection for any indent-X class
  const indentMatch = className.match(/indent-(\d+)/);
  const indentValue = indentMatch ? `${parseInt(indentMatch[1]) * 0.25}rem` : '0';

  useGSAP(() => {
    gsap.from('.anim-word', {
      y: '120%',
      rotation: 5,
      opacity: 0,
      duration: 1.2,
      stagger: 0.02,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className.replace(/indent-\d+/, '')} style={{ textIndent: '0' }}>
      {text.split(' ').map((word, i) => (
        <span 
          key={i} 
          className="inline-block overflow-hidden align-top relative" 
          style={{ 
            marginRight: '0.25em', 
            paddingBottom: '0.1em',
            paddingLeft: (i === 0 && indentMatch) ? indentValue : '0'
          }}
        >
          <span className="anim-word inline-block origin-top-left">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
