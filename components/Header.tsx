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
  const background = useTransform(scrollY, [0, 80], ['rgba(5,8,20,0)', 'rgba(5,8,20,0.85)'])
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
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5"
      data-animate="rise"
    >
      <div className="grid-max flex h-full items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mint-500/20 text-mint-400">PC</span>
          <span>Puzzles Consulting</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition hover:text-white ${isActive ? 'text-white' : ''}`}
              >
                {isActive ? (
                  <span className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-mint-500" aria-hidden />
                ) : null}
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-mint-500/40 px-4 py-2 text-sm font-medium text-mint-300 transition hover:bg-mint-500/10 hover:text-white"
          >
            Start a project
          </Link>
        </nav>
        <button
          type="button"
          className="kbd-focus inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white/70 transition hover:text-white md:hidden"
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
            className="border-t border-white/5 bg-night-900/95 text-sm text-white/80 backdrop-blur md:hidden"
          >
            <div className="grid-max flex flex-col gap-3 py-4">
              {[...links, { href: '/contact', label: 'Start a project' }].map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleClose}
                    className={`rounded-lg px-2 py-2 transition hover:bg-white/10 ${
                      isActive ? 'text-white' : 'text-white/75'
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
