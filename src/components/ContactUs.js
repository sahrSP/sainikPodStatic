import React from 'react'
import Hours from './Hours.js'

export default function About() {
  return (
    <section id="contactUs">
      <section className="justify-center pt-16 lg:pt-32  px-8 pt-12 select-none">
        <h2 className="text-4xl font-light text-gray-700  text-center leading-none lg:leading-snug lg:text-6xl select-none">
          Contact Us
        </h2>
        <p className="text-xl font-light text-gray-700 pt-4  text-center leading-none lg:leading-snug lg:text-2xl select-none">
          Better yet, see us in person!
        </p>
        <p className="pt-4 font-light text-gray-700  text-center leading-none lg:leading-snug lg:text-2xl select-none">
          We love our customers, so feel free to visit during normal business
          hours.
        </p>
      </section>

      <div class=" pt-10 grid grid-rows-1 gap-4 lg:grid-cols-2 lg:gap-4">
        <div className="justify-start p-20 order-last">
          <h1 className="text-xl font-light text-gray-700  text-left lg:text-3xl">
            SainikPod
          </h1>

          <p className="pt-4 font-light text-gray-700  text-left leading-none lg:leading-snug lg:text-2xl">
            No. 1340, 10th Cross Road, 2nd Stage, Stage 3, Indiranagar,
            Bengaluru, Bengaluru Urban, Karnataka, India
          </p>

          <h1 className="pt-10">
            <a
              className="font-light text-[#F7A422]  text-left  lg:text-2xl"
              href="tel:+918792424505"
            >
              +91 87924 24505
            </a>
          </h1>
          <h1 className="pt-2">
            <a
              className="font-light text-[#F7A422]  text-left  lg:text-2xl lowercase"
              href="mailto:partner@sainkpod.org"
            >
              partner@sainikpod.org
            </a>
          </h1>

          <h1 className="text-xl font-light text-gray-700 pt-10 text-left lg:text-3xl">
            Hours
          </h1>
          <Hours/>

          
        </div>

        <div>
          <iframe
            title="SainikPod Location"
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1340,%2011th%20Cross%20Rd,%20Stage%203,%20Indiranagar,%20Bengaluru,%20Karnataka%20560038+(SainikPod)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
              measure acres/hectares on map
            </a>
          </iframe>
        </div>
      </div>
    </section>
  )
}
