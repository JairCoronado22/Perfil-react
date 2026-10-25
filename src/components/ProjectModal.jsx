import { useEffect } from 'react'
import { ExternalLink, X } from 'lucide-react'

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="modal-backdrop fixed inset-0 z-[100] grid place-items-center bg-slate-950/80 p-3 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-label={`Vista previa de ${project.title}`}>
      <button type="button" className="absolute inset-0 cursor-default" onClick={onClose} aria-label="Cerrar vista previa" />
      <div className="modal-panel relative z-10 flex h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-white/15 bg-slate-950 shadow-2xl">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3 text-white sm:px-5">
          <div className="flex gap-2"><span className="size-3 rounded-full bg-red-400" /><span className="size-3 rounded-full bg-amber-400" /><span className="size-3 rounded-full bg-emerald-400" /></div>
          <span className="min-w-0 flex-1 truncate text-xs font-semibold text-slate-400">{project.url}</span>
          <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-2 rounded-xl bg-white/10 px-3 text-xs font-bold transition hover:bg-white/15">
            Abrir sitio <ExternalLink size={14} />
          </a>
          <button type="button" onClick={onClose} className="grid size-9 place-items-center rounded-xl bg-white/10 transition hover:bg-white/15" aria-label="Cerrar">
            <X size={18} />
          </button>
        </div>
        <div className="relative flex-1 bg-white">
          <iframe
            src={project.url}
            title={`Vista en vivo de ${project.title}`}
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}
