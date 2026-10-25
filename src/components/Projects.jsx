import { useState } from 'react'
import { ArrowUpRight, ExternalLink, Eye } from 'lucide-react'
import { projects } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { ProjectPreview } from './ProjectPreview'
import { ProjectModal } from './ProjectModal'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="proyectos" className="section-space">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Proyectos seleccionados"
            title="Trabajo aplicado en proyectos con objetivos y públicos distintos."
            description="Una selección de sitios web e interfaces desarrollados para presentar servicios y facilitar el contacto con sus usuarios."
          />
        </Reveal>

        <div className="mt-14 grid gap-7">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <article className="project-card surface-panel grid overflow-hidden rounded-[34px] p-4 sm:p-5 lg:grid-cols-[1.03fr_.97fr] lg:items-center lg:gap-7 lg:p-7">
                <ProjectPreview project={project} />

                <div className="p-3 sm:p-5 lg:p-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-cyan-300">{project.category}</p>
                      <h3 className="font-display mt-2 text-2xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-3xl dark:text-white">{project.title}</h3>
                    </div>
                    <span className="font-display text-3xl font-extrabold text-slate-200 dark:text-slate-700">{project.number}</span>
                  </div>

                  <p className="text-muted mt-5 leading-7">{project.description}</p>

                  <div className="mt-5 rounded-2xl border border-soft bg-slate-900/[0.025] p-4 dark:bg-white/[0.03]">
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Mi participación</p>
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{project.contribution}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-xl border border-soft px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-300">{tag}</span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <button type="button" onClick={() => setSelectedProject(project)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-300">
                      Vista rápida <Eye size={17} />
                    </button>
                    <a href={project.url} target="_blank" rel="noreferrer" className="surface-panel inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:text-slate-200 dark:hover:text-cyan-300">
                      Abrir proyecto <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9 flex flex-col items-start justify-between gap-5 rounded-[30px] border border-soft bg-slate-950 p-7 text-white sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Más código y evolución</p>
            <h3 className="font-display mt-2 text-2xl font-extrabold sm:text-3xl">Revisa mis repositorios en GitHub.</h3>
          </div>
          <a href="https://github.com/JairCoronado22" target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-2xl bg-white px-5 font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">
            Ver GitHub <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
