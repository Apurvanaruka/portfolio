/**
 * Aurora - React Bits animated background component
 * Renders soft glowing color blobs that slowly float and morph,
 * creating a premium aurora-borealis-style background effect.
 */

interface AuroraProps {
  className?: string;
}

export default function Aurora({ className = '' }: AuroraProps) {
  return (
    <div
      className={`aurora-container absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-blob aurora-blob-4" />
    </div>
  );
}
