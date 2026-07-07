import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaFistRaised, FaCheckCircle, FaSearch, FaSync, FaLanguage } from 'react-icons/fa'
import { softSkills, languages } from '../data/softSkills.js'

const ICONS = {
  perseverance: FaFistRaised,
  conscientious: FaCheckCircle,
  meticulous: FaSearch,
  adaptability: FaSync,
}

function SkillCard({ skill, index, lang }) {
  const Icon = ICONS[skill.icon]
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-[3px] transition-all duration-200 text-center"
    >
      <div className="text-3xl text-blue mb-3 flex justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
        <Icon />
      </div>
      <h3 className="font-bold text-navy mb-1">{skill.name[lang]}</h3>
      <p className="text-sm text-text-muted">{skill.desc[lang]}</p>
    </motion.div>
  )
}

function SoftSkills() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <section id="softskills" className="py-14 bg-bg-primary px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl font-bold text-navy text-center mb-8">{t('softSkills.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {softSkills.map((skill, index) => (
            <SkillCard key={skill.name.en} skill={skill} index={index} lang={lang} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {languages.map((l) => (
            <span
              key={l.name.en}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tag-bg border border-tag-border text-sm text-tag-text transition-transform duration-200 hover:scale-105"
            >
              <FaLanguage />
              <span className="font-semibold">{l.name[lang]}</span>
              <span className="font-mono">{l.level}</span>
              {l.note && <span className="text-text-muted">({l.note})</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills
