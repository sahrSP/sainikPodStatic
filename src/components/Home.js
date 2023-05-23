import React, { useEffect, useState } from 'react'
import bg from '../assets/bg.jpg'
import bgSmall from '../assets/bgSmall.jpeg'

export default function Home() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  })

  const [bgImage, setBgImage] = useState(bg)

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension)
    if (screenSize.dynamicWidth <= 770) {
      setBgImage(bgSmall)
    } else {
      setBgImage(bg)
    }
    return () => {
      window.removeEventListener('resize', setDimension)
    }
  }, [screenSize])

  return (
    <section id="home">
      <div
        class="bg-fixed bg-[center]"
        style={{
          backgroundImage: `url(${bgImage})`,
          borderBottomLeftRadius: '35rem',
          borderBottomRightRadius: '35rem',

        //   '@media screen and (min-width: 0px) and (max-width: 400px)': {
        //     backgroundImage: `url(${bgS})` /* show it on small screens */,
        //   },
        }}
      >
        <section
          className="relative flex place-content-center content-center min-h-screen pt-64 px-8 backdrop-brightness-50 "
          style={{
            borderBottomLeftRadius: '35rem',
            borderBottomRightRadius: '35rem',
          }}
        >
          <h1 className="text-5xl lg:text-6xl flex-initial text-white font-bold text-center  leading-none lg:leading-snug home-name">
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
