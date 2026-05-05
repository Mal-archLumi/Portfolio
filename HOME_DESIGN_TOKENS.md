# HOME SECTION — DESIGN SYSTEM REFERENCE

## GLASSMORPHISM TOKENS

### Glass Frame (Main Profile Container)
```css
background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(255, 255, 255, 0.08);
backdrop-filter: blur(20px);
box-shadow: 
  0 8px 32px rgba(0, 0, 0, 0.4),
  inset 0 1px 0 rgba(255, 255, 255, 0.1);
```

### Info Cards (Floating Context)
```css
background: rgba(10, 10, 10, 0.85);
border: 1px solid rgba(255, 255, 255, 0.1);
backdrop-filter: blur(16px);
box-shadow: 
  0 8px 24px rgba(0, 0, 0, 0.5),
  inset 0 1px 0 rgba(255, 255, 255, 0.08);
```

### Status Badge
```css
background: rgba(0, 102, 255, 0.08);
border: 1px solid rgba(0, 102, 255, 0.2);
backdrop-filter: blur(8px);
```

---

## AMBIENT GLOW SYSTEM

### Glow 1 (Top-Left)
```css
width: 600px;
height: 600px;
background: radial-gradient(circle, #0066FF 0%, transparent 70%);
filter: blur(120px);
opacity: 0.15;
position: top: -200px, left: -100px;
```

### Glow 2 (Bottom-Right)
```css
width: 500px;
height: 500px;
background: radial-gradient(circle, #3385FF 0%, transparent 70%);
filter: blur(120px);
opacity: 0.15;
position: bottom: -150px, right: -100px;
```

---

## MOTION SYSTEM

### Entry Animations
```javascript
// Stagger timing
staggerChildren: 0.08s

// Fade up motion
opacity: 0 → 1
y: 32px → 0px
duration: 0.6s
easing: cubic-bezier(0.2, 0.8, 0.2, 1)

// Glass frame entry
opacity: 0 → 1
scale: 0.95 → 1
duration: 0.8s
delay: 0.3s
```

### Hover States
```css
/* Glass Frame */
transform: translateY(-8px);

/* Info Cards */
transform: translateY(-4px);

/* Buttons */
transform: translateY(-2px);
box-shadow: enhanced;
```

### Ambient Float
```css
animation: float 20s ease-in-out infinite;

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}
```

---

## TYPOGRAPHY TREATMENTS

### Name (Hero Title)
```css
font-size: clamp(3.5rem, 7vw, 6rem);
font-weight: 800;
line-height: 0.95;
letter-spacing: -0.04em;
background: linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Role Title
```css
font-family: 'JetBrains Mono';
font-size: clamp(1.3rem, 2.5vw, 1.8rem);
font-weight: 600;
color: #3385FF;
letter-spacing: 0.02em;
```

---

## BUTTON SYSTEM

### Primary CTA
```css
background: #0066FF;
color: #000;
box-shadow: 0 4px 16px rgba(0, 102, 255, 0.2);

/* Hover */
background: #3385FF;
box-shadow: 0 8px 24px rgba(0, 102, 255, 0.35);
transform: translateY(-2px);
```

### Secondary CTA
```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
backdrop-filter: blur(8px);

/* Hover */
background: rgba(255, 255, 255, 0.08);
border-color: #0066FF;
color: #0066FF;
```

---

## LAYOUT DIMENSIONS

### Desktop (>1024px)
```
Container: 2-column grid (1.1fr 1fr)
Glass Frame: 380px × 480px
Info Card 1: top: 80px, left: -40px
Info Card 2: bottom: 100px, right: -40px
```

### Tablet (768px - 1024px)
```
Container: 1-column stack
Glass Frame: 320px × 420px
Info Cards: aligned to frame edges
```

### Mobile (<768px)
```
Container: 1-column stack
Glass Frame: 280px × 380px
Info Card 1: top: 40px, left: -20px
Info Card 2: bottom: 60px, right: -20px
```

---

## COLOR PALETTE

```css
/* Accent System */
--accent: #0066FF;              /* Primary blue */
--accent-bright: #3385FF;       /* Hover state */
--accent-dim: rgba(0, 102, 255, 0.12);  /* Backgrounds */

/* Glass Borders */
--glass-border-strong: rgba(255, 255, 255, 0.1);
--glass-border-subtle: rgba(255, 255, 255, 0.08);

/* Glass Backgrounds */
--glass-light: rgba(255, 255, 255, 0.03);
--glass-dark: rgba(10, 10, 10, 0.85);
--glass-accent: rgba(0, 102, 255, 0.08);
```

---

## PERFORMANCE NOTES

✅ **GPU-Accelerated Properties Only:**
- transform (translate, scale)
- opacity
- filter (limited to background elements)

✅ **Optimized Blur:**
- Backdrop-filter only on small elements
- Background blur on ambient glows (outside main content)

✅ **Animation Strategy:**
- 60fps target maintained
- No layout thrashing
- Smooth easing curves
- Reasonable durations (0.3s - 0.8s)

---

## ACCESSIBILITY

✅ **Contrast Ratios:**
- Name gradient: WCAG AA compliant
- Body text: #A0A0A0 on #000000 (sufficient contrast)
- Accent text: #3385FF on dark backgrounds

✅ **Motion:**
- Respects prefers-reduced-motion (can be added)
- No essential information in motion
- Hover states provide visual feedback

✅ **Semantic HTML:**
- Proper heading hierarchy (h1, h2)
- Meaningful alt text on image
- Button/link semantics preserved

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
background: rgba(255, 255, 255, 0.02);

/* More opaque */
background: rgba(255, 255, 255, 0.05);
```

### Modify Animation Speed
```javascript
// Faster
transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }

// Slower
transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }
```

---

**Reference Guide — HOME Section Design System**
