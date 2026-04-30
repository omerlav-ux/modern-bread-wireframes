import { useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShippingCatalogPage from './pages/ShippingCatalogPage'
import ShippingPDPPage from './pages/ShippingPDPPage'
import PreOrdersCatalogPage from './pages/PreOrdersCatalogPage'
import PreOrdersPDPPage from './pages/PreOrdersPDPPage'
import CateringLandingPage from './pages/CateringLandingPage'
import CateringCatalogPage from './pages/CateringCatalogPage'
import CateringPDPPage from './pages/CateringPDPPage'
import LocationsPage from './pages/LocationsPage'
import LocationDetailPage from './pages/LocationDetailPage'
import AboutUsPage from './pages/AboutUsPage'
import FAQPage from './pages/FAQPage'
import GiftCardPage from './pages/GiftCardPage'
import ContactUsPage from './pages/ContactUsPage'
import PressPage from './pages/PressPage'
import WhereToBuyPage from './pages/WhereToBuyPage'
import SiteIndex from './pages/SiteIndex'

// Reset scroll to the top whenever the route changes - without this, React
// Router preserves the previous scroll offset and new pages open mid-way down.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SiteIndex />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shipping" element={<ShippingCatalogPage />} />
        <Route path="/shipping/product" element={<ShippingPDPPage />} />
        <Route path="/pre-orders" element={<PreOrdersCatalogPage />} />
        <Route path="/pre-orders/product" element={<PreOrdersPDPPage />} />
        <Route path="/catering" element={<CateringLandingPage />} />
        <Route path="/catering/order" element={<CateringCatalogPage />} />
        <Route path="/catering/product" element={<CateringPDPPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/:store" element={<LocationDetailPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/gift-card" element={<GiftCardPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/where-to-buy" element={<WhereToBuyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Link
        to="/contact"
        className="fixed bottom-6 right-6 z-50 bg-wire-black text-white px-5 py-3 text-sm font-medium hover:bg-wire-dark transition-colors shadow-lg"
      >
        Contact us
      </Link>
    </HashRouter>
  )
}
