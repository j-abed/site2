import Link from 'next/link'
import Section from './Section'

export default function CTASection() {
  return (
    <Section>
      <div className="grid-max" data-animate="rise">
        <div className="cta-panel p-12 text-center">
          <div className="pointer-events-none absolute inset-0 bg-panel-sheen opacity-70 mix-blend-soft-light" aria-hidden />
          <h2 className="gradient-text text-2xl font-semibold leading-tight md:text-3xl">Ready to build with momentum?</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Let’s co-create your next learning product, pilot in-market, and hand off a repeatable motion to your team.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-blue-500 hover:shadow-xl"
          >
            Start a project
          </Link>
        </div>
      </div>
    </Section>
  )
}
