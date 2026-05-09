import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

// ─── Realistic leaf SVG ───────────────────────────────────────────────────────

function RealisticLeaf({ size = 120 }) {
  return (
    <svg viewBox="0 0 120 180" width={size} height={size * 1.5} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#7CC94E" />
          <stop offset="50%"  stopColor="#4EA830" />
          <stop offset="100%" stopColor="#2E7A1E" />
        </linearGradient>
        <linearGradient id="lg2" x1="0%" y1="0%" x2="55%" y2="100%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.25)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)"    />
        </linearGradient>
      </defs>

      {/* Leaf body */}
      <path
        d="M60 172 C45 158,18 140,10 112 C2 84,8 54,20 36 C30 20,44 10,60 8 C76 10,90 20,100 36 C112 54,118 84,110 112 C102 140,75 158,60 172Z"
        fill="url(#lg1)"
      />
      {/* Shine */}
      <path
        d="M60 172 C45 158,18 140,10 112 C2 84,8 54,20 36 C30 20,44 10,60 8 C76 10,90 20,100 36 C112 54,118 84,110 112 C102 140,75 158,60 172Z"
        fill="url(#lg2)"
      />

      {/* Central vein */}
      <path d="M60 168 C60 130,60 70,60 10" stroke="rgba(20,70,5,0.35)" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left veins */}
      <path d="M60 50 C50 46,36 44,24 42"   stroke="rgba(20,70,5,0.22)" strokeWidth="1.0" strokeLinecap="round" />
      <path d="M60 70 C48 64,34 60,20 58"   stroke="rgba(20,70,5,0.20)" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M60 90 C46 84,30 78,16 75"   stroke="rgba(20,70,5,0.20)" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M60 112 C46 106,30 100,16 98" stroke="rgba(20,70,5,0.18)" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M60 130 C48 126,34 124,24 124" stroke="rgba(20,70,5,0.16)" strokeWidth="0.8" strokeLinecap="round" />

      {/* Right veins */}
      <path d="M60 50 C70 46,84 44,96 42"    stroke="rgba(20,70,5,0.22)" strokeWidth="1.0" strokeLinecap="round" />
      <path d="M60 70 C72 64,86 60,100 58"   stroke="rgba(20,70,5,0.20)" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M60 90 C74 84,90 78,104 75"   stroke="rgba(20,70,5,0.20)" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M60 112 C74 106,90 100,104 98" stroke="rgba(20,70,5,0.18)" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M60 130 C72 126,86 124,96 124" stroke="rgba(20,70,5,0.16)" strokeWidth="0.8" strokeLinecap="round" />

      {/* Stem */}
      <path d="M60 172 C59 178,57 183,55 188" stroke="#3A7A20" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

// ─── Random target across full viewport ──────────────────────────────────────

function nextTarget() {
  const w = window.innerWidth
  const h = window.innerHeight
  return {
    x:      (Math.random() * w * 0.85) - (w * 0.05),   // spans full width
    y:      (Math.random() * h * 0.80) - (h * 0.05),   // spans full height
    rotate: (Math.random() - 0.5) * 260,               // full ±130° rotation
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FloatingLeaves() {
  const controls = useAnimation()
  const alive    = useRef(true)

  useEffect(() => {
    alive.current = true

    async function wander() {
      // Start from a random position immediately
      controls.set(nextTarget())

      while (alive.current) {
        const target = nextTarget()
        await controls.start({
          ...target,
          transition: {
            duration: 2.5 + Math.random() * 2.5, // 2.5 – 5 s per move
            ease:     [0.25, 0.46, 0.45, 0.94],  // smooth cubic ease
          },
        })
        // Very short pause before next move (30–120 ms) — feels almost continuous
        await new Promise(r => setTimeout(r, 30 + Math.random() * 90))
      }
    }

    wander()
    return () => { alive.current = false }
  }, [controls])

  return (
    <div
      className="fixed pointer-events-none select-none"
      style={{ top: 0, left: 0, zIndex: 3, opacity: 0.55, mixBlendMode: 'multiply' }}
      aria-hidden
    >
      <motion.div animate={controls}>
        <RealisticLeaf size={115} />
      </motion.div>
    </div>
  )
}
