import { motion } from 'framer-motion'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { staggerContainer, staggerItem } from '../../animations/variants'
import AnimatedText from '../../components/ui/AnimatedText'
import { LeafA, LeafB } from '../../assets/svg/BotanicalLeaf'

// ─── Contact card ─────────────────────────────────────────────────────────────

function ContactCard({ icon: Icon, label, value, href, sub, delay }) {
  return (
    <motion.a
      href={href}
      rel="noopener noreferrer"
      className="flex items-center gap-5 p-6 rounded-3xl group"
      style={{
        background:     'rgba(255,253,224,0.80)',
        border:         '1.5px solid rgba(154,216,114,0.42)',
        boxShadow:      '0 2px 20px rgba(70,132,50,0.08)',
        textDecoration: 'none',
      }}
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.65, ease: [0.16, 1, 0.30, 1] }}
      whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(70,132,50,0.18)', borderColor: 'rgba(70,132,50,0.55)' }}
    >
      {/* Icon */}
      <motion.div
        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(154,216,114,0.28)', border: '1px solid rgba(70,132,50,0.20)' }}
        whileHover={{ scale: 1.10 }}
        transition={{ duration: 0.22 }}
      >
        <Icon size={22} style={{ color: '#468432' }} />
      </motion.div>

      {/* Text */}
      <div className="flex flex-col gap-0.5">
        <p className="font-body text-[10px] font-semibold tracking-[0.20em] uppercase"
          style={{ color: 'rgba(70,132,50,0.50)' }}>
          {label}
        </p>
        <p className="font-heading text-lg font-semibold leading-tight group-hover:text-[#468432] transition-colors duration-200"
          style={{ color: '#1E2A14' }}>
          {value}
        </p>
        {sub && (
          <p className="font-body text-xs mt-0.5" style={{ color: 'rgba(70,132,50,0.55)' }}>
            {sub}
          </p>
        )}
      </div>

      {/* Arrow */}
      <motion.span
        className="ml-auto font-body text-lg flex-shrink-0"
        style={{ color: 'rgba(70,132,50,0.30)' }}
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        →
      </motion.span>
    </motion.a>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFDE0 0%, #FFF8C0 100%)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" aria-hidden />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(154,216,114,0.28) 0%, transparent 65%)', filter: 'blur(50px)' }} aria-hidden />
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,160,46,0.10) 0%, transparent 70%)', filter: 'blur(60px)' }} aria-hidden />

      {/* Leaf accents */}
      <motion.div className="absolute top-16 right-8 pointer-events-none"
        animate={{ rotate: [-5, 5, -5], y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
        <LeafA color="#468432" size={38} opacity={0.20} />
      </motion.div>
      <motion.div className="absolute bottom-16 left-8 pointer-events-none"
        animate={{ rotate: [4, -4, 4], y: [0, 6, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}>
        <LeafB color="#FFA02E" size={26} opacity={0.22} />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-14"
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div variants={staggerItem}>
            <span className="inline-block px-4 py-1.5 rounded-full font-body text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(154,216,114,0.30)', color: '#468432', border: '1px solid rgba(70,132,50,0.20)' }}>
              Get in Touch
            </span>
          </motion.div>

          <AnimatedText
            text="We'd Love to Hear From You"
            delay={0.08}
            className="font-heading text-display-1 leading-tight max-w-xl"
            style={{ color: '#468432' }}
          />

          <motion.div variants={staggerItem} className="w-12 h-[2px] rounded-full"
            style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }} />

          <motion.p variants={staggerItem}
            className="font-body text-base max-w-md leading-relaxed"
            style={{ color: '#3A4828' }}>
            Whether you're a parent, an educator, or simply someone who believes
            in mindful child growth — reach out and start a conversation.
          </motion.p>
        </motion.div>

        {/* Contact cards */}
        <div className="flex flex-col gap-4 mb-12">
          <ContactCard
            icon={HiOutlinePhone}
            label="Call Us"
            value="+91 72768 45679"
            href="tel:+917276845679"
            sub="Mon – Sat, 10 AM – 7 PM"
            delay={0.10}
          />
          <ContactCard
            icon={HiOutlineEnvelope}
            label="Email Us"
            value="mysanskaram@gmail.com"
            href="mailto:mysanskaram@gmail.com"
            sub="We reply within 24 hours"
            delay={0.22}
          />
          <ContactCard
            icon={HiOutlineMapPin}
            label="Based In"
            value="Maharashtra, India"
            href="#"
            sub="Serving families across India"
            delay={0.34}
          />
        </div>

        {/* Social + closing quote */}
        <motion.div
          className="flex flex-col items-center gap-5 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.45, duration: 0.65, ease: [0.16, 1, 0.30, 1] }}
        >
          <p className="font-body text-[10px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: 'rgba(70,132,50,0.45)' }}>
            Follow the Journey
          </p>

          <div className="flex gap-3">
            {[{ Icon: FaInstagram, label: 'Instagram' }, { Icon: FaFacebookF, label: 'Facebook' }, { Icon: FaYoutube, label: 'YouTube' }]
              .map(({ Icon, label }) => (
              <motion.a key={label} href="#" aria-label={label}
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,253,224,0.85)', border: '1.5px solid rgba(154,216,114,0.42)', color: '#468432' }}
                whileHover={{ background: 'rgba(255,160,46,0.18)', borderColor: 'rgba(255,160,46,0.55)', color: '#FFA02E', scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <Icon size={14} />
              </motion.a>
            ))}
          </div>

          <div className="w-8 h-px" style={{ background: 'rgba(255,160,46,0.40)' }} />

          <blockquote className="font-heading italic text-base max-w-sm leading-snug"
            style={{ color: 'rgba(70,132,50,0.65)' }}>
            "Every great journey begins with a single conversation."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
