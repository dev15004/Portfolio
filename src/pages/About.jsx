import SectionTitle from '../components/SectionTitle'
import { siteConfig, skills, timeline } from '../data/siteContent'

const About = () => {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-14 text-slate-100 md:px-10">
      <SectionTitle
        eyebrow="About"
        title="Building thoughtful websites for modern brands and people"
        description={siteConfig.about}
      />
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold">My approach</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            I like projects where the code and the presentation both matter. That means keeping the layout strong, the copy
            easy to scan, and the implementation simple enough to maintain later.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Whether I am improving an unfinished portfolio or building a fresh page, I focus on clarity, consistency, and
            giving visitors a better reason to reach out.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8">
          <h2 className="text-2xl font-semibold">Core skills</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Journey</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {timeline.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{item.period}</p>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
