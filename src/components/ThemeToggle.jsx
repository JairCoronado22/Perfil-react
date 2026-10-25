import { Moon, Sun } from 'lucide-react'

export function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="surface-panel grid size-11 place-items-center rounded-2xl text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:text-slate-200"
      aria-label={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
      title={isDark ? 'Tema claro' : 'Tema oscuro'}
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  )
}
