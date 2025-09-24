import Link from 'next/link'
import Section from '@/components/Section'
import { posts } from '@/lib/data'

export default function ThoughtsPage() {
  return (
    <main className="pt-[92px]">
      <Section>
        <div className="grid-max max-w-4xl" data-animate="rise">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-iris-300">Ideas</p>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">Notes from the Puzzles lab</h1>
          <p className="mt-4 text-lg text-white/70">
            Essays, frameworks, and experiments exploring how AI unlocks more personalized, outcomes-driven learning at scale.
            Subscribe to stay close to what we’re testing.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid-max grid gap-6 md:grid-cols-3" data-batch="stagger">
          {posts.map((post) => (
            <article
              key={post.slug}
              id={post.slug}
              data-item
              className="glow-tile relative rounded-2xl border border-night-700/60 bg-night-900/60 p-6 backdrop-blur"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-iris-300">Article</div>
              <h2 className="mt-3 text-xl font-semibold text-white">{post.title}</h2>
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
      </Section>
    </main>
  )
}
