import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
}

export default function Section({ children, id, className = '' }: SectionProps) {
  const combined = className ? `section ${className}` : 'section'
  return (
    <section id={id} className={combined}>
      {children}
    </section>
  )
}
