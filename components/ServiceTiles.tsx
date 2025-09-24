import Section from './Section'
import { services } from '@/lib/data'

export default function ServiceTiles() {
  return (
    <Section>
      <div className="grid-max" data-batch="stagger">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-2xl font-bold md:text-3xl">Where we make expert solves</h2>
          <p className="max-w-md text-sm text-slate-600 dark:text-white/60">
            Plug our team anywhere across the product lifecycle. We break inertia with modular engagements that deliver proof,
            not just plans.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              data-item
              className="glow-tile relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 backdrop-blur dark:border-night-700/60 dark:bg-panel-sheen"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-blue-600 dark:text-mint-300">{service.kicker}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">{service.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
