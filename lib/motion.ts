import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
}

export const stagger = (staggerChildren = 0.06): Variants => ({
  animate: { transition: { staggerChildren } },
})
