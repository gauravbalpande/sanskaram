import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PARTICLES = [
  { x: '12%', y: '18%', s: 5, c: '#FFA02E', dur: 3.5, delay: 0.2 },
  { x: '82%', y: '14%', s: 3, c: '#9AD872', dur: 4.2, delay: 0.5 },
  { x: '74%', y: '76%', s: 6, c: '#FFA02E', dur: 3.0, delay: 0.9 },
  { x: '18%', y: '78%', s: 4, c: '#9AD872', dur: 4.8, delay: 0.3 },
  { x: '50%', y: '8%',  s: 3, c: '#FFEF91', dur: 5.0, delay: 1.1 },
  { x: '88%', y: '50%', s: 5, c: '#9AD872', dur: 3.8, delay: 0.7 },
  { x: '8%',  y: '48%', s: 4, c: '#FFA02E', dur: 4.5, delay: 0.4 },
  { x: '40%', y: '88%', s: 3, c: '#9AD872', dur: 3.2, delay: 0.8 },
  { x: '62%', y: '22%', s: 4, c: '#FFEF91', dur: 4.0, delay: 1.3 },
  { x: '28%', y: '38%', s: 3, c: '#FFA02E', dur: 5.5, delay: 0.6 },
]

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Stay visible for 2.4 seconds, then fade out
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(onComplete, 700)
    }, 2400)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[500] flex flex-col items-center justify-center select-none"
          style={{ background: 'linear-gradient(160deg, #FFFDE0 0%, #FFF6B0 60%, #FFEF91 100%)' }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient background radial */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 48%, rgba(154,216,114,0.40) 0%, transparent 60%)' }} />
          <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />

          {/* Floating particles */}
          {PARTICLES.map((p, i) => (
            <motion.div key={i}
              className="absolute rounded-full pointer-events-none"
              style={{ left: p.x, top: p.y, width: p.s, height: p.s, background: p.c }}
              initial={{ opacity: 0 }}
              animate={{ y: [-10, 10, -10], opacity: [0.1, 0.55, 0.1] }}
              transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }} />
          ))}

          {/* ── Main content ── */}
          <div className="relative z-10 flex flex-col items-center gap-7">

            {/* Logo — scale + float entrance */}
            <motion.div className="relative"
              initial={{ opacity: 0, scale: 0.72, y: 24 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              transition={{ duration: 0.90, ease: [0.16, 1, 0.30, 1], delay: 0.10 }}>

              {/* Soft glow behind logo */}
              <div className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(70,132,50,0.18) 0%, transparent 70%)', filter: 'blur(20px)', transform: 'scale(1.5)' }} />

              <motion.img
                src="/logo.png"
                alt="Sanskaram"
                className="w-28 h-28 object-contain relative z-10"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }} />
            </motion.div>

            {/* Brand name + tagline */}
            <motion.div className="flex flex-col items-center gap-2 text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.30, 1], delay: 0.50 }}>
              <h1 className="font-heading text-3xl font-semibold tracking-wide" style={{ color: '#468432' }}>
                Sanskaram
              </h1>
              <p className="font-heading text-sm italic" style={{ color: 'rgba(70,132,50,0.60)' }}>
                Teaching Life, Not Just Lessons.
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-36 h-[2.5px] rounded-full overflow-hidden"
              style={{ background: 'rgba(70,132,50,0.14)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}>
              <motion.div
                className="h-full w-full origin-left rounded-full"
                style={{ background: 'linear-gradient(90deg, #468432 0%, #9AD872 55%, #FFA02E 100%)', boxShadow: '0 0 8px rgba(255,160,46,0.35)' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.65, ease: [0.22, 1, 0.36, 1], delay: 0.70 }} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
