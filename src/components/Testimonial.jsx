import { motion } from 'framer-motion'

export default function Testimonial() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div>
                <div className="font-display font-semibold uppercase text-6xl text-blue-600 mb-2">200%</div>
                <div className="font-heading font-semibold text-xl text-gray-900">MÁS INGRESOS DE VENTAS EN 90 DÍAS</div>
              </div>
              <div>
                <div className="font-display font-semibold uppercase text-6xl text-blue-600 mb-2">70%</div>
                <div className="font-heading font-semibold text-xl text-gray-900">Aumento en tasa de apertura</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <div className="mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="font-body font-light text-lg text-gray-700 mb-6 leading-relaxed">
              Muchos acuerdos a nivel empresarial se logran a través de ventas directas. CashAbroad ha sido fundamental para ayudarnos a abrir puertas con esas cuentas.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
              <div>
                <div className="font-heading font-semibold text-gray-900">Sarah Johnson</div>
                <div className="font-label text-sm text-gray-600">Gerente BDR en TechCorp</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}