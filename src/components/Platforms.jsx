import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { platforms } from '../data/platforms.js'

function PlatformCard({ platform, index, lang, t }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-[3px] transition-all duration-200"
      style={{ borderTop: `4px solid ${platform.color}` }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{platform.logo}</span>
        <div>
          <h3 className="font-bold text-navy">{platform.name}</h3>
          <p className="text-sm text-text-muted font-mono">{platform.handle}</p>
        </div>
      </div>
      <a
        href={platform.url}
        target="_blank"
        rel="noreferrer"
        className="inline-block text-sm text-blue font-semibold hover:underline mb-4"
      >
        {t('platforms.profile')} →
      </a>

      <div className="space-y-4">
        {platform.modules.map((module) => (
          <div key={module.name} className="border-t border-border pt-3">
            <div className="flex items-start justify-between gap-2 mb-1">
              <p className="text-sm font-semibold text-navy">{module.name}</p>
              <span
                className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold ${
                  module.status === 'complété'
                    ? 'bg-success-bg text-success-text'
                    : 'bg-tag-bg text-tag-text animate-pulse'
                }`}
              >
                {module.status === 'complété' ? t('platforms.status.completed') : t('platforms.status.in_progress')}
              </span>
            </div>
            <p className="text-xs text-text-muted">
              → {t('platforms.learning')} : {module.learning[lang]}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function Platforms() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <section id="platforms" className="py-14 bg-bg-secondary px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl font-bold text-navy text-center mb-8">{t('platforms.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {platforms.map((platform, index) => (
            <PlatformCard key={platform.name} platform={platform} index={index} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Platforms
