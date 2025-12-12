'use client';

import React from 'react';

const features = [
  {
    title: 'Proven Process',
    description: 'Systematic approach from audit to optimization. Every project follows our battle-tested methodology that delivers consistent results.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Technical Excellence',
    description: 'Modern tech stack, best practices, and performance-first development. Clean, maintainable code that scales with your business.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Measurable Impact',
    description: 'Every optimization backed by data. Clear metrics, A/B testing, and transparent reporting on what\'s actually moving the needle.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export const WhyUs: React.FC = () => {
  return (
    <section id="why" className="section relative bg-[var(--bg-secondary)] overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 100% 100%, rgba(184, 115, 51, 0.08), transparent 60%)'
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section header - centered */}
        <div className="text-center mb-16 md:mb-24">
          <span className="overline mb-4 block">The Difference</span>
          <h2
            className="text-[var(--text-h1)] font-bold text-[var(--text-primary)] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What sets us apart
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
            We're not just another agency. We combine strategic thinking with hands-on execution to deliver websites that genuinely work.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--text-tertiary)] group-hover:border-[var(--border-copper)] group-hover:text-[var(--copper-400)] group-hover:bg-[var(--surface-copper)] transition-all duration-500">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 group-hover:text-[var(--copper-300)] transition-colors duration-500">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-20 md:mt-28 pt-12 border-t border-[var(--border-subtle)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg text-[var(--text-primary)] font-medium mb-1">
                Ready to see what we can do for your website?
              </p>
              <p className="text-[var(--text-secondary)]">
                Get a free visual audit with actionable recommendations.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[var(--bg-void)] bg-gradient-to-r from-[var(--copper-600)] to-[var(--copper-500)] rounded-[var(--radius-md)] hover:shadow-[0_0_30px_rgba(184,115,51,0.3)] transition-all duration-300"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
