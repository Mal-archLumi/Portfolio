# ALVINE LUMITI — PORTFOLIO

> Technical Build Log — A Living Engineering Artifact

A complete redesign transforming a generic portfolio into a **technical documentation system** that clearly demonstrates engineering capability through projects-first architecture and brutalist precision design.

---

## 🎯 DESIGN CONCEPT

**Identity:** Engineering documentation interface — not a personal page, but a technical registry of systems built.

**Visual Language:** Brutalist Technical Precision
- Monospace-dominant typography
- High-contrast color system
- Functional design (no decoration)
- Structured information architecture

**Core Innovation:** Projects as primary artifacts with full technical depth, visible architecture, and comprehensive documentation.

---

## 🚀 QUICK START

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 PROJECT STRUCTURE

```
portfolio/
├── src/
│   ├── App.jsx                    # Main application shell
│   ├── main.jsx                   # Entry point
│   ├── styles.css                 # Complete design system
│   │
│   ├── components/
│   │   ├── Header.jsx            # Identity + Status + Nav
│   │   ├── Index.jsx             # Section navigation
│   │   ├── Builds.jsx            # Project documentation blocks
│   │   ├── Stack.jsx             # Technical capability grid
│   │   ├── Approach.jsx          # Operating principles
│   │   └── Contact.jsx           # Engagement channels
│   │
│   └── assets/                    # Images and files
│
├── REDESIGN_DOCS.md              # Complete design documentation
├── QUICK_REFERENCE.md            # Maintenance guide
├── BEFORE_AFTER.md               # Detailed comparison
├── SUMMARY.md                    # Executive summary
└── CLEANUP.md                    # File cleanup guide
```

---

## ✨ KEY FEATURES

### Projects-First Architecture
- Full-width documentation blocks (not cards)
- Build IDs and status badges
- Technical detail grids (architecture, deployment, impact)
- Multi-image galleries with auto-advance
- Comprehensive metadata

### Technical Documentation Interface
- System status indicator
- Index navigation with section counts
- Structured content blocks
- Monospace-dominant typography
- Functional color coding

### Execution-Focused Content
- Operating principles (not personality)
- Production-focused stack
- Architecture documentation
- Deployment status tracking
- Impact metrics

---

## 🎨 DESIGN SYSTEM

### Colors
```css
--bg-primary: #0a0e17;        /* Deep blue-black */
--accent-primary: #00ff9f;    /* Bright cyan-green */
--text-primary: #e8edf4;      /* High contrast white */
--border-base: #1a1f2e;       /* Subtle separation */
```

### Typography
```css
--font-mono: 'JetBrains Mono'  /* Labels, IDs, metadata */
--font-sans: 'Inter'           /* Body text, descriptions */
```

### Spacing
```css
--space-xs: 0.5rem   /* 8px */
--space-sm: 1rem     /* 16px */
--space-md: 1.5rem   /* 24px */
--space-lg: 2.5rem   /* 40px */
--space-xl: 4rem     /* 64px */
```

---

## 📝 CONTENT MANAGEMENT

### Adding a New Build

Edit `src/components/Builds.jsx`:

```javascript
const BUILDS = [
  {
    id: 'BUILD_05',
    title: 'Project Name',
    status: 'IN DEVELOPMENT',  // ACTIVE | IN DEVELOPMENT | DEPLOYED | LIVE
    tags: ['TECH', 'STACK'],
    desc: 'Technical description...',
    details: {
      architecture: '...',
      deployment: '...',
      features: '...',
    },
    images: [img1, img2],
    live: 'https://...',
    code: 'https://github.com/...',
  },
];
```

### Updating Stack

Edit `src/components/Stack.jsx`:

```javascript
const STACK_DOMAINS = [
  {
    title: 'Domain Name',
    tools: ['Tool1', 'Tool2', 'Tool3'],
  },
];
```

### Modifying Approach

Edit `src/components/Approach.jsx`:

```javascript
const PRINCIPLES = [
  {
    title: 'Principle name',
    desc: 'Detailed explanation...',
  },
];
```

See `QUICK_REFERENCE.md` for complete guide.

---

## 🔧 TECHNICAL SPECS

### Stack
- React 19
- Framer Motion
- CSS Custom Properties
- Vite

### Performance
- Bundle: 319 KB JS (103 KB gzipped)
- CSS: 9.89 KB (2.20 KB gzipped)
- Optimized animations (transform + opacity only)
- 60fps on mid-range devices

### Responsive
- Mobile-first CSS
- Breakpoints: 768px, 1024px
- No layout collapse
- Maintained hierarchy

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- WCAG AA contrast

---

## 📚 DOCUMENTATION

### Complete Guides
- **REDESIGN_DOCS.md** — Full design documentation and philosophy
- **QUICK_REFERENCE.md** — Maintenance and update guide
- **BEFORE_AFTER.md** — Detailed before/after comparison
- **SUMMARY.md** — Executive summary of changes
- **CLEANUP.md** — File cleanup guide

### Key Sections
1. Design concept and philosophy
2. Component architecture
3. Content transformation
4. Design decisions and trade-offs
5. Future enhancements

---

## 🎯 SUCCESS CRITERIA

✅ Projects are primary artifacts with technical depth  
✅ Strong visual identity (brutalist precision)  
✅ Engineering credibility (execution-focused)  
✅ Clear information hierarchy  
✅ Distinctive (not template-like)  

**Result:** Portfolio that immediately communicates:
> "This is not a beginner. This is someone who builds real systems."

---

## 🚀 DEPLOYMENT

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

---

## 🔄 MAINTENANCE

### Regular Updates
1. Add new builds as they're completed
2. Update stack as new tools are used in production
3. Refine approach principles based on experience
4. Keep contact information current

### Performance Monitoring
1. Check bundle size after updates
2. Test on multiple devices
3. Verify animations are smooth
4. Monitor Core Web Vitals

---

## 📄 LICENSE

© 2024 Alvine Lumiti — All Rights Reserved

---

## 🤝 CONTACT

- **Email:** makutualvine@gmail.com
- **GitHub:** [Mal-ArchLumi](https://github.com/Mal-ArchLumi)
- **LinkedIn:** [Alvine Lumiti](https://www.linkedin.com/in/alvine-lumiti-7a1a73299/)
- **Location:** Nairobi, Kenya

---

## 🎨 DESIGN CREDITS

**Concept:** Technical Build Log  
**Visual Language:** Brutalist Technical Precision  
**Typography:** JetBrains Mono + Inter  
**Color System:** Functional High-Contrast  
**Architecture:** Projects-First Documentation System  

---

**Built with intent. Designed for impact.**
