# PRODUCTION SYSTEMS DASHBOARD — DESIGN TOKENS

## PANEL STRUCTURE

### System Panel Container
```css
background: var(--bg-surface); /* #0a0a0a */
border: 1px solid var(--border); /* #1a1a1a */
border-radius: 10px;
overflow: hidden;
transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

/* Hover */
border-color: var(--border-active); /* #2a2a2a */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
```

### Left Accent Bar (Hover)
```css
position: absolute;
top: 0;
left: 0;
width: 4px;
height: 100%;
background: var(--accent); /* #0066FF */
opacity: 0 → 1; /* on hover */
transition: opacity 0.3s ease;
```

### High Priority Panel
```css
border-color: rgba(0, 102, 255, 0.2);

/* Hover */
border-color: rgba(0, 102, 255, 0.4);
box-shadow: 0 8px 32px rgba(0, 102, 255, 0.15);
```

---

## HEADER SECTION

### Container
```css
padding: var(--space-lg); /* 2.5rem / 40px */
background: rgba(255, 255, 255, 0.02);
border-bottom: 1px solid var(--border);
```

### System ID
```css
font-family: 'JetBrains Mono';
font-size: 0.7rem;
color: var(--text-tertiary); /* #606060 */
letter-spacing: 0.1em;
text-transform: uppercase;
```

### Title
```css
font-size: 1.8rem;
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.01em;
color: var(--text-primary); /* #FFFFFF */
```

### Subtitle
```css
font-size: 1rem;
color: var(--text-tertiary);
font-family: 'JetBrains Mono';
letter-spacing: 0.02em;
```

---

## STATUS BADGES

### In Development
```css
background: rgba(255, 193, 7, 0.15);
color: #FFC107;
border: 1px solid rgba(255, 193, 7, 0.3);
padding: 0.3rem 0.7rem;
border-radius: 4px;
font-family: 'JetBrains Mono';
font-size: 0.65rem;
font-weight: 600;
letter-spacing: 0.05em;
text-transform: uppercase;
```

### Active
```css
background: rgba(76, 175, 80, 0.15);
color: #4CAF50;
border: 1px solid rgba(76, 175, 80, 0.3);
```

### Deployed
```css
background: rgba(0, 102, 255, 0.15);
color: #3385FF;
border: 1px solid rgba(0, 102, 255, 0.3);
```

### Live
```css
background: rgba(76, 175, 80, 0.15);
color: #4CAF50;
border: 1px solid rgba(76, 175, 80, 0.3);
```

### Priority Badge
```css
background: rgba(0, 102, 255, 0.1);
color: #0066FF;
border: 1px solid rgba(0, 102, 255, 0.2);
padding: 0.25rem 0.6rem;
border-radius: 3px;
font-family: 'JetBrains Mono';
font-size: 0.6rem;
font-weight: 700;
letter-spacing: 0.05em;
text-transform: uppercase;
```

---

## BODY LAYOUT

### Split-Panel Grid
```css
display: grid;
grid-template-columns: 1.2fr 1fr;
gap: var(--space-xl); /* 4rem / 64px */
padding: var(--space-lg); /* 2.5rem / 40px */
```

### Visual Preview Container
```css
position: relative;
width: 100%;
aspect-ratio: 16 / 10;
background: var(--bg-elevated); /* #121212 */
border-radius: 8px;
overflow: hidden;
border: 1px solid var(--border);
```

### Image
```css
width: 100%;
height: 100%;
object-fit: cover;
transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

/* Hover */
transform: scale(1.02);
```

### Image Navigation Dots
```css
/* Container */
position: absolute;
bottom: var(--space-sm);
left: 50%;
transform: translateX(-50%);
display: flex;
gap: 6px;
padding: 0.5rem;
background: rgba(0, 0, 0, 0.85);
backdrop-filter: blur(12px);
border-radius: 20px;
border: 1px solid rgba(255, 255, 255, 0.1);

/* Dot */
width: 6px;
height: 6px;
border-radius: 50%;
background: var(--text-tertiary);
transition: all 0.2s ease;

/* Active Dot */
background: var(--accent);
transform: scale(1.4);
```

---

## CONTENT SECTION

### Section Title
```css
font-family: 'JetBrains Mono';
font-size: 0.75rem;
color: var(--accent); /* #0066FF */
letter-spacing: 0.1em;
text-transform: uppercase;
font-weight: 700;
```

### Overview Text
```css
font-size: 0.95rem;
color: var(--text-secondary); /* #A0A0A0 */
line-height: 1.7;
```

### Tech Stack Tags
```css
/* Container */
display: flex;
flex-wrap: wrap;
gap: 0.4rem;

/* Tag */
font-family: 'JetBrains Mono';
font-size: 0.7rem;
color: var(--text-secondary);
background: var(--bg-elevated);
padding: 0.3rem 0.7rem;
border: 1px solid var(--border);
border-radius: 3px;
letter-spacing: 0.02em;
transition: all 0.2s ease;

/* Hover */
color: var(--accent);
border-color: var(--accent);
background: var(--accent-dim); /* rgba(0, 102, 255, 0.12) */
```

### Deployment Text
```css
font-size: 0.9rem;
color: var(--text-secondary);
line-height: 1.6;
```

---

## ACTION LINKS

### Primary Link (Live)
```css
display: inline-flex;
align-items: center;
gap: 0.5rem;
padding: 0.7rem 1.2rem;
font-family: 'JetBrains Mono';
font-size: 0.75rem;
font-weight: 600;
letter-spacing: 0.03em;
text-transform: uppercase;
border-radius: 5px;
background: var(--accent);
color: #000;
border: none;
transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);

/* Hover */
background: var(--accent-bright); /* #3385FF */
transform: translateY(-2px);
box-shadow: 0 4px 16px rgba(0, 102, 255, 0.3);
```

### Secondary Link (Code)
```css
background: transparent;
color: var(--text-secondary);
border: 1px solid var(--border-active);

/* Hover */
color: var(--accent);
border-color: var(--accent);
background: var(--accent-dim);
```

---

## EXPANDABLE DETAILS

### Trigger Button
```css
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: var(--space-md) var(--space-lg);
background: rgba(255, 255, 255, 0.01);
border: none;
font-family: 'JetBrains Mono';
font-size: 0.8rem;
color: var(--text-secondary);
letter-spacing: 0.05em;
text-transform: uppercase;
cursor: pointer;
transition: all 0.3s ease;

/* Hover */
background: rgba(255, 255, 255, 0.03);
color: var(--accent);
```

### Details Panel
```css
/* Container */
overflow: hidden;

/* Inner Content */
padding: var(--space-lg);
background: rgba(0, 0, 0, 0.3);
display: flex;
flex-direction: column;
gap: var(--space-lg);
```

### Architecture Section Title
```css
font-family: 'JetBrains Mono';
font-size: 0.8rem;
color: var(--accent-bright); /* #3385FF */
letter-spacing: 0.08em;
text-transform: uppercase;
font-weight: 700;
margin-bottom: 0.5rem;
```

### Architecture Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: var(--space-md);
```

### Architecture Item
```css
display: flex;
flex-direction: column;
gap: 0.4rem;
padding: var(--space-sm);
background: rgba(255, 255, 255, 0.02);
border: 1px solid rgba(255, 255, 255, 0.05);
border-radius: 6px;
```

### Architecture Label
```css
font-family: 'JetBrains Mono';
font-size: 0.7rem;
color: var(--text-tertiary);
letter-spacing: 0.08em;
text-transform: uppercase;
```

### Architecture Value
```css
font-size: 0.9rem;
color: var(--text-primary);
line-height: 1.5;
```

### Engineering List
```css
/* Container */
list-style: none;
display: flex;
flex-direction: column;
gap: 0.75rem;

/* Item */
font-size: 0.9rem;
color: var(--text-secondary);
line-height: 1.6;
padding-left: 1.5rem;
position: relative;

/* Arrow Indicator */
::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.9rem;
}
```

---

## MOTION SYSTEM

### Entry Animation
```javascript
initial: { opacity: 0, y: 40 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true, margin: '-80px' }
transition: {
  duration: 0.6,
  delay: index * 0.12,  // 120ms stagger
  ease: [0.2, 0.8, 0.2, 1]
}
```

### Hover Transitions
```css
/* Panel */
transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

/* Image */
transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

/* Links and Tags */
transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);

/* Tech Tags */
transition: all 0.2s ease;
```

### Expansion Animation
```javascript
initial: { height: 0, opacity: 0 }
animate: { height: 'auto', opacity: 1 }
exit: { height: 0, opacity: 0 }
transition: { duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }
```

---

## SPACING SYSTEM

### Panel Spacing
```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2.5rem;   /* 40px */
--space-xl: 4rem;     /* 64px */
--space-2xl: 6rem;    /* 96px */
```

### Usage
```css
/* Header padding */
padding: var(--space-lg);

/* Body padding */
padding: var(--space-lg);

/* Body gap */
gap: var(--space-xl);

/* Section gaps */
gap: var(--space-md);

/* Details padding */
padding: var(--space-lg);
```

---

## COLOR PALETTE

### Base Colors
```css
--bg-void: #000000;           /* Page background */
--bg-surface: #0a0a0a;        /* Panel background */
--bg-elevated: #121212;       /* Elevated elements */
```

### Text Colors
```css
--text-primary: #FFFFFF;      /* Headings, important text */
--text-secondary: #A0A0A0;    /* Body text, descriptions */
--text-tertiary: #606060;     /* Labels, meta text */
```

### Accent Colors
```css
--accent: #0066FF;            /* Primary blue */
--accent-bright: #3385FF;     /* Hover/active states */
--accent-dim: rgba(0, 102, 255, 0.12);  /* Backgrounds */
```

### Border Colors
```css
--border: #1a1a1a;            /* Default borders */
--border-active: #2a2a2a;     /* Hover/active borders */
```

### Status Colors
```css
/* In Development */
#FFC107 (yellow)
rgba(255, 193, 7, 0.15) background
rgba(255, 193, 7, 0.3) border

/* Active/Live */
#4CAF50 (green)
rgba(76, 175, 80, 0.15) background
rgba(76, 175, 80, 0.3) border

/* Deployed */
#3385FF (blue)
rgba(0, 102, 255, 0.15) background
rgba(0, 102, 255, 0.3) border
```

---

## TYPOGRAPHY

### Font Families
```css
--font-mono: 'JetBrains Mono', 'SF Mono', 'Consolas', monospace;
--font-sans: 'Inter', -apple-system, system-ui, sans-serif;
```

### Font Sizes
```css
/* System Title */
font-size: 1.8rem;
font-weight: 700;

/* Subtitle */
font-size: 1rem;

/* Section Titles */
font-size: 0.75rem;
text-transform: uppercase;

/* Body Text */
font-size: 0.95rem;

/* Tech Tags */
font-size: 0.7rem;

/* Status Badges */
font-size: 0.65rem;

/* System ID */
font-size: 0.7rem;
```

---

## RESPONSIVE BREAKPOINTS

### Desktop (>1024px)
```css
.system-panel__body {
  grid-template-columns: 1.2fr 1fr;
}

.system-panel__arch-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

### Tablet (768px - 1024px)
```css
.system-panel__body {
  grid-template-columns: 1fr;
}

.system-panel__arch-grid {
  grid-template-columns: 1fr;
}
```

### Mobile (<768px)
```css
.system-panel__header {
  padding: var(--space-md);
}

.system-panel__body {
  grid-template-columns: 1fr;
  padding: var(--space-md);
}

.system-panel__title {
  font-size: 1.4rem;
}

.system-panel__links {
  flex-direction: column;
}

.system-panel__link {
  width: 100%;
  justify-content: center;
}
```

---

## ACCESSIBILITY

### Contrast Ratios
```css
/* Text on dark backgrounds */
#FFFFFF on #000000 = 21:1 (AAA)
#A0A0A0 on #000000 = 7.5:1 (AA)
#3385FF on #000000 = 5.2:1 (AA)

/* Status badges */
#FFC107 on dark = 8.5:1 (AA)
#4CAF50 on dark = 6.8:1 (AA)
```

### Interactive Elements
```css
/* Buttons and links */
min-height: 44px; /* Touch target size */
padding: 0.7rem 1.2rem;

/* Focus states (can be added) */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

---

**Design Tokens Reference — Production Systems Dashboard**
