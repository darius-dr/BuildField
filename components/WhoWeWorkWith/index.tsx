'use client';

import React from 'react';

const clientTypes = [
  {
    title: 'Growth-stage companies',
    description: 'You\'ve found product-market fit but your digital presence isn\'t keeping up. Traffic comes in, but conversions leak out.',
    signals: ['Revenue between $500K–$10M', 'No dedicated product team', 'Know something\'s broken but not what'],
  },
  {
    title: 'Teams launching new products',
    description: 'You have a validated idea or business need but lack the internal capacity—know-how, bandwidth, or both—to ship it.',
    signals: ['Need to move fast', 'Want strategy, not just execution', 'Looking for a partner, not a vendor'],
  },
];

const notForYou = [
  'Looking for the cheapest option',
  'Need someone to "just build what we say"',
  'Want a one-off project with no iteration',
];

export const WhoWeWorkWith: React.FC = () => {
  return (
    <section className="section relative bg-[var(--bg-primary)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 diagonal-lines pointer-events-none opacity-50" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <span className="overline mb-4 block">Who This Is For</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-[var(--text-h1)] font-bold text-[var(--text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              We&apos;re selective about fit
            </h2>
            <p className="text-[var(--text-secondary)] max-w-md text-lg leading-relaxed">
              We do our best work with certain types of clients. Here&apos;s who we&apos;re built for.
            </p>
          </div>
        </div>

        {/* Client types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] transition-all duration-500 hover:border-[var(--border-copper)]"
            >
              {/* Green indicator */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs font-semibold tracking-wider uppercase text-green-400">Good fit</span>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-4">
                {client.title}
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {client.description}
              </p>

              {/* Signals */}
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-wider uppercase text-[var(--text-muted)]">You might say:</span>
                <ul className="space-y-2">
                  {client.signals.map((signal, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm">
                      <span className="text-[var(--copper-500)] mt-0.5">&ldquo;</span>
                      <span>{signal}&rdquo;</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Not for you section - more subtle */}
        <div className="max-w-2xl mx-auto text-center p-8 border border-[var(--border-subtle)] rounded-[var(--radius-lg)] bg-[var(--bg-secondary)]/50">
          <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
            We&apos;re probably not the right fit if you&apos;re...
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {notForYou.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm text-[var(--text-tertiary)] bg-[var(--bg-tertiary)] rounded-full border border-[var(--border-subtle)]"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--text-muted)]">
            No judgment—we&apos;re just not the best partner for every project.
          </p>
        </div>
      </div>
    </section>
  );
};
