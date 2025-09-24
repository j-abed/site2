import { ReactNode } from 'react'

export default function Section({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section id={id} className="section">
      {children}
    </section>
  )
}
