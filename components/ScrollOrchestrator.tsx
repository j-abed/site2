'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export default function ScrollOrchestrator() {

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger)
      registered = true
    }

    const ctx = gsap.context(() => {
      const fadeTargets = gsap.utils.toArray<HTMLElement>('[data-animate="rise"]')
      fadeTargets.forEach((target) => {
        gsap.fromTo(
          target,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 85%',
              once: true,
            },
          },
        )
      })

      const batches = gsap.utils.toArray<HTMLElement>('[data-batch="stagger"]')
      batches.forEach((section) => {
        const items = section.querySelectorAll<HTMLElement>('[data-item]')
        if (!items.length) return
        gsap.fromTo(
          items,
          { y: 64, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.14,
            scrollTrigger: {
              trigger: section,
              start: 'top 78%',
              once: true,
            },
          },
        )
      })

      const parallaxWrappers = gsap.utils.toArray<HTMLElement>('[data-scroll-into="scrub"]')
      parallaxWrappers.forEach((wrapper) => {
        const target = wrapper.querySelector<HTMLElement>('[data-scrub-target]')
        if (!target) return
        gsap.to(target, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    })

    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      const sequences = gsap.utils.toArray<HTMLElement>('[data-sequence]')
      const cleanups: Array<() => void> = []

      sequences.forEach((sequence) => {
        const track = sequence.querySelector<HTMLElement>('[data-sequence-track]')
        const panels = Array.from(sequence.querySelectorAll<HTMLElement>('[data-sequence-panel]'))
        if (!track || panels.length <= 1) return

        let panelHeight = panels[0]?.offsetHeight || sequence.offsetHeight || window.innerHeight
        let segmentHeight = Math.max(1, panelHeight)
        gsap.set(track, { position: 'relative', height: panelHeight })
        panels.forEach((panel) => {
          gsap.set(panel, {
            position: 'absolute',
            inset: 0,
            willChange: 'transform, opacity',
            clipPath: 'inset(0% 0% 0% 0%)',
          })
        })

        const maxUpcomingDepth = Math.max(1, Math.min(4, panels.length - 1))
        const maxPreviousDepth = 3
        const peekSpacing = 44
        const peekScaleStep = 0.06
        const minUpcomingScale = 0.82
        const minUpcomingOpacity = 0.4
        const peekClipBase = 58
        const peekClipStep = 12
        const previousOffset = 58
        const previousScaleTarget = 0.88
        const previousClipBase = 0
        const previousClipStep = 0

        const clampIndex = gsap.utils.clamp(0, panels.length - 1)
        const clampUpcomingDepth = gsap.utils.clamp(0, maxUpcomingDepth)
        const clampPreviousDepth = gsap.utils.clamp(0, maxPreviousDepth)

        const computeUpcomingState = (depth: number) => {
          const d = clampUpcomingDepth(depth)
          const eased = Math.min(1, d)
          const extraDepth = Math.max(0, d - 1)
          const scale = Math.max(minUpcomingScale, 1 - eased * peekScaleStep - extraDepth * 0.03)
          const opacityFalloff = eased * 0.35 + extraDepth * 0.25
          const opacity = gsap.utils.clamp(minUpcomingOpacity, 0.85, 1 - opacityFalloff)
          const clipBottom = Math.min(92, peekClipBase + eased * peekClipStep + extraDepth * (peekClipStep * 0.6))
          return {
            y: -peekSpacing * d,
            scale,
            opacity,
            clipPath: `inset(0% 0% ${clipBottom}% 0%)`,
          }
        }

        const computePreviousState = (depth: number) => {
          const d = clampPreviousDepth(depth)
          const eased = Math.min(1, d)
          const easedCurve = eased * eased
          const extraDepth = Math.max(0, d - 1)
          const scale = Math.max(0.72, gsap.utils.interpolate(1, previousScaleTarget, easedCurve) - extraDepth * 0.08)
          const opacity = extraDepth > 0 ? 0 : Math.max(0, 1 - easedCurve * 1.3)
          const clipTop = 0
          return {
            y: previousOffset * (eased + extraDepth * 1.1),
            scale,
            opacity,
            clipPath: `inset(${clipTop}% 0% 0% 0%)`,
          }
        }

        const applyLayout = (baseIndex: number, progress: number) => {
          const activeFloat = Math.min(panels.length - 1, baseIndex + progress)
          const activeCandidate = Math.round(activeFloat)

          panels.forEach((panel, idx) => {
            const offset = idx - (baseIndex + progress)
            const isActive = idx === activeCandidate
            const isUpcoming = offset >= 0
            const depth = Math.abs(offset)
            const state = isActive
              ? { y: 0, scale: 1, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }
              : isUpcoming
                ? computeUpcomingState(depth)
                : computePreviousState(depth)

            let zIndex = panels.length - idx
            if (isActive) {
              zIndex = panels.length * 4 + 2
            } else if (offset >= 0 && offset < 1) {
              zIndex = panels.length * 4 + 1
            }

            gsap.set(panel, {
              y: state.y,
              scale: state.scale,
              opacity: state.opacity,
              zIndex,
              transformOrigin: 'center top',
              clipPath: state.clipPath,
            })

            panel.style.pointerEvents = isActive ? 'auto' : 'none'
          })
        }

        applyLayout(0, 0)

        const updateFromScroll = (self: ScrollTrigger) => {
          const scroll = self.scroll() - self.start
          const rawIndex = scroll / segmentHeight
          const clamped = clampIndex(rawIndex)
          const baseIndex = Math.floor(clamped)
          const progress = clamped - baseIndex

          applyLayout(baseIndex, progress)
        }

        const trigger = ScrollTrigger.create({
          trigger: sequence,
          start: 'top top+=120',
          end: () => `+=${Math.max(1, panels.length - 1) * segmentHeight}`,
          scrub: true,
          anticipatePin: 1,
          pin: true,
          pinSpacing: true,
          snap: {
              snapTo: (value) => {
                const segments = panels.length - 1
                if (segments <= 0) return 0
                return Math.round(value * segments) / segments
              },
              duration: { min: 0.25, max: 0.5 },
              ease: 'power1.out',
          },
          onUpdate: updateFromScroll,
          onRefresh: (self) => {
            panelHeight = panels[0]?.offsetHeight || sequence.offsetHeight || window.innerHeight
            segmentHeight = Math.max(1, panelHeight)
            gsap.set(track, { height: panelHeight })
            updateFromScroll(self)
          },
          })

          cleanups.push(() => {
            trigger.kill()
            gsap.set(track, { clearProps: 'position,height' })
            panels.forEach((panel) => {
              gsap.set(panel, { clearProps: 'all' })
              panel.style.removeProperty('pointer-events')
            })
          })
        })

      return () => {
        cleanups.forEach((cleanup) => cleanup())
      }
    })

    return () => {
      ctx.revert()
      mm.revert()
    }
  }, [])

  return null
}
