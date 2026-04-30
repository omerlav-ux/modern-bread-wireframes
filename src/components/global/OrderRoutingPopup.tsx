import { useNavigate } from 'react-router-dom'

interface Props {
  onClose: () => void
}

const options = [
  {
    title: 'Get it today',
    body: 'Same-day delivery or pickup from one of our stores',
    href: '#external',
    external: true,
    icon: (
      <svg className="w-10 h-10 text-wire-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: 'Pre-order',
    body: 'Schedule a delivery or pickup for tomorrow or later',
    href: '/pre-orders',
    external: false,
    icon: (
      <svg className="w-10 h-10 text-wire-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Catering & events',
    body: 'Platters and boxes for groups and celebrations',
    href: '/catering/order',
    external: false,
    icon: (
      <svg className="w-10 h-10 text-wire-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Nationwide shipping',
    body: 'Overnight delivery anywhere in the US',
    href: '/shipping',
    external: false,
    icon: (
      <svg className="w-10 h-10 text-wire-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 .01M13 16l2-8h3l2 5v3h-2" />
      </svg>
    ),
  },
]

export default function OrderRoutingPopup({ onClose }: Props) {
  const navigate = useNavigate()

  const handleSelect = (href: string, external: boolean) => {
    if (external) {
      window.open('#', '_blank')
    } else {
      navigate(href)
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white max-w-2xl w-full p-10 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-wire-mid hover:text-wire-black"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-semibold text-center mb-8">Where are we shipping to?</h2>
        <div className="grid grid-cols-2 gap-4">
          {options.map((opt) => (
            <button
              key={opt.title}
              onClick={() => handleSelect(opt.href, opt.external)}
              className="border border-wire-pale hover:border-wire-black transition-colors group text-left"
            >
              <div className="img-placeholder aspect-[5/3] border-0 flex items-center justify-center">
                <span className="placeholder-icon">{opt.icon}</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm mb-1">{opt.title}</h3>
                <p className="text-xs text-wire-mid leading-relaxed">{opt.body}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
