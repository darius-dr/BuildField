'use client';

import React from 'react';
import { MouseGlow } from '@/components/ui/MouseGlow';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We dig into your business, users, and goals. No generic audits—we find the real problems worth solving.',
    duration: 'Week 1',
  },
  {
    number: '02',
    title: 'Prioritize',
    description: 'Not everything matters equally. We identify the highest-impact opportunities and build a roadmap that makes sense.',
    duration: 'Week 1-2',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Design, build, ship. We move fast but don\'t cut corners. You see progress every week, not just at the end.',
    duration: 'Weeks 2-6',
  },
  {
    number: '04',
    title: 'Measure',
    description: 'Everything we do ties back to metrics. We track what matters and adjust based on real data, not assumptions.',
    duration: 'Ongoing',
  },
  {
    number: '05',
    title: 'Iterate',
    description: 'Launch is the beginning, not the end. We learn from real user behavior and keep improving.',
    duration: 'Ongoing',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="section relative bg-[var(--bg-secondary)] overflow-hidden">
      {/* Mouse glow effect */}
      <MouseGlow />

      {/* Background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <span className="overline mb-4 block">How We Work</span>
            <h2
              className="text-[var(--text-h1)] font-bold text-[var(--text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              A product-led process
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] max-w-md text-lg leading-relaxed">
            We work like a product team—discover, prioritize, execute, measure, iterate. No surprises, no disappearing acts.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Vertical connection line - desktop */}
          <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--neon-pink)] via-[var(--neon-pink-dark)] to-[var(--border-subtle)] z-0" />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 py-10 lg:py-12 border-b border-[var(--border-subtle)] last:border-b-0">
                  {/* Step number */}
                  <div className="flex items-center gap-6 lg:w-32 shrink-0">
                    <div className="relative z-10">
                      {/* Circle background */}
                      <div className="w-[120px] h-[120px] lg:w-[80px] lg:h-[80px] rounded-full bg-[var(--bg-tertiary)] border border-[var(--neon-pink)] flex items-center justify-center group-hover:bg-[var(--surface-accent)] transition-all duration-500">
                        <span
                          className="text-4xl lg:text-3xl font-bold text-[var(--text-tertiary)] group-hover:text-[var(--neon-pink)] transition-colors duration-500"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {step.number}
                        </span>
                      </div>
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-full bg-[var(--neon-pink)] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="max-w-xl">
                      <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--neon-pink-light)] transition-colors duration-500">
                        {step.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Duration badge */}
                    <div className="shrink-0">
                      <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-[var(--text-tertiary)] bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-full group-hover:border-[var(--border-accent)] group-hover:text-[var(--neon-pink)] transition-all duration-500">
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center">
                    <svg
                      className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--neon-pink)] group-hover:translate-x-1 transition-all duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
