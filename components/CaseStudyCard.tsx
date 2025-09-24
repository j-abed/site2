'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import type { CaseStudy } from '@/lib/data'

interface CaseStudyCardProps {
  item: CaseStudy
}

export default function CaseStudyCard({ item }: CaseStudyCardProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, (value) => (value / 40) * -1)
  const rotateY = useTransform(x, (value) => value / 40)

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const element = ref.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    x.set((px - 0.5) * 18)
    y.set((py - 0.5) * 18)
  }

  function handlePointerLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      data-item
      data-sequence-panel
      className="flex min-h-[420px] flex-col justify-center gap-10 lg:h-full lg:flex-row lg:flex-shrink-0"
    >
      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.995 }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        className="relative order-2 overflow-hidden rounded-3xl border border-night-700/60 bg-night-900/70 shadow-card-lg backdrop-blur lg:order-1 lg:w-1/2"
      >
        <div className="relative aspect-[4/3] w-full">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
          <div className="card-mask" />
        </div>
      </motion.div>
      <div className="order-1 flex-1 space-y-6 lg:order-2 lg:max-w-md xl:max-w-lg">
        <div className="text-xs uppercase tracking-[0.3em] text-mint-300">Case study</div>
        <h3 className="text-3xl font-semibold text-white md:text-[2.3rem]">{item.title}</h3>
        <p className="max-w-2xl text-base text-white/70 md:text-lg">{item.summary}</p>
        {item.callouts?.length ? (
          <div className="flex flex-wrap gap-3">
            {item.callouts.map((callout) => (
              <span
                key={callout.label}
                className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-night-950"
                style={{ backgroundColor: callout.color ?? 'rgba(36, 189, 189, 0.8)' }}
              >
                {callout.label}
              </span>
            ))}
          </div>
        ) : null}
        <div>
          <Link
            href={`/work/${item.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-mint-300 transition hover:text-mint-200"
          >
            Read story
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
