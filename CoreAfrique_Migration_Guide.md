# CoreAfrique: Flutter to Next.js + TypeScript + Three.js Migration Guide

## Overview

This document serves as the specification for migrating the CoreAfrique Flutter web application to a modern Next.js application with TypeScript and Three.js animations.

**Source**: Flutter/Dart codebase in `/lib`
**Target**: Next.js 14+ with App Router, TypeScript, Tailwind CSS, Three.js/React Three Fiber

---

## Critical Requirement: Progress Tracking

**IMPORTANT**: After completing each major task or section, you MUST update the `MIGRATION_PROGRESS.md` file with:

- What was completed
- Files created/modified
- Any issues encountered
- What the next agent should work on
- Current completion percentage

This ensures continuity between agent sessions.

---

## Project Context

### What is CoreAfrique?

A fintech/investment advisory company website focused on:

- Investment Advisory Services
- Blockchain Education & VASP Compliance
- Located in Ghana, serving African markets

### Current Flutter Architecture

```
lib/
├── core/
│   ├── constants/          # Colors, dimensions, image URLs
│   ├── data/
│   │   ├── models/         # Data classes (Service, TeamMember, etc.)
│   │   ├── services_data.dart
│   │   ├── team_data.dart
│   │   ├── timeline_data.dart
│   │   ├── clients_data.dart
│   │   └── company_info.dart
│   ├── theme/app_theme.dart
│   └── utils/              # Scroll animations, responsive helpers
├── features/
│   ├── home/
│   │   ├── view/home_page.dart
│   │   └── widgets/        # HeroSection, ServicesPreview, Statistics, etc.
│   ├── about/
│   │   ├── view/about_page.dart
│   │   └── widgets/        # Timeline, MissionSection
│   ├── services/
│   │   ├── view/
│   │   │   ├── services_page.dart
│   │   │   ├── investment_advisory_page.dart
│   │   │   └── blockchain_education_page.dart
│   │   └── widgets/
│   └── shared/             # Navbar, Footer, shared components
├── routing/app_router.dart
└── main.dart
```

---

## Target Next.js Architecture

```
coreafrique-nextjs/
├── app/
│   ├── layout.tsx              # Root layout with Navbar, Footer
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── investment-advisory/
│   │   │   └── page.tsx
│   │   └── blockchain-education/
│   │       └── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── shared/
│   │   ├── SectionContainer.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── TeamCard.tsx
│   │   ├── StatCard.tsx
│   │   └── ClientCategoryCard.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesPreviewSection.tsx
│   │   ├── StatisticsSection.tsx
│   │   ├── ClientsSection.tsx
│   │   └── CTASection.tsx
│   ├── about/
│   │   ├── TimelineWidget.tsx
│   │   └── MissionSection.tsx
│   └── three/                  # Three.js components
│       ├── HeroCanvas.tsx      # 3D hero background
│       ├── ParticleField.tsx   # Animated particles
│       └── FloatingShapes.tsx  # Abstract 3D shapes
├── lib/
│   ├── constants/
│   │   ├── colors.ts
│   │   ├── dimensions.ts
│   │   └── images.ts
│   ├── data/
│   │   ├── services.ts
│   │   ├── team.ts
│   │   ├── timeline.ts
│   │   ├── clients.ts
│   │   └── company.ts
│   └── utils/
│       └── cn.ts               # classnames utility
├── types/
│   ├── service.ts
│   ├── team-member.ts
│   ├── timeline-event.ts
│   └── company-info.ts
├── hooks/
│   ├── useScrollAnimation.ts
│   ├── useAnimatedCounter.ts
│   └── useMediaQuery.ts
├── public/
│   └── images/
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── next.config.js
```

---

## Migration Tasks

### Phase 1: Project Setup

- [ ] Initialize Next.js 14+ project with TypeScript
- [ ] Configure Tailwind CSS with custom theme (colors, fonts)
- [ ] Install dependencies: `@react-three/fiber`, `@react-three/drei`, `three`, `framer-motion`
- [ ] Set up folder structure
- [ ] Configure Google Fonts (DM Sans)

### Phase 2: Types & Data Layer

- [ ] Create TypeScript interfaces from Flutter models
- [ ] Migrate static data files (services, team, timeline, clients, company)
- [ ] Set up constants (colors, dimensions, images)

### Phase 3: Shared Components

- [ ] Navbar (responsive with mobile menu)
- [ ] Footer
- [ ] SectionContainer
- [ ] SectionTitle
- [ ] ServiceCard (with hover animations)
- [ ] TeamCard
- [ ] StatCard (with animated counter)
- [ ] ClientCategoryCard

### Phase 4: Three.js Components

- [ ] Set up React Three Fiber canvas wrapper
- [ ] Create HeroCanvas with particle/shape animations
- [ ] Add subtle 3D background elements
- [ ] Implement scroll-based 3D interactions
- [ ] Ensure performance optimization (lazy loading, suspense)

### Phase 5: Page Implementation

- [ ] Home page with all sections
- [ ] About page with timeline and team
- [ ] Investment Advisory page
- [ ] Blockchain Education page
- [ ] Services overview page

### Phase 6: Animations & Polish

- [ ] Scroll-triggered animations (Framer Motion)
- [ ] Hover effects on cards
- [ ] Page transitions
- [ ] Loading states
- [ ] Responsive testing

### Phase 7: Optimization & Deployment

- [ ] Image optimization
- [ ] SEO metadata
- [ ] Performance audit
- [ ] Accessibility review
- [ ] Build and test

---

## Design Specifications

### Color Palette (from Flutter)

```typescript
export const colors = {
  primary: "#0F5132", // Forest Green
  primaryDark: "#0A3D26",
  primaryLight: "#1A7A4A",
  secondary: "#0D9488", // Teal
  secondaryDark: "#0F766E",
  secondaryLight: "#14B8A6",
  background: "#F5F5F5",
  surface: "#FFFFFF",
  textPrimary: "#1A1A1A",
  textSecondary: "#6B7280",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
};
```

### Typography

- **Font Family**: DM Sans (Google Fonts)
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Breakpoints

```typescript
export const breakpoints = {
  narrow: 600, // < 600px mobile
  medium: 900, // 600-900px tablet
  wide: 1200, // >= 1200px desktop
};
```

### Spacing (8px base)

```typescript
export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
};
```

---

## Three.js Animation Guidelines

### Hero Section 3D Background

Create an immersive but subtle 3D background for the hero section:

- Floating geometric shapes (spheres, icosahedrons) in brand colors
- Particle field with gentle movement
- Responds to mouse movement (parallax effect)
- Fades to solid color on scroll

### Performance Requirements

- Use `@react-three/drei` helpers for optimization
- Implement proper disposal of Three.js objects
- Use `Suspense` for loading states
- Consider reduced motion preferences
- Target 60fps on modern devices

### Example Implementation Pattern

```tsx
// components/three/HeroCanvas.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ParticleField } from "./ParticleField";
import { FloatingShapes } from "./FloatingShapes";

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <ParticleField />
          <FloatingShapes />
        </Suspense>
      </Canvas>
    </div>
  );
}
```

---

## Component Translation Examples

### Flutter ServiceCard → React ServiceCard

**Flutter (Original)**:

```dart
class ServiceCard extends StatefulWidget {
  final Service service;
  final bool isExpanded;
  // ...
}
```

**React (Target)**:

```tsx
// components/shared/ServiceCard.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
  initialExpanded?: boolean;
}

export function ServiceCard({
  service,
  initialExpanded = false,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Card content */}
    </motion.div>
  );
}
```

### Flutter StatCard with Animated Counter → React

**React (Target)**:

```tsx
// hooks/useAnimatedCounter.ts
"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function useAnimatedCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { count, ref };
}
```

---

## Data Migration Reference

### Services Data Structure

```typescript
// types/service.ts
export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  category: "investment-advisory" | "blockchain-education";
  icon?: string;
  url?: string;
}

// lib/data/services.ts
export const servicesData: Service[] = [
  // Migrate from lib/core/data/services_data.dart
];
```

### Team Data Structure

```typescript
// types/team-member.ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  qualifications: string[];
  linkedinUrl?: string;
  email?: string;
  image?: string;
}
```

---

## Key Files to Reference

When migrating, reference these Flutter files for exact content and logic:

| Content      | Flutter File                              |
| ------------ | ----------------------------------------- |
| Colors       | `lib/core/constants/app_colors.dart`      |
| Dimensions   | `lib/core/constants/app_dimensions.dart`  |
| Image URLs   | `lib/core/constants/image_urls.dart`      |
| Services     | `lib/core/data/services_data.dart`        |
| Team         | `lib/core/data/team_data.dart`            |
| Timeline     | `lib/core/data/timeline_data.dart`        |
| Clients      | `lib/core/data/clients_data.dart`         |
| Company Info | `lib/core/data/company_info.dart`         |
| Home Page    | `lib/features/home/view/home_page.dart`   |
| About Page   | `lib/features/about/view/about_page.dart` |
| Navbar       | `lib/features/shared/navbar.dart`         |
| Footer       | `lib/features/shared/footer.dart`         |

---

## Commands Reference

```bash
# Initialize project
npx create-next-app@latest coreafrique-nextjs --typescript --tailwind --eslint --app --src-dir=false

# Install dependencies
npm install three @react-three/fiber @react-three/drei framer-motion
npm install -D @types/three

# Development
npm run dev

# Build
npm run build
```

---

## Success Criteria

The migration is complete when:

1. All 5 pages are functional and match Flutter design
2. Three.js animations are implemented in hero section
3. All components are responsive (mobile, tablet, desktop)
4. Scroll animations and hover effects work correctly
5. TypeScript has no errors
6. Lighthouse performance score > 90
7. Site is deployable to Vercel

---

## Notes for Agents

- Always read the Flutter source files before converting components
- Maintain the exact same content (text, data) from the original
- Use Tailwind CSS classes that match the Flutter styling
- Test responsiveness at all breakpoints
- Keep Three.js animations subtle and professional
- Update `MIGRATION_PROGRESS.md` after each major task
- If stuck, document the issue in progress file for next agent
