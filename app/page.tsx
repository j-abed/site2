import Hero from '@/components/Hero'
import LogosCarousel from '@/components/LogosCarousel'
import ServiceTiles from '@/components/ServiceTiles'
import CaseStudyGrid from '@/components/CaseStudyGrid'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import ThoughtsGrid from '@/components/ThoughtsGrid'
import ProjectsCarousel from '@/components/ProjectsCarousel'

export default function Home() {
  return (
    <main className="pt-[92px]">
      <Hero />
      <LogosCarousel />
      <ServiceTiles />
      <div id="work">
        <CaseStudyGrid />
      </div>
      <ThoughtsGrid />
      <Testimonials />
      <ProjectsCarousel />
      <section className="bg-slate-900 py-16 text-slate-100">
        <div className="grid-max space-y-10" data-animate="rise">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300/80">Spotlight</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Featured intelligent initiatives</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              A few programmes capturing where we’re helping leadership teams modernise operations with automation, pricing
              intelligence, and employee experience agents.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'AP invoice automation platform',
                summary: 'Human-in-the-loop automations that halved processing time while keeping finance teams in control.',
                link: '/work#ap-invoice-automation'
              },
              {
                title: 'Commodities pricing intelligence',
                summary: 'AI-enhanced engine that combines market signals and scenarios for faster trading decisions.',
                link: '/work#commodities-pricing-intelligence'
              },
              {
                title: 'Employee answers hub',
                summary: 'An employee agent that centralises HR and policy knowledge, cutting ticket volume by 40%.',
                link: '/work#employee-answers-hub'
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/8 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-blue-300/40"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{item.summary}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition group-hover:text-blue-100">
                  Learn more
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
