import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'

const tabs = ['About', 'At this location', 'Menu']

const menuCategories = ['Breakfast', 'Sandwiches', 'Salads', 'Pizza Menu', 'Deli', 'Coffee Bar']

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m14.95 6.36l-.7-.7M6.7 6.7l-.7-.7m12.72 0l-.7.7M6.7 17.3l-.7.7" />
        <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      </svg>
    ),
    title: 'Late night bakery',
    body: 'Rotating specials from 9pm until close. Perfect for night owls and Broadway show-goers.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Tourist attractions',
    body: 'Minutes from Lincoln Center and the American Museum of Natural History.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Bathrooms',
    body: 'Clean, accessible bathrooms available for guests.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Subway station nearby',
    body: 'Steps from the 1/2/3 trains at 72nd St station.',
  },
]

// Opening hours with the per-service breakdown shown on each day
// (breakfast / pizza / snacks / late night windows).
const openingHours = [
  {
    day: 'Sun-Tue',
    times: '8:00AM - 9:00PM',
    services: [
      { name: 'Breakfast', times: '8AM-3PM' },
      { name: 'Pizzas', times: '11AM-3PM' },
      { name: 'Snacks', times: '3PM-5PM' },
      { name: 'Late night', times: '5PM-9PM' },
    ],
  },
  {
    day: 'Friday',
    times: '8:00AM - 4:30PM',
    services: [
      { name: 'Breakfast', times: '8AM-3PM' },
      { name: 'Pizzas', times: '11AM-3PM' },
      { name: 'Snacks', times: '3PM-4:30PM' },
    ],
  },
  {
    day: 'Saturday',
    times: 'Closed',
    services: [],
  },
]

// Reusable opening-hours block - used in the About tab and the At this
// location tab so the layout stays in sync.
function OpeningHours() {
  return (
    <div className="text-sm mb-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-wire-mid mb-4">Opening hours</p>
      <div className="space-y-5">
        {openingHours.map(({ day, times, services }) => (
          <div key={day} className="grid grid-cols-[6rem,1fr] gap-4">
            <p className="font-medium text-wire-black">{day}</p>
            <div>
              <p className="font-semibold text-wire-black mb-2">{times}</p>
              {services.length > 0 && (
                <ul className="space-y-1.5">
                  {services.map((s) => (
                    <li key={s.name} className="grid grid-cols-[6rem,1fr] gap-4 text-xs text-wire-mid">
                      <span>{s.name}</span>
                      <span>{s.times}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LocationDetailPage() {
  const [activeTab, setActiveTab] = useState('About')
  const [activeMenu, setActiveMenu] = useState('Breakfast')

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-8 py-3">
        <div className="flex items-center gap-2 text-xs text-wire-mid">
          <Link to="/locations" className="hover:text-wire-black">Locations</Link>
          <span>/</span>
          <Link to="/locations" className="hover:text-wire-black">New York</Link>
          <span>/</span>
          <span className="text-wire-black">Upper west side</span>
        </div>
      </div>

      {/* Page header */}
      <div className="bg-wire-bg py-10">
        <div className="max-w-[1440px] mx-auto px-8">
          <h1 className="text-4xl font-semibold">Upper west side</h1>
        </div>
      </div>

      {/* Tabs - sticky under the nav so they stay visible while scrolling */}
      <div className="sticky top-14 z-20 bg-white border-b border-wire-pale">
        <div className="max-w-[1440px] mx-auto px-8 flex gap-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
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

      <div className="max-w-[1440px] mx-auto px-8 py-10">

        {/* About tab */}
        {activeTab === 'About' && (
          <div className="grid grid-cols-2 gap-12">
            <div className="img-placeholder aspect-[4/3] text-xs">Store photo</div>
            <div>
              <p className="text-sm text-wire-dark leading-relaxed mb-6">
                Located on the Upper West Side, our Columbus Avenue location reflects a true neighborhood bakery. Here, the lines start before the doors open, regulars know the bakers by name, and the story of this spot the character of New York: fast, warm, alive, and always gluten-free.
              </p>
              <div className="space-y-2 text-sm mb-6">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-wire-mid flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>472 Columbus Avenue, New York, NY 10024</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-wire-mid flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(646) 779 1385</span>
                </div>
              </div>

              <OpeningHours />

              <div className="flex gap-3">
                {/* Same Toast deep-link pattern as the locations grid - opens
                    the location-specific online ordering page in a new tab. */}
                <a
                  href="https://order.toasttab.com/online/modern-bread-bagel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-wire-black text-white text-sm font-medium hover:bg-wire-dark transition-colors text-center"
                >
                  Order now
                </a>
                <Link to="/pre-orders" className="flex-1 py-2.5 border border-wire-black text-wire-black text-sm font-medium text-center hover:bg-wire-ghost transition-colors">
                  Pre-order
                </Link>
              </div>

              <p className="mt-4 text-xs text-wire-mid leading-relaxed">
                *This location is under the Kosher certification of IKC (Rabbi Zev Schwartz) and is closed on Shabbat. Table seating available after 5pm.
              </p>
            </div>
          </div>
        )}

        {/* At this location tab */}
        {activeTab === 'At this location' && (
          <div className="grid grid-cols-2 gap-12">
            <div className="img-placeholder aspect-[4/3] text-xs">Store photo</div>
            <div>
              <OpeningHours />
              <div className="flex gap-3 mb-6">
                <a
                  href="https://order.toasttab.com/online/modern-bread-bagel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-wire-black text-white text-sm font-medium hover:bg-wire-dark transition-colors text-center"
                >
                  Order now
                </a>
                <Link to="/pre-orders" className="flex-1 py-2.5 border border-wire-black text-wire-black text-sm font-medium text-center hover:bg-wire-ghost transition-colors">
                  Pre-order
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Menu tab */}
        {activeTab === 'Menu' && (
          <div>
            <div className="flex gap-0 border-b border-wire-pale mb-6">
              {menuCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveMenu(cat)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                    activeMenu === cat ? 'border-wire-black text-wire-black' : 'border-transparent text-wire-mid hover:text-wire-dark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="img-placeholder aspect-[16/9] max-w-2xl text-sm">Menu - {activeMenu}</div>
          </div>
        )}
      </div>

      {/* Shipping upsell - full content-width banner, content kept tightly grouped in the middle */}
      <div className="max-w-[1440px] mx-auto px-8 py-10">
        <div className="bg-wire-ghost border border-wire-pale py-4 px-6 flex items-center justify-center gap-5">
          <p className="text-sm font-medium">Want to order shipping instead?</p>
          <Link to="/shipping" className="text-sm border border-wire-black px-4 py-2 hover:bg-wire-black hover:text-white transition-colors font-medium">
            Nationwide shipping
          </Link>
        </div>
      </div>

      {/* At this location features */}
      <div className="max-w-[1440px] mx-auto px-8 py-12">
        <h2 className="text-xl font-semibold mb-8">At this location</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map((f) => (
            <div key={f.title} className="card p-6 text-center">
              <div className="flex justify-center mb-3 text-wire-dark">{f.icon}</div>
              <h3 className="font-medium text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-wire-mid leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Menus section */}
      <div className="max-w-[1440px] mx-auto px-8 pb-16">
        <h2 className="text-xl font-semibold mb-6">Menus</h2>
        <div className="flex gap-0 border-b border-wire-pale mb-6">
          {menuCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveMenu(cat)}
              className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                activeMenu === cat ? 'border-wire-black text-wire-black' : 'border-transparent text-wire-mid hover:text-wire-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="img-placeholder aspect-[16/9] text-sm">Menu - {activeMenu}</div>
      </div>

      <ComesSayHello />
      <Footer />
    </div>
  )
}
