import Section from '@/components/Section'
import ServiceTiles from '@/components/ServiceTiles'
import CTASection from '@/components/CTASection'

export default function WhatWeDoPage() {
  return (
    <main className="pt-[92px]">
      <Section>
        <div className="grid-max max-w-4xl" data-animate="rise">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-mint-300">Capabilities</p>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">Outcome-focused teams for modern learning products</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-white/70">
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
              className="glow-tile relative rounded-2xl border border-slate-200 bg-white p-6 backdrop-blur dark:border-night-700/60 dark:bg-night-900/60"
            >
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">{item.copy}</p>
            </article>
          ))}
        </div>
      </Section>
      <CTASection />
    </main>
  )
}
