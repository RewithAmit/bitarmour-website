import { useEffect, useRef } from 'react';

interface WireframeShieldProps {
  className?: string;
  size?: number;
}

export default function WireframeShield({ className = '', size = 300 }: WireframeShieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const draw = () => {
      const time = Date.now() * 0.001;
      ctx.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;
      const radius = size * 0.4;

      // Draw shield outline
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - radius);
      ctx.lineTo(centerX + radius * 0.7, centerY - radius * 0.3);
      ctx.quadraticCurveTo(centerX + radius * 0.9, centerY, centerX + radius * 0.7, centerY + radius * 0.3);
      ctx.lineTo(centerX, centerY + radius * 0.9);
      ctx.lineTo(centerX - radius * 0.7, centerY + radius * 0.3);
      ctx.quadraticCurveTo(centerX - radius * 0.9, centerY, centerX - radius * 0.7, centerY - radius * 0.3);
      ctx.closePath();
      ctx.strokeStyle = `rgba(0, 245, 255, ${0.4 + Math.sin(time * 2) * 0.2})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw grid lines inside
      const gridLines = 6;
      for (let i = 0; i <= gridLines; i++) {
        const t = i / gridLines;
        const y = centerY - radius * 0.3 + t * radius * 1.2;
        const width = radius * 0.7 * (1 - Math.abs(t - 0.5) * 0.6);

        ctx.beginPath();
        ctx.moveTo(centerX - width, y);
        ctx.lineTo(centerX + width, y);
        ctx.strokeStyle = `rgba(0, 245, 255, ${0.15 + Math.sin(time * 1.5 + i) * 0.05})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Draw vertical grid lines
      for (let i = 0; i <= gridLines; i++) {
        const t = i / gridLines;
        const x = centerX - radius * 0.7 + t * radius * 1.4;
        const topY = centerY - radius * 0.3 - Math.abs(t - 0.5) * radius * 0.4;
        const bottomY = centerY + radius * 0.9 - Math.abs(t - 0.5) * radius * 0.5;

        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.strokeStyle = `rgba(0, 245, 255, ${0.15 + Math.sin(time * 1.2 + i) * 0.05})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Draw rotating inner ring
      const ringRadius = radius * 0.55;
      const ringSegments = 12;
      const rotation = time * 0.5;

      for (let i = 0; i < ringSegments; i++) {
        const angle = (i / ringSegments) * Math.PI * 2 + rotation;
        const nextAngle = ((i + 1) / ringSegments) * Math.PI * 2 + rotation;
        const x1 = centerX + Math.cos(angle) * ringRadius;
        const y1 = centerY + Math.sin(angle) * ringRadius;
        const x2 = centerX + Math.cos(nextAngle) * ringRadius;
        const y2 = centerY + Math.sin(nextAngle) * ringRadius;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.strokeStyle = `rgba(123, 0, 255, ${0.2 + Math.sin(time * 3 + i) * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw center lock icon
      const lockSize = radius * 0.2;
      ctx.beginPath();
      ctx.arc(centerX, centerY - lockSize * 0.3, lockSize * 0.5, Math.PI, 0);
      ctx.strokeStyle = `rgba(0, 245, 255, ${0.6 + Math.sin(time * 4) * 0.2})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.rect(centerX - lockSize * 0.5, centerY - lockSize * 0.3, lockSize, lockSize * 0.7);
      ctx.strokeStyle = `rgba(0, 245, 255, ${0.6 + Math.sin(time * 4) * 0.2})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
