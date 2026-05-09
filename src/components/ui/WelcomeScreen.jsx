import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Floating particle data ───────────────────────────────────────────────────

const PARTICLES = [
  { x: '8%',  y: '15%', s: 5, c: 'rgba(255,160,46,0.45)',  dur: 5.5, delay: 0.5  },
  { x: '88%', y: '12%', s: 4, c: 'rgba(154,216,114,0.40)', dur: 6.8, delay: 1.2  },
  { x: '75%', y: '78%', s: 6, c: 'rgba(255,160,46,0.40)',  dur: 4.8, delay: 0.8  },
  { x: '15%', y: '80%', s: 4, c: 'rgba(154,216,114,0.38)', dur: 6.2, delay: 1.5  },
  { x: '50%', y: '6%',  s: 3, c: 'rgba(255,239,145,0.50)', dur: 7.5, delay: 0.3  },
  { x: '92%', y: '50%', s: 5, c: 'rgba(255,160,46,0.35)',  dur: 5.0, delay: 2.0  },
  { x: '6%',  y: '48%', s: 4, c: 'rgba(154,216,114,0.35)', dur: 6.5, delay: 1.0  },
  { x: '38%', y: '90%', s: 5, c: 'rgba(255,160,46,0.38)',  dur: 5.8, delay: 1.8  },
  { x: '62%', y: '18%', s: 3, c: 'rgba(154,216,114,0.42)', dur: 7.2, delay: 0.6  },
  { x: '28%', y: '35%', s: 4, c: 'rgba(255,239,145,0.40)', dur: 6.0, delay: 2.5  },
  { x: '78%', y: '40%', s: 3, c: 'rgba(255,160,46,0.32)',  dur: 8.0, delay: 1.4  },
  { x: '20%', y: '60%', s: 5, c: 'rgba(154,216,114,0.30)', dur: 5.5, delay: 3.0  },
]

// Leaf silhouette SVG path for ambient decoration
function LeafSilhouette({ style }) {
  return (
    <svg viewBox="0 0 40 64" fill="none" style={style} aria-hidden>
      <path d="M20 60C4 44 1 20 20 4C39 20 36 44 20 60Z" fill="currentColor" />
      <path d="M20 60L20 4" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
    </svg>
  )
}

// ─── Stagger timing helpers ───────────────────────────────────────────────────
const t = (base) => ({ duration: 0.9, ease: [0.16, 1, 0.30, 1], delay: base })

// ─── Main component ───────────────────────────────────────────────────────────

export default function WelcomeScreen({ onEnter }) {
  const [showButton, setShowButton] = useState(false)
  const [exiting,    setExiting]    = useState(false)

  // Hide body scrollbar while welcome is visible
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    return () => { document.documentElement.style.overflow = '' }
  }, [])

  // Reveal the enter button after animations complete
  useEffect(() => {
    const id = setTimeout(() => setShowButton(true), 3200)
    return () => clearTimeout(id)
  }, [])

  function handleEnter() {
    setExiting(true)
    setTimeout(onEnter, 900)
  }

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="welcome"
          className="fixed inset-0 z-[600] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #1C3A14 0%, #234B36 45%, #1A3810 100%)',
          }}
          exit={{ opacity: 0, scale: 1.06, filter: 'blur(12px)' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          onClick={showButton ? handleEnter : undefined}
        >
          {/* ── Multi-layer background glows ── */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            {/* Top golden halo */}
            <div style={{
              position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
              width: '60vw', height: '50vw', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(228,185,91,0.14) 0%, transparent 65%)',
              filter: 'blur(50px)',
            }} />
            {/* Bottom sage glow */}
            <div style={{
              position: 'absolute', bottom: '-15%', left: '50%', transform: 'translateX(-50%)',
              width: '70vw', height: '50vw', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(154,216,114,0.10) 0%, transparent 65%)',
              filter: 'blur(60px)',
            }} />
            {/* Center breathing orb */}
            <motion.div
              style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '50vw', height: '50vw', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(228,185,91,0.08) 0%, transparent 65%)',
                filter: 'blur(40px)',
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* ── Ambient dot texture ── */}
          <div className="absolute inset-0 dot-pattern-dark pointer-events-none" aria-hidden />

          {/* ── Floating leaf silhouettes ── */}
          {[
            { top: '8%',  left: '5%',  size: 38, rot: -15, op: 0.12, delay: 1.5 },
            { top: '12%', right: '6%', size: 28, rot:  20, op: 0.10, delay: 2.0 },
            { top: '72%', left: '4%',  size: 32, rot: -8,  op: 0.12, delay: 1.0 },
            { top: '78%', right: '5%', size: 24, rot:  12, op: 0.10, delay: 2.5 },
            { top: '40%', left: '2%',  size: 20, rot: -20, op: 0.08, delay: 3.0 },
            { top: '35%', right: '3%', size: 22, rot:  18, op: 0.08, delay: 1.8 },
          ].map((l, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                top:   l.top,
                left:  l.left,
                right: l.right,
                width: l.size,
                color: `rgba(154,216,114,${l.op})`,
                transform: `rotate(${l.rot}deg)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: l.delay, duration: 1 },
                y:       { duration: 5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: l.delay },
              }}
            >
              <LeafSilhouette style={{ width: '100%' }} />
            </motion.div>
          ))}

          {/* ── Floating particles ── */}
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{ left: p.x, top: p.y, width: p.s, height: p.s, background: p.c }}
              initial={{ opacity: 0 }}
              animate={{ y: [-10, 10, -10], opacity: [0, 0.8, 0] }}
              transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
            />
          ))}

          {/* ── Outer ring decoration ── */}
          <motion.div
            className="absolute rounded-full border pointer-events-none"
            style={{
              width: 'min(70vw, 500px)', height: 'min(70vw, 500px)',
              borderColor: 'rgba(228,185,91,0.08)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute rounded-full border border-dashed pointer-events-none"
            style={{
              width: 'min(55vw, 400px)', height: 'min(55vw, 400px)',
              borderColor: 'rgba(154,216,114,0.10)',
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          />

          {/* ── Main content ── */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 gap-0">

            {/* Logo */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.6, y: 30 }}
              animate={{ opacity: 1, scale: 1,   y: 0  }}
              transition={t(0.2)}
            >
              {/* Glow behind logo */}
              <div style={{
                position: 'absolute', inset: '-24px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(228,185,91,0.22) 0%, transparent 70%)',
                filter: 'blur(16px)',
              }} />
              <motion.img
                src="/logo.png"
                alt="Sanskaram"
                className="relative z-10"
                style={{
                  height:  'min(120px, 22vw)',
                  width:   'auto',
                  filter:  'brightness(0) invert(1)',
                  opacity: 0.92,
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              />
            </motion.div>

            {/* "WELCOME TO" */}
            <motion.p
              className="font-body font-semibold tracking-[0.38em] uppercase mb-3"
              style={{ fontSize: 'clamp(0.65rem, 2vw, 0.85rem)', color: 'rgba(255,160,46,0.72)' }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0  }}
              transition={t(0.85)}
            >
              Welcome to
            </motion.p>

            {/* "SANSKARAM" — the big cinematic moment */}
            <div style={{ overflow: 'hidden' }}>
              <motion.h1
                className="font-heading font-semibold"
                style={{
                  fontSize:      'clamp(3rem, 10vw, 7.5rem)',
                  color:         '#FFEF91',
                  letterSpacing: '0.06em',
                  lineHeight:    1.0,
                }}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%',   opacity: 1  }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.30, 1], delay: 1.10 }}
              >
                Sanskaram
              </motion.h1>
            </div>

            {/* Gold divider */}
            <motion.div
              className="my-7 rounded-full"
              style={{
                height:     '1.5px',
                width:      0,
                background: 'linear-gradient(90deg, transparent, rgba(228,185,91,0.70), transparent)',
              }}
              animate={{ width: 'min(160px, 40vw)' }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.30, 1], delay: 1.70 }}
            />

            {/* Shloka — Sanskrit */}
            <motion.p
              style={{
                fontFamily:   '"Noto Serif Devanagari", serif',
                fontSize:     'clamp(1.1rem, 3.5vw, 1.8rem)',
                color:        'rgba(200,237,174,0.90)',
                letterSpacing:'0.04em',
                lineHeight:   1.5,
                marginBottom: '0.5rem',
              }}
              initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
              transition={t(2.0)}
            >
              विद्या ददाति विनयं
            </motion.p>

            {/* Shloka meaning */}
            <motion.p
              className="font-heading italic"
              style={{
                fontSize:  'clamp(0.75rem, 2.2vw, 1rem)',
                color:     'rgba(200,237,174,0.55)',
                maxWidth:  '28rem',
                lineHeight: 1.65,
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0  }}
              transition={t(2.45)}
            >
              "True learning builds wisdom, humility, and character."
            </motion.p>

            {/* Enter button */}
            <AnimatePresence>
              {showButton && (
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 20, scale: 0.90 }}
                  animate={{ opacity: 1, y: 0,  scale: 1    }}
                  exit={{    opacity: 0 }}
                  transition={{ duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <motion.button
                    onClick={handleEnter}
                    className="relative overflow-hidden font-body font-semibold rounded-full border-0 cursor-pointer group"
                    style={{
                      padding:    '0.9rem 2.5rem',
                      fontSize:   'clamp(0.85rem, 2vw, 1rem)',
                      background: 'linear-gradient(135deg, #FFA02E 0%, #E88E20 100%)',
                      color:      '#1C3A14',
                      boxShadow:  '0 4px 32px rgba(255,160,46,0.40)',
                      letterSpacing: '0.04em',
                    }}
                    whileHover={{
                      scale:      1.06,
                      boxShadow:  '0 8px 48px rgba(255,160,46,0.60)',
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* Shine sweep on hover */}
                    <motion.span
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)',
                        transform:  'translateX(-100%)',
                      }}
                      whileHover={{ transform: 'translateX(100%)' }}
                      transition={{ duration: 0.55 }}
                    />
                    <span className="relative z-10">Enter the Journey →</span>
                  </motion.button>

                  {/* Skip hint */}
                  <motion.p
                    className="font-body text-center mt-4"
                    style={{ fontSize: '0.72rem', color: 'rgba(200,237,174,0.30)', letterSpacing: '0.12em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Press anywhere to continue
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ) : (
        /* ── Exit curtain — white flash then fade ── */
        <motion.div
          key="exit-curtain"
          className="fixed inset-0 z-[600]"
          style={{ background: '#FFFDE0' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeIn' }}
        />
      )}
    </AnimatePresence>
  )
}
