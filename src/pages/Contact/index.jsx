import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, HiOutlineCheckCircle } from 'react-icons/hi2'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { staggerContainer, staggerItem } from '../../animations/variants'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { LeafA, LeafB, LeafC } from '../../assets/svg/BotanicalLeaf'
import AnimatedText from '../../components/ui/AnimatedText'

// ─── Floating label input ─────────────────────────────────────────────────────

function FloatField({ label, type = 'text', value, onChange, required, children }) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  if (children) {
    // Select field
    return (
      <div className="relative">
        <label
          className="absolute left-4 font-body font-medium pointer-events-none transition-all duration-250 z-10"
          style={{
            top:      active ? '8px'   : '50%',
            transform:active ? 'none'  : 'translateY(-50%)',
            fontSize: active ? '10px'  : '14px',
            color:    active ? '#468432' : 'rgba(70,132,50,0.48)',
            letterSpacing: active ? '0.08em' : '0',
          }}
        >
          {label}
        </label>
        <select
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className="w-full rounded-2xl font-body text-sm bg-transparent appearance-none outline-none pt-6 pb-3 px-4"
          style={{
            background:  'rgba(255,253,224,0.70)',
            border:      `1.5px solid ${focused ? '#468432' : 'rgba(154,216,114,0.45)'}`,
            color:       '#1E2A14',
            boxShadow:   focused ? '0 0 0 3px rgba(70,132,50,0.10)' : 'none',
            transition:  'border-color 0.2s, box-shadow 0.2s',
          }}
        >
          {children}
        </select>
      </div>
    )
  }

  return (
    <div className="relative">
      <label
        className="absolute left-4 font-body font-medium pointer-events-none transition-all duration-250 z-10"
        style={{
          top:      active ? '8px'   : '50%',
          transform:active ? 'none'  : 'translateY(-50%)',
          fontSize: active ? '10px'  : '14px',
          color:    active ? '#468432' : 'rgba(70,132,50,0.48)',
          letterSpacing: active ? '0.08em' : '0',
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className="w-full rounded-2xl font-body text-sm outline-none pt-6 pb-3 px-4"
        style={{
          background:  'rgba(255,253,224,0.70)',
          border:      `1.5px solid ${focused ? '#468432' : 'rgba(154,216,114,0.45)'}`,
          color:       '#1E2A14',
          boxShadow:   focused ? '0 0 0 3px rgba(70,132,50,0.10)' : 'none',
          transition:  'border-color 0.2s, box-shadow 0.2s',
        }}
      />
    </div>
  )
}

function FloatTextarea({ label, value, onChange, required }) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  return (
    <div className="relative">
      <label
        className="absolute left-4 font-body font-medium pointer-events-none transition-all duration-250 z-10"
        style={{
          top:      active ? '8px'   : '18px',
          fontSize: active ? '10px'  : '14px',
          color:    active ? '#468432' : 'rgba(70,132,0.48)',
          letterSpacing: active ? '0.08em' : '0',
          color:    active ? '#468432' : 'rgba(70,132,50,0.48)',
        }}
      >
        {label}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={4}
        className="w-full rounded-2xl font-body text-sm outline-none pt-8 pb-3 px-4 resize-none"
        style={{
          background:  'rgba(255,253,224,0.70)',
          border:      `1.5px solid ${focused ? '#468432' : 'rgba(154,216,114,0.45)'}`,
          color:       '#1E2A14',
          boxShadow:   focused ? '0 0 0 3px rgba(70,132,50,0.10)' : 'none',
          transition:  'border-color 0.2s, box-shadow 0.2s',
        }}
      />
    </div>
  )
}

// ─── Contact detail card ──────────────────────────────────────────────────────

function ContactCard({ icon: Icon, label, value, href, delay }) {
  return (
    <motion.a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-5 rounded-2xl group cursor-pointer"
      style={{
        background:  'rgba(255,253,224,0.75)',
        border:      '1.5px solid rgba(154,216,114,0.40)',
        boxShadow:   '0 2px 16px rgba(70,132,50,0.07)',
        textDecoration: 'none',
      }}
      initial={{ opacity: 0, x: -24, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.60, ease: [0.16, 1, 0.30, 1] }}
      whileHover={{ y: -3, boxShadow: '0 8px 32px rgba(70,132,50,0.16)', borderColor: 'rgba(70,132,50,0.50)' }}
    >
      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(154,216,114,0.28)', border: '1px solid rgba(70,132,50,0.18)' }}>
        <Icon size={18} style={{ color: '#468432' }} />
      </div>
      <div>
        <p className="font-body text-[10px] font-semibold tracking-[0.18em] uppercase mb-0.5"
          style={{ color: 'rgba(70,132,50,0.50)' }}>{label}</p>
        <p className="font-body text-sm font-medium group-hover:text-[#468432] transition-colors duration-200"
          style={{ color: '#1E2A14' }}>{value}</p>
      </div>
    </motion.a>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

const INIT = { parentName: '', childAge: '', email: '', program: '', message: '' }

export default function ContactPage() {
  const [form,      setForm]      = useState(INIT)
  const [submitted, setSubmitted] = useState(false)
  const [submitting,setSubmitting]= useState(false)

  function handleChange(field) {
    return (e) => setForm(f => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    // Simulate async (replace with real API call later)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #FFFDE0 0%, #F5F5C0 100%)' }}>
      <Navbar />

      {/* ── Hero banner ── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1C3A14 0%, #2A5220 55%, #1C3A14 100%)' }}>
        <div className="absolute inset-0 dot-pattern-dark pointer-events-none" aria-hidden />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(255,160,46,0.14) 0%, transparent 65%)', filter: 'blur(40px)' }} aria-hidden />

        {/* Leaf accents */}
        <motion.div className="absolute top-12 right-10 pointer-events-none"
          animate={{ rotate: [-5,5,-5], y: [0,-7,0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
          <LeafB color="#9AD872" size={28} opacity={0.18} />
        </motion.div>
        <motion.div className="absolute bottom-8 left-8 pointer-events-none"
          animate={{ rotate: [4,-4,4], y: [0,6,0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
          <LeafC color="#FFA02E" size={22} opacity={0.20} />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.p className="font-body text-xs font-semibold tracking-[0.30em] uppercase mb-4"
            style={{ color: 'rgba(255,160,46,0.72)' }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.30, 1] }}>
            We'd love to hear from you
          </motion.p>
          <AnimatedText
            text="Get in Touch"
            as="h1"
            delay={0.1}
            className="font-heading font-semibold mb-4"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#FFEF91', lineHeight: 1.1 }}
          />
          <motion.p className="font-heading italic text-lg"
            style={{ color: 'rgba(255,160,46,0.65)' }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65, ease: [0.16, 1, 0.30, 1] }}>
            "Every great journey begins with a single conversation."
          </motion.p>
        </div>

        {/* Wave into content */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-10 lg:h-12"
            style={{ fill: '#FFFDE0' }}>
            <path d="M0,24 C480,48 960,0 1440,28 L1440,48 L0,48 Z" />
          </svg>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">

            {/* LEFT — Contact info */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.16, 1, 0.30, 1] }}>
                <p className="font-body text-xs font-semibold tracking-[0.22em] uppercase mb-3"
                  style={{ color: 'rgba(255,160,46,0.75)' }}>Contact Details</p>
                <h2 className="font-heading text-3xl lg:text-4xl leading-tight mb-2" style={{ color: '#468432' }}>
                  Let's start a<br /><span className="italic">conversation.</span>
                </h2>
                <div className="w-10 h-[2px] rounded-full mt-4"
                  style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }} />
                <p className="font-body text-sm leading-relaxed mt-4" style={{ color: '#3A4828' }}>
                  Whether you're a parent curious about our programs, an educator interested in collaboration,
                  or simply someone who believes in mindful child growth — we'd love to connect.
                </p>
              </motion.div>

              <div className="flex flex-col gap-3">
                <ContactCard icon={HiOutlineEnvelope} label="Email Us"
                  value="mysanskaram@gmail.com" href="mailto:mysanskaram@gmail.com" delay={0.15} />
                <ContactCard icon={HiOutlinePhone} label="Call Us"
                  value="+91 72768 45679" href="tel:+917276845679" delay={0.25} />
                <ContactCard icon={HiOutlineMapPin} label="Based In"
                  value="Maharashtra, India" href="#" delay={0.35} />
              </div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.45, duration: 0.60, ease: [0.16, 1, 0.30, 1] }}>
                <p className="font-body text-[10px] font-semibold tracking-[0.22em] uppercase mb-3"
                  style={{ color: 'rgba(70,132,50,0.45)' }}>Follow the Journey</p>
                <div className="flex gap-3">
                  {[
                    { Icon: FaInstagram, label: 'Instagram', href: '#' },
                    { Icon: FaFacebookF, label: 'Facebook',  href: '#' },
                    { Icon: FaYoutube,   label: 'YouTube',   href: '#' },
                  ].map(({ Icon, label, href }) => (
                    <motion.a key={label} href={href} aria-label={label}
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(255,253,224,0.80)', border: '1.5px solid rgba(154,216,114,0.40)', color: '#468432' }}
                      whileHover={{ background: 'rgba(255,160,46,0.18)', borderColor: 'rgba(255,160,46,0.55)', color: '#FFA02E', scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}>
                      <Icon size={14} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Form */}
            <motion.div
              className="rounded-4xl overflow-hidden"
              style={{ background: 'rgba(255,253,224,0.85)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(154,216,114,0.40)', boxShadow: '0 4px 40px rgba(70,132,50,0.10)' }}
              initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.16, 1, 0.30, 1] }}>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="p-7 lg:p-10 flex flex-col gap-5"
                    initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35 }}>

                    <div>
                      <p className="font-body text-[10px] font-semibold tracking-[0.22em] uppercase mb-1"
                        style={{ color: 'rgba(255,160,46,0.75)' }}>Send a Message</p>
                      <h3 className="font-heading text-2xl" style={{ color: '#468432' }}>
                        Tell us about your child
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FloatField label="Parent / Guardian Name"
                        value={form.parentName} onChange={handleChange('parentName')} required />
                      <FloatField label="Child's Age" type="number"
                        value={form.childAge} onChange={handleChange('childAge')} required />
                    </div>

                    <FloatField label="Email Address" type="email"
                      value={form.email} onChange={handleChange('email')} required />

                    <FloatField label="Interested Program" value={form.program}
                      onChange={handleChange('program')} required>
                      <option value="" disabled />
                      <option value="prarambh">🌱 Prarambh — Age 8–10</option>
                      <option value="prerana">🌿 Prerana — Age 11–13</option>
                      <option value="pragati">✨ Pragati — Age 14–15</option>
                      <option value="unsure">Not sure yet</option>
                    </FloatField>

                    <FloatTextarea label="Your Message (optional)"
                      value={form.message} onChange={handleChange('message')} />

                    <motion.button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-2xl font-body font-semibold text-sm tracking-wide border-0 cursor-pointer relative overflow-hidden"
                      style={{ background: submitting ? '#3A7228' : '#468432', color: '#FFEF91' }}
                      whileHover={!submitting ? { background: '#FFA02E', color: '#1C3A14', scale: 1.01 } : {}}
                      whileTap={{ scale: 0.98 }}>
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.span
                            className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white inline-block"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
                          Sending...
                        </span>
                      ) : 'Send Message →'}
                    </motion.button>

                    <p className="font-body text-center" style={{ fontSize: '11px', color: 'rgba(70,132,50,0.45)' }}>
                      We typically respond within 24 hours.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="p-10 lg:p-14 flex flex-col items-center text-center gap-5"
                    initial={{ opacity: 0, scale: 0.90 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}>
                    <motion.div
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ delay: 0.15, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}>
                      <HiOutlineCheckCircle size={64} style={{ color: '#468432' }} />
                    </motion.div>
                    <div>
                      <h3 className="font-heading text-2xl mb-2" style={{ color: '#468432' }}>
                        Thank you for connecting with Sanskaram.
                      </h3>
                      <p className="font-heading italic" style={{ color: 'rgba(255,160,46,0.80)', fontSize: '1.05rem' }}>
                        "Every great journey begins with a first step."
                      </p>
                    </div>
                    <div className="w-10 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #FFA02E, #FFB84E)' }} />
                    <p className="font-body text-sm leading-relaxed max-w-sm" style={{ color: '#3A4828' }}>
                      We've received your message and will get back to you within 24 hours.
                      We look forward to being part of your child's journey.
                    </p>
                    <motion.button
                      onClick={() => setForm(INIT) || setSubmitted(false)}
                      className="font-body text-sm font-medium border-0 bg-transparent cursor-pointer"
                      style={{ color: '#468432' }}
                      whileHover={{ color: '#FFA02E' }}>
                      Send another message →
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
