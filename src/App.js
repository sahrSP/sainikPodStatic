import React from 'react'
import NavBar from './components/NavBar'
import RouteRail from './components/RouteRail'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Solutions from './components/Solutions'
import Standard from './components/Standard'
import Mission from './components/Mission'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RoadDivider from './components/RoadDivider'

function App() {
  return (
    <>
      <NavBar />
      <RouteRail />
      <main>
        <Hero />
        {/* the page rides over the pinned hero like a rounded sheet */}
        <div className="relative z-10 bg-porcelain rounded-t-[1.75rem] md:rounded-t-[2.5rem] overflow-hidden">
          <Clients />
          <Solutions />
          <RoadDivider />
          <Standard />
          <Mission />
          <RoadDivider />
          <Contact />
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  )
}

export default App
