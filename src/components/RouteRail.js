import React from 'react'
import { Link } from 'react-scroll'
import useActiveSection from './useActiveSection'
import { SMOOTH_SCROLL } from './scrollConfig'

const stops = [
  { to: 'home', label: 'Home' },
  { to: 'services', label: 'Services' },
  { to: 'standard', label: 'The Standard' },
  { to: 'mission', label: 'Mission' },
  { to: 'contact', label: 'Contact' },
]

const ids = stops.map((s) => s.to)

// The section nav as a route map: a glass capsule of pod-ring stops down the
// left edge. The active stop pulses amber — you are here on the journey.
export default function RouteRail() {
  const active = useActiveSection(ids)

  return (
    <nav
      aria-label="Sections"
      className="fixed left-4 xl:left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <ul className="flex flex-col items-start rounded-full bg-porcelain/75 backdrop-blur-md border border-porcelain/60 shadow-[0_2px_18px_rgba(12,48,56,0.10)] px-[9px] py-4">
        {stops.map((s, i) => (
          <li key={s.to} className="flex flex-col items-start">
            {i > 0 && (
              <span className="block w-px h-7 bg-ink/15 ml-[5px]" aria-hidden="true"></span>
            )}
            <Link
              to={s.to}
              {...SMOOTH_SCROLL}
              offset={-100}
              className={`group relative flex items-center cursor-pointer py-1 -my-1 ${
                active === s.to ? 'rail-active' : ''
              }`}
              aria-label={s.label}
              aria-current={active === s.to ? 'true' : undefined}
            >
              <span className="rail-dot block w-[11px] h-[11px] rounded-full border-2 border-slate/60 bg-transparent transition-colors" aria-hidden="true"></span>
              <span className="rail-label pointer-events-none absolute left-6 whitespace-nowrap rounded-lg bg-porcelain/95 backdrop-blur border border-hairline shadow-sm px-3 py-1.5 font-body font-medium text-[10px] uppercase tracking-luxe text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                {s.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
