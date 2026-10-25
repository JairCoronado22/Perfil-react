import { ArrowUp, Code2, Github, Mail, Smartphone } from 'lucide-react'
import { profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-soft py-8">
      <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-500 text-white"><Code2 size={18} /></span>
          <div>
            <strong className="font-display block text-sm text-slate-950 dark:text-white">{profile.shortName}</strong>
            <span className="text-muted text-xs">{profile.role}</span>
          </div>
        </div>

        <p className="text-muted text-center text-xs sm:text-sm">© {new Date().getFullYear()} {profile.name}. Construido con React y Tailwind CSS.</p>

        <div className="flex items-center justify-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" className="surface-panel grid size-10 place-items-center rounded-xl text-slate-600 transition hover:-translate-y-0.5 hover:text-brand-600 dark:text-slate-300 dark:hover:text-cyan-300" aria-label="GitHub"><Github size={17} /></a>
          <a href={`mailto:${profile.email}`} className="surface-panel grid size-10 place-items-center rounded-xl text-slate-600 transition hover:-translate-y-0.5 hover:text-brand-600 dark:text-slate-300 dark:hover:text-cyan-300" aria-label="Correo"><Mail size={17} /></a>
          <a href={`https://wa.me/${profile.phoneRaw}`} target="_blank" rel="noreferrer" className="surface-panel grid size-10 place-items-center rounded-xl text-slate-600 transition hover:-translate-y-0.5 hover:text-brand-600 dark:text-slate-300 dark:hover:text-cyan-300" aria-label="WhatsApp"><Smartphone size={17} /></a>
          <a href="#inicio" className="grid size-10 place-items-center rounded-xl bg-slate-950 text-white transition hover:-translate-y-0.5 hover:bg-brand-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-300" aria-label="Volver arriba"><ArrowUp size={17} /></a>
        </div>
      </div>
    </footer>
  )
}
