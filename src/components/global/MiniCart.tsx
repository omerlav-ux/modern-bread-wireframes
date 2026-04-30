import { Link } from 'react-router-dom'

interface Props {
  onClose: () => void
}

// Hard-coded sample cart so the wireframe can demonstrate the side-panel UX
// without a real cart store. Replace with real cart state when wiring up checkout.
const sampleItems = [
  { name: 'Everything Bagel 6-Pack', variant: 'Ships nationwide', qty: 1, price: 24, image: 'Bagel pack' },
  { name: 'Chocolate Babka', variant: 'Ships nationwide', qty: 2, price: 32, image: 'Babka' },
]

export default function MiniCart({ onClose }: Props) {
  const subtotal = sampleItems.reduce((sum, i) => sum + i.qty * i.price, 0)
  const itemCount = sampleItems.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div className="fixed inset-0 z-[60] flex justify-end" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Panel — slides in from the right */}
      <aside
        className="relative bg-white w-full max-w-md h-full shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-wire-pale">
          <h2 className="text-lg font-semibold">Your cart ({itemCount})</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="p-1.5 text-wire-mid hover:text-wire-black"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Item list */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <ul className="divide-y divide-wire-pale">
            {sampleItems.map((item, i) => (
              <li key={i} className="py-5 flex gap-4">
                <div className="img-placeholder w-20 h-20 flex-shrink-0 text-[10px]">{item.image}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium mb-0.5">{item.name}</p>
                  <p className="text-xs text-wire-mid mb-3">{item.variant}</p>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center border border-wire-pale">
                      <button className="w-7 h-7 flex items-center justify-center text-wire-dark hover:bg-wire-ghost text-sm">-</button>
                      <span className="w-7 h-7 flex items-center justify-center text-xs font-medium">{item.qty}</span>
                      <button className="w-7 h-7 flex items-center justify-center text-wire-dark hover:bg-wire-ghost text-sm">+</button>
                    </div>
                    <p className="text-sm font-semibold">${(item.qty * item.price).toFixed(2)}</p>
                  </div>
                </div>
                <button aria-label="Remove" className="text-wire-mid hover:text-wire-black self-start">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          {/* Recommended add-on (small upsell) */}
          <div className="mt-6 pt-5 border-t border-wire-pale">
            <p className="text-xs font-semibold uppercase tracking-wider text-wire-mid mb-3">You might also like</p>
            <div className="flex items-center gap-3">
              <div className="img-placeholder w-14 h-14 flex-shrink-0 text-[10px]">Item</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-tight">Salted honey pull-apart biscuits</p>
                <p className="text-xs text-wire-mid">$28.00</p>
              </div>
              <button className="text-xs border border-wire-black px-3 py-1.5 hover:bg-wire-black hover:text-white transition-colors font-medium">Add</button>
            </div>
          </div>
        </div>

        {/* Footer — subtotal + CTAs */}
        <div className="border-t border-wire-pale px-6 py-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-wire-dark">Subtotal</span>
            <span className="text-base font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <p className="text-xs text-wire-mid">Shipping and taxes calculated at checkout.</p>
          <Link
            to="#"
            onClick={onClose}
            className="btn-primary w-full block text-center"
          >
            Checkout - ${subtotal.toFixed(2)}
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary w-full"
          >
            View full cart
          </button>
        </div>
      </aside>
    </div>
  )
}
