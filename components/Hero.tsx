'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp } from '@/lib/motion'

export default function Hero() {
  return (
    <Section>
      <div className="grid-max">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-card-lg dark:border-white/10 dark:bg-night-900/60">
          <div className="pointer-events-none absolute inset-0 bg-hero-radial" aria-hidden />
          <div className="puzzle-layer" aria-hidden>
            <span className="puzzle-piece puzzle-piece--one" />
            <span className="puzzle-piece puzzle-piece--two" />
            <span className="puzzle-piece puzzle-piece--three" />
          </div>
          <motion.span
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="relative text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-mint-300"
          >
            Puzzles Consulting
          </motion.span>
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="relative mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl"
          >
             Improve Your Business Piece by Piece
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="relative mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-white/70"
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
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 dark:bg-mint-500 dark:text-night-900 dark:hover:bg-mint-400"
            >
              See recent work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-900 dark:border-mint-500/40 dark:text-mint-200 dark:hover:bg-mint-500/10 dark:hover:text-white"
            >
              Start a project
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
