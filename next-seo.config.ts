import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  titleTemplate: '%s | Puzzles Consulting',
  defaultTitle: 'Puzzles Consulting — Learning Site',
  description: 'IP-safe Next.js starter for consulting studios launching learning products.',
  openGraph: {
    type: 'website',
    siteName: 'Puzzles Consulting',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}

export default config
