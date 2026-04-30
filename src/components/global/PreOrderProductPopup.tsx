import { useState } from 'react'

export interface PreOrderProduct {
  name: string
  subtitle?: string
  price: string
}

interface Props {
  product: PreOrderProduct
  onClose: () => void
}

/**
 * Pre-order product popup - renders the equivalent Wix Restaurants product
 * as a modal on top of the Wix Stores PDP. Adding to cart here adds to the
 * Wix Restaurants pre-order cart, NOT the Wix Stores cart.
 */
export default function PreOrderProductPopup({ product, onClose }: Props) {
  const [qty, setQty] = useState(0)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-wire-mid hover:text-wire-black z-10"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Product image */}
        <div className="img-placeholder aspect-[16/9] border-0">
          <span className="text-wire-light">Product image</span>
        </div>

        <div className="px-8 pt-6 pb-8">
          {/* Title + subtitle + price */}
          <h2 className="text-3xl font-semibold mb-1">{product.name}</h2>
          {product.subtitle && (
            <p className="text-sm text-wire-mid mb-2">{product.subtitle}</p>
          )}
          <p className="text-base font-medium mb-6">{product.price}</p>

          {/* Special request */}
          <label className="block mb-6">
            <span className="block text-sm font-medium mb-2">Special request</span>
            <textarea
              rows={3}
              placeholder="We'll do our best to accommodate any requests when possible"
              className="w-full border border-wire-pale px-3 py-2 text-sm placeholder:text-wire-light focus:outline-none focus:border-wire-black resize-none"
            />
          </label>

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Quantity</p>
            <div className="inline-flex items-center border border-wire-pale">
              <button
                onClick={() => setQty(Math.max(0, qty - 1))}
                className="w-10 h-10 flex items-center justify-center text-wire-dark hover:bg-wire-ghost"
                aria-label="Decrease quantity"
              >−</button>
              <span className="w-10 h-10 flex items-center justify-center text-sm font-medium">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-10 h-10 flex items-center justify-center text-wire-dark hover:bg-wire-ghost"
                aria-label="Increase quantity"
              >+</button>
            </div>
          </div>

          {/* Add to cart (Wix Restaurants pre-order cart) */}
          <button
            disabled={qty === 0}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
