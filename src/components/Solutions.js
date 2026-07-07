import React from 'react'
import Waypoint from './Waypoint'
import useReveal from './useReveal'
import useParallax from './useParallax'

const services = [
  {
    numeral: 'I',
    title: 'Employee transport',
    desc: 'Daily commutes, shift rosters and late-night drops, run with quiet punctuality. Safe, tracked journeys for every employee, on every shift.',
  },
  {
    numeral: 'II',
    title: 'Airport services',
    desc: 'Electric fleet operations at Bengaluru and Delhi international airports. A silent, zero-emission welcome for your teams and your guests.',
  },
  {
    numeral: 'III',
    title: 'Dedicated fleets',
    desc: 'Cars and chauffeurs stationed with your organisation on tailored subscriptions — capacity that grows with you, without capital expense.',
  },
]

function ServiceColumn({ numeral, title, desc, index }) {
  const ref = useReveal()
  // each ghost numeral sits on a deeper layer, drifting slower than the text
  const ghostRef = useParallax(-0.1 - index * 0.05, 'y')
  return (
    <article
      ref={ref}
      className="reveal relative md:px-10 first:md:pl-0 last:md:pr-0 py-8 md:py-2"
      style={{ transitionDelay: `${index * 140}ms` }}
    >
      <span
        ref={ghostRef}
        className="pointer-events-none select-none absolute -top-12 right-0 font-display font-light leading-none text-[9rem] text-deep/[0.08]"
        aria-hidden="true"
      >
        {numeral}
      </span>
      <p className="font-display font-light text-3xl text-amber" aria-hidden="true">
        {numeral}
      </p>
      <h3 className="font-display font-normal uppercase tracking-luxe text-xl md:text-2xl text-ink mt-6">
        {title}
      </h3>
      <p className="text-slate leading-loose text-[15px] mt-5">{desc}</p>
    </article>
  )
}

export default function Solutions() {
  return (
    <section id="services" className="bg-porcelain">
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-24 md:pt-36">
        <Waypoint
          label="Services"
          title="Where the fleet serves"
          kicker="Mobility programmes shaped around how your people actually move — the commute, the airport, and everything between."
        />
        <div className="mt-16 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(12,48,56,0.14)]">
          {services.map((s, i) => (
            <ServiceColumn key={s.numeral} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
