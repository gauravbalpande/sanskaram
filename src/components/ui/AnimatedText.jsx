import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Word-by-word text reveal.
 * Uses useInView (not whileInView) so parent variant propagation
 * from staggerContainer/staggerItem does NOT interfere.
 */
export default function AnimatedText({
  text,
  as: Tag  = 'h2',
  className,
  style,
  stagger  = 0.08,
  delay    = 0,
  once     = true,
}) {
  const ref     = useRef(null)
  const inView  = useInView(ref, { once, margin: '-40px' })
  const words   = text.split(' ')

  return (
    <Tag ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
        >
          <motion.span
            style={{ display: 'inline-block', marginRight: '0.26em' }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 24 }
            }
            transition={{
              delay:    delay + i * stagger,
              duration: 0.65,
              ease:     [0.16, 1, 0.30, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
