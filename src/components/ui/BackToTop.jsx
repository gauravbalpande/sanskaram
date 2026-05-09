import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { HiOutlineArrowUp } from 'react-icons/hi'
import { getLenis } from '../../hooks/useLenis'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setVisible(y > 600))

  function scrollToTop() {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { duration: 1.6 })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          onClick={scrollToTop}
          className="fixed bottom-7 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center border-0 cursor-pointer"
          style={{
            background:  'linear-gradient(135deg, #468432 0%, #2A5220 100%)',
            color:       '#FFEF91',
            boxShadow:   '0 4px 20px rgba(70,132,50,0.35)',
          }}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1,   y: 0  }}
          exit={{    opacity: 0, scale: 0.6, y: 20  }}
          transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          whileHover={{ scale: 1.12, boxShadow: '0 6px 28px rgba(70,132,50,0.50)' }}
          whileTap={{ scale: 0.92 }}
          aria-label="Back to top"
        >
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HiOutlineArrowUp size={18} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
