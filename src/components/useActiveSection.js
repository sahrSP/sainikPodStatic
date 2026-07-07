import { useEffect, useState } from 'react'

// Tracks which section the viewport is in. Manual because react-scroll's spy
// can't follow the sticky hero (its rect.top pins at 0, so it would stay
// active forever).
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    let raf = null
    const update = () => {
      raf = null
      const probe = window.scrollY + window.innerHeight * 0.4
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        // the sticky hero always reports rect.top 0 — its true position is 0
        const absTop = id === 'home' ? 0 : el.getBoundingClientRect().top + window.scrollY
        if (absTop <= probe) current = id
      }
      setActive(current)
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
  }, [ids])

  return active
}
