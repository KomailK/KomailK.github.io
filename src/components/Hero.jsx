import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()
  const roles = t('hero.roles', { returnObjects: true })
  const [roleIndex, setRoleIndex] = useState(0)
  const [cvOpen, setCvOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-bg-primary px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-navy mb-4"
      >
        Komail Kassimaly
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="h-8 mb-10"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-lg md:text-xl font-mono text-blue"
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

        <div className="relative">
          <button
            onClick={() => setCvOpen(!cvOpen)}
            className="px-6 py-3 rounded-lg border border-border text-navy font-semibold hover:bg-bg-secondary transition-colors"
          >
            ↓ {t('hero.ctaCv')}
          </button>
          {cvOpen && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white border border-border rounded-lg shadow-lg overflow-hidden w-40 z-10">
              <a
                href="/cv_fr.pdf"
                download
                className="block px-4 py-2 text-sm hover:bg-bg-secondary text-left"
                onClick={() => setCvOpen(false)}
              >
                {t('hero.cvFr')}
              </a>
              <a
                href="/cv_en.pdf"
                download
                className="block px-4 py-2 text-sm hover:bg-bg-secondary text-left"
                onClick={() => setCvOpen(false)}
              >
                {t('hero.cvEn')}
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
