import React, { useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import fieldPhoto from '../assets/bg.jpg'
import { SMOOTH_SCROLL } from './scrollConfig'

const marks = [
  '100% electric fleet',
  'Veteran chauffeurs',
  '24×7 control room',
  'BLR & DEL airports',
]

export default function Hero() {
  // As the next section scrolls over the pinned hero, the hero's content
  // drifts up and dims — a slower plane between the photo and the page.
  const contentRef = useRef(null)

  useEffect(() => {
    const node = contentRef.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = null
    const update = () => {
      raf = null
      const p = Math.min(1, Math.max(0, window.scrollY / window.innerHeight))
      node.style.opacity = String(1 - 0.85 * p)
      node.style.transform = `translate3d(0, ${-70 * p}px, 0)`
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
    <section id="home" className="sticky top-0 z-0 h-screen flex flex-col overflow-hidden">
      {/* pinned field photograph — an inset rounded canvas the page scrolls over */}
      <div className="absolute inset-3 md:inset-5 rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden" aria-hidden="true">
        <img
          src={fieldPhoto}
          alt=""
          className="hero-photo-in w-full h-full object-cover object-[68%_center]"
        />
        {/* duotone: deep teal multiply brands the photo and grounds the sky */}
        <div className="absolute inset-0 bg-deep/60 mix-blend-multiply"></div>
        {/* legibility: darken the left column where the type lives */}
        <div className="absolute inset-0 bg-gradient-to-r from-abyss/80 via-abyss/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-abyss/40"></div>
      </div>

      {/* electric aurora drifting over the photo */}
      <div className="aurora aurora--drift w-[34rem] h-[34rem] -top-40 -right-24 opacity-[0.15] mix-blend-screen" style={{ background: '#35E0C2' }} aria-hidden="true"></div>

      <div ref={contentRef} className="relative flex-1 flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="max-w-6xl mx-auto w-full px-6 md:px-8 pt-28 md:pt-32 pb-10">
            <div className="max-w-2xl">
              <p className="hero-seq hero-seq-1 font-body font-medium text-xs uppercase tracking-luxewide text-porcelain/90">
                Corporate mobility · Bengaluru
              </p>
              <div className="hero-seq hero-seq-1 h-px w-12 bg-amber mt-5" aria-hidden="true"></div>
              <h1 className="font-display font-light uppercase text-porcelain tracking-luxe leading-[1.1] text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl mt-8">
                <span className="hero-seq hero-seq-2 block">Discipline,</span>
                <span className="hero-seq hero-seq-3 block">
                  <span className="electric-text inline-block">
                    electrified.
                    <span className="electric-spark" aria-hidden="true">electrified.</span>
                    <span className="electric-spark electric-spark--b" aria-hidden="true">electrified.</span>
                  </span>
                </span>
              </h1>
              <p className="hero-seq hero-seq-4 text-porcelain text-base md:text-lg leading-loose max-w-lg mt-8">
                A 100% electric fleet, chauffeured by ex-servicemen of the Indian Armed
                Forces. SainikPod brings the composure of a lifetime of service to every
                kilometre your people travel.
              </p>
              <div className="hero-seq hero-seq-5 flex flex-wrap items-center gap-8 mt-10">
                <Link
                  to="contact"
                  {...SMOOTH_SCROLL}
                  offset={-80}
                  className="btn-glass btn-glass--dark cursor-pointer font-body font-medium text-xs uppercase tracking-luxe px-9 py-4"
                >
                  Partner with us
                </Link>
                <Link
                  to="mission"
                  {...SMOOTH_SCROLL}
                  offset={-80}
                  className="cursor-pointer font-body font-medium text-xs uppercase tracking-luxe text-porcelain border-b border-amber pb-1.5 hover:border-porcelain transition-colors"
                >
                  Discover our mission
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* marks row + scroll cue, at the base of the landing */}
        <div className="relative">
          <div className="max-w-6xl mx-auto px-6 md:px-8 pb-12 md:pb-14">
            <ul className="border-t border-porcelain/25 pt-6 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
              {marks.map((m, i) => (
                <li key={m} className={`hero-seq hero-seq-${Math.min(5, i + 2)} flex items-center gap-3`}>
                  <span className="pod-ring" aria-hidden="true"></span>
                  <span className="font-body font-medium text-[11px] md:text-xs uppercase tracking-luxe text-porcelain">
                    {m}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="clients"
            {...SMOOTH_SCROLL}
            offset={-80}
            aria-label="Scroll to explore"
            className="hero-seq hero-seq-5 group hidden md:flex flex-col items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-8 cursor-pointer"
          >
            <span className="font-body text-[10px] uppercase tracking-luxewide text-porcelain/80 group-hover:text-porcelain transition-colors">
              Scroll
            </span>
            <span className="scroll-cue block w-px h-8 bg-gradient-to-b from-amber to-transparent" aria-hidden="true"></span>
          </Link>
        </div>
      </div>
    </section>
  )
}
