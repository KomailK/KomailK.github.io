import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { experiences } from '../data/experiences.js'

const BADGE_COLORS = {
  ITrust: 'bg-blue-100 text-blue-700',
  'DMG Media': 'bg-purple-100 text-purple-700',
}

function ExperienceCard({ exp, index, lang, t }) {
  const [expanded, setExpanded] = useState(false)
  const isRight = index % 2 === 1

  const variants = {
    hidden: { opacity: 0, x: isRight ? 40 : -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className={`relative flex justify-end mb-12 ${isRight ? 'md:justify-end' : 'md:justify-start'}`}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full md:w-[45%] bg-bg-card border border-border rounded-xl p-6 shadow-sm"
      >
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${BADGE_COLORS[exp.company] || 'bg-blue-100 text-blue-700'}`}>
          {exp.company}
        </span>
        <h3 className="text-lg font-bold text-navy">{exp.title[lang]}</h3>
        <p className="text-sm text-text-muted mb-1">
          {exp.company} — {exp.location} — {exp.type[lang]}
        </p>
        <p className="text-sm font-mono text-blue mb-4">{exp.period}</p>

        {expanded && (
          <ul className="list-disc list-inside space-y-1 text-sm text-text-primary mb-4">
            {exp.bullets[lang].map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-semibold text-blue hover:underline mb-4"
        >
          {expanded ? t('experience.seeLess') : t('experience.seeMore')}
        </button>

        <div className="flex flex-wrap gap-2">
          {exp.tools.map((tool) => (
            <span key={tool} className="px-2 py-1 rounded-md bg-bg-secondary text-xs font-mono text-navy">
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function Experience() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <section id="experience" className="py-24 bg-bg-primary px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-navy text-center mb-16">{t('experience.title')}</h2>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
