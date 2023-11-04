import React, { useState } from 'react'
import { Link } from 'react-scroll'

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const controlStyleString =
    'inline-flex items-center text-white hover:text-green-800 cursive tracking-widest select-none'

  return (
    <header className="fixed inset-x-2 top-0 flex flex-row  z-10 text-white  bg-black bg-opacity-10">
      <div className="hidden container mx-auto md:flex justify-center ">
        <nav className="flex py-4  space-x-8 ">
          <Link
            to="home"
            activeClass="active"
            smooth
            spy
            className={controlStyleString}
            style={{ cursor: 'pointer' }}
          >
            Home
          </Link>

          <Link
            to="about"
            activeClass="active"
            smooth
            spy
            className={controlStyleString}
            style={{ cursor: 'pointer' }}
          >
            About
          </Link>

          <Link
            to="home"
            activeClass="active"
            smooth
            spy
            style={{ cursor: 'pointer' }}
          >
            <img
              src={require('../assets/logoDark.png')}
              className="object-scale-down justify-center h-20 min-h-10"
              alt="logo"
            />
          </Link>
          <Link
            to="partners"
            activeClass="active"
            smooth
            spy
            className={controlStyleString}
            style={{ cursor: 'pointer' }}
          >
            Partners
          </Link>

          <Link
            to="contactUs"
            activeClass="active"
            smooth
            spy
            className={controlStyleString}
            style={{ cursor: 'pointer' }}
          >
            Contact Us
          </Link>
        </nav>
      </div>


      {/* Mobile menu button */}
      <div class="md:hidden flex ">
        <Link
          to="home"
          activeClass="active"
          className='h-20 justify-end py-8'
          smooth
          spy
          style={{ cursor: 'pointer' }}
        >
          <img
            src={require('../assets/logoDark.png')}
            className="object-scale-down  h-10 "
            alt="logo"
          />
        </Link>
        <button
          class="outline-none mobile-menu-button"
          className="absolute top-0 right-0 px-8 py-8 justify-end"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <svg
            class="w-8 h-8 text-white-500"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="cursive text-xl my-8 home-name">
              <a href="/">Home</a>
            </li>
            <li className="cursive text-xl my-8 home-name">
              <Link to="about" activeClass='active'>About</Link>
            </li>
            <li className="cursive text-xl my-8 home-name">
              <a href="#partners">Partners</a>
            </li>
            <li className="cursive text-xl my-8 home-name">
              <a href="#contactUs">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #014052;
        opacity: 0.9;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      .active {
        font-weight: 500;
        text-transform: uppercase;
        
      }
    

    `}</style>
    </header>
  )
}
