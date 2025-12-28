'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MouseGlowProps {
  color?: string;
  size?: number;
  opacity?: number;
}

export const MouseGlow: React.FC<MouseGlowProps> = ({
  color = 'rgba(75, 215, 157, 0.08)',
  size = 600,
  opacity = 1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsInView(true);
    const handleMouseLeave = () => setIsInView(false);

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease-out',
          opacity: isInView ? opacity : 0,
        }}
      />
    </div>
  );
};
