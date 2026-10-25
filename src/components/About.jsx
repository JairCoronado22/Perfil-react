import { BookOpen, BriefcaseBusiness, Languages, Target, UsersRound } from 'lucide-react'
import { strengths } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const cards = [
  {
    icon: BookOpen,
    title: 'Formación',
    value: 'Ingeniería de Software',
    note: 'Noveno ciclo · Universidad Tecnológica del Perú',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Experiencia',
    value: 'Proyectos reales y freelance',
    note: 'Landing pages, plataformas web e interfaces responsivas',
  },
  {
    icon: Languages,
    title: 'Idiomas',
    value: 'Inglés avanzado',
    note: 'Lectura técnica y comunicación para entornos de desarrollo',
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="section-space relative">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Sobre mí"
            title="Desarrollo frontend enfocado en interfaces útiles."
            description="Me interesa crear sitios claros, adaptables y fáciles de recorrer. En mis proyectos trabajo la estructura, los componentes y los detalles de interacción para que la experiencia sea consistente en distintos dispositivos."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal className="glass-panel rounded-[32px] p-7 sm:p-9">
            <div className="mb-7 flex items-start gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-500 text-white shadow-lg shadow-brand-500/20">
                <Target size={23} />
              </span>
              <div>
                <p className="mb-1 text-sm font-bold text-brand-600 dark:text-cyan-300">Objetivo profesional</p>
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                  Integrarme a un equipo frontend y seguir construyendo experiencia.
                </h3>
              </div>
            </div>

            <p className="text-muted text-base leading-8 sm:text-lg">
              Tengo formación práctica en desarrollo frontend, creación de componentes reutilizables, consumo de APIs REST, manejo de estados de carga y error, navegación entre páginas y flujo de trabajo con Git y GitHub.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div key={strength} className="surface-panel flex items-center gap-3 rounded-2xl p-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-cyan-300">
                    <UsersRound size={16} />
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{strength}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4">
            {cards.map((card, index) => {
              const Icon = card.icon
              return (
                <Reveal key={card.title} delay={index * 80} className="surface-panel rounded-[28px] p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                      <Icon size={21} />
                    </span>
                    <div>
                      <p className="text-muted text-xs font-bold uppercase tracking-[0.16em]">{card.title}</p>
                      <h3 className="font-display mt-1 text-xl font-extrabold text-slate-950 dark:text-white">{card.value}</h3>
                      <p className="text-muted mt-2 text-sm leading-6">{card.note}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
