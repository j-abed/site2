import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/40 bg-black">
      <div className="grid-max flex flex-col items-center justify-between gap-4 py-10 text-sm text-slate-300 md:flex-row">
        <div>© {new Date().getFullYear()} Puzzles Consulting</div>
        <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="/imprint" className="transition hover:text-white">
              Imprint
            </Link>
        </div>
      </div>
    </footer>
  )
}
