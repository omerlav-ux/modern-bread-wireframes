import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'
import OrderRoutingPopup from '../components/global/OrderRoutingPopup'
import { dinnerLocations } from '../constants/dinnerLocations'

// ── Hero slides (4 slides from Figma) ──────────────────────────────────────
type HeroSlide =
  | { kind: 'default'; headline: string; sub: string }
  | { kind: 'locations'; headline: string; sub: string; pills: string[] }
  | { kind: 'catering'; headline: string; sub: string }
  | { kind: 'hello'; headline: string; sub: string }

const heroSlides: HeroSlide[] = [
  {
    kind: 'default',
    headline: 'Everything a Bagel Should Be.',
    sub: "Discover the handcrafted taste and texture you've been missing. Unforgettably Delicious. All gluten-free.",
  },
  {
    kind: 'locations',
    headline: "Mornings are our thing. But evenings aren't bad either.",
    sub: "Evening seating, coffee bar and fresh-baked goods from 5pm. Because good food shouldn't have a curfew.",
    pills: ['Midtown NY', 'Upper east side NY', 'Englewood CA'],
  },
  {
    kind: 'catering',
    headline: 'Modern bread at your next event',
    sub: 'Platters, boards and grazing boxes for groups of 10 to 100. Fresh the morning of your event.',
  },
  {
    kind: 'hello',
    headline: 'Come say hello',
    sub: 'Find us on the Upper West Side, Chelsea, Midtown, the Upper East Side, New Jersey and across California. The oven is always on.',
  },
]

const orderMethods = [
  { label: 'Nationwide shipping', href: '/shipping' },
  { label: 'Same day delivery', href: '#' },
  { label: 'Pre-order', href: '/pre-orders' },
  { label: 'Catering & events', href: '/catering/order' },
]

const ourProducts = [
  { name: 'Bagel favorites', href: '/shipping' },
  { name: 'Cakes & sweets', href: '/shipping' },
  { name: 'Baking mixes', href: '/shipping' },
  { name: 'Seasonal specials', href: '/shipping' },
]

const shopFavorites = [
  { name: '1/2 Dozen Plain Bagels', price: '$49.99', href: '/shipping/product', badge: 'Bestseller' },
  { name: 'Vanilla maple cruller', price: '$49.99', href: '/shipping/product', badge: null },
  { name: 'Salted honey pull apart buisuits', price: '$49.99', href: '/shipping/product', badge: 'April special' },
]

const testimonials = [
  { text: '"these are hands down the most amazing gluten free bagels i have ever tried."', name: 'Christina' },
  { text: '"So beyond grateful my kids know what a real NY bagel tastes like."', name: 'Kristin' },
  { text: '"No one believes it\'s gluten free. The challah is extraordinary. We serve it every Shabbat."', name: 'Benjamin' },
  { text: '"The nationwide shipping is a game changer. I\'ve been ordering from Denver for two years."', name: 'Benjamin' },
]

const pressLogos = [
  { src: 'assets/press-1.png', alt: 'The New York Times' },
  { src: 'assets/press-2.png', alt: 'TODAY' },
  { src: 'assets/press-3.png', alt: 'The Strategist' },
  { src: 'assets/press-4.png', alt: 'gff Magazine' },
  { src: 'assets/press-5.png', alt: 'SECRET NYC' },
  { src: 'assets/press-6.png', alt: 'Apple Podcasts' },
]

function HeroContent({ slide, onOrder }: { slide: HeroSlide; onOrder: () => void }) {
  if (slide.kind === 'default') {
    return (
      <>
        <h1 className="font-semibold mb-4 text-wire-black max-w-3xl" style={{ fontSize: 52, lineHeight: 1.15 }}>{slide.headline}</h1>
        <p className="text-sm text-wire-dark mb-8 max-w-xl">{slide.sub}</p>
        <div className="flex items-center gap-3">
          <button onClick={onOrder} className="bg-wire-black text-white px-7 py-3 text-sm font-medium hover:bg-wire-dark transition-colors">Place an order</button>
          <Link to="/locations" className="border border-wire-black text-wire-black px-7 py-3 text-sm font-medium hover:bg-wire-ghost transition-colors">View our locations</Link>
        </div>
      </>
    )
  }
  if (slide.kind === 'locations') {
    return (
      <>
        <h1 className="font-semibold mb-4 text-wire-black max-w-3xl" style={{ fontSize: 48, lineHeight: 1.2 }}>{slide.headline}</h1>
        <p className="text-sm text-wire-dark mb-8 max-w-xl">{slide.sub}</p>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {slide.pills.map(p => (
            <Link key={p} to="/locations" className="border border-wire-black text-wire-black px-5 py-2 text-sm font-medium hover:bg-wire-ghost transition-colors">{p}</Link>
          ))}
        </div>
      </>
    )
  }
  if (slide.kind === 'catering') {
    return (
      <>
        <h1 className="font-semibold mb-4 text-wire-black max-w-3xl" style={{ fontSize: 48, lineHeight: 1.2 }}>{slide.headline}</h1>
        <p className="text-sm text-wire-dark mb-8 max-w-xl">{slide.sub}</p>
        <Link to="/catering/order" className="bg-wire-black text-white px-7 py-3 text-sm font-medium hover:bg-wire-dark transition-colors">Place catering order</Link>
      </>
    )
  }
  // hello
  return (
    <>
      <h1 className="font-semibold mb-4 text-wire-black max-w-3xl" style={{ fontSize: 52, lineHeight: 1.15 }}>{slide.headline}</h1>
      <p className="text-sm text-wire-dark mb-8 max-w-xl">{slide.sub}</p>
      <Link to="/locations" className="bg-wire-black text-white px-7 py-3 text-sm font-medium hover:bg-wire-dark transition-colors">View our locations</Link>
    </>
  )
}

export default function HomePage() {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      {/* ── Hero (static - first slide only) ── */}
      <section className="relative overflow-hidden" style={{ height: '88vh', minHeight: 520 }}>
        <div className="img-placeholder absolute inset-0 border-0" style={{ background: '#e8e8e8' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <HeroContent slide={heroSlides[0]} onOrder={() => setPopupOpen(true)} />
        </div>
      </section>

      {/* ── Shop favorites ── */}
      <section className="py-12 bg-wire-bg">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl">Shop favorites</h2>
            <Link to="/shipping" className="text-sm text-wire-mid hover:text-wire-black underline shrink-0">
              View all products →
            </Link>
          </div>
          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-3 flex sm:flex-none overflow-x-auto gap-3 -mx-6 px-6 sm:mx-0 sm:px-0 snap-x snap-mandatory no-scrollbar">
            {shopFavorites.map((p) => (
              <Link key={p.name} to={p.href} className="group block bg-white flex-shrink-0 w-[70vw] sm:w-auto snap-start">
                <div className="img-placeholder aspect-square relative">
                  {p.badge && (
                    <span
                      className="placeholder-badge absolute top-2 left-2 bg-white text-[10px] font-semibold px-2 py-0.5 border border-wire-pale"
                      style={{ color: '#222' }}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-sm text-wire-dark group-hover:underline mb-1">{p.name}</p>
                  <p className="text-sm font-semibold">{p.price}</p>
                </div>
              </Link>
            ))}
            <div className="flex flex-col flex-shrink-0 w-[70vw] sm:w-auto snap-start">
              <div className="img-placeholder aspect-square" style={{ background: '#a0a0a0' }} />
              <div className="p-3 bg-wire-ghost flex-1 flex flex-col justify-center">
                <p className="text-sm font-semibold mb-2">Order same day delivery/pickup</p>
                <Link to="#" className="text-sm text-wire-dark flex items-center gap-1 hover:underline">
                  Order for today
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Enjoy Our Bagels ── */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl mb-2">How to Enjoy Our Bagels</h2>
            <p className="text-sm text-wire-mid max-w-sm mx-auto">
              Whether you're across the street or across the country, we make it easy to enjoy the perfect bake.
            </p>
          </div>
          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-3 flex sm:flex-none overflow-x-auto gap-3 -mx-6 px-6 sm:mx-0 sm:px-0 snap-x snap-mandatory no-scrollbar">
            {orderMethods.map((m) => (
              <Link key={m.label} to={m.href} className="group block flex-shrink-0 w-[70vw] sm:w-auto snap-start">
                <div className="img-placeholder aspect-square mb-3" />
                <p className="text-sm text-center text-wire-dark group-hover:underline">{m.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Now serving dinner ── */}
      <section className="bg-[#EEEEEE] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl mb-2">Mornings are our thing. But evenings aren't bad either.</h2>
            <p className="text-sm text-wire-mid max-w-sm mx-auto">
              Evening seating, coffee bar and fresh-baked goods from 5pm. Because good food shouldn't have a curfew.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dinnerLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group bg-wire-ghost border border-wire-pale p-6 hover:border-wire-black transition-colors"
              >
                <p className="text-xs font-semibold text-wire-mid uppercase tracking-wider mb-2">{loc.name}</p>
                <h3 className="text-lg font-semibold mb-3 group-hover:underline">{loc.concept}</h3>
                <p className="text-sm text-wire-dark mb-4">{loc.hours}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-wire-dark group-hover:text-wire-black">
                  View location
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shop by category ── */}
      <section className="py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl">Shop by category</h2>
            <Link to="/shipping" className="text-sm text-wire-mid hover:text-wire-black underline shrink-0">
              View all products →
            </Link>
          </div>
          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-3 flex sm:flex-none overflow-x-auto gap-3 -mx-6 px-6 sm:mx-0 sm:px-0 snap-x snap-mandatory no-scrollbar">
            {ourProducts.map((p) => (
              <Link key={p.name} to={p.href} className="group block flex-shrink-0 w-[70vw] sm:w-auto snap-start">
                <div className="img-placeholder aspect-[4/3] mb-3 relative">
                  <span className="placeholder-badge absolute bottom-2 right-2 w-7 h-7 bg-white border border-wire-pale flex items-center justify-center group-hover:bg-wire-black group-hover:border-wire-black transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="#222" viewBox="0 0 24 24" style={{ color: undefined }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <p className="text-sm text-wire-dark group-hover:underline">{p.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catering banner (~100vh) ── */}
      <section className="py-20" style={{ background: '#d8d8d8' }}>
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="py-6 lg:pr-16">
              <p className="text-xs text-wire-dark mb-3">Modern bread & bagel Catering</p>
              <h2 className="text-4xl mb-5 leading-snug">A taste worth celebrating together</h2>
              <p className="text-sm text-wire-dark leading-relaxed mb-6 max-w-md">
                Invite us to your next gathering - platters, boxes and artisan breads, made fresh the morning of your event.
              </p>
              <div className="flex items-center gap-4">
                <Link to="/catering/order" className="bg-wire-black text-white px-6 py-3 text-sm font-medium hover:bg-wire-dark transition-colors">
                  Place catering order
                </Link>
                <Link to="/catering" className="border border-wire-black text-wire-black px-6 py-3 text-sm font-medium hover:bg-white/40 transition-colors">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="img-placeholder aspect-[4/3] lg:aspect-auto lg:h-[500px]" style={{ background: '#a8a8a8' }} />
          </div>
        </div>
      </section>

      {/* ── Come say hello ── */}
      <ComesSayHello />

      {/* ── Testimonials ── */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-xl mb-8">Straight from our customers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-wire-pale p-5">
                <p className="text-sm leading-relaxed mb-4 text-wire-dark">{t.text}</p>
                <p className="text-xs font-medium">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured on ── */}
      <section className="bg-white py-[75px]">
        <div className="max-w-[1440px] mx-auto px-[52px]">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[32px] font-medium leading-[1.4]">Featured on</h2>
            <Link to="/about" className="text-base underline hover:text-wire-dark">View all press</Link>
          </div>
          <div className="flex items-center justify-between gap-6 flex-wrap">
            {pressLogos.map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                className="h-14 object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Join our club ── */}
      <section className="py-14 bg-wire-bg">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="text-2xl mb-3">Join our club</h2>
          <p className="text-sm text-wire-mid mb-2">
            Stay in the loop. Get fresh news and exclusive offers, and earn 5% off your first order.
          </p>
          <div className="flex border border-wire-pale mt-6 mb-3 bg-white">
            <input type="email" placeholder="Sign me up" className="flex-1 text-sm px-4 py-3 focus:outline-none placeholder:text-wire-light" />
            <button className="px-4 py-3 border-l border-wire-pale hover:bg-wire-ghost">
              <svg className="w-4 h-4 text-wire-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <label className="flex items-center justify-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-3 h-3" />
            <span className="text-[11px] text-wire-light">I agree to the terms & conditions</span>
          </label>
        </div>
      </section>

      <Footer />

      {popupOpen && <OrderRoutingPopup onClose={() => setPopupOpen(false)} />}
    </div>
  )
}
