import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'
import PreOrderProductPopup, { type PreOrderProduct } from '../components/global/PreOrderProductPopup'

const categories = ['Bread & bagel boxes', 'Open face boxes', 'Companion boxes']

const products = [
  { name: 'Bagel box', desc: '12 assorted bagles', price: '$55' },
  { name: 'Bread box', desc: '12 assorted sliced bread and rolls', price: '$55' },
  { name: 'Bagel box', desc: '12 assorted bagles', price: '$55' },
  { name: 'Bread box', desc: '12 assorted sliced bread and rolls', price: '$55' },
  { name: 'Bagel box', desc: '12 assorted bagles', price: '$55' },
  { name: 'Bread box', desc: '12 assorted sliced bread and rolls', price: '$55' },
  { name: 'Bagel box', desc: '12 assorted bagles', price: '$55' },
  { name: 'Bread box', desc: '12 assorted sliced bread and rolls', price: '$55' },
]

export default function CateringCatalogPage() {
  const [activeCategory, setActiveCategory] = useState('Bread & bagel boxes')
  const [fulfillment, setFulfillment] = useState<'Pickup' | 'Delivery'>('Pickup')
  const [popupProduct, setPopupProduct] = useState<PreOrderProduct | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 py-3">
        <div className="flex items-center gap-2 text-xs text-wire-mid">
          <Link to="/" className="hover:text-wire-black">Place an order</Link>
          <span>/</span>
          <span className="text-wire-black">Catering</span>
        </div>
      </div>

      {/* Page header */}
      <div className="bg-wire-bg py-10">
        <div className="max-w-[1440px] mx-auto px-6">
          <h1 className="text-4xl font-semibold">Catering</h1>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-8">
        {/* Location + status */}
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-4 h-4 text-wire-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm text-wire-dark">Columbus Avenue</span>
        </div>
        <div className="flex items-center gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 border border-wire-pale px-3 py-1 text-xs font-medium rounded-full">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
            Accepting orders
          </span>
          <span className="border border-wire-pale px-3 py-1 text-xs font-medium rounded-full">Min order · $25</span>
        </div>

        {/* Pickup / Delivery toggle */}
        <div className="flex border border-wire-pale w-fit mb-5">
          {(['Pickup', 'Delivery'] as const).map(t => (
            <button
              key={t}
              onClick={() => setFulfillment(t)}
              className={`px-8 py-2 text-sm font-medium transition-colors ${
                fulfillment === t ? 'bg-wire-black text-white' : 'text-wire-mid hover:bg-wire-ghost'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Time + address */}
        <div className="space-y-1 mb-8 text-xs text-wire-dark">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-wire-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Pickup time: Tomorrow 9:03AM-9:15AM. <button className="underline text-wire-mid">Change</button></span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-wire-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Pickup Address: 472 Columbus Avenue, New York, NY 10024. <button className="underline text-wire-mid">Change</button></span>
          </div>
        </div>
      </div>

      {/* Category tabs - sticky under the nav, full-width bar */}
      <div className="sticky top-14 z-20 bg-white border-b border-wire-pale">
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between gap-4">
          <div className="flex gap-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-4 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  activeCategory === cat ? 'border-wire-black text-wire-black' : 'border-transparent text-wire-mid hover:text-wire-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <Link to="/contact" className="flex items-center gap-1.5 text-xs text-wire-mid hover:text-wire-black border border-wire-pale px-3 py-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact us
          </Link>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-8">
        {/* Section title + note */}
        <h2 className="text-2xl font-semibold mb-2">Platters and Catering</h2>
        <p className="text-xs text-wire-mid mb-1">All orders must be made at least 48 HOURS in advance.</p>
        <p className="text-xs text-wire-mid mb-1">For same day orders: <Link to="#" className="underline">Click here</Link></p>
        <p className="text-xs text-wire-mid mb-8">For pre-orders: <Link to="/pre-orders" className="underline">Click here</Link></p>

        {/* Product grid - click opens the catering item as a modal popup */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((p, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setPopupProduct({ name: p.name, subtitle: p.desc, price: p.price })}
              className="border border-wire-pale p-4 flex gap-4 hover:border-wire-black transition-colors group text-left"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm mb-1 group-hover:underline">{p.name}</h3>
                <p className="text-xs text-wire-mid leading-relaxed mb-3">{p.desc}</p>
                <p className="text-sm font-semibold">{p.price}</p>
              </div>
              <div className="img-placeholder w-24 h-20 flex-shrink-0 text-xs border">Item</div>
            </button>
          ))}
        </div>
      </div>

      <ComesSayHello />
      <Footer />

      {popupProduct && (
        <PreOrderProductPopup
          product={popupProduct}
          onClose={() => setPopupProduct(null)}
        />
      )}
    </div>
  )
}
