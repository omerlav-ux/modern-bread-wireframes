import { Link } from 'react-router-dom'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'

const faqs = [
  {
    category: 'General questions',
    items: [
      {
        q: "We're interested in buying your products wholesale. How do we proceed?",
        a: "We are limiting new accounts due to the space capacity, but please reach out to us at support@tastebuckconcepts.com and we will add you to our list and reach out to you when we are ready to add your account.",
        defaultOpen: true,
      },
      { q: 'Do you do gift certificates?', a: 'Yes! We offer both online and in-store gift cards. Visit our gift card page to purchase one.' },
    ],
  },
  {
    category: 'Ordering',
    items: [
      { q: 'Can I make an order online?', a: 'Yes - you can place pre-orders, nationwide shipping orders, and catering orders directly on our website.' },
      { q: 'How far do you deliver?', a: 'We offer nationwide shipping across the US and local delivery within our service areas in NY, NJ, and CA.' },
      { q: 'What is the difference between placing an online order and a pre-order?', a: 'A pre-order is scheduled for pickup or local delivery from a specific location, with 36 hours notice required. An online order through our shipping catalog ships nationwide overnight.' },
      { q: "Is your cafe dine-in only or take out too?", a: 'We offer both dine-in and take-out at all our locations.' },
      { q: "I can't place my online order. What should I do?", a: 'Please reach out to us via the contact form or call your nearest location and we will be happy to assist.' },
    ],
  },
  {
    category: 'Catering',
    items: [
      { q: 'Do you offer catering for big events?', a: 'Yes! We specialize in catering for events of all sizes. All catering orders must be placed at least 48 hours in advance.' },
      { q: 'Do you take special or custom orders?', a: 'Absolutely. Use the special requests field when ordering and our team will reach out to finalize the details.' },
      { q: 'Can I rent out the space or have a special event on site?', a: 'Please contact us directly to discuss private event options at select locations.' },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      {/* Page header */}
      <div className="bg-wire-bg py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <h1 className="text-4xl font-semibold">FAQs</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12 relative">
        {/* Floating contact button */}
        <div className="fixed right-6 bottom-8 z-30">
          <Link to="/contact" className="flex items-center gap-2 bg-white border border-wire-pale shadow-sm px-4 py-2.5 text-sm font-medium hover:border-wire-black transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact us
          </Link>
        </div>

        {faqs.map((section) => (
          <div key={section.category} className="mb-12">
            <h2 className="text-lg font-semibold mb-4">{section.category}</h2>
            <div>
              {section.items.map((item, idx) => (
                <details
                  key={item.q}
                  className="border-b border-wire-ghost py-4 group"
                  open={idx === 0 && section.category === 'General questions'}
                >
                  <summary className="text-sm font-medium cursor-pointer flex items-start justify-between gap-4 list-none">
                    <span>{item.q}</span>
                    <span className="text-wire-mid flex-shrink-0 text-lg leading-none group-open:hidden">+</span>
                    <span className="text-wire-mid flex-shrink-0 text-lg leading-none hidden group-open:block">−</span>
                  </summary>
                  <p className="mt-3 text-sm text-wire-mid leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ComesSayHello />
      <Footer />
    </div>
  )
}
