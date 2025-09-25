'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Section from './Section'
import PuzzleOverlay from './PuzzleOverlay'
import { fadeUp } from '@/lib/motion'

export default function Hero() {
  return (
    <Section className="px-0">
      <div className="relative w-full">
        <div className="relative overflow-hidden rounded-none border border-slate-200/60 bg-gradient-to-b from-white/92 via-white/86 to-blue-50/70 px-6 py-16 text-center shadow-[0_28px_68px_rgba(15,31,51,0.12)] backdrop-blur-sm sm:px-10 lg:px-16 lg:py-20 lg:rounded-[2.5rem]">
          <div className="pointer-events-none absolute inset-0 bg-hero-radial" aria-hidden />
          <svg className="pointer-events-none absolute h-0 w-0" aria-hidden>
            <defs>
              <filter id="hero-goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -14"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <PuzzleOverlay className="opacity-[0.32]" columns={28} rows={14} />
          <div className="hero-goo" aria-hidden>
            <span className="hero-goo__blob hero-goo__blob--one" />
            <span className="hero-goo__blob hero-goo__blob--two" />
            <span className="hero-goo__blob hero-goo__blob--three" />
          </div>
          <div className="puzzle-frame" aria-hidden>
            <span className="puzzle-border puzzle-border--one" />
            <span className="puzzle-border puzzle-border--two" />
            <span className="puzzle-border puzzle-border--three" />
            <span className="puzzle-border puzzle-border--four" />
          </div>
          <div className="puzzle-layer" aria-hidden>
            <span className="puzzle-piece puzzle-piece--one" />
            <span className="puzzle-piece puzzle-piece--two" />
            <span className="puzzle-piece puzzle-piece--three" />
          </div>
          <motion.span
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="relative text-xs font-semibold uppercase tracking-[0.35em] text-blue-600/80"
          >
            Puzzles Consulting
          </motion.span>
          <div className="mx-auto max-w-4xl">
            <motion.h1
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="gradient-text relative mt-6 text-4xl font-semibold leading-tight md:text-6xl"
            >
               Improve Your Business Piece by Piece
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="relative mx-auto mt-6 max-w-2xl text-base text-slate-600 md:text-lg"
            >
            We’re a hybrid team of strategists, technologists, and management professionals taking AI-enabled business experiences from
            concept to reality.
            
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="relative mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-500 hover:shadow-xl"
              >
                See recent work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 px-6 py-3 font-medium text-blue-700/80 shadow-sm transition hover:border-blue-300 hover:bg-white hover:text-blue-700"
              >
                Start a project
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}
