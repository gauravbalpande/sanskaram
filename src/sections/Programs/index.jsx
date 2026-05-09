import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../animations/variants'
import SectionLabel from '../../components/ui/SectionLabel'
import AnimatedText from '../../components/ui/AnimatedText'
import TiltCard from '../../components/ui/TiltCard'
import ProgramModal from '../../components/ui/ProgramModal'
import { LeafA, LeafC } from '../../assets/svg/BotanicalLeaf'
import { PROGRAM_DETAILS } from '../../data/programs'

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROGRAMS = [
  {
    emoji:     '🌱',
    name:      'Prarambh',
    meaning:   'The Beginning',
    age:       'Age 8 – 10',
    tagline:   'Where values take root',
    body:      "A gentle introduction to life's most important lessons — kindness, gratitude, honesty, and discipline — through stories, activities, and joyful play.",
    focus:     ['Values', 'Kindness', 'Gratitude', 'Discipline'],
    accent:    '#FFA02E',
    accentBg:  'rgba(255,160,46,0.12)',
    accentBdr: 'rgba(255,160,46,0.35)',
    cardGrad:  'linear-gradient(145deg, #2E6E26 0%, #468432 100%)',
    topGlow:   'rgba(255,160,46,0.22)',
    glowColor: 'rgba(255,160,46,0.25)',
  },
  {
    emoji:     '🌿',
    name:      'Prerana',
    meaning:   'The Inspiration',
    age:       'Age 11 – 13',
    tagline:   'Where confidence blooms',
    body:      'As children grow, so do their questions. Prerana helps them navigate emotions, discover inner strength, and learn what it means to lead with heart.',
    focus:     ['Confidence', 'Emotions', 'Leadership', 'Teamwork'],
    accent:    '#9AD872',
    accentBg:  'rgba(154,216,114,0.18)',
    accentBdr: 'rgba(154,216,114,0.50)',
    cardGrad:  'linear-gradient(145deg, #1E4A1A 0%, #2A5220 100%)',
    topGlow:   'rgba(154,216,114,0.20)',
    glowColor: 'rgba(154,216,114,0.28)',
  },
  {
    emoji:     '✨',
    name:      'Pragati',
    meaning:   'The Growth',
    age:       'Age 14 – 15',
    tagline:   'Where purpose is found',
    body:      'The formative years demand more than information — they demand wisdom. Pragati equips young minds with purpose, responsibility, and a vision for who they want to become.',
    focus:     ['Purpose', 'Wisdom', 'Responsibility', 'Self-Growth'],
    accent:    '#FFEF91',
    accentBg:  'rgba(255,239,145,0.15)',
    accentBdr: 'rgba(255,239,145,0.40)',
    cardGrad:  'linear-gradient(145deg, #1C4018 0%, #1E4A1A 100%)',
    topGlow:   'rgba(255,239,145,0.18)',
    glowColor: 'rgba(255,239,145,0.30)',
  },
]


// ─── Component ────────────────────────────────────────────────────────────────

export default function ProgramsSection() {
  const [activeProgram, setActiveProgram] = useState(null)

  return (
    <>
    {/* Modal portal */}
    <AnimatePresence>
      {activeProgram && (
        <ProgramModal
          program={PROGRAM_DETAILS[activeProgram]}
          onClose={() => setActiveProgram(null)}
        />
      )}
    </AnimatePresence>

    <section
      id="programs"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFDE0 0%, #F5F5C0 100%)' }}
    >
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(154,216,114,0.35) 0%, transparent 70%)', filter: 'blur(40px)' }} aria-hidden />
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,160,46,0.10) 0%, transparent 70%)', filter: 'blur(60px)' }} aria-hidden />

      {/* Leaf accents */}
      <motion.div className="absolute top-16 left-8 pointer-events-none"
        animate={{ rotate: [-6, 6, -6], y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
        <LeafA color="#468432" size={40} opacity={0.22} />
      </motion.div>
      <motion.div className="absolute bottom-16 right-10 pointer-events-none"
        animate={{ rotate: [5, -5, 5], y: [0, 7, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}>
        <LeafC color="#FFA02E" size={28} opacity={0.28} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div className="flex flex-col items-center text-center gap-4 mb-16 lg:mb-20"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <motion.div variants={staggerItem}><SectionLabel>Learning Journeys</SectionLabel></motion.div>
          <AnimatedText
            text="Three Paths, One Beautiful Journey"
            delay={0.10}
            className="font-heading text-display-1 leading-tight max-w-xl"
            style={{ color: '#468432' }}
          />
          <motion.div variants={staggerItem} className="w-12 h-[2px] rounded-full"
            style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }} />
          <motion.p variants={staggerItem} className="font-body text-base max-w-lg leading-relaxed" style={{ color: '#3A4828' }}>
            Age-appropriate programs that meet each child exactly where they are —
            and gently walk alongside them as they grow.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {PROGRAMS.map((prog, i) => (
            <TiltCard
              key={prog.name}
              glowColor={prog.glowColor}
              intensity={5}
              className="group rounded-4xl overflow-hidden shadow-card cursor-default"
              style={{ boxShadow: '0 2px 24px rgba(70,132,50,0.10)' }}
              initial={{ opacity: 0, y: 56, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.15, duration: 0.72, ease: [0.16, 1, 0.30, 1] }}
              whileHover={{ y: -10, boxShadow: `0 20px 60px ${prog.glowColor}`, transition: { duration: 0.28 } }}
            >
              {/* Card top */}
              <div className="relative p-8 pb-10" style={{ background: prog.cardGrad }}>
                {/* Rings */}
                <div className="absolute top-4 right-4 w-28 h-28 rounded-full border border-white/[0.07]" />
                <div className="absolute top-9 right-9 w-16 h-16 rounded-full border border-white/[0.04]" />

                {/* Accent glow */}
                <div className="absolute top-0 right-0 w-36 h-36 pointer-events-none rounded-bl-[4rem]"
                  style={{ background: `radial-gradient(circle at 80% 20%, ${prog.topGlow} 0%, transparent 65%)`, filter: 'blur(18px)' }} />

                {/* Emoji + badge */}
                <div className="flex items-start justify-between mb-6">
                  <motion.span className="text-4xl select-none"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}>
                    {prog.emoji}
                  </motion.span>
                  <span className="font-body text-[11px] font-semibold px-3 py-1.5 rounded-full border tracking-wide"
                    style={{ color: prog.accent, borderColor: prog.accentBdr, background: prog.accentBg }}>
                    {prog.age}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-heading text-[2rem] font-semibold leading-none" style={{ color: '#FFEF91' }}>
                  {prog.name}
                </h3>
                <p className="font-body text-[10px] tracking-[0.20em] uppercase mt-1.5"
                  style={{ color: `${prog.accent}99` }}>
                  {prog.meaning}
                </p>
                <p className="font-heading text-sm italic mt-4 leading-snug" style={{ color: 'rgba(255,239,145,0.58)' }}>
                  "{prog.tagline}"
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${prog.accent}40, transparent)` }} />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-5 p-6" style={{ background: 'rgba(255,253,224,0.97)' }}>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#3A4828' }}>{prog.body}</p>
                <div>
                  <p className="font-body text-[10px] tracking-[0.18em] uppercase mb-2.5" style={{ color: 'rgba(70,132,50,0.40)' }}>
                    Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {prog.focus.map(f => (
                      <span key={f} className="font-body text-[11px] font-medium px-3 py-1 rounded-full border"
                        style={{ color: i === 0 ? '#3A4828' : prog.accent, borderColor: prog.accentBdr, background: prog.accentBg }}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="flex items-center gap-1.5 font-body text-sm font-semibold w-fit bg-transparent border-0 p-0 cursor-pointer"
                  style={{ color: '#468432' }}
                  whileHover={{ x: 5, color: '#FFA02E' }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setActiveProgram(prog.name)}>
                  Learn more <span>→</span>
                </motion.button>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-4xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ boxShadow: `inset 0 0 0 1.5px ${prog.accentBdr}`, borderRadius: '2rem' }} />
            </TiltCard>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p className="text-center font-body text-sm italic mt-12" style={{ color: 'rgba(70,132,50,0.48)' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}>
          All programs run in small groups to ensure every child receives personal attention.
        </motion.p>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 lg:h-16" style={{ fill: '#1C3A14' }}>
          <path d="M0,20 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
    </>
  )
}
