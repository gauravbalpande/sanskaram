/**
 * Global ambient floating elements — rendered once, fixed to viewport.
 * Adds life to the page without competing with section content.
 * Kept at z-index 0, pointer-events: none so it never blocks interaction.
 */
import { motion } from 'framer-motion'

const LEAVES = [
  { size: 8,  top: '12%',  left: '2%',   color: 'rgba(154,216,114,0.18)', dur: 6.5, delay: 0    },
  { size: 6,  top: '35%',  left: '1%',   color: 'rgba(255,160,46,0.14)',  dur: 8.0, delay: 1.5  },
  { size: 5,  top: '68%',  left: '3%',   color: 'rgba(154,216,114,0.15)', dur: 7.2, delay: 0.8  },
  { size: 7,  top: '88%',  left: '1.5%', color: 'rgba(255,160,46,0.12)',  dur: 6.8, delay: 2.0  },
  { size: 6,  top: '20%',  right: '2%',  color: 'rgba(154,216,114,0.16)', dur: 7.8, delay: 0.5  },
  { size: 8,  top: '52%',  right: '1%',  color: 'rgba(255,160,46,0.13)',  dur: 6.0, delay: 1.8  },
  { size: 5,  top: '78%',  right: '2.5%',color: 'rgba(154,216,114,0.14)', dur: 8.5, delay: 1.0  },
  { size: 4,  top: '45%',  left: '96%',  color: 'rgba(255,239,145,0.20)', dur: 7.0, delay: 2.5  },
]

export default function AmbientLayer() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      {LEAVES.map((l, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width:  l.size,
            height: l.size,
            top:    l.top,
            left:   l.left,
            right:  l.right,
            background: l.color,
          }}
          animate={{
            y:       [0, -14, 0],
            x:       [0,  4,  0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration:  l.dur,
            repeat:    Infinity,
            ease:      'easeInOut',
            delay:     l.delay,
          }}
        />
      ))}
    </div>
  )
}
