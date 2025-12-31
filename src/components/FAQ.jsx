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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-display font-semibold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 px-4">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            
            return (
              <div key={index} className="group">
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex items-center justify-between hover:bg-gray-50/80 transition-colors duration-200 ease-out"
                >
                  <span className="font-heading font-semibold text-base sm:text-lg md:text-xl text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`
                      w-5 h-5 sm:w-6 sm:h-6 
                      flex items-center justify-center 
                      flex-shrink-0
                      transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]
                      ${isOpen ? 'rotate-180' : 'rotate-0'}
                    `}
                  >
                    <svg
                      className="w-full h-full text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </span>
                </button>
                
                <div
                  className={`
                    grid 
                    transition-[grid-template-rows,opacity] 
                    duration-300 
                    ease-[cubic-bezier(0.33,1,0.68,1)]
                    ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pt-1">
                      <p className="font-body font-light text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}