import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-night-950 px-4 text-center text-white">
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-mint-300">404</span>
      <h1 className="text-3xl font-bold md:text-4xl">We couldn’t find that page</h1>
      <p className="max-w-md text-white/70">
        The page you’re looking for has moved or no longer exists. Try heading back to the homepage or explore our latest work.
      </p>
      <Link href="/" className="rounded-full bg-mint-500 px-5 py-3 font-semibold text-night-900 transition hover:bg-mint-400">
        Return home
      </Link>
    </main>
  )
}
