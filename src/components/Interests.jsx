import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaShieldAlt, FaRobot, FaFilm, FaFutbol, FaPlane } from 'react-icons/fa'
import { interests } from '../data/interests.js'

const ICONS = {
  cybersecurity: FaShieldAlt,
  ai: FaRobot,
  film: FaFilm,
  football: FaFutbol,
  travel: FaPlane,
}

function InterestCard({ interest, index, lang }) {
  const Icon = ICONS[interest.icon]
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-[3px] transition-all duration-200 text-center"
    >
      <div className="text-3xl text-blue mb-3 flex justify-center">
        <Icon />
      </div>
      <h3 className="font-bold text-navy mb-1">{interest.name[lang]}</h3>
      {interest.desc[lang] && <p className="text-sm text-text-muted">{interest.desc[lang]}</p>}
    </motion.div>
  )
}

function Interests() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <section id="interests" className="py-14 bg-bg-secondary px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl font-bold text-navy text-center mb-8">{t('interests.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {interests.map((interest, index) => (
            <InterestCard key={interest.name.en} interest={interest} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests
