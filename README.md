# Sion Technology Marketing Site

A beautiful, minimal marketing website for Sion Technology built with Next.js 13+ (App Router), TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 13+ with App Router, TypeScript, Tailwind CSS
- **Dark Theme**: Professional healthcare-focused design with dark theme
- **Responsive**: Mobile-first responsive design that works on all devices
- **Performance**: Optimized for speed with static generation
- **SEO Ready**: Proper metadata and semantic HTML structure
- **Accessible**: WCAG compliant with proper contrast ratios and keyboard navigation

## Pages

- **Home** (`/`) - Complete marketing site with hero, features, testimonials, pricing teaser
- **Pricing** (`/pricing`) - Detailed pricing plans with FAQ section
- **Security** (`/security`) - Security and compliance information
- **Contact** (`/contact`) - Contact form and information
- **Onboarding** (`/onboarding`) - Get started/signup page

## Brand Guidelines

- **Colors**: Dark background (#0B1220), cards (#0F172A), gradient (violet to cyan)
- **Typography**: Inter font with generous spacing
- **Design**: Rounded corners (2xl), subtle shadows, clean layouts

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── pricing/           # Pricing page
│   ├── security/          # Security page
│   ├── contact/           # Contact page
│   └── onboarding/        # Get started page
├── components/            # React components
│   ├── Navbar.tsx         # Navigation (client component)
│   ├── Hero.tsx           # Hero section with floating animation
│   ├── FeatureGrid.tsx    # Features grid
│   ├── HowItWorks.tsx     # How it works steps
│   ├── Testimonials.tsx   # Customer testimonials
│   ├── PricingTeaser.tsx  # Pricing preview
│   └── Footer.tsx         # Site footer
├── constants/             # Site configuration
│   └── site.ts           # All content and configuration
└── lib/                   # Utilities
    └── utils.ts          # Tailwind utility functions
```

## Key Features

### Performance
- Static site generation for maximum speed
- Optimized images and assets
- Minimal JavaScript bundle

### Interactivity
- Only the mobile navigation menu uses client-side JavaScript
- All other components are server components
- Smooth CSS transitions for hover states

### Content Management
- All content centralized in `constants/site.ts`
- Easy to update copy, features, pricing, etc.
- Type-safe content structure

### Styling
- Utility-first Tailwind CSS
- Consistent spacing system (8px grid)
- Professional gradient and shadow system
- Mobile-first responsive breakpoints

## Customization

### Update Content
Edit `constants/site.ts` to modify:
- Site metadata and branding
- Navigation structure
- Features and benefits
- Pricing plans
- Testimonials
- FAQ items

### Styling
The design system uses:
- **Spacing**: 8px grid system
- **Colors**: CSS variables defined in `globals.css`
- **Typography**: Inter font with 3 weights maximum
- **Components**: Rounded-2xl cards with subtle borders and backgrounds

### Adding Pages
1. Create new page in `app/` directory
2. Add navigation links in `constants/site.ts`
3. Update `components/Navbar.tsx` if needed

## Deployment

This site is configured for static export:

```bash
npm run build
```

The `out/` directory will contain the static site ready for deployment to any hosting provider.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

---

Built with ❤️ for healthcare professionals who deserve better tools.