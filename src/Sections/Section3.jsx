import { Link } from 'react-router-dom'
import Blocks from '../components/Blocks'
import SectionTitle from '../components/SectionTitle'
import { featuredProjects } from '../data/siteContent'

const Section3 = () => {
  return (
    <section className="bg-slate-700 px-6 py-20 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-5">
          <SectionTitle
            eyebrow="Featured Work"
            title="Projects that combine visual polish with practical frontend delivery"
            description="From portfolio refreshes to lead generation pages, the goal stays the same: make the site easier to trust, navigate, and contact."
          />
          <p className="text-lg leading-8 text-slate-700">
            I enjoy taking incomplete ideas and shaping them into pages that feel finished, readable, and ready to share.
          </p>
          <Link className="text-xl font-bold text-cyan-700 underline underline-offset-4" to="/projects">
            View more recent projects -&gt;
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Blocks key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section3
