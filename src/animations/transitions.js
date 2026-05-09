// ─── Easing presets ───────────────────────────────────────────────────────────
export const easing = {
  smooth:  [0.22, 1, 0.36, 1],
  bounce:  [0.34, 1.56, 0.64, 1],
  sharp:   [0.25, 0, 0.3, 1],
  cinema:  [0.16, 1, 0.30, 1],
  gentle:  [0.42, 0, 0.18, 1],
}

// ─── Duration scale ───────────────────────────────────────────────────────────
export const duration = {
  instant: 0.15,
  fast:    0.30,
  normal:  0.65,
  slow:    0.90,
  xSlow:   1.20,
}

// ─── Page transition ──────────────────────────────────────────────────────────
export const pageTransition = {
  initial:  { opacity: 0 },
  animate:  { opacity: 1, transition: { duration: 0.55 } },
  exit:     { opacity: 0, transition: { duration: 0.32 } },
}

// ─── Hover motion presets ─────────────────────────────────────────────────────
export const hoverLift = {
  y: -5, scale: 1.02,
  transition: { duration: 0.24, ease: easing.smooth },
}

export const hoverGlow = (color = 'rgba(255,160,46,0.30)') => ({
  boxShadow: `0 12px 48px ${color}`,
  transition: { duration: 0.28 },
})

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.22, ease: easing.smooth },
}
