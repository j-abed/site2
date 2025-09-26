import { MutableRefObject, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"

type CardStyle = {
  y: number
  scale: number
  imgOpacity: number
  cardOpacity: number
  visibility: 'visible' | 'hidden'
  pointerEvents: 'auto' | 'none'
  z: number
}

type Metrics = {
  start: number
  cardHeight: number
  spacing: number
  center: number
  enter: number
  stackGap: number
  travel: number
  stackHeight: number
}

const HIDDEN_STYLE: CardStyle = {
  y: 0,
  scale: 0.9,
  imgOpacity: 0,
  cardOpacity: 0,
  visibility: 'hidden',
  pointerEvents: 'none',
  z: -100,
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

function hiddenStyle(y: number, scale = 0.88): CardStyle {
  return {
    y,
    scale,
    imgOpacity: 0,
    cardOpacity: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
    z: -120,
  }
}

function computeStyle(index: number, progress: number, metrics: Metrics): CardStyle {
  const relative = index - progress
  const { enter, stackGap, center } = metrics

  const upcomingLimit = 1.2
  const previousLimit = 3.0

  if (relative >= upcomingLimit) {
    return hiddenStyle(center + relative * enter * 0.8)
  }

  if (relative <= -previousLimit) {
    return hiddenStyle(center - previousLimit * stackGap * 0.6, 0.75)
  }

  const isActive = Math.abs(relative) <= 0.4

  if (isActive) {
    return {
      y: center,
      scale: 1,
      imgOpacity: 1,
      cardOpacity: 1,
      visibility: 'visible',
      pointerEvents: 'auto',
      z: 1200,
    }
  }

  if (relative >= 0) {
    // Cards coming up from below
    const closeness = clamp(1 - (relative - 0.1) / 0.8, 0, 1)
    const eased = closeness * closeness * closeness
    const y = center + relative * enter * 0.9
    const scale = clamp(0.85 + eased * 0.15, 0.85, 1)
    const imgOpacity = clamp(0.3 + eased * 0.6, 0.3, 0.9)
    const cardOpacity = Math.pow(eased, 0.8)
    const z = Math.round(900 - relative * 120)
    
    return {
      y,
      scale,
      imgOpacity,
      cardOpacity,
      visibility: cardOpacity <= 0.02 ? 'hidden' : 'visible',
      pointerEvents: 'none',
      z,
    }
  }

  // Cards stacked behind (CodePen-like compression)
  const depth = -relative
  const compressFactor = 0.885 // Match CodePen compression
  const stackOffset = 5.4 * 16 // 5.4rem in pixels (approximate)
  
  const y = center - depth * stackOffset * 0.8
  const scale = Math.pow(compressFactor, depth)
  const cardOpacity = clamp(1 - depth * 0.15, 0.3, 1)
  const imgOpacity = clamp(1 - depth * 0.2, 0.4, 1)
  const z = Math.round(1100 - depth * 60)

  return {
    y,
    scale,
    imgOpacity,
    cardOpacity,
    visibility: cardOpacity <= 0.02 ? 'hidden' : 'visible',
    pointerEvents: depth <= 2 ? 'auto' : 'none',
    z,
  }
}

export function useCaseStack(
  count: number,
  containerRef: MutableRefObject<HTMLDivElement | null>,
  cardRefs: MutableRefObject<(HTMLLIElement | null)[]>
) {
  const [metrics, setMetrics] = useState<Metrics | null>(null)
  const [styles, setStyles] = useState<CardStyle[]>(() => Array.from({ length: count }, () => HIDDEN_STYLE))
  const [active, setActive] = useState(0)
  const [reduced, setReduced] = useState(false)
  const activeRef = useRef(0)

  useEffect(() => {
    activeRef.current = active
  }, [active])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const measure = useCallback(() => {
    if (!containerRef.current) return
    const cardEl = cardRefs.current[0]
    if (!cardEl) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardHeight = cardEl.offsetHeight
    if (cardHeight === 0) return

    const viewport = window.innerHeight
    const center = 0
    const start = window.scrollY + containerRect.top
    const enter = viewport * 0.4 // Reduced for tighter animation
    const stackGap = 12
    const spacing = viewport * 0.3 // Much tighter spacing
    const travel = spacing * Math.max(0, count - 1)
    const stackHeight = Math.round(travel + cardHeight + 100) // Just card height + small buffer

    setMetrics({ start, cardHeight, spacing, center, enter, stackGap, travel, stackHeight })
  }, [containerRef, cardRefs, count])

  useLayoutEffect(() => {
    measure()
    const ro = new ResizeObserver(() => measure())
    if (containerRef.current) ro.observe(containerRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [measure])

  useEffect(() => {
    if (!metrics) return
    if (reduced) {
      const base = Array.from({ length: count }, (_, i) => ({
        y: 0,
        scale: 1,
        imgOpacity: 1,
        cardOpacity: 1,
        visibility: 'visible' as const,
        pointerEvents: 'auto' as const,
        z: 100 - i,
      }))
      setStyles(base)
      activeRef.current = 0
      setActive(0)
      return
    }

    let raf = 0
    let scrollTimeout: NodeJS.Timeout | null = null

    const handleWheel = (e: WheelEvent) => {
      const currentScroll = window.scrollY
      const stackStart = metrics.start
      const stackEnd = metrics.start + metrics.travel
      
      // Much tighter zone - only hijack during active animation
      if (currentScroll >= stackStart - 50 && currentScroll <= stackEnd + 50) {
        e.preventDefault()
        
        // Clear existing timeout
        if (scrollTimeout) clearTimeout(scrollTimeout)
        
        // Calculate target scroll position with faster movement
        const delta = e.deltaY * 1.2 // Faster to get through cards quicker
        const targetScroll = Math.max(stackStart, Math.min(stackEnd, currentScroll + delta))
        
        // Smooth scroll to target
        window.scrollTo({
          top: targetScroll,
          behavior: 'auto'
        })
        
        // Shorter timeout for quicker release
        scrollTimeout = setTimeout(() => {
          scrollTimeout = null
        }, 30)
      }
    }

    const animate = () => {
      const rawScroll = window.scrollY - metrics.start
      const clamped = Math.max(0, Math.min(metrics.travel, rawScroll))
      const progress = metrics.spacing === 0 ? 0 : clamped / metrics.spacing
      const nextActive = Math.max(0, Math.min(count - 1, Math.round(progress)))
      if (nextActive !== activeRef.current) {
        activeRef.current = nextActive
        setActive(nextActive)
      }

      const newStyles = Array.from({ length: count }, (_, i) => computeStyle(i, progress, metrics))
      setStyles(newStyles)

      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    raf = requestAnimationFrame(animate)
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (scrollTimeout) clearTimeout(scrollTimeout)
      cancelAnimationFrame(raf)
    }
  }, [metrics, reduced, count])

  const pageTo = useCallback(
    (next: number) => {
      if (!metrics) return
      const clamped = Math.max(0, Math.min(count - 1, next))
      const target = metrics.start + clamped * metrics.spacing
      window.scrollTo({ top: target, behavior: reduced ? 'auto' : 'smooth' })
    },
    [metrics, reduced, count]
  )

  useEffect(() => {
    if (!metrics) return
    const handler = (event: KeyboardEvent) => {
      const key = event.key
      if (!['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ', 'Spacebar'].includes(key)) return
      event.preventDefault()
      const current = activeRef.current
      if (key === 'ArrowDown' || key === 'PageDown' || (key === ' ' && !event.shiftKey)) {
        pageTo(current + 1)
      } else {
        pageTo(current - 1)
      }
    }
    window.addEventListener('keydown', handler, { passive: false })
    return () => window.removeEventListener('keydown', handler)
  }, [pageTo, metrics])

  return {
    styles,
    active,
    reduced,
    stackHeight: metrics?.stackHeight ?? 0,
    pageTo,
  }
}

export type { CardStyle }
