import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '@/lib/data'

interface ThoughtPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export default function ThoughtDetailPage({ params }: ThoughtPageProps) {
  const post = posts.find((item) => item.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="pt-[92px]">
      <article className="grid-max py-20" data-animate="rise">
        <Link href="/thoughts" className="text-sm text-slate-600 transition hover:text-slate-900">
          ← Back to thoughts
        </Link>
        <h1 className="mt-6 text-3xl font-bold md:text-4xl">{post.title}</h1>
        <p className="mt-2 max-w-2xl text-slate-600">{post.excerpt}</p>
        <div className="mt-8 max-w-3xl space-y-5 text-slate-700">
          <p>
            This article explores the frameworks, methodologies, and real-world lessons we've gathered from helping executive 
            teams navigate AI transformation. Each piece draws from our direct experience with Fortune 100s and growth-stage 
            companies building intelligent operations.
          </p>
          <p>
            Our approach combines strategic thinking with tactical execution—helping leadership teams move from AI ambition 
            to measurable business outcomes. We focus on the intersection of technology capability, organizational readiness, 
            and market opportunity.
          </p>
          <p>
            The insights shared here are designed for executives, product leaders, and transformation teams who need to make 
            AI investments that actually move the needle on revenue, efficiency, and competitive advantage. No theoretical 
            frameworks—just proven playbooks from the field.
          </p>
          <p>
            Want to dive deeper into any of these topics? We're always interested in discussing specific challenges with 
            leadership teams who are serious about operationalizing AI at scale.
          </p>
        </div>
      </article>
    </main>
  )
}
