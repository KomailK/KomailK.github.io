import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaGraduationCap, FaGlobeAmericas } from 'react-icons/fa'
import { education } from '../data/education.js'

const ICONS = {
  graduation: FaGraduationCap,
  globe: FaGlobeAmericas,
}

function EducationCard({ edu, index, lang }) {
  const Icon = ICONS[edu.icon]
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-[3px] transition-all duration-200"
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl text-blue shrink-0">
          <Icon />
        </span>
        <div>
          <h3 className="text-lg font-bold text-navy">{edu.degree[lang]}</h3>
          <p className="text-sm text-text-muted">
            {edu.school} — {edu.location}
          </p>
          <p className="text-sm font-mono text-blue">{edu.period}</p>
        </div>
      </div>

      <ul className="space-y-2 text-sm text-text-primary mb-4">
        {edu.highlights[lang].map((h, i) => {
          const [label, ...rest] = h.split(':')
          const detail = rest.join(':').trim()
          return (
            <li key={i} className="flex gap-2.5">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
              <span className="leading-relaxed">
                {detail ? (
                  <>
                    <span className="font-semibold text-navy">{label.trim()}</span> : {detail}
                  </>
                ) : (
                  label
                )}
              </span>
            </li>
          )
        })}
      </ul>

      <div className="flex flex-wrap gap-2">
        {edu.tools.map((tool) => (
          <span key={tool} className="px-2 py-0.5 rounded-md bg-tag-bg border border-tag-border text-xs font-mono text-tag-text">
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function Education() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <section id="education" className="py-14 bg-bg-primary px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl font-bold text-navy text-center mb-8">{t('education.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
