import SectionTitle from '../components/SectionTitle'
import { blogPosts } from '../data/siteContent'

const Blog = () => {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-14 text-slate-100 md:px-10">
      <SectionTitle
        eyebrow="Blog"
        title="Notes on frontend delivery, layout decisions, and practical website improvements"
        description="A simple content section adds depth to a portfolio and gives future clients a better sense of how you think."
      />
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <article key={post.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{post.meta}</p>
            <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog
