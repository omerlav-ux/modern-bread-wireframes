import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { TOAST_IN_STORE_GIFT_CARD_URL } from '../../constants/external'
import OrderRoutingPopup from './OrderRoutingPopup'
import MiniCart from './MiniCart'

type DropdownId = 'products' | 'locations' | 'about' | 'gift-card' | 'order' | null

const pub = (path: string) => `${import.meta.env.BASE_URL}${path}`

const navLogoImg =
  'block w-auto max-w-[185px] object-contain object-left brightness-[1.12] contrast-[1.02]'

export default function Navigation() {
  const [popupOpen, setPopupOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<DropdownId>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [glutenInfoOpen, setGlutenInfoOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const glutenRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close the gluten-free tooltip when clicking outside it.
  useEffect(() => {
    if (!glutenInfoOpen) return
    const onClick = (e: MouseEvent) => {
      if (glutenRef.current && !glutenRef.current.contains(e.target as Node)) {
        setGlutenInfoOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [glutenInfoOpen])

  const openMenu = (id: DropdownId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(id)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  const cancelClose = (id: DropdownId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(id)
  }

  return (
    <>
      <nav className="bg-white border-b border-wire-pale sticky top-0 z-40">
        <div className="w-full px-6 flex items-center justify-between h-14">

          {/* Logo + gluten-free badge */}
          <div className="flex items-center gap-5 shrink-0">
            <Link
              to="/home"
              className="flex shrink-0 items-center rounded-md bg-wire-bg/35 px-2 py-1 ring-1 ring-wire-ghost/60"
              aria-label="Modern Bread & Bagels"
            >
              <img
                src={pub('assets/modern-logo.png')}
                alt=""
                className={`${navLogoImg} h-7`}
                aria-hidden
              />
            </Link>
            {/* "100% gluten free" badge - rounded tag, clickable, opens an info
                tooltip explaining the dedicated gluten-free, nut-free facility. */}
            <div ref={glutenRef} className="relative hidden lg:block">
              <button
                type="button"
                onClick={() => setGlutenInfoOpen((v) => !v)}
                aria-expanded={glutenInfoOpen}
                className={`flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full transition-colors ${
                  glutenInfoOpen
                    ? 'bg-wire-pale text-wire-black'
                    : 'bg-wire-ghost text-wire-dark hover:bg-wire-pale'
                }`}
              >
                <img src={pub('assets/gluten-free.svg')} alt="" aria-hidden="true" className="w-3.5 h-3.5" />
                <span>100% gluten free</span>
              </button>
              {glutenInfoOpen && (
                <div className="absolute top-full left-0 mt-2 w-[360px] bg-white border border-wire-pale shadow-lg p-5 z-50">
                  <button
                    type="button"
                    onClick={() => setGlutenInfoOpen(false)}
                    aria-label="Close"
                    className="absolute top-2 right-2 p-1.5 text-wire-mid hover:text-wire-black"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="flex items-start gap-2 mb-3 pr-6">
                    <img src={pub('assets/gluten-free.svg')} alt="" aria-hidden="true" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p className="text-xs font-semibold uppercase tracking-wider">100% gluten free</p>
                  </div>
                  <p className="text-xs text-wire-dark leading-relaxed mb-3">
                    Our entire menu - every bagel, every bread, every pastry - is made in our dedicated gluten-free, nut-free kitchen. If you're celiac, highly sensitive, or simply choosing to live gluten-free, you can order anything on our menu with complete confidence.
                  </p>
                  <p className="text-xs text-wire-mid leading-relaxed">
                    100% dedicated facility with zero shared equipment, zero cross-contamination risk, and zero compromises.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Primary nav links */}
          <div className="hidden lg:flex items-center gap-7 text-sm">

            {/* Our products - hover opens full-width mega menu */}
            <div
              className="relative"
              onMouseEnter={() => openMenu('products')}
              onMouseLeave={scheduleClose}
            >
              <Link
                to="/shipping"
                className="flex items-center gap-1 text-wire-dark hover:text-wire-black font-medium"
              >
                Shop
                <svg className={`w-3 h-3 transition-transform ${openDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </Link>
            </div>

            {/* Locations - hover opens full-width mega menu */}
            <div
              className="relative"
              onMouseEnter={() => openMenu('locations')}
              onMouseLeave={scheduleClose}
            >
              <Link
                to="/locations"
                className="flex items-center gap-1 text-wire-dark hover:text-wire-black font-medium"
              >
                Locations
                <svg className={`w-3 h-3 transition-transform ${openDropdown === 'locations' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </Link>
            </div>

            {/* About us */}
            <div
              className="relative"
              onMouseEnter={() => openMenu('about')}
              onMouseLeave={scheduleClose}
            >
              <Link
                to="/about"
                className="flex items-center gap-1 text-wire-dark hover:text-wire-black font-medium"
              >
                About us
                <svg className={`w-3 h-3 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </Link>
              {openDropdown === 'about' && (
                <div
                  className="absolute top-full left-0 pt-1"
                  onMouseEnter={() => cancelClose('about')}
                  onMouseLeave={scheduleClose}
                >
                  <div className="bg-white border border-wire-pale shadow-sm min-w-[160px] py-2">
                    {[
                      { label: 'Our story', href: '/about' },
                      { label: 'Press', href: '/press' },
                      { label: 'FAQs', href: '/faq' },
                    ].map(l => (
                      <Link key={l.label} to={l.href} onClick={() => setOpenDropdown(null)} className="block px-4 py-2 text-sm text-wire-dark hover:bg-wire-ghost">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Gift card */}
            <div
              className="relative"
              onMouseEnter={() => openMenu('gift-card')}
              onMouseLeave={scheduleClose}
            >
              <Link
                to="/gift-card"
                className="flex items-center gap-1 text-wire-dark hover:text-wire-black font-medium"
              >
                Gift card
                <svg className={`w-3 h-3 transition-transform ${openDropdown === 'gift-card' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </Link>
              {openDropdown === 'gift-card' && (
                <div
                  className="absolute top-full left-0 pt-1"
                  onMouseEnter={() => cancelClose('gift-card')}
                  onMouseLeave={scheduleClose}
                >
                  <div className="bg-white border border-wire-pale shadow-sm min-w-[180px] py-2">
                    {[
                      { label: 'In-store gift cards', href: TOAST_IN_STORE_GIFT_CARD_URL, external: true },
                      { label: 'Online gift cards', href: '/gift-card' },
                    ].map((l) =>
                      l.external ? (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-sm text-wire-dark hover:bg-wire-ghost"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          key={l.label}
                          to={l.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-sm text-wire-dark hover:bg-wire-ghost"
                        >
                          {l.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => openMenu('order')}
              onMouseLeave={scheduleClose}
            >
              <button className="flex items-center gap-1.5 bg-wire-black text-white px-4 py-2 text-sm font-medium hover:bg-wire-dark transition-colors">
                Place an order
                <svg className={`w-3 h-3 transition-transform ${openDropdown === 'order' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </button>
              {openDropdown === 'order' && (
                <div
                  className="absolute top-full right-0 pt-1"
                  onMouseEnter={() => cancelClose('order')}
                  onMouseLeave={scheduleClose}
                >
                  <div className="bg-white border border-wire-pale shadow-sm min-w-[200px] py-2">
                    {[
                      { label: 'Same day delivery', href: '#' },
                      { label: 'Pre-orders', href: '/pre-orders' },
                      { label: 'Nationwide shipping', href: '/shipping' },
                      { label: 'Catering & events', href: '/catering/order' },
                    ].map(l => (
                      <Link key={l.label} to={l.href} onClick={() => setOpenDropdown(null)} className="block px-4 py-2 text-sm text-wire-dark hover:bg-wire-ghost">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/contact" className="hidden lg:block text-sm text-wire-dark hover:text-wire-black">Contact us</Link>
            <button className="p-2 text-wire-dark hover:text-wire-black" aria-label="Search">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/></svg>
            </button>
            <button className="p-2 text-wire-dark hover:text-wire-black" aria-label="Account">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
            </button>
            <button onClick={() => setCartOpen(true)} className="p-2 text-wire-dark hover:text-wire-black relative" aria-label="Cart">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute top-1 right-1 bg-wire-black text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full">2</span>
            </button>
            {/* Mobile hamburger */}
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>

        {/* ── Full-width mega menus ── */}

        {openDropdown === 'products' && (
          <div
            className="absolute top-14 left-0 right-0 bg-white border-b border-wire-pale shadow-md z-50"
            onMouseEnter={() => cancelClose('products')}
            onMouseLeave={scheduleClose}
          >
            <div className="w-full px-6 py-8 flex gap-8">
              <div className="flex gap-12 flex-1">
                <div>
                  <p className="text-xs font-semibold text-wire-mid uppercase tracking-wider mb-3">Shop by category</p>
                  <ul className="space-y-2">
                    {['All items', 'Bagels & breads', 'Cakes & sweets', 'Specials', 'Baking mixes'].map(l => (
                      <li key={l}><Link to="/shipping" onClick={() => setOpenDropdown(null)} className="text-sm text-wire-dark hover:text-wire-black hover:underline">{l}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-wire-mid uppercase tracking-wider mb-3">Seasonal specials</p>
                  <ul className="space-y-2">
                    <li><Link to="/shipping" onClick={() => setOpenDropdown(null)} className="text-sm text-wire-dark hover:text-wire-black hover:underline">All specials</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-wire-mid uppercase tracking-wider mb-3">Baking mixes</p>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/shipping?filter=baking-mixes"
                        onClick={() => setOpenDropdown(null)}
                        className="text-sm text-wire-dark hover:text-wire-black hover:underline"
                      >
                        Shop baking mixes
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/where-to-buy"
                        onClick={() => setOpenDropdown(null)}
                        className="text-sm text-wire-dark hover:text-wire-black hover:underline"
                      >
                        Find in-store mixes
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="img-placeholder w-52 h-36 flex-shrink-0" />
            </div>
          </div>
        )}

        {openDropdown === 'locations' && (
          <div
            className="absolute top-14 left-0 right-0 bg-white border-b border-wire-pale shadow-md z-50"
            onMouseEnter={() => cancelClose('locations')}
            onMouseLeave={scheduleClose}
          >
            <div className="w-full px-6 py-8 flex gap-8">
              <div className="flex gap-12 flex-1">
                <div>
                  <p className="text-xs font-semibold text-wire-mid uppercase tracking-wider mb-3">New York</p>
                  <ul className="space-y-2">
                    {['Upper west side', 'Upper east side', 'Midtown', 'Chelsea'].map(l => (
                      <li key={l}><Link to="/locations/upper-west-side" onClick={() => setOpenDropdown(null)} className="text-sm text-wire-dark hover:text-wire-black hover:underline">{l}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-wire-mid uppercase tracking-wider mb-3">New Jersey</p>
                  <ul className="space-y-2">
                    <li><Link to="/locations/upper-west-side" onClick={() => setOpenDropdown(null)} className="text-sm text-wire-dark hover:text-wire-black hover:underline">Englewood NJ</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-wire-mid uppercase tracking-wider mb-3">California</p>
                  <ul className="space-y-2">
                    {['Santa monica', 'Woodland Hills', 'Beverly Hills', 'Silverlake'].map(l => (
                      <li key={l}><Link to="/locations/upper-west-side" onClick={() => setOpenDropdown(null)} className="text-sm text-wire-dark hover:text-wire-black hover:underline">{l}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="img-placeholder w-52 h-36 flex-shrink-0" />
            </div>
          </div>
        )}
      </nav>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-72 bg-white overflow-y-auto p-6">
            <div className="flex items-center justify-between gap-3 mb-8">
              <div className="flex shrink-0 items-center rounded-md bg-wire-bg/35 px-2 py-1 ring-1 ring-wire-ghost/60">
                <img
                  src={pub('assets/modern-logo.png')}
                  alt=""
                  className={`${navLogoImg} h-6`}
                  aria-hidden
                />
              </div>
              <button onClick={() => setMobileOpen(false)}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            {[
              { label: 'Shop', href: '/shipping' },
              { label: 'Locations', href: '/locations' },
              { label: 'About us', href: '/about' },
              { label: 'Gift card', href: '/gift-card' },
              { label: 'Contact us', href: '/contact' },
              { label: 'Pre-orders', href: '/pre-orders' },
              { label: 'Catering', href: '/catering' },
              { label: 'Nationwide shipping', href: '/shipping' },
            ].map(l => (
              <Link key={l.label} to={l.href} onClick={() => setMobileOpen(false)} className="block py-3 border-b border-wire-ghost text-sm text-wire-dark">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {popupOpen && <OrderRoutingPopup onClose={() => setPopupOpen(false)} />}
      {cartOpen && <MiniCart onClose={() => setCartOpen(false)} />}
    </>
  )
}
