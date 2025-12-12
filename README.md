# buildfield.io

Modern, dark-themed agency website for buildfield.io - Website optimization and strategic digital solutions.

## Features

- ✨ **Glowing Particle Animation** - Interactive canvas-based hero section
- 🎨 **Modern Dark Design** - High-contrast gradients with premium feel
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Performance First** - Built with Next.js 14+ and optimized for speed
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎯 **Conversion Focused** - Clear CTAs and user flows

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + CSS Variables
- **Animation**: Framer Motion + Custom Canvas
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
/app                  # Next.js app directory
  /globals.css       # Global styles & design system
  /layout.tsx        # Root layout
  /page.tsx          # Homepage
/components
  /Hero              # Hero section with particle animation
  /ValueProposition  # Value prop cards
  /Services          # Services grid
  /Process           # Process timeline
  /WhyUs             # Trust builders
  /CTA               # Contact form
  /Footer            # Footer
  /ui                # Reusable UI components
```

## Design System

All design tokens are defined in `app/globals.css` using CSS variables:

- **Colors**: Dark backgrounds with purple-blue gradients
- **Typography**: Inter font with responsive sizing
- **Spacing**: 8px base grid system
- **Effects**: Glass morphism, glows, smooth transitions

## Documentation

- [PRD.md](./PRD.md) - Product Requirements Document
- [HOMEPAGE_SPEC.md](./HOMEPAGE_SPEC.md) - Detailed Homepage Specification
- [CLAUDE.md](./CLAUDE.md) - Business Context

## Deployment

This project is optimized for Vercel deployment:

```bash
vercel
```

## License

© 2025 buildfield.io. All rights reserved.
