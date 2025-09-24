import { render, screen } from '@testing-library/react'
import ServiceTiles from '@/components/ServiceTiles'
import { services } from '@/lib/data'

describe('ServiceTiles', () => {
  it('renders the section heading', () => {
    render(<ServiceTiles />)
    expect(screen.getByRole('heading', { name: /where we create velocity/i })).toBeInTheDocument()
  })

  it('renders a tile for each configured service', () => {
    render(<ServiceTiles />)
    services.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument()
      expect(screen.getByText(service.blurb)).toBeInTheDocument()
    })
  })
})
