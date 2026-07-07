import React from 'react'
import useReveal from './useReveal'

// Section header: small-caps label over a short amber rule, then a light display title.
export default function Waypoint({ label, title, kicker, dark = false, center = false }) {
  const ref = useReveal()

  return (
    <div ref={ref} className={`reveal ${center ? 'text-center' : ''}`}>
      <p
        className={`font-body font-medium text-xs uppercase tracking-luxewide ${
          dark ? 'text-amber' : 'text-slate'
        }`}
      >
        {label}
      </p>
      <div
        className={`rule-grow h-px bg-amber mt-5 ${center ? 'mx-auto' : ''}`}
        aria-hidden="true"
      ></div>
      <h2
        className={`font-display font-light uppercase tracking-luxe leading-tight text-4xl md:text-5xl lg:text-6xl mt-8 ${
          dark ? 'text-porcelain' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {kicker && (
        <p
          className={`text-base md:text-lg mt-6 max-w-2xl leading-loose ${
            dark ? 'text-porcelain/75' : 'text-slate'
          } ${center ? 'mx-auto' : ''}`}
        >
          {kicker}
        </p>
      )}
    </div>
  )
}
