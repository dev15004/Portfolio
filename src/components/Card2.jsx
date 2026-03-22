const Card2 = ({ title, description, tags = [] }) => {
  return (
    <div className="flex h-full">
      <div className="flex h-full w-full flex-col justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 px-7 py-7 text-slate-100 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-white/8">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-400/10 text-sm font-bold text-cyan-200">
          DV
        </div>
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="pt-3 text-base leading-7 text-slate-300">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card2
