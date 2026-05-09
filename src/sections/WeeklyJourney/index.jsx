import { useRef } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../animations/variants'
import SectionLabel from '../../components/ui/SectionLabel'

// ─── Data ─────────────────────────────────────────────────────────────────────

const WEEKS = [
  { week: '01', emoji: '🌸', theme: 'Gratitude',        line: 'Notice the good around you.',       accent: '#FFA02E' },
  { week: '02', emoji: '💚', theme: 'Kindness',         line: 'Small acts. Big ripples.',           accent: '#9AD872' },
  { week: '03', emoji: '⭐', theme: 'Confidence',       line: 'Your voice deserves to be heard.',  accent: '#FFA02E' },
  { week: '04', emoji: '🌿', theme: 'Leadership',       line: 'Lead with warmth, not force.',      accent: '#9AD872' },
  { week: '05', emoji: '💫', theme: 'Emotional Growth', line: 'Feel it. Name it. Understand it.',  accent: '#FFEF91' },
  { week: '06', emoji: '🤝', theme: 'Teamwork',         line: 'Together is always stronger.',      accent: '#9AD872' },
  { week: '07', emoji: '🌱', theme: 'Discipline',       line: 'Small habits build great lives.',   accent: '#FFA02E' },
  { week: '08', emoji: '🧘', theme: 'Mindfulness',      line: 'Find stillness inside the noise.',  accent: '#9AD872' },
  { week: '09', emoji: '🔥', theme: 'Courage',          line: 'Brave is doing it afraid.',         accent: '#FFA02E' },
  { week: '10', emoji: '🪔', theme: 'Wisdom',           line: 'Ask better questions.',             accent: '#FFEF91' },
  { week: '11', emoji: '🎨', theme: 'Creativity',       line: 'See the world differently.',        accent: '#9AD872' },
  { week: '12', emoji: '🌈', theme: 'Joy',              line: 'Happiness is a choice and a practice.', accent: '#FFA02E' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function WeeklyJourneySection() {
  const scrollRef = useRef(null)

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #C8EDAE 0%, #EFF7E6 60%, #C8EDAE 100%)' }}
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.60) 0%, transparent 70%)', filter: 'blur(50px)' }} aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div className="flex flex-col items-center text-center gap-4 mb-12"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <motion.div variants={staggerItem}><SectionLabel>The Journey</SectionLabel></motion.div>
          <motion.h2 variants={staggerItem} className="font-heading text-display-1 leading-tight max-w-xl" style={{ color: '#468432' }}>
            Growing Week by Week
          </motion.h2>
          <motion.div variants={staggerItem} className="w-12 h-[2px] rounded-full"
            style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }} />
          <motion.p variants={staggerItem} className="font-body text-base max-w-md leading-relaxed" style={{ color: '#3A4828' }}>
            Each week, one theme. Each theme, one more layer of character — woven gently into who your child is becoming.
          </motion.p>
        </motion.div>

        {/* Grid of week cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {WEEKS.map((w, i) => (
            <motion.div
              key={w.week}
              className="group relative flex flex-col gap-3 p-5 rounded-3xl cursor-default overflow-hidden"
              style={{
                background: 'rgba(255,253,224,0.82)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.70)',
                boxShadow: '0 2px 16px rgba(70,132,50,0.08)',
              }}
              initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: (i % 4) * 0.09 + Math.floor(i / 4) * 0.06, duration: 0.65, ease: [0.16, 1, 0.30, 1] }}
              whileHover={{ y: -6, boxShadow: `0 12px 36px ${w.accent}30`, borderColor: `${w.accent}50`, transition: { duration: 0.24 } }}
            >
              {/* Top accent strip */}
              <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${w.accent}, transparent)` }} />

              {/* Week badge */}
              <span className="font-body text-[10px] font-semibold tracking-[0.20em] uppercase"
                style={{ color: `${w.accent}CC` }}>
                Week {w.week}
              </span>

              {/* Emoji — bobs gently on hover */}
              <motion.span
                className="text-3xl select-none"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3.5 + i * 0.18, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}>
                {w.emoji}
              </motion.span>

              {/* Theme */}
              <h4 className="font-heading text-base font-semibold leading-tight" style={{ color: '#468432' }}>
                {w.theme}
              </h4>

              {/* One-line quote */}
              <p className="font-heading text-xs italic leading-relaxed" style={{ color: 'rgba(70,132,50,0.58)' }}>
                "{w.line}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div className="flex flex-col items-center gap-3 mt-12"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}>
          <div className="w-8 h-px" style={{ background: 'rgba(255,160,46,0.45)' }} />
          <p className="font-heading text-sm italic text-center max-w-sm" style={{ color: 'rgba(70,132,50,0.52)' }}>
            "Character is not built in a day. It is built in a hundred small moments."
          </p>
        </motion.div>
      </div>

      {/* Wave → HowWeTeach (dark green bg) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 lg:h-14" style={{ fill: '#1C3A14' }}>
          <path d="M0,30 C360,56 1080,0 1440,24 L1440,56 L0,56 Z" />
        </svg>
      </div>
    </section>
  )
}
