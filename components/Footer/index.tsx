'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[var(--bg-void)] border-t border-[var(--border-subtle)]">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 100% at 50% 100%, rgba(184, 115, 51, 0.04), transparent 60%)'
        }}
      />

      <div className="container-custom relative z-10 py-16 md:py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl md:text-3xl font-bold text-gradient transition-opacity hover:opacity-80"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            buildfield.io
          </a>

          {/* Tagline */}
          <p className="text-[var(--text-tertiary)] max-w-md">
            Data-driven optimization and strategic design that drives measurable results.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="mailto:hello@buildfield.io"
              className="text-[var(--text-secondary)] hover:text-[var(--copper-400)] transition-colors duration-300"
            >
              hello@buildfield.io
            </a>
            <span className="text-[var(--text-muted)]">/</span>
            <a
              href="#privacy"
              className="text-[var(--text-secondary)] hover:text-[var(--copper-400)] transition-colors duration-300"
            >
              Privacy
            </a>
          </div>

          {/* Bottom bar */}
          <div className="w-full pt-8 mt-4 border-t border-[var(--border-subtle)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[var(--text-muted)]">
                &copy; {new Date().getFullYear()} buildfield.io. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
