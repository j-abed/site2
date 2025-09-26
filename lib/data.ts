export const services = [
  {
    kicker: 'Strategy',
    title: 'AI Business Transformation',
    blurb: 'Reframe growth, margin, and experience plays with executive-ready narratives, quantified business cases, and a sequenced roadmap.',
  },
  {
    kicker: 'PoC Design',
    title: 'Applied intelligence pilots',
    blurb: 'Stand up human-in-the-loop pilots that stitch together data, workflows, and change tactics so your teams feel the future before you scale it.',
  },
  {
    kicker: 'Implementation',
    title: 'Deploy Business Applications',
    blurb: 'Codify governance, talent, and measurement into an operating rhythm that keeps BizApps programs shipping value quarter after quarter.',
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
  phase: string
  background?: string
  lightBackground?: string
  lightBorder?: string
  accent?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'c1',
    title: 'Standing up an AI operating council',
    summary:
      'A Fortune 100 finance org needed to govern dozens of AI initiatives. We built an enterprise council, playbooks, and telemetry that unlocked faster approvals while keeping risk teams close to the work.',
    callouts: [
      { label: '45M annual run-rate at risk secured' },
      { label: '90-day governance launch', color: '#dbeafe' },
    ],
    image: '/media/hero-grid.svg',
    slug: 'ai-operating-council',
    phase: 'ENGAGEMENT I',
    background: 'linear-gradient(135deg, #11213B 0%, #162C55 65%, #1B365F 100%)',
    lightBackground: 'linear-gradient(145deg, #e9f1ff 0%, #dbe8ff 100%)',
    lightBorder: 'linear-gradient(135deg, #1a3faf 0%, #2563eb 100%)',
    accent: '#1a3faf',
  },
  {
    id: 'c2',
    title: 'Scaling a human-in-the-loop automation studio',
    summary:
      'A global logistics provider wanted AI copilots for front-line operators. We mapped high-value use cases, designed guardrails, and launched a studio that now ships new automations every sprint.',
    callouts: [
      { label: '12 high-impact automations live in 6 weeks' },
      { label: '25% cycle-time reduction', color: '#dbeafe' },
    ],
    image: '/media/pattern-drift.svg',
    slug: 'automation-studio',
    phase: 'ENGAGEMENT II',
    background: 'linear-gradient(135deg, #3A0F11 0%, #4D181B 55%, #611F20 100%)',
    lightBackground: 'linear-gradient(145deg, #eef3ff 0%, #e3f3ff 100%)',
    lightBorder: 'linear-gradient(135deg, #0f4c81 0%, #1d4ed8 90%)',
    accent: '#0f4c81',
  },
  {
    id: 'c3',
    title: 'Rewiring go-to-market analytics for a B2B portfolio',
    summary:
      'A PE-backed platform company was guessing which bets to scale. We unified commercial data, built exec-ready dashboards, and trained revenue teams on a new cadence that now guides capital deployment.',
    callouts: [
      { label: '30% lift in win-rate visibility' },
      { label: 'Quarterly allocation reviews automated', color: '#dbeafe' },
    ],
    image: '/media/pattern-orbit.svg',
    slug: 'gtm-analytics-transformation',
    phase: 'ENGAGEMENT III',
    background: 'linear-gradient(135deg, #0B2F2A 0%, #0F3C35 55%, #12463E 100%)',
    lightBackground: 'linear-gradient(145deg, #e8f7ff 0%, #daeefa 100%)',
    lightBorder: 'linear-gradient(135deg, #134e4a 0%, #1d4ed8 80%)',
    accent: '#134e4a',
  },
]

export const posts = [
  {
    title: 'Designing the AI operating cadence',
    excerpt: 'Four rituals every leadership team needs to keep AI investments tied to enterprise value.',
    slug: 'ai-operating-cadence',
  },
  {
    title: 'The first 90 days of an automation studio',
    excerpt: 'Lessons from building human-in-the-loop automation programs inside complex operations.',
    slug: 'automation-studio-playbook',
  },
  {
    title: 'Executive scorecards for AI investments',
    excerpt: 'How to translate technical metrics into the boardroom KPIs that release more funding.',
    slug: 'executive-ai-scorecards',
  },
]
