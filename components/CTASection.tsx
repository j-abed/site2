import Link from 'next/link'
import Section from './Section'

export default function CTASection() {
  return (
    <Section>
      <div className="grid-max" data-animate="rise">
        <div className="cta-panel p-12 text-center">
          <div className="pointer-events-none absolute inset-0 bg-panel-sheen opacity-70 mix-blend-soft-light" aria-hidden />
          <h2 className="gradient-text text-2xl font-semibold leading-tight md:text-3xl">Ready to operationalise your AI mandate?</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            We’ll help your leaders align on the business case, land the first proof, and embed the rituals that keep outcomes
            compounding.
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
