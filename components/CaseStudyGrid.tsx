import Section from './Section'
import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '@/lib/data'

export default function CaseStudyGrid() {
  return (
    <Section>
      <div className="grid-max space-y-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Recent launches</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/60 md:text-base">
              Scroll to move through a handful of launches we’ve guided end-to-end — from zero-to-one capability academies to
              AI enablement inside existing products.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Scroll to explore</p>
        </div>
        <div
          className="relative overflow-visible rounded-3xl border border-night-700/60 bg-night-900/40 p-6 shadow-card-lg backdrop-blur lg:h-[78vh] lg:overflow-hidden lg:pt-8"
          data-sequence
          data-animate="rise"
        >
          <div className="flex flex-col gap-10 lg:h-full lg:gap-0" data-sequence-track>
            {caseStudies.map((item) => (
              <CaseStudyCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
