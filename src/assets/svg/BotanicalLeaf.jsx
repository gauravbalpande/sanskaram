/**
 * Premium botanical leaf shapes — 3 variants (A, B, C).
 * All accept color + className props. Used as floating decorative elements.
 */

/** Wide teardrop leaf with mid-vein */
export function LeafA({ color = '#DDE8D5', size = 40, className = '', opacity = 1 }) {
  return (
    <svg
      viewBox="0 0 40 64"
      width={size}
      height={size * 1.6}
      className={className}
      fill="none"
      aria-hidden
      style={{ opacity }}
    >
      <path
        d="M20 60 C4 44, 1 20, 20 4 C39 20, 36 44, 20 60Z"
        fill={color}
      />
      {/* Mid-vein */}
      <path
        d="M20 60 C20 44, 20 22, 20 4"
        stroke="rgba(35,75,54,0.22)" strokeWidth="0.8" strokeLinecap="round"
      />
      {/* Side veins — left */}
      <path d="M20 42 C14 38, 8 34, 6 30"  stroke="rgba(35,75,54,0.14)" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M20 30 C14 26, 9 22, 8 18"  stroke="rgba(35,75,54,0.12)" strokeWidth="0.6" strokeLinecap="round" />
      {/* Side veins — right */}
      <path d="M20 42 C26 38, 32 34, 34 30" stroke="rgba(35,75,54,0.14)" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M20 30 C26 26, 31 22, 32 18" stroke="rgba(35,75,54,0.12)" strokeWidth="0.6" strokeLinecap="round" />
      {/* Tip highlight */}
      <ellipse cx="20" cy="14" rx="5" ry="4" fill="rgba(255,255,255,0.12)" />
    </svg>
  )
}

/** Slender pointed leaf */
export function LeafB({ color = '#234B36', size = 32, className = '', opacity = 1 }) {
  return (
    <svg
      viewBox="0 0 28 72"
      width={size}
      height={size * 2.57}
      className={className}
      fill="none"
      aria-hidden
      style={{ opacity }}
    >
      <path
        d="M14 68 C2 50, 1 24, 14 4 C27 24, 26 50, 14 68Z"
        fill={color}
      />
      <path
        d="M14 68 L14 4"
        stroke="rgba(221,232,213,0.25)" strokeWidth="0.8" strokeLinecap="round"
      />
      <path d="M14 48 C9 42, 5 36, 4 30"  stroke="rgba(221,232,213,0.15)" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M14 48 C19 42, 23 36, 24 30" stroke="rgba(221,232,213,0.15)" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M14 30 C10 24, 7 18, 6 13"  stroke="rgba(221,232,213,0.12)" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M14 30 C18 24, 21 18, 22 13" stroke="rgba(221,232,213,0.12)" strokeWidth="0.5" strokeLinecap="round" />
    </svg>
  )
}

/** Small rounded maple-style leaf */
export function LeafC({ color = '#E4B95B', size = 28, className = '', opacity = 0.7 }) {
  return (
    <svg
      viewBox="0 0 44 52"
      width={size}
      height={size * 1.18}
      className={className}
      fill="none"
      aria-hidden
      style={{ opacity }}
    >
      {/* Stem */}
      <path d="M22 50 L22 42" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Leaf body — three-lobed suggestion */}
      <path
        d="M22 42
          C18 38, 6 35, 6 26
          C6 18, 13 14, 18 17
          C18 12, 12 8, 14 4
          C18 2, 22 8, 22 14
          C22 8, 26 2, 30 4
          C32 8, 26 12, 26 17
          C31 14, 38 18, 38 26
          C38 35, 26 38, 22 42Z"
        fill={color}
      />
      <path d="M22 42 L22 14" stroke="rgba(35,75,54,0.18)" strokeWidth="0.7" strokeLinecap="round" />
    </svg>
  )
}

export default LeafA
