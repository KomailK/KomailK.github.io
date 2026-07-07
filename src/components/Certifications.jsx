import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaTrophy, FaBullseye } from 'react-icons/fa'
import { certifications } from '../data/certifications.js'

function CertCard({ cert, index, lang, t }) {
  const Icon = cert.status === 'obtained' ? FaTrophy : FaBullseye
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-[3px] transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl text-blue transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
          <Icon />
        </span>
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
            cert.status === 'obtained' ? 'bg-success-bg text-success-text' : 'bg-tag-bg text-tag-text animate-pulse'
          }`}
        >
          {cert.status === 'obtained' ? t('certifications.status.obtained') : t('certifications.status.in_progress')}
        </span>
      </div>
      <h3 className="font-bold text-navy mb-1">{cert.name}</h3>
      <p className="text-sm text-text-muted mb-1">{cert.org}</p>
      <p className="text-sm font-mono text-blue">{cert.date[lang]}</p>
      {cert.score && <p className="text-xs text-text-muted mt-1">{cert.score}</p>}
    </motion.div>
  )
}

function Certifications() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <section id="certifications" className="py-14 bg-bg-secondary px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl font-bold text-navy text-center mb-8">{t('certifications.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <CertCard key={cert.name} cert={cert} index={index} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
