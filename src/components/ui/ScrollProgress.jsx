import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[200] origin-left pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #468432 0%, #9AD872 50%, #FFA02E 100%)',
        boxShadow: '0 0 10px rgba(255,160,46,0.40)',
      }}
    />
  )
}
