"use client"

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import Section from './Section'
import './ProjectsCarousel.css'

type Project = {
  image: string
  title: string
  summary: string
  progress: number
  phase: string
  status: string
  timeline: string
  tech: string[]
  accent: string
}

const projects: Project[] = [
  {
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1400&q=80',
    title: 'AI control tower build',
    summary:
      'Designed the operating rhythm, telemetry, and playbooks for a global finance function to manage 40+ AI initiatives with clarity.',
    progress: 82,
    phase: 'Council live',
    status: 'Quarterly review in place',
    timeline: 'Next maturity gate: Q4 FY24',
    tech: ['Value mapping', 'Risk governance', 'Real-time dashboards'],
    accent: '#1d4ed8',
  },
  {
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    title: 'Automation venture studio',
    summary:
      'Launched a cross-functional pod that sources, builds, and measures automation ideas for a logistics brand across five regions.',
    progress: 68,
    phase: 'Wave two in flight',
    status: 'Playbook certified',
    timeline: 'Studio expansion: September',
    tech: ['Opportunity scoring', 'Human-in-loop design', 'Change management'],
    accent: '#0f766e',
  },
  {
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80',
    title: 'Revenue intelligence layer',
    summary:
      'Unified GTM data sources, built predictive insights, and coached revenue leaders on a new analytics cadence that informs capital bets.',
    progress: 56,
    phase: 'Insights in market',
    status: 'Board pack automated',
    timeline: 'Global rollout: November',
    tech: ['Data stitching', 'Decision dashboards', 'Revenue playbooks'],
    accent: '#7c3aed',
  },
  {
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80',
    title: 'Shared services uplift',
    summary:
      'Modernised the operating model for a 2,000-person shared services org with AI copilots, workload routing, and new leadership metrics.',
    progress: 44,
    phase: 'Operating model design',
    status: 'Capability gaps closed',
    timeline: 'MVP go-live: January',
    tech: ['Workforce planning', 'Copilot design', 'Performance instrumentation'],
    accent: '#b45309',
  },
  {
    image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1400&q=80',
    title: 'AP invoice automation platform',
    summary:
      'Co-designed a human-in-the-loop invoice automation solution that cut processing time in half while surfacing exceptions for finance leads.',
    progress: 72,
    phase: 'Scaled deployment',
    status: 'Exception handling automated',
    timeline: 'Full rollout: December',
    tech: ['Document intelligence', 'Workflow orchestration', 'Finance analytics'],
    accent: '#0ea5e9',
  },
  {
    image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1400&q=80',
    title: 'Commodities pricing intelligence',
    summary:
      'Built an AI-enhanced pricing engine that ingests market signals, forecasts exposure, and delivers recommendations to the trading desk.',
    progress: 63,
    phase: 'Decision support live',
    status: 'Forecast accuracy validated',
    timeline: 'Next horizon: new markets',
    tech: ['Signal ingestion', 'Predictive models', 'Scenario planning'],
    accent: '#0369a1',
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80',
    title: 'Employee answers hub',
    summary:
      'Delivered an employee hub agent that centralises HR policies, benefits, and knowledge, cutting internal ticket volume by 40%.',
    progress: 58,
    phase: 'Adoption scale-up',
    status: 'Usage targets met',
    timeline: 'Feature expansion: Q1 FY25',
    tech: ['Knowledge graph', 'Natural language search', 'Change enablement'],
    accent: '#2563eb',
  },
]

function getCardClass(index: number, current: number) {
  if (index === current) return 'carousel-card is-active'
  if (index === current - 1) return 'carousel-card is-prev'
  if (index === current + 1) return 'carousel-card is-next'
  if (index < current - 1) return 'carousel-card is-far-prev'
  if (index > current + 1) return 'carousel-card is-far-next'
  return 'carousel-card'
}

export default function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  const clampIndex = (value: number) => Math.min(Math.max(value, 0), projects.length - 1)

  const alignToCurrent = () => {
    const track = trackRef.current
    const viewport = viewportRef.current
    if (!track || !viewport) return
    const card = track.children[current] as HTMLElement | undefined
    if (!card) return

    const viewportWidth = viewport.clientWidth
    const cardWidth = card.clientWidth
    const cardOffset = card.offsetLeft
    const target = cardOffset - (viewportWidth - cardWidth) / 2
    track.style.transform = `translate3d(${-target}px, 0, 0)`
  }

  useEffect(() => {
    alignToCurrent()
  }, [current])

  useEffect(() => {
    const handleResize = () => alignToCurrent()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    alignToCurrent()
  }, [])

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        setCurrent((prev) => clampIndex(prev + 1))
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        setCurrent((prev) => clampIndex(prev - 1))
      }
    }
    window.addEventListener('keydown', handleKeyboard)
    return () => window.removeEventListener('keydown', handleKeyboard)
  }, [])

  return (
    <Section>
      <div className="carousel-container">
        <div className="carousel-shell" aria-live="polite">
          <button
            type="button"
            className="carousel-button prev"
            onClick={() => setCurrent((prev) => clampIndex(prev - 1))}
            aria-label="View previous project"
            disabled={current === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            className="carousel-button next"
            onClick={() => setCurrent((prev) => clampIndex(prev + 1))}
            aria-label="View next project"
            disabled={current === projects.length - 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="carousel-viewport" ref={viewportRef}>
            <div className="carousel-track" ref={trackRef}>
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={getCardClass(index, current)}
                  style={{ '--accent-color': project.accent } as CSSProperties}
                  onClick={() => setCurrent(index)}
                >
                  <div className="card-media">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="card-body">
                    <span className="card-phase">{project.phase}</span>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.summary}</p>
                    <div className="card-progress">
                      <span className="value" style={{ width: `${project.progress}%` }} />
                    </div>
                    <div className="card-meta">
                      <span>{project.status}</span>
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                  <div className="tech-list">
                    {project.tech.map((item) => (
                      <span className="tech-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="carousel-indicators">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={`indicator${index === current ? ' active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Jump to ${project.title}`}
              aria-current={index === current ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
