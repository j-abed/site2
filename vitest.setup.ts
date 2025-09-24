import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

vi.mock('framer-motion', () => {
  const MockComponent = React.forwardRef<HTMLDivElement, React.PropsWithChildren<Record<string, unknown>>>(
    ({ children, ...rest }, ref) => (
      <div ref={ref} {...rest}>
        {children}
      </div>
    ),
  )

  const motionProxy = new Proxy(
    {},
    {
      get: () => MockComponent,
    },
  )

  return {
    __esModule: true,
    motion: motionProxy,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    useScroll: () => ({ scrollY: { on: () => undefined } }),
    useTransform: () => 0,
    useMotionTemplate: () => '',
  }
})
