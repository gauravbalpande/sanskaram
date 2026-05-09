import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../animations/variants'
import SectionLabel from '../../components/ui/SectionLabel'
import AnimatedText from '../../components/ui/AnimatedText'
import TiltCard from '../../components/ui/TiltCard'
import { LeafB, LeafC } from '../../assets/svg/BotanicalLeaf'

const METHODS = [
  {
    emoji:    '📖',
    title:    'Stories & Wisdom',
    body:     'Every session begins with a story. Ancient wisdom, living parables, and real-life experiences become the bridge between knowledge and character.',
    accent:   '#FFA02E',
    glowClr:  'rgba(255,160,46,0.22)',
  },
  {
    emoji:    '🎨',
    title:    'Creative Activities',
    body:     'Children express, explore, and discover through art, craft, and imagination — unlocking confidence and self-understanding they did not know they carried.',
    accent:   '#9AD872',
    glowClr:  'rgba(154,216,114,0.22)',
  },
  {
    emoji:    '🧘',
    title:    'Mindfulness & Reflection',
    body:     'Quiet moments of stillness teach children to know themselves — their feelings, their strengths, and the steady inner voice that guides good choices.',
    accent:   '#FFEF91',
    glowClr:  'rgba(255,239,145,0.28)',
  },
  {
    emoji:    '🤝',
    title:    'Team Learning',
    body:     'Learning together builds more than knowledge — it builds trust, empathy, and the deep understanding that we grow best when we grow together.',
    accent:   '#9AD872',
    glowClr:  'rgba(154,216,114,0.22)',
  },
]

export default function HowWeTeachSection() {
  return (
    <section
      id="approach"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1C3A14 0%, #2A5220 55%, #1C3A14 100%)' }}
    >
      <div className="absolute inset-0 dot-pattern-dark pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-72 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,160,46,0.12) 0%, transparent 70%)', filter: 'blur(50px)' }} aria-hidden />
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(154,216,114,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} aria-hidden />

      {/* Leaf accents */}
      <motion.div className="absolute top-12 right-10 pointer-events-none"
        animate={{ rotate: [-5, 5, -5], y: [0, -7, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
        <LeafB color="#9AD872" size={28} opacity={0.18} />
      </motion.div>
      <motion.div className="absolute bottom-14 left-8 pointer-events-none"
        animate={{ rotate: [4, -4, 4], y: [0, 6, 0] }} transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}>
        <LeafC color="#FFA02E" size={24} opacity={0.18} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div className="flex flex-col items-center text-center gap-4 mb-16 lg:mb-20"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <motion.div variants={staggerItem}>
            <span className="inline-block px-4 py-1.5 rounded-full font-body text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(154,216,114,0.15)', color: '#9AD872', border: '1px solid rgba(154,216,114,0.25)' }}>
              Our Approach
            </span>
          </motion.div>
          <AnimatedText
            text="How Sanskaram Teaches"
            delay={0.10}
            className="font-heading text-display-1 leading-tight max-w-xl"
            style={{ color: '#FFEF91' }}
          />
          <motion.div variants={staggerItem} className="w-12 h-[2px] rounded-full"
            style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }} />
          <motion.p variants={staggerItem} className="font-body text-base max-w-lg leading-relaxed"
            style={{ color: 'rgba(200,237,174,0.70)' }}>
            Not through rote or pressure — but through experience, reflection, and joy.
          </motion.p>
        </motion.div>

        {/* Method cards — 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {METHODS.map((method, i) => (
            <TiltCard
              key={method.title}
              glowColor={method.glowClr}
              intensity={4}
              className="rounded-3xl overflow-hidden cursor-default"
              style={{
                background: 'rgba(255,255,255,0.055)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12, duration: 0.68, ease: [0.16, 1, 0.30, 1] }}
              whileHover={{ background: 'rgba(255,255,255,0.095)', y: -4, transition: { duration: 0.24 } }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${method.accent}55, transparent)` }} />

              <div className="relative z-10 p-7 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${method.accent}18`, border: `1px solid ${method.accent}30` }}>
                    <motion.span className="text-2xl select-none"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}>
                      {method.emoji}
                    </motion.span>
                  </div>
                  <h3 className="font-heading text-[1.18rem] font-semibold leading-tight" style={{ color: '#FFEF91' }}>
                    {method.title}
                  </h3>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(200,237,174,0.62)' }}>
                  {method.body}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Quote */}
        <motion.div className="flex flex-col items-center text-center mt-16 gap-3"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }}>
          <div className="w-8 h-px" style={{ background: 'rgba(255,160,46,0.45)' }} />
          <p className="font-heading text-lg italic max-w-md leading-relaxed" style={{ color: 'rgba(255,239,145,0.52)' }}>
            "The roots of education are bitter, but the fruit is sweet."
          </p>
          <p className="font-body text-xs tracking-widest uppercase" style={{ color: 'rgba(154,216,114,0.35)' }}>— Aristotle</p>
        </motion.div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 lg:h-16" style={{ fill: '#FFFDE0' }}>
          <path d="M0,30 C360,60 1080,0 1440,35 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
