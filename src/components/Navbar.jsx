import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="/cashabroad-black.png" 
                alt="CashAbroad" 
                className="h-24"
              />
            </a>
          </div>

          <div className="flex items-center">
            <motion.a
              href="#signup"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm"
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