"use client"

import { useMemo, useRef } from 'react'
import type { CSSProperties } from 'react'
import Section from './Section'
import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '@/lib/data'
import { useCaseStack } from './useCaseStack'

const FALLBACK_STYLE = {
  y: 0,
  scale: 1,
  imgOpacity: 1,
  cardOpacity: 1,
  visibility: 'visible' as const,
  pointerEvents: 'auto' as const,
  z: 100,
}

export default function CaseStudyGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLLIElement | null)[]>([])
  
  // Disable stack animation for now
  const styles = caseStudies.map(() => FALLBACK_STYLE)
  const active = 0
  const reduced = false
  const stackHeight = 0

  return (
    <div className="relative case-study-section">
      <Section>
        <div className="grid-max relative">
          <div className="section-divider pb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="gradient-text text-3xl font-semibold md:text-4xl">Recent launches</h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
                Scroll to move through a handful of launches we've guided end-to-end — from zero-to-one capability academies to
                AI enablement inside existing products.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Scroll to explore</p>
          </div>
          
          {/* Single centered card */}
          <div className="mt-8">
            {caseStudies.map((item, index) => {
              // Show only the first card
              if (index !== 0) return null
              
              return (
                <div
                  key={item.id}
                  ref={(node) => {
                    cardRefs.current[index] = node as any
                  }}
                  style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'white'
                  }}
                >
                  <CaseStudyCard
                    item={item}
                    className=""
                    imageOpacity={1}
                    isActive={true}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Section>
    </div>
  )
}