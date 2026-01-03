import { motion } from 'framer-motion'

export default function Partners() {
  
  const partners = [
    { name: 'Starknet', logo: '/STARKNET.png' },
    { name: 'Stellar', logo: '/Stellar Logo Final RGB.png' },
    { name: 'Techstars', logo: '/techstars.png' },
  ]

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <p className="font-label text-xs sm:text-sm md:text-base text-gray-600 uppercase tracking-wide">
            Confían en nosotros
          </p>
        </motion.div>

      
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center w-full"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full max-w-[280px] sm:max-w-none sm:w-36 md:w-44 lg:w-52 
                            h-20 sm:h-24 md:h-28 lg:h-32 
                            flex items-center justify-center 
                            bg-white rounded-lg shadow-sm 
                            p-4 sm:p-5 md:p-6">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}