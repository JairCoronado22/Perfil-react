import { ArrowDownRight, ArrowUpRight, Code2, Download, Github, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'
import { Reveal } from './Reveal'

const techs = ['React', 'TypeScript', 'Tailwind CSS', 'Vite']

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden pt-32 sm:pt-36">
      <div className="grid-mask pointer-events-none absolute inset-0 -z-20 opacity-70" />
      <div className="hero-orb pointer-events-none absolute -left-32 top-40 -z-10 size-72 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="hero-orb pointer-events-none absolute -right-32 top-16 -z-10 size-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="container-shell grid min-h-[calc(100vh-8rem)] items-center gap-14 pb-20 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
        <Reveal className="max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-cyan-300">
            <Code2 size={16} /> Desarrollador frontend
          </p>

          <h1 className="font-display text-[clamp(3.3rem,8vw,7rem)] font-extrabold leading-[0.94] tracking-[-0.065em] text-slate-950 dark:text-white">
            Desarrollo interfaces web{' '}
            <span className="gradient-text">claras y funcionales.</span>
          </h1>

          <p className="text-muted mt-7 max-w-2xl text-lg leading-8 sm:text-xl">
            Soy <strong className="text-slate-950 dark:text-white">{profile.shortName}</strong>, estudiante de Ingeniería de Software. Trabajo con React y tecnologías web para crear sitios responsivos y fáciles de usar.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {techs.map((tech) => (
              <span key={tech} className="skill-chip glass-panel rounded-xl px-3.5 py-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#proyectos" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-cyan-500 px-6 font-bold text-white shadow-xl shadow-brand-500/20 transition hover:-translate-y-1 hover:shadow-2xl">
              Ver proyectos <ArrowDownRight size={18} />
            </a>
            <a href="/CV-Jair-Coronado-Frontend.docx" download className="surface-panel inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl px-6 font-bold text-slate-800 transition hover:-translate-y-1 hover:border-brand-400 dark:text-white">
              Descargar CV <Download size={18} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl px-5 font-bold text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-cyan-300">
              <Github size={19} /> GitHub <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="text-muted mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-2"><MapPin size={16} /> {profile.location}</span>
            <span>{profile.education}</span>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute -inset-8 -z-10 rounded-[44px] bg-gradient-to-br from-brand-500/18 via-transparent to-cyan-400/18 blur-2xl" />
          <div className="surface-panel overflow-hidden rounded-[32px] border border-white/40 dark:border-white/10">
            <div className="flex items-center gap-2 border-b border-soft px-5 py-4">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-amber-400" />
              <span className="size-3 rounded-full bg-emerald-400" />
              <span className="text-muted ml-2 text-xs font-semibold">jair-portfolio.jsx</span>
            </div>

            <div className="relative min-h-[470px] overflow-hidden bg-slate-950 p-6 text-slate-300 sm:p-8">
              <div className="absolute inset-0 opacity-25 project-preview-grid" />
              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300">Portafolio</span>
                  <span className="font-mono text-xs text-slate-500">01 / profile</span>
                </div>

                <div className="font-mono text-sm leading-8 sm:text-base">
                  <p className="code-line"><span className="text-fuchsia-400">const</span> <span className="text-cyan-300">developer</span> = {'{'}</p>
                  <p className="code-line pl-5"><span className="text-indigo-300">name</span>: <span className="text-amber-300">'Jair Coronado'</span>,</p>
                  <p className="code-line pl-5"><span className="text-indigo-300">focus</span>: <span className="text-amber-300">'Frontend'</span>,</p>
                  <p className="code-line pl-5"><span className="text-indigo-300">stack</span>: [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'TypeScript'</span>],</p>
                  <p className="code-line pl-5"><span className="text-indigo-300">education</span>: <span className="text-amber-300">'9.º ciclo'</span>,</p>
                  <p className="code-line">{'}'}</p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <strong className="font-display block text-lg text-white">React</strong>
                    <span className="text-xs text-slate-400">desarrollo frontend</span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <strong className="font-display block text-lg text-white">Responsive</strong>
                    <span className="text-xs text-slate-400">diseño adaptable</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-brand-400/20 bg-brand-400/10 p-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-400 text-white"><Code2 size={20} /></span>
                  <div>
                    <strong className="block text-white">Jair Coronado</strong>
                    <span className="text-sm text-slate-400">Ingeniería de Software · 9.º ciclo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
