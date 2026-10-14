import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrollt bei jedem Seitenwechsel: zum Anker (#id) oder nach oben.
// scroll-padding-top in index.css sorgt dafür, dass der sticky Header Abschnitte nicht verdeckt.
export const ScrollToHash = () => {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash, key])

  // Beim direkten Aufruf (/#services) verschiebt sich das Layout nach dem Laden durch Webfonts.
  // Deshalb nochmals zum Anker springen, sobald Seite und Schriften geladen sind.
  useEffect(() => {
    if (!window.location.hash) return
    const scrollToHash = () => document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
    window.addEventListener('load', scrollToHash)
    document.fonts?.ready.then(scrollToHash)
    return () => window.removeEventListener('load', scrollToHash)
  }, [])

  return null
}
