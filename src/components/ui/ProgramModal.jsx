import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineXMark, HiOutlineClock, HiOutlineUserGroup } from 'react-icons/hi2'
import { getLenis } from '../../hooks/useLenis'
import { scrollToContact } from '../../utils/scrollToContact'

// ─── Sub-components ───────────────────────────────────────────────────────────

function Chip({ children, color, bg }) {
  return (
    <span
      className="font-body text-xs font-medium px-3 py-1.5 rounded-full"
      style={{ color, background: bg, border: `1px solid ${color}35` }}
    >
      {children}
    </span>
  )
}

function SkillBar({ label, value, color, delay }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="font-body text-xs font-medium" style={{ color: '#3A4828' }}>{label}</span>
        <span className="font-body text-[10px]" style={{ color: 'rgba(70,132,50,0.50)' }}>{value}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(70,132,50,0.10)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ delay, duration: 1.0, ease: [0.16, 1, 0.30, 1] }}
        />
      </div>
    </div>
  )
}

function WeekCard({ num, theme, icon, index, accent }) {
  return (
    <motion.div
      className="flex-shrink-0 flex flex-col gap-2 p-4 rounded-2xl cursor-default"
      style={{
        width: 140,
        background: 'rgba(255,253,224,0.90)',
        border: '1px solid rgba(154,216,114,0.35)',
      }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.04, duration: 0.45, ease: [0.16, 1, 0.30, 1] }}
      whileHover={{ y: -3, borderColor: `${accent}55`, transition: { duration: 0.2 } }}
    >
      <span className="font-body text-[10px] font-semibold tracking-[0.18em] uppercase"
        style={{ color: `${accent}CC` }}>
        Wk {num}
      </span>
      <span className="text-xl select-none">{icon}</span>
      <span className="font-heading text-[0.8rem] font-semibold leading-tight" style={{ color: '#468432' }}>
        {theme}
      </span>
    </motion.div>
  )
}

// ─── Auto-scrolling week carousel ────────────────────────────────────────────

const CARD_W   = 155  // 140px card + 15px gap
const SPEED    = 38   // px per second — calm, readable pace

function WeekScrollRow({ weeks, accent }) {
  const doubled  = [...weeks, ...weeks]
  const totalPx  = weeks.length * CARD_W
  const duration = Math.round(totalPx / SPEED)
  const [paused, setPaused] = useState(false)

  return (
    <div className="relative overflow-hidden" style={{ cursor: 'default' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left/right fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, rgba(255,253,224,0.95), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, rgba(255,253,224,0.95), transparent)' }} />

      {/* Auto-scrolling row */}
      <div
        className="flex gap-3 pb-2"
        style={{
          width:              `${doubled.length * CARD_W}px`,
          animation:          `weekScroll ${duration}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {doubled.map((w, i) => (
          <WeekCard key={i} {...w} index={i % weeks.length} accent={accent} />
        ))}
      </div>

      {paused && (
        <p className="text-center font-body mt-2"
          style={{ fontSize: '10px', color: 'rgba(70,132,50,0.40)', letterSpacing: '0.14em' }}>
          Scroll to explore
        </p>
      )}
    </div>
  )
}

// ─── Main modal ───────────────────────────────────────────────────────────────

export default function ProgramModal({ program, onClose }) {
  const scrollRef = useRef(null)

  // Lock body scroll, stop Lenis
  useEffect(() => {
    const lenis = getLenis()
    if (lenis) lenis.stop()
    document.body.style.overflow = 'hidden'
    return () => {
      if (lenis) lenis.start()
      document.body.style.overflow = ''
    }
  }, [])

  // Close on Escape
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!program) return null
  const { emoji, name, meaning, age, accent, cardGrad, tagline, about,
          format, focus, learningStyle, weeks, skills } = program

  // On dark card backgrounds, text should be on light
  const isLightAccent = accent === '#FFEF91'
  const textOnAccent  = isLightAccent ? '#1C3A14' : '#FFEF91'

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center p-0 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {/* Backdrop — soft blur build */}
        <motion.div
          className="absolute inset-0 cursor-pointer"
          style={{ background: 'rgba(28,58,20,0.60)' }}
          onClick={onClose}
          initial={{ opacity: 0, backdropFilter: 'blur(0px)',  WebkitBackdropFilter: 'blur(0px)'  }}
          animate={{ opacity: 1, backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
          exit={{    opacity: 0, backdropFilter: 'blur(0px)',  WebkitBackdropFilter: 'blur(0px)'  }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        />

        {/* Modal panel — soft rise, no bounce */}
        <motion.div
          className="relative z-10 w-full sm:max-w-4xl max-h-[92vh] sm:max-h-[88vh] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col"
          style={{ background: '#FFFDE0', boxShadow: '0 40px 100px rgba(28,58,20,0.35)' }}
          initial={{ y: 60,  opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
          animate={{ y: 0,   opacity: 1, scale: 1,    filter: 'blur(0px)' }}
          exit={{    y: 50,  opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.30, 1] }}
        >
          {/* ── Header band — program identity ── */}
          <div
            className="relative flex-shrink-0 px-6 pt-6 pb-8 lg:px-10 lg:pt-8"
            style={{ background: cardGrad }}
          >
            {/* Decorative rings */}
            <div className="absolute top-4 right-14 w-24 h-24 rounded-full border border-white/[0.07] pointer-events-none" />
            <div className="absolute top-8 right-18 w-14 h-14 rounded-full border border-white/[0.04] pointer-events-none" />
            {/* Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none rounded-bl-[4rem]"
              style={{ background: `radial-gradient(circle at 80% 20%, ${accent}25 0%, transparent 65%)`, filter: 'blur(20px)' }} />

            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 lg:top-5 lg:right-5 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-0"
              style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,253,224,0.80)' }}
              onClick={onClose}
              whileHover={{ background: 'rgba(255,255,255,0.22)', scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Close"
            >
              <HiOutlineXMark size={18} />
            </motion.button>

            {/* Identity */}
            <div className="flex items-start gap-5 relative z-10">
              <motion.span
                className="text-5xl select-none"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                {emoji}
              </motion.span>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="font-heading text-3xl font-semibold leading-none" style={{ color: '#FFEF91' }}>
                    {name}
                  </h2>
                  <span className="font-body text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}>
                    {age}
                  </span>
                </div>
                <p className="font-body text-sm" style={{ color: `${accent}BB` }}>{meaning}</p>
                <p className="font-heading text-sm italic mt-1" style={{ color: 'rgba(255,239,145,0.62)' }}>
                  "{tagline}"
                </p>
              </div>
            </div>

            {/* Format badges */}
            <div className="flex flex-wrap gap-2 mt-5 relative z-10">
              {format.map(f => (
                <span key={f} className="flex items-center gap-1.5 font-body text-[11px] font-medium px-3 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.10)', color: 'rgba(255,253,224,0.72)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* ── Scrollable content ── */}
          <div
            ref={scrollRef}
            data-lenis-prevent              /* tell Lenis to not intercept wheel events here */
            className="modal-scroll flex-1 overflow-y-auto px-6 py-7 lg:px-10 lg:py-8 flex flex-col gap-8"
            style={{
              overscrollBehavior:      'contain',
              scrollBehavior:          'smooth',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth:          'thin',
              scrollbarColor:          'rgba(154,216,114,0.40) transparent',
            }}
          >

            {/* About */}
            <motion.section
              initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
              transition={{ delay: 0.18, duration: 0.65, ease: [0.16, 1, 0.30, 1] }}>
              <h3 className="font-heading text-lg font-semibold mb-3" style={{ color: '#468432' }}>
                About this Program
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#3A4828' }}>
                {about}
              </p>
            </motion.section>

            <motion.div className="w-full h-px"
              style={{ background: 'rgba(154,216,114,0.35)' }}
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ delay: 0.32, duration: 0.55, ease: [0.16, 1, 0.30, 1] }} />

            {/* Focus areas */}
            <motion.section
              initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
              transition={{ delay: 0.28, duration: 0.65, ease: [0.16, 1, 0.30, 1] }}>
              <h3 className="font-heading text-lg font-semibold mb-3" style={{ color: '#468432' }}>
                Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {focus.map((f, i) => (
                  <motion.div key={f}
                    initial={{ opacity: 0, scale: 0.80 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.28 + i * 0.06, duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}>
                    <Chip color={accent === '#FFEF91' ? '#3A4828' : accent}
                          bg={`${accent}15`}>
                      ✦ {f}
                    </Chip>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Learning style */}
            <motion.section
              initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
              transition={{ delay: 0.36, duration: 0.65, ease: [0.16, 1, 0.30, 1] }}>
              <h3 className="font-heading text-lg font-semibold mb-4" style={{ color: '#468432' }}>
                Learning Style
              </h3>
              <div className="flex flex-wrap gap-3">
                {learningStyle.map((ls, i) => (
                  <motion.div
                    key={ls.label}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl"
                    style={{ background: 'rgba(255,253,224,0.80)', border: '1px solid rgba(154,216,114,0.38)', boxShadow: '0 2px 8px rgba(70,132,50,0.06)' }}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.34 + i * 0.07, duration: 0.40, ease: [0.16, 1, 0.30, 1] }}
                    whileHover={{ y: -2, boxShadow: `0 6px 20px ${accent}25`, transition: { duration: 0.2 } }}>
                    <span className="text-lg select-none">{ls.emoji}</span>
                    <span className="font-body text-xs font-medium" style={{ color: '#468432' }}>{ls.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <div className="w-full h-px" style={{ background: 'rgba(154,216,114,0.35)' }} />

            {/* Weekly journey */}
            <motion.section
              initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
              transition={{ delay: 0.44, duration: 0.65, ease: [0.16, 1, 0.30, 1] }}>
              <h3 className="font-heading text-lg font-semibold mb-4" style={{ color: '#468432' }}>
                12-Week Journey
              </h3>
              <WeekScrollRow weeks={weeks} accent={accent} />
            </motion.section>

            <div className="w-full h-px" style={{ background: 'rgba(154,216,114,0.35)' }} />

            {/* Skills development */}
            <motion.section
              initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
              transition={{ delay: 0.52, duration: 0.65, ease: [0.16, 1, 0.30, 1] }}>
              <h3 className="font-heading text-lg font-semibold mb-5" style={{ color: '#468432' }}>
                What Children Develop
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {skills.map((s, i) => (
                  <SkillBar key={s.label} {...s} delay={0.48 + i * 0.08} />
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              className="relative rounded-3xl overflow-hidden p-7 flex flex-col sm:flex-row items-center gap-5 justify-between"
              style={{ background: cardGrad }}
              initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
              transition={{ delay: 0.62, duration: 0.68, ease: [0.16, 1, 0.30, 1] }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent}20 0%, transparent 65%)` }} />
              <div className="relative z-10 text-center w-full">
                <p className="font-body text-xs font-semibold tracking-[0.18em] uppercase mb-2"
                  style={{ color: `${accent}AA` }}>
                  Interested in {name}?
                </p>
                <p className="font-heading text-lg leading-snug" style={{ color: '#FFEF91' }}>
                  Reach out to us directly<br />
                  <span className="italic" style={{ color: accent }}>and we'll guide you forward.</span>
                </p>
              </div>
            </motion.div>

            {/* Bottom spacer */}
            <div className="h-2" />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}
