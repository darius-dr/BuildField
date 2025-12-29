'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/Logo';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    const section = heroRef.current;
    section?.addEventListener('mousemove', handleMouseMove);
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-[var(--bg-void)]"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full min-h-screen object-cover"
          style={{
            filter: 'brightness(0.35) contrast(1.1) saturate(0.7)',
          }}
        >
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay to blend video with theme */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.35) 100%)',
          }}
        />

        {/* Neon tint overlay */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(75, 215, 157, 0.2), transparent 70%)',
          }}
        />
      </div>

      {/* Perspective Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated perspective lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(75, 215, 157, 0)" />
              <stop offset="50%" stopColor="rgba(75, 215, 157, 0.3)" />
              <stop offset="100%" stopColor="rgba(75, 215, 157, 0)" />
            </linearGradient>
            <linearGradient id="verticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(75, 215, 157, 0)" />
              <stop offset="30%" stopColor="rgba(75, 215, 157, 0.15)" />
              <stop offset="70%" stopColor="rgba(75, 215, 157, 0.15)" />
              <stop offset="100%" stopColor="rgba(75, 215, 157, 0)" />
            </linearGradient>
          </defs>

          {/* Horizontal perspective lines */}
          {[...Array(20)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={`${5 + i * 5}%`}
              x2="100%"
              y2={`${5 + i * 5}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transitionDelay: `${i * 50}ms`,
                transformOrigin: 'center',
              }}
            />
          ))}

          {/* Vertical accent lines */}
          {[15, 35, 65, 85].map((pos, i) => (
            <line
              key={`v-${i}`}
              x1={`${pos}%`}
              y1="0"
              x2={`${pos}%`}
              y2="100%"
              stroke="url(#verticalGradient)"
              strokeWidth="1"
              className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            />
          ))}
        </svg>

        {/* Radial glow following mouse */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(75, 215, 157, 0.08) 0%, transparent 60%)',
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Blueprint corner markers */}
        <div className={`absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-24 md:h-24 border-l-2 border-t-2 border-[var(--neon-pink)] transition-all duration-700 ${isLoaded ? 'translate-x-0 translate-y-0' : '-translate-x-4 -translate-y-4'}`} />
        <div className={`absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-24 md:h-24 border-r-2 border-t-2 border-[var(--neon-pink)] transition-all duration-700 ${isLoaded ? 'translate-x-0 translate-y-0' : 'translate-x-4 -translate-y-4'}`} style={{ transitionDelay: '100ms' }} />
        <div className={`absolute bottom-4 left-4 md:bottom-8 md:left-8 w-12 h-12 md:w-24 md:h-24 border-l-2 border-b-2 border-[var(--neon-pink)] transition-all duration-700 ${isLoaded ? 'translate-x-0 translate-y-0' : '-translate-x-4 translate-y-4'}`} style={{ transitionDelay: '200ms' }} />
        <div className={`absolute bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-24 md:h-24 border-r-2 border-b-2 border-[var(--neon-pink)] transition-all duration-700 ${isLoaded ? 'translate-x-0 translate-y-0' : 'translate-x-4 translate-y-4'}`} style={{ transitionDelay: '300ms' }} />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* Logo centered at top */}
      <div
        className={`absolute top-6 md:top-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        style={{ transitionDelay: '100ms' }}
      >
        {/* Mobile: smaller full logo */}
        <div className="md:hidden">
          <Logo variant="full" color="white" size="sm" />
        </div>
        {/* Desktop: full logo */}
        <div className="hidden md:block">
          <Logo variant="full" color="white" size="md" />
        </div>
      </div>

      {/* Main Content - Asymmetric Layout */}
      <div className="relative z-10 flex items-center min-h-screen px-6 md:px-12 lg:px-20 pt-32 md:pt-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column - Primary Content */}
            <div className="lg:col-span-7 xl:col-span-6">
              {/* Blueprint label */}
              <div
                className={`mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: '200ms' }}
              >
                <span className="overline">Product-Led Growth Partner</span>
              </div>

              {/* Headline - Dramatic split */}
              <div className="mb-8">
                <h1
                  className={`text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    transitionDelay: '300ms',
                  }}
                >
                  <span className="block text-[var(--text-primary)]">Product</span>
                  <span className="block text-[var(--text-primary)]">expertise.</span>
                </h1>
                <h1
                  className={`text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight mt-2 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    transitionDelay: '450ms',
                  }}
                >
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #4BD79D 0%, #6fe3b3 50%, #3cb87f 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Growth unlocked.
                  </span>
                </h1>
              </div>

              {/* Subheadline with left border */}
              <div
                className={`border-l-2 border-[var(--border-accent)] pl-6 mb-10 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: '600ms' }}
              >
                <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl">
                  We apply product thinking to unlock your growth—whether you&apos;re optimizing what exists or launching something new.
                </p>
              </div>

              {/* CTA Group */}
              <div
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '750ms' }}
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
            </div>

            {/* Right Column - Value Props Stack */}
            <div className="lg:col-span-5 xl:col-span-6 lg:pl-8">
              <div className="space-y-6 max-w-md lg:max-w-none lg:ml-auto">
                {[
                  {
                    label: 'Diagnose',
                    title: 'Product Thinking First',
                    desc: 'We diagnose problems before we prescribe solutions. Most agencies take orders—we find the real blockers.',
                  },
                  {
                    label: 'Ship',
                    title: 'Weeks, Not Months',
                    desc: 'Launch fast, learn faster. We move like a startup because waiting costs you money.',
                  },
                  {
                    label: 'Measure',
                    title: 'Outcomes Over Outputs',
                    desc: 'Every decision tied to growth. We don\'t celebrate launches—we celebrate moved metrics.',
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`group relative glass p-6 rounded-[var(--radius-md)] hover:bg-[var(--surface-glass-hover)] transition-all duration-500 cursor-default ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                    style={{
                      transitionDelay: `${900 + i * 150}ms`,
                      transform: isLoaded ? `translateX(${(mousePosition.x - 0.5) * (i + 1) * 3}px)` : undefined,
                    }}
                  >
                    {/* Number accent */}
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[var(--bg-void)] border border-[var(--border-accent)] flex items-center justify-center">
                      <span className="text-xs text-[var(--neon-pink)] font-bold">{i + 1}</span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="overline mb-2 opacity-70">{item.label}</div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--neon-pink-light)] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#d8d6d3] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Hover accent line */}
                    <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[var(--neon-pink)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '1400ms' }}
      >
        <span className="text-sm text-[var(--text-primary)] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <div className="relative w-[2px] h-16 bg-[var(--border-subtle)] rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[var(--neon-pink)] to-[var(--neon-pink-dark)] animate-[scrollPulse_2s_ease-in-out_infinite]" />
        </div>
      </div>

    </section>
  );
};
