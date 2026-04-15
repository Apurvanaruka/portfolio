import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
}

export default function Typewriter({
  text,
  speed = 100,
  delay = 0,
  className = '',
  cursor = true,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    
    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, started, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <span className="inline-block animate-pulse opacity-70 ml-[2px]">
          |
        </span>
      )}
    </span>
  );
}
