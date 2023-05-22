import React from 'react'
import car from '../assets/electricCar.svg'
import row1 from '../assets/row-1.png'
import row from '../assets/row.png'

export default function About() {
  return (
    <section id="about">
      <section className="justify-start lg:pt-32 px-8 pt-12 select-none">
        <h1 className="text-5xl text-gray-700  font-bold leading-none lg:leading-snug home-name select-none">
          About US
        </h1>
      </section>
      <div class=" pt-10 flex flex-col ">
          <img src={row} alt="" className='prose-img  select-none'/>
          <img src={car} alt="" className='prose-img shrink w-9/12  select-none'/>
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
