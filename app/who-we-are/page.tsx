import Section from '@/components/Section'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

const principles = [
  {
    title: 'Think in flywheels',
    description: 'Design work so data, automation, and people reinforce each other. That’s how transformation compounds.',
  },
  {
    title: 'Ship signal quickly',
    description: 'We co-create prototypes and dashboards in weeks so leadership can feel the value—not just hear about it.',
  },
  {
    title: 'Transfer the playbook',
    description: 'Every engagement ends with your teams owning the rituals, tooling, and stories that keep momentum going.',
  },
]

export default function WhoWeArePage() {
  return (
    <main className="pt-[92px]">
      <Section>
        <div className="grid-max max-w-4xl" data-animate="rise">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Team</p>
          <h1 className="gradient-text mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Consultants, architects, and analysts who turn AI ambition into traction
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Puzzles is a distributed consultancy of former executives, product leaders, and tech specialists who have scaled
            intelligent platforms inside Fortune 100s and venture-backed scale-ups. We embed deeply, remove blockers fast, and
            build capability as we go.
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
