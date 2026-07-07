import React from 'react'
import { Link } from 'react-scroll'
import logoDark from '../assets/logoDark.png'
import { SMOOTH_SCROLL } from './scrollConfig'

export default function Footer() {
  return (
    <footer className="bg-abyss">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div>
          <Link to="home" {...SMOOTH_SCROLL} className="cursor-pointer inline-block">
            <img src={logoDark} className="h-7 w-auto object-contain" alt="SainikPod" />
          </Link>
          <p className="font-body text-xs text-porcelain/50 tracking-luxe uppercase mt-4">
            Sainik-driven · 100% electric · Bengaluru
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-10 gap-y-3" aria-label="Footer">
          {[
            { to: 'services', label: 'Services' },
            { to: 'standard', label: 'The Standard' },
            { to: 'mission', label: 'Mission' },
            { to: 'contact', label: 'Contact' },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              {...SMOOTH_SCROLL}
              offset={-80}
              className="cursor-pointer font-body font-medium text-[11px] uppercase tracking-luxe text-porcelain/60 hover:text-amber transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="font-body text-[11px] uppercase tracking-luxe text-porcelain/40">
          © {new Date().getFullYear()} SainikPod · sainikpod.org
        </p>
      </div>
    </footer>
  )
}
