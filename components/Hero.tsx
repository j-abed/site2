'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp } from '@/lib/motion'

export default function Hero() {
  return (
    <Section>
      <div className="grid-max">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night-900/60 p-12 text-center shadow-card-lg">
          <div className="pointer-events-none absolute inset-0 bg-hero-radial" aria-hidden />
          <motion.span
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="relative text-sm font-semibold uppercase tracking-[0.3em] text-mint-300"
          >
            Puzzles Consulting
          </motion.span>
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="relative mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl"
          >
            Launch learning products that feel inevitable
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="relative mx-auto mt-6 max-w-2xl text-lg text-white/70"
          >
            We’re a hybrid team of strategists, technologists, and designers building AI-enabled education experiences from
            idea to scale.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="relative mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-mint-500 px-6 py-3 font-semibold text-night-900 transition hover:bg-mint-400"
            >
              See recent work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-mint-500/40 px-6 py-3 font-medium text-mint-200 transition hover:bg-mint-500/10 hover:text-white"
            >
              Start a project
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
