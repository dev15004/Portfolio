const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-7 text-slate-300">{description}</p> : null}
    </div>
  )
}

export default SectionTitle
