import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-100 px-4 text-center text-slate-900 dark:bg-night-950 dark:text-white">
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-mint-300">404</span>
      <h1 className="text-3xl font-bold md:text-4xl">We couldn’t find that page</h1>
      <p className="max-w-md text-slate-600 dark:text-white/70">
        The page you’re looking for has moved or no longer exists. Try heading back to the homepage or explore our latest work.
      </p>
      <Link
        href="/"
        className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500 dark:bg-mint-500 dark:text-night-900 dark:hover:bg-mint-400"
      >
        Return home
      </Link>
    </main>
  )
}
