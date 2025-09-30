import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import ServiceTiles from '../ServiceTiles'
import { services } from '../../lib/data'

describe('ServiceTiles', () => {
  it('renders the section heading', () => {
    render(<ServiceTiles />)
    expect(screen.getByRole('heading', { name: /where executive teams pull us in/i })).toBeInTheDocument()
  })

  it('renders a tile for each configured service', () => {
    render(<ServiceTiles />)
    services.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument()
      expect(screen.getByText(service.blurb)).toBeInTheDocument()
    })
  })
})
