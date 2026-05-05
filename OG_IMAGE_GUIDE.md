# OPEN GRAPH IMAGE GUIDE

## Required Image Specifications

**Filename:** `og-image.png`  
**Location:** `/public/og-image.png`  
**Dimensions:** 1200px × 630px  
**Format:** PNG or JPG  
**File Size:** < 1MB (ideally < 300KB)

---

## Design Recommendations

### Content to Include:

1. **Name:** Alvine Lumiti
2. **Title:** Full-Stack Developer
3. **Key Technologies:** React • Next.js • Flutter • Node.js
4. **Visual:** Professional photo or abstract tech design
5. **Branding:** Consistent with portfolio design (dark theme, electric blue accent)

### Design Template:

```
┌─────────────────────────────────────────────────┐
│                                                 │
│                                                 │
│         ALVINE LUMITI                          │
│         Full-Stack Developer                    │
│                                                 │
│         React • Next.js • Flutter • Node.js    │
│                                                 │
│         Building Production Systems             │
│                                                 │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Color Scheme:
- Background: #000000 (pure black)
- Primary Text: #FFFFFF (white)
- Accent: #0066FF (electric blue)
- Secondary: #A0A0A0 (gray)

### Typography:
- Heading: JetBrains Mono (Bold, 72px)
- Subheading: Inter (SemiBold, 48px)
- Body: Inter (Regular, 36px)

---

## Tools for Creating OG Image

### Option 1: Figma (Recommended)
1. Create 1200×630 artboard
2. Design with brand colors
3. Export as PNG

### Option 2: Canva
1. Use "Facebook Post" template (resize to 1200×630)
2. Apply dark theme
3. Add text and branding
4. Download as PNG

### Option 3: Code-Based (HTML/CSS Screenshot)
1. Create HTML page with design
2. Use Puppeteer or similar to screenshot
3. Save as og-image.png

### Option 4: Online Tools
- https://www.opengraph.xyz/
- https://og-playground.vercel.app/
- https://metatags.io/

---

## Testing Your OG Image

### Before Deployment:
1. **Facebook Debugger:** https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator:** https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

### After Deployment:
1. Share URL on social platforms
2. Verify image displays correctly
3. Check image loads quickly
4. Ensure text is readable

---

## Quick Setup (Temporary)

If you need a quick placeholder:

1. Take a screenshot of your portfolio hero section
2. Crop to 1200×630
3. Add text overlay with your name and title
4. Save as `og-image.png` in `/public/`

---

## Final Checklist

- [ ] Image is 1200×630 pixels
- [ ] File size is under 1MB
- [ ] Saved as `og-image.png` in `/public/`
- [ ] Text is readable at small sizes
- [ ] Branding is consistent with portfolio
- [ ] Tested on Facebook, Twitter, LinkedIn
- [ ] Image loads quickly (< 1 second)

---

**Note:** The current meta tags reference `https://lumiti.netlify.app/og-image.png`  
Make sure to create and upload this file before deploying!
