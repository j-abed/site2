export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night-900/40">
      <div className="grid-max flex flex-col items-center justify-between gap-4 py-10 text-sm text-white/60 md:flex-row">
        <div>© {new Date().getFullYear()} Puzzles Consulting</div>
        <div className="flex gap-6">
          <a href="#" className="transition hover:text-mint-300">
            Privacy
          </a>
          <a href="#" className="transition hover:text-mint-300">
            Terms
          </a>
          <a href="#" className="transition hover:text-mint-300">
            Imprint
          </a>
        </div>
      </div>
    </footer>
  )
}
