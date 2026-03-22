const Blocks = ({ title, category, summary, results, tech = [] }) => {
  return (
    <article className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-full flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">{category}</p>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="leading-7 text-slate-700">{summary}</p>
        <p className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-900">Outcome:</span> {results}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {tech.map((item) => (
            <span key={item} className="rounded-full bg-cyan-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default Blocks
