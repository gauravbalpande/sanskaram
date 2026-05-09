import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

// Module-level ref so Navbar (and any component) can call scrollTo
let _lenis = null
export const getLenis = () => _lenis

export function useLenis() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration:        1.2,
      easing:          (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel:     true,
      smoothTouch:     false,
      touchMultiplier: 2,
      infinite:        false,
    })

    lenisRef.current = lenis
    _lenis = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Prevent any hash (e.g. #contact, #about) from ever appearing in the URL
    function clearHash() {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search)
      }
    }
    window.addEventListener('hashchange', clearHash, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      _lenis = null
      window.removeEventListener('hashchange', clearHash)
    }
  }, [])

  return lenisRef
}
