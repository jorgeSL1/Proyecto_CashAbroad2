import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Quiz from '../components/Quiz'
import PricingChart from '../components/PricingChart'
import GanttTimeline from '../components/GanttTimeline'

export default function Calculator() {
  const [answers, setAnswers] = useState({})
  const [scenario, setScenario] = useState('intermediate')
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      
      <section className="pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eef2ff] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-3 sm:mb-4 leading-tight">
              Calculadora de Visa
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
              Descubre el costo y tiempo estimado para tu proceso de visa
            </p>
          </motion.div>
        </div>
      </section>

   
      <section className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-6 md:gap-8 lg:gap-12">

            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="lg:sticky lg:top-24">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-900 mb-4 sm:mb-5">
                  Responde las Preguntas
                </h2>
                <Quiz onAnswersChange={setAnswers} answers={answers} />
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 sm:space-y-6 md:space-y-8"
            >
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-900 mb-4 sm:mb-5">
                  Estimación de Costos
                </h2>
                <PricingChart answers={answers} />
              </div>

              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-900 mb-4 sm:mb-5">
                  Línea de Tiempo
                </h2>
                <GanttTimeline
                  answers={answers}
                  scenario={scenario}
                  onScenarioChange={setScenario}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

    
      <motion.a
        href="https://wa.me/5580465994"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center w-16 h-16 sm:w-14 sm:h-14"
        aria-label="Contactar por WhatsApp"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="w-[72px] h-[72px] sm:w-16 sm:h-16 object-contain pointer-events-none"
          draggable="false"
        />
      </motion.a>
    </div>
  )
}
