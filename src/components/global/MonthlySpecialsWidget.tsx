import { useState } from 'react'
import { Link } from 'react-router-dom'

const DISMISS_KEY = 'mb-specials-widget-dismissed'

function TertiaryLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="inline-flex items-center gap-1 text-xs font-medium text-wire-black hover:underline">
      {children}
      <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}

export default function MonthlySpecialsWidget() {
  const [visible, setVisible] = useState(() => sessionStorage.getItem(DISMISS_KEY) !== '1')

  function dismiss() {
    sessionStorage.setItem(DISMISS_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside
      className="fixed bottom-6 right-6 z-50 w-[min(calc(100vw-2rem),400px)]"
      aria-label="Monthly specials"
    >
      <div className="flex items-stretch gap-4 rounded-[10px] border border-wire-pale bg-white p-4 shadow-md sm:gap-5 sm:p-5">
        <div className="img-placeholder h-[96px] w-[96px] shrink-0 self-start rounded-lg border-0" aria-hidden />

        <div className="flex min-h-[96px] flex-1 flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <p className="m-0 min-w-0 flex-1 text-sm font-semibold leading-5 text-wire-black">
              Explore our monthly specials
            </p>
            <button
              type="button"
              onClick={dismiss}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-transparent text-wire-mid hover:border-wire-pale hover:text-wire-black [&_svg]:translate-y-px"
              aria-label="Dismiss monthly specials"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-auto flex flex-row flex-wrap items-center gap-x-4 gap-y-2">
            <TertiaryLink to="/shipping">Order shipping</TertiaryLink>
            <TertiaryLink to="/pre-orders">Pre order</TertiaryLink>
          </div>
        </div>
      </div>
    </aside>
  )
}
