import { useEffect, useRef } from 'react'

// Translates an element proportionally to its parent's distance from the
// viewport centre. Measures the parent (never the node itself) so the
// transform can't feed back into the measurement.
export default function useParallax(speed = 0.15, axis = 'y') {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = null
    const update = () => {
      raf = null
      const anchor = node.parentElement || node
      const rect = anchor.getBoundingClientRect()
      const vh = window.innerHeight
      if (rect.bottom < -vh || rect.top > vh * 2) return
      const delta = (rect.top + rect.height / 2 - vh / 2) * speed
      node.style.transform =
        axis === 'x' ? `translate3d(${delta}px, 0, 0)` : `translate3d(0, ${delta}px, 0)`
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
  }, [speed, axis])

  return ref
}
