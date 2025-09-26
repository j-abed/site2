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

    if (typeof window !== 'undefined') {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      ;(ScrollTrigger as typeof ScrollTrigger & { clearScrollMemory?: () => void }).clearScrollMemory?.()
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

    return () => {
      ctx.revert()
    }
  }, [])

  return null
}
