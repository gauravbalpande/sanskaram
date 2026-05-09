import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeInLeft, staggerContainer, staggerItem } from '../../animations/variants'
import SectionLabel from '../../components/ui/SectionLabel'
import AnimatedText from '../../components/ui/AnimatedText'
import Button from '../../components/ui/Button'
import IllustAbout from '../../assets/svg/IllustAbout'
import { LeafA, LeafB, LeafC } from '../../assets/svg/BotanicalLeaf'

const CARDS = [
  {
    icon:  '🌱',
    title: 'Rooted in Values',
    body:  'We nurture moral character, empathy, and integrity alongside every lesson — because who a child becomes matters as much as what they learn.',
  },
  {
    icon:  '🦋',
    title: 'Child-Centered Learning',
    body:  "Every program follows the child's natural curiosity — joyful, pressure-free, and deeply meaningful at every stage.",
  },
  {
    icon:  '✨',
    title: 'Holistic Growth',
    body:  'Mind, body, character, and creativity developed together — not as separate goals, but as one beautiful whole.',
  },
]

const FLOAT_DOTS = [
  { w: 6, l: '10%', t: '22%', dur: 4.2, delay: 0,   color: '#FFA02E' },
  { w: 4, l: '80%', t: '14%', dur: 5.5, delay: 0.5, color: '#9AD872' },
  { w: 8, l: '86%', t: '62%', dur: 3.8, delay: 1.0, color: '#FFA02E' },
  { w: 5, l: '7%',  t: '73%', dur: 5.0, delay: 0.7, color: '#9AD872' },
  { w: 7, l: '55%', t: '90%', dur: 4.5, delay: 0.3, color: '#FFEF91' },
  { w: 3, l: '30%', t: '8%',  dur: 6.0, delay: 1.2, color: '#9AD872' },
]

export default function AboutSection() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const illustY = useTransform(scrollYProgress, [0, 1], [-28, 28])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F0F7E8 0%, #E4F5D0 100%)' }}
    >
      {/* Background blobs */}
      <div className="absolute -top-24 -left-28 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(154,216,114,0.25) 0%, transparent 70%)', filter: 'blur(100px)' }} />
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,160,46,0.10) 0%, transparent 70%)', filter: 'blur(110px)' }} />

      {/* Floating particles */}
      {FLOAT_DOTS.map((d, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width: d.w, height: d.w, left: d.l, top: d.t, background: d.color }}
          animate={{ y: [-9, 9, -9], opacity: [0.18, 0.52, 0.18] }}
          transition={{ duration: d.dur, repeat: Infinity, ease: 'easeInOut', delay: d.delay }} />
      ))}

      {/* Leaf accents */}
      <motion.div className="absolute top-10 right-[7%] pointer-events-none"
        animate={{ rotate: [-5, 5, -5], y: [0, -9, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}>
        <LeafA color="#468432" size={44} opacity={0.28} />
      </motion.div>
      <motion.div className="absolute bottom-14 left-[5%] pointer-events-none"
        animate={{ rotate: [4, -4, 4], y: [0, 7, 0] }}
        transition={{ duration: 7.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
        <LeafB color="#FFA02E" size={30} opacity={0.32} />
      </motion.div>
      <motion.div className="absolute top-1/2 -translate-y-1/2 right-[2%] pointer-events-none"
        animate={{ rotate: [-7, 7, -7], y: [0, -6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 2 }}>
        <LeafC color="#9AD872" size={26} opacity={0.40} />
      </motion.div>
      <motion.div className="absolute top-[15%] left-[42%] pointer-events-none"
        animate={{ rotate: [3, -3, 3], y: [0, -5, 0] }}
        transition={{ duration: 8.0, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
        <LeafA color="#9AD872" size={22} opacity={0.28} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT — Illustration */}
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }} style={{ y: illustY }} className="relative">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-[44px] blur-3xl scale-90 pointer-events-none"
                style={{ background: 'rgba(154,216,114,0.25)' }} />

              {/* Slow orbital rings for depth */}
              <motion.div
                className="absolute -inset-3 rounded-[52px] border-dashed border pointer-events-none"
                style={{ borderColor: 'rgba(255,160,46,0.22)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-7 rounded-[60px] border pointer-events-none"
                style={{ borderColor: 'rgba(154,216,114,0.14)' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
              />

              {/* Card */}
              <div className="relative w-full h-full rounded-[44px] overflow-hidden shadow-elevated"
                style={{ background: 'linear-gradient(145deg, #468432 0%, #3A7228 100%)' }}>
                <div className="absolute inset-6  rounded-[36px] border border-white/[0.07]" />
                <div className="absolute inset-16 rounded-[24px] border border-white/[0.04]" />
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(255,160,46,0.18) 0%, transparent 70%)', filter: 'blur(20px)' }} />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(154,216,114,0.15) 0%, transparent 70%)', filter: 'blur(20px)' }} />
                <motion.div className="absolute inset-0 flex items-center justify-center"
                  animate={{ y: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                  <IllustAbout className="w-full h-full" />
                </motion.div>
                <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                  <div className="px-4 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)' }}>
                    <span className="font-body text-[10px] tracking-[0.18em] uppercase" style={{ color: 'rgba(255,239,145,0.70)' }}>
                      Where Roots Meet Wings
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge bottom-left */}
            <motion.div className="absolute -bottom-5 left-2 lg:left-6 rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{ background: 'rgba(255,253,224,0.95)', backdropFilter: 'blur(12px)', border: '1px solid rgba(154,216,114,0.45)', boxShadow: '0 4px 20px rgba(70,132,50,0.10)' }}
              initial={{ opacity: 0, y: 18, scale: 0.85 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}>
              <span className="text-xl select-none">🏆</span>
              <div>
                <p className="font-body text-xs font-semibold leading-tight" style={{ color: '#468432' }}>Award-Winning</p>
                <p className="font-body text-[10px] mt-0.5" style={{ color: '#5A6848' }}>Educational Approach</p>
              </div>
            </motion.div>

            {/* Badge top-right */}
            <motion.div className="absolute -top-4 right-2 lg:right-6 rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{ background: 'rgba(255,253,224,0.95)', backdropFilter: 'blur(12px)', border: '1px solid rgba(154,216,114,0.45)', boxShadow: '0 4px 20px rgba(70,132,50,0.10)' }}
              initial={{ opacity: 0, y: -18, scale: 0.85 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}>
              <span className="text-xl select-none">💚</span>
              <div>
                <p className="font-body text-xs font-semibold leading-tight" style={{ color: '#468432' }}>Trusted by</p>
                <p className="font-body text-[10px] mt-0.5" style={{ color: '#5A6848' }}>Growing Families</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }} className="flex flex-col gap-6">
            <motion.div variants={staggerItem}><SectionLabel>About Sanskaram</SectionLabel></motion.div>

            <AnimatedText
              text="Every Child Has Unique Potential Waiting to Be Discovered"
              delay={0.08}
              className="font-heading text-display-1 leading-[1.12]"
              style={{ color: '#468432' }}
            />

            <motion.div variants={staggerItem} className="w-12 h-[2px] rounded-full -mt-1"
              style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }} />

            <motion.p variants={staggerItem} className="font-body text-base leading-relaxed max-w-[30rem]" style={{ color: '#3A4828' }}>
              At Sanskaram, education is more than academics. We nurture the whole child —
              their curiosity, their kindness, their confidence — so they grow into their
              truest, most luminous selves.
            </motion.p>

            {/* Feature cards */}
            <motion.div variants={staggerItem} className="flex flex-col gap-3.5 mt-1">
              {CARDS.map((card, i) => (
                <motion.div key={card.title}
                  className="group relative flex items-start gap-4 p-5 rounded-2xl cursor-default overflow-hidden"
                  style={{ background: 'rgba(255,253,224,0.75)', backdropFilter: 'blur(12px)', border: '1px solid rgba(154,216,114,0.40)', boxShadow: '0 2px 16px rgba(70,132,50,0.06)' }}
                  initial={{ opacity: 0, x: 28, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: 0.14 + i * 0.13, duration: 0.65, ease: [0.16, 1, 0.30, 1] }}
                  whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(70,132,50,0.16)', transition: { duration: 0.24 } }}>

                  {/* Left accent bar — slides in on hover */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full"
                    style={{ background: 'linear-gradient(180deg, #FFA02E, #9AD872)' }}
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.13, duration: 0.5, ease: [0.16, 1, 0.30, 1] }}
                  />

                  <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(154,216,114,0.30)', border: '1px solid rgba(70,132,50,0.18)' }}>
                    <span className="text-xl select-none">{card.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-[1.02rem] font-semibold mb-1 leading-tight" style={{ color: '#468432' }}>{card.title}</h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#5A6848' }}>{card.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={staggerItem} className="pt-1">
              <Button variant="primary" size="md">Our Story</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave → Programs (yellow bg) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 lg:h-14" style={{ fill: '#FFFDE0' }}>
          <path d="M0,28 C360,56 1080,0 1440,32 L1440,56 L0,56 Z" />
        </svg>
      </div>
    </section>
  )
}
