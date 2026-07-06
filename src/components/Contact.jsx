import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const CONTACT_LINKS = [
  { icon: FaEnvelope, label: 'komail.kassimaly@efrei.net', href: 'mailto:komail.kassimaly@efrei.net' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/komail-kassimaly/' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/KomailK' },
]

function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-14 bg-bg-secondary px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-navy mb-4">{t('contact.title')}</h2>
        <p className="text-text-muted mb-8">{t('contact.subtitle')}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-bg-card border border-border text-navy font-semibold shadow-card hover:shadow-card-hover hover:-translate-y-[3px] transition-all duration-200"
            >
              <link.icon /> {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
