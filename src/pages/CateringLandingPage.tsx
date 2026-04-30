import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'

// 4 feature cards in the "Our catering boxes" section. Pure highlights, no links.
// Icons are exported directly from the Figma source.
const cateringBoxFeatures = [
  { label: 'Serve 10-20 people', icon: 'assets/catering-users.svg' },
  { label: 'Prepared fresh daily', icon: 'assets/catering-sun.svg' },
  { label: 'Pickup and delivery available', icon: 'assets/catering-tote.svg' },
  { label: 'Ready in up to 48 hours', icon: 'assets/catering-calendar.svg' },
]

const howItWorks = [
  {
    step: '01',
    title: 'Choose delivery option',
    body: 'Delivery right to your doorstep, or pickup from the store nearest to you or your venue.',
  },
  {
    step: '02',
    title: 'Assemble your delicious order',
    body: "Browse our catering catalog. Each box tells you exactly how many people it serves, what's included, and what to expect on delivery day.",
  },
  {
    step: '03',
    title: 'Enjoy everything fresh!',
    body: 'Collect at the store or let us bring it to you. Our team confirms your order within a few hours and will reach out.',
  },
]

// Occasion gallery - pure imagery (no labels, no blurbs). Just enough entries
// so the horizontal-scroll carousel reads as a real gallery to flip through.
const occasionGallery = [1, 2, 3, 4, 5, 6]

const eventTypes = ['Corporate / office', 'Brunch / party', 'Wedding', 'Holiday', 'Other']


const faqs = [
  {
    q: 'Can I rent out a space for my event?',
    a: 'The Modern Bread & Bagel space can accommodate up to 40 guests inside and outside. The price for a buyout would depend on the night. If it\'s a Friday night shabbat dinner, it would be $99 per person for a five course dinner, not including tax or 20% tip. The price comes with basic wine (one bottle for every four people), but would be extra charge for more premium wines. If it\'s a weeknight, the price for a buyout would be a min spend of $4,000, not including tax or 20% tip. We also offer private party packages at Thyme and Tonic. You can contact Thyme and Tonic for a quote.',
  },
  {
    q: 'How far in advance do I need to place my order?',
    a: 'We require at least 48 hours notice for all catering orders. For larger events (50+ guests) we recommend 5-7 days. For weekends and holidays, the earlier the better - popular slots fill up quickly.',
  },
  {
    q: 'Can I customize a catering box?',
    a: "Yes - for large or recurring orders we're happy to discuss custom builds. Email us at catering@modernbreadbagels.com with your event details, headcount, and any specific requirements.",
  },
  {
    q: 'How do delivery and pickup options work?',
    a: 'Pickup is available at all of our locations. Local delivery is offered within our service areas; delivery fees and minimums vary by neighborhood. We confirm everything in writing before your event.',
  },
  {
    q: 'Do you offer catering for big events?',
    a: "Absolutely - from 50 to 500+ guests, we've catered weddings, corporate events, holidays and bar/bat mitzvahs. Reach out and our catering team will build a custom proposal for you.",
  },
]

export default function CateringLandingPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', eventType: '', guests: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value })

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '70vh' }}>
        <div className="img-placeholder absolute inset-0 border-0" style={{ background: '#e8e8e8' }} />
        <div className="relative max-w-[1440px] mx-auto px-8 py-32 flex flex-col items-center text-center">
          <p className="section-label mb-4">Modern bread & bagel Catering</p>
          <h1 className="font-semibold mb-5 max-w-3xl text-wire-black" style={{ fontSize: 56, lineHeight: 1.15 }}>
            A taste worth celebrating together
          </h1>
          <p className="text-base text-wire-dark max-w-2xl mb-10 leading-relaxed">
            Fresh bagels, smoked fish, artisan breads and grazing boxes - brought to your office, brunch, birthday or any celebration worth sharing. Made fresh the morning of your event.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/catering/order" className="bg-wire-black text-white px-7 py-3 text-sm font-medium hover:bg-wire-dark transition-colors">
              Place catering order
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our catering boxes (feature highlights) ── */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Our catering boxes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {cateringBoxFeatures.map((f) => (
              <div key={f.label} className="bg-wire-ghost p-8 flex flex-col items-center text-center">
                <img src={f.icon} alt="" aria-hidden="true" className="w-8 h-8 mb-4" />
                <p className="text-sm font-medium text-wire-dark">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How does it work? ── */}
      <section className="py-20 bg-wire-bg">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-14">How does it work?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="text-6xl lg:text-7xl font-semibold text-wire-black leading-none mb-6 tracking-tight">{step.step}</div>
                <h3 className="font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-wire-mid leading-relaxed max-w-xs mx-auto">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perfect for every occasion - image-only horizontal-scroll carousel.
          Mirrors the Levain catering reference: large image cards with no text overlays,
          pagination dots below to indicate scroll position. */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-semibold">Perfect for every occasion</h2>
              <p className="text-sm text-wire-mid mt-2 max-w-md">A few of the moments we love showing up for - but if yours isn't here, we'll build it with you.</p>
            </div>
            <Link to="/catering/order" className="btn-primary shrink-0 hidden sm:inline-flex items-center">
              Place catering order
            </Link>
          </div>
        </div>

        {/* Horizontal scroll carousel. Three cards visible per "page" on desktop,
            scroll for the rest. snap-x makes cards lock to position. */}
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
          <div className="flex gap-3 px-8 max-w-[1440px] mx-auto pb-2" style={{ minWidth: 'max-content' }}>
            {occasionGallery.map((i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[88vw] sm:w-[calc((100vw-4rem-1.5rem)/3)] lg:w-[calc((min(1440px,100vw)-4rem-1.5rem)/3)] max-w-[460px]"
              >
                <div className="img-placeholder aspect-[4/3]" />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots - visual indicator that there's more to scroll to.
            Static for the wireframe; functional on a real implementation. */}
        <div className="max-w-[1440px] mx-auto px-8 mt-8 flex items-center justify-center gap-2">
          {[0, 1].map((i) => (
            <span
              key={i}
              className={`block h-1.5 rounded-full transition-all ${
                i === 0 ? 'w-6 bg-wire-black' : 'w-1.5 bg-wire-pale'
              }`}
            />
          ))}
        </div>

        {/* Mobile-friendly Place an order CTA below the carousel */}
        <div className="max-w-[1440px] mx-auto px-8 mt-6 sm:hidden">
          <Link to="/catering/order" className="btn-primary w-full inline-flex items-center justify-center">
            Place catering order
          </Link>
        </div>
      </section>

      {/* ── Catering FAQs (full content width to match the rest of the page) ── */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-3xl font-semibold mb-10">Catering FAQs</h2>
          <div>
            {faqs.map((faq) => (
              <details key={faq.q} className="border-b border-wire-pale py-5 group">
                <summary className="text-sm font-semibold cursor-pointer flex items-center justify-between list-none">
                  {faq.q}
                  <svg className="w-4 h-4 text-wire-mid flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-sm text-wire-mid leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inline catering inquiry form - left: still-have-questions copy,
          right: form. Mirrors the contact page layout for visual consistency. */}
      <section className="py-16 bg-wire-bg">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Left - heading + supporting copy */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">Still have questions?</h2>
              <p className="text-sm text-wire-dark leading-relaxed">
                Tell us about your event and we'll find the best options for you.
              </p>
            </div>

            {/* Right - inline form */}
            {submitted ? (
              <div className="bg-white border border-wire-pale p-8 text-center flex flex-col items-center justify-center min-h-[360px]">
                <div className="w-12 h-12 rounded-full bg-wire-ghost mb-5 flex items-center justify-center">
                  <svg className="w-6 h-6 text-wire-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Request received</h3>
                <p className="text-sm text-wire-mid max-w-xs">
                  Thanks - our catering team will get back to you within a few hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-xs font-medium mb-1.5">Your name <span className="text-wire-mid">*</span></label>
                  <input required type="text" value={form.name} onChange={set('name')} className="input-field w-full" placeholder="Eg. Jane Doe" />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5">Phone number <span className="text-wire-mid">*</span></label>
                  <input required type="tel" value={form.phone} onChange={set('phone')} className="input-field w-full" placeholder="Eg. (212) 555-1234" />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5">Email <span className="text-wire-mid">*</span></label>
                  <input required type="email" value={form.email} onChange={set('email')} className="input-field w-full" placeholder="Eg. jane@company.com" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5">Event type</label>
                    <div className="relative">
                      <select value={form.eventType} onChange={set('eventType')} className="input-field w-full appearance-none pr-8">
                        <option value="">Select event type</option>
                        {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wire-mid pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5">Number of guests</label>
                    <input type="number" min={1} value={form.guests} onChange={set('guests')} className="input-field w-full" placeholder="Eg. 25" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5">Event date</label>
                  <input type="date" value={form.date} onChange={set('date')} className="input-field w-full" />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5">Anything else?</label>
                  <textarea value={form.message} onChange={set('message')} rows={4} className="input-field w-full resize-none" placeholder="Dietary needs, menu interests, budget, anything that helps us tailor the proposal." />
                </div>

                <button type="submit" className="w-full py-3 bg-wire-black text-white text-sm font-medium hover:bg-wire-dark transition-colors">
                  Send request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <ComesSayHello />
      <Footer />
    </div>
  )
}
