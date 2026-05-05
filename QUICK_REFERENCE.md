# PORTFOLIO — QUICK REFERENCE

## Adding a New Build

Edit `/src/components/Builds.jsx`:

```javascript
const BUILDS = [
  {
    id: 'BUILD_05',                    // Sequential ID
    title: 'Your Project Name',       // Clear, technical title
    status: 'IN DEVELOPMENT',          // ACTIVE | IN DEVELOPMENT | DEPLOYED | LIVE
    tags: ['TECH', 'STACK', 'TAGS'],  // Technology tags (all caps)
    desc: 'Technical description...',  // What was built, how it works
    details: {                         // Technical metadata
      architecture: '...',
      deployment: '...',
      features: '...',
    },
    images: [img1, img2, img3],       // Import images at top of file
    live: 'https://...',              // null if not deployed
    code: 'https://github.com/...',   // null if private
  },
];
```

**Remember:**
- Update Index count in `/src/components/Index.jsx`
- Use execution-focused language
- Include technical depth in details
- Multiple images auto-advance in gallery

---

## Updating Stack

Edit `/src/components/Stack.jsx`:

```javascript
const STACK_DOMAINS = [
  {
    title: 'Domain Name',
    tools: ['Tool1', 'Tool2', 'Tool3'],
  },
];
```

**Guidelines:**
- Only list tools used in production
- Organize by domain (Frontend, Backend, etc.)
- Keep "Currently Exploring" section updated

---

## Modifying Approach

Edit `/src/components/Approach.jsx`:

```javascript
const PRINCIPLES = [
  {
    title: 'Principle name',
    desc: 'Detailed explanation...',
  },
];
```

**Keep:**
- Execution-focused language
- System-level thinking
- Technical clarity

---

## Updating Contact

Edit `/src/components/Contact.jsx`:

```javascript
const CHANNELS = [
  {
    label: 'CHANNEL NAME',
    value: 'Display value',
    href: 'https://...',
    icon: FiIconName,
  },
];
```

---

## Design System Reference

### Colors
```css
--accent-primary: #00ff9f;    /* Primary actions, status */
--accent-secondary: #00d4ff;  /* Secondary highlights */
--accent-warning: #ffb800;    /* Warning states */
--accent-error: #ff4757;      /* Error states */
```

### Typography
```css
--font-mono: 'JetBrains Mono'  /* Labels, IDs, metadata */
--font-sans: 'Inter'           /* Body text, descriptions */
```

### Spacing
```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2.5rem;   /* 40px */
--space-xl: 4rem;     /* 64px */
```

---

## Component Structure

```
src/
├── App.jsx                    # Main app shell
├── styles.css                 # Complete design system
├── components/
│   ├── Header.jsx            # Identity + Nav
│   ├── Index.jsx             # Section navigation
│   ├── Builds.jsx            # Project blocks
│   ├── Stack.jsx             # Technical stack
│   ├── Approach.jsx          # Operating principles
│   └── Contact.jsx           # Contact channels
└── assets/                    # Images, PDFs
```

---

## Build & Deploy

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Design Principles

1. **Projects First**
   - Builds are primary content
   - Full technical depth
   - Visible architecture

2. **Technical Language**
   - Execution-focused
   - System-oriented
   - No personality fluff

3. **Visual Precision**
   - Monospace-dominant
   - High contrast
   - Functional color

4. **Information Density**
   - Rich content
   - Clear hierarchy
   - Breathing room

---

## Common Tasks

### Change Status Indicator
Edit `/src/components/Header.jsx`:
```javascript
<span>AVAILABLE FOR WORK</span>  // Change text here
```

### Update Identity
Edit `/src/components/Header.jsx`:
```javascript
<h1 className="header__name">YOUR NAME</h1>
<p className="header__role">Your Role · Your Focus</p>
```

### Modify Navigation
Edit `/src/components/Header.jsx` and `/src/components/Index.jsx`:
```javascript
const NAV_ITEMS = [
  { id: 'section-id', label: 'LABEL' },
];
```

---

## Performance Tips

- Keep images optimized (use WebP when possible)
- Lazy load images below fold
- Minimize animation complexity
- Use transform + opacity only for animations
- Test on mid-range devices

---

## Accessibility Checklist

- [ ] All images have alt text
- [ ] Interactive elements have ARIA labels
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA
- [ ] Focus states are visible

---

## Troubleshooting

**Build fails:**
- Check all imports are correct
- Verify image paths
- Run `npm install` if dependencies missing

**Animations janky:**
- Use `will-change: transform` sparingly
- Reduce animation complexity
- Check for layout thrashing

**Responsive issues:**
- Test at 320px, 768px, 1024px, 1440px
- Use browser dev tools device emulation
- Check grid breakpoints in CSS

---

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [React 19 Docs](https://react.dev/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**Last Updated:** 2024
**Version:** 2.0 (Complete Redesign)
