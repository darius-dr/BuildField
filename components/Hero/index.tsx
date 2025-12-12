'use client';

import React from 'react';
import { HeroContent } from './HeroContent';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[var(--bg-void)]">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(0.4) contrast(1.1) saturate(0.8)',
          }}
        >
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </video>

        {/* Color overlay to blend with copper theme */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.5) 50%, rgba(10,9,8,0.95) 100%)',
            mixBlendMode: 'normal',
          }}
        />

        {/* Copper tint overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(184, 115, 51, 0.3), transparent 70%)',
          }}
        />
      </div>

      {/* Architectural grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Geometric accent shapes */}
      <div className="absolute top-20 right-[15%] w-32 h-32 border border-[var(--border-copper)] rounded-full opacity-10 animate-[pulse-subtle_4s_ease-in-out_infinite]" />
      <div className="absolute top-[40%] right-[8%] w-16 h-16 bg-gradient-to-br from-[var(--copper-700)] to-transparent opacity-15" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />

      {/* Hero Content */}
      <HeroContent />
    </section>
  );
};
