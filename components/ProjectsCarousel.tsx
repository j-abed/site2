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
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
    title: 'Experience launch lab',
    summary:
      'Rapid discovery and prototyping sprints alongside a global L&D team to move three flagship experiences from concept to pilot.',
    progress: 82,
    phase: 'In market pilots',
    status: 'Momentum metrics locked',
    timeline: 'Target graduation: Q4 FY24',
    tech: ['Journey mapping', 'AI authoring workflow', 'Pilot instrumentation'],
    accent: '#1d4ed8',
  },
  {
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    title: 'Capability academy backbone',
    summary:
      'Blueprinted governance, content strategy, and measurement plans for a multi-market academy rollout inside a regulated org.',
    progress: 68,
    phase: 'Enablement build',
    status: 'Operating model signed off',
    timeline: 'Pilot launch: September',
    tech: ['Curriculum design', 'Change management', 'Insights dashboard'],
    accent: '#0f766e',
  },
  {
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    title: 'AI coaching copilots',
    summary:
      'Co-created agent playbooks, guardrails, and release cadence to give talent managers AI assisted coaching inside existing tools.',
    progress: 56,
    phase: 'Controlled release',
    status: 'Governance framework approved',
    timeline: 'Scaled release: November',
    tech: ['LLM orchestration', 'Feedback loops', 'Operational playbook'],
    accent: '#7c3aed',
  },
  {
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    title: 'Partner marketplace',
    summary:
      'Designed and shipped a partner-enabled learning marketplace with clear pricing, onboarding, and reporting guardrails.',
    progress: 44,
    phase: 'Design foundations',
    status: 'Opportunity sizing validated',
    timeline: 'MVP launch: January',
    tech: ['Service design', 'Marketplace monetisation', 'Operator tooling'],
    accent: '#b45309',
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
