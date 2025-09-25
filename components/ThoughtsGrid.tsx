import Link from 'next/link'
import Section from './Section'
import { posts } from '@/lib/data'

export default function ThoughtsGrid() {
  return (
    <Section>
      <div className="grid-max section-divider pb-10" data-batch="stagger">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="gradient-text text-3xl font-semibold md:text-4xl">Puzzles insights</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              Perspectives on the next wave of capability academies, AI authoring, and learner operations.
            </p>
          </div>
          <Link
            href="/thoughts"
            className="text-sm font-medium text-blue-600 transition hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3" data-item-container>
          {posts.map((post) => (
            <article
              key={post.slug}
              data-item
              className="glow-tile relative rounded-2xl border border-slate-200/60 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-blue-500/80">Insight</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <Link
                href={`/thoughts/${post.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-500"
              >
                Read article
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
