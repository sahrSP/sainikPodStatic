import React from 'react'
import useReveal from './useReveal'
import ford from '../assets/logos/ford.svg'
import capgemini from '../assets/logos/capgemini.svg'
import wipro from '../assets/logos/wipro.svg'
import infosys from '../assets/logos/infosys.svg'
import ibm from '../assets/logos/ibm.svg'
import mahindra from '../assets/logos/mahindra.svg'
import ikea from '../assets/logos/ikea.svg'
import tvs from '../assets/logos/tvs.svg'

// Logos where available; tracked wordmarks where a clean monochrome mark doesn't exist.
// Simple Icons marks sit letterboxed in square viewBoxes, so they get taller
// boxes to render at the same optical size as the true-aspect wordmarks.
const clients = [
  { name: 'Ford', logo: ford, h: 'h-14' },
  { name: 'Capgemini', logo: capgemini, h: 'h-7' },
  { name: 'Wipro', logo: wipro, h: 'h-10' },
  { name: 'Infosys', logo: infosys, h: 'h-14' },
  { name: 'IBM', logo: ibm, h: 'h-7' },
  { name: 'Mahindra Logistics', logo: mahindra, h: 'h-14' },
  { name: 'IKEA', logo: ikea, h: 'h-16' },
  { name: 'TVS', logo: tvs, h: 'h-8' },
  { name: 'Delhi Int’l Airport', word: 'DEL · Delhi Int’l Airport' },
  { name: 'Bengaluru Int’l Airport', word: 'BLR · Bengaluru Int’l Airport' },
]

function ClientMark({ name, logo, word, h }) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={name}
        className={`${h} w-auto opacity-60 hover:opacity-100 transition-opacity`}
      />
    )
  }
  return (
    <span className="font-display font-light uppercase tracking-luxe text-lg text-ink/60 hover:text-ink whitespace-nowrap transition-colors">
      {word}
    </span>
  )
}

export default function Clients() {
  const ref = useReveal()

  return (
    <section id="clients" aria-label="Clients" className="bg-ivory">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20 text-center">
        <p className="font-body font-medium text-xs uppercase tracking-luxewide text-slate">
          In the service of
        </p>
        <div className="rule-grow h-px bg-amber mt-5 mx-auto" aria-hidden="true"></div>

        <div className="marquee overflow-hidden mt-12 relative">
          {/* soft fade at the ticker edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 z-10 bg-gradient-to-r from-ivory to-transparent" aria-hidden="true"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 z-10 bg-gradient-to-l from-ivory to-transparent" aria-hidden="true"></div>
          <div className="marquee-track items-center gap-16 md:gap-20 pr-16 md:pr-20">
            {[...clients, ...clients].map((c, i) => (
              <div key={`${c.name}-${i}`} className="flex items-center flex-shrink-0" aria-hidden={i >= clients.length}>
                <ClientMark {...c} />
              </div>
            ))}
          </div>
        </div>

        <p className="font-body text-xs italic text-slate mt-10">
          In association with the Ministry of Defence resettlement mission
        </p>
      </div>
    </section>
  )
}
