import React from 'react';
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import NavBar from './components/NavBar';
import Partners from "./components/Partners";


function App() {
  return (
    <BrowserRouter >
    <NavBar/>
    
      {/* <Routes className="content">
        <Route path='/' element={<Home/>}  exact/>
        <Route path='/about' element={<About/>} />
        <Route path='/partners' element={<Partners/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
      </Routes> */}

      <Home/>
      <About/>
      <Partners/>
      <ContactUs/>
      
    </BrowserRouter>
  )
  
}

export default App;
