import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { experiences } from '../data/experiences.js'

const BADGE_COLORS = {
  ITrust: 'bg-tag-bg text-tag-text',
  'DMG Media': 'bg-purple-bg text-purple-text',
}

function ExperienceCard({ exp, index, lang }) {
  const isRight = index % 2 === 1

  const variants = {
    hidden: { opacity: 0, x: isRight ? 40 : -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className={`relative flex justify-end mb-8 ${isRight ? 'md:justify-end' : 'md:justify-start'}`}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full md:w-[45%] bg-bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-[3px] transition-all duration-200"
      >
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${BADGE_COLORS[exp.company] || 'bg-tag-bg text-tag-text'}`}>
          {exp.company}
        </span>
        <h3 className="text-lg font-bold text-navy">{exp.title[lang]}</h3>
        <p className="text-sm text-text-muted mb-1">
          {exp.company} — {exp.location} — {exp.type[lang]}
        </p>
        <p className="text-sm font-mono text-blue mb-3">{exp.period}</p>

        {exp.metrics && exp.metrics.length > 0 && (
          <div className="flex gap-4 py-3 my-3 border-t border-b border-border">
            {exp.metrics.map((m, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <span className="text-[22px] font-bold text-blue leading-none">{m.value}</span>
                <span className="text-[11px] text-text-muted text-center mt-1">{m.label[lang]}</span>
              </div>
            ))}
          </div>
        )}

        <ul className="list-disc list-inside space-y-1 text-sm text-text-primary mb-4">
          {exp.bullets[lang].map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tools.map((tool) => (
            <span key={tool} className="px-2 py-0.5 rounded-md bg-tag-bg border border-tag-border text-xs font-mono text-tag-text">
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
    <section id="experience" className="py-14 bg-bg-secondary px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl font-bold text-navy text-center mb-8">{t('experience.title')}</h2>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue to-timeline-line md:-translate-x-1/2" />
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
