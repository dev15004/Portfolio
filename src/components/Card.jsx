const Card = ({ title, description, tags = [] }) => {
  return (
    <div className="h-full rounded-[2rem] border border-white/10 bg-white/95 text-slate-900 shadow-2xl shadow-cyan-950/10 transition-all duration-300 ease-in-out hover:-translate-y-2">
      <div className="h-2 rounded-t-[2rem] bg-cyan-500"></div>
      <div className="flex h-full flex-col justify-between gap-5 px-7 py-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-xl font-bold text-cyan-700">
          DV
        </div>
        <div>
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="pt-4 text-lg leading-8 text-slate-700">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
