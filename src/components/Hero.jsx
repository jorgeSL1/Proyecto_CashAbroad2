import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#3d5de2]/10 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-display font-semibold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-tight mb-4 sm:mb-6 px-2">
            Todo lo que necesitas para impulsar tu motor de ventas
          </h1>
          
          <p className="font-body font-light text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
            Únete a más de 3 millones de personas que usan CashAbroad para encontrar clientes potenciales, ejecutar campañas multicanal y hacer seguimiento del rendimiento. ¡Regístrate GRATIS y obtén acceso instantáneo a 210M de contactos!
          </p>

          <form onSubmit={handleSubmit} className="mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo de trabajo"
                className="font-body font-light flex-1 px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d5de2] focus:border-transparent text-base sm:text-lg"
                required
              />
              <motion.button
                type="submit"
                className="font-heading font-semibold bg-[#3d5de2] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#3451c7] transition shadow-lg whitespace-nowrap text-base sm:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Regístrate gratis
              </motion.button>
            </div>
          </form>

          <p className="font-body font-light text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 px-4">
            Al registrarme, acepto los <a href="#" className="text-[#3d5de2] hover:underline">Términos de Servicio</a> y la <a href="#" className="text-[#3d5de2] hover:underline">Política de Privacidad</a> de CashAbroad.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm px-4">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-label text-gray-700">91% precisión de correos</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-label text-gray-700">No requiere experiencia</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-label text-gray-700">Solución todo en uno</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}