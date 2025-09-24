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

    const mm = ScrollTrigger.matchMedia({
      "all": () => {
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
      },
      "(min-width: 1024px)": () => {
        const sequences = gsap.utils.toArray<HTMLElement>('[data-sequence]')
        const cleanups: Array<() => void> = []

        sequences.forEach((sequence) => {
          const track = sequence.querySelector<HTMLElement>('[data-sequence-track]');
          const panels = Array.from(sequence.querySelectorAll<HTMLElement>('[data-sequence-panel]'));
          if (!track || panels.length <= 1) return;

          const vh = window.innerHeight;
          gsap.set(track, { position: 'relative' });
          panels.forEach((panel, index) => {
            gsap.set(panel, {
              position: 'absolute',
              inset: 0,
              opacity: index === 0 ? 1 : 0,
              yPercent: index === 0 ? 0 : 6,
              zIndex: panels.length - index,
            });
            panel.style.pointerEvents = index === 0 ? 'auto' : 'none';
          });

          let currentIndex = 0;

          const trigger = ScrollTrigger.create({
            trigger: sequence,
            start: 'top top+=120',
            end: `+=${(panels.length - 1) * vh}`,
            scrub: true,
            anticipatePin: 1,
            pin: true,
            pinSpacing: true,
            snap: {
              snapTo: (value) => {
                const segments = panels.length;
                if (segments <= 1) return 0;
                return Math.round(value * (segments - 1)) / (segments - 1);
              },
              duration: { min: 0.25, max: 0.5 },
              ease: 'power1.out',
            },
            onUpdate: (self) => {
              // Calculate which panel should be visible based on scroll position
              const scroll = self.scroll() - self.start;
              let targetIndex = Math.round(scroll / vh);
              targetIndex = Math.max(0, Math.min(panels.length - 1, targetIndex));

              // Show only the correct panel
              panels.forEach((panel, idx) => {
                if (idx === targetIndex) {
                  gsap.set(panel, { opacity: 1, yPercent: 0, zIndex: panels.length - idx });
                  panel.style.pointerEvents = 'auto';
                } else {
                  gsap.set(panel, { opacity: 0, yPercent: idx < targetIndex ? -6 : 6, zIndex: panels.length - idx });
                  panel.style.pointerEvents = 'none';
                }
              });

              // Animate only if changing panel
              if (targetIndex !== currentIndex) {
                const outgoing = panels[currentIndex];
                const incoming = panels[targetIndex];
                const direction = targetIndex > currentIndex ? 1 : -1;

                gsap.to(outgoing, {
                  opacity: 0,
                  yPercent: direction > 0 ? -6 : 6,
                  duration: 0.45,
                  ease: 'power2.out',
                  overwrite: 'auto',
                  onComplete: () => {
                    gsap.set(outgoing, { yPercent: direction > 0 ? 6 : -6 });
                  },
                });

                gsap.fromTo(
                  incoming,
                  { opacity: 0, yPercent: direction > 0 ? 6 : -6 },
                  {
                    opacity: 1,
                    yPercent: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    overwrite: 'auto',
                  },
                );

                outgoing.style.pointerEvents = 'none';
                incoming.style.pointerEvents = 'auto';
                currentIndex = targetIndex;
              }
            },
            // Remove onLeave/onEnterBack: let onUpdate always control panel visibility
          });

          cleanups.push(() => {
            trigger.kill()
            gsap.set(track, { clearProps: 'position' })
            panels.forEach((panel) => {
              gsap.set(panel, { clearProps: 'all' })
              panel.style.removeProperty('pointer-events')
            })
          })
        })

        return () => {
          cleanups.forEach((cleanup) => cleanup())
        }
      }
    })

    return () => {
      // No mm.revert() needed; GSAP handles cleanup for object syntax
    }
  }, [])

  return null
}
