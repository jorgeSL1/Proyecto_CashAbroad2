import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "¿Qué tan precisos son los datos de CashAbroad?",
      answer: "Nuestros datos pasan por un proceso de verificación de múltiples pasos para comprobar emails y números de teléfono directos en tiempo real, resultando en una tasa de precisión de email del 91%. Hacemos crecer constantemente nuestra base de datos a través de nuestra red de 2 millones de contribuyentes de datos."
    },
    {
      question: "¿Cómo puedo aprender a usar CashAbroad?",
      answer: "Ofrecemos sesiones personalizadas de incorporación y una biblioteca de seminarios web de capacitación grabados para asegurar que puedas ponerte al día rápidamente, independientemente de tu horario."
    },
    {
      question: "¿Puedo cancelar, mejorar o bajar de plan en cualquier momento?",
      answer: "Sí. Puedes cancelar, mejorar o bajar de plan a través de tu configuración de facturación dentro de la aplicación. Todas las cancelaciones y bajadas de plan se llevarán a cabo al final de tu ciclo de plan, mientras que las mejoras se realizarán de inmediato."
    },
    {
      question: "¿Qué incluye el plan gratuito?",
      answer: "El plan gratuito incluye acceso a nuestra base de datos de 210M de contactos, 600 créditos de email por año, filtros de búsqueda básicos y funciones esenciales de alcance para comenzar."
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-semibold uppercase text-4xl sm:text-5xl text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="font-heading font-semibold text-xl text-gray-900">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-gray-600 transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="font-body font-light text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}