import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Features from '../components/Features'
import Testimonial from '../components/Testimonial'
import Integration from '../components/Integration'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  const [isDragging, setIsDragging] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleClick = (e) => {
    if (isDragging) {
      e.preventDefault()
    }
  }

  const handleDragEnd = (event, info) => {
    setPosition({ x: info.offset.x + position.x, y: info.offset.y + position.y })
    setTimeout(() => setIsDragging(false), 100)
  }

  const dragConstraints = {
    top: -window.innerHeight + 100,
    left: -window.innerWidth + 100,
    right: 24,
    bottom: 24,
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Partners />
      <Testimonial />
      <Features />
      <Integration />
      <FAQ />
      <CTA />
      <Footer />

      <motion.a
        href="https://wa.me/5580465994"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        drag={isMobile}
        dragConstraints={dragConstraints}
        dragElastic={0.05}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        whileDrag={{ scale: 1.1 }}
        whileHover={!isMobile ? { scale: 1.1 } : {}}
        whileTap={{ scale: 0.95 }}
        className={`
          fixed bottom-6 right-6 z-50
          bg-[#25D366] rounded-full shadow-lg hover:shadow-xl
          transition-shadow duration-300
          flex items-center justify-center
          ${isMobile ? 'w-14 h-14 cursor-grab active:cursor-grabbing' : 'w-14 h-14 animate-bounce-slow'}
        `}
        style={{ touchAction: 'none' }}
        aria-label="Contactar por WhatsApp"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className={`object-contain pointer-events-none ${isMobile ? 'w-10 h-10' : 'w-16 h-16'}`}
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
