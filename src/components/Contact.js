import React from 'react'
import Waypoint from './Waypoint'
import useReveal from './useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="bg-porcelain">
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-24 md:pt-36 pb-24">
        <Waypoint
          label="Contact"
          title="See us in person"
          kicker="Write to us, call us, or visit — we would be glad to receive you."
        />

        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-14 mt-16">
          {/* details */}
          <div className="space-y-12">
            <div>
              <p className="font-body font-medium text-xs uppercase tracking-luxewide text-slate">
                Address
              </p>
              <p className="text-ink text-lg font-light leading-relaxed mt-4">
                No. 1340, 10th Cross Road, 2nd Stage,
                <br />
                Stage 3, Indiranagar,
                <br />
                Bengaluru, Karnataka, India
              </p>
            </div>

            <div>
              <p className="font-body font-medium text-xs uppercase tracking-luxewide text-slate">
                Enquiries
              </p>
              <p className="mt-4">
                <a
                  href="tel:+918792424505"
                  className="font-display font-light text-2xl md:text-3xl text-ink hover:text-deep transition-colors"
                >
                  +91 87924 24505
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="mailto:partner@sainikpod.org"
                  className="font-body text-base text-deep underline decoration-amber decoration-1 underline-offset-4 hover:text-ink transition-colors"
                >
                  partner@sainikpod.org
                </a>
              </p>
            </div>

            <div>
              <p className="font-body font-medium text-xs uppercase tracking-luxewide text-slate">
                Hours
              </p>
              <dl className="mt-4 max-w-sm space-y-3">
                <div className="flex justify-between gap-6 border-b border-hairline pb-3">
                  <dt className="text-ink font-light">Monday – Friday</dt>
                  <dd className="text-slate">09:00 – 17:00</dd>
                </div>
                <div className="flex justify-between gap-6 border-b border-hairline pb-3">
                  <dt className="text-ink font-light">Saturday – Sunday</dt>
                  <dd className="text-slate">Closed</dd>
                </div>
              </dl>
              <p className="text-slate text-sm italic mt-4">
                The control room remains on duty around the clock.
              </p>
            </div>
          </div>

          {/* map in a rounded panel, matching the canvas radius system */}
          <div className="rounded-[1.75rem] md:rounded-[2rem] overflow-hidden border border-hairline min-h-[26rem]">
            <iframe
              title="SainikPod location — Indiranagar, Bengaluru"
              width="100%"
              height="100%"
              className="map-soft min-h-[26rem] block"
              style={{ border: 0 }}
              loading="lazy"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1340,%2011th%20Cross%20Rd,%20Stage%203,%20Indiranagar,%20Bengaluru,%20Karnataka%20560038+(SainikPod)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
