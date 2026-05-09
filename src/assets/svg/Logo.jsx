/**
 * Sanskaram brand mark — a sprouting plant rising from an open book.
 * Book = knowledge foundation. Plant = growth from that foundation.
 */

export function SanskaramMark({ size = 40, className = '' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sanskaram mark"
    >
      <defs>
        <linearGradient id="sm-stem" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%"   stopColor="#E4B95B" />
          <stop offset="100%" stopColor="#f5d88c" />
        </linearGradient>
        <linearGradient id="sm-bud" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#f5d88c" />
          <stop offset="100%" stopColor="#E4B95B" />
        </linearGradient>
        <radialGradient id="sm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#E4B95B" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E4B95B" stopOpacity="0"   />
        </radialGradient>
      </defs>

      {/* Outer ring */}
      <circle cx="50" cy="50" r="46" stroke="#234B36" strokeWidth="1.6" />

      {/* Open book — V shape */}
      <path
        d="M20 70 L50 60 L80 70"
        stroke="#234B36" strokeWidth="2.2" strokeLinejoin="round"
      />
      {/* Book spine/base curve */}
      <path
        d="M20 70 C20 76, 35 80, 50 80 C65 80, 80 76, 80 70"
        stroke="#234B36" strokeWidth="1.4"
        fill="rgba(221,232,213,0.20)"
      />
      {/* Center spine line */}
      <line x1="50" y1="60" x2="50" y2="80" stroke="#234B36" strokeWidth="1.1" opacity="0.55" />
      {/* Book page lines */}
      <line x1="28" y1="71" x2="46" y2="64" stroke="#234B36" strokeWidth="0.8" opacity="0.3" />
      <line x1="27" y1="74" x2="45" y2="68" stroke="#234B36" strokeWidth="0.8" opacity="0.3" />
      <line x1="54" y1="64" x2="72" y2="71" stroke="#234B36" strokeWidth="0.8" opacity="0.3" />
      <line x1="55" y1="68" x2="73" y2="74" stroke="#234B36" strokeWidth="0.8" opacity="0.3" />

      {/* Stem — grows from book center */}
      <path
        d="M50 59 C50 52, 50 40, 50 24"
        stroke="url(#sm-stem)" strokeWidth="2.3" strokeLinecap="round"
      />

      {/* Left leaf — deep green */}
      <path
        d="M50 46 C43 40, 33 29, 36 19 C42 20, 51 33, 50 46Z"
        fill="#234B36"
      />
      {/* Left leaf mid-vein */}
      <path
        d="M50 46 C45 38, 38 26, 36 19"
        stroke="rgba(221,232,213,0.3)" strokeWidth="0.7" strokeLinecap="round"
      />

      {/* Right leaf — sage */}
      <path
        d="M50 38 C57 31, 68 19, 64 10 C58 13, 50 25, 50 38Z"
        fill="#DDE8D5"
      />
      {/* Right leaf mid-vein */}
      <path
        d="M50 38 C55 28, 62 16, 64 10"
        stroke="rgba(35,75,54,0.25)" strokeWidth="0.7" strokeLinecap="round"
      />

      {/* Top bud */}
      <circle cx="50" cy="22" r="9" fill="url(#sm-glow)" />
      <ellipse cx="50" cy="22" rx="5.2" ry="7.5" fill="url(#sm-bud)" />
      <ellipse cx="50" cy="21" rx="3"   ry="4.5" fill="#faedb3" />

      {/* Micro sparkles */}
      <circle cx="59" cy="17" r="1.5" fill="#E4B95B" opacity="0.55" />
      <circle cx="40" cy="15" r="1.2" fill="#E4B95B" opacity="0.40" />
      <circle cx="65" cy="28" r="1.0" fill="#DDE8D5" opacity="0.50" />
    </svg>
  )
}

export default SanskaramMark
