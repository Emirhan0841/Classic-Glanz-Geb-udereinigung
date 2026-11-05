import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ScrollToHash } from './components/layout/ScrollToHash'
import { PreviewBanner } from './components/layout/PreviewBanner'
import { CookieNotice } from './components/layout/CookieNotice'
import { HomePage } from './pages/HomePage'
import { ImpressumPage } from './pages/ImpressumPage'
import { DatenschutzPage } from './pages/DatenschutzPage'
import { company } from './data/company'

function App() {
  const { pathname } = useLocation()

  // Canonical je Seite auf die finale Domain setzen (Single-Page-App, ein gemeinsames Link-Tag)
  useEffect(() => {
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = company.website + pathname
  }, [pathname])

  return (
    <div className="min-h-screen bg-background">
      <ScrollToHash />
      <PreviewBanner />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <CookieNotice />
    </div>
  )
}

export default App
