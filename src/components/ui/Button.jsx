import { useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const variants = {
  primary:   { bg: '#468432', color: '#FFEF91',  hoverBg: '#3A7228', hoverColor: '#FFEF91'  },
  secondary: { bg: '#FFA02E', color: '#1C3A14',  hoverBg: '#E88E20', hoverColor: '#1C3A14'  },
  outline:   { bg: 'transparent', color: '#468432', border: '2px solid #468432', hoverBg: '#468432', hoverColor: '#FFEF91' },
  ghost:     { bg: 'transparent', color: '#468432', hoverBg: 'rgba(154,216,114,0.25)', hoverColor: '#468432' },
  white:     { bg: '#FFEF91', color: '#468432',  hoverBg: '#FFF8C0', hoverColor: '#468432'  },
}

const sizes = {
  sm: { px: '1rem',   py: '0.5rem',  fontSize: '0.8125rem' },
  md: { px: '1.5rem', py: '0.75rem', fontSize: '0.875rem'  },
  lg: { px: '2rem',   py: '0.9rem',  fontSize: '0.9375rem' },
}

export default function Button({
  children,
  variant  = 'primary',
  size     = 'md',
  icon,
  className,
  style,
  onClick,
  ...props
}) {
  const btnRef = useRef(null)
  const v = variants[variant]
  const s = sizes[size]

  // Ripple effect on click
  function handleClick(e) {
    const btn  = btnRef.current
    if (!btn) { onClick?.(e); return }

    const rect = btn.getBoundingClientRect()
    const x    = e.clientX - rect.left
    const y    = e.clientY - rect.top
    const ripple = document.createElement('span')
    const size   = Math.max(rect.width, rect.height) * 2

    Object.assign(ripple.style, {
      position:      'absolute',
      borderRadius:  '50%',
      width:          `${size}px`,
      height:         `${size}px`,
      left:           `${x - size / 2}px`,
      top:            `${y - size / 2}px`,
      background:     'rgba(255,255,255,0.30)',
      transform:      'scale(0)',
      pointerEvents:  'none',
      animation:      'rippleOut 0.55s ease-out forwards',
    })

    btn.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)
    onClick?.(e)
  }

  return (
    <motion.button
      ref={btnRef}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'relative inline-flex items-center gap-2 rounded-full font-body font-semibold tracking-wide overflow-hidden',
        className
      )}
      style={{
        backgroundColor: v.bg,
        color:           v.color,
        border:          v.border || 'none',
        paddingLeft:     s.px,
        paddingRight:    s.px,
        paddingTop:      s.py,
        paddingBottom:   s.py,
        fontSize:        s.fontSize,
        transition:      'background-color 0.22s ease, color 0.22s ease, box-shadow 0.22s ease',
        ...style,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = v.hoverBg
        e.currentTarget.style.color = v.hoverColor
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = v.bg
        e.currentTarget.style.color = v.color
      }}
      onClick={handleClick}
      {...props}
    >
      {children}
      {icon && <span className="text-lg">{icon}</span>}
    </motion.button>
  )
}
