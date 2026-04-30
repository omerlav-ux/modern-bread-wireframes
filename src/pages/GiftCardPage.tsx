import { useState } from 'react'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'
import ProductCard from '../components/catalog/ProductCard'

const amounts = ['$25', '$50', '$100', '$150', '$200']

const favorites = [
  { name: 'Everything Bagel 6-Pack', price: '$24.00', href: '/shipping/product' },
  { name: 'Chocolate Babka', price: '$32.00', href: '/shipping/product' },
  { name: 'Blueberry Muffin Dozen', price: '$36.00', href: '/shipping/product' },
  { name: 'Classic NY Sourdough', price: '$18.00', href: '/shipping/product' },
]

export default function GiftCardPage() {
  const [amount, setAmount] = useState('$50')
  const [recipient, setRecipient] = useState<'someone' | 'myself'>('someone')

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      {/* Page header */}
      <div className="bg-wire-bg py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <h1 className="text-4xl">Send a gift card</h1>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left: description */}
          <div>
            <div className="img-placeholder aspect-[4/3] mb-8">
              <span className="text-wire-light">Gift card design - product illustration</span>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Why gift a Modern Bread & Bagels card?</h2>
            <ul className="space-y-3">
              {[
                'Redeemable for any product - shipping, pre-orders, or in-store',
                'Delivered instantly by email',
                'Never expires',
                'Perfect for anyone with dietary restrictions',
                'Fully gluten-free and Kosher menu',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-wire-dark">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="card p-8">
            <h3 className="font-semibold text-lg mb-6">Customize your gift card</h3>

            {/* Amount selector */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-3">Amount</label>
              <div className="flex gap-2 flex-wrap">
                {amounts.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAmount(a)}
                    className={`px-5 py-2.5 text-sm font-medium border transition-colors ${
                      amount === a ? 'bg-wire-black text-white border-wire-black' : 'border-wire-pale text-wire-dark hover:border-wire-mid'
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            {/* Recipient toggle */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-3">Who is this for?</label>
              <div className="flex border border-wire-pale w-fit">
                {(['someone', 'myself'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setRecipient(type)}
                    className={`px-6 py-2.5 text-sm font-medium capitalize transition-colors ${recipient === type ? 'bg-wire-black text-white' : 'text-wire-mid hover:bg-wire-ghost'}`}
                  >
                    {type === 'someone' ? 'For someone else' : 'For myself'}
                  </button>
                ))}
              </div>
            </div>

            {/* Recipient fields (conditional) */}
            {recipient === 'someone' && (
              <div className="mb-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2">Recipient name</label>
                    <input type="text" placeholder="Their name" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2">Recipient email</label>
                    <input type="email" placeholder="their@email.com" className="input-field" />
                  </div>
                </div>
              </div>
            )}

            {/* Delivery date */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
                {recipient === 'someone' ? 'Delivery date' : 'Send to my email'}
              </label>
              {recipient === 'someone' ? (
                <>
                  <input type="date" className="input-field" />
                  <p className="text-xs text-wire-mid mt-1.5">The gift card will be emailed to them on this date</p>
                </>
              ) : (
                <input type="email" placeholder="your@email.com" className="input-field" />
              )}
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2">Personal message <span className="text-wire-light font-normal normal-case">(optional)</span></label>
              <textarea
                rows={3}
                placeholder="Add a personal note..."
                className="input-field resize-none"
              />
            </div>

            <button className="btn-primary w-full text-base py-4">
              Purchase {amount} gift card
            </button>
            <p className="text-xs text-center text-wire-mid mt-3">Delivered instantly by email. Never expires.</p>
          </div>
        </div>

        {/* Shop favorites */}
        <div className="mt-24 pt-12">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-2">Not sure what to get?</p>
              <h2 className="text-3xl font-semibold">Shop our favorites</h2>
            </div>
            <a href="/shipping" className="btn-ghost">See all products →</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {favorites.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </div>

      <ComesSayHello />
      <Footer />
    </div>
  )
}
