import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies } from '@/lib/data'

interface CaseStudyPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }))
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const item = caseStudies.find((caseStudy) => caseStudy.slug === params.slug)

  if (!item) {
    notFound()
  }

  const caseStudy = item

  return (
    <article className="pt-[92px]">
      <div className="relative h-[40vh] min-h-[320px] overflow-hidden" data-scroll-into="scrub">
        <Image src={caseStudy.image} alt={caseStudy.title} fill className="object-cover" priority />
        <div className="card-mask" />
      </div>
      <div className="grid-max py-12" data-animate="rise">
        <Link href="/work" className="text-sm text-slate-600 transition hover:text-slate-900">
          ← Back to work
        </Link>
        <h1 className="mt-6 text-3xl font-bold md:text-4xl">{caseStudy.title}</h1>
        <p className="mt-4 max-w-3xl text-slate-600 md:text-lg">{caseStudy.summary}</p>
        {caseStudy.callouts?.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {caseStudy.callouts.map((callout) => (
              <span
                key={callout.label}
                className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-night-950"
                style={{ backgroundColor: callout.color ?? 'rgba(36, 189, 189, 0.8)' }}
              >
                {callout.label}
              </span>
            ))}
          </div>
        ) : null}
        <dl className="mt-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-blue-600">Engagement type</dt>
            <dd className="mt-1">Rapid discovery, prototype, and pilot enablement</dd>
          </div>
        </dl>
        <div className="mt-10 max-w-3xl space-y-5 text-slate-700">
          <p>
            Every engagement begins with understanding the specific business problem and the stakeholders who need to see progress. 
            Our discovery process maps the current state, identifies quick wins, and designs a pilot that demonstrates measurable 
            value within the first 90 days.
          </p>
          <p>
            We work embedded with your teams to build not just the solution, but the organizational capability to sustain and 
            scale it. This includes governance frameworks, change management protocols, and measurement systems that tie directly 
            to business outcomes that matter to your leadership team.
          </p>
          <p>
            The result is more than just a successful project—it's a playbook your organization can replicate, a team that 
            understands how to balance automation with human oversight, and the confidence to tackle increasingly complex 
            AI transformation challenges.
          </p>
        </div>
      </div>
    </article>
  )
}
