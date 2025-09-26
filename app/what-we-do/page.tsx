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
            AI-native operating models for modern enterprises
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            We work shoulder-to-shoulder with executives to turn AI and automation mandates into credible strategies, live pilots,
            and rhythms that keep value shipping long after the slideware fades.
          </p>
        </div>
      </Section>
      <ServiceTiles />
      <Section>
        <div className="grid-max grid gap-6 md:grid-cols-3" data-batch="stagger">
          {[
            {
              title: 'Executive alignment',
              copy: 'Facilitate decision forums that link ambition, economics, and risk in a language the C-suite trusts.',
            },
            {
              title: 'Pilot studios',
              copy: 'Spin up cross-functional pods that prototype human-in-the-loop workflows and validate business signals quickly.',
            },
            {
              title: 'Change enablement',
              copy: 'Equip leaders and operators with playbooks, rituals, and metrics so the new way of working actually sticks.',
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
