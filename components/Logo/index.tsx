'use client';

import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark' | 'wordmark';
  color?: 'primary' | 'white' | 'pink';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  color = 'white',
  size = 'md',
  className = '',
}) => {
  const colors = {
    primary: {
      text: 'var(--text-primary)',
      accent: 'var(--neon-pink)',
    },
    white: {
      text: '#fafaf9',
      accent: '#fafaf9',
    },
    pink: {
      text: 'var(--neon-pink)',
      accent: 'var(--neon-pink)',
    },
  };

  const sizes = {
    sm: { mark: 32, text: 22, gap: 10 },
    md: { mark: 44, text: 28, gap: 14 },
    lg: { mark: 64, text: 42, gap: 20 },
  };

  const currentColor = colors[color];
  const currentSize = sizes[size];

  // The Mark - Architectural corners with fading dot mesh
  const LogoMark = () => {
    // Generate dot grid with fading opacity
    const dots = [];
    const gridSize = 5;
    const dotPositions = [];

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        // Calculate position (offset from corners)
        const x = 12 + col * 6;
        const y = 12 + row * 6;

        // Calculate opacity based on distance from center
        const centerX = 24;
        const centerY = 24;
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        const maxDistance = Math.sqrt(Math.pow(12, 2) + Math.pow(12, 2));
        const opacity = Math.max(0.25, 1 - (distance / maxDistance) * 0.6);

        dotPositions.push({ x, y, opacity });
      }
    }

    return (
      <svg
        width={currentSize.mark}
        height={currentSize.mark}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Fading dot mesh */}
        {dotPositions.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r="1.5"
            fill={currentColor.accent}
            opacity={dot.opacity}
          />
        ))}

        {/* Top left corner bracket */}
        <path
          d="M2 2 L2 16 M2 2 L16 2"
          stroke={currentColor.accent}
          strokeWidth="2.5"
          strokeLinecap="square"
        />

        {/* Top right corner bracket */}
        <path
          d="M46 2 L46 16 M46 2 L32 2"
          stroke={currentColor.accent}
          strokeWidth="2.5"
          strokeLinecap="square"
        />

        {/* Bottom left corner bracket */}
        <path
          d="M2 46 L2 32 M2 46 L16 46"
          stroke={currentColor.accent}
          strokeWidth="2.5"
          strokeLinecap="square"
        />

        {/* Bottom right corner bracket */}
        <path
          d="M46 46 L46 32 M46 46 L32 46"
          stroke={currentColor.accent}
          strokeWidth="2.5"
          strokeLinecap="square"
        />
      </svg>
    );
  };

  // Wordmark with Syne font
  const Wordmark = () => (
    <span
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: currentSize.text,
        fontWeight: 700,
        letterSpacing: '0.05em',
        color: currentColor.text,
        lineHeight: 1,
        textTransform: 'uppercase',
      }}
    >
      buildfield
    </span>
  );

  if (variant === 'mark') {
    return (
      <div className={className}>
        <LogoMark />
      </div>
    );
  }

  if (variant === 'wordmark') {
    return (
      <div className={className}>
        <Wordmark />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center ${className}`}
      style={{ gap: currentSize.gap }}
    >
      <LogoMark />
      <Wordmark />
    </div>
  );
};

// Alternative minimal mark - just the brackets
export const LogoMarkMinimal: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 32, color = 'var(--neon-pink)', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Top left bracket */}
    <path
      d="M2 2 L2 12 M2 2 L12 2"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="square"
    />
    {/* Bottom right bracket */}
    <path
      d="M30 30 L30 20 M30 30 L20 30"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="square"
    />
  </svg>
);
