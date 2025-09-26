import Link from 'next/link'
import Section from '@/components/Section'
import { posts } from '@/lib/data'

export default function ThoughtsPage() {
  return (
    <main className="pt-[92px]">
      <Section>
        <div className="grid-max max-w-4xl" data-animate="rise">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Ideas</p>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">Field notes on intelligent operating models</h1>
          <p className="mt-4 text-lg text-slate-600">
            Frameworks, playbooks, and executive primers for leaders modernising their organisations with AI and automation. We
            share what works once it has shipped real outcomes—not just lab demos.
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
              className="glow-tile relative rounded-2xl border border-slate-200 bg-white p-6 backdrop-blur"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-blue-500/80">Article</div>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">{post.title}</h2>
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
      </Section>
    </main>
  )
}
