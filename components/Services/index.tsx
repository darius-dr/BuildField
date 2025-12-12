'use client';

import React from 'react';

const lanes = [
  {
    id: 'optimize',
    label: 'Optimize',
    title: 'Fix what\'s broken',
    subtitle: 'For products that exist but underperform',
    description: 'You have something live—a website, app, or funnel—but it\'s not converting like it should. We diagnose the real problems and fix them systematically.',
    idealFor: 'Established businesses with traffic but conversion issues',
    services: [
      'Conversion audits & optimization',
      'UX/UI improvements',
      'Performance optimization',
      'Funnel analysis & fixes',
      'A/B testing strategy',
    ],
    cta: 'Get a Free Audit',
  },
  {
    id: 'launch',
    label: 'Launch',
    title: 'Build what\'s next',
    subtitle: 'For products that need to exist',
    description: 'You have an idea, a validated need, or a gap in your offering—but no internal capacity to ship it. We take it from concept to launch.',
    idealFor: 'Companies launching MVPs or new digital products',
    services: [
      'MVP strategy & scoping',
      'Product design',
      'Web & mobile development',
      'Landing pages & marketing sites',
      'Launch support & iteration',
    ],
    cta: 'Discuss Your Project',
  },
];

export const Services: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section relative bg-[var(--bg-secondary)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 0% 0%, rgba(184, 115, 51, 0.06), transparent 60%)'
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <span className="overline mb-4 block">How We Help</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-[var(--text-h1)] font-bold text-[var(--text-primary)] max-w-2xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Two ways to work together
            </h2>
            <p className="text-[var(--text-secondary)] max-w-md text-lg">
              Whether you need to improve what exists or build something new—we bring product thinking to both.
            </p>
          </div>
        </div>

        {/* Two lanes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {lanes.map((lane, index) => (
            <div
              key={lane.id}
              className="group relative"
            >
              <div className="relative h-full p-8 md:p-10 bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] transition-all duration-500 ease-out hover:border-[var(--border-copper)]">
                {/* Lane label */}
                <div className="flex items-center justify-between mb-8">
                  <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-[var(--surface-copper)] text-[var(--copper-400)] rounded-full border border-[var(--border-copper)]">
                    {lane.label}
                  </span>
                  <span
                    className="text-6xl md:text-7xl font-bold text-[var(--bg-elevated)] group-hover:text-[var(--copper-900)] transition-colors duration-500"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title & subtitle */}
                <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {lane.title}
                </h3>
                <p className="text-[var(--copper-400)] text-sm font-medium mb-4">
                  {lane.subtitle}
                </p>

                {/* Description */}
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  {lane.description}
                </p>

                {/* Ideal for */}
                <div className="mb-8 pb-6 border-b border-[var(--border-subtle)]">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[var(--text-muted)]">Ideal for:</span>
                  <p className="text-[var(--text-secondary)] mt-1">{lane.idealFor}</p>
                </div>

                {/* Services list */}
                <ul className="space-y-3 mb-8">
                  {lane.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-3 text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--copper-600)]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-[var(--copper-400)] font-medium hover:text-[var(--copper-300)] transition-colors duration-300 group/btn"
                >
                  {lane.cta}
                  <svg
                    className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                {/* Hover line accent */}
                <div className="absolute bottom-0 left-8 md:left-10 right-8 md:right-10 h-[2px] bg-gradient-to-r from-[var(--copper-600)] to-transparent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-[var(--text-tertiary)] text-sm">
            Not sure which lane fits? <button onClick={scrollToContact} className="text-[var(--copper-400)] hover:text-[var(--copper-300)] underline underline-offset-2">Let&apos;s talk</button>—we&apos;ll figure it out together.
          </p>
        </div>
      </div>
    </section>
  );
};
