'use client'

import { useEffect, useRef } from 'react'

interface PuzzleOverlayProps {
  className?: string
  columns?: number
  rows?: number
}

export default function PuzzleOverlay({ className = '', columns = 28, rows = 14 }: PuzzleOverlayProps) {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const groupRef = useRef<SVGGElement | null>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const svg = svgRef.current
    const group = groupRef.current
    if (!svg || !group) return

    const changeChance = 0.02
    const animationTolerance = 0.002
    const animationSpeed = 0.12

    let width = svg.clientWidth
    let height = svg.clientHeight
    let tileSize = Math.max(width / columns, height / rows)

    const total = columns * rows * 2
    const targetPositions = new Float32Array(total)
    const currentPositions = new Float32Array(total)

    const initialisePositions = () => {
      width = svg.clientWidth
      height = svg.clientHeight
      tileSize = Math.max(width / columns, height / rows)
      for (let i = 0; i < total; i++) {
        const dir = Math.random() > 0.5 ? 1 : -1
        targetPositions[i] = dir
        currentPositions[i] = dir
      }
    }

    initialisePositions()

    let frame = 0

    const render = () => {
      let html = ''
      for (let x = 0; x < columns; x++) {
        let linePoints = `M ${x * tileSize} 0`
        for (let y = 0; y < rows; y++) {
          const pos = currentPositions[x + y * columns]
          linePoints += `L ${x * tileSize} ${(y + 0.2) * tileSize}`
          linePoints += `C ${x * tileSize} ${(y + 0.6) * tileSize}
              ${(x + pos * 0.2) * tileSize} ${(y + 0.5 - 0.4 * pos * pos) * tileSize}
              ${(x + pos * 0.2) * tileSize} ${(y + 0.5) * tileSize}`
          linePoints += `C ${(x + pos * 0.2) * tileSize} ${(y + 0.5 + 0.4 * pos * pos) * tileSize}
              ${x * tileSize} ${(y + 0.4) * tileSize}
              ${x * tileSize} ${(y + 0.8) * tileSize}`
        }
        html += `<path d="${linePoints}" />`
      }

      const offset = columns * rows
      for (let y = 0; y < rows; y++) {
        let linePoints = `M 0 ${y * tileSize}`
        for (let x = 0; x < columns; x++) {
          const pos = currentPositions[x + y * columns + offset]
          linePoints += `L ${(x + 0.2) * tileSize} ${y * tileSize}`
          linePoints += `C ${(x + 0.6) * tileSize} ${y * tileSize}
              ${(x + 0.5 - 0.4 * pos * pos) * tileSize} ${(y + pos * 0.2) * tileSize}
              ${(x + 0.5) * tileSize} ${(y + pos * 0.2) * tileSize}`
          linePoints += `C ${(x + 0.5 + 0.4 * pos * pos) * tileSize} ${(y + pos * 0.2) * tileSize}
              ${(x + 0.4) * tileSize} ${y * tileSize}
              ${(x + 0.8) * tileSize} ${y * tileSize}`
        }
        html += `<path d="${linePoints}" />`
      }
      group.innerHTML = html
    }

    const tick = () => {
      frame = window.requestAnimationFrame(tick)

      const rect = svg.getBoundingClientRect()
      if (rect.width !== width || rect.height !== height) {
        initialisePositions()
      }

      for (let i = 0; i < total; i++) {
        if (targetPositions[i] === currentPositions[i]) {
          if (Math.random() < changeChance) {
            targetPositions[i] = -targetPositions[i]
          }
        } else if (Math.abs(targetPositions[i] - currentPositions[i]) < animationTolerance) {
          currentPositions[i] = targetPositions[i]
        } else {
          currentPositions[i] = targetPositions[i] * animationSpeed + currentPositions[i] * (1 - animationSpeed)
        }
      }

      render()
    }

    frame = window.requestAnimationFrame(tick)

    const handleResize = () => {
      initialisePositions()
      render()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [columns, rows])

  return (
    <svg
      ref={svgRef}
      className={`puzzle-overlay absolute inset-0 h-full w-full ${className}`.trim()}
      aria-hidden
    >
      <g ref={groupRef} />
    </svg>
  )
}
