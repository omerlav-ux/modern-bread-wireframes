import { useEffect, useMemo, useRef, useState } from 'react'
import {
  DEFAULT_STORE_LOCATION_ID,
  storeLocations,
  type StoreLocation,
} from '../../constants/storeLocations'

type Variant = 'pre-order' | 'catering'

type Props = {
  open: boolean
  variant: Variant
  onComplete: (location: StoreLocation) => void
}

function digitsOnly(s: string): string {
  return s.replace(/\D/g, '')
}

function filterByQuery(query: string): StoreLocation[] {
  const raw = query.trim()
  if (!raw) return storeLocations
  const q = raw.toLowerCase()
  const zipDigits = digitsOnly(raw)
  return storeLocations.filter((loc) => {
    const nameOk = loc.name.toLowerCase().includes(q)
    const addrOk = loc.address.toLowerCase().includes(q)
    const zipOk =
      zipDigits.length >= 3 && digitsOnly(loc.address).includes(zipDigits)
    return nameOk || addrOk || zipOk
  })
}

export default function LocalOrderLocationModal({ open, variant, onComplete }: Props) {
  const [selectedId, setSelectedId] = useState(DEFAULT_STORE_LOCATION_ID)
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    setSelectedId(DEFAULT_STORE_LOCATION_ID)
    setQuery('')
  }, [open])

  useEffect(() => {
    if (!open) return
    searchRef.current?.focus()
  }, [open])

  const filtered = useMemo(() => filterByQuery(query), [query])

  const nyLocations = useMemo(
    () => filtered.filter((l) => l.region === 'new-york'),
    [filtered],
  )
  const otherFiltered = useMemo(
    () => filtered.filter((l) => l.region !== 'new-york'),
    [filtered],
  )

  const selected = storeLocations.find((l) => l.id === selectedId) ?? storeLocations[0]

  useEffect(() => {
    if (!open) return
    if (filtered.length === 0) return
    if (filtered.some((l) => l.id === selectedId)) return
    setSelectedId(filtered[0].id)
  }, [open, filtered, selectedId])

  const cta = variant === 'pre-order' ? 'Continue to pre-orders →' : 'Continue to catering →'

  const finish = (loc: StoreLocation) => {
    onComplete(loc)
  }

  const handleConfirm = () => {
    finish(selected)
  }

  const handleDismiss = () => {
    finish(selected)
  }

  if (!open) return null

  const showRegionLabels = !query.trim()

  const renderRow = (loc: StoreLocation) => (
    <button
      key={loc.id}
      type="button"
      onClick={() => setSelectedId(loc.id)}
      className={`block w-full text-left px-4 py-3 text-sm hover:bg-wire-ghost transition-colors border-b border-wire-ghost last:border-b-0 ${
        selectedId === loc.id ? 'bg-wire-ghost font-semibold' : 'text-wire-dark'
      }`}
    >
      <span className="font-medium">{loc.name}</span>
      <span className="block text-xs text-wire-mid mt-0.5 leading-relaxed">{loc.address}</span>
    </button>
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white max-w-md w-full p-10 relative max-h-[90vh] flex flex-col">
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 text-wire-mid hover:text-wire-black"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6 shrink-0">
          <p className="section-label mb-3">Almost there</p>
          <h2 className="text-2xl font-semibold mb-2">Choose your location</h2>
          <p className="text-sm text-wire-mid leading-relaxed">
            Select the store nearest to you. Pickup and delivery options are on the next screen.
          </p>
        </div>

        <div className="border border-wire-pale mb-4 flex flex-col max-h-[280px] min-h-[160px] overflow-hidden shrink-0">
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-wire-ghost shrink-0 bg-white">
            <svg className="w-3.5 h-3.5 text-wire-light shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a city or enter ZIP code"
              aria-label="Search locations by city or ZIP code"
              className="text-sm w-full focus:outline-none placeholder:text-wire-light"
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} className="text-wire-light hover:text-wire-mid text-xs shrink-0">
                ✕
              </button>
            )}
          </div>
          <div className="overflow-y-auto min-h-0 flex-1">
            {filtered.length === 0 && (
              <p className="px-4 py-6 text-sm text-wire-light text-center">No locations match. Try another city or ZIP.</p>
            )}
            {filtered.length > 0 && (
              <>
                {nyLocations.length > 0 && (
                  <>
                    {showRegionLabels && (
                      <p className="px-4 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-wire-light sticky top-0 bg-white z-[1]">
                        New York
                      </p>
                    )}
                    {nyLocations.map(renderRow)}
                  </>
                )}
                {otherFiltered.length > 0 && (
                  <>
                    {showRegionLabels && (
                      <p
                        className={`px-4 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-wire-light sticky top-0 bg-white z-[1] ${
                          nyLocations.length > 0 ? 'border-t border-wire-ghost' : ''
                        }`}
                      >
                        New Jersey & California
                      </p>
                    )}
                    {otherFiltered.map(renderRow)}
                  </>
                )}
              </>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          className="w-full py-3 text-sm font-medium bg-wire-black text-white hover:bg-wire-dark transition-colors shrink-0"
        >
          {cta}
        </button>

        <p className="text-center text-xs text-wire-light mt-4 shrink-0">You can change your location anytime.</p>
      </div>
    </div>
  )
}
