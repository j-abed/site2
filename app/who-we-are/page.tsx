import Section from '@/components/Section'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

const principles = [
  {
    title: 'Think in systems',
    description: 'Connect learner, operator, and business outcomes so every experiment compounds.',
  },
  {
    title: 'Prototype obsessively',
    description: 'Ship interactive artefacts early to gather directional signals and de-risk investment.',
  },
  {
    title: 'Build transparently',
    description: 'Operate as embedded partners while transferring playbooks, tooling, and rituals to your team.',
  },
]

export default function WhoWeArePage() {
  return (
    <main className="pt-[92px]">
      <Section>
        <div className="grid-max max-w-4xl" data-animate="rise">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Team</p>
          <h1 className="gradient-text mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Operators, designers, and technologists who love hard problems
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Puzzles Consulting is a distributed crew that has launched dozens of education ventures and internal academies. We’re
            hands-on partners who plug into your stack, move fast, and leave your team stronger than we found it.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid-max grid gap-6 md:grid-cols-3" data-batch="stagger">
          {principles.map((principle) => (
            <article
              key={principle.title}
              data-item
              className="glow-tile relative rounded-2xl border border-slate-200/60 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-slate-900">{principle.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{principle.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Testimonials />
      <CTASection />
    </main>
  )
}
