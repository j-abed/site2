export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80 dark:border-white/10 dark:bg-night-900/40">
      <div className="grid-max flex flex-col items-center justify-between gap-4 py-10 text-sm text-slate-500 dark:text-white/60 md:flex-row">
        <div>© {new Date().getFullYear()} Puzzles Consulting</div>
        <div className="flex gap-6">
          <a href="#" className="transition hover:text-blue-600 dark:hover:text-mint-300">
            Privacy
          </a>
          <a href="#" className="transition hover:text-blue-600 dark:hover:text-mint-300">
            Terms
          </a>
          <a href="#" className="transition hover:text-blue-600 dark:hover:text-mint-300">
            Imprint
          </a>
        </div>
      </div>
    </footer>
  )
}
