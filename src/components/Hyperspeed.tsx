import { useEffect, useRef } from 'react';

interface HyperspeedProps {
  className?: string;
  effectOptions?: any;
}

export const hyperspeedPresets = {
  one: {
    colors: {
      leftCars: ['#d856bf', '#6750a2', '#c247ac'],
      rightCars: ['#03b3c3', '#0e5ea5', '#324555'],
    }
  }
};

export function Hyperspeed({ className = '', effectOptions = hyperspeedPresets.one }: HyperspeedProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); 
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    let speed = 25;

    // Merge the colors from both cars for stars
    const colors = [
      ...(effectOptions?.colors?.leftCars || ['#a855f7', '#ec4899']),
      ...(effectOptions?.colors?.rightCars || ['#03b3c3', '#ffffff'])
    ];

    const stars: { x: number; y: number; z: number; prevZ: number; color: string }[] = [];

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < 350; i++) {
        stars.push({
          x: Math.random() * 2000 - 1000,
          y: Math.random() * 2000 - 1000,
          z: Math.random() * 2000,
          prevZ: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      // Dark trail for motion blur
      ctx.fillStyle = 'rgba(10, 10, 10, 0.45)';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.prevZ = star.z;
        star.z -= speed;

        if (star.z <= 1) {
          star.x = Math.random() * 2000 - 1000;
          star.y = Math.random() * 2000 - 1000;
          star.z = 2000;
          star.prevZ = 2000;
        }

        const sx = cx + (star.x / star.z) * 1000;
        const sy = cy + (star.y / star.z) * 1000;
        const px = cx + (star.x / star.prevZ) * 1000;
        const py = cy + (star.y / star.prevZ) * 1000;

        ctx.beginPath();
        ctx.strokeStyle = star.color;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [effectOptions]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
