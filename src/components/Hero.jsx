import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaSearch, FaEnvelope, FaLinkedin } from 'react-icons/fa'

function Hero() {
  const { t } = useTranslation()
  const roles = t('hero.roles', { returnObjects: true })
  const [roleIndex, setRoleIndex] = useState(0)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section className="relative flex flex-col items-center justify-center bg-bg-primary px-6 pt-28 pb-36 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-tag-bg border border-tag-border text-tag-text text-sm font-semibold mb-10 whitespace-pre-line leading-snug"
      >
        <FaSearch className="shrink-0" />
        {t('hero.banner')}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-5xl md:text-7xl font-bold text-navy mb-6"
      >
        Komail Kassimaly
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
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

        <div className="relative">
          <button
            onClick={() => setContactOpen(!contactOpen)}
            className="px-6 py-3 rounded-lg border border-navy text-navy font-semibold hover:bg-bg-secondary transition-colors"
          >
            {t('hero.ctaContact')}
          </button>
          {contactOpen && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-bg-card border border-border rounded-lg shadow-card-hover overflow-hidden w-56 z-10">
              <a
                href="mailto:komail.kassimaly@efrei.net"
                className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-bg-secondary text-left"
                onClick={() => setContactOpen(false)}
              >
                <FaEnvelope className="text-blue" /> {t('hero.ctaEmail')}
              </a>
              <a
                href="https://www.linkedin.com/in/komail-kassimaly/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-bg-secondary text-left border-t border-border"
                onClick={() => setContactOpen(false)}
              >
                <FaLinkedin className="text-blue" /> {t('hero.ctaLinkedin')}
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
