import Section from './Section'
import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '@/lib/data'

export default function CaseStudyGrid() {
  return (
    <Section>
      <div className="grid-max space-y-8">
        <div className="section-divider pb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="gradient-text text-3xl font-semibold md:text-4xl">Recent launches</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              Scroll to move through a handful of launches we’ve guided end-to-end — from zero-to-one capability academies to
              AI enablement inside existing products.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Scroll to explore</p>
        </div>
        <div className="relative" data-sequence data-animate="rise">
          <div className="flex flex-col gap-12 lg:gap-14" data-sequence-track>
            {caseStudies.map((item) => (
              <CaseStudyCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
