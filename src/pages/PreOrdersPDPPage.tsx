import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'

export default function PreOrdersPDPPage() {
  const [qty, setQty] = useState(1)
  const [fulfillment, setFulfillment] = useState<'pickup' | 'delivery'>('pickup')

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      <div className="border-b border-wire-ghost py-3 px-8">
        <div className="max-w-[1440px] mx-auto text-xs text-wire-mid flex items-center gap-2">
          <Link to="/pre-orders" className="hover:text-wire-black">Pre-orders</Link>
          <span>›</span>
          <span className="text-wire-black">Bagel Box - Assorted Dozen</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 py-12">
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Gallery */}
          <div className="sticky top-24">
            <div className="img-placeholder aspect-square mb-4">
              <span className="text-wire-light">Product image</span>
            </div>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="img-placeholder w-16 h-16 text-[10px]">{i + 1}</div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="section-label mb-1">Bagels & Breads</p>
            <div className="flex items-start justify-between mb-3">
              <h1 className="text-3xl font-semibold">Bagel Box - Assorted Dozen</h1>
              <span className="tag border-wire-mid text-wire-mid mt-1">📅 Pre-order</span>
            </div>
            <p className="text-2xl font-semibold mb-4">$42.00</p>
            <p className="text-sm text-wire-dark leading-relaxed mb-8">
              One dozen freshly baked assorted bagels - Everything, Sesame, Plain, and Poppy. Available for pickup or local delivery. Certified gluten-free and Kosher.
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

            {/* Location selector */}
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

            {/* Date picker */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
                {fulfillment === 'pickup' ? 'Pickup date' : 'Delivery date'}
              </label>
              <input type="date" className="input-field" />
              <p className="text-xs text-wire-mid mt-1.5">Minimum 24 hours notice required</p>
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

            <button className="btn-primary w-full mb-3">Add to cart - ${(42 * qty).toFixed(2)}</button>
            <p className="text-xs text-center text-wire-mid">
              Pre-orders and catering items share a cart. Your items are saved between sessions.
            </p>

            <div className="border-t border-wire-ghost mt-6 pt-6">
              {['About this item', 'Allergen info', 'Pickup & delivery info'].map((item) => (
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
