import Section from './Section'
import { services } from '@/lib/data'

export default function ServiceTiles() {
  return (
    <Section>
      <div className="grid-max section-divider pb-10" data-batch="stagger">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="gradient-text text-3xl font-semibold md:text-4xl">Where we make expert solves</h2>
          <p className="max-w-md text-sm text-slate-600">
            Plug our team anywhere across the product lifecycle. We break inertia with modular engagements that deliver proof,
            not just plans.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              data-item
              className="glow-tile relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-blue-500/80">{service.kicker}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{service.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
