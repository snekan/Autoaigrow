import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Features from './components/Features'
import Vision from './components/Vision'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Features />
      <Vision />
      <CTA />
      <Footer />
    </div>
  )
}
