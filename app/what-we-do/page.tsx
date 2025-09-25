import Section from '@/components/Section'
import ServiceTiles from '@/components/ServiceTiles'
import CTASection from '@/components/CTASection'

export default function WhatWeDoPage() {
  return (
    <main className="pt-[92px]">
      <Section>
        <div className="grid-max max-w-4xl" data-animate="rise">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Capabilities</p>
          <h1 className="gradient-text mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Outcome-focused teams for modern learning products
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            We embed alongside founders and operators to define strategy, prototype AI-assisted experiences, validate with real
            learners, and ship production-ready platforms. Every engagement is designed to create momentum you can sustain.
          </p>
        </div>
      </Section>
      <ServiceTiles />
      <Section>
        <div className="grid-max grid gap-6 md:grid-cols-3" data-batch="stagger">
          {[
            {
              title: 'Strategy sprints',
              copy: 'Go from vague direction to prioritized roadmap, messaging, and learner value proposition in under four weeks.',
            },
            {
              title: 'Experience labs',
              copy: 'Rapidly prototype, test, and iterate on AI-assisted learning journeys before investing in full build-outs.',
            },
            {
              title: 'Launch operations',
              copy: 'Design launch playbooks, instrumentation, and success metrics so teams can scale pilots with confidence.',
            },
          ].map((item) => (
            <article
              key={item.title}
              data-item
              className="glow-tile relative rounded-2xl border border-slate-200/60 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>
      </Section>
      <CTASection />
    </main>
  )
}
