'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input, Select, TextArea } from '@/components/ui/Input';

export const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    websiteUrl: '',
    name: '',
    email: '',
    need: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        websiteUrl: '',
        name: '',
        email: '',
        need: '',
        message: '',
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section relative bg-[var(--bg-primary)] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(184, 115, 51, 0.1), transparent 50%),
            radial-gradient(ellipse 60% 40% at 0% 50%, rgba(138, 85, 35, 0.06), transparent 50%)
          `
        }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-12 md:mb-16">
                <span className="overline mb-4 block">Let&apos;s Talk</span>
                <h2
                  className="text-[var(--text-h1)] font-bold text-[var(--text-primary)] mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Ready to unlock growth?
                </h2>
                <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
                  Tell us about your situation. We&apos;ll get back to you within 24 hours with honest feedback on whether we can help.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Input
                  type="url"
                  name="websiteUrl"
                  placeholder="Your website or product URL (if exists)"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                />

                <Select
                  name="need"
                  value={formData.need}
                  onChange={handleChange}
                  required
                >
                  <option value="">What do you need help with?</option>
                  <option value="optimize">Optimize existing product (conversions, UX, performance)</option>
                  <option value="launch">Launch something new (MVP, website, app)</option>
                  <option value="both">Both / Not sure yet</option>
                  <option value="other">Something else</option>
                </Select>

                <TextArea
                  name="message"
                  placeholder="Tell us more—what's the problem you're trying to solve? What have you tried?"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-base"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Start the Conversation'
                    )}
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-[var(--text-muted)]">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--copper-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No sales pitch
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--copper-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Honest feedback
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--copper-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Response in 24h
                  </span>
                </div>
              </form>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-12 animate-[fadeIn_0.5s_ease-out]">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-[var(--surface-copper)] border border-[var(--border-copper)]">
                <svg className="w-10 h-10 text-[var(--copper-400)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2
                className="text-[var(--text-h1)] font-bold text-[var(--text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Message received
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-md mx-auto">
                We&apos;ll review your message and get back to you within 24 hours with our honest take.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
