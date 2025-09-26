'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
  { src: '/media/logos/microsoft/BusinessCentral_scalable.svg', alt: 'Dynamics 365 Business Central' },
  { src: '/media/logos/microsoft/Commerce_scalable.svg', alt: 'Dynamics 365 Commerce' },
  { src: '/media/logos/microsoft/ConnectedStore_scalable.svg', alt: 'Dynamics 365 Connected Store' },
  { src: '/media/logos/microsoft/ContactCenter_scalable.svg', alt: 'Dynamics 365 Contact Center' },
  { src: '/media/logos/microsoft/CoreHR_scalable.svg', alt: 'Dynamics 365 Core HR' },
  { src: '/media/logos/microsoft/CustomerInsights_scalable.svg', alt: 'Dynamics 365 Customer Insights' },
  { src: '/media/logos/microsoft/CustomerService_scalable.svg', alt: 'Dynamics 365 Customer Service' },
  { src: '/media/logos/microsoft/CustomerServiceInsights_scalable.svg', alt: 'Dynamics 365 Customer Service Insights' },
  { src: '/media/logos/microsoft/CustomerVoice_scalable.svg', alt: 'Dynamics 365 Customer Voice' },
  { src: '/media/logos/microsoft/FieldService_scalable.svg', alt: 'Dynamics 365 Field Service' },
  { src: '/media/logos/microsoft/Finance_scalable.svg', alt: 'Dynamics 365 Finance' },
  { src: '/media/logos/microsoft/Finance+Operations_scalable.svg', alt: 'Dynamics 365 Finance + Operations' },
  { src: '/media/logos/microsoft/FraudProtection_scalable.svg', alt: 'Dynamics 365 Fraud Protection' },
  { src: '/media/logos/microsoft/IntelligentOrderManagement_scalable (1).svg', alt: 'Dynamics 365 Intelligent Order Management' },
  { src: '/media/logos/microsoft/Marketing_scalable.svg', alt: 'Dynamics 365 Marketing' },
  { src: '/media/logos/microsoft/MarketInsights_scalable.svg', alt: 'Dynamics 365 Market Insights' },
  { src: '/media/logos/microsoft/Product_Insights__scalable.svg', alt: 'Dynamics 365 Product Insights' },
  { src: '/media/logos/microsoft/ProjectOperations_scalable.svg', alt: 'Dynamics 365 Project Operations' },
  { src: '/media/logos/microsoft/ProjectServiceAutomation_scalable.svg', alt: 'Dynamics 365 Project Service Automation' },
  { src: '/media/logos/microsoft/Sales_scalable.svg', alt: 'Dynamics 365 Sales' },
  { src: '/media/logos/microsoft/SalesInsights_scalable.svg', alt: 'Dynamics 365 Sales Insights' },
  { src: '/media/logos/microsoft/SupplyChainManagement_scalable.svg', alt: 'Dynamics 365 Supply Chain Management' },
  { src: '/media/logos/microsoft/SustainabilityCalculator_scalable.svg', alt: 'Dynamics 365 Sustainability Calculator' },
  { src: '/media/logos/microsoft/Talent_scalable.svg', alt: 'Dynamics 365 Talent' },
  { src: '/media/logos/microsoft/TalentAttract_scalable.svg', alt: 'Dynamics 365 Talent Attract' },
  { src: '/media/logos/microsoft/TalentOnboard_scalable.svg', alt: 'Dynamics 365 Talent Onboard' },
]

export default function LogosCarousel() {
  return (
    <div className="border-y border-slate-200/70 bg-white/80 py-10" data-animate="rise">
      <div className="grid-max overflow-hidden">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.4em] text-slate-400">
          Official Microsoft Partner with 15+ years of Dynamics 365 Expertise:
        </p>
        <motion.div
          className="flex items-center gap-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={logo.src + '-' + index}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={44}
              title={logo.alt}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
