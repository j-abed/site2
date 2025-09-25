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
            This is a placeholder article. Replace it with your long-form content, research, and frameworks. Consider connecting
            to a CMS or Markdown content pipeline to publish regularly without redeploying the site.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in felis eget neque aliquet aliquet id eu erat.
            Sed volutpat sem quis elit cursus, vitae egestas dolor facilisis. Mauris cursus eget velit quis ullamcorper.
          </p>
          <p>
            Aliquam accumsan nunc non risus congue, vel vulputate est dictum. Nullam lobortis luctus velit, eget molestie lacus
            varius vitae. Suspendisse potenti. In hac habitasse platea dictumst.
          </p>
        </div>
      </article>
    </main>
  )
}
