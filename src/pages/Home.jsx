import { Link } from 'react-router-dom'
import { siteConfig } from '../data/siteContent'

const Home = () => {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-120px)] w-full max-w-6xl items-center px-6 pb-20 pt-10 md:px-10">
      <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Hello, I&apos;m {siteConfig.name}
            </span>
          </div>
          <div className="space-y-5 text-white">
            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              {siteConfig.shortTitle}{' '}
              <span className="text-cyan-300">crafting clear, responsive websites</span> that look polished and convert
              better.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">{siteConfig.intro}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              className="rounded-full bg-cyan-400 px-7 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
              to="/projects"
            >
              Explore Projects
            </Link>
            <Link
              className="rounded-full border border-white/15 px-7 py-3 text-base font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
              to="/contact"
            >
              Start a Project
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">What I bring</p>
            <p className="mt-4 text-lg leading-8 text-slate-100">
              Strong section structure, better content flow, responsive layouts, and practical frontend improvements that
              make a site feel complete.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5 text-white">
                <p className="text-2xl font-black text-cyan-300">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[2rem] border border-emerald-300/15 bg-emerald-400/10 p-6 text-slate-100">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Quick Contact</p>
            <p className="mt-3 text-base leading-7">
              Need a portfolio, landing page, or frontend cleanup? Let&apos;s turn your current draft into something ready
              to share.
            </p>
            <Link className="mt-4 inline-block font-semibold text-emerald-200 underline underline-offset-4" to="/contact">
              Send your project details -&gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
