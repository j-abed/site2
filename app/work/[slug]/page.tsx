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
        <Link
          href="/work"
          className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-white/60 dark:hover:text-white"
        >
          ← Back to work
        </Link>
        <h1 className="mt-6 text-3xl font-bold md:text-4xl">{caseStudy.title}</h1>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-white/70 md:text-lg">{caseStudy.summary}</p>
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
        <dl className="mt-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 dark:border-night-700/60 dark:bg-night-900/60 dark:text-white/70">
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-blue-600 dark:text-mint-300">Engagement type</dt>
            <dd className="mt-1">Rapid discovery, prototype, and pilot enablement</dd>
          </div>
        </dl>
        <div className="mt-10 max-w-3xl space-y-5 text-slate-700 dark:text-white/80">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus eros aliquet convallis ultricies. Mauris
            augue massa, ultricies non ligula. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus
            ipsum ante quis turpis.
          </p>
          <p>
            Nulla facilisi. Curabitur vel sem sit amet dolor ultricies varius. Donec tincidunt lacus in velit porttitor, vel
            blandit neque venenatis. Integer gravida vel tortor ac posuere. Proin id justo eu nisi dictum lobortis vel eu
            turpis.
          </p>
        </div>
      </div>
    </article>
  )
}
