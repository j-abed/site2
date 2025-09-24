import Image from 'next/image'

const testimonials = [
  {
    quote: 'They helped us go from idea to launch in weeks.',
    name: 'A. Rivera',
    role: 'VP Learning',
    avatar: '/media/avatars/avatar-1.svg',
  },
  {
    quote: 'Smart, fast, and deeply collaborative.',
    name: 'J. Chen',
    role: 'Head of Product',
    avatar: '/media/avatars/avatar-2.svg',
  },
  {
    quote: 'Real business impact, not just slides.',
    name: 'M. Patel',
    role: 'COO',
    avatar: '/media/avatars/avatar-3.svg',
  },
]

export default function Testimonials() {
  return (
    <div className="section" data-batch="stagger">
      <div className="grid-max">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">What partners say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              data-item
              className="glow-tile relative rounded-2xl border border-night-700/60 bg-night-900/60 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <Image src={testimonial.avatar} alt="" width={48} height={48} className="h-12 w-12 rounded-full" />
                <div>
                  <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">{testimonial.role}</div>
                </div>
              </div>
              <p className="mt-5 text-white/80">“{testimonial.quote}”</p>
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  )
}
