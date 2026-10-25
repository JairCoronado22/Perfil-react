import { useEffect, useMemo, useState } from 'react'
import { Code2, Menu, X, ArrowUpRight } from 'lucide-react'
import { navigation } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'

export function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sectionIds = useMemo(
    () => navigation.map((item) => item.href.replace('#', '')),
    [],
  )
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 960) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'nav-surface border-b border-soft py-3 shadow-sm' : 'py-5'}`}>
      <div className="container-shell flex items-center gap-4">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir al inicio">
          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-500 text-white shadow-lg shadow-brand-500/20 transition group-hover:-rotate-3 group-hover:scale-105">
            <Code2 size={21} />
          </span>
          <span className="hidden leading-tight sm:block">
            <strong className="font-display block text-sm font-extrabold text-slate-950 dark:text-white">Jair Coronado</strong>
            <small className="text-muted text-xs">Desarrollador frontend</small>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {navigation.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-xl px-3.5 py-2 text-sm font-semibold transition ${isActive ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/[0.12] dark:text-cyan-300' : 'text-slate-600 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'}`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-3">
          <a
            href="#contacto"
            className="hidden min-h-11 items-center gap-2 rounded-2xl bg-slate-950 px-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-600 sm:inline-flex dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-300"
          >
            Hablemos <ArrowUpRight size={16} />
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="surface-panel grid size-11 place-items-center rounded-2xl text-slate-700 lg:hidden dark:text-slate-200"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={21} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`container-shell overflow-hidden transition-[max-height,opacity,margin] duration-300 lg:hidden ${open ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="glass-panel grid gap-1 rounded-3xl p-3" aria-label="Navegación móvil">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
