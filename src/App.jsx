import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
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
  const [isDragging, setIsDragging] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const constraintsRef = useRef(null)

  useState(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleClick = (e) => {
    if (isDragging) {
      e.preventDefault()
    }
  }

  return (
    <div className="min-h-screen bg-white" ref={constraintsRef}>
      <Navbar />
      <Hero />
      <SocialProof />
      <Testimonial />
      <Features />
      <Integration />
      <FAQ />
      <CTA />
      <Footer />

      
      <motion.a
        href="https://wa.me/5491123456789"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        drag={isMobile}
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
        whileDrag={{ scale: 1.1 }}
        whileHover={!isMobile ? { scale: 1.1 } : {}}
        whileTap={{ scale: 0.95 }}
        className={`
          fixed bottom-6 right-6 z-50 
          bg-[#25D366] rounded-full shadow-lg hover:shadow-xl 
          transition-shadow duration-300 
          flex items-center justify-center
          ${isMobile ? 'w-14 h-14 cursor-grab active:cursor-grabbing' : 'w-16 h-16 animate-bounce-slow'}
        `}
        style={{ touchAction: 'none' }}
        aria-label="Contactar por WhatsApp"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className={`object-contain pointer-events-none ${isMobile ? 'w-8 h-8' : 'w-16 h-16'}`}
          draggable="false"
        />
        
        
        {isMobile && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/75 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
          >
            Arrastra para mover
          </motion.span>
        )}
      </motion.a>
    </div>
  )
}

export default App