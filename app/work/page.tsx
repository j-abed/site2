import Section from '@/components/Section'
import CaseStudyGrid from '@/components/CaseStudyGrid'
import ThoughtsGrid from '@/components/ThoughtsGrid'

export default function WorkPage() {
  return (
    <main className="pt-[92px]">
      <Section>
        <div className="grid-max max-w-4xl" data-animate="rise">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Case studies</p>
          <h1 className="gradient-text mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Proof that AI strategy and delivery can ship fast
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Explore a sample of transformations where we helped leadership teams de-risk decisions, launch intelligent pilots,
            and stand up operating rhythms that keep value flowing.
          </p>
        </div>
      </Section>
      <CaseStudyGrid />
      <ThoughtsGrid />
    </main>
  )
}
