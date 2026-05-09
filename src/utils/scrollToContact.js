import { getLenis } from '../hooks/useLenis'

/** Removes any hash fragment from the URL without triggering navigation */
function clearHash() {
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
}

export function scrollToContact() {
  const target = document.getElementById('contact')
  if (!target) return
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.4 })
  else       target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  clearHash()
}
