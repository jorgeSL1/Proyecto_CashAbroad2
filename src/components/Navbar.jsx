import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import logo from '/cashabroad-black.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
      
         
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <a href="#" className="flex items-center flex-shrink-0">
              <img 
                src={logo}
                alt="CashAbroad" 
                className="h-12 sm:h-16 md:h-20 w-auto"
              />
            </a>

            
            <motion.a
              href="https://cashabroad-pricing.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-black px-2 sm:px-4 py-2 font-semibold transition text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Calculadora 
            </motion.a>
          </div>

         
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="https://app.cashabroad.one/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-black px-4 py-2 font-semibold transition text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar sesión
            </motion.a>

            <motion.a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#3d5de2] text-[#3d5de2] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#3d5de2]/10 transition text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Obtener una demo
            </motion.a>

            <motion.a
              href="#signup"
              className="bg-[#3d5de2] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#3451c7] transition shadow-sm text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Regístrate gratis
            </motion.a>
          </div>

          
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition"
            aria-label="Abrir menú"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gray-700 rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-gray-700 rounded-full mt-1.5"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gray-700 rounded-full mt-1.5"
            />
          </button>
        </div>


        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-3 pb-6 pt-2">
                <motion.a
                  href="https://app.cashabroad.one/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-black px-4 py-3 font-semibold transition text-base hover:bg-gray-50 rounded-lg"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  Iniciar sesión
                </motion.a>

                <motion.a
                  href="https://calendly.com/TU_USUARIO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#3d5de2] text-[#3d5de2] px-4 py-3 rounded-lg font-semibold hover:bg-[#3d5de2]/10 transition text-base text-center"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  Obtener una demo
                </motion.a>

                <motion.a
                  href="#signup"
                  className="bg-[#3d5de2] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#3451c7] transition shadow-sm text-base text-center"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  Regístrate gratis
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}