'use client';

import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: 'default' | 'bordered' | 'accent';
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ hover = true, variant = 'default', className = '', children, ...props }, ref) => {
    const baseStyles = `
      relative
      rounded-[var(--radius-lg)]
      p-8
      transition-all duration-500 ease-out
    `;

    const variants = {
      default: `
        bg-[var(--bg-secondary)]
        border border-[var(--border-subtle)]
      `,
      bordered: `
        bg-transparent
        border border-[var(--border-medium)]
      `,
      accent: `
        bg-[var(--surface-copper)]
        border border-[var(--border-copper)]
      `,
    };

    const hoverStyles = hover
      ? `
        cursor-pointer
        hover:border-[var(--border-copper)]
        hover:bg-[var(--bg-tertiary)]
        hover:shadow-[0_0_40px_rgba(184,115,51,0.08)]
        hover:-translate-y-1
      `
      : '';

    const classes = `${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`;

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
