import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'

export default function CateringPDPPage() {
  const [qty, setQty] = useState(1)
  const [fulfillment, setFulfillment] = useState<'pickup' | 'delivery'>('pickup')

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      <div className="border-b border-wire-ghost py-3 px-8">
        <div className="max-w-[1440px] mx-auto text-xs text-wire-mid flex items-center gap-2">
          <Link to="/catering" className="hover:text-wire-black">Catering</Link>
          <span>›</span>
          <Link to="/catering/order" className="hover:text-wire-black">Menu</Link>
          <span>›</span>
          <span className="text-wire-black">Bagel Tower (50 pcs)</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 py-12">
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Gallery */}
          <div className="sticky top-24">
            <div className="img-placeholder aspect-square mb-4 relative">
              <span className="text-wire-light">Product image</span>
              <div className="absolute top-3 left-3 bg-white border border-wire-pale text-xs font-bold px-2.5 py-1 tracking-wider">
                SERVES 20-25
              </div>
            </div>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="img-placeholder w-16 h-16 text-[10px]">{i + 1}</div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="section-label mb-1">Bagel Spreads</p>
            <div className="flex items-start justify-between mb-3">
              <h1 className="text-3xl font-semibold">Bagel Tower (50 pcs)</h1>
              <span className="tag border-wire-black text-wire-black bg-wire-ghost mt-1">🎉 Catering</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-2xl font-semibold">From $120.00</p>
              <span className="text-sm text-wire-mid border border-wire-pale px-2 py-0.5">SERVES 20-25</span>
            </div>
            <p className="text-sm text-wire-dark leading-relaxed mb-8">
              A stunning tower of 50 freshly baked assorted bagels - perfect as a centerpiece for your event. Includes a variety of flavors with cream cheese spreads and lox. Fully gluten-free and Kosher.
            </p>

            {/* Fulfillment toggle */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2">Fulfillment</label>
              <div className="flex border border-wire-pale w-fit">
                {(['pickup', 'delivery'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFulfillment(type)}
                    className={`px-6 py-2.5 text-sm font-medium capitalize transition-colors ${fulfillment === type ? 'bg-wire-black text-white' : 'text-wire-mid hover:bg-wire-ghost'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
                {fulfillment === 'pickup' ? 'Pickup location' : 'Delivery from'}
              </label>
              <select className="input-field">
                <option>Select a location</option>
                <option>Upper West Side, NY</option>
                <option>Brooklyn, NY</option>
                <option>Teaneck, NJ</option>
                <option>Los Angeles, CA</option>
              </select>
            </div>

            {/* Date */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2">Event date</label>
              <input type="date" className="input-field" />
              <p className="text-xs text-wire-mid mt-1.5">Minimum 48 hours notice required</p>
            </div>

            {/* Special request */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2">Special requests</label>
              <textarea
                rows={3}
                placeholder="Dietary restrictions, setup notes, delivery instructions..."
                className="input-field resize-none"
              />
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2">Quantity</label>
              <div className="flex items-center border border-wire-pale w-fit">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center text-wire-dark hover:bg-wire-ghost">−</button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center text-wire-dark hover:bg-wire-ghost">+</button>
              </div>
            </div>

            <button className="btn-primary w-full mb-3">Add to cart - from ${(120 * qty).toFixed(2)}</button>

            <div className="bg-wire-ghost border border-wire-pale p-4 text-sm mb-6">
              <p className="font-medium mb-1">What happens next?</p>
              <p className="text-wire-mid text-xs leading-relaxed">
                After you place your order, our catering team will review it and send you a personal confirmation email within a few hours. They may follow up with questions.
              </p>
            </div>

            <div className="border-t border-wire-ghost">
              {["What's included", 'Customization options', 'Pickup & delivery info', 'Allergen info'].map((item) => (
                <details key={item} className="border-b border-wire-ghost py-4">
                  <summary className="text-sm font-medium cursor-pointer flex items-center justify-between">
                    {item}
                    <svg className="w-4 h-4 text-wire-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm text-wire-mid leading-relaxed">Details for {item.toLowerCase()} appear here.</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
