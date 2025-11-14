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
