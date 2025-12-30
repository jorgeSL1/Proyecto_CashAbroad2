import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import Integration from './components/Integration'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <Testimonial />
      <Features />
      <Integration />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
