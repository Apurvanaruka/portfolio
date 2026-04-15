import { useEffect, useRef } from 'react';

interface DotGridProps {
  className?: string;
}

export default function DotGrid({ className = '' }: DotGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking && containerRef.current) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
            containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        // Set a default center for SSR/initial load
        '--mouse-x': '-1000px',
        '--mouse-y': '-1000px',
      } as React.CSSProperties}
    >
      {/* Base Grid Layer (dim) */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(168, 85, 247, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Hover Grid Layer (bright string glow, masked around the mouse) */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundImage: 'radial-gradient(rgba(168, 85, 247, 0.6) 2px, transparent 2px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(250px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
