'use client';

import React from 'react';
import { MouseGlow } from '@/components/ui/MouseGlow';

const features = [
  {
    number: '01',
    title: 'Product Thinking, Not Just Execution',
    description: 'Most agencies take orders. We diagnose problems first. We\'ll tell you what to build—and more importantly, what not to build. Strategy before pixels.',
    accent: 'Strategy',
  },
  {
    number: '02',
    title: 'Ship Fast, Learn Faster',
    description: 'Weeks, not months. We move like a startup because waiting costs you money. Launch, measure, iterate. No bloated timelines or scope creep.',
    accent: 'Speed',
  },
  {
    number: '03',
    title: 'Outcomes Over Outputs',
    description: 'We don\'t celebrate launched projects. We celebrate moved metrics. Every decision tied to growth. If we can\'t measure it, we question whether to do it.',
    accent: 'Results',
  },
];

export const ValueProposition: React.FC = () => {
  return (
    <section className="section relative bg-[var(--bg-primary)] overflow-hidden">
      {/* Mouse glow effect */}
      <MouseGlow />

      {/* Background elements */}
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <span className="overline mb-4 block">The Product Approach</span>
            <h2
              className="text-[var(--text-h1)] font-bold text-[var(--text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              How we&apos;re different
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-md text-lg leading-relaxed">
            We think like founders and product leaders—not vendors waiting for a brief.
          </p>
        </div>

        {/* Feature cards - Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                group relative
                ${index === 0 ? 'md:col-span-5' : ''}
                ${index === 1 ? 'md:col-span-7' : ''}
                ${index === 2 ? 'md:col-span-12' : ''}
              `}
            >
              <div
                className={`
                  relative h-full p-8 md:p-10
                  bg-[var(--bg-secondary)]
                  border border-[var(--border-subtle)]
                  rounded-[var(--radius-lg)]
                  transition-all duration-500 ease-out
                  hover:border-[var(--border-accent)]
                  hover:bg-[var(--bg-tertiary)]
                  ${index === 2 ? 'md:flex md:items-center md:justify-between md:gap-12' : ''}
                `}
              >
                {/* Accent line */}
                <div className="absolute top-0 left-8 md:left-10 w-12 h-[2px] bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-pink-dark)] transform -translate-y-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className={index === 2 ? 'md:flex-1' : ''}>
                  {/* Number and accent */}
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="text-5xl md:text-6xl font-bold text-[var(--bg-elevated)] group-hover:text-[var(--neon-pink-dark)] transition-colors duration-500"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {feature.number}
                    </span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-[var(--neon-pink)]">
                      {feature.accent}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow for last card */}
                {index === 2 && (
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-[var(--border-subtle)] group-hover:border-[var(--neon-pink)] group-hover:bg-[var(--surface-accent)] transition-all duration-500">
                    <svg
                      className="w-6 h-6 text-[var(--text-tertiary)] group-hover:text-[var(--neon-pink)] transition-colors duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
