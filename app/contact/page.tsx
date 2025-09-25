'use client'

import { FormEvent, useState } from 'react'
import Section from '@/components/Section'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      form.reset()
    }, 600)
  }

  return (
    <main className="pt-[92px]">
      <Section>
        <div className="grid-max max-w-4xl" data-animate="rise">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Contact</p>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">Let’s build something together</h1>
          <p className="mt-4 text-lg text-slate-600">
            Tell us about your learning challenge, team, and timeline. We’ll reply within two business days.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid-max" data-animate="rise">
          <form
            onSubmit={handleSubmit}
            className="grid gap-6 rounded-3xl border border-slate-200/60 bg-white/95 p-8 shadow-card-lg backdrop-blur md:grid-cols-2"
          >
            <div className="md:col-span-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Ada Lovelace"
                className="kbd-focus mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="kbd-focus mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400"
              />
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-medium text-slate-700">
                Company
              </label>
              <input
                id="company"
                name="company"
                placeholder="Puzzles Consulting"
                className="kbd-focus mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="We’re launching a new capability academy..."
                className="kbd-focus mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="kbd-focus inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={loading}
              >
                {loading ? 'Sending…' : 'Send message'}
              </button>
              {submitted && !loading ? (
                <p className="text-sm text-blue-600">Thanks! We’ll reply shortly.</p>
              ) : null}
            </div>
          </form>
        </div>
      </Section>
    </main>
  )
}
