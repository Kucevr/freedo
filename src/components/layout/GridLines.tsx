import { } from 'react';

export function GridLines() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-20 flex justify-between">
      {Array.from({ length: 41 }).map((_, i) => (
        <div key={i} className="h-full w-px bg-white-[0.03]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} />
      ))}
    </div>
  );
}
