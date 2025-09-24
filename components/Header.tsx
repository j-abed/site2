'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'

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
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const { scrollY } = useScroll()
  const background = useTransform(
    scrollY,
    [0, 80],
    isDark ? ['rgba(5,8,20,0)', 'rgba(5,8,20,0.85)'] : ['rgba(248,250,252,0)', 'rgba(248,250,252,0.92)']
  )
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
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/70 dark:border-white/5 dark:bg-transparent"
      data-animate="rise"
    >
      <div className="grid-max flex h-full items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          <img
            src="/media/favicon.png"
            alt="Puzzles Consulting logo"
            className="h-9 w-9 rounded-full bg-blue-500/10 object-cover dark:bg-mint-500/20"
            style={{ background: 'none' }}
          />
          <span>Puzzles Consulting</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-white/70 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition hover:text-slate-900 dark:hover:text-white ${
                  isActive ? 'text-slate-900 dark:text-white' : ''
                }`}
              >
                {isActive ? (
                  <span
                    className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-blue-500 dark:bg-mint-500"
                    aria-hidden
                  />
                ) : null}
                {link.label}
              </Link>
            )
          })}
          <button
            type="button"
            onClick={toggleTheme}
            className="kbd-focus inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <span className="sr-only">Toggle theme</span>
            {isDark ? (
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                />
              </svg>
            ) : (
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                />
              </svg>
            )}
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-500/10 hover:text-slate-900 dark:border-mint-500/40 dark:text-mint-300 dark:hover:bg-mint-500/10 dark:hover:text-white"
          >
            Start a project
          </Link>
        </nav>
        <button
          type="button"
          className="kbd-focus inline-flex items-center justify-center rounded-full border border-slate-300 p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white md:hidden"
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
            className="border-t border-slate-200/70 bg-white/95 text-sm text-slate-700 shadow-sm backdrop-blur dark:border-white/5 dark:bg-night-900/95 dark:text-white/80 md:hidden"
          >
            <div className="grid-max flex flex-col gap-3 py-4">
              {[...links, { href: '/contact', label: 'Start a project' }].map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleClose}
                    className={`rounded-lg px-2 py-2 transition hover:bg-slate-100 dark:hover:bg-white/10 ${
                      isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-white/75'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <button
                type="button"
                onClick={() => {
                  toggleTheme()
                  handleClose()
                }}
                className="mt-2 inline-flex items-center justify-between rounded-lg bg-slate-100 px-3 py-2 text-left text-slate-700 transition hover:bg-slate-200 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              >
                <span>{isDark ? 'Use light theme' : 'Use dark theme'}</span>
                {isDark ? (
                  <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                    />
                  </svg>
                ) : (
                  <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                  </svg>
                )}
              </button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
