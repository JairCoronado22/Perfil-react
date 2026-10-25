import { useState } from 'react'
import { Check, Clipboard, Github, Mail, MessageCircle, Send, Smartphone } from 'lucide-react'
import { profile } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const initialForm = {
  nombre: '',
  correo: '',
  asunto: '',
  mensaje: '',
}

export function Contact() {
  const [form, setForm] = useState(initialForm)
  const [copied, setCopied] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(form.asunto || 'Contacto desde tu portafolio')
    const body = encodeURIComponent(
      `Hola Jair,\n\n${form.mensaje}\n\nNombre: ${form.nombre}\nCorreo: ${form.correo}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      window.prompt('Copia mi correo:', profile.email)
    }
  }

  return (
    <section id="contacto" className="section-space border-t border-soft bg-slate-950/[0.025] dark:bg-white/[0.018]">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Contacto"
            title="¿Tienes una oportunidad o un proyecto en mente?"
            description="Completa el formulario y se abrirá tu aplicación de correo con el mensaje dirigido a mi dirección."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
          <Reveal className="relative overflow-hidden rounded-[34px] bg-slate-950 p-7 text-white shadow-2xl sm:p-9">
            <div className="absolute -right-24 -top-24 size-64 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 size-64 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Hablemos</p>
              <h3 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">Puedes contactarme directamente.</h3>
              <p className="mt-5 leading-7 text-slate-300">
                Puedes escribirme para conversar sobre proyectos frontend, prácticas o colaboración.
              </p>

              <div className="mt-8 grid gap-3">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/10">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-500"><Mail size={20} /></span>
                  <span className="min-w-0"><small className="block text-xs text-slate-400">Correo</small><strong className="block truncate text-sm text-white sm:text-base">{profile.email}</strong></span>
                </a>

                <a href={`https://wa.me/${profile.phoneRaw}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/10">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-500"><MessageCircle size={20} /></span>
                  <span><small className="block text-xs text-slate-400">WhatsApp</small><strong className="block text-sm text-white sm:text-base">{profile.phone}</strong></span>
                </a>

                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/10">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-slate-950"><Github size={20} /></span>
                  <span><small className="block text-xs text-slate-400">GitHub</small><strong className="block text-sm text-white sm:text-base">JairCoronado22</strong></span>
                </a>
              </div>

              <button type="button" onClick={copyEmail} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-white">
                {copied ? <Check size={17} /> : <Clipboard size={17} />}
                {copied ? 'Correo copiado' : 'Copiar correo electrónico'}
              </button>
            </div>
          </Reveal>

          <Reveal delay={100} className="surface-panel rounded-[34px] p-6 sm:p-8 lg:p-9">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                  Nombre
                  <input className="contact-input px-4 py-3.5 font-normal" type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" required />
                </label>

                <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                  Correo
                  <input className="contact-input px-4 py-3.5 font-normal" type="email" name="correo" value={form.correo} onChange={handleChange} placeholder="nombre@correo.com" required />
                </label>
              </div>

              <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                Asunto
                <input className="contact-input px-4 py-3.5 font-normal" type="text" name="asunto" value={form.asunto} onChange={handleChange} placeholder="Motivo del mensaje" required />
              </label>

              <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                Mensaje
                <textarea className="contact-input min-h-36 resize-y px-4 py-3.5 font-normal" name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Cuéntame sobre la oportunidad o el proyecto." required />
              </label>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-cyan-500 px-6 font-bold text-white shadow-lg shadow-brand-500/20 transition hover:-translate-y-0.5">
                  Preparar correo <Send size={17} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
