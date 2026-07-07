import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()
  const roles = t('hero.roles', { returnObjects: true })
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section className="flex flex-col items-center justify-center bg-bg-primary px-6 pt-44 pb-36 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold text-navy mb-6"
      >
        Komail Kassimaly
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="h-10 mb-16"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-xl md:text-2xl font-mono text-blue"
          >
            {roles[roleIndex]}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-blue text-white font-semibold hover:bg-blue-light transition-colors"
        >
          {t('hero.ctaProjects')} ↓
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-navy text-navy font-semibold hover:bg-bg-secondary transition-colors"
        >
          {t('hero.ctaContact')}
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
