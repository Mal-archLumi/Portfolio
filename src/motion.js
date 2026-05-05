// Shared motion system — import variants from here, never define inline

export const EASE = [0.2, 0.8, 0.2, 1];

// Section header block fade-up
export const sectionHead = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// Staggered container — wraps a list of children
export const staggerContainer = (stagger = 0.09) => ({
  hidden: {},
  show:   { transition: { staggerChildren: stagger } },
});

// Individual staggered child
export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.42, ease: EASE } },
};

// Card hover — applied via whileHover
export const cardHover = {
  y: -6,
  scale: 1.015,
  transition: { duration: 0.22, ease: EASE },
};

// Button interactions
export const btnTap = { scale: 0.97 };
export const btnHover = { scale: 1.03, transition: { duration: 0.18, ease: EASE } };

// Subtle fade-in only (no Y shift) — for overlays, images
export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.4, ease: EASE } },
};

// Slide in from left — for profile / side panels
export const slideLeft = {
  hidden: { opacity: 0, x: -20 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
};
