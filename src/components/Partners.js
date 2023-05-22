import React from 'react'

export default function Partners() {
  return (
    <section id="partners" className='conatiner'>
         <section
        className="relative flex min-h-screen lg:pt-32 px-8 "
    
      >
       <h1 className="text-6xl text-gray-700  font-bold leading-none lg:leading-snug home-name">
          Partner
        </h1>

        <img
        src={require('../assets/clients.png')}
        alt="Clients"
        className="absolute object-scale-down w-full h-full "

      />

        </section>
     
      
      
    </section>

  )
}
