import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'

// Real Modern Bread & Bagel locations.
// Source: modernbreadandbagel.com/locations
//
// pickupUrl is a placeholder deep link to the Toast online-ordering page for
// each location. Replace with real per-location Toast URLs from the brand
// before launch - the slug-based pattern shown is illustrative.
const TOAST_BASE = 'https://order.toasttab.com/online/modern-bread-bagel'
const locations = [
  { id: 'uws', region: 'new-york', name: 'Upper West Side', address: '472 Columbus Ave, New York, NY 10024', slug: 'upper-west-side', pickupUrl: `${TOAST_BASE}-upper-west-side` },
  { id: 'ues', region: 'new-york', name: 'Upper East Side', address: '1427 3rd Ave, New York, NY 10028', slug: 'upper-east-side', pickupUrl: `${TOAST_BASE}-upper-east-side` },
  { id: 'chelsea', region: 'new-york', name: 'Chelsea', address: '139 West 14th Street, New York, NY 10011', slug: 'chelsea', pickupUrl: `${TOAST_BASE}-chelsea` },
  { id: 'midtown-east', region: 'new-york', name: 'Midtown East', address: '630 Lexington Ave, New York, NY 10022', slug: 'midtown-east', pickupUrl: `${TOAST_BASE}-midtown-east` },
  { id: 'englewood', region: 'new-jersey', name: 'Good Food by Modern (Englewood)', address: '43 E Palisade Ave, Englewood, NJ 07631', slug: 'englewood', pickupUrl: `${TOAST_BASE}-englewood` },
  { id: 'woodland-hills', region: 'california', name: 'Woodland Hills', address: '6256 Topanga Canyon Blvd, Woodland Hills, CA 91367', slug: 'woodland-hills', pickupUrl: `${TOAST_BASE}-woodland-hills` },
  { id: 'santa-monica', region: 'california', name: 'Santa Monica', address: '1511c Montana Ave, Santa Monica, CA 90403', slug: 'santa-monica', pickupUrl: `${TOAST_BASE}-santa-monica` },
  { id: 'beverly-hills', region: 'california', name: 'Beverly Hills', address: '260 N Beverly Dr, Beverly Hills, CA 90210', slug: 'beverly-hills', pickupUrl: `${TOAST_BASE}-beverly-hills` },
  { id: 'silverlake', region: 'california', name: 'Silverlake', address: '1529 Griffith Park Boulevard, Los Angeles, CA 90026', slug: 'silverlake', pickupUrl: `${TOAST_BASE}-silverlake` },
]

const tabs = ['All locations', 'New York', 'New Jersey', 'California']

export default function LocationsPage() {
  const [activeTab, setActiveTab] = useState('All locations')
  const [zipQuery, setZipQuery] = useState('')
  const regionRefs = useRef<Record<string, HTMLElement | null>>({})

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    if (tab !== 'All locations') {
      const key = tab.toLowerCase().replace(' ', '-')
      regionRefs.current[key]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const regions = [
    { key: 'new-york', label: 'New York', locations: locations.filter(l => l.region === 'new-york') },
    { key: 'new-jersey', label: 'New Jersey', locations: locations.filter(l => l.region === 'new-jersey') },
    { key: 'california', label: 'California', locations: locations.filter(l => l.region === 'california') },
  ]

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      {/* Page header with ZIP / city search to find the closest venue.
          Wireframe-only: submit doesn't actually filter. */}
      <div className="bg-wire-bg py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <h1 className="text-4xl font-semibold mb-6">Locations</h1>
          <p className="text-sm text-wire-dark mb-6 max-w-md">
            Find your nearest Modern. Enter a ZIP code or city to see the closest store.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-2 max-w-md"
          >
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wire-mid pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input
                type="text"
                value={zipQuery}
                onChange={(e) => setZipQuery(e.target.value)}
                placeholder="Enter ZIP or city"
                className="input-field bg-white pl-10"
              />
            </div>
            <button type="submit" className="btn-primary">
              Find nearest
            </button>
          </form>
        </div>
      </div>

      {/* Region tabs */}
      <div className="sticky top-14 z-20 bg-white border-b border-wire-pale">
        <div className="max-w-[1440px] mx-auto px-8 flex gap-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-wire-black text-wire-black'
                  : 'border-transparent text-wire-mid hover:text-wire-dark'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Location cards by region */}
      <div className="max-w-[1440px] mx-auto px-8 py-12">
        {regions.map(({ key, label, locations: regionLocs }) => (
          <div
            key={key}
            ref={(el) => { regionRefs.current[key] = el }}
            className="mb-16 scroll-mt-32"
          >
            <h2 className="text-2xl font-semibold mb-6">{label}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {regionLocs.map((loc) => (
                <article
                  key={loc.id}
                  className="card p-6 flex flex-col hover:border-wire-black transition-colors"
                >
                  {/* Upper area (image + name + address) is a single link to the
                      location detail page so the whole card feels clickable.
                      The buttons below are separate so they don't nest anchors. */}
                  <Link to={`/locations/${loc.slug}`} className="block group">
                    <div className="img-placeholder aspect-[5/3] mb-5 text-xs">Store image</div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:underline">{loc.name}</h3>
                    <p className="text-xs text-wire-dark mb-5 leading-relaxed">{loc.address}</p>
                  </Link>
                  <div className="flex items-center gap-2 mt-auto">
                    {/* Order now → opens the Toast online-ordering page for this
                        location in a new tab, with the location pre-selected. */}
                    <a
                      href={loc.pickupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-wire-black text-white px-4 py-2.5 text-xs font-medium hover:bg-wire-dark transition-colors text-center"
                    >
                      Order now
                    </a>
                    <Link
                      to={`/locations/${loc.slug}`}
                      className="flex-1 border border-wire-black text-wire-black px-4 py-2.5 text-xs font-medium hover:bg-wire-ghost transition-colors text-center"
                    >
                      More info
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ComesSayHello />
      <Footer />
    </div>
  )
}
