import { motion } from 'framer-motion'

export default function SectionWrapper({ children, className = '', id }) {
  return (
    <motion.section
      id={id}
      className={`py-20 sm:py-28 relative ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </motion.section>
  )
}
