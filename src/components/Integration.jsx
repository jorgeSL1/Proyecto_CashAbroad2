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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-semibold uppercase text-4xl sm:text-5xl text-gray-900 mb-4">
            Conéctate con tu stack tecnológico existente
          </h2>
          <p className="font-body font-light text-xl text-gray-600 max-w-3xl mx-auto">
            Integra perfectamente con las herramientas que ya usas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-xl mb-6 flex items-center justify-center`}>
                <span className="font-display font-semibold text-white text-2xl">{integration.name[0]}</span>
              </div>
              <h3 className="font-heading font-semibold text-2xl text-gray-900 mb-4">
                {integration.name}
              </h3>
              <p className="font-body font-light text-gray-600 leading-relaxed">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}