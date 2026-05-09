import { motion } from 'framer-motion'

const ITEMS = [
  'Values', 'Confidence', 'Wisdom', 'Kindness', 'Growth',
  'Mindfulness', 'Stories', 'Creativity', 'Purpose', 'Joy',
  'Integrity', 'Empathy', 'Curiosity', 'Courage',
]

// Duplicate so the infinite loop is seamless
const DOUBLED = [...ITEMS, ...ITEMS]

export default function FloatingTicker() {
  return (
    <div
      className="relative overflow-hidden py-3.5 select-none"
      style={{ background: 'linear-gradient(90deg, #468432 0%, #2A5220 50%, #468432 100%)' }}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #468432, transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, #468432, transparent)' }} />

      <motion.div
        className="flex items-center gap-0 whitespace-nowrap w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {DOUBLED.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3">
            <span
              className="font-heading italic text-sm"
              style={{ color: 'rgba(255,239,145,0.72)', letterSpacing: '0.08em' }}
            >
              {item}
            </span>
            <span
              className="text-xs"
              style={{ color: 'rgba(255,160,46,0.55)', marginLeft: '0.5rem', marginRight: '0.5rem' }}
            >
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
