import Hero from '@/components/Hero'
import LogosCarousel from '@/components/LogosCarousel'
import ServiceTiles from '@/components/ServiceTiles'
import CaseStudyGrid from '@/components/CaseStudyGrid'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import ThoughtsGrid from '@/components/ThoughtsGrid'

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
      <CTASection />
    </main>
  )
}
