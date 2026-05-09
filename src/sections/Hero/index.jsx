import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../animations/variants'
import Button from '../../components/ui/Button'
import { getLenis } from '../../hooks/useLenis'

function scrollTo(id) {
  const target = document.getElementById(id)
  if (!target) return
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.4 })
  else target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
import SectionLabel from '../../components/ui/SectionLabel'
import MagneticButton from '../../components/ui/MagneticButton'
import IllustHeroCenter from '../../assets/svg/IllustHeroCenter'
import { LeafA, LeafB, LeafC } from '../../assets/svg/BotanicalLeaf'

// ─── Static data ──────────────────────────────────────────────────────────────

const PARTICLES = [
  { x: '8%',  y: '20%', s: 5, dur: 4.2, c: '#FFA02E' },
  { x: '87%', y: '11%', s: 4, dur: 5.8, c: '#9AD872' },
  { x: '76%', y: '78%', s: 7, dur: 3.8, c: '#FFA02E' },
  { x: '14%', y: '83%', s: 4, dur: 5.0, c: '#9AD872' },
  { x: '51%', y: '8%',  s: 3, dur: 6.2, c: '#FFEF91' },
  { x: '92%', y: '54%', s: 5, dur: 4.5, c: '#FFA02E' },
  { x: '37%', y: '91%', s: 6, dur: 5.3, c: '#9AD872' },
]

const STORY_CARDS = [
  { emoji: '📖', label: 'Stories',  accent: '#FFA02E', pos: { left: '-14%',  top: '15%'     }, floatAmt: 7, delay: 0.0  },
  { emoji: '🌱', label: 'Growth',   accent: '#9AD872', pos: { right: '-11%', top: '12%'     }, floatAmt: 9, delay: 0.30 },
  { emoji: '🤝', label: 'Together', accent: '#9AD872', pos: { right: '-9%',  bottom: '18%'  }, floatAmt: 6, delay: 0.55 },
  { emoji: '🪔', label: 'Wisdom',   accent: '#FFA02E', pos: { left: '-11%',  bottom: '20%'  }, floatAmt: 8, delay: 0.80 },
]

const ORBIT_DOTS = [0, 72, 144, 216, 288]
const ORBIT_R    = 218

const LEAVES = [
  { Component: LeafA, color: '#9AD872', size: 36, opacity: 0.55, pos: { left: '10%', top: '24%'    }, rot: [-8,8],  y: [-10,10], dur: 5.5 },
  { Component: LeafB, color: '#468432', size: 24, opacity: 0.30, pos: { left: '5%',  top: '56%'    }, rot: [4,-4],  y: [-7,7],   dur: 7.0 },
  { Component: LeafA, color: '#9AD872', size: 28, opacity: 0.42, pos: { right: '7%', top: '30%'    }, rot: [6,-6],  y: [-9,9],   dur: 6.2 },
  { Component: LeafC, color: '#FFA02E', size: 22, opacity: 0.45, pos: { right: '4%', bottom: '32%' }, rot: [-5,5],  y: [-8,8],   dur: 4.8 },
  { Component: LeafB, color: '#9AD872', size: 18, opacity: 0.28, pos: { left: '18%', bottom: '20%' }, rot: [3,-3],  y: [-6,6],   dur: 6.8 },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const sectionRef = useRef(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { stiffness: 36, damping: 18 })
  const springY = useSpring(rawY, { stiffness: 36, damping: 18 })

  const blob1X = useTransform(springX, [-600, 600], [-26, 26])
  const blob1Y = useTransform(springY, [-400, 400], [-20, 20])
  const blob2X = useTransform(springX, [-600, 600], [16, -16])
  const blob2Y = useTransform(springY, [-400, 400], [16, -16])
  const illX   = useTransform(springX, [-600, 600], [-10, 10])
  const illY   = useTransform(springY, [-400, 400], [-8,  8 ])

  function handleMouseMove(e) {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set(e.clientX - rect.left  - rect.width  / 2)
    rawY.set(e.clientY - rect.top   - rect.height / 2)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(160deg, #FFFDE0 0%, #FFF6B0 55%, #FFEF91 100%)' }}
    >
      {/* ── Background blobs — slow breathing ── */}
      <motion.div
        className="absolute top-[-18%] right-[-10%] w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{ x: blob1X, y: blob1Y, background: 'radial-gradient(circle, rgba(154,216,114,0.38) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-[-22%] left-[-14%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ x: blob2X, y: blob2Y, background: 'radial-gradient(circle, rgba(70,132,50,0.10) 0%, transparent 70%)', filter: 'blur(80px)' }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-[5%] right-[10%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,160,46,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ scale: [1, 1.10, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        aria-hidden
      />
      <div className="absolute top-[38%] left-[40%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,239,145,0.30) 0%, transparent 70%)', filter: 'blur(50px)' }} aria-hidden />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" aria-hidden />

      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ left: p.x, top: p.y, width: p.s, height: p.s, background: p.c }}
          animate={{ y: [-10, 10, -10], opacity: [0.15, 0.55, 0.15] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.38 }} />
      ))}

      {/* Botanical leaves */}
      {LEAVES.map(({ Component, color, size, opacity, pos, rot, y, dur }, i) => (
        <motion.div key={i} className="absolute pointer-events-none" style={pos}
          animate={{ rotate: [rot[0], rot[1], rot[0]], y: [y[0], y[1], y[0]] }}
          transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}>
          <Component color={color} size={size} opacity={opacity} />
        </motion.div>
      ))}

      {/* Logo watermark */}
      <motion.div className="absolute top-[5%] left-[1%] pointer-events-none select-none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1.6 }}>
        <img src="/logo.png" alt="" className="w-44 h-44 object-contain opacity-[0.05]" aria-hidden />
      </motion.div>

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16 lg:py-24">

        {/* LEFT */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-start gap-5">

          {/* Word-by-word heading reveal */}
          <motion.h1 className="font-heading text-hero leading-[1.06]" style={{ color: '#468432' }}>
            {['Teaching', 'Life,'].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.22em]"
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.35 + i * 0.12, duration: 0.80, ease: [0.16, 1, 0.30, 1] }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {['Not', 'Just', 'Lessons.'].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.22em] italic"
                style={{ background: 'linear-gradient(135deg, #468432 0%, #5AA840 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.60 + i * 0.12, duration: 0.80, ease: [0.16, 1, 0.30, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Orange accent rule */}
          <motion.div variants={staggerItem} className="w-16 h-[2.5px] rounded-full" style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }} />

          <motion.p variants={staggerItem} className="font-body text-base lg:text-[1.05rem] leading-relaxed max-w-[28rem]" style={{ color: '#3A4828' }}>
            Sanskaram nurtures values, confidence, and wisdom in children through
            joyful, story-based learning — because who a child becomes matters
            more than what they memorise.
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-wrap gap-3 pt-1">
            <MagneticButton strength={0.28}>
              <Button variant="primary" size="lg" onClick={() => scrollTo('programs')}>Explore Programs</Button>
            </MagneticButton>
            <MagneticButton strength={0.28}>
              <Button variant="outline" size="lg" onClick={() => scrollTo('approach')}>Our Approach</Button>
            </MagneticButton>
          </motion.div>

          {/* Brand chips */}
          <motion.div variants={staggerItem} className="flex flex-wrap gap-2 pt-2">
            {['Values-First', 'Story-Based', 'Nature-Inspired', 'Joyful Learning'].map(tag => (
              <span key={tag} className="font-body text-[11px] font-medium px-3 py-1 rounded-full tracking-wide"
                style={{ color: '#468432', background: 'rgba(154,216,114,0.28)', border: '1px solid rgba(70,132,50,0.18)' }}>
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div style={{ x: illX, y: illY }} className="relative flex items-center justify-center h-[480px] lg:h-[570px]"
          initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.15, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>

          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 55% 50%, rgba(154,216,114,0.28) 0%, transparent 65%)' }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(255,160,46,0.14) 0%, transparent 55%)' }} />

          {/* Pulsing outer ring */}
          <motion.div className="absolute rounded-full pointer-events-none"
            style={{ width: 430, height: 430, border: '1px solid rgba(154,216,114,0.45)' }}
            animate={{ scale: [1, 1.03, 1], opacity: [0.4, 0.85, 0.4] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }} />

          {/* Rotating dashed ring */}
          <motion.div className="absolute rounded-full pointer-events-none"
            style={{ width: 405, height: 405, border: '1.5px dashed rgba(255,160,46,0.25)' }}
            animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }} />

          {/* Inner ring */}
          <motion.div className="absolute rounded-full pointer-events-none"
            style={{ width: 360, height: 360, border: '1px solid rgba(154,216,114,0.22)' }}
            animate={{ scale: [1, 1.025, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }} />

          {/* Main circle */}
          <div className="relative w-80 h-80 lg:w-[370px] lg:h-[370px] rounded-full flex items-center justify-center overflow-hidden shadow-elevated"
            style={{ background: 'linear-gradient(145deg, #468432 0%, #3A7228 100%)' }}>
            <div className="absolute inset-5  rounded-full border border-white/[0.08]" />
            <div className="absolute inset-14 rounded-full border border-white/[0.04]" />
            <div className="absolute pointer-events-none"
              style={{ top: '-10%', left: '50%', transform: 'translateX(-50%)', width: 220, height: 220, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,160,46,0.20) 0%, transparent 70%)', filter: 'blur(20px)' }} />
            <motion.div className="relative z-10 w-full h-full"
              animate={{ y: [0, -5, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}>
              <IllustHeroCenter className="w-full h-full" />
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(58,114,40,0.60), transparent)' }} />
          </div>

          {/* Story cards */}
          {STORY_CARDS.map((card, i) => (
            <motion.div key={i} className="absolute flex flex-col items-center gap-1.5 rounded-2xl shadow-card select-none overflow-hidden"
              style={{ ...card.pos, background: 'rgba(255,253,224,0.94)', backdropFilter: 'blur(12px)', border: `1px solid ${card.accent}40` }}
              initial={{ opacity: 0, scale: 0.65 }}
              animate={{ opacity: 1, scale: 1, y: [0, -card.floatAmt, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 1.0 + card.delay },
                scale:   { duration: 0.55, delay: 1.0 + card.delay, ease: [0.34, 1.56, 0.64, 1] },
                y:       { duration: 3.8 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: card.delay },
              }}>
              <div className="w-full h-1 rounded-t-2xl" style={{ background: card.accent, opacity: 0.8 }} />
              <div className="px-3.5 pb-3 flex flex-col items-center gap-1">
                <span className="text-2xl mt-1">{card.emoji}</span>
                <span className="font-body text-[11px] font-semibold tracking-wide" style={{ color: '#468432' }}>{card.label}</span>
              </div>
            </motion.div>
          ))}

          {/* Orbital dots */}
          {ORBIT_DOTS.map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            return (
              <motion.div key={i} className="absolute rounded-full pointer-events-none"
                style={{ width: i % 2 === 0 ? 8 : 5, height: i % 2 === 0 ? 8 : 5,
                  background: i % 2 === 0 ? '#FFA02E' : '#9AD872',
                  left: `calc(50% + ${Math.cos(rad) * ORBIT_R}px - ${i % 2 === 0 ? 4 : 2.5}px)`,
                  top:  `calc(50% + ${Math.sin(rad) * ORBIT_R}px - ${i % 2 === 0 ? 4 : 2.5}px)` }}
                animate={{ scale: [1, 1.7, 1], opacity: [0.28, 0.80, 0.28] }}
                transition={{ duration: 2.2 + i * 0.45, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }} />
            )
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1.0 }}>
        <span className="font-body text-[10px] tracking-[0.26em] uppercase" style={{ color: 'rgba(70,132,50,0.45)' }}>Discover</span>
        <motion.div className="w-px h-9 origin-top rounded-full"
          style={{ background: 'linear-gradient(to bottom, rgba(70,132,50,0.40), transparent)' }}
          animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }} />
      </motion.div>

      {/* Wave into About */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 lg:h-16" style={{ fill: '#F0F7E8' }}>
          <path d="M0,40 C360,65 1080,15 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
