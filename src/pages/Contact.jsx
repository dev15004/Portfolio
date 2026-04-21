import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionTitle from '../components/SectionTitle'
import { siteConfig } from '../data/siteContent'

const PUBLIC_KEY = 'RVT6OiPQ395DR-WLv'
const SERVICE_ID = 'service_2q18n2a'
const TEMPLATE_ID = 'template_dikmftf'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: 'Portfolio Website',
  budget: 'Not decided yet',
  timeline: 'Within 2 weeks',
  message: '',
}

const Contact = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY)
    }
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const submitForm = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    if (!formRef.current || !PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
      setStatus({
        type: 'error',
        message: 'EmailJS is not configured yet.',
      })
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current)
      setStatus({
        type: 'success',
        message: 'Message sent successfully.',
      })
      setFormData(initialForm)
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-14 text-slate-100 md:px-10">
      <SectionTitle
        eyebrow="Contact"
        title="Let's discuss your next website or frontend improvement"
        description="Share a few project details and tell me what you want to build, improve, or fix."
      />
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold">Why reach out?</h2>
          <p className="text-lg leading-8 text-slate-300">
            I can help turn a rough portfolio, landing page, or frontend draft into something more complete, trustworthy,
            and easier for visitors to understand.
          </p>
          <div className="space-y-4 text-slate-200">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Email</p>
              <a className="text-lg hover:text-cyan-200" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Location</p>
              <p className="text-lg">{siteConfig.location}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Response style</p>
              <p className="text-lg">Structured replies with next steps, estimate expectations, and timeline clarity.</p>
            </div>
          </div>
        </div>
        <form
          ref={formRef}
          className="grid gap-5 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20"
          onSubmit={submitForm}
        >
          <input type="hidden" name="to_email" value={siteConfig.email} />
          <h2 className="text-2xl font-semibold text-white">Project enquiry form</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-300">Full name</span>
              <input
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-300">Email address</span>
              <input
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-300">Mobile number</span>
              <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-white/5 focus-within:border-cyan-300">
                <span
                  className="pointer-events-none select-none flex items-center border-r border-white/10 px-4 text-slate-300"
                  aria-hidden="true"
                >
                  +91
                </span>
                <input
                  className="w-full bg-transparent px-4 py-3 text-white outline-none"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />
              </div>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-300">Company or brand</span>
              <input
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Optional"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-300">Project type</span>
              <select
                className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
              >
                <option>Portfolio Website</option>
                <option>Business Website</option>
                <option>Landing Page</option>
                <option>Frontend Refactor</option>
                <option>UI Bug Fixes</option>
              </select>
            </label>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-300">Estimated budget</span>
              <select
                className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option>Not decided yet</option>
                <option>Under INR 10,000</option>
                <option>INR 10,000 - 25,000</option>
                <option>INR 25,000 - 50,000</option>
                <option>INR 50,000+</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-300">Preferred timeline</span>
              <select
                className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
              >
                <option>Within 2 weeks</option>
                <option>This month</option>
                <option>Next 1-2 months</option>
                <option>Flexible</option>
              </select>
            </label>
          </div>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-300">Project details</span>
            <textarea
              className="min-h-40 rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me what you want to build, improve, or fix."
            />
          </label>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <button
              className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
            {status.message ? (
              <p className={status.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}>
                {status.message}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
