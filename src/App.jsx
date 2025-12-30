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

      {}
      <a
        href="https://wa.me/5491123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-bounce-slow hover:scale-110 group"
        aria-label="Contactar por WhatsApp"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="w-20 h-20 object-contain"
        />
      </a>
    </div>
  )
}

export default App
