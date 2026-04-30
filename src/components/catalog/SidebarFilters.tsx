import { useState } from 'react'

interface FilterGroup {
  label: string
  options: string[]
}

interface Props {
  groups: FilterGroup[]
}

export default function SidebarFilters({ groups }: Props) {
  const [open, setOpen] = useState<string[]>(groups.map(g => g.label))
  const [selected, setSelected] = useState<Record<string, string[]>>({})

  const toggle = (group: string) =>
    setOpen(prev => prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group])

  const toggleOption = (group: string, option: string) => {
    setSelected(prev => {
      const cur = prev[group] || []
      return {
        ...prev,
        [group]: cur.includes(option) ? cur.filter(o => o !== option) : [...cur, option],
      }
    })
  }

  return (
    <aside className="w-56 flex-shrink-0">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold">Filter</h3>
        <button className="text-xs text-wire-mid underline">Clear all</button>
      </div>
      {groups.map((group) => (
        <div key={group.label} className="border-t border-wire-ghost py-4">
          <button
            className="flex items-center justify-between w-full text-sm font-medium mb-3"
            onClick={() => toggle(group.label)}
          >
            {group.label}
            <svg className={`w-3.5 h-3.5 transition-transform ${open.includes(group.label) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open.includes(group.label) && (
            <div className="space-y-2">
              {group.options.map((opt) => {
                const checked = (selected[group.label] || []).includes(opt)
                return (
                  <label key={opt} className="flex items-center gap-2.5 cursor-pointer group">
                    <span className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center ${checked ? 'bg-wire-black border-wire-black' : 'border-wire-pale group-hover:border-wire-mid'}`}>
                      {checked && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-wire-dark">{opt}</span>
                    <button onClick={() => toggleOption(group.label, opt)} className="sr-only">Toggle</button>
                  </label>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </aside>
  )
}
