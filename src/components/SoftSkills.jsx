import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { softSkills } from '../data/softSkills.js'

function SkillCard({ skill, index, lang }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-[3px] transition-all duration-200 text-center"
    >
      <div className="text-4xl mb-3">{skill.icon}</div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {softSkills.map((skill, index) => (
            <SkillCard key={skill.name.en} skill={skill} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills
