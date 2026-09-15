'use client'

import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Mail, MapPin, Phone, UserRound } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="noise min-h-screen bg-[#05070d] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Enquiry</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let’s build your next intelligent solution.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/60">
              Share a few details and we’ll reach out to learn more about your goals, timeline,
              and the kind of AI or technology transformation you need.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <UserRound className="mt-1 h-5 w-5 text-cyan-300" />
                <div>
                  <p className="text-sm text-white/40">Name</p>
                  <p className="text-base font-medium">Your business or project lead</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <Phone className="mt-1 h-5 w-5 text-cyan-300" />
                <div>
                  <p className="text-sm text-white/40">Phone</p>
                  <p className="text-base font-medium">Available for consultation</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <Mail className="mt-1 h-5 w-5 text-cyan-300" />
                <div>
                  <p className="text-sm text-white/40">Email</p>
                  <p className="text-base font-medium">hello@cognivaxlabs.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <MapPin className="mt-1 h-5 w-5 text-cyan-300" />
                <div>
                  <p className="text-sm text-white/40">Location</p>
                  <p className="text-base font-medium">Tell us your city or country</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-[#0a0f18] p-7 shadow-[0_0_40px_rgba(34,211,238,0.08)] md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm text-white/70">
                  Full Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/25 focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </label>

                <label className="block text-sm text-white/70">
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+00 000 000 0000"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/25 focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </label>
              </div>

              <label className="block text-sm text-white/70">
                Email Address
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/25 focus:border-cyan-400 focus:outline-none"
                  required
                />
              </label>

              <label className="block text-sm text-white/70">
                Location
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/25 focus:border-cyan-400 focus:outline-none"
                  required
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Send Enquiry
              </button>

              {submitted && (
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                  <CheckCircle2 className="h-5 w-5" />
                  Your enquiry has been captured successfully. We will contact you shortly.
                </div>
              )}
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}
