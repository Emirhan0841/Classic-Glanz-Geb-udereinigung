import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ScrollToHash } from './components/layout/ScrollToHash'
import { PreviewBanner } from './components/layout/PreviewBanner'
import { HomePage } from './pages/HomePage'
import { ImpressumPage } from './pages/ImpressumPage'
import { DatenschutzPage } from './pages/DatenschutzPage'

function App() {
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
    </div>
  )
}

export default App
