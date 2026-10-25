import { Heart } from 'lucide-react'

function BrowserBar({ title }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950/80 px-4 py-3 text-white">
      <span className="size-2.5 rounded-full bg-red-400" />
      <span className="size-2.5 rounded-full bg-amber-400" />
      <span className="size-2.5 rounded-full bg-emerald-400" />
      <span className="ml-2 truncate text-[10px] font-semibold text-slate-400">{title}</span>
    </div>
  )
}

function KarenPreview() {
  return (
    <div className="h-full bg-gradient-to-br from-[#effdfa] via-white to-[#d8f7f2] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="size-7 rounded-xl bg-[#31b89c]" />
          <div className="space-y-1">
            <span className="block h-1.5 w-20 rounded-full bg-[#245a50]" />
            <span className="block h-1 w-12 rounded-full bg-[#81b9ae]" />
          </div>
        </div>
        <div className="flex gap-2"><span className="size-6 rounded-full bg-white shadow" /><span className="size-6 rounded-full bg-white shadow" /></div>
      </div>
      <div className="grid grid-cols-[1fr_.8fr] items-center gap-4 rounded-2xl bg-white/70 p-4 shadow-sm">
        <div>
          <span className="mb-2 block h-1.5 w-20 rounded-full bg-[#31b89c]" />
          <span className="mb-2 block h-3 w-full rounded-full bg-[#18483e]" />
          <span className="mb-3 block h-3 w-4/5 rounded-full bg-[#18483e]" />
          <span className="mb-1 block h-1.5 w-full rounded-full bg-[#a7c9c1]" />
          <span className="block h-1.5 w-3/4 rounded-full bg-[#a7c9c1]" />
          <span className="mt-4 block h-7 w-24 rounded-xl bg-[#31b89c]" />
        </div>
        <div className="relative mx-auto size-28 rounded-[45%_55%_42%_58%] border-4 border-white bg-gradient-to-br from-[#f8d8a6] to-[#b4efe4] shadow-lg">
          <span className="absolute left-4 top-8 size-10 rounded-full bg-[#2f3139]" />
          <span className="absolute bottom-3 right-2 size-12 rounded-full bg-[#6ed5be]" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[0,1,2].map((item) => <div key={item} className="h-14 rounded-xl border border-[#bde8df] bg-white/[0.08]0" />)}
      </div>
    </div>
  )
}

function JholviPreview() {
  return (
    <div className="h-full bg-gradient-to-br from-[#fff4f7] via-white to-[#e9f5ef] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-[8px] font-extrabold text-[#c84f78] shadow-sm">PED</span>
          <div className="min-w-0">
            <span className="block truncate text-[10px] font-bold text-[#27343a]">Dra. Jholvi Bermejo</span>
            <span className="block text-[8px] text-[#748087]">Pediatra · CMP 77339</span>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-[#c84f78] px-3 py-2 text-[8px] font-bold text-white">Agendar</span>
      </div>
      <div className="grid h-[150px] grid-cols-[1.05fr_.95fr] items-center gap-3 rounded-2xl bg-white/75 p-4 shadow-sm">
        <div className="relative z-10">
          <span className="mb-2 inline-block rounded-full bg-[#fff0f4] px-2 py-1 text-[7px] font-bold uppercase tracking-wider text-[#b94d71]">Pediatría y neonatología</span>
          <span className="block text-base font-extrabold leading-tight text-[#25343b]">Cuidando su crecimiento</span>
          <span className="mt-2 block text-[8px] leading-4 text-[#78838a]">Atención cercana para cada etapa de la niñez.</span>
          <span className="mt-3 inline-block rounded-lg bg-[#c84f78] px-3 py-2 text-[8px] font-bold text-white">Agendar por WhatsApp</span>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <span className="absolute size-28 rounded-full bg-[#f3bfd0]" />
          <span className="absolute bottom-1 left-1 size-14 rounded-full bg-[#b9dfcb]" />
          <span className="relative grid size-28 place-items-center rounded-[46%_54%_48%_52%] border-[5px] border-white bg-gradient-to-br from-[#e7d8c9] to-[#cfe8df] shadow-md">
            <span className="grid size-14 place-items-center rounded-full bg-white/85 text-[#c84f78]"><Heart size={28} fill="currentColor" /></span>
          </span>
          <span className="absolute right-0 top-4 rounded-xl bg-white px-2 py-2 text-[7px] font-semibold text-[#47545a] shadow-sm">Consulta profesional</span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {['Perfil', 'Servicios', 'Consultorios'].map((item) => (
          <div key={item} className="rounded-xl border border-[#f1dce3] bg-white p-2 shadow-sm">
            <span className="mb-2 block h-6 rounded-lg bg-[#fff0f4]" />
            <span className="block text-center text-[7px] font-semibold text-[#657078]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ValCarePreview() {
  return (
    <div className="h-full bg-[#f3f7ff] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-lg bg-[#3b82f6] text-xs font-bold text-white">+</span><span className="h-2 w-16 rounded-full bg-[#1e3a8a]" /></div>
        <div className="flex gap-2"><span className="h-6 w-14 rounded-lg bg-white shadow" /><span className="size-6 rounded-full bg-[#dbeafe]" /></div>
      </div>
      <div className="grid grid-cols-[.72fr_1.28fr] gap-3">
        <div className="rounded-2xl bg-[#10274d] p-3">
          {[0,1,2,3].map((item) => <span key={item} className={`mb-2 block h-6 rounded-lg ${item === 0 ? 'bg-[#3b82f6]' : 'bg-white/[0.08]'}`} />)}
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-white p-3 shadow-sm"><span className="block h-2 w-12 rounded-full bg-[#93c5fd]" /><span className="mt-2 block h-5 w-16 rounded-full bg-[#1e3a8a]" /></div>
            <div className="rounded-xl bg-white p-3 shadow-sm"><span className="block h-2 w-12 rounded-full bg-[#a7f3d0]" /><span className="mt-2 block h-5 w-16 rounded-full bg-[#065f46]" /></div>
          </div>
          <div className="mt-2 rounded-2xl bg-white p-3 shadow-sm">
            <span className="mb-3 block h-2 w-24 rounded-full bg-[#94a3b8]" />
            {[0,1,2].map((item) => <div key={item} className="mb-2 flex items-center gap-2"><span className="size-6 rounded-full bg-[#dbeafe]" /><span className="h-2 flex-1 rounded-full bg-[#e2e8f0]" /><span className="h-5 w-12 rounded-lg bg-[#eff6ff]" /></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectPreview({ project }) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-950 shadow-2xl">
      <BrowserBar title={project.url.replace('https://', '')} />
      <div className="h-[260px] sm:h-[300px]">
        {project.id === 'karen' && <KarenPreview />}
        {project.id === 'jholvi' && <JholviPreview />}
        {project.id === 'valcare' && <ValCarePreview />}
      </div>
    </div>
  )
}
