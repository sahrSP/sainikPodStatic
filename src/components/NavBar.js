import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import logoWhite from '../assets/logoDark.png'
import logoTeal from '../assets/logoLight.png'
import { SMOOTH_SCROLL } from './scrollConfig'

const links = [
  { to: 'home', label: 'Home' },
  { to: 'services', label: 'Services' },
  { to: 'standard', label: 'The Standard' },
  { to: 'mission', label: 'Mission' },
  { to: 'contact', label: 'Contact' },
]

// On the landing the white wordmark is the masthead — large, centered, bare
// over the photograph. Once the page scrolls past the hero it condenses into
// a small glass chip with the teal logo. One centered element, two states.
export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    let raf = null
    const update = () => {
      raf = null
      setPastHero(window.scrollY > window.innerHeight * 0.65)
    }
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf !== null) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="relative flex justify-center px-4 pt-4 md:pt-6">
        <Link
          to="home"
          {...SMOOTH_SCROLL}
          className={`pointer-events-auto cursor-pointer inline-flex items-center transition-all duration-500 ${
            pastHero
              ? 'rounded-2xl bg-porcelain/80 backdrop-blur-xl border border-porcelain/60 shadow-[0_2px_16px_rgba(12,48,56,0.12)] px-5 py-3'
              : 'px-2 py-2 border border-transparent'
          }`}
          aria-label="SainikPod home"
        >
          <span className="relative block">
            <img
              src={logoWhite}
              alt="SainikPod"
              className={`w-auto object-contain transition-all duration-500 ${
                pastHero ? 'h-5 opacity-0' : 'h-8 md:h-11 opacity-100'
              }`}
            />
            <img
              src={logoTeal}
              alt=""
              aria-hidden="true"
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-auto object-contain transition-all duration-500 ${
                pastHero ? 'h-5 opacity-100' : 'h-8 md:h-11 opacity-0'
              }`}
            />
          </span>
        </Link>

        <button
          className="pointer-events-auto lg:hidden absolute right-4 top-4 w-12 h-12 rounded-2xl bg-porcelain/80 backdrop-blur-xl border border-porcelain/60 shadow-[0_2px_16px_rgba(12,48,56,0.12)] flex items-center justify-center text-ink"
          onClick={() => setIsNavOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {isNavOpen && (
        <div className="pointer-events-auto absolute top-0 inset-x-0 h-screen bg-porcelain flex flex-col lg:hidden">
          <div className="flex items-center justify-between px-4 pt-4">
            <span className="inline-flex items-center rounded-2xl border border-hairline px-5 py-3">
              <img src={logoTeal} className="h-5 w-auto object-contain" alt="SainikPod" />
            </span>
            <button
              className="w-12 h-12 rounded-2xl border border-hairline flex items-center justify-center text-ink"
              onClick={() => setIsNavOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-8 pt-12" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                {...SMOOTH_SCROLL}
                offset={-80}
                onClick={() => setIsNavOpen(false)}
                className="cursor-pointer flex items-center gap-4 py-5 border-b border-hairline"
              >
                <span className="pod-ring" aria-hidden="true"></span>
                <span className="font-display font-light uppercase tracking-luxe text-2xl text-ink">
                  {l.label}
                </span>
              </Link>
            ))}
            <Link
              to="contact"
              {...SMOOTH_SCROLL}
              offset={-80}
              onClick={() => setIsNavOpen(false)}
              className="btn-glass btn-glass--light cursor-pointer mt-10 self-start font-body font-medium text-xs uppercase tracking-luxe px-8 py-4"
            >
              Partner with us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
