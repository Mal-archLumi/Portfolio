# ENGINEERING SECTION — DESIGN TOKENS

## GLASS SYSTEM

### Identity Block (Main Intro)
```css
background: rgba(255, 255, 255, 0.02);
border: 1px solid rgba(255, 255, 255, 0.06);
border-radius: 12px;
backdrop-filter: blur(12px);
box-shadow: 
  0 4px 24px rgba(0, 0, 0, 0.3),
  inset 0 1px 0 rgba(255, 255, 255, 0.05);
```

### System Approach Cards
```css
background: rgba(255, 255, 255, 0.02);
border: 1px solid rgba(255, 255, 255, 0.06);
border-radius: 8px;
backdrop-filter: blur(8px);

/* Hover */
background: rgba(255, 255, 255, 0.03);
border-color: rgba(255, 255, 255, 0.1);
transform: translateY(-4px);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
```

### Accent Bar (Hover State)
```css
/* Left edge of cards on hover */
width: 3px;
height: 100%;
background: var(--accent);
opacity: 0 → 1;
border-radius: 8px 0 0 8px;
```

---

## SOLID SURFACES

### Principles Cards
```css
background: var(--bg-surface); /* #0a0a0a */
border: 1px solid var(--border); /* #1a1a1a */
border-radius: 6px;

/* Hover */
border-color: var(--border-active); /* #2a2a2a */
transform: translateY(-2px);
```

### Technical Systems Cards
```css
background: var(--bg-surface); /* #0a0a0a */
border: 1px solid var(--border); /* #1a1a1a */
border-radius: 8px;

/* Hover */
border-color: var(--border-active);
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
```

### Tech Tags
```css
background: var(--bg-elevated); /* #121212 */
border: 1px solid var(--border);
border-radius: 4px;
padding: 0.35rem 0.75rem;

/* Hover */
color: var(--accent);
border-color: var(--accent);
background: var(--accent-dim); /* rgba(0, 102, 255, 0.12) */
```

---

## TYPOGRAPHY

### Identity Title
```css
font-size: clamp(2rem, 4vw, 2.8rem);
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.02em;
background: linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Identity Label
```css
font-family: 'JetBrains Mono';
font-size: 0.7rem;
color: #3385FF; /* accent-bright */
letter-spacing: 0.15em;
text-transform: uppercase;
```

### Section Titles
```css
font-family: 'JetBrains Mono';
font-size: 1.1rem;
font-weight: 700;
color: #FFFFFF;
letter-spacing: 0.08em;
text-transform: uppercase;

/* With accent line */
::before {
  width: 32px;
  height: 2px;
  background: #0066FF;
}
```

### Card Labels
```css
font-family: 'JetBrains Mono';
font-size: 0.9rem;
font-weight: 700;
color: #3385FF; /* accent-bright */
letter-spacing: 0.03em;
```

### Body Text
```css
font-size: 0.95rem;
color: #A0A0A0; /* text-secondary */
line-height: 1.7;
```

### Domain Titles
```css
font-family: 'JetBrains Mono';
font-size: 0.95rem;
font-weight: 700;
color: #3385FF; /* accent-bright */
letter-spacing: 0.03em;
text-transform: uppercase;
```

---

## SPACING

### Section Spacing
```css
margin-bottom: var(--space-2xl); /* 6rem / 96px */
```

### Card Padding
```css
/* Identity block */
padding: var(--space-xl); /* 4rem / 64px */

/* System approach cards */
padding: var(--space-lg); /* 2.5rem / 40px */

/* Principles cards */
padding: var(--space-md); /* 1.5rem / 24px */

/* Technical systems cards */
padding: var(--space-lg); /* 2.5rem / 40px */
```

### Grid Gaps
```css
/* System approach */
gap: var(--space-md); /* 1.5rem / 24px */

/* Principles */
gap: var(--space-md); /* 1.5rem / 24px */

/* Technical systems */
gap: var(--space-lg); /* 2.5rem / 40px */
```

---

## MOTION SYSTEM

### Entry Animations

**Identity Block:**
```javascript
initial: { opacity: 0, y: 32 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }
viewport: { once: true, margin: '-100px' }
```

**Section Headers:**
```javascript
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }
viewport: { once: true, margin: '-80px' }
```

**Card Grids (Staggered):**
```javascript
// Parent
variants: stagger
stagger: { transition: { staggerChildren: 0.1 } }

// Children
variants: fadeUp
hidden: { opacity: 0, y: 24 }
show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } }
viewport: { once: true, margin: '-60px' }
```

### Hover States

**Glass Cards:**
```css
transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);

/* Hover */
transform: translateY(-4px);
background: rgba(255, 255, 255, 0.03);
border-color: rgba(255, 255, 255, 0.1);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
```

**Solid Cards:**
```css
transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);

/* Hover */
transform: translateY(-2px);
border-color: #2a2a2a;
```

**Tech Tags:**
```css
transition: all 0.2s ease;

/* Hover */
color: #0066FF;
border-color: #0066FF;
background: rgba(0, 102, 255, 0.12);
```

**Accent Bar:**
```css
transition: opacity 0.3s ease;
opacity: 0 → 1; /* on card hover */
```

---

## COLOR PALETTE

### Accent System
```css
--accent: #0066FF;              /* Primary blue */
--accent-bright: #3385FF;       /* Hover/active states */
--accent-dim: rgba(0, 102, 255, 0.12);  /* Backgrounds */
```

### Text Colors
```css
--text-primary: #FFFFFF;        /* Headings, important text */
--text-secondary: #A0A0A0;      /* Body text, descriptions */
--text-tertiary: #606060;       /* Labels, meta text */
```

### Surface Colors
```css
--bg-void: #000000;             /* Page background */
--bg-surface: #0a0a0a;          /* Card backgrounds */
--bg-elevated: #121212;         /* Elevated elements */
```

### Border Colors
```css
--border: #1a1a1a;              /* Default borders */
--border-active: #2a2a2a;       /* Hover/active borders */
```

### Glass Colors
```css
/* Identity block */
rgba(255, 255, 255, 0.02)       /* Background */
rgba(255, 255, 255, 0.06)       /* Border */

/* Approach cards */
rgba(255, 255, 255, 0.02)       /* Background */
rgba(255, 255, 255, 0.06)       /* Border */

/* Hover states */
rgba(255, 255, 255, 0.03)       /* Background */
rgba(255, 255, 255, 0.1)        /* Border */
```

---

## GRID LAYOUTS

### System Approach
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: var(--space-md);
```

### Engineering Principles
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
gap: var(--space-md);
```

### Technical Systems
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
gap: var(--space-lg);
```

---

## RESPONSIVE BREAKPOINTS

### Desktop (>1024px)
- Multi-column grids (2 columns typically)
- Full spacing and padding
- All hover effects active

### Tablet (768px - 1024px)
- Single column grids
- Maintained card structure
- Slightly reduced spacing

### Mobile (<768px)
```css
/* Identity block */
padding: var(--space-md); /* Reduced from xl */

/* Title */
font-size: 1.8rem; /* Reduced from 2.8rem */

/* All grids */
grid-template-columns: 1fr; /* Single column */
```

---

## ACCESSIBILITY

### Contrast Ratios
```css
/* Text on dark backgrounds */
#FFFFFF on #000000 = 21:1 (AAA)
#A0A0A0 on #000000 = 7.5:1 (AA)
#3385FF on #000000 = 5.2:1 (AA)
```

### Focus States
```css
/* Can be added for keyboard navigation */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

### Motion Preferences
```css
/* Can be added */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## PERFORMANCE NOTES

### GPU-Accelerated Properties
✅ `transform` (translateY)  
✅ `opacity`  
✅ `filter` (backdrop-filter on limited elements)  

### Avoided Properties
❌ `height` animations  
❌ `width` animations  
❌ `margin` animations  
❌ `padding` animations  

### Optimization Strategy
- Viewport-triggered animations (once: true)
- Reasonable animation durations (0.3s - 0.6s)
- Staggered reveals for perceived performance
- Limited backdrop-filter usage

---

## QUICK CUSTOMIZATION

### Change Accent Color
```css
:root {
  --accent: #YOUR_COLOR;
  --accent-bright: #LIGHTER_VERSION;
  --accent-dim: rgba(YOUR_RGB, 0.12);
}
```

### Adjust Glass Intensity
```css
/* More transparent */
background: rgba(255, 255, 255, 0.01);

/* More opaque */
background: rgba(255, 255, 255, 0.04);
```

### Modify Hover Elevation
```css
/* More subtle */
transform: translateY(-2px);

/* More dramatic */
transform: translateY(-6px);
```

### Change Animation Speed
```javascript
// Faster
transition: { duration: 0.3 }

// Slower
transition: { duration: 0.8 }
```

---

**Design Tokens Reference — Engineering Section**
