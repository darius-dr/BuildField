'use client';

import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const baseStyles = `
      w-full px-5 py-4
      bg-[var(--bg-tertiary)]
      text-[var(--text-primary)]
      border border-[var(--border-subtle)]
      rounded-[var(--radius-md)]
      placeholder:text-[var(--text-muted)]
      transition-all duration-300 ease-out
      focus:outline-none
      focus:border-[var(--border-accent)]
      focus:bg-[var(--bg-secondary)]
      focus:shadow-[0_0_0_3px_rgba(255,11,172,0.15)]
      disabled:opacity-40 disabled:cursor-not-allowed
    `;

    const errorStyles = error
      ? 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]'
      : '';

    const classes = `${baseStyles} ${errorStyles} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            {label}
          </label>
        )}
        <input ref={ref} className={classes} {...props} />
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const baseStyles = `
      w-full px-5 py-4
      bg-[var(--bg-tertiary)]
      text-[var(--text-primary)]
      border border-[var(--border-subtle)]
      rounded-[var(--radius-md)]
      placeholder:text-[var(--text-muted)]
      transition-all duration-300 ease-out
      focus:outline-none
      focus:border-[var(--border-accent)]
      focus:bg-[var(--bg-secondary)]
      focus:shadow-[0_0_0_3px_rgba(255,11,172,0.15)]
      disabled:opacity-40 disabled:cursor-not-allowed
      resize-none
    `;

    const errorStyles = error
      ? 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]'
      : '';

    const classes = `${baseStyles} ${errorStyles} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            {label}
          </label>
        )}
        <textarea ref={ref} className={classes} {...props} />
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, className = '', children, ...props }, ref) => {
    const baseStyles = `
      w-full px-5 py-4
      bg-[var(--bg-tertiary)]
      text-[var(--text-primary)]
      border border-[var(--border-subtle)]
      rounded-[var(--radius-md)]
      transition-all duration-300 ease-out
      focus:outline-none
      focus:border-[var(--border-accent)]
      focus:bg-[var(--bg-secondary)]
      focus:shadow-[0_0_0_3px_rgba(255,11,172,0.15)]
      disabled:opacity-40 disabled:cursor-not-allowed
      cursor-pointer
      appearance-none
      bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%23666%27%3e%3cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M19 9l-7 7-7-7%27/%3e%3c/svg%3e')]
      bg-[length:1.25rem]
      bg-[right_1rem_center]
      bg-no-repeat
    `;

    const errorStyles = error
      ? 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]'
      : '';

    const classes = `${baseStyles} ${errorStyles} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            {label}
          </label>
        )}
        <select ref={ref} className={classes} {...props}>
          {children}
        </select>
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
