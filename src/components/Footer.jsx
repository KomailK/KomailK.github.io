import { useTranslation } from 'react-i18next'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const SOCIALS = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/komail-kassimaly/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/KomailK', label: 'GitHub' },
]

function Footer() {
  const { t, i18n } = useTranslation()
  const toggleLang = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')

  return (
    <footer className="py-6 bg-bg-primary border-t border-border px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p>{t('footer.text')}</p>
        <div className="flex items-center gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-lg text-navy hover:text-blue transition-colors"
            >
              <s.icon />
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-navy hover:bg-bg-secondary transition-colors"
          >
            {i18n.language === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
