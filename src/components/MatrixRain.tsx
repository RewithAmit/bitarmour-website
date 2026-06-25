import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  className?: string;
  density?: number;
  color?: string;
}

export default function MatrixRain({ className = '', density = 1, color = '#00F5FF' }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const chars = '0123456789ABCDEF';
    const fontSize = 14;
    let columns: number;
    let drops: number[];

    const init = () => {
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Random brightness variation
        const alpha = Math.random() * 0.5 + 0.3;
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fillText(text, x, y);

        // Reset drop
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += density;
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    window.addEventListener('resize', () => {
      resize();
      init();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [color, density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none opacity-30 ${className}`}
    />
  );
}
