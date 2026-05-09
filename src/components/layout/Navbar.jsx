import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'
import { getLenis } from '../../hooks/useLenis'
import { useNav } from '../../context/NavigationContext'
import { cn } from '../../utils/cn'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Programs', href: '#programs' },
  { label: 'Approach', href: '#approach' },
  { label: 'Values',   href: '#values'   },
  { label: 'Stories',  href: '#stories'  },
]

const menuVariants = {
  closed: { opacity: 0, height: 0,      transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
  open:   { opacity: 1, height: 'auto', transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
}

const linkVariants = {
  closed: { opacity: 0, x: -14 },
  open:   (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.055, duration: 0.32, ease: [0.22, 1, 0.36, 1] } }),
}

// ── Smooth scroll — navigates to home first if on another view ────────────────
function clearHash() {
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
}

function scrollToSection(href, closeMenu, currentView, goHome) {
  closeMenu?.()
  function doScroll() {
    const lenis  = getLenis()
    const target = document.querySelector(href)
    if (!target) return
    if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.4 })
    else       target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    clearHash()
  }
  if (currentView && currentView !== 'home') {
    goHome?.()
    setTimeout(doScroll, 450)
  } else {
    doScroll()
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]        = useState(false)
  const [activeSection,  setActiveSection]   = useState('')
  const { view, setView } = useNav()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 60))
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // ── Active section via IntersectionObserver ───────────────────────────────
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observers = []

    // Retry until elements are mounted (handles async renders)
    const setup = () => {
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (!el) return
        const obs = new IntersectionObserver(
          ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
          // Generous margin so last section (Stories) can still trigger
          { threshold: 0.10, rootMargin: '-80px 0px -30% 0px' }
        )
        obs.observe(el)
        observers.push(obs)
      })
    }

    // Small delay ensures all sections have rendered
    const t = setTimeout(setup, 300)

    return () => {
      clearTimeout(t)
      observers.forEach(o => o.disconnect())
    }
  }, [])

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-[box-shadow,border-color] duration-500',
        scrolled ? 'shadow-soft border-b' : 'border-b border-transparent'
      )}
      style={scrolled
        ? { backgroundColor: 'rgba(255,253,224,0.92)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderColor: 'rgba(154,216,114,0.38)' }
        : { backgroundColor: 'transparent' }
      }
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* ── Logo ── */}
        <motion.a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            if (view !== 'home') { setView('home') }
            else window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center z-10 flex-shrink-0 cursor-pointer"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0  }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04 }}
        >
          <motion.img
            src="/logo.png"
            alt="Sanskaram"
            className="h-14 w-auto object-contain"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }} />
        </motion.a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link, i) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <motion.button
                key={link.href}
                onClick={() => scrollToSection(link.href, closeMenu, view, () => setView('home'))}
                className="relative font-body text-sm font-medium py-1 cursor-pointer bg-transparent border-0 transition-colors duration-200"
                style={{ color: isActive ? '#468432' : '#3A4828' }}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ delay: 0.32 + i * 0.07, duration: 0.5 }}
                whileHover={{ color: '#468432' }}
              >
                {link.label}
                {/* Active indicator — slides smoothly via layoutId */}
                {isActive && (
                  <motion.span
                    layoutId="activeBar"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full"
                    style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {/* Hover underline when not active */}
                {!isActive && (
                  <span
                    className="absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ background: 'rgba(255,160,46,0.50)' }}
                  />
                )}
              </motion.button>
            )
          })}
        </nav>

        {/* ── Desktop right actions ── */}
        <motion.div
          className="hidden md:flex items-center gap-3 flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0  }}
          transition={{ delay: 0.68, duration: 0.6 }}>
          {/* Join Us → scroll to contact */}
          <motion.button
            onClick={() => scrollToSection('#contact', closeMenu, view, () => setView('home'))}
            className="px-5 py-2.5 rounded-full font-body font-semibold text-sm tracking-wide cursor-pointer border-0"
            style={{ background: '#468432', color: '#FFEF91', boxShadow: '0 2px 12px rgba(70,132,50,0.25)' }}
            whileHover={{ scale: 1.04, background: '#FFA02E', color: '#1C3A14', boxShadow: '0 4px 20px rgba(255,160,46,0.40)' }}
            whileTap={{ scale: 0.97 }}>
            Join Us
          </motion.button>
        </motion.div>

        {/* ── Mobile Toggle ── */}
        <motion.button
          className="md:hidden z-10 p-1.5 rounded-xl cursor-pointer border-0"
          style={{ background: menuOpen ? 'rgba(70,132,50,0.10)' : 'transparent', color: '#468432' }}
          onClick={() => setMenuOpen(v => !v)}
          whileTap={{ scale: 0.88 }}
          aria-label="Toggle menu">
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen
              ? <motion.span key="close"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <HiOutlineXMark size={24} />
                </motion.span>
              : <motion.span key="open"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <HiOutlineBars3 size={24} />
                </motion.span>
            }
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="closed" animate="open" exit="closed"
            className="md:hidden overflow-hidden border-t"
            style={{
              backgroundColor: 'rgba(255,253,224,0.97)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderColor: 'rgba(154,216,114,0.38)',
            }}>
            <nav className="flex flex-col px-6 py-6 gap-5">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <motion.button
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="closed" animate="open"
                    className="font-body text-base font-medium text-left cursor-pointer bg-transparent border-0 py-1 flex items-center gap-2"
                    style={{ color: isActive ? '#468432' : '#3A4828' }}
                    onClick={() => scrollToSection(link.href, closeMenu, view, () => setView('home'))}>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#FFA02E' }} />
                    )}
                    {link.label}
                  </motion.button>
                )
              })}
              <motion.div custom={NAV_LINKS.length} variants={linkVariants} initial="closed" animate="open" className="pt-1">
                <motion.button
                  onClick={() => scrollToSection('#contact', closeMenu, view, () => setView('home'))}
                  className="px-5 py-2.5 rounded-full font-body font-semibold text-sm cursor-pointer border-0"
                  style={{ background: '#468432', color: '#FFEF91' }}
                  whileHover={{ background: '#FFA02E', color: '#1C3A14' }}
                  whileTap={{ scale: 0.97 }}>
                  Join Us
                </motion.button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
