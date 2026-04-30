import { Link } from 'react-router-dom'
import { useState } from 'react'

const columns = [
  {
    heading: 'Shop',
    links: [
      { label: 'Explore all products', href: '/shipping' },
      { label: 'Bagels & breads', href: '/shipping' },
      { label: 'Cakes & sweets', href: '/shipping' },
      { label: 'Specials / seasonal', href: '/shipping' },
      { label: 'Baking mixes', href: '/shipping' },
      { label: 'Online gift card', href: '/gift-card' },
      { label: 'In-store gift card', href: '/gift-card' },
    ],
  },
  {
    heading: 'Order',
    links: [
      { label: 'Pre-order', href: '/pre-orders' },
      { label: 'Same day delivery', href: '#' },
      { label: 'Nationwide shipping', href: '/shipping' },
      { label: 'Catering & events', href: '/catering/order' },
    ],
  },
  {
    heading: 'Locations',
    links: [
      { label: 'New York', href: '/locations' },
      { label: 'New Jersey', href: '/locations' },
      { label: 'California', href: '/locations' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Our story', href: '/about' },
      { label: 'Press', href: '/press' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Testimonials', href: '/about' },
      { label: 'Kashrut', href: '/about' },
      { label: 'Gluten free', href: '/about' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Contact us', href: '/contact' },
      { label: 'Terms & conditions', href: '#' },
      { label: 'Privacy policy', href: '#' },
      { label: 'Accessibility', href: '#' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  return (
    <footer className="bg-wire-bg border-t border-wire-pale pt-12 pb-8">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex gap-8">
          {/* Link columns */}
          <div className="flex-1 grid grid-cols-5 gap-6">
            {columns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-xs font-semibold mb-4 text-wire-black">{col.heading}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.href} className="text-xs text-wire-mid hover:text-wire-black transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="w-72 flex-shrink-0">
            <p className="text-xs text-wire-dark leading-relaxed mb-4">
              Handcrafted with heart, Modern Bread & Bagels is redefining the artisanal bakery experience. We believe that exceptional quality and inclusive baking go hand-in-hand, bringing the perfect chew and the sweetest crumb to every table, nationwide.
            </p>
            <p className="text-xs text-wire-dark mb-3">
              Stay in the loop. Get fresh news and exclusive offers, and earn 5% off your first order
            </p>
            <div className="flex border border-wire-pale mb-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Sign me up"
                className="flex-1 text-xs px-3 py-2 focus:outline-none bg-white placeholder:text-wire-light"
              />
              <button className="px-3 py-2 bg-white border-l border-wire-pale hover:bg-wire-ghost">
                <svg className="w-3.5 h-3.5 text-wire-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <label className="flex items-center gap-2 cursor-pointer mb-5">
              <input
                type="checkbox"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
                className="w-3 h-3"
              />
              <span className="text-[10px] text-wire-light">I agree to the terms & conditions</span>
            </label>
            <div className="flex items-center gap-3">
              <a href="#" className="text-wire-mid hover:text-wire-black" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-wire-mid hover:text-wire-black" aria-label="Instagram">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
                  <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
