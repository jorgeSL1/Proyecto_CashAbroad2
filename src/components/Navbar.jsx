import { motion } from 'framer-motion'
import { useState } from 'react'
import logo from '/cashabroad-black.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center flex-shrink-0">
            <a href="#" className="flex items-center">
              <img 
                src={logo}
                alt="CashAbroad" 
                className="h-10 sm:h-12 md:h-[52px] w-auto"
              />
            </a>
          </div>

          <div className="flex items-center">
            <motion.a
              href="#signup"
              className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Regístrate gratis
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  )
}