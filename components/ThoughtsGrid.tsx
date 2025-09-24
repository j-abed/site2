import Link from 'next/link'
import Section from './Section'
import { posts } from '@/lib/data'

export default function ThoughtsGrid() {
  return (
    <Section>
      <div className="grid-max" data-batch="stagger">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Puzzles insights</h2>
            <p className="mt-2 max-w-xl text-sm text-white/60">
              Perspectives on the next wave of capability academies, AI authoring, and learner operations.
            </p>
          </div>
          <Link href="/thoughts" className="text-sm text-mint-300 transition hover:text-mint-200">
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3" data-item-container>
          {posts.map((post) => (
            <article
              key={post.slug}
              data-item
              className="glow-tile relative rounded-2xl border border-night-700/60 bg-night-900/60 p-6 backdrop-blur transition hover:border-mint-500/40"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-iris-300">Insight</div>
              <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
              <p className="mt-2 text-sm text-white/70">{post.excerpt}</p>
              <Link
                href={`/thoughts/${post.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm text-mint-300 transition hover:text-mint-200"
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
