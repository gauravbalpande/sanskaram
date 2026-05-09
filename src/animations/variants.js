// ─── Viewport defaults ────────────────────────────────────────────────────────
export const viewport = { once: true, margin: '-64px' }

// ─── Cinematic easing curves ──────────────────────────────────────────────────
export const ease = {
  smooth:  [0.22, 1, 0.36, 1],
  bounce:  [0.34, 1.56, 0.64, 1],
  sharp:   [0.25, 0, 0.3, 1],
  gentle:  [0.42, 0, 0.18, 1],
  cinema:  [0.16, 1, 0.30, 1],  // cinematic feel
}

// ─── Blur-reveal (premium text/card entrance) ─────────────────────────────────
export const fadeInUp = {
  hidden:  { opacity: 0, y: 36,  filter: 'blur(6px)'  },
  visible: { opacity: 1, y: 0,   filter: 'blur(0px)',
    transition: { duration: 0.80, ease: ease.cinema } },
}

export const fadeInDown = {
  hidden:  { opacity: 0, y: -36, filter: 'blur(6px)'  },
  visible: { opacity: 1, y: 0,   filter: 'blur(0px)',
    transition: { duration: 0.80, ease: ease.cinema } },
}

export const fadeInLeft = {
  hidden:  { opacity: 0, x: -56, filter: 'blur(5px)'  },
  visible: { opacity: 1, x: 0,   filter: 'blur(0px)',
    transition: { duration: 0.85, ease: ease.cinema } },
}

export const fadeInRight = {
  hidden:  { opacity: 0, x: 56,  filter: 'blur(5px)'  },
  visible: { opacity: 1, x: 0,   filter: 'blur(0px)',
    transition: { duration: 0.85, ease: ease.cinema } },
}

export const fadeIn = {
  hidden:  { opacity: 0, filter: 'blur(8px)' },
  visible: { opacity: 1, filter: 'blur(0px)',
    transition: { duration: 0.70 } },
}

// ─── Scale reveals ────────────────────────────────────────────────────────────
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.88, filter: 'blur(4px)' },
  visible: { opacity: 1, scale: 1,    filter: 'blur(0px)',
    transition: { duration: 0.70, ease: ease.cinema } },
}

export const scaleInBounce = {
  hidden:  { opacity: 0, scale: 0.72 },
  visible: { opacity: 1, scale: 1,
    transition: { duration: 0.65, ease: ease.bounce } },
}

// ─── Stagger containers ───────────────────────────────────────────────────────
export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
}

export const staggerContainerFast = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}

export const staggerContainerSlow = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.12 } },
}

// ─── Stagger children ─────────────────────────────────────────────────────────
export const staggerItem = {
  hidden:  { opacity: 0, y: 28,  filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0,   filter: 'blur(0px)',
    transition: { duration: 0.72, ease: ease.cinema } },
}

export const staggerItemFast = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.55, ease: ease.smooth } },
}

// ─── Text / word reveal ───────────────────────────────────────────────────────
export const wordReveal = {
  hidden:  { opacity: 0, y: '110%' },
  visible: { opacity: 1, y: '0%',
    transition: { duration: 0.80, ease: ease.cinema } },
}

export const charReveal = {
  hidden:  { opacity: 0, rotateX: 90 },
  visible: { opacity: 1, rotateX: 0,
    transition: { duration: 0.55, ease: ease.smooth } },
}

// ─── SVG draw ─────────────────────────────────────────────────────────────────
export const drawLine = {
  hidden:  { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1,
    transition: { duration: 1.6, ease: 'easeInOut' } },
}

// ─── Page transition ──────────────────────────────────────────────────────────
export const pageTransition = {
  initial:  { opacity: 0 },
  animate:  { opacity: 1, transition: { duration: 0.55 } },
  exit:     { opacity: 0, transition: { duration: 0.32 } },
}
