'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

export const HeroContent: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Overline */}
        <div
          className="flex items-center gap-3 mb-8 animate-[fadeInDown_0.8s_ease-out_forwards] opacity-0"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--copper-500)]" />
          <span className="overline">Product-Led Growth Partner</span>
        </div>

        {/* Main headline */}
        <h1
          className="text-[var(--text-display)] font-extrabold leading-[1.05] tracking-tight mb-6 animate-[fadeInUp_1s_ease-out_forwards] opacity-0"
          style={{ animationDelay: '0.2s', fontFamily: 'var(--font-display)' }}
        >
          <span className="block text-[var(--text-primary)]">Product expertise.</span>
          <span className="block text-gradient">Growth unlocked.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10 animate-[fadeInUp_1s_ease-out_forwards] opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          We apply product thinking to unlock your growth—whether you&apos;re optimizing what exists or launching something new. Strategy, design, and development from people who think like product managers.
        </p>

        {/* CTA Group */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-[fadeInUp_1s_ease-out_forwards] opacity-0"
          style={{ animationDelay: '0.6s' }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('contact')}
          >
            Get a Free Audit
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollToSection('services')}
          >
            See How We Help
          </Button>
        </div>

        {/* Value signals - not vanity metrics */}
        <div
          className="flex flex-wrap items-center gap-6 md:gap-10 mt-16 pt-8 border-t border-[var(--border-subtle)] animate-[fadeIn_1s_ease-out_forwards] opacity-0"
          style={{ animationDelay: '0.9s' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--copper-500)]" />
            <span className="text-sm text-[var(--text-secondary)]">Product strategy + execution</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--copper-500)]" />
            <span className="text-sm text-[var(--text-secondary)]">Senior expertise, no hand-offs</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--copper-500)]" />
            <span className="text-sm text-[var(--text-secondary)]">Outcomes over outputs</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeIn_1s_ease-out_forwards] opacity-0"
        style={{ animationDelay: '1.2s' }}
      >
        <span className="text-xs text-[var(--text-muted)] tracking-wider uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--copper-500)] to-transparent animate-[scrollBounce_2s_ease-in-out_infinite]" />
      </div>
    </div>
  );
};
