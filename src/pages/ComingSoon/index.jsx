import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineArrowRight, HiOutlineCheckCircle } from 'react-icons/hi2'
import { useNav } from '../../context/NavigationContext'
import { LeafA, LeafB, LeafC } from '../../assets/svg/BotanicalLeaf'

// ─── Floating particle data ───────────────────────────────────────────────────

const PARTICLES = [
  { x:'8%',  y:'18%', s:5, c:'rgba(255,160,46,0.50)',  dur:5.2, delay:0.3  },
  { x:'88%', y:'12%', s:4, c:'rgba(154,216,114,0.45)', dur:6.5, delay:1.0  },
  { x:'76%', y:'78%', s:6, c:'rgba(255,160,46,0.42)',  dur:4.8, delay:0.7  },
  { x:'14%', y:'80%', s:4, c:'rgba(154,216,114,0.40)', dur:6.0, delay:1.5  },
  { x:'50%', y:'7%',  s:3, c:'rgba(255,239,145,0.55)', dur:7.5, delay:0.5  },
  { x:'93%', y:'52%', s:5, c:'rgba(255,160,46,0.38)',  dur:5.0, delay:2.0  },
  { x:'6%',  y:'50%', s:4, c:'rgba(154,216,114,0.38)', dur:6.8, delay:0.9  },
  { x:'40%', y:'90%', s:5, c:'rgba(255,160,46,0.40)',  dur:5.5, delay:1.8  },
  { x:'62%', y:'20%', s:3, c:'rgba(154,216,114,0.45)', dur:7.0, delay:0.6  },
  { x:'28%', y:'36%', s:4, c:'rgba(255,239,145,0.42)', dur:6.2, delay:2.4  },
  { x:'80%', y:'42%', s:3, c:'rgba(255,160,46,0.35)',  dur:8.0, delay:1.2  },
  { x:'20%', y:'62%', s:5, c:'rgba(154,216,114,0.32)', dur:5.8, delay:2.8  },
]

const LEAVES = [
  { top:'8%',  left:'5%',   size:40, rot:-15, op:0.15, dur:6.5, delay:0.5 },
  { top:'12%', right:'6%',  size:30, rot:20,  op:0.13, dur:8.0, delay:1.2 },
  { top:'72%', left:'4%',   size:34, rot:-8,  op:0.14, dur:7.2, delay:0.8 },
  { top:'78%', right:'5%',  size:26, rot:12,  op:0.12, dur:6.0, delay:2.0 },
  { top:'40%', left:'2%',   size:22, rot:-20, op:0.10, dur:9.0, delay:3.0 },
  { top:'35%', right:'3%',  size:24, rot:18,  op:0.10, dur:7.5, delay:1.8 },
  { top:'55%', left:'96%',  size:18, rot:-10, op:0.08, dur:8.5, delay:2.5 },
]

const PILLARS = ['Values', 'Confidence', 'Wisdom', 'Mindfulness', 'Stories', 'Growth']

// ─── Component ────────────────────────────────────────────────────────────────

export default function ComingSoonPage() {
  const { setView } = useNav()
  const [email,     setEmail]     = useState('')
  const [joined,    setJoined]    = useState(false)
  const [loading,   setLoading]   = useState(false)

  function handleJoin(e) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setJoined(true) }, 1000)
  }

  return (
    <div className="fixed inset-0 z-[400] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1C3A14 0%, #234B36 50%, #1A3810 100%)' }}>

      {/* Dot texture */}
      <div className="absolute inset-0 dot-pattern-dark pointer-events-none" aria-hidden />

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div style={{ position:'absolute', top:'-10%', left:'50%', transform:'translateX(-50%)', width:'60vw', height:'50vw', borderRadius:'50%', background:'radial-gradient(circle, rgba(228,185,91,0.14) 0%, transparent 65%)', filter:'blur(50px)' }} />
        <div style={{ position:'absolute', bottom:'-15%', left:'50%', transform:'translateX(-50%)', width:'70vw', height:'50vw', borderRadius:'50%', background:'radial-gradient(circle, rgba(154,216,114,0.10) 0%, transparent 65%)', filter:'blur(60px)' }} />
        <motion.div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'50vw', height:'50vw', borderRadius:'50%', background:'radial-gradient(circle, rgba(228,185,91,0.07) 0%, transparent 65%)', filter:'blur(40px)' }}
          animate={{ scale:[1,1.12,1], opacity:[0.6,1,0.6] }} transition={{ duration:6, repeat:Infinity, ease:'easeInOut' }} />
      </div>

      {/* Floating particles */}
      {PARTICLES.map((p,i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ left:p.x, top:p.y, width:p.s, height:p.s, background:p.c }}
          animate={{ y:[-10,10,-10], opacity:[0.2,0.8,0.2] }}
          transition={{ duration:p.dur, repeat:Infinity, ease:'easeInOut', delay:p.delay }} />
      ))}

      {/* Floating leaf silhouettes */}
      {LEAVES.map((l,i) => (
        <motion.div key={i} className="absolute pointer-events-none"
          style={{ top:l.top, left:l.left, right:l.right, width:l.size, transform:`rotate(${l.rot}deg)`, color:`rgba(154,216,114,${l.op})` }}
          animate={{ y:[0,-8,0] }}
          transition={{ duration:l.dur, repeat:Infinity, ease:'easeInOut', delay:l.delay }}>
          <svg viewBox="0 0 40 64" fill="none" style={{ width:'100%' }} aria-hidden>
            <path d="M20 60C4 44 1 20 20 4C39 20 36 44 20 60Z" fill="currentColor" />
            <path d="M20 60L20 4" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
          </svg>
        </motion.div>
      ))}

      {/* Orbital rings */}
      <motion.div className="absolute rounded-full border pointer-events-none"
        style={{ width:'min(72vw, 520px)', height:'min(72vw, 520px)', borderColor:'rgba(228,185,91,0.07)' }}
        animate={{ rotate:360 }} transition={{ duration:65, repeat:Infinity, ease:'linear' }} />
      <motion.div className="absolute rounded-full border border-dashed pointer-events-none"
        style={{ width:'min(56vw, 410px)', height:'min(56vw, 410px)', borderColor:'rgba(154,216,114,0.09)' }}
        animate={{ rotate:-360 }} transition={{ duration:48, repeat:Infinity, ease:'linear' }} />

      {/* Back to website button */}
      <motion.button
        onClick={() => setView('home')}
        className="absolute top-6 left-6 flex items-center gap-2 font-body text-xs font-medium border-0 bg-transparent cursor-pointer tracking-wide"
        style={{ color:'rgba(200,237,174,0.55)' }}
        whileHover={{ color:'#FFEF91', x:-2 }}
        initial={{ opacity:0, x:-10 }} animate={{ opacity:1, x:0 }}
        transition={{ delay:0.3, duration:0.5 }}>
        ← Back to Sanskaram
      </motion.button>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-0 w-full max-w-2xl">

        {/* Logo */}
        <motion.div className="relative mb-7"
          initial={{ opacity:0, scale:0.6, y:24 }} animate={{ opacity:1, scale:1, y:0 }}
          transition={{ duration:0.90, ease:[0.16,1,0.30,1], delay:0.1 }}>
          <div style={{ position:'absolute', inset:'-20px', borderRadius:'50%', background:'radial-gradient(circle, rgba(228,185,91,0.22) 0%, transparent 70%)', filter:'blur(16px)' }} />
          <motion.img src="/logo.png" alt="Sanskaram"
            className="relative z-10"
            style={{ height:'min(100px,20vw)', width:'auto', filter:'brightness(0) invert(1)', opacity:0.90 }}
            animate={{ y:[0,-5,0] }} transition={{ duration:4.5, repeat:Infinity, ease:'easeInOut', delay:1 }} />
        </motion.div>

        {/* "Coming Soon" label */}
        <motion.p className="font-body font-semibold tracking-[0.32em] uppercase mb-3"
          style={{ fontSize:'clamp(0.6rem,1.8vw,0.78rem)', color:'rgba(255,160,46,0.72)' }}
          initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:0.65, duration:0.65, ease:[0.16,1,0.30,1] }}>
          Launching Soon
        </motion.p>

        {/* Main headline */}
        <div style={{ overflow:'hidden' }}>
          <motion.h1 className="font-heading font-semibold"
            style={{ fontSize:'clamp(2.2rem, 8vw, 5.5rem)', color:'#FFEF91', lineHeight:1.05, letterSpacing:'0.02em' }}
            initial={{ y:'110%', opacity:0 }} animate={{ y:'0%', opacity:1 }}
            transition={{ duration:1.0, ease:[0.16,1,0.30,1], delay:0.80 }}>
            Something beautiful<br /><span className="italic">is on its way.</span>
          </motion.h1>
        </div>

        {/* Gold divider */}
        <motion.div className="my-6 rounded-full"
          style={{ height:'1.5px', width:0, background:'linear-gradient(90deg, transparent, rgba(228,185,91,0.70), transparent)' }}
          animate={{ width:'min(140px, 35vw)' }}
          transition={{ duration:1.0, ease:[0.16,1,0.30,1], delay:1.45 }} />

        {/* Description */}
        <motion.div className="flex flex-col gap-2 mb-8"
          initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:1.60, duration:0.70, ease:[0.16,1,0.30,1] }}>
          <p className="font-body leading-relaxed" style={{ fontSize:'clamp(0.88rem,2.5vw,1.05rem)', color:'rgba(200,237,174,0.72)' }}>
            Our first learning journeys are being prepared with care.
          </p>
          <p className="font-heading italic" style={{ fontSize:'clamp(0.8rem,2.2vw,0.95rem)', color:'rgba(255,160,46,0.60)' }}>
            "Admissions opening soon. Be part of the beginning."
          </p>
        </motion.div>

        {/* Waitlist form */}
        <motion.div className="w-full max-w-md"
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:1.90, duration:0.70, ease:[0.16,1,0.30,1] }}>
          <AnimatePresence mode="wait">
            {!joined ? (
              <motion.form key="form" onSubmit={handleJoin}
                className="flex flex-col sm:flex-row gap-3"
                exit={{ opacity:0, scale:0.97 }} transition={{ duration:0.3 }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-full font-body text-sm outline-none min-w-0"
                  style={{ background:'rgba(255,255,255,0.09)', border:'1.5px solid rgba(255,255,255,0.16)', color:'rgba(255,253,224,0.88)' }}
                  onFocus={e => { e.target.style.borderColor='rgba(255,160,46,0.60)'; e.target.style.background='rgba(255,255,255,0.13)' }}
                  onBlur={e  => { e.target.style.borderColor='rgba(255,255,255,0.16)'; e.target.style.background='rgba(255,255,255,0.09)' }}
                />
                <motion.button type="submit" disabled={loading}
                  className="px-6 py-3 rounded-full font-body font-semibold text-sm border-0 cursor-pointer flex items-center justify-center gap-2 flex-shrink-0"
                  style={{ background:'#FFA02E', color:'#1C3A14' }}
                  whileHover={{ background:'#FFB84E', scale:1.04 }} whileTap={{ scale:0.97 }}>
                  {loading
                    ? <motion.span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white inline-block"
                        animate={{ rotate:360 }} transition={{ duration:0.8, repeat:Infinity, ease:'linear' }} />
                    : <><span>Join the Journey</span><HiOutlineArrowRight size={14} /></>}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div key="joined" className="flex flex-col items-center gap-3 py-2"
                initial={{ opacity:0, scale:0.88 }} animate={{ opacity:1, scale:1 }}
                transition={{ duration:0.60, ease:[0.34,1.56,0.64,1] }}>
                <HiOutlineCheckCircle size={32} style={{ color:'#9AD872' }} />
                <p className="font-heading italic text-lg" style={{ color:'#FFEF91' }}>
                  You're on the list.
                </p>
                <p className="font-body text-sm" style={{ color:'rgba(200,237,174,0.60)' }}>
                  We'll reach out as soon as we launch. Thank you for believing in Sanskaram.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pillars */}
        <motion.div className="flex flex-wrap justify-center gap-2 mt-8"
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ delay:2.10, duration:0.70 }}>
          {PILLARS.map((p,i) => (
            <motion.span key={p}
              className="font-body text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)', color:'rgba(200,237,174,0.65)' }}
              initial={{ opacity:0, scale:0.80 }} animate={{ opacity:1, scale:1 }}
              transition={{ delay:2.15 + i * 0.07, duration:0.35, ease:[0.34,1.56,0.64,1] }}>
              ✦ {p}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
