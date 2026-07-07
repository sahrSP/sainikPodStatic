import React, { useEffect, useRef } from 'react'
import car from '../assets/electricCar.svg'

// A hairline road on which the brand car drives, steered by scroll position.
// The dashed centre line slides backwards beneath it, like road markings
// passing under a moving car.
export default function RoadDivider() {
  const trackRef = useRef(null)
  const carRef = useRef(null)
  const dashRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    const carEl = carRef.current
    const dashEl = dashRef.current
    if (!track || !carEl || !dashEl) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      carEl.style.transform = 'translateX(0)'
      return
    }

    let raf = null
    const drive = () => {
      raf = null
      const rect = track.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the road enters the viewport bottom, 1 when it leaves the top
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)))
      const distance = track.clientWidth - carEl.clientWidth
      carEl.style.transform = `translateX(${progress * distance}px)`
      // road markings travel the opposite way, so the road itself feels in motion
      dashEl.style.strokeDashoffset = `${progress * 260}`
    }
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(drive)
    }

    drive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf !== null) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20" aria-hidden="true">
      <div ref={trackRef} className="relative">
        <img
          ref={carRef}
          src={car}
          alt=""
          className="road-car relative z-10 w-16 md:w-20 -mb-[3px]"
        />
        <svg className="block w-full h-[7px]" aria-hidden="true">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="rgba(12,48,56,0.3)" strokeWidth="1" />
          <line
            ref={dashRef}
            x1="0"
            y1="5.5"
            x2="100%"
            y2="5.5"
            stroke="rgba(247,164,34,0.7)"
            strokeWidth="1"
            strokeDasharray="9 13"
          />
        </svg>
      </div>
    </div>
  )
}
