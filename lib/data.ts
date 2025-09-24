export const services = [
  {
    kicker: 'Strategy',
    title: 'Learning product strategy',
    blurb: 'Positioning, value propositions, and monetization experiments mapped to business outcomes.',
  },
  {
    kicker: 'Design',
    title: 'Experience prototyping',
    blurb: 'Interactive pilots, AI-assisted content flows, and user testing loops built in short cycles.',
  },
  {
    kicker: 'Launch',
    title: 'Enablement & go-live',
    blurb: 'Operational playbooks, instrumentation, and team training to scale what works.',
  },
]

export interface CaseStudyCallout {
  label: string
  color?: string
}

export interface CaseStudy {
  id: string
  title: string
  summary: string
  callouts: CaseStudyCallout[]
  image: string
  slug: string
  background?: string
  lightBackground?: string
  lightBorder?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'c1',
    title: 'Launching a digital capability academy',
    summary:
      'We embedded with a global fintech operator to create a capability academy that pairs AI-assisted learning with peer coaching. Early pilots shifted the roadmap from generic courses to adaptive pathways tied to revenue objectives.',
    callouts: [
      { label: '+22% activation in first 90 days' },
      { label: '3x faster roadmap clarity', color: '#24bdbd' },
    ],
    image: '/media/hero-grid.svg',
    slug: 'adaptive-academy',
    background: 'linear-gradient(135deg, #11213B 0%, #162C55 65%, #1B365F 100%)',
    lightBackground: 'linear-gradient(140deg, #dbeafe 0%, #bfdbfe 100%)',
    lightBorder: 'linear-gradient(135deg, #1205c9ff 0%, #2563eb 100%)',
  },
  {
    id: 'c2',
    title: 'Standing up AI coaching copilots',
    summary:
      'A professional bootcamp needed to scale mentoring without sacrificing quality. We prototyped copilots for learner check-ins, scripted AI guardrails, and staged releases into live cohorts to prove outcomes before full rollout.',
    callouts: [
      { label: '+18 NPS within two cohorts' },
      { label: '40% lift in completion', color: '#24bdbd' },
    ],
    image: '/media/pattern-drift.svg',
    slug: 'ai-coaching-copilot',
    background: 'linear-gradient(135deg, #3A0F11 0%, #4D181B 55%, #611F20 100%)',
    lightBackground: 'linear-gradient(140deg, #fee2e2 0%, #fde68a 100%)',
    lightBorder: 'linear-gradient(135deg, #f91616ff 0%, #dc2626 100%)',
  },
  {
    id: 'c3',
    title: 'Product launch lab for capability teams',
    summary:
      'We guided an enterprise L&D group through a six-week launch lab that plugged discovery, prototyping, and instrumentation into their existing operations—turning slow committee cycles into measurable go-to-market bets.',
    callouts: [
      { label: '4 pilots shipped in 6 weeks' },
      { label: '2x faster go-to-market', color: '#24bdbd' },
    ],
    image: '/media/pattern-orbit.svg',
    slug: 'product-launch-lab',
    background: 'linear-gradient(135deg, #0B2F2A 0%, #0F3C35 55%, #12463E 100%)',
    lightBackground: 'linear-gradient(140deg, #dcfce7 0%, #bae6fd 100%)',
    lightBorder: 'linear-gradient(135deg, #330f76ff 0%, #430043ff 55%, #8a0ee9ff 100%)',
  },
]

export const posts = [
  {
    title: 'Monte Carlo for course pacing',
    excerpt: 'How simulation improves cohort planning and protects learner experience.',
    slug: 'monte-carlo-course',
  },
  {
    title: 'Choosing an LLM for learning',
    excerpt: 'Latency, cost, and quality tradeoffs when embedding AI authoring into your stack.',
    slug: 'llm-for-learning',
  },
  {
    title: 'Measuring the ROI of capability academies',
    excerpt: 'A practical framework for connecting skill development to business outcomes.',
    slug: 'roi-of-academies',
  },
]
