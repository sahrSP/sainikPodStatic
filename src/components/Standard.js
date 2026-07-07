import React from 'react'
import Waypoint from './Waypoint'
import useReveal from './useReveal'

const points = [
  {
    title: 'Safety, Sainik-driven',
    desc: 'Every chauffeur is an ex-serviceman of the Indian Armed Forces — composure, courtesy and an unshakeable sense of duty, formed over decades of service.',
  },
  {
    title: 'Zero tailpipe emissions',
    desc: 'The fleet is 100% electric. Every kilometre with SainikPod is a zero-tailpipe kilometre — a direct answer to the employee-commute line of your Scope 3 reporting.',
  },
  {
    title: 'A soldier’s second innings',
    desc: 'SainikPod exists to resettle ex-servicemen into dignified civilian careers. Every partnership funds a veteran family’s future.',
  },
  {
    title: 'Doorstep precision',
    desc: 'Pick-ups that arrive where they should, when they should. Punctuality here is not a service metric — it is a habit of service life.',
  },
  {
    title: 'Considered subscriptions',
    desc: 'Tailored plans with predictable costs, sized to your rosters and reviewed with you as your organisation grows.',
  },
  {
    title: 'A watchful control room',
    desc: 'Our control room follows every vehicle and every trip around the clock — live tracking, swift response, and a person on the line when you need one.',
  },
]

function PointItem({ title, desc, index }) {
  const ref = useReveal()
  return (
    <li ref={ref} className="reveal pt-8" style={{ transitionDelay: `${(index % 2) * 140}ms` }}>
      <div className="flex items-center gap-4">
        <span className="pod-ring" aria-hidden="true"></span>
        <h3 className="font-display font-normal uppercase tracking-luxe text-lg md:text-xl text-ink">
          {title}
        </h3>
      </div>
      <p className="text-slate leading-loose text-[15px] mt-4 md:pl-7">{desc}</p>
    </li>
  )
}

export default function Standard() {
  return (
    <section id="standard" className="bg-porcelain">
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-24 md:pt-36">
        <Waypoint
          label="The Sainik Standard"
          title="Discipline comes standard"
          kicker="Anyone can promise trained drivers. Only SainikPod places decades of armed-forces service at the wheel — and holds every journey to that standard."
        />
        <ul className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-8 divide-y md:divide-y-0 divide-[rgba(12,48,56,0.14)]">
          {points.map((p, i) => (
            <PointItem key={p.title} {...p} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
