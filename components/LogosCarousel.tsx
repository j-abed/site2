'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = ['logo-1.svg', 'logo-2.svg', 'logo-3.svg', 'logo-4.svg', 'logo-5.svg']

export default function LogosCarousel() {
  return (
    <div className="border-y border-white/10 bg-night-900/30 py-10" data-animate="rise">
      <div className="grid-max overflow-hidden">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.4em] text-white/40">Trusted by growth teams</p>
        <motion.div
          className="flex items-center gap-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <Image key={`${logo}-${index}`} src={`/media/logos/${logo}`} alt="Client logo" width={140} height={44} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
