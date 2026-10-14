import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrollt bei jedem Seitenwechsel: zum Anker (#id) oder nach oben.
// scroll-padding-top in index.css sorgt dafür, dass der sticky Header Abschnitte nicht verdeckt.
export const ScrollToHash = () => {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const scrollToTarget = () => document.getElementById(hash.slice(1))?.scrollIntoView()
    scrollToTarget()
    // Webfonts verschieben das Layout nach dem ersten Scroll. Deshalb nachjustieren,
    // solange der Anker noch aktuell ist.
    let stillCurrent = true
    document.fonts?.ready.then(() => {
      if (stillCurrent && window.location.hash === hash) scrollToTarget()
    })
    return () => {
      stillCurrent = false
    }
  }, [pathname, hash, key])

  // Beim direkten Aufruf (/#services) verschiebt sich das Layout nach dem vollständigen Laden.
  // Deshalb nochmals zum Anker springen, sobald die Seite geladen ist.
  useEffect(() => {
    if (!window.location.hash) return
    const scrollToHash = () => document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
    window.addEventListener('load', scrollToHash)
    return () => window.removeEventListener('load', scrollToHash)
  }, [])

  return null
}
