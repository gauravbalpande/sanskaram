import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '../../utils/cn'

/**
 * Reusable 3D tilt card with mouse-tracking spotlight.
 *
 * Props:
 *   intensity  — max tilt degrees (default 5)
 *   glowColor  — CSS color for the spotlight (default sage rgba)
 *   perspective— CSS perspective value in px (default 1200)
 *   All other props are forwarded to the inner motion.div
 */
export default function TiltCard({
  children,
  className,
  style,
  intensity   = 5,
  glowColor   = 'rgba(154,216,114,0.22)',
  perspective = 1200,
  ...motionProps
}) {
  const cardRef   = useRef(null)
  const [spot, setSpot] = useState({ x: 50, y: 50, visible: false })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(
    useTransform(mouseY, [-1, 1], [intensity, -intensity]),
    { stiffness: 140, damping: 22 }
  )
  const rotateY = useSpring(
    useTransform(mouseX, [-1, 1], [-intensity, intensity]),
    { stiffness: 140, damping: 22 }
  )

  function handleMouseMove(e) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2))
    mouseY.set((e.clientY - rect.top  - rect.height / 2) / (rect.height / 2))
    setSpot({
      x: ((e.clientX - rect.left) / rect.width)  * 100,
      y: ((e.clientY - rect.top)  / rect.height) * 100,
      visible: true,
    })
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
    setSpot(s => ({ ...s, visible: false }))
  }

  return (
    <div style={{ perspective: `${perspective}px` }}>
      <motion.div
        ref={cardRef}
        className={cn('relative', className)}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', ...style }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...motionProps}
      >
        {/* Mouse-tracking spotlight */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${spot.x}% ${spot.y}%, ${glowColor} 0%, transparent 55%)`,
            opacity: spot.visible ? 1 : 0,
          }}
        />
        {children}
      </motion.div>
    </div>
  )
}
