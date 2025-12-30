import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-semibold uppercase text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Consigue tu próxima reunión en cuestión de minutos
          </h2>
          <p className="font-body font-light text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Únete a miles de equipos de ventas que confían en CashAbroad para impulsar su motor de ventas
          </p>
          <motion.a
            href="#signup"
            className="font-heading font-semibold inline-block bg-white text-blue-600 px-10 py-5 rounded-lg text-lg hover:bg-gray-50 transition shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Regístrate gratis
          </motion.a>
          <p className="font-label text-blue-100 mt-6 text-sm">
            No se requiere tarjeta de crédito • 600 créditos de email gratis • Cancela en cualquier momento
          </p>
        </motion.div>
      </div>
    </section>
  )
}