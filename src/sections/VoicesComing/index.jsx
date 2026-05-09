import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../animations/variants'
import SectionLabel from '../../components/ui/SectionLabel'
import Button from '../../components/ui/Button'
import { scrollToContact } from '../../utils/scrollToContact'

const PLACEHOLDERS = [
  { initial: 'P', role: 'Parent',   city: 'Pune',   preview: 'We are looking for something different for our child — not more tuition, but something that truly shapes who she becomes...', accent: '#FFA02E' },
  { initial: 'A', role: 'Parent',   city: 'Mumbai', preview: 'In a world of screens and pressure, Sanskaram feels like a breath of fresh air. We cannot wait for our son to begin...',       accent: '#9AD872' },
  { initial: 'R', role: 'Educator', city: 'Nashik', preview: 'As a teacher of many years, I have always believed values must come first. This is exactly the kind of program we have needed...', accent: '#FFEF91' },
]

export default function VoicesComingSection() {
  return (
    <section id="stories" className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F0F7E8 0%, #C8EDAE 50%, #F0F7E8 100%)' }}>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.55) 0%, transparent 70%)', filter: 'blur(40px)' }} aria-hidden />

      {/* Particles */}
      {[{ x:'8%',y:'20%',s:5,c:'#FFA02E' },{ x:'88%',y:'15%',s:4,c:'#468432' },{ x:'80%',y:'75%',s:6,c:'#FFA02E' },{ x:'12%',y:'80%',s:4,c:'#9AD872' },{ x:'50%',y:'10%',s:3,c:'#FFEF91' }]
        .map((p, i) => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ left: p.x, top: p.y, width: p.s, height: p.s, background: p.c }}
            animate={{ y: [-8, 8, -8], opacity: [0.18, 0.55, 0.18] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }} />
        ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div className="flex flex-col items-center text-center gap-4 mb-14"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <motion.div variants={staggerItem}><SectionLabel>Community Voices</SectionLabel></motion.div>
          <motion.h2 variants={staggerItem} className="font-heading text-display-1 leading-tight max-w-lg" style={{ color: '#468432' }}>
            Stories Are Being Written
          </motion.h2>
          <motion.div variants={staggerItem} className="w-12 h-[2px] rounded-full"
            style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }} />
          <motion.p variants={staggerItem} className="font-body text-base max-w-md leading-relaxed" style={{ color: '#3A4828' }}>
            Sanskaram is just beginning. The first voices, the first journeys, the first
            transformations — they are coming soon. We are building this together.
          </motion.p>
        </motion.div>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {PLACEHOLDERS.map((p, i) => (
            <motion.div key={i} className="relative rounded-3xl overflow-hidden"
              style={{ background: 'rgba(255,253,224,0.75)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.65)', boxShadow: '0 4px 24px rgba(70,132,50,0.09)' }}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              {/* Coming soon overlay */}
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl"
                style={{ background: 'rgba(255,253,224,0.60)', backdropFilter: 'blur(3px)' }}>
                <div className="flex flex-col items-center gap-2 text-center px-6">
                  <div className="px-3 py-1 rounded-full font-body text-[10px] font-semibold tracking-[0.18em] uppercase"
                    style={{ color: '#468432', border: '1px solid rgba(70,132,50,0.28)', background: 'rgba(154,216,114,0.45)' }}>
                    Coming Soon
                  </div>
                  <p className="font-heading text-sm italic leading-snug" style={{ color: 'rgba(70,132,50,0.75)' }}>
                    This story is<br />yet to begin
                  </p>
                </div>
              </div>
              {/* Blurred content */}
              <div className="p-6 flex flex-col gap-4 filter blur-[1.5px]">
                <span className="font-heading text-4xl leading-none" style={{ color: p.accent, opacity: 0.65 }}>"</span>
                <p className="font-body text-sm leading-relaxed italic" style={{ color: '#3A4828' }}>{p.preview}</p>
                <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid rgba(154,216,114,0.40)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-semibold text-sm flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #468432, #2A5220)', color: '#FFEF91' }}>
                    {p.initial}
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold" style={{ color: '#468432' }}>{p.role}</p>
                    <p className="font-body text-[10px]" style={{ color: '#5A6848' }}>{p.city}, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA — emotional close ── */}
        <motion.div
          id="contact"
          className="relative rounded-4xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #468432 0%, #2A5220 60%, #1C3A14 100%)' }}
          initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.90, ease: [0.16, 1, 0.30, 1] }}>

          {/* Background layers */}
          <div className="absolute inset-0 dot-pattern-dark pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(255,160,46,0.18) 0%, transparent 65%)', filter: 'blur(35px)' }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(154,216,114,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          <div className="absolute inset-5 rounded-[2rem] border border-white/[0.06] pointer-events-none" />

          {/* Floating accent dots */}
          {[{ x:'8%',y:'20%',s:4,c:'#FFA02E' },{ x:'88%',y:'18%',s:3,c:'#9AD872' },{ x:'82%',y:'72%',s:5,c:'#FFA02E' },{ x:'15%',y:'78%',s:3,c:'#9AD872' }]
            .map((p, i) => (
              <motion.div key={i} className="absolute rounded-full pointer-events-none"
                style={{ left: p.x, top: p.y, width: p.s, height: p.s, background: p.c }}
                animate={{ y: [-8, 8, -8], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 3.5 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }} />
          ))}

          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col gap-4 lg:max-w-xl">
              {/* Logo watermark */}
              <motion.img src="/logo.png" alt="" className="h-14 w-auto object-contain opacity-80 mb-1"
                style={{ filter: 'brightness(0) invert(1)' }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} />

              <span className="font-body text-[11px] tracking-[0.24em] uppercase font-semibold"
                style={{ color: 'rgba(255,160,46,0.75)' }}>
                Join Our First Cohort
              </span>
              <h3 className="font-heading text-display-2 leading-snug" style={{ color: '#FFEF91' }}>
                Be part of a story<br />
                <span className="italic" style={{ color: '#FFA02E' }}>worth telling.</span>
              </h3>
              <div className="w-10 h-[1.5px] rounded-full" style={{ background: 'rgba(255,160,46,0.40)' }} />
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(200,237,174,0.62)' }}>
                Our first programs are opening soon. Register your interest today
                and help us shape what Sanskaram becomes — together, from the very beginning.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0 w-full lg:w-auto">
              <Button variant="secondary" size="lg" onClick={scrollToContact}>Register Interest</Button>
              <motion.button
                className="px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wide cursor-pointer border-0"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,239,145,0.80)', border: '1px solid rgba(255,255,255,0.16)' }}
                whileHover={{ background: 'rgba(255,255,255,0.14)', color: '#FFEF91', scale: 1.02 }}
                whileTap={{ scale: 0.97 }}>
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
