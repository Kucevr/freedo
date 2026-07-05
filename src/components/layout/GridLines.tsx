import { } from 'react';

export function GridLines() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-20 flex justify-between">
      {Array.from({ length: 41 }).map((_, i) => {
        let lineClass = "h-full w-px";
        if (i % 4 === 0) {
          lineClass += " block";
        } else if (i % 2 === 0) {
          lineClass += " hidden md:block";
        } else {
          lineClass += " hidden lg:block";
        }

        return (
          <div 
            key={i} 
            className={lineClass} 
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} 
          />
        );
      })}
    </div>
  );
}
