import { ReactNode } from 'react'
import PageTransition from '@/components/PageTransition'

export default function RootTemplate({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>
}
