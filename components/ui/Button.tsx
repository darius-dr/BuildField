'use client';

import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, disabled, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-semibold tracking-wide
      transition-all duration-300 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-pink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-void)]
      disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none
      relative overflow-hidden
    `;

    const variants = {
      primary: `
        bg-gradient-to-r from-[var(--neon-pink-dark)] via-[var(--neon-pink)] to-[var(--neon-pink-dark)]
        text-white font-bold
        border border-[var(--neon-pink)]
        hover:shadow-[0_0_40px_rgba(255,11,172,0.5)]
        hover:border-[var(--neon-pink-light)]
        active:scale-[0.98]
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
        before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700
      `,
      secondary: `
        bg-transparent
        border border-[var(--border-medium)]
        text-[var(--text-primary)]
        hover:border-[var(--neon-pink)]
        hover:bg-[var(--surface-accent)]
        hover:text-[var(--neon-pink-light)]
        active:scale-[0.98]
      `,
      outline: `
        bg-transparent
        border-2 border-[var(--neon-pink)]
        text-[var(--neon-pink)]
        hover:bg-[var(--neon-pink)]
        hover:text-[var(--bg-void)]
        active:scale-[0.98]
      `,
      ghost: `
        bg-transparent
        text-[var(--text-secondary)]
        hover:text-[var(--neon-pink)]
        hover:bg-[var(--surface-glass)]
        active:scale-[0.98]
      `,
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-[var(--radius-sm)]',
      md: 'px-6 py-3 text-sm rounded-[var(--radius-md)]',
      lg: 'px-8 py-4 text-base rounded-[var(--radius-md)]',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
