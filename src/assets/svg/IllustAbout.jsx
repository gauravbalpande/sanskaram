/**
 * About section illustration — three children seated in a learning circle
 * beneath a large shade tree, books open, guided by warm light.
 */
export default function IllustAbout({ className = '' }) {
  return (
    <svg
      viewBox="0 0 380 380"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="ia-topglow" cx="50%" cy="20%" r="45%">
          <stop offset="0%"   stopColor="#E4B95B" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#E4B95B" stopOpacity="0"   />
        </radialGradient>
        <radialGradient id="ia-ground" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#DDE8D5" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#DDE8D5" stopOpacity="0"   />
        </radialGradient>
      </defs>

      {/* ── Ambient glows ── */}
      <ellipse cx="190" cy="55"  rx="110" ry="80" fill="url(#ia-topglow)"  />
      <ellipse cx="190" cy="300" rx="150" ry="40" fill="url(#ia-ground)"   />

      {/* ── Tree trunk ── */}
      <path
        d="M190 288 C188 265, 187 228, 188 195 C189 168, 190 148, 190 110"
        stroke="rgba(74,64,54,0.55)" strokeWidth="13" strokeLinecap="round"
      />
      {/* Root spread */}
      <path d="M190 288 C179 296, 163 300, 150 297" stroke="rgba(74,64,54,0.45)" strokeWidth="6.5" strokeLinecap="round" />
      <path d="M190 288 C201 296, 217 300, 230 297" stroke="rgba(74,64,54,0.45)" strokeWidth="6.5" strokeLinecap="round" />
      <path d="M190 288 C190 296, 190 302, 190 306" stroke="rgba(74,64,54,0.35)" strokeWidth="5"   strokeLinecap="round" />

      {/* Trunk texture */}
      <path d="M190 265 C186 261, 184 256, 186 253" stroke="rgba(74,64,54,0.28)" strokeWidth="2" strokeLinecap="round" />
      <path d="M190 240 C194 236, 195 232, 193 229" stroke="rgba(74,64,54,0.28)" strokeWidth="2" strokeLinecap="round" />

      {/* ── Branches ── */}
      <path d="M190 185 C174 172, 155 163, 135 168" stroke="rgba(74,64,54,0.48)" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M190 168 C207 154, 228 146, 248 151" stroke="rgba(74,64,54,0.48)" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M190 148 C178 135, 163 127, 148 130" stroke="rgba(74,64,54,0.38)" strokeWidth="4"   strokeLinecap="round" />
      <path d="M190 135 C202 122, 218 115, 232 118" stroke="rgba(74,64,54,0.38)" strokeWidth="4"   strokeLinecap="round" />

      {/* ── Canopy — back ── */}
      <circle cx="137" cy="158" r="34" fill="rgba(35,75,54,0.70)"  />
      <circle cx="243" cy="142" r="30" fill="rgba(35,75,54,0.70)"  />
      <circle cx="150" cy="122" r="26" fill="rgba(38,80,58,0.72)"  />
      <circle cx="230" cy="112" r="25" fill="rgba(38,80,58,0.72)"  />

      {/* ── Canopy — mid ── */}
      <circle cx="190" cy="138" r="44" fill="rgba(48,95,68,0.80)"  />
      <circle cx="155" cy="108" r="32" fill="rgba(52,102,74,0.78)" />
      <circle cx="225" cy="105" r="30" fill="rgba(52,102,74,0.78)" />
      <circle cx="190" cy="90"  r="38" fill="rgba(60,114,82,0.82)" />

      {/* ── Canopy — front/top ── */}
      <circle cx="172" cy="72"  r="28" fill="rgba(70,128,94,0.80)"  />
      <circle cx="208" cy="70"  r="26" fill="rgba(70,128,94,0.80)"  />
      <circle cx="190" cy="58"  r="32" fill="rgba(80,142,104,0.85)" />
      <circle cx="190" cy="46"  r="22" fill="rgba(92,156,114,0.78)" />

      {/* Canopy highlights */}
      <circle cx="180" cy="50"  r="10" fill="rgba(221,232,213,0.24)" />
      <circle cx="200" cy="45"  r="8"  fill="rgba(221,232,213,0.18)" />
      <circle cx="155" cy="115" r="10" fill="rgba(221,232,213,0.20)" />
      <circle cx="225" cy="110" r="9"  fill="rgba(221,232,213,0.20)" />

      {/* ── Golden sunlight ── */}
      <circle cx="190" cy="36" r="18" fill="rgba(228,185,91,0.18)" />
      <circle cx="190" cy="36" r="10" fill="rgba(228,185,91,0.28)" />
      <circle cx="190" cy="36" r="5"  fill="rgba(228,185,91,0.55)" />
      {/* Rays */}
      <line x1="190" y1="25" x2="190" y2="10" stroke="#E4B95B" strokeWidth="1.3" opacity="0.32" />
      <line x1="190" y1="25" x2="202" y2="13" stroke="#E4B95B" strokeWidth="1.1" opacity="0.24" />
      <line x1="190" y1="25" x2="178" y2="13" stroke="#E4B95B" strokeWidth="1.1" opacity="0.24" />

      {/* ── Birds ── */}
      <path d="M92  110 C95  107, 98  107, 101 110" stroke="rgba(248,246,241,0.45)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M278  90 C281  87, 284  87, 287  90" stroke="rgba(248,246,241,0.40)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* ── Ground ── */}
      <path d="M55 302 Q190 292, 325 302" stroke="rgba(221,232,213,0.20)" strokeWidth="1.5" />

      {/* ═══════════════════════════════════════════
          CHILD 1 — LEFT — girl with hair tie, book in hand
          ═══════════════════════════════════════════ */}
      <ellipse cx="118" cy="304" rx="20" ry="7" fill="rgba(0,0,0,0.06)" />
      {/* Legs */}
      <path d="M108 284 C104 293, 101 300, 104 303 C108 305, 115 295, 117 287" fill="rgba(248,246,241,0.72)" />
      <path d="M128 284 C132 293, 135 300, 132 303 C128 305, 121 295, 119 287" fill="rgba(248,246,241,0.72)" />
      {/* Torso */}
      <path d="M108 263 C108 252, 128 252, 128 263 L124 280 C121 283, 115 283, 112 280Z" fill="rgba(228,185,91,0.82)" />
      {/* Head */}
      <circle cx="118" cy="248" r="15" fill="rgba(248,246,241,0.92)" />
      {/* Hair — girl, ponytail */}
      <path d="M104 245 C104 235, 118 229, 132 234 C132 241, 132 247, 132 247 C127 245, 109 245, 104 247Z" fill="rgba(74,64,54,0.62)" />
      <circle cx="132" cy="237" r="5" fill="rgba(228,185,91,0.68)" />
      {/* Face */}
      <ellipse cx="113" cy="248" rx="1.8" ry="1.8" fill="rgba(74,64,54,0.50)" />
      <ellipse cx="123" cy="248" rx="1.8" ry="1.8" fill="rgba(74,64,54,0.50)" />
      <path d="M113 253 C115 256, 121 256, 123 253" stroke="rgba(74,64,54,0.38)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Arms */}
      <path d="M108 268 C104 273, 103 278, 104 281" stroke="rgba(248,246,241,0.75)" strokeWidth="5" strokeLinecap="round" />
      <path d="M128 268 C132 273, 133 278, 132 281" stroke="rgba(248,246,241,0.75)" strokeWidth="5" strokeLinecap="round" />
      {/* Book on lap */}
      <path d="M103 281 L118 275 L133 281 L118 290Z" fill="rgba(221,232,213,0.90)" />
      <path d="M103 281 L118 290" stroke="rgba(35,75,54,0.28)" strokeWidth="1.0" />
      <path d="M133 281 L118 290" stroke="rgba(35,75,54,0.28)" strokeWidth="1.0" />
      <line x1="109" y1="283" x2="116" y2="280" stroke="rgba(35,75,54,0.16)" strokeWidth="0.8" />
      <line x1="109" y1="286" x2="116" y2="283" stroke="rgba(35,75,54,0.16)" strokeWidth="0.8" />
      <line x1="120" y1="280" x2="127" y2="283" stroke="rgba(35,75,54,0.16)" strokeWidth="0.8" />

      {/* ═══════════════════════════════════════════
          CHILD 2 — CENTER — boy, arms raised in excitement
          ═══════════════════════════════════════════ */}
      <ellipse cx="190" cy="304" rx="20" ry="7" fill="rgba(0,0,0,0.06)" />
      {/* Legs */}
      <path d="M180 284 C176 293, 173 300, 176 303 C180 305, 187 295, 189 287" fill="rgba(248,246,241,0.72)" />
      <path d="M200 284 C204 293, 207 300, 204 303 C200 305, 193 295, 191 287" fill="rgba(248,246,241,0.72)" />
      {/* Torso */}
      <path d="M180 263 C180 252, 200 252, 200 263 L196 280 C193 283, 187 283, 184 280Z" fill="rgba(221,232,213,0.85)" />
      {/* Head */}
      <circle cx="190" cy="248" r="15" fill="rgba(248,246,241,0.92)" />
      {/* Hair — boy, short */}
      <path d="M176 245 C176 235, 190 229, 204 234 C204 240, 204 247, 204 247 C198 244, 182 244, 176 247Z" fill="rgba(74,64,54,0.62)" />
      {/* Face — excited, looking up slightly */}
      <ellipse cx="185" cy="247" rx="1.8" ry="1.8" fill="rgba(74,64,54,0.50)" />
      <ellipse cx="195" cy="247" rx="1.8" ry="1.8" fill="rgba(74,64,54,0.50)" />
      <path d="M185 253 C187 257, 193 257, 195 253" stroke="rgba(74,64,54,0.40)" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      {/* Arms raised — excited/pointing up */}
      <path d="M180 265 C173 258, 168 250, 166 244" stroke="rgba(248,246,241,0.78)" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M200 265 C207 258, 212 250, 214 244" stroke="rgba(248,246,241,0.78)" strokeWidth="5.5" strokeLinecap="round" />
      {/* Book on lap */}
      <path d="M175 281 L190 275 L205 281 L190 290Z" fill="rgba(228,185,91,0.85)" />
      <path d="M175 281 L190 290" stroke="rgba(35,75,54,0.28)" strokeWidth="1.0" />
      <path d="M205 281 L190 290" stroke="rgba(35,75,54,0.28)" strokeWidth="1.0" />
      <line x1="181" y1="283" x2="188" y2="280" stroke="rgba(35,75,54,0.16)" strokeWidth="0.8" />
      <line x1="192" y1="280" x2="199" y2="283" stroke="rgba(35,75,54,0.16)" strokeWidth="0.8" />

      {/* ═══════════════════════════════════════════
          CHILD 3 — RIGHT — girl, looking at book
          ═══════════════════════════════════════════ */}
      <ellipse cx="262" cy="304" rx="20" ry="7" fill="rgba(0,0,0,0.06)" />
      {/* Legs */}
      <path d="M252 284 C248 293, 245 300, 248 303 C252 305, 259 295, 261 287" fill="rgba(248,246,241,0.72)" />
      <path d="M272 284 C276 293, 279 300, 276 303 C272 305, 265 295, 263 287" fill="rgba(248,246,241,0.72)" />
      {/* Torso */}
      <path d="M252 263 C252 252, 272 252, 272 263 L268 280 C265 283, 259 283, 256 280Z" fill="rgba(228,185,91,0.78)" />
      {/* Head */}
      <circle cx="262" cy="248" r="15" fill="rgba(248,246,241,0.92)" />
      {/* Hair — girl, two braids */}
      <path d="M248 245 C248 235, 262 229, 276 234 C276 241, 276 247, 276 247 C271 245, 253 245, 248 247Z" fill="rgba(74,64,54,0.62)" />
      <path d="M248 247 L245 257 L249 258 L252 248" fill="rgba(74,64,54,0.45)" />
      <path d="M276 247 L279 257 L275 258 L272 248" fill="rgba(74,64,54,0.45)" />
      {/* Face */}
      <ellipse cx="257" cy="248" rx="1.8" ry="1.8" fill="rgba(74,64,54,0.50)" />
      <ellipse cx="267" cy="248" rx="1.8" ry="1.8" fill="rgba(74,64,54,0.50)" />
      <path d="M257 253 C259 256, 265 256, 267 253" stroke="rgba(74,64,54,0.38)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Arms */}
      <path d="M252 268 C248 273, 247 278, 248 281" stroke="rgba(248,246,241,0.75)" strokeWidth="5" strokeLinecap="round" />
      <path d="M272 268 C276 273, 277 278, 276 281" stroke="rgba(248,246,241,0.75)" strokeWidth="5" strokeLinecap="round" />
      {/* Book on lap */}
      <path d="M247 281 L262 275 L277 281 L262 290Z" fill="rgba(221,232,213,0.90)" />
      <path d="M247 281 L262 290" stroke="rgba(35,75,54,0.28)" strokeWidth="1.0" />
      <path d="M277 281 L262 290" stroke="rgba(35,75,54,0.28)" strokeWidth="1.0" />
      <line x1="253" y1="283" x2="260" y2="280" stroke="rgba(35,75,54,0.16)" strokeWidth="0.8" />
      <line x1="253" y1="286" x2="260" y2="283" stroke="rgba(35,75,54,0.16)" strokeWidth="0.8" />
      <line x1="264" y1="280" x2="271" y2="283" stroke="rgba(35,75,54,0.16)" strokeWidth="0.8" />

      {/* ── Scattered books & nature objects on ground ── */}
      <path d="M82 295 L97 291 L97 299 L82 299Z" fill="rgba(221,232,213,0.50)" rx="1" />
      <path d="M288 291 L303 287 L303 295 L288 295Z" fill="rgba(228,185,91,0.42)" rx="1" />
      <path d="M75 300 C73 296, 78 293, 81 297 C79 299, 75 300, 75 300Z" fill="rgba(221,232,213,0.45)" />
      <path d="M308 296 C310 292, 315 294, 313 298 C311 297, 308 296, 308 296Z" fill="rgba(221,232,213,0.40)" />

      {/* ── Floating leaves in air ── */}
      <path d="M68  198 C65 192, 71 187, 76 192 C73 196, 68 198, 68 198Z" fill="rgba(221,232,213,0.50)" />
      <path d="M313 178 C316 172, 322 177, 318 183 C315 180, 313 178, 313 178Z" fill="rgba(221,232,213,0.45)" />
      <path d="M58  152 C56 147, 62 144, 65 148 C63 151, 58 152, 58 152Z" fill="rgba(228,185,91,0.38)" />
      <path d="M320 155 C322 150, 328 153, 325 158 C323 156, 320 155, 320 155Z" fill="rgba(228,185,91,0.35)" />

      {/* ── Sparkle dots ── */}
      <circle cx="152" cy="175" r="3.0" fill="#E4B95B"            opacity="0.55" />
      <circle cx="228" cy="165" r="2.5" fill="#E4B95B"            opacity="0.48" />
      <circle cx="88"  cy="232" r="2.0" fill="rgba(221,232,213,1)" opacity="0.55" />
      <circle cx="292" cy="225" r="2.0" fill="rgba(221,232,213,1)" opacity="0.52" />
      <circle cx="168" cy="318" r="2.0" fill="#E4B95B"            opacity="0.38" />
      <circle cx="212" cy="316" r="2.0" fill="#E4B95B"            opacity="0.35" />
      <circle cx="140" cy="200" r="1.5" fill="rgba(221,232,213,1)" opacity="0.50" />
      <circle cx="240" cy="195" r="1.5" fill="rgba(221,232,213,1)" opacity="0.45" />
    </svg>
  )
}
