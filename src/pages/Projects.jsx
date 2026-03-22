import Blocks from '../components/Blocks'
import SectionTitle from '../components/SectionTitle'
import { featuredProjects } from '../data/siteContent'

const Projects = () => {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-14 md:px-10">
      <SectionTitle
        eyebrow="Projects"
        title="Selected work and portfolio-ready concepts"
        description="These highlights show the kind of structure, polish, and usability improvements I focus on while building modern websites."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <Blocks key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
