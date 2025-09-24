import React, { ReactNode } from 'react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('framer-motion', () => {
  const MockComponent = React.forwardRef<HTMLDivElement, React.PropsWithChildren<Record<string, unknown>>>(
    ({ children, ...rest }, ref) => React.createElement('div', { ref, ...rest }, children as ReactNode)
  );

  const motionProxy = new Proxy(
    {},
    {
      get: () => MockComponent,
    },
  );

  return {
    __esModule: true,
    motion: motionProxy,
    AnimatePresence: function AnimatePresence({ children }: { children: ReactNode }) {
      return React.createElement(React.Fragment, null, children);
    },
    useScroll: () => ({ scrollY: { on: () => undefined } }),
    useTransform: () => 0,
    useMotionTemplate: () => '',
  };
});
