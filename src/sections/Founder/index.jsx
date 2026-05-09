import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../animations/variants'
import SectionLabel from '../../components/ui/SectionLabel'
import { LeafA, LeafB } from '../../assets/svg/BotanicalLeaf'

// ─── Founder message (genuine, emotional, non-corporate) ──────────────────────

const QUOTE =
  '"I believe a child who grows up knowing their values is already ahead in life."'

const PARAGRAPHS = [
  'Sanskaram was born from a simple question — why do we teach children so much, and yet so little about who they truly are? I grew up watching children chase marks, rankings, and achievements, but rarely being asked: what kind of person do you want to become?',
  'I created Sanskaram because I believe children learn best when they feel genuinely inspired, understood, and valued. Not tested. Not ranked. Just deeply seen. The world already has enough pressure for children. What it needs is more spaces where they can grow joyfully — with kindness, curiosity, and confidence.',
  'This is just the beginning. Sanskaram is a small step toward a world where every child grows not just smarter — but kinder, calmer, and more purposeful.',
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function FounderSection() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target:  sectionRef,
    offset:  ['start end', 'end start'],
  })

  // Subtle parallax on the photo
  const photoY = useTransform(scrollYProgress, [0, 1], [-20, 20])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFDE0 0%, #FFF9D6 60%, #FFEF91 100%)' }}
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" aria-hidden />
      <div className="absolute -top-24 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(154,216,114,0.28) 0%, transparent 70%)', filter: 'blur(80px)' }} aria-hidden />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,160,46,0.14) 0%, transparent 70%)', filter: 'blur(70px)' }} aria-hidden />

      {/* Botanical accents */}
      <motion.div className="absolute top-16 right-10 pointer-events-none"
        animate={{ rotate: [-5, 5, -5], y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
        <LeafA color="#468432" size={40} opacity={0.20} />
      </motion.div>
      <motion.div className="absolute bottom-20 left-8 pointer-events-none"
        animate={{ rotate: [4, -4, 4], y: [0, 6, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}>
        <LeafB color="#FFA02E" size={28} opacity={0.22} />
      </motion.div>
      <motion.div className="absolute top-1/3 left-4 pointer-events-none"
        animate={{ rotate: [-3, 3, -3], y: [0, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}>
        <LeafA color="#9AD872" size={22} opacity={0.25} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Section label — centered ── */}
        <motion.div className="flex justify-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
          <SectionLabel>The Vision Behind Sanskaram</SectionLabel>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14 lg:gap-20 items-start">

          {/* ── LEFT: Photo ── */}
          <motion.div
            style={{ y: photoY }}
            className="flex flex-col items-center lg:items-start gap-6"
            initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.90, ease: [0.16, 1, 0.30, 1] }}
          >
            {/* Photo frame */}
            <div className="relative w-full max-w-[360px] mx-auto lg:mx-0">

              {/* Ambient glow */}
              <div className="absolute -inset-4 rounded-[36px] pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(154,216,114,0.30) 0%, transparent 70%)', filter: 'blur(20px)' }} />

              {/* Slow rotating accent ring */}
              <motion.div
                className="absolute -inset-2 rounded-[36px] border-dashed border pointer-events-none"
                style={{ borderColor: 'rgba(255,160,46,0.25)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              />

              {/* Photo container */}
              <motion.div
                className="relative rounded-[28px] overflow-hidden shadow-elevated"
                style={{ aspectRatio: '3/4' }}
                whileHover={{ scale: 1.015, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
              >
                {/* Inner overlay for warmth */}
                <div className="absolute inset-0 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(70,132,50,0.12) 0%, transparent 50%)' }} />

                <img
                  src="/founder.jpg"
                  alt="Er.Om Shete — Founder, Sanskaram"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </motion.div>

              {/* Name card */}
              <motion.div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-2xl whitespace-nowrap"
                style={{
                  background:  'rgba(255,253,224,0.95)',
                  backdropFilter: 'blur(14px)',
                  border:      '1px solid rgba(154,216,114,0.45)',
                  boxShadow:   '0 4px 24px rgba(70,132,50,0.12)',
                }}
                initial={{ opacity: 0, y: 14, scale: 0.88 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.60, ease: [0.34, 1.56, 0.64, 1] }}
              >
                {/* Green dot — online/active feel */}
                <motion.span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: '#468432' }}
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div>
                  <p className="font-heading text-sm font-semibold leading-tight" style={{ color: '#468432' }}>
                    Er.Om Shete
                  </p>
                  <p className="font-body text-[11px]" style={{ color: 'rgba(70,132,50,0.60)' }}>
                    Founder, Sanskaram
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            className="flex flex-col gap-7 pt-0 lg:pt-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Eyebrow */}
            <motion.p
              variants={staggerItem}
              className="font-body text-xs font-semibold tracking-[0.22em] uppercase"
              style={{ color: 'rgba(255,160,46,0.80)' }}
            >
              Meet the Founder
            </motion.p>

            {/* Main heading */}
            <motion.h2
              variants={staggerItem}
              className="font-heading text-display-1 leading-[1.10]"
              style={{ color: '#468432' }}
            >
              Built from belief,<br />
              <span className="italic" style={{ color: '#3A7228' }}>not just ambition.</span>
            </motion.h2>

            {/* Gold rule */}
            <motion.div
              variants={staggerItem}
              className="w-14 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }}
            />

            {/* Pull quote */}
            <motion.blockquote
              variants={staggerItem}
              className="relative pl-5"
              style={{ borderLeft: '3px solid rgba(255,160,46,0.55)' }}
            >
              <p className="font-heading text-xl lg:text-2xl italic leading-snug" style={{ color: '#468432' }}>
                {QUOTE}
              </p>
            </motion.blockquote>

            {/* Body paragraphs */}
            <div className="flex flex-col gap-4">
              {PARAGRAPHS.map((para, i) => (
                <motion.p
                  key={i}
                  variants={staggerItem}
                  className="font-body text-base leading-relaxed"
                  style={{ color: '#3A4828' }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Signature-style closing */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-4 pt-3"
            >
              <div className="w-10 h-px" style={{ background: 'rgba(255,160,46,0.45)' }} />
              <div>
                <p className="font-heading text-base font-semibold italic" style={{ color: '#468432' }}>
                  Er.Om Shete
                </p>
                <p className="font-body text-xs tracking-wide mt-0.5" style={{ color: 'rgba(70,132,50,0.55)' }}>
                  Founder · Sanskaram
                </p>
              </div>
            </motion.div>

            {/* Belief chips */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-2 pt-1">
              {['Values First', 'Joy in Learning', 'Children Deserve More', 'Mindful Growth'].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="font-body text-[11px] font-medium px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(154,216,114,0.22)', color: '#468432', border: '1px solid rgba(70,132,50,0.18)' }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  ✦ {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave → VoicesComing (light green bg) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 lg:h-14" style={{ fill: '#F0F7E8' }}>
          <path d="M0,32 C360,0 1080,56 1440,22 L1440,56 L0,56 Z" />
        </svg>
      </div>
    </section>
  )
}
