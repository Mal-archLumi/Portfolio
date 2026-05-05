# FILE CLEANUP GUIDE

## Files to Delete (Old Design)

The following files are from the previous design and are no longer used:

### Old Components (Delete)
```bash
rm src/About.jsx
rm src/CapabilityLayer.jsx
rm src/Contact.jsx
rm src/EngagementLayer.jsx
rm src/Entry.jsx
rm src/ExecutionLayer.jsx
rm src/MainContent.jsx
rm src/OperatingModel.jsx
rm src/OutcomesLayer.jsx
rm src/Projects.jsx
rm src/Skills.jsx
```

### Old Styles (Delete)
```bash
rm src/App.css
rm src/skill.css
rm src/index.css
```

### Old Motion System (Delete if exists)
```bash
rm src/motion.js
```

---

## Current File Structure (Keep)

### Core Files
```
src/
├── App.jsx                    ✅ NEW - Main application shell
├── main.jsx                   ✅ KEEP - Entry point
├── styles.css                 ✅ NEW - Complete design system
│
├── components/                ✅ NEW - All components
│   ├── Header.jsx
│   ├── Index.jsx
│   ├── Builds.jsx
│   ├── Stack.jsx
│   ├── Approach.jsx
│   └── Contact.jsx
│
└── assets/                    ✅ KEEP - All images
    ├── Devkazi.png
    ├── mkulimahub.jpg
    ├── kenyamart.jpg
    ├── profile.jpeg
    ├── Alvine_Makutu_Resume.pdf
    └── aws-student-builder-club-mku/
        ├── aws-student-builder-home.png
        ├── aws-student-builder-screen-2.png
        └── aws-student-builder-screen-3.png
```

---

## Cleanup Commands

Run these commands from the project root:

```bash
# Delete old component files
rm src/About.jsx \
   src/CapabilityLayer.jsx \
   src/Contact.jsx \
   src/EngagementLayer.jsx \
   src/Entry.jsx \
   src/ExecutionLayer.jsx \
   src/MainContent.jsx \
   src/OperatingModel.jsx \
   src/OutcomesLayer.jsx \
   src/Projects.jsx \
   src/Skills.jsx

# Delete old style files
rm src/App.css \
   src/skill.css \
   src/index.css

# Delete old motion system (if exists)
rm -f src/motion.js

# Verify build still works
npm run build
```

---

## After Cleanup

Your `src/` directory should look like:

```
src/
├── App.jsx
├── main.jsx
├── styles.css
├── components/
│   ├── Approach.jsx
│   ├── Builds.jsx
│   ├── Contact.jsx
│   ├── Header.jsx
│   ├── Index.jsx
│   └── Stack.jsx
└── assets/
    └── [all images]
```

Clean, organized, and only the files you need.

---

## Verification

After cleanup, verify:

1. ✅ Build succeeds: `npm run build`
2. ✅ Dev server works: `npm run dev`
3. ✅ No console errors
4. ✅ All images load
5. ✅ All sections render

---

## Note

The old files are not breaking anything — they're just unused. You can delete them immediately or keep them as backup temporarily. The new design is completely independent and doesn't reference any old files.
