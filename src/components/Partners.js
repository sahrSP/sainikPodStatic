import React from 'react'
import clients from '../assets/clients.png'
export default function About() {
  return (
    <section id="partners">
      <section className="justify-center pt-32 lg:pt-64  px-8 pt-12 select-none ">
        <h2 className="text-4xl font-light text-gray-700   text-center leading-none lg:leading-snug lg:text-6xl select-none">
          Partners
        </h2>
        <p className="text-xl font-light text-gray-700 pt-4  text-center leading-none lg:leading-snug lg:text-2xl select-none">Electrify your business with SainikPod</p>
      </section>
      <div class=" pt-10 flex flex-col  ">
          <img src={clients} alt="" className='prose-img  select-none'/>
         
          
        </div>
    </section>
  )
}

