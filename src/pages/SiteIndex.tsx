import { Link } from 'react-router-dom'

const pages = [
  {
    category: 'Main',
    items: [{ label: 'Homepage', href: '/home', desc: 'Hero, how to order, shop favorites, catering, locations, testimonials, press' }],
  },
  {
    category: 'Nationwide Shipping (Wix Stores)',
    items: [
      { label: 'Shipping Catalog', href: '/shipping', desc: 'Hub popup (East/West), sticky banner, filter sidebar, product grid' },
      { label: 'Shipping PDP', href: '/shipping/product', desc: 'Product detail page with delivery estimate, gallery, add to cart' },
    ],
  },
  {
    category: 'Pre-orders (Wix Restaurants)',
    items: [
      { label: 'Pre-orders Catalog', href: '/pre-orders', desc: '24h notice banner, filter sidebar, product grid' },
      { label: 'Pre-orders PDP', href: '/pre-orders/product', desc: 'Fulfillment toggle, location selector, date picker (24h min)' },
    ],
  },
  {
    category: 'Catering (Wix Restaurants)',
    items: [
      { label: 'Catering Landing', href: '/catering', desc: 'Occasions, how it works, product preview, corporate, testimonials, FAQ' },
      { label: 'Catering Catalog', href: '/catering/order', desc: 'Upfront selectors, SERVES badges, filter sidebar' },
      { label: 'Catering PDP', href: '/catering/product', desc: 'Fulfillment toggle, location, date picker (48h min), special requests' },
    ],
  },
  {
    category: 'Locations',
    items: [
      { label: 'Locations Overview', href: '/locations', desc: 'Full map, sticky tabs, location cards by region' },
      { label: 'Location Detail', href: '/locations/upper-west-side', desc: 'Hero, action bar, service periods (What\'s on today), sidebar' },
    ],
  },
  {
    category: 'Content pages',
    items: [
      { label: 'About Us', href: '/about', desc: 'Story, gluten free, kashrut, team, testimonials, press' },
      { label: 'FAQ', href: '/faq', desc: 'Accordion FAQ by category, contact CTA' },
      { label: 'Gift Card', href: '/gift-card', desc: 'Amount selector, recipient toggle, date picker, message field' },
    ],
  },
]

export default function SiteIndex() {
  return (
    <div className="min-h-screen bg-wire-bg py-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.15em] uppercase font-medium text-wire-mid mb-2">High-fidelity wireframes</p>
          <h1 className="text-4xl font-serif font-semibold mb-3">Modern Bread & Bagels</h1>
          <p className="text-wire-mid text-sm">Click any page below to view the wireframe. All pages are black & white, full-fidelity.</p>
        </div>

        <div className="space-y-10">
          {pages.map((group) => (
            <div key={group.category}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-wire-light mb-3 pb-2 border-b border-wire-pale">
                {group.category}
              </h2>
              <div className="space-y-2">
                {group.items.map((page) => (
                  <Link
                    key={page.href}
                    to={page.href}
                    className="flex items-start justify-between bg-white border border-wire-pale px-5 py-4 hover:border-wire-black transition-colors group"
                  >
                    <div>
                      <span className="font-medium text-sm group-hover:underline">{page.label}</span>
                      <p className="text-xs text-wire-mid mt-0.5 leading-relaxed">{page.desc}</p>
                    </div>
                    <span className="text-wire-light text-xs font-mono mt-0.5 ml-4 flex-shrink-0">{page.href}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 border border-wire-pale bg-white text-xs text-wire-mid">
          <strong className="text-wire-dark">Navigation:</strong> Each page has a fully functional nav. Use the browser back button or return here via the logo. The Order Routing Popup is triggered by "Place an order" in the nav.
        </div>
      </div>
    </div>
  )
}
