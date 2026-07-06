import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const SOCIALS = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/komail-kassimaly/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/KomailK', label: 'GitHub' },
]

const PLATFORM_LINKS = [
  { emoji: '🎯', href: 'https://tryhackme.com/p/Komd5', label: 'TryHackMe' },
  { emoji: '📦', href: 'https://app.hackthebox.com/profile/Komd5', label: 'HTB Academy' },
  { emoji: '🔐', href: 'https://www.root-me.org/Komd5', label: 'Root Me' },
]

function About() {
  const { t } = useTranslation()
  const skills = t('about.skills', { returnObjects: true })

  return (
    <section id="about" className="py-24 bg-bg-secondary px-4">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-48 h-48 rounded-full bg-bg-card border border-border flex items-center justify-center text-5xl font-bold text-navy font-mono mb-6">
            KK
          </div>
          <h3 className="text-2xl font-bold text-navy">Komail Kassimaly</h3>
          <p className="text-text-muted mb-4">Étudiant Ingénieur Cybersécurité | Analyste SOC</p>
          <div className="flex gap-4 mb-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-2xl text-navy hover:text-blue transition-colors"
              >
                <s.icon />
              </a>
            ))}
            {PLATFORM_LINKS.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                aria-label={p.label}
                className="text-2xl hover:opacity-70 transition-opacity"
              >
                {p.emoji}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-navy mb-4">{t('about.title')}</h2>
          <p className="text-text-primary leading-relaxed mb-6">{t('about.bio')}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-bg-card border border-border text-sm font-mono text-navy"
              >
                {skill}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
            ● {t('about.availability')}
          </span>
        </div>
      </motion.div>
    </section>
  )
}

export default About
