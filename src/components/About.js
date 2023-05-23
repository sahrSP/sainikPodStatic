import React from 'react'
import car from '../assets/electricCar.svg'
import row1 from '../assets/row-1.png'
import row from '../assets/row.png'

export default function About() {
  return (
    <section id="about">
      <section className="justify-center pt-32 px-8 pt-12 select-none">
        <h2 className="text-4xl font-light text-gray-700  text-center leading-none lg:leading-snug lg:text-6xl select-none">
          Features
        </h2>
        <p className="text-xl font-light text-gray-700 pt-4  text-center leading-none lg:leading-snug lg:text-2xl select-none">100% Electric Fleet chauffered by Ex-Servicemen</p>
      </section>
      <div class=" pt-5 flex flex-col  ">
          <img src={row} alt="" className='prose-img  select-none'/>
          <img src={car} alt="" className='prose-img shrink w-1/2 py-5 select-none'/>
          <img src={row1} alt="" className='prose-img  select-none' />
          
        </div>
    </section>
  )
}

// <main>
//       <img
//         src="https://cdn.vox-cdn.com/thumbor/znw2FIDAIg1yK4SzJPHORaWfyoI=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11477517/shutterstock_678147802.jpg"
//         alt="monstera leaf"
//         className="absolute cover w-full h-full"
//       />
//       <section className="relative flex justify-center min-h-screen pt-12 lg: pt-64 px-8">
//         <h1 className="text-6xl text-white cursive font-bold leading-none lg:leading-snug home-name">Welcome to my Homepage</h1>
//       </section>
//     </main>
