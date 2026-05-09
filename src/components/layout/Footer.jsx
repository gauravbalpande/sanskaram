import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { staggerContainer, staggerItem } from '../../animations/variants'
import { LeafA, LeafB } from '../../assets/svg/BotanicalLeaf'
import { useNav } from '../../context/NavigationContext'
import { getLenis } from '../../hooks/useLenis'

const NAV_LINKS = [
  { label: 'About',    href: '#about',    view: null           },
  { label: 'Programs', href: '#programs', view: null           },
  { label: 'Approach', href: '#approach', view: null           },
  { label: 'Values',   href: '#values',   view: null           },
  { label: 'Contact',  href: null,        view: 'contact'      },
  { label: 'Join Us',  href: null,        view: 'coming-soon'  },
]

const SOCIAL = [
  { Icon: FaInstagram,  href: '#', label: 'Instagram' },
  { Icon: FaFacebookF,  href: '#', label: 'Facebook'  },
  { Icon: FaYoutube,    href: '#', label: 'YouTube'   },
  { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn'  },
]

function scrollTo(href) {
  const lenis  = getLenis()
  const target = document.querySelector(href)
  if (!target) return
  if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.4 })
  else target.scrollIntoView({ behavior: 'smooth' })
}

function FooterNav() {
  const { setView } = useNav()
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3">
      {NAV_LINKS.map(link => (
        <button
          key={link.label}
          onClick={() => link.view ? setView(link.view) : scrollTo(link.href)}
          className="font-body text-sm transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0"
          style={{ color: 'rgba(200,237,174,0.52)' }}
          onMouseEnter={e => e.target.style.color = '#FFA02E'}
          onMouseLeave={e => e.target.style.color = 'rgba(200,237,174,0.52)'}>
          {link.label}
        </button>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1C3A14 0%, #2A5220 55%, #1C3A14 100%)' }}>

      <div className="absolute inset-0 dot-pattern-dark pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-80 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,160,46,0.10) 0%, transparent 65%)', filter: 'blur(50px)' }} aria-hidden />
      <div className="absolute bottom-0 right-0 w-96 h-64 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(154,216,114,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} aria-hidden />

      {/* Leaves */}
      <motion.div className="absolute top-10 left-6 pointer-events-none"
        animate={{ rotate: [-5, 5, -5], y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
        <LeafA color="#9AD872" size={40} opacity={0.14} />
      </motion.div>
      <motion.div className="absolute top-16 right-8 pointer-events-none"
        animate={{ rotate: [4, -4, 4], y: [0, 6, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}>
        <LeafB color="#FFA02E" size={28} opacity={0.14} />
      </motion.div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-10 lg:h-12" style={{ fill: '#C8EDAE' }}>
          <path d="M0,32 C360,0 1080,48 1440,20 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">

        {/* Logo + tagline */}
        <motion.div className="flex flex-col items-center text-center gap-5 pb-14"
          style={{ borderBottom: '1px solid rgba(154,216,114,0.12)' }}
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}>
          <motion.div variants={staggerItem}>
            <motion.img src="/logo.png" alt="Sanskaram" className="h-28 w-auto object-contain opacity-90"
              style={{ filter: 'brightness(0) invert(1)' }}
              animate={{ y: [0, -3, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
          </motion.div>
          <motion.p variants={staggerItem} className="font-heading text-display-3 italic" style={{ color: '#FFEF91' }}>
            Teaching Life, Not Just Lessons.
          </motion.p>
          <motion.div variants={staggerItem} className="w-10 h-[2px] rounded-full"
            style={{ background: 'rgba(255,160,46,0.45)' }} />
          <motion.p variants={staggerItem} className="font-body text-sm max-w-sm leading-relaxed"
            style={{ color: 'rgba(200,237,174,0.52)' }}>
            Nurturing values, confidence, and wisdom in children through
            joyful, story-based learning.
          </motion.p>
          {/* Social */}
          <motion.div variants={staggerItem} className="flex items-center gap-3">
            {SOCIAL.map(({ Icon, href, label }) => (
              <motion.a key={label} href={href} aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(200,237,174,0.55)' }}
                whileHover={{ background: 'rgba(255,160,46,0.22)', borderColor: 'rgba(255,160,46,0.55)', color: '#FFA02E', scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <Icon size={15} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Mid row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12"
          style={{ borderBottom: '1px solid rgba(154,216,114,0.10)' }}>
          {/* Nav + contact */}
          <div className="flex flex-col gap-6">
            <p className="font-body text-[10px] tracking-[0.22em] uppercase" style={{ color: 'rgba(200,237,174,0.35)' }}>Navigate</p>
            <FooterNav />
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-body text-[10px] tracking-[0.22em] uppercase" style={{ color: 'rgba(200,237,174,0.35)' }}>Contact</p>
              <a href="mailto:mysanskaram@gmail.com" className="font-body text-sm transition-colors duration-200"
                style={{ color: 'rgba(200,237,174,0.52)' }}
                onMouseEnter={e => e.target.style.color = '#FFA02E'}
                onMouseLeave={e => e.target.style.color = 'rgba(200,237,174,0.52)'}>
                mysanskaram@gmail.com
              </a>
              <p className="font-body text-sm" style={{ color: 'rgba(200,237,174,0.35)' }}>Maharashtra, India</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-body text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: 'rgba(200,237,174,0.35)' }}>Stay Connected</p>
              <h4 className="font-heading text-xl leading-snug" style={{ color: '#FFEF91' }}>Follow the Sanskaram journey</h4>
              <p className="font-body text-sm mt-2 leading-relaxed" style={{ color: 'rgba(200,237,174,0.50)' }}>
                Get updates on our launch, programs, and insights on value-based parenting.
              </p>
            </div>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full font-body text-sm outline-none transition-all duration-200 min-w-0"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,253,224,0.85)' }}
                onFocus={e => { e.target.style.background = 'rgba(255,255,255,0.10)'; e.target.style.borderColor = 'rgba(255,160,46,0.55)' }}
                onBlur={e  => { e.target.style.background = 'rgba(255,255,255,0.07)'; e.target.style.borderColor = 'rgba(255,255,255,0.14)' }} />
              <motion.button
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: '#FFA02E', color: '#1C3A14' }}
                whileHover={{ scale: 1.08, background: '#FFB84E' }} whileTap={{ scale: 0.95 }} aria-label="Subscribe">
                <HiOutlineArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="font-body text-xs" style={{ color: 'rgba(200,237,174,0.28)' }}>
            © {new Date().getFullYear()} Sanskaram. All rights reserved.
          </p>
          <p className="font-heading text-xs italic" style={{ color: 'rgba(255,239,145,0.22)' }}>
            Teaching Life, Not Just Lessons.
          </p>
        </div>
      </div>
    </footer>
  )
}
