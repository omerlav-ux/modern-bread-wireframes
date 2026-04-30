import { useState, useRef, useEffect } from 'react'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'
import ProductCard from '../components/catalog/ProductCard'
import SidebarFilters from '../components/catalog/SidebarFilters'
import SortDropdown from '../components/catalog/SortDropdown'

// Popular states shown at top of the list
const popularStates = ['New York', 'California', 'Texas', 'Florida', 'New Jersey', 'Illinois', 'Pennsylvania', 'Massachusetts']

const allStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming',
]

// States not in popularStates (for the second group)
const otherStates = allStates.filter(s => !popularStates.includes(s))

// Behind the scenes: map state → delivery estimate (warehouse routing is invisible to user)
const getDeliveryEstimate = (state: string) => {
  const today = new Date()
  const day = today.getDay() // 0=Sun, 1=Mon ... 6=Sat
  const isThisWeek = day <= 3 // Mon-Wed → arrives Friday
  return isThisWeek ? 'Arrives this Friday' : 'Arrives next Monday'
}

// Default state used as a fallback when the user dismisses the modal without
// picking. Once IP-based detection is wired up, this will be replaced by a
// real geolocation lookup and the modal can become a confirmation step instead
// of a primary input.
const DEFAULT_FALLBACK_STATE = 'New York'

const products = [
  { name: 'Everything Bagel 6-Pack', price: '$24.00' },
  { name: 'Sesame Bagel 6-Pack', price: '$24.00' },
  { name: 'Classic NY Sourdough', price: '$18.00' },
  { name: 'Chocolate Babka', price: '$32.00' },
  { name: 'Blueberry Muffin Dozen', price: '$36.00' },
  { name: 'Cinnamon Raisin Loaf', price: '$20.00' },
  { name: "Orly's Signature Blend", price: '$28.00' },
  { name: 'Lemon Poppy Seed Cake', price: '$38.00' },
  { name: 'Baking Mix - Bagel', price: '$14.00' },
  { name: 'Baking Mix - Challah', price: '$14.00' },
  { name: 'Holiday Rugelach Box', price: '$44.00' },
  { name: 'Assorted Mini Muffin Box', price: '$30.00' },
]

const filters = [
  { label: 'Item type', options: ['Bagels & Breads', 'Cakes & Sweets', 'Specials', 'Baking Mixes', 'Blends by Orly'] },
  { label: 'Price range', options: ['Under $20', '$20-$35', '$35-$50', 'Over $50'] },
]

export default function ShippingCatalogPage() {
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [showPopup, setShowPopup] = useState(true)
  // Pre-fill with a sensible default so the user can confirm in one click,
  // and so dismissing the modal has a clear fallback. The default is intentionally
  // not framed to the user as "detected" since we're not yet detecting location.
  const [dropdownValue, setDropdownValue] = useState(DEFAULT_FALLBACK_STATE)
  const [search, setSearch] = useState('')
  const [listOpen, setListOpen] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const query = search.toLowerCase()
  const filteredPopular = popularStates.filter(s => s.toLowerCase().includes(query))
  const filteredOther = otherStates.filter(s => s.toLowerCase().includes(query))
  const hasResults = filteredPopular.length > 0 || filteredOther.length > 0

  const selectState = (state: string) => {
    setDropdownValue(state)
    setSearch('')
    setListOpen(false)
  }

  const handleConfirm = () => {
    if (dropdownValue) {
      setSelectedState(dropdownValue)
      setShowPopup(false)
    }
  }

  // Dismiss without explicit confirmation - fall back to whatever's currently
  // in the dropdown (either the IP-guess if untouched, or the user's pick).
  const handleDismiss = () => {
    setSelectedState(dropdownValue)
    setShowPopup(false)
  }

  // Auto-focus search when list opens
  useEffect(() => {
    if (listOpen) searchRef.current?.focus()
  }, [listOpen])

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      {/* State Selection Popup */}
      {showPopup && selectedState === null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white max-w-md w-full p-10 relative">
            {/* Close (×) - dismisses with the IP-guessed default */}
            <button
              onClick={handleDismiss}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 text-wire-mid hover:text-wire-black"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-8">
              <p className="section-label mb-3">Almost there</p>
              <h2 className="text-2xl font-semibold mb-2">Where are we delivering to?</h2>
              <p className="text-sm text-wire-mid leading-relaxed">
                Our East Coast and West Coast kitchens each bake a unique selection - choose your region to see what's available to you.
              </p>
            </div>

            {/* Custom searchable state picker */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider mb-2">Your state</label>
              <div className="relative">
                {/* Trigger / selected value display */}
                <button
                  type="button"
                  onClick={() => setListOpen(o => !o)}
                  className="input-field text-left flex items-center justify-between w-full"
                >
                  <span className={dropdownValue ? 'text-wire-black' : 'text-wire-light'}>
                    {dropdownValue || 'Select a state'}
                  </span>
                  <svg className={`w-4 h-4 text-wire-mid transition-transform ${listOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown list */}
                {listOpen && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-wire-pale shadow-md z-10 mt-0.5">
                    {/* Search input */}
                    <div className="p-2 border-b border-wire-ghost">
                      <div className="flex items-center gap-2 border border-wire-pale px-3 py-2">
                        <svg className="w-3.5 h-3.5 text-wire-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                        </svg>
                        <input
                          ref={searchRef}
                          type="text"
                          value={search}
                          onChange={e => setSearch(e.target.value)}
                          placeholder="Search states..."
                          className="text-sm w-full focus:outline-none placeholder:text-wire-light"
                        />
                        {search && (
                          <button onClick={() => setSearch('')} className="text-wire-light hover:text-wire-mid text-xs">✕</button>
                        )}
                      </div>
                    </div>

                    {/* Options list */}
                    <div className="max-h-52 overflow-y-auto">
                      {!hasResults && (
                        <p className="px-4 py-3 text-sm text-wire-light">No states match "{search}"</p>
                      )}
                      {filteredPopular.length > 0 && (
                        <>
                          {!query && <p className="px-4 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-wire-light">Popular</p>}
                          {filteredPopular.map(s => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => selectState(s)}
                              className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-wire-ghost transition-colors ${dropdownValue === s ? 'font-semibold' : 'text-wire-dark'}`}
                            >
                              {s}
                              {dropdownValue === s && <span className="float-right text-wire-mid">✓</span>}
                            </button>
                          ))}
                        </>
                      )}
                      {filteredOther.length > 0 && (
                        <>
                          {!query && filteredPopular.length > 0 && (
                            <p className="px-4 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-wire-light border-t border-wire-ghost mt-1">All states</p>
                          )}
                          {filteredOther.map(s => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => selectState(s)}
                              className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-wire-ghost transition-colors ${dropdownValue === s ? 'font-semibold' : 'text-wire-dark'}`}
                            >
                              {s}
                              {dropdownValue === s && <span className="float-right text-wire-mid">✓</span>}
                            </button>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Delivery preview - shown once a state is picked */}
            {dropdownValue && (
              <div className="bg-wire-ghost border border-wire-pale px-4 py-3 mb-6 flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-wire-mid flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12" />
                </svg>
                <span>
                  Shipping to <strong>{dropdownValue}</strong> ·{' '}
                  <span className="text-wire-dark">{getDeliveryEstimate(dropdownValue)}</span>
                </span>
              </div>
            )}

            <button
              onClick={handleConfirm}
              disabled={!dropdownValue}
              className={`w-full py-3 text-sm font-medium transition-colors ${
                dropdownValue
                  ? 'bg-wire-black text-white hover:bg-wire-dark'
                  : 'bg-wire-ghost text-wire-pale cursor-not-allowed'
              }`}
            >
              Browse products →
            </button>

            <p className="text-center text-xs text-wire-light mt-4">
              *You can change this selection anytime.
            </p>
          </div>
        </div>
      )}

      {/* Page header */}
      <div className="py-20 bg-wire-bg">
        <div className="max-w-[1440px] mx-auto px-6">
          <h1 className="text-4xl">Nationwide shipping</h1>
        </div>
      </div>

      {/* Delivery location banner - persistent after dismiss/confirm.
          Constrained to catalog width and given vertical breathing room so it
          reads as a floating scope indicator above the catalog, not a sitewide alert. */}
      {selectedState !== null && (
        <div className="max-w-[1440px] mx-auto px-6 pt-8">
          <div className="bg-wire-ghost border border-wire-pale py-3 px-5 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-wire-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>
                Shipping to <strong>{selectedState}</strong>
              </span>
            </div>
            <button
              onClick={() => { setSelectedState(null); setShowPopup(true) }}
              className="text-xs border border-wire-pale bg-white px-3 py-1.5 hover:border-wire-black transition-colors"
            >
              Change
            </button>
          </div>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-6 py-10">
        <div className="flex gap-12">
          <SidebarFilters groups={filters} />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-wire-mid">{products.length} products</p>
              <SortDropdown />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Bagels & Breads', 'Under $35'].map(f => (
                <span key={f} className="flex items-center gap-1.5 border border-wire-pale px-3 py-1 text-xs font-medium">
                  {f}
                  <button className="text-wire-mid hover:text-wire-black">×</button>
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {products.map((p) => (
                <ProductCard
                  key={p.name}
                  name={p.name}
                  price={p.price}
                  href="/shipping/product"
                  addToCart
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ComesSayHello />
      <Footer />
    </div>
  )
}
