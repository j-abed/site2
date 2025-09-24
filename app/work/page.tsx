import Section from '@/components/Section'
import CaseStudyGrid from '@/components/CaseStudyGrid'

export default function WorkPage() {
  return (
    <main className="pt-[92px]">
      <Section>
        <div className="grid-max max-w-4xl" data-animate="rise">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-iris-300">Case studies</p>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">Proof that momentum compounds</h1>
          <p className="mt-4 text-lg text-white/70">
            A sampling of the platforms, academies, and pilots we’ve launched with ambitious learning teams. Each project pairs a
            practical strategy with instrumentation and enablement so teams can carry the torch.
          </p>
        </div>
      </Section>
      <CaseStudyGrid />
    </main>
  )
}
