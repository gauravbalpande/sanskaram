import { cn } from '../../utils/cn'

export default function SectionLabel({ children, className }) {
  return (
    <span
      className={cn(
        'inline-block px-4 py-1.5 rounded-full font-body text-xs font-semibold tracking-widest uppercase',
        className
      )}
      style={{
        background:   'rgba(154,216,114,0.30)',
        color:        '#468432',
        border:       '1px solid rgba(70,132,50,0.20)',
      }}
    >
      {children}
    </span>
  )
}
