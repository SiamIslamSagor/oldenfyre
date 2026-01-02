# Oldenfyre - Premium Vintage-Style Lighters

A luxury brand website for handcrafted vintage-style lighters with laser-engraved designs and 3D aesthetics.

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP with ScrollTrigger, Framer Motion
- **Build Tool**: Turbopack

## Features

### Design & UX

- Dark, moody luxury theme with black, charcoal, burnt orange, and metallic gold accents
- Vintage + modern fusion aesthetic
- Smooth scroll experience with parallax effects
- Premium spacing and large typography
- Subtle grain/texture overlays

### Animations

- **GSAP + ScrollTrigger**: Page load animations, scroll reveals, parallax effects
- **Framer Motion**: Hover effects, button interactions, card micro-interactions
- Performance-optimized with reduced motion support

### Page Sections

1. **Hero Section**: Full viewport height with animated flame/glow accent and CTA buttons
2. **Brand Story**: Emotional storytelling with scroll-triggered animations
3. **Featured Lighters**: Grid layout with hover animations and metallic shine effects
4. **Customization Highlight**: Showcase of personalization options with parallax
5. **Why Oldenfyre**: Premium feature cards with animated reveals
6. **Call To Action**: Strong emotional closing with flame-inspired animations

## Project Structure

```
app/
├── components/
│   ├── Hero.tsx              # Hero section with GSAP animations
│   ├── BrandStory.tsx        # Brand story with scroll triggers
│   ├── FeaturedLighters.tsx   # Product grid with Framer Motion
│   ├── Customization.tsx      # Customization showcase
│   ├── WhyOldenfyre.tsx      # Feature cards
│   └── CallToAction.tsx      # Final CTA section
├── globals.css               # Custom styles and theme variables
├── layout.tsx               # Root layout with metadata
└── page.tsx                 # Main page assembling all sections
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
```

## Key Implementation Details

### Color Palette

- Background: `#0a0a0a` (near black)
- Charcoal: `#1a1a1a`, `#2a2a2a`
- Accent: `#ff6b35` (burnt orange), `#ff8c5a` (lighter orange)
- Gold: `#d4af37`, `#f4e5c2`
- Text: `#fafafa` (primary), `#a0a0a0` (secondary)

### Animation Performance

- GPU acceleration for smooth animations
- Reduced motion support for accessibility
- Optimized ScrollTrigger implementations
- Proper cleanup with GSAP context

### Responsive Design

- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

## License

This project is proprietary to Oldenfyre.
