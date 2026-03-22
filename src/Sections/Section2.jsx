import Card from '../components/Card'
import Card2 from '../components/Card2'
import SectionTitle from '../components/SectionTitle'
import { processSteps, services } from '../data/siteContent'

const Section2 = () => {
  return (
    <section className="bg-slate-900 px-6 py-20 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionTitle
          eyebrow="Services"
          title="Helping brands and creators launch sharper digital experiences"
          description="Your site should look polished, guide visitors clearly, and make it easy for them to reach out. These service areas focus on exactly that."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="min-h-[320px]">
            <Card {...services[0]} />
          </div>
          <div className="grid gap-6">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left text-slate-100 backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{item.step}</p>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(1).map((service) => (
            <Card2 key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section2
