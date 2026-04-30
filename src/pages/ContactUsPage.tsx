import { useState } from 'react'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'

const topics = [
  'Order support',
  'Catering & events',
  'Kashrut',
  'Ingredients & allergens',
  'Partnerships',
  'General',
]

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', topic: '', message: '' })

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      {/* Page header */}
      <div className="bg-wire-bg py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <h1 className="text-4xl font-semibold">Contact us</h1>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-sm text-wire-dark leading-relaxed mb-2">We'd love to help you find what you need!</p>
            <p className="text-sm text-wire-mid">Fill the form attached and we'll reach out.</p>
          </div>

          {/* Right - Form */}
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-medium mb-1.5">Your name <span className="text-wire-mid">*</span></label>
              <input
                type="text"
                value={form.name}
                onChange={set('name')}
                placeholder="Eg. John Smith"
                className="input-field w-full"
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5">Phone number <span className="text-wire-mid">*</span></label>
              <input
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="Eg. (+972) 54329018"
                className="input-field w-full"
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5">Email <span className="text-wire-mid">*</span></label>
              <input
                type="email"
                value={form.email}
                onChange={set('email')}
                placeholder="Eg. omerlav@wix.com"
                className="input-field w-full"
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5">What can we help you with? <span className="text-wire-mid">*</span></label>
              <div className="relative">
                <select
                  value={form.topic}
                  onChange={set('topic')}
                  className="input-field w-full appearance-none pr-8"
                >
                  <option value="">Select topic</option>
                  {topics.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wire-mid pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-1.5">Your message</label>
              <textarea
                value={form.message}
                onChange={set('message')}
                placeholder="Write your message here"
                rows={5}
                className="input-field w-full resize-none"
              />
            </div>

            <button className="w-full py-3 bg-wire-black text-white text-sm font-medium hover:bg-wire-dark transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>

      <ComesSayHello />
      <Footer />
    </div>
  )
}
