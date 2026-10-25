import { Boxes, Code2, GitBranch, LayoutTemplate } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const icons = [Code2, LayoutTemplate, Boxes, GitBranch]

export function Skills() {
  return (
    <section id="habilidades" className="section-space border-y border-soft bg-slate-950/[0.025] dark:bg-white/[0.018]">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Habilidades y conocimientos"
            title="Herramientas que utilizo en mis proyectos."
            description="Tecnologías de frontend para construir interfaces, integrar datos y mantener un flujo de trabajo ordenado."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={group.title} delay={index * 70} className="surface-panel rounded-[30px] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-500 text-white shadow-lg shadow-brand-500/15">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-extrabold text-slate-950 dark:text-white">{group.title}</h3>
                    <p className="text-muted mt-1 text-sm leading-6">{group.description}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-chip rounded-xl border border-soft bg-slate-900/[0.025] px-3.5 py-2 text-sm font-bold text-slate-700 dark:bg-white/[0.035] dark:text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
