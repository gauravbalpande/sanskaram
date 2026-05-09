/**
 * Hero circle illustration — a child reading beneath a growing cosmic tree.
 * Renders inside the deep-green circle in the Hero section.
 * Designed for viewBox 280×300 at any scale.
 */
export default function IllustHeroCenter({ className = '' }) {
  return (
    <svg
      viewBox="0 0 280 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="ihc-glow" cx="50%" cy="15%" r="40%">
          <stop offset="0%"   stopColor="#E4B95B" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#E4B95B" stopOpacity="0"   />
        </radialGradient>
        <radialGradient id="ihc-groundglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#DDE8D5" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#DDE8D5" stopOpacity="0"   />
        </radialGradient>
      </defs>

      {/* ── Ambient top glow ── */}
      <ellipse cx="140" cy="30" rx="80" ry="60" fill="url(#ihc-glow)" />

      {/* ── Tree trunk ── */}
      <path
        d="M140 262 C138 242, 137 212, 138 185 C139 162, 140 145, 140 115"
        stroke="rgba(228,185,91,0.65)" strokeWidth="6.5" strokeLinecap="round"
      />
      {/* Trunk texture knots */}
      <path d="M140 238 C137 234, 135 230, 137 227" stroke="rgba(228,185,91,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M140 212 C143 208, 144 205, 142 202" stroke="rgba(228,185,91,0.25)" strokeWidth="1.5" strokeLinecap="round" />

      {/* ── Branches ── */}
      <path d="M140 172 C127 162, 110 155, 92 160"  stroke="rgba(228,185,91,0.50)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M140 155 C154 144, 172 138, 190 142"  stroke="rgba(228,185,91,0.50)" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M140 142 C130 130, 116 123, 105 126"  stroke="rgba(228,185,91,0.38)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M140 130 C151 120, 164 113, 174 116"  stroke="rgba(228,185,91,0.38)" strokeWidth="2.5" strokeLinecap="round" />

      {/* ── Leaf canopy — back layer ── */}
      <ellipse cx="96"  cy="150" rx="27" ry="21" fill="rgba(45,96,72,0.65)"  />
      <ellipse cx="185" cy="133" rx="25" ry="19" fill="rgba(45,96,72,0.65)"  />
      <ellipse cx="110" cy="120" rx="22" ry="17" fill="rgba(45,96,72,0.65)"  />
      <ellipse cx="170" cy="110" rx="21" ry="16" fill="rgba(45,96,72,0.65)"  />

      {/* ── Leaf canopy — mid layer ── */}
      <ellipse cx="140" cy="125" rx="36" ry="28" fill="rgba(55,108,82,0.78)" />
      <ellipse cx="106" cy="104" rx="26" ry="21" fill="rgba(58,114,86,0.72)" />
      <ellipse cx="173" cy="100" rx="25" ry="20" fill="rgba(58,114,86,0.72)" />

      {/* ── Leaf canopy — front layer ── */}
      <ellipse cx="140" cy="98"  rx="32" ry="26" fill="rgba(68,128,95,0.83)"  />
      <ellipse cx="120" cy="82"  rx="22" ry="18" fill="rgba(78,140,104,0.78)" />
      <ellipse cx="160" cy="80"  rx="21" ry="17" fill="rgba(78,140,104,0.78)" />
      <ellipse cx="140" cy="68"  rx="26" ry="21" fill="rgba(88,150,112,0.85)" />
      <ellipse cx="140" cy="60"  rx="18" ry="14" fill="rgba(100,162,122,0.75)" />

      {/* ── Canopy highlights ── */}
      <ellipse cx="133" cy="62"  rx="9"  ry="7"  fill="rgba(221,232,213,0.22)" />
      <ellipse cx="150" cy="58"  rx="7"  ry="5"  fill="rgba(221,232,213,0.16)" />

      {/* ── Golden seed / light at crown ── */}
      <circle cx="140" cy="42" r="20" fill="rgba(228,185,91,0.12)" />
      <circle cx="140" cy="42" r="12" fill="rgba(228,185,91,0.20)" />
      <circle cx="140" cy="42" r="7"  fill="rgba(228,185,91,0.42)" />
      <circle cx="140" cy="42" r="3.5" fill="#f5d88c" />

      {/* Light rays */}
      <line x1="140" y1="31" x2="140" y2="14" stroke="#E4B95B" strokeWidth="1.2" opacity="0.30" />
      <line x1="140" y1="31" x2="154" y2="17" stroke="#E4B95B" strokeWidth="1.0" opacity="0.22" />
      <line x1="140" y1="31" x2="126" y2="17" stroke="#E4B95B" strokeWidth="1.0" opacity="0.22" />
      <line x1="140" y1="31" x2="162" y2="24" stroke="#E4B95B" strokeWidth="0.8" opacity="0.16" />
      <line x1="140" y1="31" x2="118" y2="24" stroke="#E4B95B" strokeWidth="0.8" opacity="0.16" />

      {/* ── Birds ── */}
      <path d="M78  92 C81  89, 84  89, 87  92" stroke="rgba(248,246,241,0.48)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M194 76 C197 73, 200 73, 203 76" stroke="rgba(248,246,241,0.45)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M62  118 C64 116, 67 116, 69 118" stroke="rgba(248,246,241,0.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* ── Ground ambient ── */}
      <ellipse cx="140" cy="268" rx="100" ry="14" fill="url(#ihc-groundglow)" />
      <path d="M52 268 Q140 260, 228 268" stroke="rgba(221,232,213,0.18)" strokeWidth="1.5" />

      {/* ── Child — cross-legged, reading ── */}

      {/* Drop shadow */}
      <ellipse cx="138" cy="272" rx="24" ry="7" fill="rgba(0,0,0,0.07)" />

      {/* Crossed legs */}
      <path d="M122 258 C117 266, 114 273, 117 276 C121 278, 128 267, 130 261" fill="rgba(248,246,241,0.73)" />
      <path d="M154 258 C159 266, 162 273, 159 276 C155 278, 148 267, 146 261" fill="rgba(248,246,241,0.73)" />

      {/* Torso */}
      <path
        d="M122 247 C122 237, 154 237, 154 247 L150 263 C146 267, 130 267, 126 263Z"
        fill="rgba(228,185,91,0.82)"
      />

      {/* Head */}
      <circle cx="138" cy="232" r="16" fill="rgba(248,246,241,0.92)" />

      {/* Hair */}
      <path
        d="M123 228 C123 218, 138 213, 153 218 C153 224, 153 230, 153 230 C147 228, 129 228, 123 230Z"
        fill="rgba(74,64,54,0.62)"
      />

      {/* Face — eyes looking down at book */}
      <ellipse cx="133" cy="232" rx="2" ry="1.8" fill="rgba(74,64,54,0.50)" />
      <ellipse cx="143" cy="232" rx="2" ry="1.8" fill="rgba(74,64,54,0.50)" />
      {/* Eyelid shadow */}
      <path d="M131 233 C132 235, 135 235, 136 233" fill="rgba(74,64,54,0.22)" />
      <path d="M141 233 C142 235, 145 235, 146 233" fill="rgba(74,64,54,0.22)" />
      {/* Smile */}
      <path d="M133 238 C135 241, 141 241, 143 238" stroke="rgba(74,64,54,0.38)" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Arms */}
      <path d="M122 252 C118 256, 116 261, 118 265" stroke="rgba(248,246,241,0.78)" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M154 252 C158 256, 160 261, 158 265" stroke="rgba(248,246,241,0.78)" strokeWidth="5.5" strokeLinecap="round" />

      {/* Open book */}
      <path d="M115 265 L138 259 L161 265 L138 274Z" fill="rgba(248,246,241,0.90)" />
      <path d="M115 265 L138 274" stroke="rgba(35,75,54,0.30)" strokeWidth="1.0" />
      <path d="M161 265 L138 274" stroke="rgba(35,75,54,0.30)" strokeWidth="1.0" />
      {/* Book text lines */}
      <line x1="121" y1="268" x2="136" y2="263" stroke="rgba(35,75,54,0.18)" strokeWidth="0.9" />
      <line x1="121" y1="271" x2="135" y2="267" stroke="rgba(35,75,54,0.18)" strokeWidth="0.9" />
      <line x1="140" y1="263" x2="155" y2="268" stroke="rgba(35,75,54,0.18)" strokeWidth="0.9" />
      <line x1="141" y1="267" x2="155" y2="271" stroke="rgba(35,75,54,0.18)" strokeWidth="0.9" />

      {/* ── Floating particles ── */}
      <circle cx="70"  cy="172" r="3.0" fill="#E4B95B"            opacity="0.50" />
      <circle cx="210" cy="155" r="2.5" fill="#E4B95B"            opacity="0.42" />
      <circle cx="56"  cy="138" r="2.0" fill="rgba(221,232,213,1)" opacity="0.55" />
      <circle cx="220" cy="182" r="2.5" fill="rgba(221,232,213,1)" opacity="0.48" />
      <circle cx="80"  cy="205" r="1.8" fill="#E4B95B"            opacity="0.38" />
      <circle cx="200" cy="210" r="1.8" fill="#E4B95B"            opacity="0.32" />
      <circle cx="100" cy="232" r="1.4" fill="rgba(221,232,213,1)" opacity="0.45" />
      <circle cx="178" cy="240" r="1.5" fill="rgba(221,232,213,1)" opacity="0.38" />

      {/* ── Falling leaves ── */}
      <path d="M66  162 C63 156, 69 151, 74 156 C71 160, 66 162, 66 162Z" fill="rgba(221,232,213,0.48)" />
      <path d="M216 145 C219 139, 225 144, 221 150 C218 147, 216 145, 216 145Z" fill="rgba(221,232,213,0.45)" />
      <path d="M58  200 C56 196, 61 193, 64 197 C62 199, 58 200, 58 200Z" fill="rgba(228,185,91,0.35)" />
    </svg>
  )
}
