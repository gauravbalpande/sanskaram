import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../animations/variants'
import SectionLabel from '../../components/ui/SectionLabel'
import MagneticButton from '../../components/ui/MagneticButton'
import Button from '../../components/ui/Button'
import { scrollToContact } from '../../utils/scrollToContact'

// ─── Data ─────────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    emoji:    '💚',
    headline: 'Peace of Mind',
    body:     'You will know your child is in an environment that truly cares — not just about grades, but about who they are becoming.',
    accent:   '#9AD872',
    bg:       'rgba(154,216,114,0.14)',
  },
  {
    emoji:    '🌱',
    headline: 'Visible Growth',
    body:     'You will see it — in how they speak, how they handle frustration, how they treat their siblings. Real change. Real growth.',
    accent:   '#468432',
    bg:       'rgba(70,132,50,0.08)',
  },
  {
    emoji:    '📖',
    headline: 'Stories They Share',
    body:     'Children come home wanting to talk about the story they heard, the value they explored, the thing they created together.',
    accent:   '#FFA02E',
    bg:       'rgba(255,160,46,0.10)',
  },
  {
    emoji:    '🧘',
    headline: 'Calmer, More Grounded',
    body:     'Mindfulness practices give children tools to pause, breathe, and respond — instead of react. These skills last a lifetime.',
    accent:   '#9AD872',
    bg:       'rgba(154,216,114,0.14)',
  },
  {
    emoji:    '✨',
    headline: 'Confidence You Can See',
    body:     'From hesitant to self-assured — the transformation in how children carry themselves, speak, and believe in themselves is visible.',
    accent:   '#FFA02E',
    bg:       'rgba(255,160,46,0.10)',
  },
  {
    emoji:    '🤝',
    headline: 'A Community of Intention',
    body:     'Join a family of parents who believe in raising children with purpose, kindness, and wisdom — not just ambition.',
    accent:   '#468432',
    bg:       'rgba(70,132,50,0.08)',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function ParentsLoveSection() {
  function scrollToCTA() {
    scrollToContact()
  }

  return (
    <section
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFDE0 0%, #FFF9E0 60%, #FFEF91 100%)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-72 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(154,216,114,0.28) 0%, transparent 65%)', filter: 'blur(50px)' }} aria-hidden />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,160,46,0.10) 0%, transparent 70%)', filter: 'blur(80px)' }} aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div className="flex flex-col items-center text-center gap-4 mb-14"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <motion.div variants={staggerItem}><SectionLabel>For Parents</SectionLabel></motion.div>
          <motion.h2 variants={staggerItem} className="font-heading text-display-1 leading-tight max-w-xl" style={{ color: '#468432' }}>
            What You Will Notice in Your Child
          </motion.h2>
          <motion.div variants={staggerItem} className="w-12 h-[2px] rounded-full"
            style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }} />
          <motion.p variants={staggerItem} className="font-body text-base max-w-lg leading-relaxed" style={{ color: '#3A4828' }}>
            Sanskaram is not a program you enroll your child in.<br />
            It is an experience your whole family grows from.
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.headline}
              className="group relative flex flex-col gap-4 p-6 lg:p-7 rounded-3xl cursor-default overflow-hidden"
              style={{
                background: 'rgba(255,253,224,0.80)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(154,216,114,0.40)',
                boxShadow: '0 2px 18px rgba(70,132,50,0.07)',
              }}
              initial={{ opacity: 0, y: 36, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 3) * 0.10, duration: 0.70, ease: [0.16, 1, 0.30, 1] }}
              whileHover={{ y: -6, boxShadow: `0 14px 44px ${b.accent}22`, borderColor: `${b.accent}50`, transition: { duration: 0.24 } }}
            >
              {/* Hover corner glow */}
              <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400"
                style={{ background: `radial-gradient(circle at 90% 10%, ${b.accent}18 0%, transparent 65%)` }} />

              {/* Icon */}
              <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: b.bg, border: `1px solid ${b.accent}25` }}>
                <motion.span
                  className="text-2xl select-none"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}>
                  {b.emoji}
                </motion.span>
              </div>

              {/* Content */}
              <h3 className="font-heading text-[1.08rem] font-semibold leading-snug" style={{ color: '#468432' }}>
                {b.headline}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#5A6848' }}>
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Emotional close */}
        <motion.div
          className="flex flex-col items-center text-center gap-6 mt-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.85, ease: [0.16, 1, 0.30, 1] }}>
          <div className="w-8 h-px" style={{ background: 'rgba(255,160,46,0.45)' }} />
          <blockquote className="font-heading text-display-3 italic max-w-xl leading-snug" style={{ color: '#468432' }}>
            "Every parent wants their child to be happy.
            <br />We believe happiness begins with knowing who you are."
          </blockquote>
          <p className="font-body text-xs tracking-[0.22em] uppercase" style={{ color: 'rgba(70,132,50,0.42)' }}>
            — The Sanskaram Philosophy
          </p>
          <MagneticButton strength={0.30}>
            <Button variant="primary" size="lg" onClick={scrollToCTA}>
              Register Your Interest
            </Button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Wave → WhySanskaram (warm yellow bg) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 lg:h-14" style={{ fill: '#FFFDE0' }}>
          <path d="M0,20 C540,56 900,0 1440,30 L1440,56 L0,56 Z" />
        </svg>
      </div>
    </section>
  )
}
