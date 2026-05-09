/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── ColorHunt palette #4684329ad872ffef91ffa02e ──────────────
        primary:    "#468432",   // deep green — headings, nav, borders
        lightGreen: "#9AD872",   // sage/light green — badges, chips
        yellow:     "#FFEF91",   // soft yellow — light backgrounds, cards
        orange:     "#FFA02E",   // warm orange — CTAs, accents

        // ── Derived shades ────────────────────────────────────────────
        primaryDark:"#2A5220",   // darkened primary for dark sections
        primaryDeep:"#1C3A14",   // deepest green for footers
        yellowLight:"#FFFDE0",   // near-white warm tint for body bg
        yellowDim:  "#FFF8C0",   // slightly deeper yellow for section bg
        orangeLight:"#FFB84E",   // lighter orange for gradients
        orangeDark: "#D4851E",   // deeper orange for text on light bg

        // ── Text ─────────────────────────────────────────────────────
        textDark:   "#1E2A14",   // near-black with green warmth
        textMid:    "#3A4828",   // mid-tone green-brown text
        textSoft:   "#5A6848",   // soft muted text

        // ── Neutrals (keep for glass/overlay use) ────────────────────
        offWhite:   "#FFFDE0",   // warm off-white
        sage:       "#C8EDAE",   // very light green for subtle bgs
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body:    ['"Poppins"',          'sans-serif'],
      },
      fontSize: {
        hero:        'clamp(2.8rem, 6.5vw, 5.2rem)',
        'display-1': 'clamp(2rem,   4vw,   3.5rem)',
        'display-2': 'clamp(1.5rem, 3vw,   2.4rem)',
        'display-3': 'clamp(1.2rem, 2vw,   1.7rem)',
      },
      backgroundImage: {
        'section-light':  'linear-gradient(180deg, #FFFDE0 0%, #FFF8C0 100%)',
        'section-yellow': 'linear-gradient(180deg, #FFEF91 0%, #FFE766 100%)',
        'section-green':  'linear-gradient(180deg, #C8EDAE 0%, #9AD872 100%)',
        'section-dark':   'linear-gradient(160deg, #1C3A14 0%, #2A5220 55%, #1C3A14 100%)',
        'hero-warm':      'linear-gradient(160deg, #FFFDE0 0%, #FFF6B0 55%, #FFEF91 100%)',
        'orange-glow':    'linear-gradient(135deg, #FFA02E 0%, #FFB84E 100%)',
        'green-glow':     'linear-gradient(135deg, #468432 0%, #5A9E40 100%)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow':  'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)'  },
          '50%':      { transform: 'translateY(-18px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1'   },
          '50%':      { opacity: '0.6' },
        },
      },
      boxShadow: {
        'soft':       '0 4px 32px rgba(70,132,50,0.12)',
        'card':       '0 2px 20px rgba(70,132,50,0.08)',
        'card-hover': '0 12px 48px rgba(70,132,50,0.20)',
        'elevated':   '0 8px 48px rgba(70,132,50,0.18)',
        'orange':     '0 4px 24px rgba(255,160,46,0.35)',
        'green':      '0 4px 24px rgba(70,132,50,0.30)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
