import { createContext, useContext, useState, useCallback } from 'react'

const NavCtx = createContext(null)

export function NavigationProvider({ children }) {
  const [view, setViewRaw] = useState('home') // 'home' | 'contact' | 'coming-soon'

  const setView = useCallback((v) => {
    setViewRaw(v)
    // Always scroll to top on view change
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <NavCtx.Provider value={{ view, setView }}>
      {children}
    </NavCtx.Provider>
  )
}

export const useNav = () => useContext(NavCtx)
