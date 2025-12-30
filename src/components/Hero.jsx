import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display font-semibold uppercase text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
            Todo lo que necesitas para impulsar tu motor de ventas
          </h1>
          
          <p className="font-body font-light text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Únete a más de 3 millones de personas que usan SalesFlow para encontrar clientes potenciales, ejecutar campañas multicanal y hacer seguimiento del rendimiento. ¡Regístrate GRATIS y obtén acceso instantáneo a 210M de contactos!
          </p>

          <form onSubmit={handleSubmit} className="mb-6 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo de trabajo"
                className="font-body font-light flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
                required
              />
              <motion.button
                type="submit"
                className="font-heading font-semibold bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition shadow-lg whitespace-nowrap text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Regístrate gratis
              </motion.button>
            </div>
          </form>

          <p className="font-body font-light text-sm text-gray-500 mb-8">
            Al registrarme, acepto los <a href="#" className="text-blue-600 hover:underline">Términos de Servicio</a> y la <a href="#" className="text-blue-600 hover:underline">Política de Privacidad</a> de SalesFlow.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-label text-gray-700">91% precisión de correos</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-label text-gray-700">No requiere experiencia</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
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