import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#3d5de2] to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#3d5de2] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-semibold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 sm:mb-6 px-4">
            Consigue tu próxima reunión en cuestión de minutos
          </h2>
          <p className="font-body font-light text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Únete a miles de equipos de ventas que confían en CashAbroad para impulsar su motor de ventas
          </p>
          <motion.a
            href="#signup"
            className="font-heading font-semibold inline-block bg-white text-[#3d5de2] px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg hover:bg-gray-50 transition shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Regístrate gratis
          </motion.a>
          <p className="font-label text-blue-100 mt-4 sm:mt-6 text-xs sm:text-sm px-4">
            No se requiere tarjeta de crédito • 600 créditos de email gratis • Cancela en cualquier momento
          </p>
        </motion.div>
      </div>
    </section>
  )
}