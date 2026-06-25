import { useEffect, useRef } from 'react';

interface FloatingShapesProps {
  className?: string;
}

export default function FloatingShapes({ className = '' }: FloatingShapesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapes = container.querySelectorAll('.floating-shape');
    const animations: number[] = [];

    shapes.forEach((shape, index) => {
      let angle = 0;
      const speed = 0.2 + index * 0.1;
      const radius = 20 + index * 10;
      const baseY = parseFloat((shape as HTMLElement).style.top || '0');
      const baseX = parseFloat((shape as HTMLElement).style.left || '0');

      const animate = () => {
        angle += speed * 0.016;
        const y = baseY + Math.sin(angle) * radius;
        const x = baseX + Math.cos(angle * 0.5) * radius * 0.5;
        const rotation = angle * 30;
        const scale = 1 + Math.sin(angle * 2) * 0.1;

        (shape as HTMLElement).style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
        animations[index] = requestAnimationFrame(animate);
      };

      animations[index] = requestAnimationFrame(animate);
    });

    return () => {
      animations.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Icosahedron */}
      <div
        className="floating-shape absolute w-16 h-16 opacity-20"
        style={{ top: '10%', left: '15%' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 95,25 95,75 50,95 5,75 5,25"
            fill="none"
            stroke="#00F5FF"
            strokeWidth="0.5"
          />
          <line x1="50" y1="5" x2="50" y2="95" stroke="#00F5FF" strokeWidth="0.5" opacity="0.5" />
          <line x1="5" y1="25" x2="95" y2="75" stroke="#00F5FF" strokeWidth="0.5" opacity="0.5" />
          <line x1="5" y1="75" x2="95" y2="25" stroke="#00F5FF" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      {/* Wireframe cube */}
      <div
        className="floating-shape absolute w-20 h-20 opacity-20"
        style={{ top: '60%', right: '10%' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="20" y="20" width="40" height="40" fill="none" stroke="#7B00FF" strokeWidth="0.5" />
          <rect x="35" y="35" width="40" height="40" fill="none" stroke="#7B00FF" strokeWidth="0.5" />
          <line x1="20" y1="20" x2="35" y2="35" stroke="#7B00FF" strokeWidth="0.5" />
          <line x1="60" y1="20" x2="75" y2="35" stroke="#7B00FF" strokeWidth="0.5" />
          <line x1="20" y1="60" x2="35" y2="75" stroke="#7B00FF" strokeWidth="0.5" />
          <line x1="60" y1="60" x2="75" y2="75" stroke="#7B00FF" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Triangle */}
      <div
        className="floating-shape absolute w-12 h-12 opacity-15"
        style={{ top: '30%', right: '20%' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="#FF00C8" strokeWidth="0.5" />
          <polygon points="50,30 75,75 25,75" fill="none" stroke="#FF00C8" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      {/* Another icosahedron */}
      <div
        className="floating-shape absolute w-14 h-14 opacity-15"
        style={{ bottom: '20%', left: '25%' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 95,25 95,75 50,95 5,75 5,25"
            fill="none"
            stroke="#00F5FF"
            strokeWidth="0.5"
          />
          <polygon
            points="50,25 80,40 80,70 50,85 20,70 20,40"
            fill="none"
            stroke="#00F5FF"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Small hexagon */}
      <div
        className="floating-shape absolute w-10 h-10 opacity-20"
        style={{ top: '70%', left: '60%' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,30 90,70 50,90 10,70 10,30"
            fill="none"
            stroke="#7B00FF"
            strokeWidth="0.5"
          />
          <polygon
            points="50,25 75,40 75,65 50,80 25,65 25,40"
            fill="none"
            stroke="#7B00FF"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
}
