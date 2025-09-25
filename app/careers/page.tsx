import Section from '@/components/Section'
import CTASection from '@/components/CTASection'

const openings = [
  {
    title: 'Learning Experience Designer',
    type: 'Contract',
    description: 'Design experiments, produce content prototypes, and orchestrate learner feedback loops.',
  },
  {
    title: 'Data Scientist — Learning Analytics',
    type: 'Fractional',
    description: 'Instrument pilots, interpret product signals, and operationalize outcome dashboards.',
  },
  {
    title: 'AI Engineer — Enablement',
    type: 'Project',
    description: 'Integrate LLM-driven authoring and support tools into existing education platforms.',
  },
]

export default function CareersPage() {
  return (
    <main className="pt-[92px]">
      <Section>
        <div className="grid-max max-w-4xl" data-animate="rise">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Talent bench</p>
          <h1 className="gradient-text mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Help us build the future of learning
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            We work with a distributed community of specialists who love moving fast with ambitious education teams. Share
            your craft and availability — we’ll reach out when the right challenge lands.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid-max grid gap-6 md:grid-cols-3" data-batch="stagger">
          {openings.map((opening) => (
            <article
              key={opening.title}
              data-item
              className="glow-tile relative flex flex-col rounded-2xl border border-slate-200/60 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-blue-500/80">{opening.type}</div>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">{opening.title}</h2>
              <p className="mt-2 flex-1 text-sm text-slate-600">{opening.description}</p>
              <a
                href="mailto:talent@velocity.studio"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-500"
              >
                Express interest
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </Section>
      <CTASection />
    </main>
  )
}
