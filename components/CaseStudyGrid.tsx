"use client"

import { motion } from 'framer-motion'
import Section from './Section'
import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '@/lib/data'

export default function CaseStudyGrid() {
  return (
    <div className="relative case-study-section">
      <Section>
        <div className="grid-max relative">
          <motion.div 
            className="section-divider pb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="gradient-text text-3xl font-semibold md:text-4xl">Recent launches</h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
                Scroll to move through a handful of launches we've guided end-to-end — from zero-to-one capability academies to
                AI enablement inside existing products.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Scroll to explore</p>
          </motion.div>
          
          {/* Simple animated grid */}
          <div className="max-w-5xl mx-auto mt-16 space-y-8">
            {caseStudies.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ 
                  opacity: 0, 
                  y: 80,
                  scale: 0.95
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.7, 
                  delay: i * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white hover:shadow-3xl transition-shadow duration-300">
                  <CaseStudyCard
                    item={item}
                    className=""
                    imageOpacity={1}
                    isActive={true}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}