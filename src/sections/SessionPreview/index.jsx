import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../animations/variants'
import SectionLabel from '../../components/ui/SectionLabel'

// ─── Data ─────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num:      '01',
    emoji:    '📖',
    title:    'Story Time',
    duration: '15 min',
    accent:   '#FFA02E',
    tagline:  'Every session opens with a story.',
    body:     'A carefully chosen story — ancient or modern — sets the emotional tone. Children are drawn in naturally, their curiosity ignited before a single lesson is taught.',
    detail:   ['Engages imagination', 'Sets the learning theme', 'Builds emotional vocabulary'],
  },
  {
    num:      '02',
    emoji:    '💬',
    title:    'Reflection & Discussion',
    duration: '10 min',
    accent:   '#9AD872',
    tagline:  'Children find their own answers.',
    body:     'Guided questions let children reflect, share, and listen. There are no wrong answers — only perspectives being discovered and respected.',
    detail:   ['Develops critical thinking', 'Builds empathy', 'Encourages open dialogue'],
  },
  {
    num:      '03',
    emoji:    '🎨',
    title:    'Creative Activity',
    duration: '20 min',
    accent:   '#FFEF91',
    tagline:  'Learning through making.',
    body:     'Art, journaling, role-play, or craft — each activity is designed to anchor the lesson into a real, tangible experience children can hold onto.',
    detail:   ['Hands-on expression', 'Anchors abstract values', 'Builds confidence'],
  },
  {
    num:      '04',
    emoji:    '🧘',
    title:    'Mindfulness Practice',
    duration: '8 min',
    accent:   '#9AD872',
    tagline:  'A moment of stillness.',
    body:     'A few minutes of guided breathing, gratitude, or visualisation. Children learn to find calm within themselves — a life skill they carry forever.',
    detail:   ['Reduces anxiety', 'Builds self-awareness', 'Creates inner stillness'],
  },
  {
    num:      '05',
    emoji:    '🌱',
    title:    'Home Reflection',
    duration: 'This week',
    accent:   '#FFA02E',
    tagline:  'Growth continues at home.',
    body:     'One gentle prompt for children to carry home — a question to explore, a value to practise, or a small act of kindness to share with their family.',
    detail:   ['Extends learning into life', 'Connects family and growth', 'Builds lasting habits'],
  },
]

const AUTO_DURATION = 3800 // ms per step

// ─── Component ────────────────────────────────────────────────────────────────

export default function SessionPreviewSection() {
  const [active,  setActive]  = useState(0)
  const [paused,  setPaused]  = useState(false)
  const intervalRef           = useRef(null)
  const step = STEPS[active]

  // Auto-advance
  useEffect(() => {
    if (paused) { clearInterval(intervalRef.current); return }
    intervalRef.current = setInterval(() => {
      setActive(p => (p + 1) % STEPS.length)
    }, AUTO_DURATION)
    return () => clearInterval(intervalRef.current)
  }, [paused, active])

  return (
    <section
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFDE0 0%, #FFF8C0 100%)' }}
    >
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(154,216,114,0.28) 0%, transparent 65%)', filter: 'blur(60px)' }} aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div className="flex flex-col items-center text-center gap-4 mb-14"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <motion.div variants={staggerItem}><SectionLabel>How It Works</SectionLabel></motion.div>
          <motion.h2 variants={staggerItem} className="font-heading text-display-1 leading-tight max-w-xl" style={{ color: '#468432' }}>
            Inside a Sanskaram Session
          </motion.h2>
          <motion.div variants={staggerItem} className="w-12 h-[2px] rounded-full"
            style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }} />
          <motion.p variants={staggerItem} className="font-body text-base max-w-md leading-relaxed" style={{ color: '#3A4828' }}>
            Every session is a complete, intentional journey — from the first story to the last breath.
          </motion.p>
        </motion.div>

        {/* Interactive layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.80, ease: [0.16, 1, 0.30, 1] }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>

          {/* ── Left: Step selector ── */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scroll-x-hidden">
            {STEPS.map((s, i) => (
              <motion.button
                key={s.num}
                onClick={() => setActive(i)}
                className="relative flex-shrink-0 flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left cursor-pointer border-0 w-full transition-colors duration-200 overflow-hidden"
                style={{
                  background: active === i ? 'rgba(255,253,224,0.95)' : 'rgba(255,253,224,0.50)',
                  border:     active === i ? `1.5px solid ${s.accent}55` : '1.5px solid rgba(154,216,114,0.25)',
                  boxShadow:  active === i ? `0 4px 20px ${s.accent}22` : 'none',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>

                {/* Progress fill on active */}
                {active === i && !paused && (
                  <motion.div
                    key={`prog-${i}`}
                    className="absolute bottom-0 left-0 h-[2px] rounded-full"
                    style={{ background: `linear-gradient(90deg, ${s.accent}, ${s.accent}88)` }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: AUTO_DURATION / 1000, ease: 'linear' }}
                  />
                )}

                <span className="text-xl select-none flex-shrink-0">{s.emoji}</span>
                <div className="min-w-0">
                  <p className="font-body text-[11px] font-semibold tracking-[0.14em] uppercase mb-0.5"
                    style={{ color: active === i ? s.accent : 'rgba(70,132,50,0.45)' }}>
                    {s.num}
                  </p>
                  <p className="font-heading text-sm font-semibold leading-tight truncate"
                    style={{ color: active === i ? '#468432' : '#3A4828' }}>
                    {s.title}
                  </p>
                </div>
                {active === i && (
                  <motion.span
                    className="ml-auto flex-shrink-0 text-sm font-body font-medium"
                    style={{ color: s.accent }}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}>
                    →
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>

          {/* ── Right: Active step content ── */}
          <div className="relative rounded-3xl overflow-hidden min-h-[420px]"
            style={{ background: 'rgba(255,253,224,0.95)', border: '1.5px solid rgba(154,216,114,0.35)', boxShadow: '0 4px 32px rgba(70,132,50,0.10)' }}>

            {/* Ambient glow per step */}
            <AnimatePresence>
              <motion.div
                key={`glow-${active}`}
                className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(circle at 80% 20%, ${step.accent}18 0%, transparent 55%)` }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="relative z-10 p-8 lg:p-10 flex flex-col gap-6 h-full"
                initial={{ opacity: 0, x: 24,  filter: 'blur(8px)'  }}
                animate={{ opacity: 1, x: 0,   filter: 'blur(0px)'  }}
                exit={{    opacity: 0, x: -24, filter: 'blur(8px)'  }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={{ background: `${step.accent}18`, border: `1.5px solid ${step.accent}35` }}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
                      {step.emoji}
                    </motion.div>
                    <div>
                      <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase mb-1"
                        style={{ color: step.accent }}>
                        Step {step.num}
                      </p>
                      <h3 className="font-heading text-2xl font-semibold leading-tight" style={{ color: '#468432' }}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <span className="font-body text-xs font-medium px-3 py-1.5 rounded-full flex-shrink-0"
                    style={{ background: `${step.accent}15`, color: step.accent, border: `1px solid ${step.accent}30` }}>
                    {step.duration}
                  </span>
                </div>

                {/* Tagline */}
                <p className="font-heading text-lg italic leading-snug" style={{ color: 'rgba(70,132,50,0.65)' }}>
                  "{step.tagline}"
                </p>

                <div className="w-10 h-px" style={{ background: `linear-gradient(90deg, ${step.accent}60, transparent)` }} />

                {/* Body */}
                <p className="font-body text-base leading-relaxed" style={{ color: '#3A4828' }}>
                  {step.body}
                </p>

                {/* Detail tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {step.detail.map((d, i) => (
                    <motion.span
                      key={d}
                      className="font-body text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{ background: 'rgba(154,216,114,0.22)', color: '#468432', border: '1px solid rgba(70,132,50,0.18)' }}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}>
                      ✦ {d}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Step dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {STEPS.map((s, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full cursor-pointer border-0 transition-all duration-300"
              style={{
                width:      active === i ? 24 : 8,
                height:     8,
                background: active === i ? s.accent : 'rgba(70,132,50,0.20)',
              }}
              whileHover={{ scale: 1.2 }} />
          ))}
        </div>
      </div>

      {/* Wave → WeeklyJourney (light green bg) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 lg:h-14" style={{ fill: '#C8EDAE' }}>
          <path d="M0,18 C480,56 960,0 1440,28 L1440,56 L0,56 Z" />
        </svg>
      </div>
    </section>
  )
}
