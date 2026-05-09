import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import { NavigationProvider, useNav } from './context/NavigationContext'
import ScrollProgress  from './components/ui/ScrollProgress'
import WelcomeScreen   from './components/ui/WelcomeScreen'
import FloatingLeaves  from './components/ui/FloatingLeaves'
import BackToTop       from './components/ui/BackToTop'
import Home            from './pages/Home'
import ContactPage     from './pages/Contact'
import ComingSoonPage  from './pages/ComingSoon'

// ── Page transition wrapper ────────────────────────────────────────────────────
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.50 } },
  exit:    { opacity: 0, transition: { duration: 0.30 } },
}

function AppRoutes() {
  const { view } = useNav()
  useLenis()

  return (
    <>
      <ScrollProgress />

      {/* Coming Soon overlays everything — no ambient/backtop needed */}
      {view === 'coming-soon' ? (
        <AnimatePresence mode="wait">
          <motion.div key="coming-soon" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <ComingSoonPage />
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          <FloatingLeaves />
          <BackToTop />
          <AnimatePresence mode="wait">
            {view === 'home' && (
              <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Home />
              </motion.div>
            )}
            {view === 'contact' && (
              <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <ContactPage />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  )
}

export default function App() {
  const [welcomed, setWelcomed] = useState(false)
  const handleEnter = useCallback(() => setWelcomed(true), [])

  return (
    <NavigationProvider>
      {!welcomed && <WelcomeScreen onEnter={handleEnter} />}
      <AppRoutes />
    </NavigationProvider>
  )
}
