import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../animations/variants'
import SectionLabel from '../../components/ui/SectionLabel'
import AnimatedText from '../../components/ui/AnimatedText'
import TiltCard from '../../components/ui/TiltCard'
import { LeafA, LeafC } from '../../assets/svg/BotanicalLeaf'

const VALUES = [
  { emoji: '🌱', title: 'Holistic Growth',          body: 'Not just academics. We nurture the whole child — mind, heart, body, and character — as one inseparable whole.',                                    accent: '#468432', glow: 'rgba(70,132,50,0.18)'  },
  { emoji: '💫', title: 'Emotional Intelligence',   body: 'Children learn to understand, name, and express their emotions — building the inner clarity that shapes every relationship they will have.',       accent: '#FFA02E', glow: 'rgba(255,160,46,0.20)' },
  { emoji: '📖', title: 'Value-Based Learning',     body: 'Every activity, every story, every discussion is rooted in timeless values — kindness, honesty, courage, and gratitude.',                       accent: '#468432', glow: 'rgba(70,132,50,0.18)'  },
  { emoji: '🌟', title: 'Confidence Building',      body: 'Safe, encouraging spaces where every child feels truly seen, heard, and celebrated — not despite who they are, but because of it.',             accent: '#FFA02E', glow: 'rgba(255,160,46,0.20)' },
  { emoji: '🎨', title: 'Creative Thinking',        body: 'Imagination is nurtured as a core life skill — not just for art, but for problem-solving, empathy, and finding beauty in the everyday.',       accent: '#9AD872', glow: 'rgba(154,216,114,0.22)' },
  { emoji: '🧘', title: 'Mindfulness for Children', body: 'Simple, accessible practices that help children find stillness, self-awareness, and calm — tools they will carry for a lifetime.',              accent: '#468432', glow: 'rgba(70,132,50,0.18)'  },
]

export default function WhySanskaramSection() {
  return (
    <section id="values" className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFDE0 0%, #FFF6B0 60%, #FFFDE0 100%)' }}>

      <div className="absolute inset-0 dot-pattern opacity-22 pointer-events-none" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,160,46,0.12) 0%, transparent 65%)', filter: 'blur(80px)' }} aria-hidden />

      {/* Leaf accents */}
      <motion.div className="absolute top-16 right-8 pointer-events-none"
        animate={{ rotate: [-5, 5, -5], y: [0, -8, 0] }} transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}>
        <LeafA color="#FFA02E" size={38} opacity={0.22} />
      </motion.div>
      <motion.div className="absolute bottom-16 left-10 pointer-events-none"
        animate={{ rotate: [4, -4, 4], y: [0, 6, 0] }} transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
        <LeafC color="#468432" size={26} opacity={0.22} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div className="flex flex-col items-center text-center gap-4 mb-16 lg:mb-20"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <motion.div variants={staggerItem}><SectionLabel>Why Choose Us</SectionLabel></motion.div>
          <AnimatedText
            text="What Makes Sanskaram Different"
            delay={0.10}
            className="font-heading text-display-1 leading-tight max-w-xl"
            style={{ color: '#468432' }}
          />
          <motion.div variants={staggerItem} className="w-12 h-[2px] rounded-full"
            style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }} />
          <motion.p variants={staggerItem} className="font-body text-base max-w-lg leading-relaxed" style={{ color: '#3A4828' }}>
            Education is everywhere. But education that shapes character, builds confidence,
            and nurtures wisdom — that is rare. That is Sanskaram.
          </motion.p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((val, i) => (
            <TiltCard
              key={val.title}
              glowColor={val.glow}
              intensity={4}
              className="rounded-3xl overflow-hidden cursor-default"
              style={{
                background: 'rgba(255,253,224,0.80)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(154,216,114,0.40)',
                boxShadow: '0 2px 16px rgba(70,132,50,0.06)',
              }}
              initial={{ opacity: 0, y: 36, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 3) * 0.10, duration: 0.68, ease: [0.16, 1, 0.30, 1] }}
              whileHover={{ y: -6, boxShadow: `0 12px 44px ${val.accent}22`, borderColor: `${val.accent}45`, transition: { duration: 0.24 } }}
            >
              <div className="relative z-10 flex flex-col gap-4 p-6">
                <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${val.accent}10`, border: `1px solid ${val.accent}22` }}>
                  <motion.span className="text-xl select-none"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}>
                    {val.emoji}
                  </motion.span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-[1.05rem] font-semibold leading-tight" style={{ color: '#468432' }}>{val.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#5A6848' }}>{val.body}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Philosophy block */}
        <motion.div className="relative mt-20 rounded-4xl overflow-hidden p-10 lg:p-14 text-center"
          style={{ background: 'linear-gradient(135deg, #468432 0%, #2A5220 100%)' }}
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.90, ease: [0.16, 1, 0.30, 1] }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-48 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(255,160,46,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
          <div className="absolute inset-5 rounded-[2rem] border border-white/[0.06] pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center gap-5">
            <motion.img src="/logo.png" alt="Sanskaram" className="h-16 w-auto object-contain opacity-90"
              style={{ filter: 'brightness(0) invert(1)' }}
              animate={{ y: [0, -3, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} />
            <blockquote className="font-heading text-display-3 italic leading-snug max-w-2xl" style={{ color: '#FFEF91' }}>
              "We do not simply teach children what to think.<br />We teach them how to be."
            </blockquote>
            <div className="w-10 h-px" style={{ background: 'rgba(255,160,46,0.50)' }} />
            <p className="font-body text-xs tracking-[0.22em] uppercase" style={{ color: 'rgba(200,237,174,0.45)' }}>
              The Sanskaram Promise
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
