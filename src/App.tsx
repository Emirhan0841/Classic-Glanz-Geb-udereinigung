import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Trust } from './components/sections/Trust'
import { Services } from './components/sections/Services'
import { About } from './components/sections/About'
import { Why } from './components/sections/Why'
import { Process } from './components/sections/Process'
import { CTA } from './components/sections/CTA'
import { Contact } from './components/sections/Contact'
import { Legal } from './components/sections/Legal'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <About />
        <Why />
        <Process />
        <CTA />
        <Contact />
        <Legal />
      </main>
      <Footer />
    </div>
  )
}

export default App
