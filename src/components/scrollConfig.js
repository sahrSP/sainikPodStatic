// Shared react-scroll animation for every in-page Link. Spread this instead
// of a bare `smooth` boolean so every anchor gets the same deliberate ease —
// and so the animation is skipped for prefers-reduced-motion.
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const SMOOTH_SCROLL = prefersReducedMotion
  ? { smooth: false }
  : { smooth: true, duration: 700, easing: 'easeInOutQuart' }
