# Homepage Specification: buildfield.io

## Overview
Single-page website serving as credibility anchor for outreach-first customer acquisition strategy. Projects professional agency presence to support visual audit-based sales approach.

---

## Design System

### Colors (CSS Variables)

```css
:root {
  /* Primary Backgrounds */
  --bg-primary: #0a0a0a;
  --bg-secondary: #191919;
  --bg-tertiary: #252525;

  /* Accent Gradients */
  --gradient-primary: linear-gradient(135deg, #9985D1 0%, #0057ff 100%);
  --gradient-secondary: linear-gradient(135deg, #1769ff 0%, #0057ff 100%);
  --gradient-glow: radial-gradient(circle, rgba(153,133,209,0.3) 0%, transparent 70%);

  /* Text */
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --text-tertiary: #808080;

  /* Interactive */
  --accent-blue: #0057ff;
  --accent-blue-hover: #1769ff;
  --accent-purple: #9985D1;

  /* Surfaces */
  --surface-glass: rgba(255, 255, 255, 0.05);
  --surface-glass-hover: rgba(255, 255, 255, 0.08);

  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.1);
  --border-focus: rgba(23, 105, 255, 0.5);

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 5px 20px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.4);
  --shadow-glow: 0 0 30px rgba(153, 133, 209, 0.3);
}
```

### Typography

```css
/* Font Family */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Font Sizes */
--text-hero: clamp(2.5rem, 5vw, 4rem);      /* 40-64px */
--text-h1: clamp(2rem, 4vw, 2.75rem);       /* 32-44px */
--text-h2: clamp(1.5rem, 3vw, 2rem);        /* 24-32px */
--text-h3: clamp(1.25rem, 2.5vw, 1.5rem);   /* 20-24px */
--text-body: 1rem;                           /* 16px */
--text-small: 0.875rem;                      /* 14px */
--text-xs: 0.75rem;                          /* 12px */

/* Line Heights */
--leading-tight: 1.2;
--leading-normal: 1.5;
--leading-relaxed: 1.75;

/* Font Weights */
--font-bold: 700;
--font-semibold: 600;
--font-medium: 500;
--font-regular: 400;
```

### Spacing

```css
/* 8px base grid */
--space-1: 0.5rem;   /* 8px */
--space-2: 1rem;     /* 16px */
--space-3: 1.5rem;   /* 24px */
--space-4: 2rem;     /* 32px */
--space-6: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-12: 6rem;    /* 96px */
--space-16: 8rem;    /* 128px */
--space-24: 12rem;   /* 192px */

/* Section Spacing */
--section-padding-y: clamp(4rem, 10vh, 8rem);
--section-padding-x: clamp(1rem, 5vw, 2rem);
```

### Effects

```css
/* Transitions */
--transition-fast: 150ms ease-in-out;
--transition-base: 300ms ease-in-out;
--transition-slow: 500ms ease-in-out;

/* Border Radius */
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-full: 9999px;

/* Blur */
--blur-sm: 4px;
--blur-md: 8px;
--blur-lg: 16px;
```

---

## Section Breakdown

### 1. Hero Section

**Layout**:
- Full viewport height (100vh)
- Centered content
- Particle animation background (full coverage)
- Gradient overlay for text readability

**Content**:
```
<Hero Animation Background>
  <Gradient Overlay>
    <Container maxWidth="900px">
      <Headline>Transform Your Website Into a Conversion Machine</Headline>
      <Subheadline>Data-driven optimization and strategic design that drives measurable results.</Subheadline>
      <CTAGroup>
        <PrimaryButton>Get Your Free Audit</PrimaryButton>
        <SecondaryButton>See Our Approach ↓</SecondaryButton>
      </CTAGroup>
    </Container>
  </Gradient Overlay>
  <ScrollIndicator />
</Hero>
```

**Particle Animation Specs**:
- Technology: HTML5 Canvas (or Three.js for WebGL)
- Particles: 50-100 floating points
- Colors: Purple (#9985D1) to blue (#0057ff) gradient spectrum
- Behavior:
  - Slow floating movement (Perlin noise)
  - Mouse interaction (particles drift toward/away from cursor)
  - Glow effect (radial gradient on each particle)
  - Connection lines between nearby particles (optional)
  - Subtle pulsing opacity
- Performance:
  - Desktop: Full animation 60fps
  - Mobile: Reduced particles (20-30) OR static gradient fallback
  - Lazy load/pause when out of view

**Typography**:
- Headline: 64px (desktop), 40px (mobile), bold (700), white
- Subheadline: 20px, regular (400), light gray (#b0b0b0)
- Line height: 1.2 for headline, 1.5 for subheadline

**Buttons**:
- Primary: Gradient background, white text, glow effect on hover, 16px padding, border-radius 12px
- Secondary: Transparent with border, white text, subtle hover state, same padding/radius

**Responsive**:
- Mobile: Stack buttons vertically, reduce headline size, simplified animation

---

### 2. Value Proposition Section

**Layout**:
- 3-column grid (desktop)
- 1-column stack (mobile)
- Section padding: 96px vertical
- Background: Dark (#0a0a0a)

**Content**:
```
<Section>
  <SectionTitle>Why buildfield.io</SectionTitle>
  <CardGrid columns={3}>
    <Card>
      <Icon>🎯</Icon>
      <CardTitle>Strategic Expertise</CardTitle>
      <CardBody>Product thinking meets technical execution. We don't just build—we solve business problems.</CardBody>
    </Card>
    <Card>
      <Icon>⚡</Icon>
      <CardTitle>Fast Execution</CardTitle>
      <CardBody>Rapid prototyping and optimization cycles. See results in weeks, not months.</CardBody>
    </Card>
    <Card>
      <Icon>📊</Icon>
      <CardTitle>Data-Driven Results</CardTitle>
      <CardBody>Every decision backed by analytics and A/B testing. Measurable outcomes guaranteed.</CardBody>
    </Card>
  </CardGrid>
</Section>
```

**Card Styling**:
- Background: Glass morphism (rgba(255,255,255,0.05))
- Border: 1px solid rgba(255,255,255,0.1)
- Border radius: 12px
- Padding: 32px
- Hover: Slight lift (translateY), glow effect, background brighten
- Transition: 300ms ease-in-out

**Icons**:
- Can use emoji initially or simple SVG icons
- Size: 48px
- Color: Gradient (purple to blue)

---

### 3. Services Section

**Layout**:
- 4-column grid (desktop)
- 2-column grid (tablet)
- 1-column stack (mobile)
- Section padding: 96px vertical
- Background: Slight gradient (#0a0a0a to #191919)

**Content**:
```
<Section>
  <SectionTitle>What We Do</SectionTitle>
  <SectionSubtitle>End-to-end solutions for digital optimization and development</SectionSubtitle>

  <ServiceGrid columns={4}>
    <ServiceCard>
      <ServiceIcon>🎨</ServiceIcon>
      <ServiceTitle>Website Optimization</ServiceTitle>
      <ServiceList>
        • Conversion rate optimization
        • UX/UI improvements
        • Performance enhancements
        • Visual modernization
      </ServiceList>
    </ServiceCard>

    <ServiceCard>
      <ServiceIcon>💻</ServiceIcon>
      <ServiceTitle>New Websites</ServiceTitle>
      <ServiceList>
        • Landing pages
        • Marketing sites
        • Business websites
        • Fast turnaround
      </ServiceList>
    </ServiceCard>

    <ServiceCard>
      <ServiceIcon>📱</ServiceIcon>
      <ServiceTitle>Mobile Apps</ServiceTitle>
      <ServiceList>
        • POC development
        • Simple production apps
        • Cross-platform solutions
        • MVP builds
      </ServiceList>
    </ServiceCard>

    <ServiceCard>
      <ServiceIcon>🧠</ServiceIcon>
      <ServiceTitle>Product Strategy</ServiceTitle>
      <ServiceList>
        • User research
        • Product validation
        • Technical guidance
        • MVP planning
      </ServiceList>
    </ServiceCard>
  </ServiceGrid>
</Section>
```

**Service Card Styling**:
- Similar to value prop cards but taller
- Left-aligned content
- Icon at top
- List items with custom bullets (→ or •)
- Hover: Scale up slightly (1.02), gradient border glow

---

### 4. How It Works Section

**Layout**:
- Horizontal timeline (desktop)
- Vertical timeline (mobile)
- Section padding: 96px vertical
- Background: Dark (#0a0a0a)

**Content**:
```
<Section>
  <SectionTitle>Our Process</SectionTitle>
  <SectionSubtitle>A proven approach from audit to optimization</SectionSubtitle>

  <Timeline>
    <Step number="1">
      <StepTitle>Audit & Analysis</StepTitle>
      <StepDescription>Deep dive into your current site, user behavior, and conversion bottlenecks</StepDescription>
    </Step>

    <Connector /> {/* Gradient line */}

    <Step number="2">
      <StepTitle>Strategic Planning</StepTitle>
      <StepDescription>Define priorities, create visual mockups, and estimate impact</StepDescription>
    </Step>

    <Connector />

    <Step number="3">
      <StepTitle>Design & Build</StepTitle>
      <StepDescription>Rapid implementation with best practices and modern tech</StepDescription>
    </Step>

    <Connector />

    <Step number="4">
      <StepTitle>Test & Optimize</StepTitle>
      <StepDescription>A/B testing, user feedback, and continuous improvement</StepDescription>
    </Step>

    <Connector />

    <Step number="5">
      <StepTitle>Measure Results</StepTitle>
      <StepDescription>Track KPIs, analyze performance, and iterate for growth</StepDescription>
    </Step>
  </Timeline>
</Section>
```

**Step Styling**:
- Number badge: Circle with gradient background, white number
- Title: 20px, semibold
- Description: 16px, light gray
- Connector: 2px gradient line between steps

**Responsive**:
- Desktop: Horizontal with connecting lines
- Mobile: Vertical stack with lines on left side

---

### 5. Why buildfield.io Section

**Layout**:
- 3-column grid (desktop)
- 1-column stack (mobile)
- Section padding: 96px vertical
- Background: Subtle gradient

**Content**:
```
<Section>
  <SectionTitle>What Sets Us Apart</SectionTitle>

  <FeatureGrid columns={3}>
    <Feature>
      <FeatureIcon>✓</FeatureIcon>
      <FeatureTitle>Proven Process</FeatureTitle>
      <FeatureBody>Systematic approach from audit to optimization. Every project follows our battle-tested methodology.</FeatureBody>
    </Feature>

    <Feature>
      <FeatureIcon>⚙️</FeatureIcon>
      <FeatureTitle>Technical Excellence</FeatureTitle>
      <FeatureBody>Modern tech stack, best practices, and performance-first development. Quality code that scales.</FeatureBody>
    </Feature>

    <Feature>
      <FeatureIcon>📈</FeatureIcon>
      <FeatureTitle>Measurable Impact</FeatureTitle>
      <FeatureBody>Every optimization backed by data. Clear metrics, A/B testing, and proven results.</FeatureBody>
    </Feature>
  </FeatureGrid>
</Section>
```

**Feature Styling**:
- Centered content
- Large icon (64px)
- Title: 24px, semibold
- Body: 16px, regular
- No card background (clean, minimal)
- Subtle animations on scroll (fade in, slide up)

---

### 6. CTA Section

**Layout**:
- Full-width section
- Centered content
- Form inline or below headline
- Section padding: 128px vertical
- Background: Gradient background with particle effect overlay

**Content**:
```
<Section gradient>
  <Container maxWidth="700px" centered>
    <CTAHeadline>Ready to Transform Your Website?</CTAHeadline>
    <CTASubtext>Get a free visual audit with actionable recommendations and estimated impact</CTASubtext>

    <Form>
      <FormGrid>
        <Input type="url" placeholder="Your website URL" required />
        <Input type="text" placeholder="Your name" required />
        <Input type="email" placeholder="Your email" required />
        <Select required>
          <option>Primary goal</option>
          <option>Increase conversions</option>
          <option>Improve UX</option>
          <option>Modernize design</option>
          <option>Other</option>
        </Select>
        <TextArea placeholder="Tell us about your goals (optional)" rows={3} />
      </FormGrid>

      <SubmitButton>Request Free Audit</SubmitButton>

      <TrustIndicators>
        No commitment • Visual recommendations • 2-3 day turnaround
      </TrustIndicators>
    </Form>

    <SuccessMessage hidden> {/* Shown after submission */}
      ✓ Thank you! We'll analyze your site and send visual recommendations within 2-3 business days.
    </SuccessMessage>
  </Container>
</Section>
```

**Form Styling**:
- Inputs: Dark background, white text, 48px height, 12px border-radius
- Focus states: Blue glow, border highlight
- Submit button: Large, gradient, glow effect, 56px height
- Grid: 2 columns on desktop, 1 on mobile
- Trust indicators: Small gray text below button

**Validation**:
- Required field indicators
- Email format validation
- URL format validation
- Error states with red glow

**Post-Submit**:
- Form fades out
- Success message fades in
- Confetti animation (optional)
- Auto-scroll to success message

---

### 7. Footer

**Layout**:
- Simple, minimal
- Centered content
- Section padding: 48px vertical
- Background: Very dark (#0a0a0a)

**Content**:
```
<Footer>
  <FooterContent>
    <Logo>buildfield.io</Logo>

    <FooterLinks>
      <Link href="mailto:hello@buildfield.io">hello@buildfield.io</Link>
      <Separator>•</Separator>
      <Link href="/privacy">Privacy</Link>
    </FooterLinks>

    <Copyright>© 2025 buildfield.io. All rights reserved.</Copyright>
  </FooterContent>
</Footer>
```

**Styling**:
- Logo: 24px, gradient text effect
- Links: 14px, gray, underline on hover
- Copyright: 12px, dark gray
- All centered

---

## Navigation

**Desktop**:
```
<Nav fixed top>
  <Logo>buildfield.io</Logo>
  <NavLinks>
    <Link smooth scroll to="#services">Services</Link>
    <Link smooth scroll to="#process">Process</Link>
    <Link smooth scroll to="#contact">Get Started</Link>
  </NavLinks>
</Nav>
```

**Mobile**:
- Hamburger menu (optional)
- Or just logo + "Get Started" button
- Keep it minimal

**Nav Styling**:
- Fixed position, blurred background (backdrop-filter)
- Height: 64px
- Padding: 16px horizontal
- Border bottom: 1px subtle
- Appears/disappears on scroll (optional)

---

## Animations & Interactions

### Scroll Animations
- Fade in on scroll for sections
- Slide up for cards
- Stagger animations for grid items
- Parallax for background elements (subtle)

### Hover States
- Cards: Lift + glow
- Buttons: Glow intensify, slight scale
- Links: Underline slide in
- Service cards: Border glow

### Micro-interactions
- Button ripple effect on click
- Form input focus glow
- Smooth scroll between sections
- Loading spinner on form submit

### Performance
- Lazy load images
- Defer non-critical JS
- Optimize particle animation
- Use CSS transforms for animations (GPU accelerated)

---

## Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  /* 1 column layouts */
  /* Simplified animations */
  /* Larger touch targets (48px min) */
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  /* 2 column grids */
  /* Medium spacing */
}

/* Desktop */
@media (min-width: 1025px) {
  /* 3-4 column grids */
  /* Full animations */
  /* Hover effects */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Max-width containers */
  /* Larger spacing */
}
```

---

## Accessibility

### Requirements
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Focus visible states (not just outline)
- Screen reader friendly
- Alt text for all images/icons
- Proper heading hierarchy
- Form labels and error messages
- Color contrast: 4.5:1 minimum for text

### Implementation
- Semantic HTML
- ARIA labels where needed
- Skip to content link
- Focus trap in forms
- Accessible form validation
- Reduced motion support (@prefers-reduced-motion)

---

## SEO Requirements

### Meta Tags
```html
<title>buildfield.io | Website Optimization & Strategic Digital Solutions</title>
<meta name="description" content="Transform your website into a conversion machine. Data-driven optimization, strategic design, and fast execution for businesses that want results." />
<meta name="keywords" content="website optimization, conversion rate optimization, website redesign, UX improvement, digital agency" />

<!-- Open Graph -->
<meta property="og:title" content="buildfield.io | Website Optimization & Digital Solutions" />
<meta property="og:description" content="Data-driven optimization and strategic design that drives measurable results." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="buildfield.io" />
<meta name="twitter:description" content="Transform your website into a conversion machine" />
<meta name="twitter:image" content="/og-image.jpg" />
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "buildfield.io",
  "url": "https://buildfield.io",
  "description": "Website optimization and strategic digital solutions agency",
  "email": "hello@buildfield.io",
  "sameAs": [
    "https://linkedin.com/company/buildfield"
  ]
}
```

---

## Performance Targets

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1
- **Total Bundle Size**: < 300kb (gzipped)

### Optimization Strategies
- Image optimization (WebP, lazy loading)
- Code splitting
- Font optimization (subset, preload)
- Minification
- Compression (Brotli/gzip)
- CDN delivery
- Caching strategy

---

## Technical Stack

### Recommended
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + CSS modules
- **Animation**:
  - Framer Motion (UI animations)
  - Three.js or Canvas API (particle animation)
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend or simple fetch to API endpoint
- **Hosting**: Vercel
- **Analytics**: Vercel Analytics or Plausible

### Project Structure
```
/app
  /page.tsx                 # Homepage
  /layout.tsx               # Root layout
  /globals.css              # Global styles
/components
  /Hero
    /ParticleBackground.tsx
    /HeroContent.tsx
  /ValueProposition
  /Services
  /Process
  /CTA
  /Footer
  /ui                       # Reusable components
    /Button.tsx
    /Card.tsx
    /Input.tsx
/lib
  /utils.ts
  /animations.ts
/public
  /images
  /fonts
```

---

## Content Copy (Draft)

### Hero
- **Headline**: "Transform Your Website Into a Conversion Machine"
- **Alternatives**:
  - "Turn Your Website Into a Growth Engine"
  - "Optimize Your Website. Drive Real Results."
  - "Data-Driven Design That Converts"

- **Subheadline**: "Data-driven optimization and strategic design that drives measurable results."

### Value Props
1. **Strategic Expertise**: "Product thinking meets technical execution. We don't just build—we solve business problems."
2. **Fast Execution**: "Rapid prototyping and optimization cycles. See results in weeks, not months."
3. **Data-Driven**: "Every decision backed by analytics and A/B testing. Measurable outcomes guaranteed."

### Services (Brief)
- Website Optimization: Conversion rate optimization, UX/UI improvements, performance enhancements
- New Websites: Landing pages, marketing sites, fast turnaround
- Mobile Apps: POC development, simple production apps, MVP builds
- Product Strategy: User research, validation, technical guidance

---

## Open Items

### Content
- [ ] Final headline selection (A/B test options)
- [ ] Service descriptions (expand)
- [ ] Process step details
- [ ] Form confirmation message
- [ ] Email auto-response template

### Design
- [ ] Logo design or wordmark only?
- [ ] Icon style (emoji vs SVG vs custom)
- [ ] Particle animation exact spec
- [ ] Form layout (inline vs stacked)

### Technical
- [ ] Form submission endpoint
- [ ] Email notification setup
- [ ] Analytics tool choice
- [ ] Domain and hosting setup

---

## Next Steps

1. **Review & Approve**: Go through this spec and confirm approach
2. **Setup Project**: Initialize Next.js project
3. **Build Design System**: Implement color/typography/component foundations
4. **Develop Hero**: Start with particle animation and hero section
5. **Build Remaining Sections**: Work through each section sequentially
6. **Test & Optimize**: Performance, accessibility, responsive testing
7. **Deploy**: Launch to production on Vercel

**Ready to start building?**
