import Section from '@/components/Section'
import CTASection from '@/components/CTASection'

const openings = [
  {
    title: 'Engagement Lead — AI Transformation',
    type: 'Contract',
    description: 'Guide executive stakeholders, frame business cases, and orchestrate multi-workstream delivery with calm precision.',
  },
  {
    title: 'Lead Strategist — Intelligent Operations',
    type: 'Fractional',
    description: 'Map opportunity areas, design operating models, and turn ambiguous mandates into clear executive decisions.',
  },
  {
    title: 'AI Systems Architect',
    type: 'Project',
    description: 'Prototype human-in-the-loop automation, stitch data foundations together, and mentor client teams through the build.',
  },
]

export default function CareersPage() {
  return (
    <main className="pt-[92px]">
      <Section>
        <div className="grid-max max-w-4xl" data-animate="rise">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Talent bench</p>
          <h1 className="gradient-text mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Join a bench that ships real transformation
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            We collaborate with a distributed network of operators, strategists, and technologists who thrive on untangling
            executive problems. Tell us what you do best and when you’re available—we’ll reach out when the challenge fits.
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
