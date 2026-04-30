import { useState } from 'react'

export default function SortDropdown() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('Featured')
  const options = ['Featured', 'Price: Low to high', 'Price: High to low', 'Newest']

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border border-wire-pale px-3 py-2 text-sm text-wire-dark hover:border-wire-mid"
      >
        <span className="text-wire-light">Sort:</span> {value}
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-wire-pale shadow-sm min-w-[180px] z-20">
          {options.map(o => (
            <button
              key={o}
              className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-wire-ghost ${o === value ? 'font-medium' : 'text-wire-dark'}`}
              onClick={() => { setValue(o); setOpen(false) }}
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
