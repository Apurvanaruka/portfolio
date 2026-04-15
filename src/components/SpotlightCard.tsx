import { useRef } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * SpotlightCard - React Bits component
 * A card that shows a glowing spotlight that follows the user's mouse cursor,
 * creating an interactive premium glow effect.
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(168, 85, 247, 0.10)',
  onMouseEnter,
  onMouseLeave,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (divRef.current) {
      divRef.current.style.setProperty('--spotlight-opacity', '1');
    }
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (divRef.current) {
      divRef.current.style.setProperty('--spotlight-opacity', '0');
    }
    onMouseLeave?.(e);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  );
}
