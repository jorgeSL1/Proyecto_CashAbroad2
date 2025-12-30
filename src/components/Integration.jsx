import { motion } from 'framer-motion'

export default function Integration() {
  const integrations = [
    {
      name: 'Gmail',
      description: 'Accede a plantillas y fragmentos, rastrea aperturas de email, añade contactos a secuencias y más en Gmail.',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Salesforce',
      description: 'Elimina el trabajo administrativo y mantén tus datos actualizados con nuestra integración bidireccional de CRM.',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'HubSpot',
      description: 'Sincroniza actividades, añade contactos a secuencias desde tu CRM y actualiza tareas automáticamente.',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="font-display font-semibold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4 px-4">
            Conéctate con tu stack tecnológico existente
          </h2>
          <p className="font-body font-light text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Integra perfectamente con las herramientas que ya usas
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${integration.color} rounded-lg sm:rounded-xl mb-4 sm:mb-6 flex items-center justify-center`}>
                <span className="font-display font-semibold text-white text-xl sm:text-2xl">{integration.name[0]}</span>
              </div>
              <h3 className="font-heading font-semibold text-lg sm:text-xl md:text-2xl text-gray-900 mb-3 sm:mb-4">
                {integration.name}
              </h3>
              <p className="font-body font-light text-gray-600 leading-relaxed text-sm sm:text-base">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}