export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-600 dark:text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="text-muted mt-5 text-base leading-8 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
