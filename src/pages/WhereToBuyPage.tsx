import { Link } from 'react-router-dom'
import AnnouncementBar from '../components/global/AnnouncementBar'
import Navigation from '../components/global/Navigation'
import Footer from '../components/global/Footer'
import ComesSayHello from '../components/global/ComesSayHello'

export default function WhereToBuyPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />

      {/* Page header */}
      <div className="bg-wire-bg py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-3">Baking mixes</p>
          <h1 className="text-4xl font-semibold">Where to buy our baking mixes</h1>
        </div>
      </div>

      {/* Two simple paths: online (Amazon) + in-store (map, links to all locations) */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Online */}
          <div className="card p-8 flex flex-col">
            <div className="img-placeholder aspect-[4/3] mb-6 text-xs">Baking mix product photo</div>
            <p className="section-label mb-2">Online</p>
            <h2 className="text-2xl font-semibold mb-3">Order on Amazon</h2>
            <p className="text-sm text-wire-mid mb-6 flex-1">Delivered straight to your door, anywhere in the US.</p>
            <a
              href="https://www.amazon.com/stores/ModernBreadBagels"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 w-full"
            >
              Buy now on Amazon
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* In-store */}
          <div className="card p-8 flex flex-col">
            <div className="img-placeholder aspect-[4/3] mb-6 text-xs relative" style={{ background: '#e8e8e8' }}>
              <span className="placeholder-badge absolute top-[28%] left-[78%] w-8 h-8 bg-wire-black text-white text-[10px] font-bold rounded-full flex items-center justify-center" style={{ color: 'white' }}>NY</span>
              <span className="placeholder-badge absolute top-[31%] left-[71%] w-8 h-8 bg-wire-black text-white text-[10px] font-bold rounded-full flex items-center justify-center" style={{ color: 'white' }}>NJ</span>
              <span className="placeholder-badge absolute top-[44%] left-[12%] w-8 h-8 bg-wire-black text-white text-[10px] font-bold rounded-full flex items-center justify-center" style={{ color: 'white' }}>CA</span>
            </div>
            <p className="section-label mb-2">In store</p>
            <h2 className="text-2xl font-semibold mb-3">Pick up at any of our bakeries</h2>
            <p className="text-sm text-wire-mid mb-6 flex-1">Available at all 9 locations across NY, NJ and CA.</p>
            <Link to="/locations" className="btn-secondary inline-flex items-center justify-center w-full">
              View all locations
            </Link>
          </div>
        </div>
      </section>

      <ComesSayHello />
      <Footer />
    </div>
  )
}
