import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const NAV_LINKS = [
  { href: '#about', key: 'about' },
  { href: '#experience', key: 'experience' },
  { href: '#projects', key: 'projects' },
  { href: '#platforms', key: 'platforms' },
  { href: '#certifications', key: 'certifications' },
  { href: '#contact', key: 'contact' },
]

function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-navy font-mono">
          KK
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue ${
                activeSection === link.href.slice(1) ? 'text-blue underline underline-offset-4' : 'text-text-primary'
              }`}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="hidden md:inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-semibold text-navy hover:bg-bg-secondary transition-colors"
          >
            {i18n.language === 'fr' ? 'EN' : 'FR'}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-navy"
            aria-label="Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-navy"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-navy"
          >
            {i18n.language === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar
