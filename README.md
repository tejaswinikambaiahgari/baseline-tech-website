# SnowIn Website Documentation

**Project:** SnowIn Winter Sports Application Marketing Site  
**Client:** Baseline Tech  
**Tech Stack:** React, TypeScript, Tailwind CSS, Next.js  
**Last Updated:** November 2025

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Tech Stack & Why We Chose It](#tech-stack--why-we-chose-it)
4. [Project Structure](#project-structure)
5. [Design System](#design-system)
6. [How to Customize](#how-to-customize)
7. [Component Guide](#component-guide)
8. [Responsive Design](#responsive-design)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

SnowIn is a modern, responsive marketing website for a winter sports tracking application. The site showcases the app's features, builds trust through partner logos and testimonials, and encourages community engagement.

**Key Features:**  
- Fully responsive design (mobile, tablet, desktop)  
- Modern glassmorphism effects  
- Smooth animations and interactions  
- Optimized performance  
- Accessible and SEO-friendly

---

## Getting Started

### Prerequisites

- Node.js 18+ installed  
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd baseline-tech-website

# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

### Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run code linting
```

---

## Tech Stack & Why We Chose It

### React 18+

**Why:** Industry-standard UI library with excellent performance and developer experience.  

- Component reusability  
- Strong ecosystem  
- Easy to maintain and scale

### TypeScript

**Why:** Type safety prevents bugs and improves code quality.  

- Catches errors during development (before production)  
- Better IDE support and autocomplete  
- Self-documenting code

### Tailwind CSS

**Why:** Utility-first CSS framework for rapid, consistent styling.  

- No CSS file switching - style directly in components  
- Built-in responsive design utilities  
- Consistent spacing and sizing scale  
- Smaller bundle size (only includes used classes)  
- Easy to customize colors and spacing

### Next.js 14

**Why:** React framework with built-in optimizations.  

- Image optimization (faster loading)  
- SEO-friendly  
- Simple routing  
- Production-ready out of the box

---
## Project Structure
```
baseline-tech-website/
├── frontend/                  # Main Next.js application
│   ├── .next/                # Next.js build output
│   ├── app/                  # Next.js app directory
│   │   ├── favicon.ico       # Site favicon
│   │   ├── globals.css       # Global styles
│   │   ├── homepage.css      # Homepage-specific styles
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.module.css   # Page-specific module styles
│   │   └── page.tsx          # Homepage component
│   ├── components/           # Reusable React components
│   │   ├── Carousel.jsx      # Image carousel component
│   │   ├── Footer.tsx        # Footer component
│   │   └── NavBar.tsx        # Navigation bar component
│   ├── node_modules/         # Dependencies (auto-generated)
│   ├── public/               # Static assets (images, fonts, etc.)
│   ├── .gitignore           # Git ignore rules for frontend
│   ├── eslint.config.mjs    # ESLint configuration
│   ├── next-env.d.ts        # Next.js TypeScript declarations
│   ├── next.config.ts       # Next.js configuration
│   ├── package-lock.json    # Locked dependency versions
│   ├── package.json         # Frontend dependencies & scripts
│   ├── postcss.config.js    # PostCSS configuration
│   ├── README.md            # Frontend documentation
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── tsconfig.json        # TypeScript configuration
├── backend/                  # Backend services
│   ├── .gitignore           # Git ignore rules for backend
│   ├── package-lock.json    # Locked dependency versions
│   ├── package.json         # Backend dependencies & scripts
│   └── server.js            # Backend server entry point
└── README.md                 # Main project documentation (this file)
```

**Key Directories:**  

**`frontend/app/`** - Contains the main application pages and layouts using Next.js App Router  

**`frontend/components/`** - Reusable React components like NavBar, Footer, and Carousel  

**`frontend/public/`** - Static assets like images, icons, and fonts (accessible at `/` in the browser)  

**`backend/`** - Backend API server (if applicable)  

**Note:** All development work happens in the `frontend/` folder. Navigate there before running any npm commands.

---

## Design System

### Color Palette

Our color scheme is designed for winter sports aesthetics with high contrast for readability.
```javascript
// tailwind.config.js
colors: {
  // Primary Brand Colors
  'snow-blue': '#65B4D0',      // Main brand blue
  'snow-blue-dark': '#4A90B0',  // Hover states
  
  // Neutral Grays
  'gray-50': '#F9FAFB',         // Light backgrounds
  'gray-900': '#111827',        // Main background
  'gray-800': '#1F2937',        // Card backgrounds
  'gray-700': '#374151',        // Borders
  'gray-600': '#4B5563',        // Secondary text
  'gray-300': '#D1D5DB',        // Light text
  
  // Accent Colors
  'ice-blue': '#E0F2FE',        // Highlights
  'mountain-gray': '#6B7280',   // Decorative elements
}
```

### Typography
```javascript
// Font Families
fontFamily: {
  'manrope': ['Manrope', 'sans-serif'],  // Headings
  'sans': ['Inter', 'sans-serif'],        // Body text
}

// Font Sizes (Responsive)
Mobile:  text-4xl  (36px)   → Headings
         text-base (16px)   → Body
         text-sm   (14px)   → Small text
         text-xs   (12px)   → Labels

Desktop: text-6xl  (60px)   → Headings
         text-lg   (18px)   → Body
         text-base (16px)   → Small text
         text-sm   (14px)   → Labels
```

### Spacing Scale

We use a consistent 8px-based spacing scale:
```
gap-4  = 1rem  (16px)
gap-8  = 2rem  (32px)
gap-12 = 3rem  (48px)
gap-16 = 4rem  (64px)
gap-20 = 5rem  (80px)
```

**Why 8px base?** It scales perfectly across all screen sizes and aligns with common design grids.

---

## How to Customize

### Changing Colors

#### Option 1: Tailwind Config (Recommended for Brand Colors)
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Change the main brand blue
        'snow-blue': '#YOUR_COLOR_HERE',  // Replace with your hex code
        
        // Change background
        'gray-900': '#YOUR_DARK_COLOR',
        'gray-800': '#YOUR_CARD_COLOR',
      }
    }
  }
}
```

After changing, restart your dev server:
```bash
npm run dev
```

#### Option 2: Component-Level Changes

Find the specific component and change the className:
```tsx
// Before


// After - change to blue background


// Or use custom color directly

```

### Changing Text Content

All text is in the component files. Example:
```tsx
// components/HeroSection.tsx
Meet Snowin  // Change this text
Your Potential, Our Passion  // Change this text
```

**Pro tip:** Use Find & Replace (Cmd/Ctrl + F) to find text across all files.

### Changing Images

1. **Add your image to `/public/images/`**  
2. **Update the import in the component:**
```tsx
// Before
import heroImage from '@/public/images/hero/snowboarder.jpg'

// After - use your image
import heroImage from '@/public/images/hero/YOUR_IMAGE.jpg'
```

3. **Or use direct path:**
```tsx

```

### Changing Button Styles
```tsx
// Primary button (default)

  Click Me


// Change to outlined button

  Click Me


// Change to different color

  Click Me

```

### Changing Spacing
```tsx
// Current spacing
  // Vertical: 5rem, Horizontal: 2rem

// More spacing
  // Vertical: 8rem, Horizontal: 3rem

// Less spacing
  // Vertical: 3rem, Horizontal: 1rem
```

### Backup Color Schemes

We've designed three alternative color schemes if you want to change the vibe:

#### Dark Ice (Current)
```javascript
primary: '#65B4D0'      // Ice blue
background: '#111827'   // Near black
```

#### Warm Sunset
```javascript
primary: '#F97316'      // Orange
background: '#1C1917'   // Warm dark brown
```

#### Forest Green
```javascript
primary: '#10B981'      // Emerald
background: '#064E3B'   // Deep green
```

#### Midnight Purple
```javascript
primary: '#8B5CF6'      // Purple
background: '#1E1B4B'   // Deep blue-purple
```

---

## Component Guide

### Hero Section (Meet Snowin)

**Location:** `components/HeroSection.tsx`  
**Purpose:** First impression, main headline  
**Customizable:**  
- Headline text  
- Subheading text  
- Background gradient colors  
- Snowboard image
```tsx
// Key classes to modify
className="bg-gray-900"           // Background color
className="text-4xl lg:text-6xl"  // Heading size
className="text-snow-blue"        // Text color
```

### Potential Section (Your Potential, Our Passion)

**Location:** `components/PotentialSection.tsx`  
**Purpose:** Value proposition with sensor image  
**Customizable:**  
- Headline  
- Body copy  
- Button text and link  
- Product image  
- Background color

### Products Section (Snowboards)

**Location:** `components/ProductsSection.tsx`  
**Purpose:** Showcase partner brands/products  
**Customizable:**  
- Number of product cards (add/remove)  
- Product images  
- Product names  
- Card hover effects

**To add a product:**
```tsx

  

```

### Improve Section (Analytics Dashboard)

**Location:** `components/ImproveSection.tsx`  
**Purpose:** Show app features with phone mockup  

**Research Decision:** We used a 2-column grid instead of absolute positioning because:  
- Scales naturally across screen sizes  
- Easier to maintain  
- Better accessibility  
- Prevents layout breaks

**Customizable:**  
- Headline text  
- Phone mockup image  
- Analytics card text  
- Connector line visibility  
- Mountain opacity

**Why we used grid:**
```tsx
// ✅ Good: Natural responsive layout
grid-cols-1 lg:grid-cols-2

// ❌ Avoid: Breaks on different screens
position: absolute; left: 300px; top: 500px;
```

### Adventure Section

**Location:** `components/AdventureSection.tsx`  
**Purpose:** Community CTA with mountain backdrop  
**Customizable:**  
- Headline text  
- Button text  
- Background image  
- Parallax effect intensity

**Parallax effect:**
```tsx
// Adjust scroll speed (lower = slower)
transform: `translateY(${scrollY * 0.3}px)`  // 30% of scroll speed
```

### Partners Section (Trusted By)

**Location:** `components/PartnersSection.tsx`  
**Purpose:** Build trust with brand logos  
**Customizable:**  
- Partner logos  
- Number of partners shown  
- Logo sizes  
- Grid layout

**To add a partner:**
```tsx

  

```

### Testimonials Section

**Location:** `components/TestimonialsSection.tsx`  
**Purpose:** Social proof from users  
**Customizable:**  
- Testimonial text  
- User names  
- User photos  
- Number of testimonials

---

## Responsive Design

### Our Approach: Mobile-First

We built mobile layouts first, then enhanced for larger screens. This ensures the site works on all devices.

### Breakpoints
```
sm:  640px   (Small tablets)
md:  768px   (Tablets)
lg:  1024px  (Laptops) ← Primary breakpoint
xl:  1280px  (Desktops)
2xl: 1536px  (Large displays)
```

### Common Patterns

#### Stack on Mobile, Side-by-Side on Desktop
```tsx

  {/* Stacks vertically on mobile, horizontal on desktop */}

```

#### Hide on Mobile, Show on Desktop
```tsx

  {/* Only visible on screens ≥1024px */}

```

#### Responsive Text Sizes
```tsx

  {/* 36px on mobile, 60px on desktop */}

```

#### Responsive Spacing
```tsx

  {/* Less padding on mobile, more on desktop */}

```

### Testing Responsive Design

**In Browser:**  
1. Open Chrome DevTools (F12 or Cmd+Option+I)  
2. Click device toolbar icon (Cmd+Shift+M)  
3. Test at these widths:  
   - 375px (iPhone SE)  
   - 768px (iPad)  
   - 1024px (Laptop)  
   - 1440px (Desktop)

**Common Issues:**  
- Text too small on mobile → Add responsive text classes  
- Elements overlapping → Check negative margins and absolute positioning  
- Horizontal scroll → Add `overflow-hidden` to container  
- Images too large on mobile → Add `max-w-xs lg:max-w-sm`

---

## Deployment

### Building for Production
```bash
# Create optimized production build
npm run build

# Test production build locally
npm run start
```

### Deployment Options

#### Option 1: Vercel (Recommended)

1. Push code to GitHub  
2. Connect GitHub repo to Vercel  
3. Vercel auto-deploys on every push  
4. Custom domain setup available

#### Option 2: Netlify

1. Push code to GitHub  
2. Connect repo to Netlify  
3. Build command: `npm run build`  
4. Publish directory: `.next`

#### Option 3: Traditional Hosting

1. Run `npm run build`  
2. Upload `.next` folder to server  
3. Ensure Node.js is installed on server  
4. Run `npm run start`

### Environment Variables

If you need API keys or secrets:
```bash
# Create .env.local file
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_ANALYTICS_ID=your_id
```

Access in code:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

---

## Troubleshooting

### "Module not found" Error
```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### Images Not Loading

**Check:**  
1. Image is in `/public/images/` folder  
2. Path starts with `/images/` not `./images/`  
3. File extension is correct (.jpg, .png, .svg)
```tsx
// ✅ Correct


// ❌ Wrong


```

### Tailwind Classes Not Working

**Solutions:**  
1. Restart dev server (`npm run dev`)  
2. Check `tailwind.config.js` includes your component path  
3. Make sure class name is valid Tailwind utility
```javascript
// tailwind.config.js
content: [
  './src/**/*.{js,ts,jsx,tsx}',  // Must include your components
]
```

### Layout Breaks on Mobile

**Common fixes:**  
1. Add `overflow-hidden` to container  
2. Use `max-w-full` on images  
3. Check for fixed widths (use `w-full max-w-xs` instead)  
4. Remove absolute positioning in favor of flex/grid

### Styles Look Different in Production

**Solution:** Run production build locally to test
```bash
npm run build
npm run start
```

### TypeScript Errors

**Ignore for deployment (not recommended):**
```bash
npm run build -- --no-type-check
```

**Better: Fix the errors:**  
- Read error message carefully  
- Add type annotations  
- Use `any` as last resort: `const data: any = ...`

---

## Performance Optimization

### Image Optimization

Always use Next.js `<Image>` component:
```tsx
import Image from 'next/image'

// ✅ Optimized
<Image 
  src="/images/hero.jpg"
  alt="Description"
  width={1200}
  height={800}
  priority  // For above-the-fold images
/>

// ❌ Not optimized

```

### Lazy Loading

Images below the fold automatically lazy load with Next.js Image component.

For custom components:
```tsx
const HeavyComponent = lazy(() => import('./HeavyComponent'))
```

### Font Optimization

Fonts are preloaded in `layout.tsx`:
```tsx
import { Manrope, Inter } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
```

---

## Maintenance & Updates

### Updating Dependencies
```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm install react@latest
```

### Adding New Sections

1. Create component: `components/NewSection.tsx`  
2. Import in `app/page.tsx`  
3. Add to page layout  
4. Test responsive behavior
```tsx
// app/page.tsx
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <>
      
        {/* Your new section */}
      {/* ... other sections */}
    </>
  )
}
```

---

## Best Practices

### Do's ✅

- Use Tailwind utility classes  
- Test on multiple screen sizes  
- Keep components under 300 lines  
- Use semantic HTML (`<section>`, `<article>`, `<nav>`)  
- Add alt text to all images  
- Use `max-w-*` classes to prevent content stretching  
- Commit code frequently with clear messages

### Don'ts ❌

- Don't use inline styles (use Tailwind classes)  
- Don't use absolute positioning for layout (use flex/grid)  
- Don't hardcode colors (use Tailwind colors)  
- Don't forget to test mobile view  
- Don't use `<img>` (use Next.js `<Image>`)  
- Don't commit `.env` files

---

## Support & Resources

### Documentation

- [React Docs](https://react.dev)  
- [Next.js Docs](https://nextjs.org/docs)  
- [Tailwind CSS Docs](https://tailwindcss.com/docs)  
- [TypeScript Docs](https://www.typescriptlang.org/docs)

### Tailwind Cheatsheet

- [Official Cheatsheet](https://tailwindcomponents.com/cheatsheet/)  
- Browse classes visually

### Quick Reference Commands
```bash
npm run dev          # Start development
npm run build        # Build for production
npm run start        # Run production build
npm run lint         # Check code quality
npm install [pkg]    # Add package
npm update          # Update dependencies
```

---

## Contact

**Developer:** Arshia @ Baseline Tech  
**Email:** verma.arsh@northeastern.edu  
**Project Repository:** [GitHub Link]

**For support with:**  
- Bug reports  
- Feature requests  
- Customization questions  
- Deployment issues

Please include:  
- Description of issue  
- Screenshots (if visual)  
- Browser and device info  
- Steps to reproduce

---

## Version History

**v1.0.0** - November 2025  
- Initial release  
- Responsive design complete  
- All sections implemented  
- Production-ready

---

## License

[Your License Here]

---

**Built with ❄️ by Baseline Tech**
