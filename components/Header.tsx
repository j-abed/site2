'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/what-we-do', label: 'What we do' },
  { href: '/who-we-are', label: 'Who we are' },
  { href: '/work', label: 'Work' },
  { href: '/thoughts', label: 'Thoughts' },
  { href: '/careers', label: 'Careers' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const background = useTransform(scrollY, [0, 80], ['rgba(244,246,251,0)', 'rgba(244,246,251,0.95)'])
  const height = useTransform(scrollY, [0, 80], ['92px', '68px'])
  const blur = useTransform(scrollY, [0, 80], [0, 16])
  const backdrop = useMotionTemplate`blur(${blur}px) saturate(140%)`

  function handleToggle() {
    setOpen((prev) => !prev)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <motion.header
      style={{ backgroundColor: background, height, backdropFilter: backdrop }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 shadow-[0_12px_30px_rgba(15,31,51,0.08)] backdrop-blur"
      data-animate="rise"
    >
      <div className="grid-max flex h-full items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
          <div className="relative h-9 w-9 overflow-hidden rounded-full bg-blue-600/10 ring-1 ring-blue-500/20">
            <img src="/media/favicon.png" alt="Puzzles Consulting logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-semibold">Puzzles Consulting</span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-slate-500">
              Learning Products
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium tracking-tight transition ${
                  isActive ? 'text-blue-700' : 'text-slate-600 hover:text-blue-700'
                }`}
              >
                <span>{link.label}</span>
                {isActive ? (
                  <motion.span
                    layoutId="header-active"
                    className="absolute inset-x-0 -bottom-2 h-[2px] rounded-full bg-blue-500"
                  />
                ) : null}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="ml-3 inline-flex items-center gap-2 rounded-full border border-blue-500/40 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-500/10 hover:text-blue-700"
          >
            Start a project
          </Link>
        </nav>
        <button
          type="button"
          className="kbd-focus inline-flex items-center justify-center rounded-full border border-slate-200/80 p-2 text-slate-600 transition hover:bg-slate-100 hover:text-blue-700 md:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={handleToggle}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="border-t border-slate-200/70 bg-white/95 text-sm text-slate-700 shadow-md backdrop-blur md:hidden"
          >
            <div className="grid-max flex flex-col gap-3 py-4">
              {[...links, { href: '/contact', label: 'Start a project' }].map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleClose}
                    className={`rounded-lg px-2 py-2 transition hover:bg-slate-100 ${
                      isActive ? 'text-blue-700' : 'text-slate-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
