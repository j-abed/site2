'use client'

import { useEffect, useRef, type CSSProperties } from 'react'
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
  const accent = item.accent ?? '#1d4ed8'

  const cardBackground = item.lightBackground ?? `linear-gradient(135deg, ${withOpacity(accent, 0.16)}, rgba(255,255,255,0.95))`
  const outlineColor = withOpacity(accent, 0.28)
  const lightInnerRadius = 'calc(1.75rem - 3px)'
  const calloutTint = withOpacity(accent, 0.18)
  const haloTint = withOpacity(accent, 0.2)

  const cardStyle: CSSProperties = { background: cardBackground }
  if (item.lightBorder) {
    cardStyle.borderImage = `${item.lightBorder} 1`
    cardStyle.borderImageSlice = 1
  } else {
    cardStyle.borderColor = outlineColor
  }

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

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      x.set(0)
      y.set(0)
    })
    return () => cancelAnimationFrame(id)
  }, [x, y])

  return (
    <motion.article
      data-item
      data-sequence-panel
      style={cardStyle}
      className="relative flex min-h-[400px] flex-col justify-center overflow-hidden rounded-[28px] border shadow-[0_24px_70px_rgba(15,31,51,0.12)] backdrop-blur lg:h-full lg:flex-row lg:flex-shrink-0 lg:items-center"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{ background: `radial-gradient(130% 130% at 18% 12%, ${haloTint}, transparent 58%)` }}
        aria-hidden
      />
      <div
        className="relative z-10 flex w-full flex-col justify-center gap-8 overflow-hidden bg-white/96 lg:flex-row lg:items-center"
        style={{ borderRadius: lightInnerRadius }}
      >
        <motion.div
          ref={ref}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          style={{ rotateX, rotateY, borderRadius: lightInnerRadius }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.995 }}
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          className="relative order-2 overflow-hidden rounded-2xl bg-white shadow-[0_18px_36px_rgba(15,31,51,0.16)] lg:order-1 lg:w-[44%]"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
            <div className="card-mask" />
          </div>
        </motion.div>
        <div className="order-1 flex-1 space-y-6 px-6 pb-8 pt-8 lg:order-2 lg:max-w-xl">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white shadow-[0_12px_24px_rgba(15,31,51,0.16)]"
              style={{ background: accent }}
            >
              {item.phase
                .split(' ')
                .map((word: string) => word[0])
                .join('')
                .slice(0, 3)}
            </span>
            <div>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-blue-600/80">
                Case study
              </span>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                {item.phase}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-[2.05rem] font-semibold leading-snug text-slate-900">
              {item.title}
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              {item.summary}
            </p>
          </div>
          {item.callouts?.length ? (
            <div className="flex flex-wrap gap-2">
              {item.callouts.map((callout) => (
                <span
                  key={callout.label}
                  className="inline-flex items-center rounded-full px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-900"
                  style={{ backgroundColor: callout.color ?? calloutTint }}
                >
                  {callout.label}
                </span>
              ))}
            </div>
          ) : null}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-600">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 text-sm font-semibold text-slate-700">
                {item.callouts?.length ?? 0}
              </span>
              <span className="tracking-wide">Impact signals</span>
            </div>
            <Link
              href={`/work/${item.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-400/30 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400/60 hover:text-blue-700"
            >
              Read story
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function withOpacity(hex: string, opacity: number) {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

function hexToRgb(hex: string) {
  let normalized = hex.replace('#', '')
  if (normalized.length === 3) {
    normalized = normalized
      .split('')
      .map((char) => char + char)
      .join('')
  }
  const value = parseInt(normalized, 16)
  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255
  return { r, g, b }
}
