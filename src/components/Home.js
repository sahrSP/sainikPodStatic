import React from 'react'
import bg from '../assets/bg.jpg'

export default function Home() {
  return (
    <section id="home">
     

      <div
        class="bg-fixed ..."
        style={{
          backgroundImage: `url(${bg})`,
          borderBottomLeftRadius: '35rem',
          borderBottomRightRadius: '35rem',
        }}
      >
        <section
          className="relative flex place-content-center content-center min-h-screen pt-64 px-8 backdrop-brightness-50 "
          style={{
            borderBottomLeftRadius: '35rem',
            borderBottomRightRadius: '35rem',
          }}
        >
          <h1 className="text-6xl flex-initial text-white font-bold text-center  leading-none lg:leading-snug home-name">
            Electrify Your Business with SainikPod
          </h1>
        </section>
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
