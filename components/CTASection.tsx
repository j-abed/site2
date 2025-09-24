import Link from 'next/link'
import Section from './Section'

export default function CTASection() {
  return (
    <Section>
      <div className="grid-max" data-animate="rise">
        <div className="relative overflow-hidden rounded-3xl border border-mint-500/40 bg-night-900/70 p-12 text-center shadow-card-lg">
          <div className="pointer-events-none absolute inset-0 bg-panel-sheen" aria-hidden />
          <h2 className="text-2xl font-bold md:text-3xl">Ready to build with momentum?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Let’s co-create your next learning product, pilot in-market, and hand off a repeatable motion to your team.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-mint-500 px-6 py-3 font-semibold text-night-900 transition hover:bg-mint-400"
          >
            Start a project
          </Link>
        </div>
      </div>
    </Section>
  )
}
