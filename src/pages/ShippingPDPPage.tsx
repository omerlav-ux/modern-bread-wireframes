import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ProductCard from '../components/catalog/ProductCard'

const related = [
  { name: 'Sesame Bagel 6-Pack', price: '$24.00' },
  { name: 'Classic NY Sourdough', price: '$18.00' },
  { name: 'Chocolate Babka', price: '$32.00' },
  { name: 'Blueberry Muffin Dozen', price: '$36.00' },
]

export default function ShippingPDPPage() {
  const [qty, setQty] = useState(1)
  const [activeThumb, setActiveThumb] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      {/* Breadcrumb */}
      <div className="border-b border-wire-ghost py-3 px-6">
        <div className="max-w-[1440px] mx-auto text-xs text-wire-mid flex items-center gap-2">
          <Link to="/shipping" className="hover:text-wire-black">Shipping</Link>
          <span>›</span>
          <Link to="/shipping" className="hover:text-wire-black">Bagels & Breads</Link>
          <span>›</span>
          <span className="text-wire-black">Everything Bagel 6-Pack</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Image gallery */}
          <div className="sticky top-24">
            <div className="img-placeholder aspect-square mb-4">
              <span className="text-wire-light">Product image {activeThumb + 1}</span>
            </div>
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`img-placeholder w-16 h-16 text-[10px] ${i === activeThumb ? 'border-wire-black border-2' : ''}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <div className="mb-1">
              <p className="section-label mb-1">Bagels & Breads</p>
              <h1 className="text-3xl font-semibold">Everything Bagel 6-Pack</h1>
            </div>

            <p className="text-2xl font-semibold mt-4 mb-6">$24.00</p>

            <p className="text-sm text-wire-dark leading-relaxed mb-6">
              Our signature Everything Bagels, baked fresh and shipped overnight. Packed with sesame, poppy seeds, garlic, and onion - the classic NY flavor, gluten-free and Kosher certified.
            </p>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-wire-pale">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center text-wire-dark hover:bg-wire-ghost"
                >−</button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 flex items-center justify-center text-wire-dark hover:bg-wire-ghost"
                >+</button>
              </div>
              <button className="btn-primary flex-1">Add to cart - ${(24 * qty).toFixed(2)}</button>
            </div>

            {/* Same-day fulfillment - opens external Toast ordering. Informational
                only, not part of the Wix Stores cart. */}
            <div className="bg-wire-bg border border-wire-pale mb-6">
              <p className="text-sm font-semibold px-4 pt-4 pb-3">Want it sooner?</p>
              <a
                href="https://order.toasttab.com/online/modern-bread-bagel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 border-t border-wire-pale hover:bg-white transition-colors group"
              >
                <span className="text-base leading-none" aria-hidden="true">⚡</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium group-hover:underline">Order for today</p>
                  <p className="text-xs text-wire-mid mt-0.5 leading-relaxed">Same-day pickup or delivery at your nearest store</p>
                </div>
                <svg className="w-3.5 h-3.5 text-wire-dark flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Details accordion */}
            <div className="border-t border-wire-ghost mt-6">
              {['Ingredients', 'Allergen info', 'Storage & reheating', 'Shipping policy'].map((item) => (
                <details key={item} className="border-b border-wire-ghost py-4">
                  <summary className="text-sm font-medium cursor-pointer flex items-center justify-between">
                    {item}
                    <svg className="w-4 h-4 text-wire-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm text-wire-mid leading-relaxed">
                    Placeholder content for {item.toLowerCase()}. Full details would appear here.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24 pt-12">
          <h2 className="text-2xl font-semibold mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {related.map((p) => (
              <ProductCard key={p.name} name={p.name} price={p.price} href="/shipping/product" />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
