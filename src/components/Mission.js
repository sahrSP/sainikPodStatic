import React from 'react'
import { Link } from 'react-scroll'
import Waypoint from './Waypoint'
import useReveal from './useReveal'
import useParallax from './useParallax'
import { SMOOTH_SCROLL } from './scrollConfig'

function MissionPanel({ label, title, children }) {
  const ref = useReveal()
  return (
    <article ref={ref} className="reveal md:px-12 first:md:pl-0 last:md:pr-0 py-10 md:py-0">
      <p className="font-body font-medium text-xs uppercase tracking-luxewide text-amber">
        {label}
      </p>
      <h3 className="font-display font-light uppercase tracking-luxe text-2xl md:text-3xl text-porcelain mt-6 leading-snug">
        {title}
      </h3>
      <div className="text-porcelain/75 leading-loose text-[15px] mt-6 space-y-4">{children}</div>
    </article>
  )
}

export default function Mission() {
  const ctaRef = useReveal()
  // the band's contents drift slower than the band — depth, like deep water
  const depthRef = useParallax(0.06, 'y')

  return (
    <section id="mission" className="px-3 md:px-5 mt-24 md:mt-36">
      {/* the deep band as an inset rounded slab, matching the hero canvas */}
      <div className="relative bg-deep rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden">
        {/* electric aurora drifting in the deep */}
        <div className="aurora aurora--drift w-[30rem] h-[30rem] -top-32 -right-32 opacity-[0.16]" style={{ background: '#35E0C2' }} aria-hidden="true"></div>
        <div className="aurora aurora--drift-late w-[24rem] h-[24rem] bottom-0 -left-32 opacity-[0.12]" style={{ background: '#F7A422' }} aria-hidden="true"></div>
        <div ref={depthRef} className="relative max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <Waypoint
          dark
          label="Mission"
          title="Two missions, one fleet"
          kicker="A single partnership that strengthens both halves of your ESG report — the environment your commute no longer burdens, and the veterans it employs."
        />

        <div className="mt-16 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[rgba(250,249,246,0.18)]">
          <MissionPanel label="Environment" title="Zero tailpipe. Every trip.">
            <p>
              Employee commuting is a reportable line in your company’s Scope 3
              emissions. SainikPod’s fleet is 100% electric — every kilometre your
              people ride with us is a zero-tailpipe kilometre, by design rather than
              by offset.
            </p>
            <p>No transition roadmap, no partial fleet, no fine print. Electric only, from day one.</p>
          </MissionPanel>

          <MissionPanel label="Society" title="A second tour of duty.">
            <p>
              India’s armed forces retire thousands of skilled, disciplined
              professionals every year. SainikPod gives them a dignified second
              innings — at the wheel, in the control room, and across our operations.
            </p>
            <p>
              Every contract funds veteran livelihoods — a social-impact story your
              ESG report can name, count and stand behind.
            </p>
          </MissionPanel>
        </div>

        {/* invitation */}
        <div ref={ctaRef} className="reveal border-t border-hairline-light mt-20 pt-16 text-center">
          <h3 className="font-display font-light uppercase tracking-luxe text-3xl md:text-4xl text-porcelain max-w-2xl mx-auto leading-snug">
            Move your people with SainikPod
          </h3>
          <p className="text-porcelain/70 text-[15px] leading-loose mt-5 max-w-lg mx-auto">
            Tell us about your commute, airport or fleet requirement, and our team
            will return with a proposal built for it.
          </p>
          <Link
            to="contact"
            {...SMOOTH_SCROLL}
            offset={-80}
            className="btn-glass btn-glass--dark cursor-pointer inline-block mt-10 font-body font-medium text-xs uppercase tracking-luxe px-10 py-4"
          >
            Request a proposal
          </Link>
        </div>
        </div>
      </div>
    </section>
  )
}
