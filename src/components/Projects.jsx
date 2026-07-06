import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects.js'

function ProjectCard({ project, index, lang, t, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-[3px] transition-all duration-200 flex flex-col"
    >
      <div className="text-4xl mb-4">{project.icon}</div>
      <h3 className="text-lg font-bold text-navy mb-2">{project.title[lang]}</h3>
      <p className="text-sm text-text-muted mb-4 flex-1">{project.shortDesc[lang]}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tools.map((tool) => (
          <span key={tool} className="px-2 py-0.5 rounded-md bg-tag-bg border border-tag-border text-xs font-mono text-tag-text">
            {tool}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-navy text-navy text-sm font-semibold hover:bg-bg-secondary transition-colors"
          >
            {t('projects.github')}
          </a>
        )}
        <button
          onClick={() => onOpen(project)}
          className="px-4 py-2 rounded-lg bg-blue text-white text-sm font-semibold hover:bg-blue-light transition-colors"
        >
          {t('projects.details')}
        </button>
      </div>
    </motion.div>
  )
}

function Projects() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-14 bg-bg-primary px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl font-bold text-navy text-center mb-8">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              lang={lang}
              t={t}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg-card rounded-xl p-8 max-w-lg w-full shadow-card-hover"
            >
              <div className="text-4xl mb-4">{selected.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{selected.title[lang]}</h3>
              <p className="text-text-primary leading-relaxed mb-4">{selected.fullDesc[lang]}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tools.map((tool) => (
                  <span key={tool} className="px-2 py-0.5 rounded-md bg-tag-bg border border-tag-border text-xs font-mono text-tag-text">
                    {tool}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 rounded-lg border border-navy text-navy text-sm font-semibold hover:bg-bg-secondary transition-colors"
              >
                {t('projects.close')}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
